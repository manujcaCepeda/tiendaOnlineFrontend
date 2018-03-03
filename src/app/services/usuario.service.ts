import { LoginStatus } from './../models/usuario';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

@Injectable()
export class UsuarioService {

  URL = 'http://127.0.0.1:8080/usuario';
  headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  guardarUsuario(newUser: Usuario) : Promise<LoginStatus> {
    const options = new RequestOptions({ headers: this.headers });
    return this.http.post(this.URL, newUser, options)
      .toPromise()
      .then(res => res.json())
      .catch((error: any) => {
        console.log("error---------> " + error.json());
        Observable.throw(error.json())
      });
  }

}
