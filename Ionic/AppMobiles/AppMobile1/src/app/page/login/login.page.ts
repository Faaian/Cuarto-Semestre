import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email=""
  password=""

  constructor(private firebase:FirebaseService, private router:Router, private alertcontroller:AlertController) { }

  ngOnInit() {
  }
  async login(){
    try {
      let usuario=await this.firebase.auth(this.email,this.password);
      console.log(usuario)
      this.router.navigateByUrl('home');
    } catch(error){
      console.log(error);
      this.popAlert();
    }
  }

    async popAlert(){
      const alert = await this.alertcontroller.create({
        header:'Error',
        message:"Usuario o Contraseña incorrecta",
        buttons:['Ok']
      })
      await alert.present();
    }
}
