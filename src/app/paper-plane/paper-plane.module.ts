import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaperPlaneRoutingModule } from './paper-plane-routing.module';
import { PaperPlaneComponent } from './paper-plane.component';


@NgModule({
  declarations: [PaperPlaneComponent],
  imports: [
    CommonModule,
    PaperPlaneRoutingModule
  ]
})
export class PaperPlaneModule { }
