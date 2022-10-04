import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivesComponent } from './components/archives/archives.component';
import { CabinetComponent } from './components/cabinet/cabinet.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { SolutionsComponent } from './components/solutions/solutions.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'home', component:HomeComponent },
  { path: 'cabinet', component:CabinetComponent },
  { path: 'solutions', component:SolutionsComponent },
  { path: 'archives', component:ArchivesComponent },
  { path: 'contact', component:ContactComponent },
  { path: 'signup', component:SignupComponent },
  { path: 'login', component:LoginComponent },
  { path: '**', component:NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
