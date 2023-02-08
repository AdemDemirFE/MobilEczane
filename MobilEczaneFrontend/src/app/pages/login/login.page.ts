import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, AlertController, LoadingController, ModalController, Platform } from '@ionic/angular';
import { NavigationExtras } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from 'src/app/app.component';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  appVersion = "1.0.0";
  identificationNumber = "";
  identificationPass = "";
  loginBtnName = "";
  segmentName = "hasta"
  personelType_ = "";
  onayla = false;
  toggleOnayla = false;
  appKodu = "Mobil Eczane";
  kodu: any = "";
  hastaKontrolData: any = [];
  rememberMe: boolean = false;
  username="";
  password="";
  constructor(
    public modalCtrl: ModalController,
    public menuCtrl: MenuController,
    public navCnt: NavController,
    public alertController: AlertController,
    private navController: NavController,
    public translateService: TranslateService,
    public loadingController: LoadingController,
    public myApp: AppComponent,
    public http: HttpClient,
    public formBuilder: FormBuilder,
    private router: Router,
    public platform: Platform
  ) { }

  ngOnInit() {
  }
  segmentChanged(ev: any) {
    if (ev.detail.value == "hasta") {
      this.segmentName = "hasta"
    } else {
      this.segmentName = "personel"
    }

  }
  loginPersonel() {

  }

  kullanimSozlesmesi() {
  }
  login() {
    this.navController.navigateBack('tabs/home')
  }
  changeLangue() {
    this.navController.navigateForward("/select-lang");
  }
  forgotPassword() {
    
  }
}
