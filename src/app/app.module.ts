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
import { FormsModule } from '@angular/forms';
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
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
