import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: 'logout', component: LogoutComponent },
  { path: '', component: HomeComponent ,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
