import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private firebase:FirebaseService, private router:Router) { }

  ngOnInit() {
  }

async logout(){
  await this.firebase.logout();
  this.router.navigateByUrl('login');
}

}
