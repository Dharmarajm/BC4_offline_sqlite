// import { Component , OnInit , NgZone } from '@angular/core';
// import { Router,ActivatedRoute } from '@angular/router';
// import { ModalController, ToastController } from '@ionic/angular';
// import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media/ngx';
// import { File,FileEntry, IFile } from '@ionic-native/file/ngx';
// import { Media, MediaObject } from '@ionic-native/media/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';

// @Component({
//   selector: 'app-health-diary-play',
//   templateUrl: 'health-diary-play.page.html'
// })
// export class healthDiaryPlay {
  
//     audioTrack:boolean=false;
//     audio:any;
    
//     tabBar:any;
    
//     message:any;
//     mediaTimer:any;

//     tracks: any;
//     playFile:MediaObject
//     currentTrack: any;
//     progressInterval: any;
    
//     constructor(private media: Media,private file: File,private streamingMedia: StreamingMedia,private router: Router,public modalController: ModalController,public toastController: ToastController,public route:ActivatedRoute, private statusBar: StatusBar) {
//         //this.playValue=this.navParams.get('value');
       
//         this.route.queryParams.subscribe(params => {
          
//           this.tracks = JSON.parse(params['value']);
          
//           this.currentTrack = this.tracks[0];
//         })
//         this.tabBar = document.getElementById('myTabBar');
//         this.tabBar.style.display = 'none';
//     }

//     ngOnInit() { }

//     ionViewWillEnter() {
//       this.statusBar.backgroundColorByHexString('#ff68ab');
//     }

//     close(){
//       this.modalController.dismiss();
//     }

//     stop(){
//         this.streamingMedia.stopAudio();
//     }
    
//     pause(){
//       this.streamingMedia.pauseAudio();
//     }

//     resume(){
//       this.streamingMedia.resumeAudio();
//     }


//     playTrack(track){

//         // First stop any currently playing tracks

//         for(let checkTrack of this.tracks){

//             if(checkTrack.playing){
//                 this.pauseTrack(checkTrack);
//             }

//         }

//         track.playing = true;
//         //let url='http://182.72.104.66:8101'+track['event_assets'][0]['url'];
//         let url="https://www.computerhope.com/jargon/m/example.mp3";
//         console.log(url)
//         url=localStorage.getItem("play");
//         this.playFile=this.media.create(url);
//         console.log(this.playFile)
//         let duration = this.playFile.getDuration();
//         console.log(duration);  
//         this.playFile.onStatusUpdate.subscribe(status => { 
//             this.message=this.message+" > onStatusUpdate="+status;

//             if (status.toString()=="1") { //player start
        
//                 let self=this;
//                 this.mediaTimer = setInterval(function(){  //here the set interval function to refresh status 
//                     let duration=self.playFile.getDuration();
//                     self.message=self.message+" > duration="+duration;
                                
//                 }, 500);
//             }

//             if (status.toString()=="4") { // player end running
//                 if (this.mediaTimer !=null) {
//                     //clearInterval(this.mediaTimer);    // (*) don t do clearInterval here, or your ionic will not work, see below
//                     //TODO here : handle html, remove "playing" message
//                 }
//             }

//         }); 

//         //this.playFile.onStatusUpdate.subscribe(status => console.log(status));
//         this.playFile.onSuccess.subscribe(() => console.log('Action is successful'));
//         this.playFile.onError.subscribe(error => console.log('Error!', error));
//         this.audioTrack=true;
        
//         this.currentTrack = track;

//         // Simulate track playing
//         this.progressInterval = setInterval(() => {

//             track.progress < 100 ? track.progress++ : track.progress = 0;

//         }, 1000);

//     }

//     pauseTrack(track){

//         track.playing = false;
         
//         this.playFile.pause();
//         this.playFile.getCurrentPosition().then((position) => {
//           console.log(position);
//         });
//         this.playFile.onStatusUpdate.subscribe(status => console.log(status));
//         this.audioTrack=false;
//         clearInterval(this.progressInterval);

//     }

//     nextTrack(){
//         if(this.audioTrack==true){
//           this.playFile.stop();
//         }
//         let index = this.tracks.indexOf(this.currentTrack);
//         index >= this.tracks.length - 1 ? index = 0 : index++;

//         this.playTrack(this.tracks[index]);

//     }

//     prevTrack(){
//         if(this.audioTrack==true){
//           this.playFile.stop();
//         }
//         let index = this.tracks.indexOf(this.currentTrack);
//         index > 0 ? index-- : index = this.tracks.length - 1;

//         this.playTrack(this.tracks[index]);
//     }


//     ionViewWillLeave(){
//      if(this.audioTrack==true){
//        this.audioTrack=false;
//        this.playFile.stop();
//        this.playFile.release();
//      }
//      this.tabBar.style.display = 'flex';
//     } 
  
 
// }

import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {
  NavController,
  LoadingController,
  Platform,
  ToastController
} from '@ionic/angular';
import { DatePipe } from '@angular/common';

import {
  FileTransfer,
  FileTransferObject
} from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-common-care-giver-play',
    templateUrl: 'common-care-giver-play.page.html',
    styleUrls: ['./common-care-giver-play.scss'],
 })
 export class commonCareGiverPlay implements OnInit {
  title = 'Health Diary Records';
  filename:any;
  description:any;
  curr_playing_file: MediaObject;
  storageDirectory: any;
  tabBar: any;

  is_playing: boolean = false;
  is_in_play: boolean = false;
  is_ready: boolean = false;

  message: any;
  
  //tracks: any;
  currentTrack: any;

  duration: any = -1;
  position: any = 0;

  get_duration_interval: any;
  get_position_interval: any;
  environment:any;
  show_event:any;
  constructor(
    private platform: Platform,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private file: File,
    private transfer: FileTransfer,
    private media: Media,
    private datePipe: DatePipe,
    public route:ActivatedRoute,
   // private router: Router,
    private statusBar: StatusBar
  ) {
    this.platform.ready().then(() => {
      if (this.platform.is('ios')) {
        this.storageDirectory = this.file.dataDirectory;
      } else if (this.platform.is('android')) {
        this.storageDirectory = this.file.externalDataDirectory;
      } else {
        this.storageDirectory = this.file.cacheDirectory;
      }
    });
    this.environment = environment.ImageUrl;
    this.route.queryParams.subscribe(params => {
      let track = JSON.parse(params['current']);
      console.log(track)
      this.currentTrack = track;
      this.description = this.currentTrack['description'];
      this.show_event = this.currentTrack['event_name'];
      console.log(this.show_event )
      
    })
  }

  ngOnInit() {
    this.prepareAudioFile();
  }
  
  ionViewWillEnter() {
    this.statusBar.backgroundColorByHexString('#000000');
    this.tabBar = document.getElementById('myTabBar1');
    this.tabBar.style.display = 'none';
  }

  prepareAudioFile() {
    //let url ='https://ia800207.us.archive.org/29/items/MLKDream/MLKDream_64kb.mp3';

      let url=this.environment+this.currentTrack['event_assets'][0]['url'];
      console.log(url)
    this.platform.ready().then(() => {
      let current_url = this.currentTrack['event_assets'][0]['url'];
      let split = current_url.split('/');
      console.log(split)
      this.filename =  split[split.length-1];
      console.log(this.filename)
      this.file
        .resolveDirectoryUrl(this.storageDirectory)
        .then(resolvedDirectory => {
          // inspired by: https://github.com/ionic-team/ionic-native/issues/1711
          console.log('resolved  directory: ' + resolvedDirectory.nativeURL);
          this.file
            .checkFile(resolvedDirectory.nativeURL, this.filename)
            .then(data => {
              if (data == true) {
                // exist
                this.getDurationAndSetToPlay();
              } else {
                // not sure if File plugin will return false. go to download
                console.log('not found!');
                throw { code: 1, message: 'NOT_FOUND_ERR' };
              }
            })
            .catch(async err => {
              console.log('Error occurred while checking local files:');
              console.log(err);
              if (err.code == 1) {
                // not found! download!
                console.log('not found! download!');
                let loadingEl = await this.loadingCtrl.create({
                  message: 'Downloading the song from the web...'
                });
                loadingEl.present();
                const fileTransfer: FileTransferObject = this.transfer.create();
                fileTransfer
                  .download(url, this.storageDirectory + this.filename)
                  .then(entry => {
                    console.log('download complete' + entry.toURL());
                    loadingEl.dismiss();
                    this.getDurationAndSetToPlay();
                  })
                  .catch(err_2 => {
                    console.log('Download error!');
                    loadingEl.dismiss();
                    console.log(err_2);
                  });
              }
            });
        });
    });
  }

  createAudioFile(pathToDirectory, filename): MediaObject {
    if (this.platform.is('ios')) {
      //ios
      return this.media.create(
        pathToDirectory.replace(/^file:\/\//, '') + '/' + filename
      );
    } else {
      // android
      return this.media.create(pathToDirectory + filename);
    }
  }

  getDurationAndSetToPlay() {
    this.curr_playing_file = this.createAudioFile(
      this.storageDirectory,
      this.filename
    );

    this.curr_playing_file.play();
    this.curr_playing_file.setVolume(0.0); // you don't want users to notice that you are playing the file
    let self = this;
    this.get_duration_interval = setInterval(function() {
      if (self.duration == -1) {
        self.duration = ~~self.curr_playing_file.getDuration(); // make it an integer
      } else {
        self.curr_playing_file.stop();
        self.curr_playing_file.release();
        self.setRecordingToPlay();
        clearInterval(self.get_duration_interval);
      }
    }, 100);
  }

  getAndSetCurrentAudioPosition() {
    let diff = 1;
    let self = this;
    this.get_position_interval = setInterval(function() {
      let last_position = self.position;
      
      self.curr_playing_file.getCurrentPosition().then(position => {
        
        if (position >= 0 && position < self.duration) {
          if (Math.abs(last_position - position) >= diff) {
            // set position
            self.curr_playing_file.seekTo(last_position * 1000);
          } else {
            // update position for display
            self.position = position;
          }
        } else if (position >= self.duration) {
          self.stopPlayRecording();
          self.setRecordingToPlay();
        }
      });
    }, 100);
  }

  setRecordingToPlay() {
    this.curr_playing_file = this.createAudioFile(
      this.storageDirectory,
      this.filename
    );
    this.curr_playing_file.onStatusUpdate.subscribe(status => {
      // 2: playing
      // 3: pause
      // 4: stop
      this.message = status;
      switch (status) {
        case 1:
          this.is_in_play = false;
          break;
        case 2: // 2: playing
          this.is_in_play = true;
          this.is_playing = true;
          break;
        case 3: // 3: pause
          this.is_in_play = true;
          this.is_playing = false;
          break;
        case 4: // 4: stop
        default:
          this.is_in_play = false;
          this.is_playing = false;
          break;
      }
    });
    console.log('audio file set');
    this.message = 'audio file set';
    this.is_ready = true;
    this.getAndSetCurrentAudioPosition();
  }

  playRecording() {
    this.curr_playing_file.play();
    // this.toastCtrl
    //   .create({
    //     message: `Start playing from ${this.fmtMSS(this.position)}`,
    //     duration: 2000
    //   })
    //   .then(toastEl => toastEl.present());
     
  }

  pausePlayRecording() {
    this.curr_playing_file.pause();
    // this.toastCtrl
    //   .create({
    //     message: `Paused at ${this.fmtMSS(this.position)}`,
    //     duration: 2000
    //   })
    //   .then(toastEl => toastEl.present());
      
      
  }

  stopPlayRecording() {
    this.curr_playing_file.stop();
    this.curr_playing_file.release();
    clearInterval(this.get_position_interval);
    this.position = 0;
    
    
  }

  controlSeconds(action) {
    let step = 5;

    let number = this.position;
    switch (action) {
      case 'back':
        this.position = number < step ? 0.001 : number - step;
        // this.toastCtrl
        //   .create({
        //     message: `Went back ${step} seconds`,
        //     duration: 2000
        //   })
        //   .then(toastEl => toastEl.present());
        break;
      case 'forward':
        this.position =
          number + step < this.duration ? number + step : this.duration;
        // this.toastCtrl
        //   .create({
        //     message: `Went forward ${step} seconds`,
        //     duration: 2000
        //   })
        //   .then(toastEl => toastEl.present());
        break;
      default:
        break;
    }
  }

  fmtMSS(s) {
    let seconds:number = Math.floor(s/1000);
    let hours:number = Math.floor(seconds/3600);
    seconds = Math.floor(seconds% 3600) ;
    let minutes:number = Math.floor(seconds/ 60) ;
    seconds = Math.floor(seconds% 60) ;
    let totalhours:any= minutes+':'+seconds
    return totalhours

    /** The following has been replaced with Angular DatePipe */
    // // accepts seconds as Number or String. Returns m:ss
    // return (
    //   (s - // take value s and subtract (will try to convert String to Number)
    //     (s %= 60)) / // the new value of s, now holding the remainder of s divided by 60
    //     // (will also try to convert String to Number)
    //     60 + // and divide the resulting Number by 60
    //   // (can never result in a fractional value = no need for rounding)
    //   // to which we concatenate a String (converts the Number to String)
    //   // who's reference is chosen by the conditional operator:
    //   (9 < s // if    seconds is larger than 9
    //     ? ':' // then  we don't need to prepend a zero
    //     : ':0') + // else  we do need to prepend a zero
    //   s
    // ); // and we add Number s to the string (converting it to String as well)
  }

  ionViewWillLeave() {
    this.tabBar.style.display = 'flex';
    if(this.is_in_play==true){
      this.curr_playing_file.stop();
      this.curr_playing_file.release();
    }
  }
}

