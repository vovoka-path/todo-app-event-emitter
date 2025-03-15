// for example
export function render(html: string): ChildNode | null {
  if (typeof html !== 'string') {
    console.warn('Parameter "html" is not a string. Returning null.');
    return null;
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  if (doc.body.firstChild) {
    return doc.body.firstChild;
  } else {
    console.warn(
      'Could not parse HTML string into a DOM element. Returning null.'
    );
    return null;
  }
}
