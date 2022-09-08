import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CauseComponent } from './cause.component';

const routes: Routes = [
  {
    path: '',
    component: CauseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CauseRoutingModule { }
