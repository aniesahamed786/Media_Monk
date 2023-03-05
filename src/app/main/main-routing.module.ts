import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EthchildComponent } from './ChildComponents/ethchild/ethchild.component';
import { FchildComponent } from './ChildComponents/fchild/fchild.component';
import { FirstComponent } from './ChildComponents/first/first.component';
import { FrchildComponent } from './ChildComponents/frchild/frchild.component';
import { FthchildComponent } from './ChildComponents/fthchild/fthchild.component';
import { LastComponent } from './ChildComponents/last/last.component';
import { SchildComponent } from './ChildComponents/schild/schild.component';
import { SvchildComponent } from './ChildComponents/svchild/svchild.component';
import { SxchildComponent } from './ChildComponents/sxchild/sxchild.component';
import { TrdchildComponent } from './ChildComponents/trdchild/trdchild.component';
import { MainComponent } from './Components/main/main.component';

const routes: Routes = [
  {
    path:'main',
    component:MainComponent,
    children:[
      {
        path:'F',
        component:FirstComponent
      }
      ,
      {
        path:'c1',
        component:FchildComponent
      },
      {
        path:'c2',
        component:SchildComponent
      },
      {
        path:'c3',
        component:TrdchildComponent
      },
      {
        path:'c4',
        component:FrchildComponent
      },
      {
        path:'c5',
        component:FthchildComponent
      },
      {
        path:'c6',
        component:SxchildComponent
      },
      {
        path:'c7',
        component:SvchildComponent
      },
      {
        path:'c8',
        component:EthchildComponent
      },
      {
        path:'L',
        component:LastComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
