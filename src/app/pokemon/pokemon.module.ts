import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [PokemonsComponent, PokemonDetailComponent],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
})
export class PokemonModule { }
