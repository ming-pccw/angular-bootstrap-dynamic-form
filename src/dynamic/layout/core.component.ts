import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, NgForm } from "@angular/forms";

import { DynamicModel } from "../model";
import { DynamicLayoutModel } from "./model";
import { DynamicFormModel } from "../form/model";
import { DynamicFormControlService } from "../form/control.service";
import { Observable } from "rxjs";

import { DynamicFromDropdown } from "../form/dropdown";
import { DynamicFromInput } from "../form/input";
import { DynamicFormGroupComponent } from "../form/group.component";
import { DynamicLayoutDomComponent } from "../layout/dom.component";

@Component({
  selector: "dynamic-layout",
  templateUrl: "./core.component.html",
  providers: [DynamicFormControlService]
})
export class DynamicLayoutCoreComponent implements OnInit {
  @Input()
  data: DynamicLayoutModel<string>[];
  //@Input()
  //submitHandler: (value: any, payload: any) => Observable<any>;

  layouts: DynamicLayoutModel<string>[];

  form: FormGroup;
  payLoad = "";
  columns: DynamicFormModel<string>[];

  loading = false;

  constructor(private qcs: DynamicFormControlService) {}

  ngOnInit() {
    console.log("ngOnInit >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    this.form = this.qcs.toFormGroup(this.data);
    console.log("core", this.form);
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ngOnInit");
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());

    // this.loading = true;
    // this.submitHandler(this.form.value, this.payLoad).subscribe(res => {
    //   this.loading = false;
    // });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
