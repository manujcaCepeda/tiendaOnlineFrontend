import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ArticuloService {

  URL = 'http://localhost:8080/articulo';

  constructor(private http: Http) { }

  getArticulos(){
    return this.http.get(this.URL)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json.error || 'Server error'));
  }
}

