import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisteruserComponent } from './components/registeruser/registeruser.component';

const routes: Routes = [
  {
	path: '',
    component: HomeComponent,
	pathMatch: 'full'
  },
  {
	path: 'registeruser',
    component: RegisteruserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
