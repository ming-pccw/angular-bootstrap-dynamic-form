import { DynamicFormModel } from "./model";
import { DynamicControlType } from "../controltype";

export class DynamicFromCaption extends DynamicFormModel<string> {
  controlType = DynamicControlType.caption;
  type: string;

  constructor(options: {} = {}) {
    super(options);
  }
}
