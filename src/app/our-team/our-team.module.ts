import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurTeamRoutingModule } from './our-team-routing.module';
import { FooterModule } from '../components/footer/footer.module';
import { NavbarModule } from '../components/navbar/navbar.module';
import { PageHeaderModule } from '../components/page-header/page-header.module';
import { OurTeamComponent } from './our-team.component';
import { TeamModule } from '../components/team/team.module';


@NgModule({
  declarations: [OurTeamComponent],
  imports: [
    CommonModule,
    OurTeamRoutingModule,
    FooterModule,
    NavbarModule,
    PageHeaderModule,
    TeamModule
  ]
})
export class OurTeamModule { }
