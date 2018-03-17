import { Component } from '@angular/core';
import { Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'
})
export class AppComponent {
  quotes = [
    new Quote(1, '"I love you the more in that I believe you had liked me for my own sake and for nothing else."', 'AUTHOR:John Keats SUBMITED BY:Mark Murimi'),
    new Quote(2, '"But man is not made for defeat. A man can be destroyed but not defeated."', 'AUTHOR:Ernest Hemingway SUBMITED BY:Ramza Reseni'),
  ]
  }

