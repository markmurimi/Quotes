import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'Happy coding'),
    new Quote(2, 'I think angular is a bit complex'),
  ]

  constructor() { }

  ngOnInit() {
  }

}
