import React from "react";
import { CodeBlockProps } from "../../lib/interfaces/CodeBlock";
import {
  escapeHtml,
  highlightHtmlTags,
  highlightParenthesisWords,
  highlightSyntax,
  highlightCSSComment,
  highlightCSSClass,
  highlightCSSKey,
  highlightCSSValue,
} from "../../utils/helpers/helpers";

const CodeBlock: React.FC<CodeBlockProps> = ({
  numberOfLines,
  codeSnippet,
  type,
}) => {
  const codeSnippetLines = codeSnippet.split("\n").slice(0, numberOfLines);

  const renderColoredText = (text: string): string => {
    let escapedText = escapeHtml(text);

    switch (type) {
      case "html":
        escapedText = escapedText.split(" ").map(highlightHtmlTags).join(" ");
        escapedText = escapedText
          .split(" ")
          .map(highlightParenthesisWords)
          .join(" ");
        break;
      case "css":
        escapedText = highlightCSSComment(escapedText);
        escapedText = escapedText.split(" ").map(highlightHtmlTags).join(" ");
        escapedText = escapedText.split(" ").map(highlightCSSClass).join(" ");
        escapedText = escapedText.split(" ").map(highlightCSSKey).join(" ");
        escapedText = escapedText.split(" ").map(highlightCSSValue).join(" ");

        break;
      case "tsx":
        escapedText = escapedText.split(" ").map(highlightSyntax).join(" ");
        escapedText = escapedText.split(" ").map(highlightHtmlTags).join(" ");

      default:
        break;
    }
    return escapedText;
  };

  return (
    <>
      <div style={{ fontFamily: "monospace", whiteSpace: "pre" }}>
        {codeSnippetLines.slice(0, numberOfLines).map((line, index) => (
          <div key={index} style={{ display: "flex" }}>
            <span
              style={{
                width: "50px",
                textAlign: "right",
                color: "#a4a4a4",
              }}
            >
              {index + 1}
            </span>
            <span
              style={{ paddingLeft: "10px" }}
              dangerouslySetInnerHTML={{ __html: renderColoredText(line) }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default CodeBlock;
