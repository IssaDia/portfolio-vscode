import { categoryColors } from "../../lib/data/categoryColors";
import { htmlTags } from "../../lib/data/htmlTags";
import { socialTags } from "../../lib/data/socialTags";
import { syntaxHighlighting } from "../../lib/data/syntaxHightlighting";

export const capitalizeFirstLetter = (word: string): string => {
  if (word.length === 0) {
    return word;
  }

  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const escapeHtml = (text: string): string => {
  return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

export const highlightHtmlTags = (word: string) => {
  const htmlTagMatch = word.match(/&lt;(\/?)(\w+)(.*?)/);

  if (htmlTagMatch) {
    const tag = htmlTagMatch[2];

    const color = htmlTags.includes(tag) ? "#569cd6" : "#4dc9b0";
    return word.replace(tag, `<span style="color: ${color};">${tag}</span>`);
  }
  return word;
};

export const highlightParenthesisWords = (word: string) => {
  if (typeof word !== "string") {
    return word;
  }
  const parenthesisMatch = word.match(/"([^"]*)"/);

  if (parenthesisMatch) {
    return `<span style="color: #ce9178;">${word}</span>`;
  }

  return word;
};

export const highlightCSSComment = (text: string): string => {
  console.log(text);
  return text.replace(
    /[\s\S]*?\*\/$/g,
    (match) => `<span style="color: #6a9955;">${text}</span>`
  );
};

export const highlightCSSClass = (line: string): string => {
  return line.replace(
    /^\.(\w+)/g,
    `<span style="color: #d7ba7d;">${line}</span>`
  );
};

export const highlightCSSKey = (line: string): string => {
  if (socialTags.includes(line)) {
    return `<span style="color: ${categoryColors.htmlTags};">${line}</span>`;
  }
  return line;
};

export const highlightCSSValue = (line: string): string => {
  return line.replace(
    /(https?:\/\/\S+)|(\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b)/g,
    (match, url, email) => {
      if (url) {
        return `<a href="${url}" target="_blank" style="color: #b5cea8; text-decoration: none;">${url}</a>`;
      } else if (email) {
        return `<a href="mailto:${email}" style="color: #b5cea8; text-decoration: none;">${email}</a>`;
      }
      return match;
    }
  );
};

export const getCategoryColor = (category: string) => {
  return categoryColors[category] || "inherit";
};

export const highlightSyntax = (word: string) => {
  for (const [category, words] of Object.entries(syntaxHighlighting)) {
    if (words.includes(word)) {
      const color = getCategoryColor(category);
      return `<span style="color: ${color};">${word}</span>`;
    }
  }
  return word;
};

export const convertUrlsToLinks = (word: string): string => {
  const urlRegex =
    /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi;

  return word.replace(urlRegex, (url) => {
    return `<a href="${url}" target="_blank" style="color: ${categoryColors.modulePath}; text-decoration: underline;">${url}</a>`;
  });
};

export const integrateGithubData = (word: string, user: any) => {
  if (!user) return word;

  return word
    .replace(/githubUsername/g, user.login || "Loading...")
    .replace(/nbRepos/g, user.public_repos || "0")
    .replace(/nbFollowers/g, user.followers || "0");
};

export const highlightJSON = (text: string) => {
  return text
    .replace(
      /^{\s*|\s*}$/g,
      (match) => `<span style="color: yellow;">${match}</span>`
    )

    .replace(
      /[{}]/g,
      (match) =>
        `<span style="color: ${categoryColors.structural};">${match}</span>`
    )

    .replace(
      /^{/g,
      `<span style="color: ${categoryColors.modulePath};">"$1"</span>`
    )

    .replace(
      /"([^"]+)":/g,
      `<span style="color: ${categoryColors.identifiers};">"$1"</span><span> : </span>`
    )
    .replace(
      /"([^"]+)",/g,
      `<span style="color: ${categoryColors.modulePath};">"$1"</span><span>,</span>`
    )
    .replace(
      /: "([^"]+)"/g,
      `: <span style="color: ${categoryColors.modulePath};">"$1"</span>`
    )
    .replace(/\[/g, `<span style="color: ${categoryColors.keywords};">[</span>`)
    .replace(
      /\]/g,
      `<span style="color: ${categoryColors.keywords};">]</span>`
    );
};
