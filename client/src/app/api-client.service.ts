import { Injectable } from '@angular/core';
import { Pokemon, PokemonDetail } from './pokemon';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})

export class ApiClientService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  gottaCatchEmAll(): Observable<Pokemon[]> {
    return this.http
    .get<Pokemon[]>(`https://pokeapi.co/api/v2/pokemon?limit=150`)
    .pipe(map((response: any) => {return response.results}));
  }

  catchOne(pokemonName: string): Observable<PokemonDetail> {
    return this.http
      .get<PokemonDetail>(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      // .pipe(map((response: any) => {return response.results}));
  }
}
