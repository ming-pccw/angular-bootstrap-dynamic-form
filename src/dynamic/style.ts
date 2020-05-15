import { DynamicControlType } from "./controltype";

export class DynamicStyle {
  constructor(options: {} = {}) {
    for (let key in DynamicControlType) {
      if (options.hasOwnProperty(key)) {
        this[key] = options[key];
      } else {
        this[key] = "";
      }
    }
  }
}
