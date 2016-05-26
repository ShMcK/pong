export default class KeyListener {
  constructor() {
    this.pressedKeys = [];
    document.addEventListener('keydown', this.keydown.bind(this));
    document.addEventListener('keyup', this.keyup.bind(this));
  }
  keydown(event) {
    this.pressedKeys[event.keyCode] = true;
  }
  keyup(event) {
    this.pressedKeys[event.keyCode] = false;
  }
  isPressed(key) {
    return !!this.pressedKeys[key]; // true or false
  }
  addKeyPressListener(keyCode, callback) {
    document.addEventListener('keypress', (event) => {
      if (event.keyCode === keyCode) {
        callback(event);
      }
    });
  }
}
