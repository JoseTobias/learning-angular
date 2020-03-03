import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SecondComponent } from './second/second.component';
import { NgIfForComponent } from './ng-if-for/ng-if-for.component';
import { HomeComponent } from './home/home.component';
import { CrudComponent } from './components/crud/crud.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'first-component', component: DataBindingComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'if-for', component: NgIfForComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
