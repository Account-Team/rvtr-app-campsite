import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account/account.service';
import { Account } from '../data/account.model';

@Component({
  selector: 'uic-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  //INITIALIZE ID TO SOMETHING REAL
  ID="askjfl";
  accounts: Account[];
  profiles = this.accounts[0].profiles;
  payments = this.accounts[0].payments;
  getAccounts(): void {
    this.accountService.get(this.ID)
    .subscribe(accounts => this.accounts = accounts);
  }
}


