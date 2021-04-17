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

  routeSubscription!: Subscription;

  constructor(
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routeSubscription = this.activatedRoute.params.pipe(
      switchMap(({ id }) => (this.pokemonService.getPokemonById(id)))
    ).subscribe((pokemon: Pokedetails) => this.pokemon = pokemon);
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

}
