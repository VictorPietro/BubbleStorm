import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { RegisteruserComponent } from './components/registeruser/registeruser.component';
import { RegistergameComponent } from './components/registergame/registergame.component';
import { DistributorComponent } from './components/distributor/distributor.component';
import { StoreComponent } from './components/store/store.component';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { RecordsService } from './records.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisteruserComponent,
    RegistergameComponent,
    DistributorComponent,
    StoreComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
