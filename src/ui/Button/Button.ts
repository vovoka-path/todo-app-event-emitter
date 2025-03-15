type ButtonHandler = (event: Event) => void;

// handler for example
class Button {
  title: string;
  handler: ButtonHandler | undefined;
  element: HTMLButtonElement;
  constructor(title: string, handler?: ButtonHandler) {
    this.title = title;
    this.handler = handler;
    this.element = this.render();
  }
  render() {
    const button = document.createElement('button');
    button.textContent = this.title;

    if (this.handler) {
      button.addEventListener('click', this.handler);
    }

    return button;
  }
  destroy() {
    if (this.handler) {
      // remove listener to avoid memory leaks
      this.element.removeEventListener('click', this.handler);
    }
    this.element.remove();
  }
}

export default Button;
