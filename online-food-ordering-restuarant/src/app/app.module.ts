import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ToastComponent } from './components/toast/toast.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { OrdersComponent } from './pages/orders/orders.component';

import { RouterModule } from '@angular/router';
import { DriverComponent } from './pages/driver/driver.component';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
// import { LandingComponent } from './components/landing/landing.component';




@NgModule({  
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ToastComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    BookingsComponent,
    OrdersComponent,
    ProductsComponent,
    DriverComponent,
  
  
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,

    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
