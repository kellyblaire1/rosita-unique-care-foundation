import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CauseRoutingModule } from './cause-routing.module';
import { CauseComponent } from './cause.component';
// import { NavbarModule } from '../components/navbar/navbar.module';
// import { PageHeaderModule } from '../components/page-header/page-header.module';
// import { FooterModule } from '../components/footer/footer.module';


@NgModule({
  declarations: [CauseComponent],
  imports: [
    CommonModule,
    CauseRoutingModule,
    // NavbarModule,
    // PageHeaderModule,
    // FooterModule
  ]
})
export class CauseModule { }
