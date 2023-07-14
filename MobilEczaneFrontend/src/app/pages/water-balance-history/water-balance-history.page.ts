import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ModalController, LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Service } from 'src/providers/service/service';
import { C_Utils } from 'src/providers/utils';
import * as moment from "moment";

@Component({
  selector: 'app-water-balance-history',
  templateUrl: './water-balance-history.page.html',
  styleUrls: ['./water-balance-history.page.scss'],
})
export class WaterBalanceHistoryPage implements OnInit {

  dataList: any[] = [];
  moment = moment;
  startDate: any;
  endDate: any;
  maxDate: any;
  constructor(
    public modalController: ModalController,
    public alertController: AlertController,
    public navCtrl: NavController,
    public c_Utils: C_Utils,
    public translateService: TranslateService,
    public service: Service,
    public loadingController: LoadingController
  ) {
    this.dataList.push({ siviKod: "", degeri: "", olusturmaTarihi: "" });
   
  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.maxDate= moment(new Date()).format('YYYY-MM-DD');
    this.startDate = moment(new Date()).format('YYYY-MM-DD');
    this.endDate = moment(new Date()).add('days', 1).format('YYYY-MM-DD');
    this.getWaterBalanceHistoryData();

  }
  
  selectItem(item: any, index: any) {

  }

  delete(item: any) {
    this.presentAlert(item);
  }

  updateDate($event: any){
    this.startDate = moment($event).format('YYYY-MM-DD');
    this.endDate = moment($event).add('days', 1).format('YYYY-MM-DD');
 setTimeout(() => {
  this.getWaterBalanceHistoryData();
 }, 150);
  }

  async presentAlert(item: any) {
    this.translateService.get(['WARNING_', 'ERROR', 'SUCCESSFUL', 'PLEASE_WAIT']).subscribe(async values => {
      const alert = await this.alertController.create({
        header: values.WARNING_.WARNING,
        message: values.WARNING_.ARE_YOU_SURE_YOU_WANT_TO_DELETE,
        buttons: [
          {
            text: values.WARNING_.CANCEL,
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
             // console.log('Confirm Cancel: blah');
              this.c_Utils.getToast(values.WARNING_.CANCEL, 'middle', 500, false, "toast-error");
            }
          }, {
            text: values.WARNING_.DELETE,
            handler: () => {
              this.deleteItem(item)
            //  console.log('Confirm Okay');
            }
          }
        ]
      });
      await alert.present();
    });
  }

  deleteItem(item: any) {
    this.translateService.get(['LOGIN', 'ERROR', 'SUCCESSFUL', 'PLEASE_WAIT']).subscribe(async values => {
      var loading = await this.loadingController.create({
        message: (values.PLEASE_WAIT)
      });
      await loading.present();

      this.service.delete(item.id, "hasta-sivi-dengesis").subscribe((response: any) => {
        loading.dismiss();
        this.getWaterBalanceHistoryData();
        this.c_Utils.getToast(values.SUCCESSFUL, 'middle', 500, false, "toast-success");
      }, (err) => {
       // console.log(JSON.stringify(err));
       loading.dismiss();
        this.c_Utils.getToast(values.LOGIN.NOT_CONNECT_SERVER, 'middle', 500, false, "toast-error");
      });
    });
  }

  async backButtonTapped() {
    await this.modalController.dismiss();
  //  this.navCtrl.pop();
    /*this.navCtrl.navigateBack('/tabs/tabs/tab2',{
      animated:true,
      animationDirection: 'back'
  })*/
  }

  getWaterBalanceHistoryData() {
    this.translateService.get(['LOGIN', 'ERROR', 'PLEASE_WAIT']).subscribe(async values => {
      var loading = await this.loadingController.create({
        message: (values.PLEASE_WAIT)
      });
      await loading.present();

      this.service.query("hasta-sivi-dengesis?page=0&size=20" + "&olusturmaTarihi.greaterOrEqualThan=" + moment(this.startDate).toISOString() + "&olusturmaTarihi.lessOrEqualThan=" + moment(this.endDate).toISOString() + "&sort=olusturmaTarihi,desc").subscribe((response: any) => {
        loading.dismiss();
        this.dataList = response;
        

      }, (err) => {
        loading.dismiss();
        //console.log(JSON.stringify(err));
        this.c_Utils.getToast(values.LOGIN.NOT_CONNECT_SERVER, 'top', 4000, false, "toast-error");
      });
    });
  }

}
