import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LazyModuleOneComponent } from './lazy-module-one/lazy-module-one.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'lazy-one',
        loadChildren: () =>
          import('./lazy-module-one/lazy-module-one.module').then(
            (m) => m.LazyModuleOneModule
          ),
      },
    ],
  },
  {
    path: '',
    redirectTo: 'micro-app-two',
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
