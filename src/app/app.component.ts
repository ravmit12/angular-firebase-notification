import { Component } from '@angular/core';
import {MessagingService} from './shared/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'push-notification';

  message;

  constructor(private messagingService: MessagingService) { }

  ngOnInit() {
    const userId = 'jX5N858JtxP8ZuEwjssIVHO8Agf2'; /*sidemenu => Database => find your userId*/
    this.messagingService.requestPermission(userId);
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;
  }
}
