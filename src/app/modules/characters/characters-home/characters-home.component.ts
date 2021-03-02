import { Component, OnInit } from '@angular/core';
import { GenshinService } from '../../../genshin.service';

@Component({
  selector: 'app-characters-home',
  templateUrl: './characters-home.component.html',
  styleUrls: ['./characters-home.component.css']
})
export class CharactersHomeComponent implements OnInit {
  // toggle specific element characters list
  isPyroHidden: boolean = true;
  isHydroHidden: boolean = true;
  isAnemoHidden: boolean = true;
  isElectroHidden: boolean = true;
  isCryoHidden: boolean = true;
  isGeoHidden: boolean = true;

  // arrays to store characters by elements
  result;
  pyro = [];
  hydro = [];
  anemo = [];
  electro = [];
  cryo = [];
  geo = [];

  constructor(private genshin: GenshinService) { }

  ngOnInit(): void {
    this.genshin.getCharacters().subscribe(result => {
      this.result = result;
      for (let i = 0; i < this.result.length; i++) {
        this.genshin.getCharacter(this.result[i]).subscribe(char => {
          if (char['vision'] === 'Pyro') {
            this.pyro.push(char);
          }
          if (char['vision'] === 'Hydro') {
            this.hydro.push(char);
          }
          if (char['vision'] === 'Anemo') {
            this.anemo.push(char);
          }
          if (char['vision'] === 'Electro') {
            this.electro.push(char);
          }
          if (char['vision'] === 'Cryo') {
            this.cryo.push(char);
          }
          if (char['vision'] === 'Geo') {
            this.geo.push(char);
          }
        });
      }
      
    });
  }

  sortCharacters() {

  }

  toggleHero(value: string) {
    console.log(value);
    if (value === 'pyro') {
      this.isPyroHidden = !this.isPyroHidden;
    }
    if (value === 'hydro') {
      this.isHydroHidden = !this.isHydroHidden;
    }
    if (value === 'anemo') {
      this.isAnemoHidden = !this.isAnemoHidden;
    }
    if (value === 'electro') {
      this.isElectroHidden = !this.isElectroHidden;
    }
    if (value === 'cryo') {
      this.isCryoHidden = !this.isCryoHidden;
    }
    if (value === 'geo') {
      this.isGeoHidden = !this.isGeoHidden;
    }
  }

  
}