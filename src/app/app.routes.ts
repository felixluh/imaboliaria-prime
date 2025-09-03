import { Routes } from '@angular/router';
import { LoginComponent } from './views/public/login/login.component';
import { AppComponent } from './app.component'; // Importe o seu componente principal

export const routes: Routes = [
  { path: '', component: AppComponent }, // Rota para a página inicial
  { path: 'login', component: LoginComponent }, // Rota para a página de login
  // Outras rotas virão aqui depois
];