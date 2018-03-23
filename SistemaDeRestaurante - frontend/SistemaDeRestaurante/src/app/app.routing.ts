import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';


import { HomeComponent } from './components/home/home.component';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { PratosComponent } from './components/pratos/pratos.component';
import { CadastroRestauranteComponent } from './components/restaurantes/cadastro-restaurante/cadastro-restaurante.component';
import { CadastroPratoComponent } from './components/pratos/cadastro-prato/cadastro-prato.component';
import { EditarRestauranteComponent } from './components/restaurantes/editar-restaurante/editar-restaurante.component';
import { EditarPratoComponent } from './components/pratos/editar-prato/editar-prato.component';


const APP_ROUTES: Routes = [
    { path: 'restaurantes', component: RestaurantesComponent},
    { path: 'cadastroRestaurante', component: CadastroRestauranteComponent},
    { path: 'editarRestaurante/:id', component: EditarRestauranteComponent },
    { path: 'pratos', component: PratosComponent},
    { path: 'cadastroPrato', component: CadastroPratoComponent},
    { path: 'editarPrato/:id', component: EditarPratoComponent },
    { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);