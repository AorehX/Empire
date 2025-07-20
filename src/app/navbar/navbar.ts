import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})

export class Navbar {
  title:string = "Eddy's Empire"

  searchHome() {
    alert('This will search global items!')
  }
}
