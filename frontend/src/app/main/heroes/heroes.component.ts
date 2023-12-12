import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
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
