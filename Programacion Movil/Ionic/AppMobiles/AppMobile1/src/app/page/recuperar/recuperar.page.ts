import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  constructor(private firebase:FirebaseService, private router:Router) { }
  email=""

  ngOnInit() {
  }

  async recuperar(){
    let usuario=await this.firebase.recuperar(this.email);
    console.log(usuario);
    this.router.navigateByUrl('login');

  }

}
