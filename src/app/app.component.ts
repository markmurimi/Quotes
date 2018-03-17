import { Component } from '@angular/core';
import { Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'
})
export class AppComponent {
  quotes = [
    new Quote(1, 'Happy coding', 'Always be happy when coding'),
    new Quote(2, 'Angular js', 'On my point of view angular is a bit complex'),
  ]
  }

