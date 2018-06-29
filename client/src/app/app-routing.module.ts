import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisteruserComponent } from './components/registeruser/registeruser.component';
import { RegistergameComponent } from './components/registergame/registergame.component';
import { DistributorComponent } from './components/distributor/distributor.component';
import { StoreComponent } from './components/store/store.component';

const routes: Routes = [
  {
	path: '',
    component: HomeComponent,
	pathMatch: 'full'
  },
  {
	path: 'registeruser',
    component: RegisteruserComponent
  },
  {
  path: 'registergame',
    component: RegistergameComponent
  },
  {
  path: 'distributor',
   component: DistributorComponent
  },
  {
  path: 'store',
   component: StoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
