import { DynamicFormModel } from "./model";
import { DynamicControlType } from "../controltype";

export class DynamicFormRadio extends DynamicFormModel<string> {
  controlType = DynamicControlType.radio;

  constructor(options: {} = {}) {
    super(options);
    this.options = options["options"] || [];
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
