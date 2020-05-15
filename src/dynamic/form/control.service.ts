import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { DynamicLayoutModel } from "../layout/model";
import { DynamicFormModel } from "./model";

@Injectable()
export class DynamicFormControlService {
  group = {};
  toFormGroup(data: DynamicLayoutModel<string>[]) {
    this.recursiveFormGroup(data);
    console.log(this.group);
    return new FormGroup(this.group);
  }

  recursiveFormGroup(data: DynamicLayoutModel<string>[]) {
    data.forEach(d => {
      if (d.columns !== undefined) {
        d.columns.forEach(column => {
          var form = column.required
            ? new FormControl(column.value || "", Validators.required)
            : new FormControl(column.value || "");
          this.group[column.key] = form;
        });
      }
      if (d.layouts !== undefined) {
        this.recursiveFormGroup(d.layouts);
      }
    });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
