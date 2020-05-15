import { DynamicFormModel } from "./model";
import { DynamicControlType } from "../controltype";

export class DynamicFormButton extends DynamicFormModel<string> {
  controlType = DynamicControlType.button;
  type: string;

  constructor(options: {} = {}) {
    super(options);
  }
}
