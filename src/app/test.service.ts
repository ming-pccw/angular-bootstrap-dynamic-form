import { Injectable } from "@angular/core";

import { DynamicFromDropdown } from "../dynamic/form/dropdown";
import { DynamicFromInput } from "../dynamic/form/input";
//import { DynamicFormModel } from "../dynamic/form/model";
import { DynamicFormButton } from "../dynamic/form/button";
import { DynamicLayoutModel } from "../dynamic/layout/model";
import { DynamicFromCaption } from "../dynamic/form/caption";
//import { DynamicModel } from "../dynamic/model";
import { DynamicClass } from "../dynamic/class";
import { of } from "rxjs";
//import { DynamicControlType } from "../dynamic/controltype";
import { DynamicFormRadio } from "../dynamic/form/radio";

@Injectable()
export class TestService {
  // TODO: get from a remote source of JSON or override for specific form
  getColumns() {
    let columns = [
      new DynamicFromDropdown({
        key: "brave",
        label: "options",
        options: [
          { display: "Apple", value: "apple" },
          { display: "Bear", value: "bear" },
          { display: "Cat", value: "cat" },
          { display: "Dog", value: "dog" }
        ],
        order: 3
      }),

      new DynamicFromInput({
        key: "firstName",
        label: "readonly test",
        readonly: true,
        value: "readonly value",
        order: 1
      }),

      new DynamicFromInput({
        key: "emailAddress",
        label: "Email ",
        type: "email",
        required: true,
        order: 2
      })
    ];
    let columns2 = [
      new DynamicFromDropdown({
        key: "brave2",
        label: "options",
        options: [
          { display: "Apple", value: "apple" },
          { display: "Bear", value: "bear" },
          { display: "Cat", value: "cat" },
          { display: "Dog", value: "dog" }
        ],
        order: 3
      }),

      new DynamicFromInput({
        key: "firstName2",
        label: "readonly test",
        readonly: true,
        value: "readonly value",
        order: 1
      }),

      new DynamicFromInput({
        key: "emailAddress2",
        label: "Email ",
        type: "email",
        required: true,
        order: 2
      })
    ];
    let columns3 = [
      new DynamicFromDropdown({
        key: "brave3",
        label: "options",
        options: [
          { display: "Apple", value: "apple" },
          { display: "Bear", value: "bear" },
          { display: "Cat", value: "cat" },
          { display: "Dog", value: "dog" }
        ],
        order: 3
      }),

      new DynamicFromInput({
        key: "firstName3",
        label: "readonly test",
        readonly: true,
        value: "readonly value",
        order: 1
      }),

      new DynamicFromInput({
        key: "emailAddress3",
        label: "Email ",
        type: "email",
        required: true,
        order: 2
      })
    ];
    columns = columns.sort((a, b) => a.order - b.order);
    let data: DynamicLayoutModel<string>[] = [
      new DynamicLayoutModel({
        class: new DynamicClass({
          base: "row"
        }),
        style: "border:solid 1px;min-height: 20px",
        layouts: [
          new DynamicLayoutModel({
            class: new DynamicClass({
              base: "col-4"
            }),
            columns: columns
          }),
          new DynamicLayoutModel({
            class: new DynamicClass({
              base: "col-5"
            }),
            columns: columns2
          })
        ]
      }),
      new DynamicLayoutModel({
        class: new DynamicClass({
          base: "col-8"
        }),
        columns: columns3
      }),
      new DynamicLayoutModel({
        class: new DynamicClass({
          base: "col-11"
        }),
        columns: [
          new DynamicFromInput({
            class: new DynamicClass({
              base: "row",
              label_container: "col-md-5",
              group: "col-md-7"
            }),
            key: "numberF",
            label: "Input Number only",
            type: "number",
            required: true,
            order: 2
          })
        ]
      }),
      new DynamicLayoutModel({
        class: new DynamicClass({
          base: "border-top my-3"
        })
      }),
      new DynamicLayoutModel({
        class: new DynamicClass({
          base: "form-control alert alert-warning"
        }),
        columns: [
          new DynamicFromCaption({
            label: "Dynamic From Label With Class",
            class: new DynamicClass({
              label_container: "h2"
            }),
            value: "Dynamic From Caption"
          })
        ]
      }),
      new DynamicLayoutModel({
        class: new DynamicClass({
          base: "col-6"
        }),
        columns: [
          new DynamicFromCaption({
            label: "Caption label",
            value: "Caption with alert class",
            class: new DynamicClass({
              base: "",
              caption: "alert alert-info"
            })
          }),
          new DynamicFormRadio({
            label: "Dynamic Form Radio Button",
            options: [
              { display: "Apple", value: "apple" },
              { display: "Bear", value: "bear" },
              { display: "Cat", value: "cat" },
              { display: "Dog", value: "dog" }
            ],
            key: "rado",
            type: "rado",
            value: "cat"
          })
        ]
      }),
      new DynamicLayoutModel({
        class: new DynamicClass({
          base: "form-control"
        }),
        columns: [
          new DynamicFromInput({
            class: new DynamicClass({
              base: "row",
              label_container: "col-md-5",
              group: "col-md-7",
              label_after_input: true
            }),
            key: "emailAddres23s",
            label: "one line input email, label after input box",
            type: "email",
            required: true
          })
        ]
      }),
      new DynamicLayoutModel({
        class: new DynamicClass({
          base: "border-top my-3"
        })
      }),
      new DynamicLayoutModel({
        class: new DynamicClass({
          base: "row alert alert-danger"
        }),
        columns: [
          new DynamicFromCaption({
            label: "checkbox",
            value: "css with form-group mb-0 ml-2 d-inline-block",
            class: new DynamicClass({
              label: "h4",
              group: ""
            })
          })
        ]
      }),
      new DynamicLayoutModel({
        class: new DynamicClass({
          base: "col-12"
        }),
        columns: [
          new DynamicFromInput({
            class: new DynamicClass({
              base: "form-check",
              input: "form-check-input",
              label_container: "form-check-label",
              label: "",
              label_after_input: true
            }),
            key: "checkbox1",
            label: "checkbox ",
            type: "checkbox",
            value: "checkme",
            required: true
          })
        ]
      }),
      new DynamicLayoutModel({
        class: new DynamicClass({
          base: "row"
        }),
        columns: [
          new DynamicFromInput({
            class: new DynamicClass({
              base: "form-check col-4",
              group: "form-group mb-0 ",
              input: "form-check-input",
              label_container: "form-check-label",
              label: "",
              label_after_input: true
            }),
            key: "checkbox2a",
            label: "checkbox 2a",
            type: "checkbox",
            value: "checkme",
            required: true
          }),
          new DynamicFromInput({
            class: new DynamicClass({
              base: "form-check col-4",
              group: "form-group mb-0 ml-2 d-inline-block",
              input: "d-inline-block",
              label_container: "form-check-label d-inline-block",
              label: ""
            }),
            key: "checkbox2b",
            label: "checkbox 2b",
            type: "checkbox",
            value: "checkme",
            required: true
          }),
          new DynamicFromInput({
            class: new DynamicClass({
              base: "form-check col-4",
              group: "form-group mb-0 ml-2 d-inline-block",
              input: "d-inline-block",
              label_container: "form-check-label d-inline-block",
              label: ""
            }),
            key: "checkbox2c",
            label: "checkbox 2c",
            type: "checkbox",
            value: "checkme",
            required: true
          })
        ]
      }),
      new DynamicLayoutModel({
        class: new DynamicClass({
          base: "border-top my-3"
        })
      }),
      new DynamicLayoutModel({
        class: new DynamicClass({
          base: "row"
        }),
        columns: [
          new DynamicFormButton({
            key: "submit",
            type: "submit",
            value: "submit",
            class: new DynamicClass({
              button: "btn btn-primary"
            })
          })
        ]
      })
    ];
    console.log("INPUT JSON TO STATIC FORM, SAMPLE @ app/test.service.ts:");
    console.log("START >>>>>>>>>>>>>>>>>>>>>>>>");
    console.log(JSON.stringify(data));
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<< END");
    return of(data);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
