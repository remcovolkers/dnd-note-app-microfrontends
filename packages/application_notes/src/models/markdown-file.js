export default class MarkdownFile {
  markdownText;
  owner;

  constructor(markdownText, owner) {
    this.owner = owner;
    this.markdownText = markdownText;
  }

  toJson() {
    JSON.stringify({
      text: this.markdownText,
      owner: this.owner,
    });
  }

  toHtml() {}
}
