import { Injectable } from "@angular/core";

import { DynamicFromDropdown } from "../dynamic/form/dropdown";
import { DynamicFromInput } from "../dynamic/form/input";
import { DynamicFormModel } from "../dynamic/form/model";
import { DynamicFormButton } from "../dynamic/form/button";
import { DynamicLayoutModel } from "../dynamic/layout/model";
import { DynamicFromCaption } from "../dynamic/form/caption";
import { DynamicModel } from "../dynamic/model";
import { DynamicClass } from "../dynamic/class";
import { of } from "rxjs";
import { DynamicControlType } from "../dynamic/controltype";
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
              label: "col-md-5",
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
              label: "h2"
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
              label: "col-md-5",
              group: "col-md-7"
            }),
            key: "emailAddres23s",
            label: "one line input email ",
            type: "email",
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

    //console.log(JSON.stringify(data));
    // let b: DynamicLayoutModel<string>[] = [
    //   new DynamicLayoutModel({
    //     class: new DynamicClass({
    //       base: "row"
    //     }),
    //     style: "border:solid 1px;min-height: 20px",
    //     layouts: [
    //       new DynamicLayoutModel({
    //         class: new DynamicClass({
    //           base: "col-5"
    //         }),
    //         columns: columns2
    //       })
    //     ]
    //   })
    // ];
    return of(data);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
