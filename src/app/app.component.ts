import { Component } from "@angular/core";

import { TestService } from "./test.service";
import { Observable } from "rxjs";

import { DynamicLayoutModel } from "../dynamic/layout/model";
import { DynamicLayoutCoreComponent } from "../dynamic/layout/core.component";
import { Test2Service } from "./test2.service";
@Component({
  selector: "app-root",
  template: `
    <div>
      <h2>Angular bootstrap Dynamic Form</h2>
      <dynamic-layout [data]="data$ | async"></dynamic-layout>
    </div>
  `,
  providers: [TestService]
})
export class AppComponent {
  data$: Observable<DynamicLayoutModel<any>[]>;
  //form: Observable<DynamicFormComponent>;

  constructor(service: TestService) {
    this.data$ = service.getColumns();
    //this.form.submitHandler = (a,b): Observable<any> => {
    //console.log(a,b);
    //};
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
