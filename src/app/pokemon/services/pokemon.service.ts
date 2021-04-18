import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Pokedetails } from '../../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  baseUrl: string = environment.baseURL;

  constructor(private http: HttpClient) { }

  //Obtiene pokemon
  getPokemons(index: string | number) {
    return this.http.get<Pokedetails>(`${this.baseUrl}/${index}`);
  }


}
