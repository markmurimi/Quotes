import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'Happy coding','Always be happy when coding'),
    new Quote(2, 'Angular js', 'On my point of view angular is a bit complex'),
  ]

  togleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete,index){
    if (isComplete){
      this.quotes.splice(index,1)
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
