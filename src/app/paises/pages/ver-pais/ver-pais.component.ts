import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country

  constructor( 
    
    private activatedRoute: ActivatedRoute,
    private paisesService: PaisesService
    
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
          switchMap( ({ id }) => this.paisesService.getPaisPorAlpha( id ) ),
          tap(console.log)
      )
      .subscribe( pais => this.pais = pais );

    // this.activatedRoute.params
    //   .subscribe ( ({ id }) => {
    //     console.log(id);

    //     this.paisesService.getPaisPorAlpha( id )
    //       .subscribe( pais => {
    //         console.log(pais);
    //       });

    //   });
  }

}
