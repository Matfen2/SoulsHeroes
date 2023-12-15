import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private sanitizer: DomSanitizer
  ) {}

  results: any;
  searchedTitle: string = '';
  loading: boolean = false;
  errorMessage: string = '';

  searchComicsList = new FormGroup({
    title: new FormControl('', Validators.required),
  });

  sanitize(buffer: any) {
    const base64 = btoa(
      new Uint8Array(buffer.data).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ''
      )
    );
    return this.sanitizer.bypassSecurityTrustUrl(
      `data:image/jpeg;base64,${base64}`
    );
  }

  searchComics() {
    if (this.searchComicsList.valid) {
      this.loading = true;

      const title = this.searchComicsList.value.title;

      this.authService.searchComic(title).subscribe(
        (res) => {
          console.log(res.data);
          this.results = res.data;
          this.searchedTitle = title ?? '';
          this.loading = false;
          this.errorMessage = '';
        },
        (error) => {
          console.error(error);
          this.errorMessage =
            "Une erreur s'est produite lors de la recherche du jeu.";
          this.loading = false;
        }
      );
    }
  }

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

  ngOnInit(): void {}
}
