import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Step1Page } from './step1.page';
import { Keyboard } from '@ionic-native/keyboard/ngx';

const routes: Routes = [
  {
    path: '',
    component: Step1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Step1Page],
  providers:[Keyboard]
})
export class Step1PageModule {}
