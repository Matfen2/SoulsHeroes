import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spiderman-comics',
  templateUrl: './spiderman-comics.component.html',
  styleUrls: ['./spiderman-comics.component.css'],
})
export class SpidermanComicsComponent implements OnInit {
  constructor(
    private routes: ActivatedRoute
  ) {}

  spidermanId!: number;
  spidermanDetails: any;

  spidermanData = [
    {
      id: 1,
      pict: '/assets/pict/spidermanTome1.jpg',
      title: 'SPIDER-MAN Tome 1',
      creator: 'Ecrit par J.M STRACZYNSKI, dessiné par JOHN ROMITA JR',
      synopsis:
        "Un mystérieux individu nommé Ezekiel bouleverse la vie de Peter Parker et remet en question l'origine même des pouvoirs de Spidey. Tante May, quant à elle, va faire une surprenante découverte.",
      price: '36.95 €',
      hrefBuy:
        'https://www.excalibur-comics.fr/marvel-icons/1894-spider-man-par-straczynski-tome-1-9782809438611.html',
    },
    {
      id: 2,
      pict: '/assets/pict/spidermanTome2.jpg',
      title: 'SPIDER-MAN Tome 2',
      creator: 'Ecrit par J.M STRACZYNSKI, dessiné par JOHN ROMITA JR',
      synopsis:
        "Peter Parker a toujours cru que la morsure d'une araignée radioactive à l'origine de ses pouvoirs était un accident. Mais le mystérieux Ezekiel a une explication étonnante et très différente des événements ! Puis, Spider-Man s'allie à Iron Man, Captain America et d'autres héros pour affronter un groupe de monstres qui menacent de détruire New York !",
      price: '36.95 €',
      hrefBuy:
        'https://www.excalibur-comics.fr/marvel-icons/1895-spider-man-par-straczynski-tome-2-9782809444087.html',
    },
    {
      id: 3,
      pict: '/assets/pict/spidermanTome3.jpg',
      title: 'SPIDER-MAN Tome 3',
      creator: 'Ecrit par J.M STRACZYNSKI, dessiné par JOHN ROMITA JR',
      synopsis:
        "Tandis que Peter Parker tente de comprendre lorigine totémique de ses pouvoirs, Ezekiel fait son grand retour ! Puis, Spider-Man fait équipe avec le Docteur Strange pour affronter Dormammu. Mais le passé revient hanter Peter avec la révélation dun immense secret concernant Gwen Stacy. Une saga marquante qui réécrit l'histoire dune façon inattendue !",
      price: '36.95 €',
      hrefBuy:
        'https://www.excalibur-comics.fr/marvel-icons/1896-spider-man-par-straczynski-tome-3-9782809450637.html',
    },
    {
      id: 4,
      pict: '/assets/pict/marvelSpiderManVilleEnGuerre.jpg',
      title: 'Spider-Man: Ville en guerre',
      creator: 'Ecrit par DENNIS HALLUM , dessiné par MICHELLE BANDINI ',
      synopsis:
        "Le jeu vidéo Marvel's Spider-Man sur Playstation 4 a été un énorme succès, vendu à près de 10 millions d'exemplaires dans le monde. Ce City at War est le premier tome d'une série de one-shots, qui viennent étoffer l'univers du jeu vidéo. Retrouvez le Spider-Man du jeu Playstation. Au fil de ses aventures, vous revivrez des moments cruciaux du jeu vidéo. Vous découvrirez de nouveaux super-vilains et vous aurez aussi droit à des scènes inédites !",
      price: '19.00 €',
      hrefBuy:
        'https://www.excalibur-comics.fr/100-marvel/5542-marvel-s-spider-man-ville-en-guerre-9782809478549.html',
    },
    {
      id: 5,
      pict: '/assets/pict/spidermanVsVenom.jpg',
      title: 'Spider-Man VS VENOM',
      creator: 'Ecrit par DAVID MICHELINIE, dessiné par TODD MCFARLANE',
      synopsis:
        "Ça n'a pas fonctionné entre Peter Parker et le symbiote noir trouvé dans l'espace. Pendant un temps, Spider-Man s'est associé à l'extraterrestre jusqu'à ce qu'il prenne conscience du danger que représentait cette union. L'entité s'est alors rapprochée d'Eddie Brock pour devenir Venom. Et Spider-Man est devenu son pire ennemi !",
      price: '22.00 €',
      hrefBuy:
        'https://www.excalibur-comics.fr/best-of-marvel/7037-venom-vs-spider-man-9782809489590.html',
    },
    {
      id: 6,
      pict: '/assets/pict/spidermanKraven.jpg',
      title: 'Spider-Man : La dernière Chasse de Kraven',
      creator: 'Ecrit par 	J. M. DEMATTEIS, dessiné par MIKE ZECK',
      synopsis:
        "Kraven le Chasseur a traqué tous les animaux de la création. Pourtant, une proie lui échappe encore et toujours : Spider-Man ! Bien décidé à prouver qu'il est le plus grand chasseur de tous les temps, Kraven va endosser le costume du héros et usurper son identité après l'avoir envoyé six pieds sous terre. Est-ce la fin pour le Tisseur ?",
      price: '15.99 €',
      hrefBuy:
        'https://www.excalibur-comics.fr/marvel-must-have-panini-comics-vf/6956-spider-man-la-derniere-chasse-de-kraven-must-have-9782809496673.html',
    },
    {
      id: 7,
      pict: '/assets/pict/ultimateSpiderman.jpg',
      title: 'Ultimate Spider-Man : Pouvoirs et Responsabilités',
      creator: 'Ecrit par BRIAN MICHAEL BENDIS, dessiné par MARK BAGLEY',
      synopsis:
        "Le jeune Peter Parker, timide et réservé, voit sa vie totalement chamboulée quand il est mordu par une araignée radioactive lors d'une sortie scolaire. Vous pensez connaître cette histoire par coeur ? Découvrez les premiers pas de Spider-Man, version vingt-et-unième siècle ! Pourra-t-il utiliser ses pouvoirs comme bon lui semble alors que Nick Fury et le S.H.I.E.L.D. en ont découvert l'existence ? Et qu'arrive-t-il à Norman Osborn ?",
      price: '15.99 €',
      hrefBuy:
        'https://www.excalibur-comics.fr/marvel-must-have-panini-comics-vf/7353-ultimate-spider-man-pouvoirs-et-responsabilites-must-have-9782809497991.html',
    },
    {
      id: 8,
      pict: '/assets/pict/spidermanSpiderVerse.jpg',
      title: 'Spider-man : Spider-Verse',
      creator: 'Ecrit par DAN SOLT, dessiné par OLIVIER COIPEL',
      synopsis:
        "Les Spider-Men de tous les univers sont traqués et tués. Peter Parker n’a pas le choix : s’il veut les sauver, il va devoir s'associer à Otto Octavius. Spider-Verse met en scène Spider-Man dans toutes ses versions !",
      price: '22.00 €',
      hrefBuy:
        'https://www.excalibur-comics.fr/marvel-now/2944-amazing-spider-man-tome-3-9782809460445.html',
    },
  ];

  ngOnInit(): void {
      this.routes.params.subscribe((params) => {
        this.spidermanId = +params['id'];
        this.spidermanDetails = this.spidermanData.find(
          (spidermanComics) => spidermanComics.id === this.spidermanId
        );
      });
  }
}
