import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { NavbarModule } from '../components/navbar/navbar.module';
import { FooterModule } from '../components/footer/footer.module';
import { PageHeaderModule } from '../components/page-header/page-header.module';
import { MediaComponent } from './media.component';


@NgModule({
  declarations: [MediaComponent],
  imports: [
    CommonModule,
    MediaRoutingModule,
    NavbarModule,
    FooterModule,
    PageHeaderModule
  ]
})
export class MediaModule { }
