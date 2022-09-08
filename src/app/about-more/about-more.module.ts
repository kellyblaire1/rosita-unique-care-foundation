import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMoreRoutingModule } from './about-more-routing.module';
import { AboutMoreComponent } from './about-more.component';
import { NavbarModule } from '../components/navbar/navbar.module';
import { FooterModule } from '../components/footer/footer.module';
import { PageHeaderModule } from '../components/page-header/page-header.module';


@NgModule({
  declarations: [AboutMoreComponent],
  imports: [
    CommonModule,
    AboutMoreRoutingModule,
    NavbarModule,
    FooterModule,
    PageHeaderModule,
  ],
  exports: [AboutMoreComponent]
})
export class AboutMoreModule { }
