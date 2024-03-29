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
  convertUrlsToLinks,
  integrateGithubData,
  highlightJSON,
} from "../../utils/helpers/helpers";

const CodeBlock: React.FC<CodeBlockProps> = ({
  numberOfLines,
  codeSnippet,
  type,
  user,
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
        escapedText = escapedText.split(" ").map(highlightSyntax).join(" ");
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
        break;
      case "vue":
        escapedText = escapedText.split(" ").map(highlightSyntax).join(" ");
        escapedText = escapedText.split(" ").map(highlightHtmlTags).join(" ");
        escapedText = escapedText.split(" ").map(highlightCSSClass).join(" ");
        escapedText = escapedText
          .split(" ")
          .map(highlightParenthesisWords)
          .join(" ");
        escapedText = escapedText.split(" ").map(convertUrlsToLinks).join(" ");
        escapedText = escapedText
          .split(" ")
          .map((word) => integrateGithubData(word, user))
          .join(" ");
        break;
      case "json":
        escapedText = escapedText.split(" ").map(convertUrlsToLinks).join(" ");
        escapedText = highlightJSON(escapedText);

        break;
      default:
        break;
    }
    return escapedText;
  };

  return (
    <>
      <div className="font-mono overflow-x-auto overflow-y-auto whitespace-pre mt-2">
        {codeSnippetLines.slice(0, numberOfLines).map((line, index) => (
          <div key={index} className="text-xs ipadLandscape:text-sm">
            <span className="text-gray-400 p-2 m-2">{index + 1}</span>
            <span
              className="ml-2"
              dangerouslySetInnerHTML={{ __html: renderColoredText(line) }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default CodeBlock;
