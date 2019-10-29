import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CgalertsPage } from './cgalerts.page';
import { TranslateModule } from '@ngx-translate/core';

import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';  
import { Toast } from '@ionic-native/toast/ngx';

const routes: Routes = [
  {
    path: '',
    component: CgalertsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CgalertsPage],
  providers:[DatePipe,Toast]
})
export class CgalertsPageModule {}
