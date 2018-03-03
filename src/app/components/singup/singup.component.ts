import { Usuario, LoginStatus } from './../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  alertStyle = '';
  loginStatus = new LoginStatus('', '');
  usuario: Usuario;

  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.usuario = new Usuario('', '', '', '', '', '', 0);
  }

  ngOnInit() {
  }

  onRegister() {
    this.usuario.rol = { id: 3 };
    this.usuarioService.guardarUsuario(this.usuario)
      .then((status: LoginStatus) => {
        this.loginStatus.codigo = "INGRESO_EXITOSO";
        this.loginStatus.mensaje = "Ingreso Nuevo Usuario: Exitoso!";
        this.router.navigateByUrl('/singin');
      }).catch(error => {
        this.alertStyle = 'alert alert-danger';
        this.loginStatus.codigo = "USER_EXISTE";
        this.loginStatus.mensaje = "Ya existe un registro con su correo!";
      });
    this.alertStyle = 'alert alert-success';

  }
}
