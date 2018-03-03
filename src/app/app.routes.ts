import { StockComponent } from './components/stock/stock.component';
import { SingupComponent } from './components/singup/singup.component';
import { SinginComponent } from './components/singin/singin.component';
import { ComprasRealizadasComponent } from './components/compras-realizadas/compras-realizadas.component';
import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core/core";
import { HomeComponent } from "./components/home/home.component";
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { ProductoComponent } from './components/producto/producto.component';

export const router: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'compras-realizadas',
        component: ComprasRealizadasComponent
    },
    {
        path: 'ingreso',
        component: IngresoComponent
    },
    {
        path: 'producto',
        component: ProductoComponent
    },
    {
        path: 'singin',
        component: SinginComponent
    },
    {
        path: 'singup',
        component: SingupComponent
    },
    {
        path: 'stock',
        component: StockComponent
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);