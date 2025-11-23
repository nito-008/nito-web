import { ContentScript } from "@frontmatter/extensibility";
import aws4 from "aws4";
import { join } from "node:path";
import matter from "gray-matter";
import { file, write } from "bun";
import { randomUUID } from "node:crypto";

const args = ContentScript.getArguments();

if (!args) {
  ContentScript.done("引数が見つかりません");
} else if (!args.frontMatter) {
  ContentScript.done("Frontmatterがありません");
} else if (!args.frontMatter["title"]) {
  ContentScript.done("タイトルがありません");
} else if (typeof args.frontMatter["title"] !== "string") {
  ContentScript.done("タイトルの型がstringではありません");
} else {
  const url = new URL(
    `${process.env.AWS_LAMBDA_BASE_URL as string}?title=${args.frontMatter.title}`,
  );
  const region = process.env.AWS_REGION;

  const opts = {
    host: url.host,
    path: url.pathname + url.search,
    service: "lambda",
    region: region,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  aws4.sign(opts, {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

  const response = await fetch(url, {
    method: opts.method,
    headers: opts.headers,
  });

  if (!response.ok) {
    ContentScript.done(
      `OGP画像の取得に失敗しました（${response.status} ${response.statusText}）`,
    );
  } else {
    const oldImagePath = args.frontMatter.image;
    const imageName = `${randomUUID()}.png`;
    const savePath = join("public/blog", imageName);
    await write(savePath, response);

    // FrontMatter書き換え
    const imagePath = `blog/${imageName}`;
    const mdFile = file(args.filePath);
    const content = await mdFile.text();

    const parsed = matter(content);
    parsed.data.image = imagePath;

    const newContent = matter.stringify(parsed.content, parsed.data);
    await write(args.filePath, newContent);

    // 古いOGP画像が存在していたら消す
    if (typeof oldImagePath == "string") {
      const oldImageFile = file(join("public", oldImagePath));

      if (await oldImageFile.exists()) {
        oldImageFile.delete();
      }
    }

    ContentScript.done("OGP画像を生成しました");
  }
}
