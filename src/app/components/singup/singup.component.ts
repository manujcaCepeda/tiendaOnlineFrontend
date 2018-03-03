import { Usuario } from './../../models/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  usuario: Usuario;
  constructor() {
    this.usuario = new Usuario('', '', '', '', '', '', 0);
  }

  ngOnInit() {
  }

}
