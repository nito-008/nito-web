import { cva } from "../../styled-system/css";

export const markdown = cva({
  base: {
    "& > p > img": {
      display: "block",
      marginInline: "auto",
    },
    "& > h2": {
      fontSize: "4xl",
      fontWeight: "700",
      paddingBottom: "3",
      marginTop: "32",
      paddingLeft: "12",
      marginBottom: "20",
      pos: "relative",
      textWrap: "unset",
      paddingRight: "0",
      borderBottom: "1px solid {colors.text.dark}",
      _before: {
        content: "'＃'",
        paddingRight: "2",
        pos: "absolute",
        left: "0",
      },
      _after: {
        content: "''",
        pos: "absolute",
        bottom: "-3px",
        left: "100%",
        width: "3",
        height: "3",
        bg: "text.dark",
        transform: "rotate(45deg)",
      },
    },
    "& > h3": {
      fontSize: "4xl",
      fontWeight: "bold",
      paddingBottom: "3",
      marginTop: "24",
      marginBottom: "20",
      borderBottom: "normal",
      pos: "relative",
    },
    "& > a, & > p a, & > ul a, & > ol a": {
      textDecoration: "underline",
      color: "text.link",
      _hover: {
        color: "text.gray",
      },
    },
    "& > p": {
      lineHeight: "1.75",
    },
    "& > p + p": {
      marginTop: "8",
    },
    "& pre": {
      padding: "8",
    },
    "& blockquote": {
      lineBreak: "anywhere",
      color: "bg",
      bg: "text.dark",
      padding: "8",
      borderRadius: "xl",
      display: "inline-block",
      lineHeight: "1.5",
      textAlign: "left",
      "& p": {
        margin: "0",
      },
    },
    "& .rlc-container": {
      display: "flex",
      flexDirection: "column-reverse",
      width: "100%",
      justifyContent: "space-between",
      color: "text",
      bg: "bg",
      border: "normal",
      borderColor: "lightgray",
      borderRadius: "3xl",
      textDecoration: "none",
      overflow: "hidden",
      transition: "border .3s",
      _hover: {
        borderColor: "gray",
        "& .rlc-title": {
          textDecoration: "underline",
        },
      },
      "& .rlc-info": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "8",
        marginBottom: "0",
        width: "100%",
        "& .rlc-title": {
          fontWeight: "600",
          textOverflow: "ellipsis",
          overflow: "hidden",
          lineClamp: "1",
        },
        "& .rlc-description": {
          fontSize: "2xl",
          color: "gray",
          lineClamp: "2",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        "& .rlc-url-container": {
          fontSize: "2xl",
          flexShrink: "0",
          lineClamp: "1",
          "& .rlc-favicon": {
            display: "none",
          },
        },
        "& div": {
          marginBottom: "0",
        },
      },
      "& .rlc-image-container": {
        aspectRatio: "1.91/1",
        "& img": {
          width: "100%",
          objectFit: "contain",
        },
      },
      sm: {
        height: "15rem",
        flexDirection: "row",
        "& .rlc-image-container": {
          "& img": {
            height: "100%",
            objectFit: "cover",
          },
        },
        "& .rlc-info": {
          width: "65%",
        },
      },
    },
    "& > p > img, > pre, > div, > blockquote, > .rlc-container, > table, > ul, > ol, & > video":
      {
        marginBlock: "16",
      },
    "& table": {
      borderCollapse: "collapse",
      "& th, td": {
        padding: "7",
        borderBottom: "normal",
      },
      "& thead": {
        "& th, td": {
          borderBottomWidth: "2px",
        },
      },
    },
    "& > ul": {
      marginLeft: "10",
      listStyleType: "disc",
    },
    "& > ol": {
      marginLeft: "7",
      listStyleType: "decimal",
    },
    "& > .button_container": {
      textAlign: "center",
    },
    "& .expressive-code .copy": {
      width: "5rem",
      height: "5rem",
    },
    "& :not(.expressive-code) code": {
      color: "#464b57",
      background: "#efebe5",
      paddingBlock: "1",
      paddingInline: "3",
      marginInline: "2",
      fontFamily: "Zen Maru Gothic",
      borderRadius: "xl",
    },
  },
});
