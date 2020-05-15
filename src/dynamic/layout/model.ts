import { DynamicFormModel } from "../form/model";
import { DynamicModel } from "../model";
import { DynamicClass } from "../class";
import { DynamicStyle } from "../style";

export class DynamicLayoutModel<T> extends DynamicModel<T> {
  layouts?: DynamicLayoutModel<T>[] = [];
  columns?: DynamicFormModel<T>[] = [];
  controlType = "layout";

  constructor(
    options: {
      value?: T;
      layouts?: DynamicLayoutModel<T>[];
      columns?: DynamicFormModel<T>[];
      class?: DynamicClass;
      style?: DynamicStyle;
    } = {}
  ) {
    super(options);
    this.value = options.value;// === undefined ? "" : options.value;
    this.layouts = options.layouts === undefined ? [] : options.layouts;
    this.columns = options.columns === undefined ? [] : options.columns;
    this.class = options.class === undefined ? [] : options.class;
    this.style = options.style === undefined ? [] : options.style;
  }
}
