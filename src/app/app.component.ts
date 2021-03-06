import { Component } from '@angular/core';
import { Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'
})
export class AppComponent {
  quotes = [
    new Quote(1, '"I love you the more in that I believe you had liked me for my own sake and for nothing else."', 'AUTHOR:John Keats SUBMITED BY:Mark Murimi',new Date(2017,3,14)),
    new Quote(2, '"But man is not made for defeat. A man can be destroyed but not defeated."', 'AUTHOR:Ernest Hemingway SUBMITED BY:Ramza Reseni',new Date(2017,6,9)),
    new Quote(3, '"When you reach the end of your rope, tie a knot in it and hang on."', 'AUTHOR:Franklin D. Roosevelt SUBMITED BY:Lenora Sharon',new Date(2017,1,12)),
  ]

  }

