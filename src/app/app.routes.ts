import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampusScreenComponent } from './components/campus-screen/campus-screen.component';
import { ProfileScreenComponent } from './components/profile-screen/profile-screen.component';
import { FacultyScreenComponent } from './components/faculty-screen/faculty-screen.component';
import { HeaderComponent } from './components/header/header.component';
import { HelpScreenComponent } from './components/help-screen/help-screen.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { RegisterScreenComponent } from './components/register-screen/register-screen.component';
import { SearchScreenComponent } from './components/search-screen/search-screen.component';


const routes: Routes = [
    {path: 'home', component: HomeScreenComponent},
    {path: 'login', component: LoginScreenComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
  export { routes }; 