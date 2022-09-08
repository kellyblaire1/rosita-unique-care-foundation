import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'donate',
    loadChildren: () => import('./donate/donate.module').then(m => m.DonateModule)
  },
  {
    path: 'our-team',
    loadChildren: () => import('./our-team/our-team.module').then(m => m.OurTeamModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'media',
    loadChildren: () => import('./media/media.module').then(m => m.MediaModule)
  },
  {
    path: 'what-we-do',
    loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)
  },
  {
    path: 'about/:pagename',
    loadChildren: () => import('./about-more/about-more.module').then(m => m.AboutMoreModule)
  },
  {
    path:'',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

