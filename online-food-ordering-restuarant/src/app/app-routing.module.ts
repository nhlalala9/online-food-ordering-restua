import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupGuard } from './guards/signup.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
// import { LandingComponent } from './components/landing/landing.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  
  { path: 'restaurant/login', component: LoginComponent },
  {
    path: 'restaurant/register',
    component: RegisterComponent,
  },
  {path: 'restaurant/sidebar',component:SidebarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
