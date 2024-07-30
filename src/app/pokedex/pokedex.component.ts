import {Component, inject, OnInit} from "@angular/core";
import {IPokemon} from "../../shared/ipokemon";
import {PokemonService} from "../../shared/pokemon.service";
import {ActivatedRoute} from "@angular/router";
import {RecherchePipe} from "../../shared/recherche.pipe";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: "app-pokedex",
  standalone: true,
  imports: [RecherchePipe, FormsModule, CommonModule],
  templateUrl: "./pokedex.component.html",
  styleUrl: "./pokedex.component.css",
})
export class PokedexComponent implements OnInit {
  service = inject(PokemonService);
  route = inject(ActivatedRoute);
  pokemons: IPokemon[] = [];
  searchText: string = "";

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.service.fetchAll().subscribe((data: IPokemon[]) => {
      this.pokemons = data;
    });
  }
}
