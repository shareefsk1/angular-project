import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutCeoComponent } from './about-ceo/about-ceo.component';
import { AboutDirectorComponent } from './about-director/about-director.component';



@NgModule({
  declarations: [
    AboutCompanyComponent,
    AboutCeoComponent,
    AboutDirectorComponent
  ],
  imports: [
    CommonModule
  ],

  exports:[
    AboutCompanyComponent
  ]
})
export class AboutUsModule { }
 