import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CgprescriptionsPage } from './cgprescriptions.page';
import { TranslateModule } from '@ngx-translate/core';

import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CgViewPrescriptionPage } from './cg-view-prescription/cg-view-prescription.page'
import { CgImageModalPage } from './cg-image-modal/cg-image-modal.page'

import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File  } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Toast } from '@ionic-native/toast/ngx';

const routes: Routes = [
  {
    path: '',
    component: CgprescriptionsPage
  },
  {
    path: 'view-cg-prescription',
    component: CgViewPrescriptionPage
  },
  {
    path: 'cg-image-modal',
    component: CgImageModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CgprescriptionsPage,CgViewPrescriptionPage,CgImageModalPage],
  providers:[
      DatePipe,
      ImagePicker,
      Crop,
      FileTransfer,
      File,
      WebView,
      Toast
  ]
})
export class CgprescriptionsPageModule {}
