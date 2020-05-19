import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

//import { DynamicFormModel } from "../form/model";
import { DynamicLayoutModel } from "./model";

@Component({
  selector: "[dynamic-layout-dom]",
  templateUrl: "./dom.component.html"
})
export class DynamicLayoutDomComponent {
  @Input() data: DynamicLayoutModel<string>;
  @Input() form: FormGroup;
  ngOnInit() {
    //console.log("dom", this.form);
  }
}
