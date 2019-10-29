import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CgdocVisitPage } from './cgdoc-visit.page';

import { TranslateModule } from '@ngx-translate/core';

import { MediaCapture, MediaFile, CaptureError, CaptureAudioOptions, CaptureImageOptions } from '@ionic-native/media-capture/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media/ngx';
import { CalendarModule } from 'ion2-calendar';
import { DatePipe } from '@angular/common';
import { Toast } from '@ionic-native/toast/ngx';

const routes: Routes = [
  {
    path: '',
    component: CgdocVisitPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    CalendarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CgdocVisitPage],
  providers: [MediaCapture,File,Media,FileTransfer,StreamingMedia,DatePipe,Toast]
})
export class CgdocVisitPageModule {}
