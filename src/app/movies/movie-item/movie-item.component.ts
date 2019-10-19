import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  movies = [
    {
      id: 1,
      title: "Joker",
      releaseDate: 2019
   }
  ]
  constructor() { }

  ngOnInit() {
  }

}
