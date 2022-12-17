import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoredomComponent } from './boredom/boredom.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { GpayComponent } from './gpay/gpay.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SbibankComponent } from './sbibank/sbibank.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, children:[
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
          {path:"create-account", component:CreateAccountComponent}
        ]},
  
  {path:'', component: LoginComponent},
  {path:'**', component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
