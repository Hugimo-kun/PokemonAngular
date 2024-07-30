import {CommonModule} from "@angular/common";
import {Component, inject, OnDestroy, OnInit} from "@angular/core";
import {IPokemon} from "../../shared/ipokemon";
import {PokemonService} from "../../shared/pokemon.service";
import {CardComponent} from "../card/card.component";

@Component({
  selector: "app-list-pokemon",
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: "./list-pokemon.component.html",
  styleUrl: "./list-pokemon.component.css",
})
export class ListPokemonComponent implements OnInit, OnDestroy {
  pokemons: IPokemon[] = [];
  service = inject(PokemonService);

  count: number = 0;
  idInterval: any;

  ngOnInit() {
    this.getPokemons();
    this.idInterval = setInterval(() => this.count++, 1000);
  }

  ngOnDestroy(): void {
    console.log(this.count);
    clearInterval(this.idInterval);
  }

  getPokemons() {
    this.service.fetchAll().subscribe((data: IPokemon[]) => {
      this.pokemons = data.slice(1, 21);
    });
  }
}
