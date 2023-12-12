import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-univers',
  templateUrl: './univers.component.html',
  styleUrls: ['./univers.component.css'],
})
export class UniversComponent implements OnInit {
  univers: string = '';

  DarkKnigth = [
    {
      id: 1,
      firstComic: '/assets/pict/batmanComicsOne.jpg',
      secondComic: '/assets/pict/batmanComicsTwo.jpg',
      thirdComic: '/assets/pict/batmanComicsThree.jpg',
      universWallpaper: '/assets/pict/batmanWallpaper.jpg',
    },
  ];

  ManOfSteel = [
    {
      id: 1,
      firstComic: '/assets/pict/supermanTome1.jpg',
      secondComic: '/assets/pict/supermanTome2.jpg',
      thirdComic: '/assets/pict/supermanTome3.jpg',
      universWallpaper: '/assets/pict/supermanWallpaper.jpg',
    },
  ];

  Spidey = [
    {
      id: 1,
      firstComic: '/assets/pict/spidermanTome1.jpg',
      secondComic: '/assets/pict/spidermanTome2.jpg',
      thirdComic: '/assets/pict/spidermanTome3.jpg',
      universWallpaper: '/assets/pict/spidermanWallpaper.jpg',
    },
  ];

  showHeroes(comic: string) {
    this.univers = comic;
  }

  ngOnInit(): void {}
}
