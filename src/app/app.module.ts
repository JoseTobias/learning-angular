import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SecondComponent } from './second/second.component';
import { NgIfForComponent } from './ng-if-for/ng-if-for.component';
import { HomeComponent } from './home/home.component';
import { CrudComponent } from './components/crud/crud.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LazyloadingModule } from './modules/lazyloading/lazyloading.module';
import { FatherComponent } from './components/father/father.component';
import { SonComponent } from './components/father/son/son.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    SecondComponent,
    NgIfForComponent,
    HomeComponent,
    CrudComponent,
    FatherComponent,
    SonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LazyloadingModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
