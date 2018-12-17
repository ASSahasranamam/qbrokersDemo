import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ViewComponent} from './view/view.component';
import {GraphViewComponent} from './graph-view/graph-view.component';

const routes: Routes = [
  { path: '', component: ViewComponent },
  { path: 'graph', component: GraphViewComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]
})
export class AppRoutingModule { }
