import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { IconCheck, IconCopy } from "@tabler/icons-react";

type CodeBlockProps = {
  language: "javascript" | "typescript" | "python" | "bash";
  filename?: string;
  highlightLines?: number[];
  code: string;
  showLineNumbers?: boolean;
  allowCopy?: boolean;
  className?: string;
};

export default ({
  language,
  filename,
  code,
  highlightLines = [],
  showLineNumbers = false,
  allowCopy = true,
  className = "",
}: CodeBlockProps) => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    const textToCopy = code;
    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const copyButton = (
    <button
      onClick={copyToClipboard}
      className="flex items-center gap-1 font-sans text-xs transition-colors text-zinc-400 hover:text-zinc-200"
    >
      {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
    </button>
  );

  return (
    <div
      className={`${className} relative w-full p-4 font-mono text-sm rounded-lg bg-chuva-black ${filename ? "" : "pr-12"}`}
    >
      {filename && (
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between py-2">
            <div className="text-xs text-zinc-400">{filename}</div>
            {allowCopy && copyButton}
          </div>
        </div>
      )}
      {!filename && allowCopy && (
        <div className="absolute right-4 top-5">{copyButton}</div>
      )}
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        customStyle={{
          margin: 0,
          padding: 0,
          background: "transparent",
          fontSize: "0.875rem", // text-sm equivalent
        }}
        wrapLines={true}
        showLineNumbers={showLineNumbers}
        lineProps={(lineNumber) => ({
          style: {
            backgroundColor: highlightLines.includes(lineNumber)
              ? "rgba(255,255,255,0.1)"
              : "transparent",
            display: "block",
            width: "100%",
          },
        })}
        PreTag="div"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
