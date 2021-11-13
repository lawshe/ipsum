import expect from "expect";
import generate from "../../utils/generate";

describe("generate", function() {
  test("should generate a paragraph", function() {
    const nParagraphs = 1;
    const result = generate({ nParagraphs });
    expect(result.length).toEqual(nParagraphs);
    expect(result[0].length > 1).toBe(true);
  });

  it("should generate multiple paragraphs", function() {
    const nParagraphs = 11;
    const result = generate({ nParagraphs });
    expect(result.length).toEqual(nParagraphs);
  });
});
