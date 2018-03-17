import { Component } from '@angular/core';
import { Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'
})
export class AppComponent {
  quotes = [
    new Quote(1, 'Happy coding'),
    new Quote(2, 'I think angular is a bit complex'),
  ]
  }

