import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CghealthDiaryPage } from './cghealth-diary.page';
import { TranslateModule } from '@ngx-translate/core';

import { MediaCapture, MediaFile, CaptureError, CaptureAudioOptions, CaptureImageOptions } from '@ionic-native/media-capture/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';
import { Toast } from '@ionic-native/toast/ngx';

const routes: Routes = [
  {
    path: '',
    component: CghealthDiaryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
     TranslateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CghealthDiaryPage],
  providers: [MediaCapture,File,Media,FileTransfer,StreamingMedia,Toast]
})
export class CghealthDiaryPageModule {}
