import { Component, OnInit } from '@angular/core';
import { CurrentIdentityService } from '../security/current-identity.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // constructor(
  //   private currentIdentity: CurrentIdentityService,
  //   private sessions: Sessions,
  //   // @Inject('toastr') private toastr,
  //   private route: ActivatedRoute,
  //   private unreviewedSessionCount: UnreviewedSessionCount
  // ) {
  //   console.log('home');
  //   this.currentUser = currentIdentity.currentUser;
  //   this.setNextSessionToReview();

  //   this.route.data.subscribe((val) => console.log('subscribe', val));
  // }

  ngOnInit(): void {}
}
