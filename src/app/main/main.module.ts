import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './Components/main/main.component';
import { FchildComponent } from './ChildComponents/fchild/fchild.component';
import { SchildComponent } from './ChildComponents/schild/schild.component';
import { TrdchildComponent } from './ChildComponents/trdchild/trdchild.component';
import { FrchildComponent } from './ChildComponents/frchild/frchild.component';
import { FthchildComponent } from './ChildComponents/fthchild/fthchild.component';
import { SxchildComponent } from './ChildComponents/sxchild/sxchild.component';
import { SvchildComponent } from './ChildComponents/svchild/svchild.component';
import { EthchildComponent } from './ChildComponents/ethchild/ethchild.component';
import { FirstComponent } from './ChildComponents/first/first.component';
import { LastComponent } from './ChildComponents/last/last.component';


@NgModule({
  declarations: [
    MainComponent,
    FchildComponent,
    SchildComponent,
    TrdchildComponent,
    FrchildComponent,
    FthchildComponent,
    SxchildComponent,
    SvchildComponent,
    EthchildComponent,
    FirstComponent,
    LastComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
