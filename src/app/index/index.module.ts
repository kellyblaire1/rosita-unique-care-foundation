import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { NavbarModule } from '../components/navbar/navbar.module';
import { FooterModule } from '../components/footer/footer.module';
import { TeamModule } from '../components/team/team.module';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    NavbarModule,
    FooterModule,
    TeamModule,
  ]
})
export class IndexModule { }
