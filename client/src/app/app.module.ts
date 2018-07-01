import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { RegisteruserComponent } from './components/registeruser/registeruser.component';
import { RegistergameComponent } from './components/registergame/registergame.component';
import { DistributorComponent } from './components/distributor/distributor.component';
import { StoreComponent } from './components/store/store.component';
import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { MessagesComponent } from 'src/app/components/messages/messages.component';
import { GenerosComponent } from 'src/app/components/generos/generos.component';
import { HttpClientModule } from '@angular/common/http';
import { RecordsService } from './records.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisteruserComponent,
    RegistergameComponent,
    DistributorComponent,
    StoreComponent,
    UserComponent,
    MessagesComponent,
    GenerosComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    FormsModule,
  ],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
