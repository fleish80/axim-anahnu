import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { contentRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(contentRoutes)],
})
export class ContentModule {}
