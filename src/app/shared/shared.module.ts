import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  exports: [
    HttpModule
  ]
})
export class SharedModule { }
