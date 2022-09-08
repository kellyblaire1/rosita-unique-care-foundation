import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMoreComponent } from './about-more.component';

const routes: Routes = [
  {
    path: '',
    component: AboutMoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutMoreRoutingModule { }
