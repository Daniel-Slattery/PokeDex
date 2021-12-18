import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ApiClientService } from '../api-client.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pokemons: Pokemon[] = [];

  constructor(private pokemonService: ApiClientService) { }

  ngOnInit(): void {
    this.pokemonService.gottaCatchEmAll().subscribe(pokemons => this.pokemons = pokemons)

  }

}
