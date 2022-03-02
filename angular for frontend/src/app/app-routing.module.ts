import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  { path : "home", component : HomeComponent },
  { path : "users-list", component : UsersListComponent },
  { path : "register", component : RegistrationComponent },
  { path : "search", component : SearchUsersComponent },
  { path : "", redirectTo : "home", pathMatch : "full" },
  { path : "**", component : HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
