import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // permet de récupérer les informations stockées dans la route (ici l'id du hero sur lequel on a cliqué)
import { Location } from '@angular/common'; // service angular permettant d'intéragir avec le navigateur. permet de revenir à la dernière vue


import { Hero } from '../hero';
import { HeroService } from '../hero.service';  // récupère les informations sur les heros pour renvoyer les informations demandées par la route

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent {
  @Input() hero?: Hero;

  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  // route.snapshot : image statique de l'information de la route après que le composant soit créé
  // paramMap : regroupe toutes les infos envoyées dans l'URL, on y cherche donc 'id'
  // Number : les paramètres de route sont toujours des strings. la fonction Number convertit en nombre (un id est un nombre, pas un string)

  goBack(): void {
    this.location.back();  // permet de revenir en arrière dans le front (button)
  }
}
