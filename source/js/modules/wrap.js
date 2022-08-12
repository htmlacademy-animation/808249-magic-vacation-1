const MIN_DELAY_FOR_LETTER = 30;
const DEFAULT_DURATION = 500;

export default class Wrap {
  constructor({elementSelector, hasSeveraLines = false, delay = 0}) {
    this._duration = DEFAULT_DURATION;
    this._hasSeveraLines = hasSeveraLines;
    this._element = document.querySelector(elementSelector);
    this._delay = delay;

    this.prePareText();
  }

  random(min, max) {
    const random = Math.floor(Math.random() * (max - min) + min);

    return Math.floor(random / min) * min;
  }

  createWrapper(letter, wordLength, wordNumber) {
    const span = document.createElement(`span`);
    const delay = this.random(
        MIN_DELAY_FOR_LETTER,
        wordLength * MIN_DELAY_FOR_LETTER
    );

    span.textContent = letter;

    if (letter === ` `) {
      span.classList.add(`space`);
      return span;
    }

    span.style.animationDuration = `${this._duration}ms`;
    span.style.animationDelay = `${
      wordNumber * (wordLength * MIN_DELAY_FOR_LETTER) + delay + this._delay
    }ms`;

    return span;
  }

  prePareText() {
    if (!this._element) {
      return;
    }

    let text = this._element.textContent;

    if (this._hasSeveraLines) {
      text = text
        .trim()
        .split(` `)
        .filter((letter) => letter !== ``);
    } else {
      text = [text];
    }

    const content = text.reduce((fragmentParent, word, wordNumber) => {
      const wordElement = Array.from(word).reduce(
          (fragment, letter, index, arr) => {
            fragment.appendChild(
                this.createWrapper(letter, arr.length, wordNumber)
            );
            return fragment;
          },
          document.createDocumentFragment()
      );

      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(`animation-text`);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);

      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);
  }
}
