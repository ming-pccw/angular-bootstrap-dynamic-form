import { DynamicModel } from "../model";

export class DynamicFormModel<T> extends DynamicModel<T> {
  key: string;
  label: string;
  required: boolean;
  readonly: boolean;
  options: { display: string; value: string }[] = [];
  placeholder?: string;
  constructor(
    options: {
      key?: string;
      label?: string;
      required?: boolean;
      readonly?: boolean;
      value?: T;
      controlType?: string;
      order?: number;
      type?: string;
      placeholder?: string;
    } = {}
  ) {
    super(options);
    this.value = options.value;// === undefined ? "" : options.value;
    this.key = options.key || "";
    this.label = options.label === "" ? undefined : options.label;
    this.required = !!options.required;
    this.readonly = !!options.readonly;
    this.placeholder = options.placeholder || "";
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
