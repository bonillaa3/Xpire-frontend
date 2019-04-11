import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaveExpComponent } from './save-exp/save-exp.component';

const routes: Routes = [
    { path: "addNew", component: SaveExpComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
