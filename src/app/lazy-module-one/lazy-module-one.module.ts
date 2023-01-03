import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyModuleOneComponent } from './lazy-module-one.component';
import { LazyModuleOneRoutingModule } from './lazy-module-one-routing.module';

@NgModule({
  declarations: [LazyModuleOneComponent],
  imports: [CommonModule, LazyModuleOneRoutingModule],
})
export class LazyModuleOneModule {}
