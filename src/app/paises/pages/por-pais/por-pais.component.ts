import { Component} from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string='';
  hayError: boolean = false;
  paises: Country[]=[]

  constructor( private paisService: PaisesService) { }

  buscar( termino:string){ 
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais( this.termino )
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

  sugerencias( termino: string ) {
    this.hayError = false;

  }

 
}
