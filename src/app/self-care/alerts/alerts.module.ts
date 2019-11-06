import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlertPage } from './alerts.page';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DatePipe } from '@angular/common';  
import { AddMedicationPage } from './add-medications/add-medications.page';
import { EditMedicationPage } from './edit-medications/edit-medications.page';
import { AddVitalsAlertPage } from './add-vitals-alert/add-vitals-alert.page';
import { EditVitalsAlertPage } from './edit-vitals-alert/edit-vitals-alert.page';
import { AddOthersPage } from './add-general/add-general.page';
import { EditOthersPage } from './edit-general/edit-general.page';


import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileTransfer} from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DataBaseSummaryProvider } from '../../sqlite-database/database_provider';

const routes: Routes = [
  {
    path: '',
    component: AlertPage,
    
  },
  {
  path: 'add-medications',
  component: AddMedicationPage,
  
},
{
path: 'edit-medications',
component: EditMedicationPage,

},
{
path: 'add-vitals',
component: AddVitalsAlertPage,

},
{
path: 'edit-vitals',
component: EditVitalsAlertPage,

},
{
path: 'add-general',
component: AddOthersPage,

},
{
path: 'edit-general',
component: EditOthersPage,

}
]  

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlertPage,AddMedicationPage,EditMedicationPage,AddVitalsAlertPage,
    EditVitalsAlertPage,AddOthersPage,EditOthersPage],
  providers:[
    DatePipe, ImagePicker, FileTransfer, File, WebView,Toast,Camera,
    LocalNotifications,
    DataBaseSummaryProvider
  ]
})
export class AlertPageModule {}
