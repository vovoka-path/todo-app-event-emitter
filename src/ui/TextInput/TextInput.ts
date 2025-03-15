class TextInput {
  element: HTMLInputElement;
  constructor() {
    this.element = this.render();
  }
  render() {
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    return input;
  }
  destroy() {
    this.element.remove();
  }
}

export default TextInput;
