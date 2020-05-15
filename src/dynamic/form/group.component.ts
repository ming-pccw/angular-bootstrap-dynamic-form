import { Component, Input } from "@angular/core";
// import { FormGroup, ReactiveFormsModule } from "@angular/forms";

import { DynamicFormModel } from "./model";
import { DynamicControlType } from "../controltype";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "[dynamic-form-group]",
  templateUrl: "./group.component.html"
})
export class DynamicFormGroupComponent {
  @Input() column: DynamicFormModel<string>;
  @Input() form: FormGroup;
  controlType: object = DynamicControlType;

  ngOnInit() {
    console.log("Group", this.form);
  }

  //get isValid() {
  //return this.form.controls[this.column.key].valid;
  //}
}
