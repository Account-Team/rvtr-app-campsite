import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [AppComponent, AccountComponent, ProfileComponent],
  imports: [AppRoutingModule, BrowserModule, LayoutModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
