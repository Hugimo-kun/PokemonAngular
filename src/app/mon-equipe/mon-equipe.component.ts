import {Component, inject, Input, OnInit} from "@angular/core";
import {IPokemon} from "../../shared/ipokemon";
import {CommonModule} from "@angular/common";
import {PokemonTeamService} from "../../shared/pokemon-team.service";
import {ElementRef} from "@angular/core";

@Component({
  selector: "app-mon-equipe",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./mon-equipe.component.html",
  styleUrl: "./mon-equipe.component.css",
})
export class MonEquipeComponent implements OnInit {
  mesPokemons: IPokemon[] = [];
  service = inject(PokemonTeamService);
  index: number[] = [];
  status: boolean = false;
  visibleI: number | null = null;

  ngOnInit(): void {
    this.getMyTeam();
  }

  getMyTeam() {
    this.mesPokemons = this.service.getMyTeam();
  }

  showDescription(i: number) {
    this.visibleI = i;
  }

  hideDescription() {
    this.visibleI = null;
  }
}
