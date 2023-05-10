import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './College/home/home.component';
import { DepartComponent } from './College/depart/depart.component';
import { StudComponent } from './College/stud/stud.component';
import { StaffComponent } from './College/staff/staff.component';
import { LoginComponent } from './College/login/login.component';
import { AdmiComponent } from './College/admi/admi.component';
import { PrimeNgComponent } from './College/prime-ng/prime-ng.component';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [
    AppComponent,
    AdmiComponent,
    HomeComponent,
    DepartComponent,
    StudComponent,
    StaffComponent,
    LoginComponent,
    PrimeNgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
