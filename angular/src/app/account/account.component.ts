import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account/account.service';
import { Account } from '../data/account.model';
import { Profile } from '../data/profile.model';
import { ACCOUNTS } from '../mock-account';

@Component({
  selector: 'uic-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  accounts = ACCOUNTS;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    //this.getAccounts();
  }
  selectedProfile: Profile;
  //INITIALIZE ID TO SOMETHING REAL
  ID="askjfl";
  //accounts: Account[];    FIXME:
  profiles = this.accounts[0].profiles;
  payments = this.accounts[0].payments;

  onSelect(profile: Profile): void {
    this.selectedProfile = profile;
  }
  
  getAccounts(): void {
    this.accountService.get(this.ID)
    .subscribe(accounts => this.accounts = accounts);
  }
}


