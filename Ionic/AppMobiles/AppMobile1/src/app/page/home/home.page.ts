import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  email: string = ""
  pass: string = ""
  valor: number=0

  constructor(private firebase:FirebaseService, private router:Router, private activate:ActivatedRoute) { 
      this.activate.queryParams.subscribe(params => {
      this.email=params['email'];
      this.pass=params['password'];
      this.valor=params['valor'];
    //  console.log(this.email,this.pass,this.valor);
    })
  }

  ngOnInit() {
  }

async logout(){
  await this.firebase.logout();
  this.router.navigateByUrl('login');
}

}
