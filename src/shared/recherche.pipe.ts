import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "recherche",
  standalone: true,
})
export class RecherchePipe implements PipeTransform {
  transform(pokemons: any[], searchText: string): any[] {
    if (!pokemons || !searchText) {
      const pikachu = pokemons.find((pokemon) => pokemon.name.fr === "Pikachu");
      return pikachu ? [pikachu] : [];
    }

    searchText = searchText.toLowerCase();
    return pokemons.filter(
      (pokemon) => pokemon.name.fr.toLowerCase() === searchText
    );
  }
}
