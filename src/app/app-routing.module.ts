import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { TraineelistComponent } from './traineelist/traineelist.component';


const ChildRoutes: Routes = [
  {
    path:'add',
    component:AddComponent
  },
  {
    path:'update',
    component:UpdateComponent
  },
  {
    path:"",
    redirectTo:'list',
    pathMatch:"full"
  },
  {
    path:"list",
    component:TraineelistComponent
  },
];

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"",
    redirectTo:"login",
    pathMatch:"full"
  },
  {
    path:"dashboard",
    component:DashboardComponent,
    children:ChildRoutes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
