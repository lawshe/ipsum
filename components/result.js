function CopyButton({ paragraphs }) {
  function handleClick() {
    const text = paragraphs.join("\r\n\r\n");
    navigator.clipboard.writeText(text);
  }

  return (
    <div id="copy-container">
      <button className="btn-sm" onClick={handleClick}>
        Copy
      </button>
    </div>
  );
}

export default function Result({ paragraphs }) {
  return (
    <div id="result-container">
      <CopyButton paragraphs={paragraphs} />
      <div id="result">
        {paragraphs.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>
    </div>
  );
}
