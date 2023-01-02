import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactAddressComponent } from './contact-address/contact-address.component';
import { ContactPhoneComponent } from './contact-phone/contact-phone.component';

const routes: Routes = [
  {path:'contact-address', component:ContactAddressComponent},
  {path:'contact-phone', component:ContactPhoneComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactUsRoutingModule { }
