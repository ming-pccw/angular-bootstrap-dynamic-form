import { DynamicFormModel } from "./model";
import { DynamicControlType } from "../controltype";

export class DynamicFromInput extends DynamicFormModel<string> {
  controlType = DynamicControlType.input;
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options["type"] || "";
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
