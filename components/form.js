import generate from "../utils/generate";
import Result from "./result";
import { useState } from "react";

export default function Form() {
  const [paragraphs, setParagraphs] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    const paragraphs = event.target.paragraphs.value;
    const result = generate({ nParagraphs: paragraphs });
    setParagraphs(result);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="paragraphs">Paragraphs</label>
        <input
          type="number"
          id="paragraphs"
          min="1"
          max="100"
          defaultValue="1"
        />
        <input type="submit" value="Generate" />
      </form>
      {paragraphs && <Result paragraphs={paragraphs} />}
    </div>
  );
}
