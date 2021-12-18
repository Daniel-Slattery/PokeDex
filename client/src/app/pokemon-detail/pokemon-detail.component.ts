import { Component, OnInit } from '@angular/core';
import { PokemonDetail } from '../pokemon';
import { ApiClientService } from '../api-client.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  selectedPokemon: PokemonDetail = {id: 1, name: 'bulbasaur', weight: 0};

  randomString: string = "random string here";

  constructor(private pokemonService: ApiClientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const pokemonName = String(this.route.snapshot.paramMap.get('pokemonName'));
    this.pokemonService.catchOne(pokemonName).subscribe((data: PokemonDetail) => {
      this.selectedPokemon = data;
      console.log(this.selectedPokemon)
    })
    console.log(this.selectedPokemon)
  }
}
