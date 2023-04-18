import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  getHeroes(): Hero[] {  // méthode permettant de récupérer les données du tableau HEROES en utilisant le modèle Hero
    return HEROES;
  }

  constructor() { }
}
