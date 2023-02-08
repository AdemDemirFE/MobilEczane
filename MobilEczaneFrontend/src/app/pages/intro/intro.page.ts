import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Service } from 'src/providers/service/service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

    slideOptsOne = {
    initialSlide: 0,
    speed: 400,
    autoplay: false,
   
  };
  

  constructor(
    private router: Router,
    public menuCtrl: MenuController,
    public translateService: TranslateService,
    public service: Service,
    private navController: NavController,
  ) {

  }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  goLogin() { 
   this.router.navigateByUrl('/login')
  }
  changeLangue() {
    this.navController.navigateForward("/select-lang");
  }
}
