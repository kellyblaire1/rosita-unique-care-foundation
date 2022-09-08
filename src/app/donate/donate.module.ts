import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonateRoutingModule } from './donate-routing.module';
import { DonateComponent } from './donate.component';
import { FooterModule } from '../components/footer/footer.module';
import { NavbarModule } from '../components/navbar/navbar.module';
import { PageHeaderModule } from '../components/page-header/page-header.module';


@NgModule({
  declarations: [DonateComponent],
  imports: [
    CommonModule,
    DonateRoutingModule,
    FooterModule,
    NavbarModule,
    PageHeaderModule
  ]
})
export class DonateModule { }
