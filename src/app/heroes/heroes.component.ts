import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes : Hero[] = []; //variable heroes transférée au front, comportant les données du tableau HEROES (fournies par le service HeroService)
  
  constructor(private heroService: HeroService, private messageService: MessageService) {}

  getHeroes(): void {    // permet de récupérer les données du service en utilisant la méthode getHeroes du service
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  
  ngOnInit() : void {   // permet d'appeler la méthode getHeroes au démarrage (sans ça, il faudrait un event pour la déclencher)
    this.getHeroes();
  }  
}
