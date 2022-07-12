import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
petitEcran: boolean = false;
  constructor() { }

  ngOnInit(): void {
    if (screen.width < 1000) {
      this.petitEcran = true;
    }
  }

}
