import { Articulo } from './../../models/articulo';
import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../../services/articulo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /*articulos: any[] = [
    {
      "titulo": "Titulo del Producto 1",
      "descripcion": "Descripcion del Producto xxxxx xxxxx xxxx",
      "precio": 100.10,
      "cantidad": 10,
      "descuento": 5,
      "url" : 
    }
  ];*/

  articulos: Articulo[] = [];

  constructor(private articuloService: ArticuloService) { }

  ngOnInit() {
      this.getArticulos();
  }

  getArticulos(){
    this.articuloService.getArticulos()
    .subscribe((respuesta: Articulo[]) => {
      this.articulos = respuesta;
    }, error => {
      console.log('Ocurrio un error al obtener la lista de articulo: ', error)
    })
  }
}
