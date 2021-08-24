import { Component, OnInit } from '@angular/core';
import { debounceTime, switchMap, tap } from 'rxjs/operators';
import { TarjetaService } from '../../../../../../servicios/tarjeta.service';

@Component({
  selector: 'select-tarjeta',
  templateUrl: './select-tarjeta.component.html',
  styleUrls: ['./select-tarjeta.component.css']
})
export class SelectTarjetaComponent implements OnInit {

  constructor(
    private tarjetaServicio:TarjetaService
  ) { }

  ngOnInit(): void {
  }

  search(id:number){
    this.tarjetaServicio.findTarjet(id).pipe(
      switchMap(tarjet=> this.tarjetaServicio.findTarjet(id) ),
      // tap(tarjeta=> console.log(tarjeta)),
      debounceTime(2000)
    ).subscribe(tarjeta=> console.log(tarjeta));
  }
}
