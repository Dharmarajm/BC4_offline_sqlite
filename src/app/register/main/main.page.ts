import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-register-main',
  templateUrl: 'main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class mainPage {

  constructor(private translate: TranslateService) { 
  this.translate.use('en');
}

	ngOnInit() {}

}
