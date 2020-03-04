import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { HomelazyComponent } from 'src/app/components/homelazy/homelazy.component';
import { FatherComponent } from 'src/app/components/father/father.component';


const routes: Routes = [
  {
    path: '',
    component: HomelazyComponent,
    children:[ {
        path: 'header',
        component: HeaderComponent
      },
      {
        path: 'footer',
        component: FooterComponent
      },
      {
        path: 'father',
        component: FatherComponent
      }
    ]
  },
];

@NgModule({
  declarations: [FooterComponent, HeaderComponent, HomelazyComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadingRoutingModule { }
