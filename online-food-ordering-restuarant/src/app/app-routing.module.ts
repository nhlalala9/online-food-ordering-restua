import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupGuard } from './guards/signup.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { DriverComponent } from './pages/driver/driver.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'restuarant/dashboard', component: DashboardComponent },
  { path: 'restuarant/login', component: LoginComponent },
  {
    path: 'restuarant/register',
    component: RegisterComponent,
  },
  {
    path: 'restuarant/products', component:ProductsComponent
  },
  { path: 'restuarant/bookings', component: BookingsComponent },
  { path: 'restuarant/orders', component: OrdersComponent },
  { path: 'restuarant/drivers', component: DriverComponent },
  { path: 'restuarant/customers', component: CustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
