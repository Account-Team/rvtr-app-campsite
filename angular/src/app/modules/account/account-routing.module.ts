import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from 'src/app/account/account.component';
import { ProfileComponent } from 'src/app/profile/profile.component';


const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'profile/:id', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
