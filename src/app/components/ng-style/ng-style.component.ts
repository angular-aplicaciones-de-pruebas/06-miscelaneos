import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <!--<p [ngStyle]="{'font-size':tamano+'px'}">
      Ejemplo 1 ... esta es una etiqueta HTML
    </p>
    <p [style.fontSize]="'40px'">
      Ejemplo 2 ... esta es Otra etiqueta HTML
    </p>-->

    <p [style.fontSize.px]="tamano">
      Ejemplo 3 ... esta es Otra etiqueta HTML
    </p>

    <button class="btn btn-primary" [style.margin.px]="'5'" (click) = "tamano = tamano + 5">
    <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-primary" (click) = "tamano = tamano - 5">
    <i class="fa fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano:number = 30;

  constructor() { }

  ngOnInit() {
  }

}
