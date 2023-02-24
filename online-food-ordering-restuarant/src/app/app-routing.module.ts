import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupGuard } from './guards/signup.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'restuarant/dashboard', component: DashboardComponent },
  { path: 'restuarant/login', component: LoginComponent },
  {
    path: 'restuarant/register',
    component: RegisterComponent,
  },
  { path: 'restuarant/bookings', component: BookingsComponent },

  { path: 'restuarant/products', component: ProductsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
