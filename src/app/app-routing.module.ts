import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 
  
  { path: '', loadChildren: () => import('./paper-plane/paper-plane.module').then(m => m.PaperPlaneModule) }
  ,{ path: 'vendor', loadChildren:() => import('./vendor/vendor.module').then(m => m.VendorModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
