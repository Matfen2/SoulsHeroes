import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchService } from '../../shared/search.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
  animations: [
    trigger('showHide', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show <=> hide', animate('300ms ease-in-out'))
    ])
  ]
})
export class SwitchComponent implements OnInit {
  show: string | null = 'search';
  showSearch: boolean = true;
  showWishes: boolean = false;
  comics = new FormGroup({
    title: new FormControl('', Validators.required),
  });
  results: any;
  searchedTitle: string = '';
  loading: boolean = false;
  errorMessage: string = '';
  selectedResult: any | null = null;
  wishlist: any[] = [];

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      this.wishlist = JSON.parse(storedWishlist);
    }
  }

  showContain(section: string) {
    this.show = section;
    if (section === 'search') {
      this.showSearch = true;
      this.showWishes = false;
    } else if (section === 'wishes') {
      this.showSearch = false;
      this.showWishes = true;
    }
  }

  searchComics() {
    if (this.comics.valid) {
      this.loading = true;
      const title = this.comics.value.title;
      this.searchService.getComics(title).subscribe(
        (res) => {
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

  showSelectedResult(result: any) {
    this.selectedResult = result;
  }

  addToWishlist() {
    if (this.selectedResult) {
      alert('Ajouté à la liste de souhaits')
      this.wishlist.push(this.selectedResult);
      localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
    }
  }

  removeFromWishlist(index: number) {
    alert('Comic supprimé')
    this.wishlist.splice(index, 1);
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
  }
}
