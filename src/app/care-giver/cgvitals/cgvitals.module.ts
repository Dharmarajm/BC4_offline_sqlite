import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CgvitalsPage } from './cgvitals.page';
import { TranslateModule } from '@ngx-translate/core';

import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';  

import { CgVitalAnalyticsPage } from './cg-vital-analytics/cg-vital-analytics.page';
import { CgVitalFilterPage } from './cg-vital-filters/cg-vital-filters.page';
import { Toast } from '@ionic-native/toast/ngx';
import { cgvitalreading } from './cgvital-reading/cgvital-reading.page';
import { CalendarModule } from 'ion2-calendar';

const routes: Routes = [
  {
    path: '',
    component: CgvitalsPage
  },
  {
    path: 'cg-analytics',
    component: CgVitalAnalyticsPage
  },
  {
    path: 'cg-filter',
    component: CgVitalFilterPage
  },
  {
    path: 'cgvital-reading',
    component: cgvitalreading
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ReactiveFormsModule,
    CalendarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CgvitalsPage,CgVitalAnalyticsPage,CgVitalFilterPage,cgvitalreading],
  providers:[DatePipe,Toast],
})
export class CgvitalsPageModule {}
