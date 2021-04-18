import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pokemon } from '../../../interfaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['position', 'image', 'name'];
  pokemons: Pokemon[] = [];
  dataSource = new MatTableDataSource<any>(this.pokemons);
  pokemonsSubscription!: Subscription;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadPokemons();
  }

  search(e: Event) {
    this.loadPokemons();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  loadPokemons() {
    let pokemonData: Pokemon;

    for (let i = 1; i <= 150; i++) {
      this.pokemonsSubscription = this.pokemonService.getPokemons(i).subscribe(
        res => {
          pokemonData = {
            position: i,
            image: res.sprites.front_default,
            name: res.name
          };

          this.pokemons.push(pokemonData);
          this.dataSource = new MatTableDataSource<any>(this.pokemons);
          this.dataSource.paginator = this.paginator;
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  getRow(row: any) {
    console.log(row);
    this.router.navigateByUrl(`list/detail/${row.position}`)
  }


  ngOnDestroy(): void {
    this.pokemonsSubscription.unsubscribe();
  }
}


