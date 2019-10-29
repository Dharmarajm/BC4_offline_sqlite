import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppointmentsPage } from './appointments.page';
import { TranslateModule } from '@ngx-translate/core';
import { AddAppointmentPage } from './add-appointment/add-appointment.page';
import { EditAppointmentPage } from './edit-appointment/edit-appointment.page';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';  
import { Toast } from '@ionic-native/toast/ngx';

import { DataBaseSummaryProvider } from '../../sqlite-database/database_provider';

const routes: Routes = [
  {
    path: '',
    component: AppointmentsPage
  },
  {
    path: 'add-appointment',
    component: AddAppointmentPage
  },
  {
    path: 'edit-appointment',
    component: EditAppointmentPage
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
  declarations: [AppointmentsPage,
                 AddAppointmentPage,
                 EditAppointmentPage
  ],
  providers:[
    DatePipe,
    LocalNotifications,
    Toast,
    DataBaseSummaryProvider
  ]
})
export class AppointmentsPageModule {}
