import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  messages: string[] = [];

  add(message: string){  // méthode qui ajoute un message de validation de fetch au tableau des messages
    this.messages.push(message);
  }

  clear() {  // vide le tableau messages au click
    this.messages = [];
  }

  constructor() { }
}
