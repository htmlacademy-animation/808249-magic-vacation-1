const MIN_DELAY_FOR_LETTER = 20;
const DEFAULT_DURATION = 500;
const DEFAULT_PROPERTY = `transform`;
const DEFAULT_CLASS_ANIMATION = `growth-animation`;

export default class Wrap {
  constructor({
    elementSelector,
    classAnimationActivation = DEFAULT_CLASS_ANIMATION,
    property = DEFAULT_PROPERTY,
    delay = 0,
  }) {
    this._duration = DEFAULT_DURATION;
    this._classAnimationActivation = classAnimationActivation;
    this._property = property;
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

    span.style.transitionProperty = this._property;
    span.style.transitionDuration = `${this._timer}ms`;
    span.style.transitionDelay = `${
      wordNumber * (wordLength * MIN_DELAY_FOR_LETTER) + delay + this._delay
    }ms`;

    return span;
  }

  prePareText() {
    if (!this._element) {
      return;
    }

    let text = this._element.textContent;

    if (!text.includes(` `)) {
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

  runAnimation() {
    if (!this._element) {
      return;
    }

    this._element.classList.add(this._classAnimationActivation);
  }

  destroyAnimation() {
    this._element.classList.remove(this._classAnimationActivation);
  }
}
