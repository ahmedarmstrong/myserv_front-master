import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddUserRHRoutingModule } from './add-user-rh-routing.module';
import { AddUserRhComponent } from './add-user-rh/add-user-rh.component';


@NgModule({
  declarations: [
    AddUserRhComponent
  ],
  imports: [
    CommonModule,
    AddUserRHRoutingModule
  ]
})
export class AddUserRHModule { }
