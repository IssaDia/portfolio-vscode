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
}) => {
  const codeSnippetLines = codeSnippet.split("\n").slice(0, numberOfLines);

  const renderColoredText = (text: string) => {
    let escapedText = escapeHtml(text);
    let highlightedLine = highlightCSSComment(escapedText);

    console.log(escapedText);

    return highlightedLine
      .split(" ")
      .map(highlightParenthesisWords)
      .map(highlightHtmlTags)
      .map(highlightSyntax)
      .map(highlightCSSComment)
      .map(highlightCSSClass)
      .map(highlightCSSKey)
      .map(highlightCSSValue)
      .join(" ");
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
