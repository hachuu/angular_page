import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from 'app/main/main.component';
import { Menu1Component } from 'app/main/menu1/menu1.component';
import { Menu2Component } from 'app/main/menu2/menu2.component';
import { Menu3Component } from 'app/main/menu3/menu3.component';
import { Menu4Component } from 'app/main/menu4/menu4.component';
import { LoginCheckService } from 'app/service/login.service';
import { HeaderComponent } from '../header/header.component';


export const HeaderRoutes: Routes = [
  {
    path: 'main',
    // component: MainComponent,
    children: [
      { path: 'menu1', component: Menu1Component },
      { path: 'menu2', component: Menu2Component },
      { path: 'menu3', component: Menu3Component },
      { path: 'menu4', component: Menu4Component },
    ],
    canActivate: [LoginCheckService],
  }
];

export const HeaderRouterModule = RouterModule.forChild(HeaderRoutes);
