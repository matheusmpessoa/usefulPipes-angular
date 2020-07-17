import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SHARED_PIPES } from './pipes';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SHARED_PIPES
  ],
  exports: [
    SHARED_PIPES
  ],
  providers: [
  ]
})
export class PipeModule { }
// Import PipeModule on your project
