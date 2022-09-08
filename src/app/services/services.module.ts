import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { FooterModule } from '../components/footer/footer.module';
import { PageHeaderModule } from '../components/page-header/page-header.module';
import { NavbarModule } from '../components/navbar/navbar.module';
import { ServicesComponent } from './services.component';


@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    NavbarModule,
    FooterModule,
    PageHeaderModule,
  ]
})
export class ServicesModule { }
