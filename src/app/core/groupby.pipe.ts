import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common'

@Pipe({
  name: 'groupby'
})
export class GroupbyPipe implements PipeTransform {
  milliseconds:number=1000;
  constructor(private datePipe: DatePipe) {}

//   transform(collection: Array<any>, property: string = 'created_at'): Array<any> {
//     if(!collection) {
//         return null;
//     }
//     const gc = collection.reduce((previous, current)=> {
//       console.log(previous, current)
//         if(!previous[current[property]]) {
//             previous[current[property]] = [];
//         }
            
//             previous[current[property]].push(current);
//             console.log(previous[current[property]])
//         return previous;
//     }, {});

//     return Object.keys(gc).map(date =>({created_at: date, events: gc[date]}))

// }

  transform(base:number): any {
    let seconds:number = Math.floor(base*this.milliseconds/1000);
      let hours:number = Math.floor(seconds/3600);
      seconds = Math.floor(seconds% 3600) ;
      let minutes:number = Math.floor(seconds/ 60) ;
      seconds = Math.floor(seconds% 60) ;
      //console.log(seconds.length)
      let getSeconds = seconds.toString().length>1?seconds:'0'+seconds;
      let getMinutes = minutes.toString().length>1?minutes:'0'+minutes;
      let totalhours:any= getMinutes+':'+getSeconds
      return totalhours;
  }
}
