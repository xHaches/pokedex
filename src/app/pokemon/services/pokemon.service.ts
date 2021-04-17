import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Pokedetails } from '../../interfaces/pokemon.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl = environment.baseURL;

  private _pokemonDetails: Pokedetails[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getPokemons(offset: number, limit: number) {
    return this.http.get(`${this.baseUrl}?offset=${offset}&limit=${limit}`);
  }

  getPokemonById(id: string): Observable<Pokedetails> {
    return this.http.get<Pokedetails>(`${this.baseUrl}/${id}`);
  }

  addPokemonDetails(pokemonDetails: Pokedetails) {
    this._pokemonDetails.push(pokemonDetails);
  }

  getPokemonsDetails(): Pokedetails[] {
    return [...this._pokemonDetails];
  }


}
