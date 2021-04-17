import { Component, OnDestroy, OnInit } from '@angular/core';

import { catchError, pluck, tap, switchMap } from 'rxjs/operators';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon, Pokedetails } from '../../../interfaces/pokemon.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit, OnDestroy {

  pokemons: Pokemon[] = [];
  pokeSubscription!: Subscription;
  subscriptions = new Subscription();

  get pokemonsDetails() {
    return this.pokemonService.getPokemonsDetails();
  }

  offset: number = 0;
  limit: number = 20;

  constructor(
    private pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
    if (this.pokemonsDetails.length > 0) {
      return;
    }
    this.loadPokemons();
  }

  loadPokemons() {
    this.pokeSubscription = this.pokemonService.getPokemons(this.offset, this.limit).pipe(
      pluck('results'),
      catchError<Pokemon[], []>(err => []),
      tap((pokemons) => this.pokemons = pokemons),
      tap((pokemons: Pokemon[]) => pokemons.forEach((pokemon: Pokemon, index: number) => {
        const pokemonId = pokemon.url.slice(pokemon.url.length - 4, -1);
        this.pokemons[index].id = pokemonId.replace(/[A-Za-z]*\//, '');
      })
      ),
      tap((pokemons: Pokemon[]) => pokemons.forEach((pokemon, index) => {
        this.subscriptions.add(
          this.pokemonService.getPokemonById(pokemon.id!).subscribe((pokemonLoaded: Pokedetails) => {
            this.pokemonService.addPokemonDetails(pokemonLoaded);
          }))
      }))
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.pokeSubscription?.unsubscribe();
    this.subscriptions?.unsubscribe();
  }

}


