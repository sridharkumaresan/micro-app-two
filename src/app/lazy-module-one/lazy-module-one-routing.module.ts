import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyModuleOneComponent } from './lazy-module-one.component';

const routes: Routes = [
  { path: '', component: LazyModuleOneComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyModuleOneRoutingModule {}
