import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './about-us/about-company/about-company.component';
import { AuthenticationGuard } from './authentication.guard';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { BoredomComponent } from './boredom/boredom.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { GpayComponent } from './gpay/gpay.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { NotifyGuard } from './notify.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { ProductsComponent } from './products/products.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SbibankComponent } from './sbibank/sbibank.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthenticationGuard], children:[
          {path:"home" , component: HomeComponent},
          {path:'calculator', component:CalculatorComponent},
          {path:"data-binding", component:DataBindingComponent},
          {path:"rectangle" , component:RectangleComponent},
          {path:"directives", component:DirectivesComponent},
          {path:"Gpay", component:GpayComponent},
          {path:"products",component:ProductsComponent},
          {path:"vehicle", component:VehicleComponent},
          {path:"sbibank", component:SbibankComponent},
          {path:"flipkart",component:FlipkartComponent},
          {path:"mail", component:MailComponent},
          {path:"bd",component:BoredomComponent},
          {path:'create-vehicle', component: CreateVehicleComponent},
          {path:"create-account", component:CreateAccountComponent},
          {path:'create-student', component:CreateStudentComponent , canDeactivate:[NotifyGuard]},
          {path:"create-employee", component:CreateEmployeeComponent , canDeactivate:[NotifyGuard]},
          {path:'vehicle-details/:id', component:VehicleDetailsComponent},
          {path:'edit-vehicle/:id', component:CreateVehicleComponent},
          {path:'bank-details/:id', component:BankDetailsComponent},
          {path:'edit-bank/:id', component:CreateAccountComponent},
          {path:'about-company', component:AboutCompanyComponent},
          {path:'parent' , component:ParentComponent},
          {path: 'sibling1', component:Sibling1Component},
          {path: 'sibling2', component:Sibling2Component},
          {
            path: 'contact-us',
            loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule)
          }
        ]},
  
  {path:'', component: LoginComponent},
  {path:'**', component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
