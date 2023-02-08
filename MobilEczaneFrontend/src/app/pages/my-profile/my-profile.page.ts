import { Component, OnInit } from '@angular/core';
import { account } from '../../pages';
import { NavController, ActionSheetController, LoadingController,Platform } from '@ionic/angular';
import * as moment from "moment";
import { C_Utils } from 'src/providers/utils';
import { Service } from 'src/providers/service/service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {

  _account = account;
  moment = moment;
  actionSheet: any;
  patientType: any;

  constructor(
    private navController: NavController,
    public actionSheetCtrl: ActionSheetController,
    public c_Utils: C_Utils,
    public service: Service,
    public translateService: TranslateService,
    public loadingController: LoadingController,
    public platform: Platform,
  ) {
    if (localStorage.getItem("patientType") == undefined || localStorage.getItem("patientType") == null) {
      localStorage.setItem("patientType", "0");
      this.patientType = 0;
    } else {
      this.patientType = localStorage.getItem("patientType");
    }
  }

  ngOnInit() {
  }

  backButtonTapped() {
    this.navController.navigateBack('/tabs/tabs/tab1')
  }

  changeImage(fileInput:any) {
    //this.openActionSheet(fileInput);
  }
  selectPatient(type: number) {
    this._account.type = type;
    this.patientType = type.toString();
    localStorage.setItem("patientType", type.toString());
  }

}
