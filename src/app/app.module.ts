import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { DirectivesComponent } from './directives/directives.component';
import { GpayComponent } from './gpay/gpay.component';
import { ProductsComponent } from './products/products.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule} from '@angular/common/http';
import { SbibankComponent } from './sbibank/sbibank.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { BoredomComponent } from './boredom/boredom.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { AboutUsModule } from './about-us/about-us.module';
import { StarsComponent } from './stars/stars.component';
import { ParentComponent } from './parent/parent.component';
import { ChildrenComponent } from './children/children.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { PricePipe } from './price.pipe';
import { AgePipePipe } from './age-pipe.pipe';
import { ImpDirective } from './imp.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    CalculatorComponent,
    HomeComponent,
    DataBindingComponent,
    RectangleComponent,
    DirectivesComponent,
    GpayComponent,
    ProductsComponent,
    VehicleComponent,
    SbibankComponent,
    FlipkartComponent,
    MailComponent,
    BoredomComponent,
    CreateVehicleComponent,
    CreateAccountComponent,
    CreateStudentComponent,
    CreateEmployeeComponent,
    VehicleDetailsComponent,
    BankDetailsComponent,
    StarsComponent,
    ParentComponent,
    ChildrenComponent,
    Sibling1Component,
    Sibling2Component,
    PricePipe,
    AgePipePipe,
    ImpDirective,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
