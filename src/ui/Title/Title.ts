class Title {
  tag: string;
  title: string;
  element: HTMLElement;
  constructor(tag: string, title: string) {
    this.tag = tag;
    this.title = title;
    this.element = this.render();
  }
  render() {
    const title = document.createElement(this.tag);
    title.textContent = this.title;
    return title;
  }
  destroy() {
    this.element.remove();
  }
}

export default Title;
