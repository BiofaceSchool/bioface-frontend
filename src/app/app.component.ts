import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeScreenComponent } from "./components/home-screen/home-screen.component";
import { HeaderComponent } from './components/header/header.component';
import { ProfileScreenComponent } from './components/profile-screen/profile-screen.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import {SearchScreenComponent} from "./components/search-screen/search-screen.component";
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, RouterOutlet, HeaderComponent, SearchScreenComponent, HomeScreenComponent, LoginScreenComponent, ProfileScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bioface-frontend';
}
