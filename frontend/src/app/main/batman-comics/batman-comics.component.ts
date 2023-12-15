import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-batman-comics',
  templateUrl: './batman-comics.component.html',
  styleUrls: ['./batman-comics.component.css'],
})
export class BatmanComicsComponent implements OnInit {
  constructor(private routes: ActivatedRoute) {}

  batmanId!: number;
  batmanDetails: any;

  batmanData = [
    {
      id: 1,
      pict: '/assets/pict/batmanComicsOne.jpg',
      title: 'Batman La Cour des Hiboux Tome 1',
      creator: 'Ecrit par SCOTT SNYDER, dessiné par GREG CAPULLO',
      synopsis:
        "Après une longue période d'absence, Bruce Wayne est de retour sous le masque de Batman, à la poursuite d'un mystérieux tueur en série aux allures de hibou, et dont la prochaine cible n'est autre que... Bruce Wayne. Plus il progresse dans son enquête, plus le Chevalier Noir rassemble d'éléments sur les motivations de son ennemi. Il découvre alors une sombre vérité mêlant la famille Wayne aux fondations troubles de Gotham City.",
      price: '17.00 €',
      hrefBuy: 'https://www.urban-comics.com/batman-tome-1-la-cour-des-hiboux/',
    },
    {
      id: 2,
      pict: '/assets/pict/batmanComicsTwo.jpg',
      title: 'Batman La Nuit des Hiboux Tome 2',
      creator: 'Ecrit par SCOTT SNYDER, dessiné par GREG CAPULLO',
      synopsis:
        'La Cour des Hiboux prend son envol, et la nuit à venir pourrait bien signer la mort de Gotham City elle-même. Lancés depuis les hauteurs de la ville, les Ergots, émissaires assassins de la Cour, ont pour mission de mettre à mort les personnalités les plus progressistes de la cité, laissant à leurs maîtres le champ libre pour étendre leur emprise. Les prochains noms sur leur liste ? Lincoln March et Bruce Wayne...',
      price: '21.01 €',
      hrefBuy: 'https://www.urban-comics.com/batman-tome-2/',
    },
    {
      id: 3,
      pict: '/assets/pict/batmanComicsThree.jpg',
      title: 'Batman Le Deuil de La Famille Tome 3',
      creator: 'Ecrit par SCOTT SNYDER, dessiné par JOCK, GREG CAPULLO',
      synopsis:
        'À peine remis de son éprouvant combat contre la Cour des Hiboux, Batman voit revenir son pire cauchemar, le plus terrible de ses adversaires : le Joker ! Et cette fois-ci le Clown Prince du Crime est décidé à détruire non pas uniquement le Chevalier Noir, mais également tous les associés qui gravitent autour, à commencer par Alfred, le fidèle serviteur...',
      price: '19.00 €',
      hrefBuy: 'https://www.urban-comics.com/batman-tome-3/',
    },
    {
      id: 4,
      pict: '/assets/pict/batmanArmèreVictoire.jpg',
      title: 'Batman Armère Victoire',
      creator: 'Ecrit par JEPH LOEB, dessiné par TIM SALE',
      synopsis:
        "Un an après « l'affaire Holiday », Gotham City est toujours le théâtre de règlements de comptes entre les familles mafieuses et les « patients » de l'asile d'Arkham. Si Alberto Falcone était considéré jusqu'alors comme le véritable tueur Holiday, une nouvelle vague de meurtres jette le trouble sur son arrestation. Pour restaurer l'ordre à Gotham, Batman aura besoin de toute l'aide possible, voire de prendre sous son aile un nouveau partenaire, Robin !",
      price: '28.99 €',
      hrefBuy: 'https://www.urban-comics.com/batman-tome-4/',
    },
    {
      id: 5,
      pict: '/assets/pict/batmanDesOmbresDansLaNuit.jpg',
      title: 'Batman Des Ombres Dans La Nuit',
      creator: 'Ecrit par JEPH LOEB, dessiné par  TIM SALE',
      synopsis:
        "Depuis qu'il est devenu le vigilant de Gotham City, le jeune Bruce Wayne a eu l'occasion de croiser de nombreux adversaires, mais depuis quelque temps, les mafieux ont cédé la place à un nouveau genre de criminel. À la suite de la Chauve-souris, ce sont des Épouvantails, Pingouins, Chapeliers déments, Chattes et sinistres Clowns qui, chaque nuit, prennent d'assaut la cité de Gotham. Autant de raisons qui obligeront un Chevalier Noir encore en formation à se forger un code d'honneur sans failles.",
      price: '35.00 €',
      hrefBuy: 'https://www.urban-comics.com/batman-des-ombres-dans-la-nuit/',
    },
    {
      id: 6,
      pict: '/assets/pict/batman&RobinTome1.jpg',
      title: 'Batman & Robin Tome 1',
      creator: 'Ecrit par PETER TOMASI, dessiné par PATRICK GLEASON',
      synopsis:
        "Batman a toujours eu à ses côtés un Robin, mais pour la première fois, Bruce Wayne fait équipe avec la chair de sa chair : le turbulent Damian Wayne. Élevé par la Ligue des Assassins, le jeune garçon tente tant bien que mal de se montre digne de son père, mais l'arrivée de Morgan Ducard va l'amener à faire un choix cornélien.",
      price: '30.00 €',
      hrefBuy: 'https://www.urban-comics.com/batman-robin-integrale-tome-1/',
    },
    {
      id: 7,
      pict: '/assets/pict/batman&RobinTome2.jpg',
      title: 'Batman & Robin Tome 2',
      creator: 'Ecrit par PETER TOMASI, dessiné par PATRICK GLEASON',
      synopsis:
        "Dévasté par la mort de son fils Damian, Batman se retrouve une fois de plus sans Robin, perdu dans un monde désormais vide de sens. Avec le soutien de ses compagnons et de sa famille, le Chevalier Noir parviendra-t-il à surmonter son plus grand échec ? Ou sombrera-t-il dans la culpabilité, jusqu'à devenir son plus redoutable ennemi ?",
      price: '30.00 €',
      hrefBuy: 'https://www.urban-comics.com/batman-robin-integrale-tome-2/',
    },
    {
      id: 8,
      pict: '/assets/pict/batman&RobinTome3.jpg',
      title: 'Batman & Robin Tome 3',
      creator: 'Ecrit par PETER TOMASI, dessiné par PATRICK GLEASON',
      synopsis:
        "Bien que la mort de son fils unique, Damian, ait été l'épreuve la plus douloureuse de sa carrière, Batman a su remonter la pente et trouver le courage d'affronter les pires menaces de Gotham. Mais Ra's al Ghul ne l'entend pas de cette oreille et tente par tous les moyens de ressusciter celui qui est également son petit-fils.",
      price: '30.00 €',
      hrefBuy: 'https://www.urban-comics.com/batman-robin-integrale-tome-3/',
    },
  ];

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      this.batmanId = +params['id'];
      this.batmanDetails = this.batmanData.find(
        (batmanComics) => batmanComics.id === this.batmanId
      );
    });
  }
}
