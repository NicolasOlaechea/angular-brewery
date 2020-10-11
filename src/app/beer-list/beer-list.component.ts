import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  beer = {
    "name": "Negra juerte",
    "type": "Porter",
    "price": 100,
    "stock": 5,
    "image": "assets/img/porter.jpeg",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
