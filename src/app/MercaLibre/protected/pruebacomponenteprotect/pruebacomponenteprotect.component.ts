import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize, mergeAll } from 'rxjs/operators';
import { usuario } from '../../IData/usuarios';

@Component({
  selector: 'app-pruebacomponenteprotect',
  templateUrl: './pruebacomponenteprotect.component.html',
  styleUrls: ['./pruebacomponenteprotect.component.css'],
})
export class PruebacomponenteprotectComponent implements OnInit {
  usuarios: usuario[] = [];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data
      .pipe(
        // mergeAll(),
        finalize(() => console.log(this.usuarios, 'finalize'))
      )
      .subscribe((prueba) => {
        console.log(prueba.usuarios);
        prueba.usuarios.forEach((user) => {
          this.usuarios.push(user);
        });
        // this.usuarios.push(prueba.usuarios);
        // this.prueba = prueba;
      });
  }
}
