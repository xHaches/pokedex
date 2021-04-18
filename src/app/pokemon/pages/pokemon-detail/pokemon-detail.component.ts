import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Pokedetails } from '../../../interfaces/pokemon.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit, OnDestroy {

  pokemon!: Pokedetails;
  pokemonImg = '';
  pokemonType = '';

  routeSubscription!: Subscription;

  constructor(
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routeSubscription = this.activatedRoute.params.subscribe(
      params => {
        this.getPokemon(params['id']);
      }
    )
  }


  getPokemon(id: number) {
    this.pokemonService.getPokemons(id).subscribe(
      res => {
        console.log(res);
        this.pokemon = res;
        this.pokemonImg = this.pokemon.sprites.front_default;
        this.pokemonType = res.types[0].type.name;
      },
      err => {
        console.log(err);
      }
    )
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

}
