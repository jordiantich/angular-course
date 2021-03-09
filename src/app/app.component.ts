import { Component } from '@angular/core';
import { Router } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  nombre= " Jordi";

  constructor (private router: Router){
    console.log('constructor')
  }
}
