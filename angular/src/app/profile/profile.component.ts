import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../data/profile.model';
import { Location } from '@angular/common';

import { AccountService } from '../services/account/account.service';

@Component({
  selector: 'uic-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  @Input() profile: Profile;
  

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.accountService.get(id.toString());
  }

  //get the profile from id of clicked
  

}
