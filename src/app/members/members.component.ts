import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MembersComponent implements OnInit {
  name: any;
  state: string = '';

  constructor(public afAuth: AngularFireAuth,private router: Router) {
    //
    // this.af.auth.subscribe(auth => {
    //   if(auth) {
    //     this.name = auth;
    //   }
    // });

  }

  logout() {
    //  this.af.auth.logout();
     this.router.navigateByUrl('/login');
  }


  ngOnInit() {
  }
}
