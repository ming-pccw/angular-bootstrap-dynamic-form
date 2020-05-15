import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DynamicFormGroupComponent } from "../dynamic/form/group.component";
import { DynamicLayoutCoreComponent } from "../dynamic/layout/core.component";
import { DynamicLayoutDomComponent } from "../dynamic/layout/dom.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    DynamicFormGroupComponent,
    DynamicLayoutCoreComponent,
    DynamicLayoutDomComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  //constructor() {}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
