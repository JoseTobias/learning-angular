import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SecondComponent } from './second/second.component';
import { NgIfForComponent } from './ng-if-for/ng-if-for.component';


const routes: Routes = [
  { path: 'first-component', component: DataBindingComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'if-for', component: NgIfForComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
