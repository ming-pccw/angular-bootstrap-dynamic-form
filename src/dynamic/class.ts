import { DynamicControlType } from "./controltype";

export class DynamicClass {
  static defaultClass: Object = {
    group: "form-group",
    base: "",
    label: "",
    button: "",
    caption: "",
    dropdown: "form-control",
    radio: "",
    input: "form-control"
  };

  constructor(options: {} = {}) {
    for (let key in DynamicControlType) {
      if (options.hasOwnProperty(key)) {
        this[key] = options[key];
      } else {
        this[key] = DynamicClass.defaultClass[key];
      }
    }
  }
}
