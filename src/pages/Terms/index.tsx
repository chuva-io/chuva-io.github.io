import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Terms() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      const response = await fetch("/md/terms-and-conditions.md");
      const text = await response.text();
      setMarkdown(text);
    };
    fetchMarkdown();
  }, []);

  return (
    <div className="mx-auto prose">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}
