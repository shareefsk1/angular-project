import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactAddressComponent } from './contact-address/contact-address.component';
import { ContactPhoneComponent } from './contact-phone/contact-phone.component';


@NgModule({
  declarations: [
    ContactAddressComponent,
    ContactPhoneComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule
  ]
})
export class ContactUsModule { }
