import { phrases } from "../data/phrases";

function _getPhrase() {
  return phrases[Math.floor(Math.random() * phrases.length)];
}

function _getLength() {
  const min = 5;
  const max = 10;

  return Math.floor(Math.random() * (max - min + 1) + min);
}
function _generateSentence() {
  const wordsInSentence = _getLength();
  const words = new Set();

  while (words.size < wordsInSentence) {
    const phrase = _getPhrase();
    const phraseWords = phrase.split(" ");
    phraseWords.forEach(word => words.add(word));
  }

  const sentence = Array.from(words).join(" ");
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

function _generateParagrah() {
  const sentencesInParagraph = _getLength();
  const sentences = [];

  while (sentences.length < sentencesInParagraph) {
    const sentence = _generateSentence();
    sentences.push(sentence);
  }
  let paragraph = Array.from(sentences).join(". ");
  paragraph += ".";
  return paragraph;
}

export default function generate(preferences) {
  const { nParagraphs } = preferences;
  const paragraphs = [];

  while (paragraphs.length < nParagraphs) {
    const paragraph = _generateParagrah();
    paragraphs.push(paragraph);
  }
  return paragraphs;
}
