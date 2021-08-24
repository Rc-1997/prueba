import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css'],
})
export class BarraLateralComponent {
  state: boolean = true;
  sidenav!: MatSidenav;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  expandir(sidenap: MatSidenav) {
    this.sidenav = sidenap;
    this.state = !this.state;
    // console.log(sidemap);
    // this.sidenav.toggle();
  }
  retraer(sidemap: MatSidenav) {
    this.state = !this.state;
    // console.log(sidemap);
    // this.sidenav.toggle();
  }

  nav() {
    this.router.navigate(['/protected/prueba']);
  }
}
