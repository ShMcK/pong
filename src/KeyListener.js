export default class KeyListener {
  constructor() {
    this.pressedKeys = [];
    document.addEventListener('keydown', this.keydown.bind(this));
    document.addEventListener('keyup', this.keyup.bind(this));
  }
  keydown(event) {
    console.log('keydown', event);
  }
  keyup(event) {
    console.log('keyup', event);
  }
}
