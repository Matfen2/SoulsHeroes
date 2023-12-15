import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-batman-univers',
  templateUrl: './batman-univers.component.html',
  styleUrls: ['./batman-univers.component.css'],
})
export class BatmanUniversComponent implements OnInit {
  constructor(
    private authService: AuthService,
  ) {}

  batmanComics = [
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
    {
      id: 4,
      book: '/assets/pict/batmanArmèreVictoire.jpg',
    },
    {
      id: 5,
      book: '/assets/pict/batmanDesOmbresDansLaNuit.jpg',
    },
    {
      id: 6,
      book: '/assets/pict/batman&RobinTome1.jpg',
    },
    {
      id: 7,
      book: '/assets/pict/batman&RobinTome2.jpg',
    },
    {
      id: 8,
      book: '/assets/pict/batman&RobinTome3.jpg',
    },
  ];

  member = {
    pseudo: '',
    sujbect: '',
    message: '',
  };

  answer = new FormGroup({
    pseudo: new FormControl('', Validators.required),
    studio: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
  });

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

  ngOnInit(): void {
    
  }
}
