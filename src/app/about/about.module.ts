import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { NavbarModule } from '../components/navbar/navbar.module';
import { FooterModule } from '../components/footer/footer.module';
import { PageHeaderModule } from '../components/page-header/page-header.module';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    NavbarModule,
    PageHeaderModule,
    FooterModule,
  ]
})
export class AboutModule { }
