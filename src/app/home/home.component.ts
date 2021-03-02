import { Component, OnInit } from '@angular/core';
import { GenshinService } from '../genshin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private genshin: GenshinService) { }

  ngOnInit(): void {

    // this.genshin.getCharacter('ganyu').subscribe(result => {
    //   console.log(result);
    // })
  }

}
