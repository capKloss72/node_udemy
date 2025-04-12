export default class Emitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  emit(event) {
    if (this.events[event]) {
      this.events[event].forEach((item) => item());
    }
  }
}
