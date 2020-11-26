import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HeaderRoutes } from './header/header.router.module';
import { LoginComponent } from './login/login.component';
import { LoginCheckService } from './service/login.service';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {
    path: 'main',
    component: MainComponent,
  },
  ...HeaderRoutes,
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
