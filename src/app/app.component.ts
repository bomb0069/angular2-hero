import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {id: 1, name: 'Windstorm'};
}

class Hero {
  id: number;
  name: String;
}
