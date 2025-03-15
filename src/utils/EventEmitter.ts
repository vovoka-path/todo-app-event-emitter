export class EventEmitter<T> {
  private events: { [eventName: string]: ((data: T) => void)[] } = {};

  on(eventName: string, callback: (data: T) => void) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(callback);
  }

  emit(eventName: string, data: T) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((callback) => callback(data));
    }
  }
}
