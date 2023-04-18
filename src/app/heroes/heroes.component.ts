import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {

  heroes : Hero[] = []; //variable heroes transférée au front, comportant les données du tableau HEROES (fournies par le service HeroService)
  constructor(private heroService: HeroService) {}

  getHeroes(): void {    // permet de récupérer les données du service en utilisant la méthode getHeroes du service
    this.heroes = this.heroService.getHeroes();
  }
  
  ngOnInit() : void {   // permet d'appeler la méthode getHeroes au démarrage (sans ça, il faudrait un event pour la déclencher)
    this.getHeroes();
  }

  selectedHero?: Hero; // déclaration de la variable afin de vérifier si un héro est sélectionné ou non

  onSelect(hero: Hero): void {  // au clic, les infos du hero sont transférées dans la variable selectedHero
    this.selectedHero = hero;
  }

    
  
}
