import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[]=[]

  constructor( private capitalService: PaisesService ) { }

  buscar( termino:string){ 
    this.hayError = false;
    this.termino = termino;

    this.capitalService.buscarCapital( this.termino )
      .subscribe({
        next: paises => {
          console.log(paises);
          this.paises = paises;
        },
        

       error: err => {
        this.hayError = true;
        this.paises = [];
      }
      });
  }


}
