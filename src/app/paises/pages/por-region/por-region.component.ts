import { Component} from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA','SAARC'];
  regionActiva: string = '';
  paises: Country[]=[];



  constructor( private paisesService: PaisesService) { }
  
  getClaseCSS( region:string): string {
    return (region === this.regionActiva) ? 'btn btn-success':'btn-outline-success';

  }

  activarRegion( region:string ) {
    this.regionActiva = region;

    this.paisesService.buscarRegion(region)
    .subscribe( paises => this.paises = paises );
  }

  

}
