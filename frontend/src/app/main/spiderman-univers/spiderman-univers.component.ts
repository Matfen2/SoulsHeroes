import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spiderman-univers',
  templateUrl: './spiderman-univers.component.html',
  styleUrls: ['./spiderman-univers.component.css'],
})
export class SpidermanUniversComponent implements OnInit {
  spiderManComics = [
    {
      id: 1,
      book: '/assets/pict/spidermanTome1.jpg',
    },
    {
      id: 2,
      book: '/assets/pict/spidermanTome2.jpg',
    },
    {
      id: 3,
      book: '/assets/pict/spidermanTome3.jpg',
    },
    {
      id: 4,
      book: '/assets/pict/marvelSpiderManVilleEnGuerre.jpg',
    },
    {
      id: 5,
      book: '/assets/pict/spidermanVsVenom.jpg',
    },
    {
      id: 6,
      book: '/assets/pict/spidermanKraven.jpg',
    },
    {
      id: 7,
      book: '/assets/pict/ultimateSpiderman.jpg',
    },
    {
      id: 8,
      book: '/assets/pict/spidermanSpiderVerse.jpg',
    },
  ];

  ngOnInit(): void {}
}
