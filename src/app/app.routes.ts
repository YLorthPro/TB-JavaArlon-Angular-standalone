import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {Page404Component} from "./shared/page404/page404.component";

export const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'demo', loadChildren: () => import('./demo/demo.routes').then(m => m.demoRoutes)},
  {path:'404', component: Page404Component},
  {path:'**', redirectTo:'404'}
];
