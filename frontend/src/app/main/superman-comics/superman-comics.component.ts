import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-superman-comics',
  templateUrl: './superman-comics.component.html',
  styleUrls: ['./superman-comics.component.css'],
})
export class SupermanComicsComponent implements OnInit {
  constructor(
    private routes: ActivatedRoute
  ) {}

  supermanId!: number;
  supermanDetails: any;

  supermanData = [
    {
      id: 1,
      pict: '/assets/pict/supermanTome1.jpg',
      title: 'Superman Genèse Tome 1',
      creator: 'Ecrit par GRANT MORISSON, dessiné par ANDY KUBERT',
      synopsis:
        "Arrivé depuis peu à Metropolis, Clark Kent prend ses marques en tant que reporter, et fraye avec les journalistes du Daily Planet, Jimmy Olsen et Lois Lane. Mais il défend également la justice sous le déguisement de Superman : s'en prenant autant à la corruption politique qu'aux machines futuristes qui investissent sa ville !",
      price: '24.00 €',
      hrefBuy: 'https://www.urban-comics.com/superman-tome-1/',
    },
    {
      id: 2,
      pict: '/assets/pict/supermanTome2.jpg',
      title: 'Superman A toute épreuve Tome 2',
      creator: 'Ecrit par GRANT MORISSON, dessiné par ANDY KUBERT',
      synopsis:
        "Qu'arrive-t-il quand Superman arrive trop tard pour sauver Lois Lane? Suite au décès de Clark Kent, Superman doit retrouver une nouvelle identité... Et pourquoi pas le président des Etats-Unis?",
      price: '21.01 €',
      hrefBuy: 'https://www.urban-comics.com/superman-tome-2/',
    },
    {
      id: 3,
      pict: '/assets/pict/supermanTome3.jpg',
      title: 'Superman Apocalypse Tome 3',
      creator: 'Ecrit par GRANT MORISSON, dessiné par ANDY KUBERT',
      synopsis:
        "Encore novice en tant que Superman, Clark Kent a eu fort à faire face aux menaces successives de Brainiac et d'Adam Blake... Mais tout cela n'était qu'un échauffement face au plus grand des dangers : la Multitude, une invincible armée qui n'a qu'un seul but... la conquête de l'univers !",
      price: '21.01 €',
      hrefBuy: 'https://www.urban-comics.com/superman-tome-3/',
    },
    {
      id: 4,
      pict: '/assets/pict/superman&WonderWomanTome1.jpg',
      title: 'Superman & wonder woman tome 1',
      creator: 'Ecrit par CHARLES SOULE , dessiné par TONY DANIEL',
      synopsis:
        "Depuis l'attaque de David Graves contre la Ligue de Justice, Superman et Wonder Woman se sont rapprochés au point de devenir intimes et de partager désormais leur temps entre leurs rendez-vous et leurs lourdes responsabilités. Mais même le couple le plus puissant de la Terre peut trouver de quoi lui tenir tête en la personne de Doomsday ou du Général Zod !",
      price: '19.00 €',
      hrefBuy: 'https://www.urban-comics.com/superman-wonder-woman-tome-1/',
    },
    {
      id: 5,
      pict: '/assets/pict/superman&WonderWomanTome2.jpg',
      title: 'Superman & wonder woman tome 2',
      creator: 'Ecrit par PETER TOMASI, dessiné par COLLECTIF',
      synopsis:
        "Face à l'apparition d'un nouveau héros prénommé Wonderstar, Superman et Wonder Woman sont sur leur garde. Il semble avoir besoin d'aide, ne demande qu'à apprendre à gérer ses pouvoirs instables, mais comment faire confiance à un homme dont il ne reste aucune trace du passé ? Qui est-il ? D'où vient-il ? Et pourquoi les deux justiciers ont-ils la sensation si étrange de partager avec lui une inexplicable connexion ?",
      price: '17.00 €',
      hrefBuy: 'https://www.urban-comics.com/superman-wonder-woman-tome-2/',
    },
    {
      id: 6,
      pict: '/assets/pict/laMortDeSupermanTome1.jpeg',
      title: 'La mort de superman tome 1',
      creator: 'Ecrit par DAN JURGENS, dessiné par WALTER SIMONSON',
      synopsis:
        'Doomsday, une créature maléfique dévaste les États-Unis de long en large. Même la Ligue de Justice succombe face à une telle sauvagerie. Seul Superman reste debout face au monstre. Debout... pour son dernier combat.',
      price: '35.00 €',
      hrefBuy: 'https://www.urban-comics.com/la-mort-de-superman-tome-1/',
    },
    {
      id: 7,
      pict: '/assets/pict/laMortDeSupermanTome2.jpeg',
      title: 'La mort de superman tome 2',
      creator: 'Ecrit par DAN JURGENS, dessiné par WALTER SIMONSON',
      synopsis:
        "Alors que Superman vient d'être abattu des mains de Doomsday, les prétendants au titre se pressent et tentent leur chance pour incarner le super-héros le plus populaire de Metropolis. Apparaissent alors 4 nouveaux super-héros prétendant être la réincarnation de Superman: le cyborg, Superman mi-homme mi-machine, Superboy, un clone ado mi humain mi kryptnonier, Steel, un ingénieur sauvé par Superman, et l'Eradicator, apparement le dernier fils de Krypton...",
      price: '35.00 €',
      hrefBuy: 'https://www.urban-comics.com/la-mort-de-superman-tome-2/',
    },
    {
      id: 8,
      pict: '/assets/pict/supermanAnthologie.jpg',
      title: 'Superman : Anthologie',
      creator: 'Ecrit par JERRY SIEGEL, dessiné par JOE SHUSTER',
      synopsis:
        "15 récits mythiques du premier et du plus grand des super-héros retraçant sa carrière et les nombreuses périodes artistiques de son existence sur papier. De ses débuts en 1938 à sa recréation en 2012, ces épisodes pour la plupart inédits en album dévoilent toutes les facettes de l'Homme d'Acier, des plus fantastiques aux plus humaines.",
      price: '24.00 €',
      hrefBuy: 'https://www.urban-comics.com/superman-anthologie/',
    },
  ];

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      this.supermanId = +params['id'];
      this.supermanDetails = this.supermanData.find(
        (supermanComics) => supermanComics.id === this.supermanId
      );
    });
  }
}
