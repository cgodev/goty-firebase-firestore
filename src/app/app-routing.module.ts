import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GotysComponent } from './pages/gotys/gotys.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path:'', component: HomeComponent, },
  { path:'gotys', component: GotysComponent, },
  { path:'**', component: HomeComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
