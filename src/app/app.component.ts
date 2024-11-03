import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeScreenComponent } from "./components/home-screen/home-screen.component";
import { HeaderComponent } from './components/header/header.component';
import { ProfileScreenComponent } from './components/profile-screen/profile-screen.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeScreenComponent, HeaderComponent, ProfileScreenComponent, LoginScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bioface-frontend';
}
