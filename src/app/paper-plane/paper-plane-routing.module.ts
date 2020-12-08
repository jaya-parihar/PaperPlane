import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaperPlaneComponent } from './paper-plane.component';

const routes: Routes = [{ path: '', component: PaperPlaneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaperPlaneRoutingModule { }
