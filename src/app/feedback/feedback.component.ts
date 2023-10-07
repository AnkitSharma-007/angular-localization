import { Component } from '@angular/core';
import { Feedback } from '../models/feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent {
  customerFeedback = new Feedback();

  saveFeedback() {
    alert(
      $localize`:Form submission message:Thank you for the valuable feedback!!!\nYour feedback has been submitted successfully.`
    );
    console.table(this.customerFeedback);
  }
}
