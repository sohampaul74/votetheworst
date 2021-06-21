import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserProfile } from '../../model/UserProfile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() userProfile: UserProfile | undefined;
  @Output() userProfileChange = new EventEmitter<UserProfile>();

  constructor() { }

  ngOnInit(): void {
  }

}
