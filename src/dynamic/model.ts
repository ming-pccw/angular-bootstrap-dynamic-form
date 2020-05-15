import { DynamicClass } from "./class";
import { DynamicStyle } from "./style";

export class DynamicModel<T> {
  value: T;
  type?: string;
  controlType?: string;
  order: number = 1;
  class?: DynamicClass;
  style?: DynamicStyle;
  constructor(
    options: {
      value?: T;
      type?: string;
      controlType?: string;
      order?: number;
      class?: DynamicClass;
      style?: DynamicStyle;
    } = {}
  ) {
    this.value = options.value === undefined ? "" : options.value;
    this.type = options.type === undefined ? "" : options.type;
    this.controlType =
      options.controlType === undefined ? "" : options.controlType;
    this.order = options.order === undefined ? 1 : options.order;
    this.class =
      options.class === undefined ? new DynamicClass() : options.class;
    this.style =
      options.style === undefined ? new DynamicStyle() : options.style;
  }
}
