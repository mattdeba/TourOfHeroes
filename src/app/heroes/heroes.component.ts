import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from "../hero.service";
import { MessageService } from "../message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void{
    /**
     * La nouvelle version attend que l'Observable émette le tableau de héros,
     * ce qui peut arriver maintenant ou dans plusieurs minutes.
     * La méthode subscribe() transmet le tableau émis à la callback,
     * qui définit la propriété heroes du composant.
     */
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
