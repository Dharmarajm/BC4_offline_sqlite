import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrescriptionsPage } from './prescriptions.page';
import { TranslateModule } from '@ngx-translate/core';
//import { PipesModule } from '../self-common-service/pipe.module';

import { AddPrescriptionPage } from './add-prescription/add-prescription.page'
import { EditPrescriptionPage } from './edit-prescription/edit-prescription.page'
import { ViewPrescriptionPage } from './view-prescription/view-prescription.page'
import { ImageModalPage } from './image-modal/image-modal.page'

import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File  } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Toast } from '@ionic-native/toast/ngx';

import { DataBaseSummaryProvider } from '../../sqlite-database/database_provider';


const routes: Routes = [
  {
    path: '',
    component: PrescriptionsPage
  },
  {
    path: 'add-prescription',
    component: AddPrescriptionPage
  },
  {
    path: 'edit-prescription',
    component: EditPrescriptionPage
  },
  {
    path: 'view-prescription',
    component: ViewPrescriptionPage
  },
  {
    path: 'image-modal',
    component: ImageModalPage
  }
];

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      //PipesModule,
      ReactiveFormsModule,
      TranslateModule,
      RouterModule.forChild(routes)
  ],
  declarations: [PrescriptionsPage,
      AddPrescriptionPage, 
      EditPrescriptionPage,
      ViewPrescriptionPage,
      ImageModalPage
  ],
  providers:[DatePipe,
      ImagePicker,
      Crop,
      FileTransfer,
      File,
      WebView,
      Camera,
      Toast,
      DataBaseSummaryProvider
  ]
})
export class PrescriptionsPageModule {}
