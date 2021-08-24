import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Itelefono } from '../../../../../../IData/telefonos';
import { TelefonoService } from '../../../../../../servicios/telefono.service';

@Component({
  selector: 'mod-telefono',
  templateUrl: './ModTelefono.component.html',
  styleUrls: ['./ModTelefono.component.css'],
})
export class ModTelefonoComponent implements OnInit {
  @Input() Telefono: Itelefono;
  modTelefono: FormGroup;
  @Input() ref;
  constructor(
    private fb: FormBuilder,
    private telefonoService: TelefonoService
  ) {}

  ngOnInit(): void {
    this.modTelefono = this.fb.group({
      Numero: new FormControl(this.Telefono.tel, [
        Validators.required,
        Validators.pattern('[+0-9]{9}$'),
      ])
    });
  }
  guardar(): void {
    if (this.modTelefono.valid) {
      this.Telefono.tel = this.modTelefono.controls['Numero'].value;
      this.telefonoService.updateTelefono(this.Telefono);
      if (this.ref) {
        this.ref.close();
      }
    }
  }
}
