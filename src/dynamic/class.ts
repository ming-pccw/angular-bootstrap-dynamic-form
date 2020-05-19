import { DynamicControlType } from "./controltype";

export class DynamicClass {
  static defaultClass: Object = {
    group: "dynamic-default-group form-group",
    base: "dynamic-default-base",
    label: "dynamic-default-label col-form-label",
    label_container: "dyamic-default-label_container ",
    button: "dynamic-default-button",
    caption: "dynamic-default-caption",
    dropdown: "dynamic-default-dropdown form-control",
    radio: "dynamic-default-radio",
    input: "dynamic-default-input form-control",
    label_after_input: false
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
