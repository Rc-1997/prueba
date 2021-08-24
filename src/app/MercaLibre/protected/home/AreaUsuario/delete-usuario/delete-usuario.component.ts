import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-usuario',
  templateUrl: './delete-usuario.component.html',
  styleUrls: ['./delete-usuario.component.css']
})
export class DeleteUsuarioComponent implements OnInit {
@Input() usuarioid;
  constructor() { }

  ngOnInit(): void {

  }

}
