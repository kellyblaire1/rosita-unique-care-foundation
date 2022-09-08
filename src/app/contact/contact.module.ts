import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { NavbarModule } from '../components/navbar/navbar.module';
import { FooterModule } from '../components/footer/footer.module';
import { PageHeaderModule } from '../components/page-header/page-header.module';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    NavbarModule,
    PageHeaderModule,
    FooterModule,
  ]
})
export class ContactModule { }
