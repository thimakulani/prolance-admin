import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoriesComponent} from "./categories/categories.component";
import {ServicesComponent} from "./services/services.component";
import {UsersComponent} from "./users/users.component";
import { ProfileComponent } from './profile/profile.component';
import { QueriesComponent } from './queries/queries.component';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'categories', component: CategoriesComponent},
  {path:'services', component: ServicesComponent},
  {path:'users', component: UsersComponent},
  {path:'profile', component: ProfileComponent},
  {path:'queries', component: QueriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
