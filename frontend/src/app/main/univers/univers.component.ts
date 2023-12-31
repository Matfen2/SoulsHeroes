import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

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
      book: '/assets/pict/batmanComicsOne.jpg',
    },
    {
      id: 2,
      book: '/assets/pict/batmanComicsTwo.jpg',
    },
    {
      id: 3,
      book: '/assets/pict/batmanComicsThree.jpg',
    },
  ];

  ManOfSteel = [
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
  ];

  Spidey = [
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
  ];

  showHeroes(comic: string) {
    this.univers = comic;
  }

  member = {
    pseudo: '',
    subject: '',
    message: '',
  };

  answer = new FormGroup({
    pseudo: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required), // Match the name here
    date: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService) {}

  sendMessage() {
    if (this.answer.valid) {
      this.authService.giveMessage(this.answer.value).subscribe(
        (res) => {
          this.answer.reset();
          alert('Message envoyé avec succès');
        },
        (error) => {
          console.log(error);
          alert("Erreur lors de l'envoie du message");
        }
      );
    } else {
      console.log('Tous les champs sont requis');
    }
  }

  ngOnInit(): void {}
}
