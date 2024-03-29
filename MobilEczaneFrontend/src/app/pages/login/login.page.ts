import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Service } from 'src/providers/service/service';
import { C_Utils } from 'src/providers/utils';
import { GeneralSettings, account, appCode, appVersion } from 'src/app/pages';
import { Langs } from '../select-lang/lang';

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



  appCode = appCode;

  account = account;
  showPassword: boolean = false;
  qrLink: string = 'http://ivital.akgun.com.tr/ivital-dev/content/ivital-frontend/#/settings';
  isCaptchaRequired: boolean = false;
  incorrectAttempts: number = 0;
  settings = GeneralSettings;
  languages = Langs;
  isButtonDisabled: boolean = false;
  code: any;

  constructor(
    private router: Router,
    private translateService: TranslateService,
    public loadingController: LoadingController,
    private alertController: AlertController,
    public navCtrl: NavController,
    public http: HttpClient,
    public C_Utils: C_Utils,
    public service: Service,
    public modalCtrl: ModalController,
    public navController: NavController

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
  changeLanguege() {

    this.translateService.setDefaultLang(this.code);
    this.translateService.use(this.code);
    localStorage.setItem('selectLang', this.code);
    this.settings.dil = this.code;
    if (this.code === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
    this.navCtrl.navigateForward("/login");

  }


  changeLangue22() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        type: 2,
      }
    };
    this.navCtrl.navigateForward("/select-language", navigationExtras);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  forgetPassword() {

  }

  QRCode() {
    //window.location.href aynı sayfada bir location açar. alt satırdaki kod başka sayfada bir location açıyor.
    window.open(this.qrLink);

  }

  doLogin2() {
    this.navCtrl.navigateForward("/home");
  }

  doLogin() {
  }

}
