import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const API_URL = 'https://api.genshin.dev/';

@Injectable({
  providedIn: 'root'
})
export class GenshinService {

  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get(API_URL + 'characters', {
      params: {
        action: 'query',
        format: 'json',
        utf8: '1',
        origin: '*'
      }
    });
  }

  getCharacter(value: string) {
    return this.http.get(API_URL + 'characters/' + value, {
      params: {
        origin: '*'
      }
    });
  }
}
