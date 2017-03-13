import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {id: 1, name: 'Windstorm'};
  onClick(): void {
    this.hero = {id: 2, name: 'Bomb' };
  }
}

class Hero {
  id: number;
  name: String;
}
