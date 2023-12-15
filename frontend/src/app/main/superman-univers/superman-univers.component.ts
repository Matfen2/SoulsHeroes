import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-superman-univers',
  templateUrl: './superman-univers.component.html',
  styleUrls: ['./superman-univers.component.css'],
})
export class SupermanUniversComponent implements OnInit {
  supermanComics = [
    {
      id: 1,
      book: '/assets/pict/supermanTome1.jpg',
    },
    {
      id: 2,
      book: '/assets/pict/supermanTome2.jpg',
    },
    {
      id: 3,
      book: '/assets/pict/supermanTome3.jpg',
    },
    {
      id: 4,
      book: '/assets/pict/superman&WonderWomanTome1.jpg',
    },
    {
      id: 5,
      book: '/assets/pict/superman&WonderWomanTome2.jpg',
    },
    {
      id: 6,
      book: '/assets/pict/laMortDeSupermanTome1.jpeg',
    },
    {
      id: 7,
      book: '/assets/pict/laMortDeSupermanTome2.jpeg',
    },
    {
      id: 8,
      book: '/assets/pict/supermanAnthologie.jpg',
    },
  ];

  ngOnInit(): void {}
}
