import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, PopoverController, AlertController, LoadingController, IonRouterOutlet } from '@ionic/angular';

import { C_Utils } from 'src/providers/utils';
import { Service } from 'src/providers/service/service';
import { TranslateService } from '@ngx-translate/core';
import { ISiviDengesi } from './sivi-dengesi.model';
import * as moment from "moment";
import { WaterModalPage } from '../water-modal/water-modal.page';
import { WaterBalanceHistoryPage } from '../water-balance-history/water-balance-history.page';

@Component({
  selector: 'app-water-balance',
  templateUrl: './water-balance.page.html',
  styleUrls: ['./water-balance.page.scss'],
})

export class WaterBalancePage implements OnInit {

  height: number;
  height2: number;
  valueIn: number;
  valueOut: number;
  dataList: ISiviDengesi[] = [];
  siviTipi: any[] = [];
  glassWater: any = 200;
  cupTea: any = 200;
  soup: any = 200;
  soupOther: any = 200;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public popoverController: PopoverController,
    public alertController: AlertController,
    public c_Utils: C_Utils,
    private routerOutlet: IonRouterOutlet,
    public service: Service,
    public translateService: TranslateService,
    public loadingController: LoadingController
  ) {
    this.height = 0;
    this.height2 = 0;
    this.valueIn = 0;
    this.valueOut = 0;
  }
  find_in_object(my_object: any, my_criteria: any) {
    try {
      return my_object.filter(function (obj:any) {
        return Object.keys(my_criteria).every(function (c) {
          return obj[c] == my_criteria[c];
        });
      });
    } catch (error) {
      return [];
    }
  }


  ngOnInit() {
  }

  public ionViewWillEnter() {

    this.height = 0;
    this.height2 = 0;
    this.getWaterBalanceHistoryData();
    this.getWaterTypeData();

  }

  backButtonTapped() {
    this.navCtrl.navigateBack('/tabs/tabs/tab1');
  }

  add(type: number) {
    this.presentModal(type);
  }

  remove(val: number) {
    if (this.height > 0) {
      this.height = this.height - this.waterControl(val);
    }

  }

  addItem(item: any, item2?: any) {

    this.save(item);

  }

  waterControl(val: number): number {
    return val / 22;
  }


  async onTappdeHistory() {
    const modal = await this.modalCtrl.create({
      component: WaterBalanceHistoryPage,
      cssClass: 'genis-modal'

    });
    await modal.present();
    modal.onDidDismiss().then(result => {
      this.height = 0;
      this.height2 = 0;
      this.getWaterBalanceHistoryData();
      this.getWaterTypeData();

    })
    //  this.navCtrl.navigateForward('/water-balance-history');
  }

  getWaterBalanceHistoryData() {

    this.translateService.get(['LOGIN', 'ERROR', 'PLEASE_WAIT']).subscribe(async values => {

      var loading = await this.loadingController.create({
        message: (values.PLEASE_WAIT)
      });
      await loading.present();

      this.dataList.splice(0, this.dataList.length);
      //this.service.query("hasta-sivi-dengesis?page=0&size=20" + "&olusturmaTarihi.greaterOrEqualThan=" + moment(moment(new Date()).format('YYYY-MM-DD')).toISOString() + "&olusturmaTarihi.lessOrEqualThan=" + moment(moment(new Date()).format('YYYY-MM-DD')).add('days', 1).toISOString() + "&sort=olusturmaTarihi,desc").subscribe((response: any) => {
      this.service.query("sivi-dengesis?page=0&size=20&sort=id,asc").subscribe((response: any) => {
        loading.dismiss();
        response.forEach((element: ISiviDengesi) => {
          this.dataList.push(element);
        });

        //this.dataControlGrapt();

      }, (err) => {
        loading.dismiss();
        //console.log(JSON.stringify(err));
        this.c_Utils.getToast(values.LOGIN.NOT_CONNECT_SERVER, 'middle', 500, false, "toast-error");
      });
    });
  }

  // dataControlGrapt() {
  //   this.height = 0;
  //   this.height2 = 0;
  //   this.valueIn = 0;
  //   this.valueOut = 0;
  //   this.dataList.forEach(element => {
  //     if (element.tipi == 1) {
  //       this.valueIn = this.valueIn + element.degeri;
  //       if (this.height == 0) {
  //         this.height = this.height + (this.waterControl(element.degeri) - 3.5);
  //       } else {
  //         this.height = this.height + this.waterControl(element.degeri);
  //       }
  //       if (this.height > 87.41) {
  //         this.height = 87.41;
  //       }
  //     } else
  //       if (element.tipi == 0) {
  //         this.valueOut = this.valueOut + element.degeri;
  //         if (this.height2 == 0) {
  //           this.height2 = this.height2 + (this.waterControl(element.degeri) - 3.5);
  //         } else {
  //           this.height2 = this.height2 + this.waterControl(element.degeri);

  //         }
  //         if (this.height2 > 87.41) {
  //           this.height2 = 87.41;
  //         }
  //       }
  //   });
  // }
  deleteHistory() {
    this.translateService.get(['WARNING_', 'ERROR', 'SUCCESSFUL', 'PLEASE_WAIT']).subscribe(async values => {
      const alert = await this.alertController.create({
        header: values.WARNING_.WARNING,
        message: values.WARNING_.ARE_YOU_SURE_YOU_WANT_TO_DELETE_ALL,
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
              if (this.dataList.length > 0)
                this.deleteItem(this.dataList[0])


              // console.log('Confirm Okay');
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
        this.c_Utils.getToast(values.SUCCESSFUL, 'middle', 500, false, "toast-success");
        item.silindi = true;
        this.dataList.splice(0, 1);
        if (this.dataList.length > 0)
          this.deleteItem(this.dataList[0])
        else {
          this.getWaterBalanceHistoryData();
        }
      }, (err) => {
        //console.log(JSON.stringify(err));
        loading.dismiss();
        this.getWaterBalanceHistoryData();
        this.c_Utils.getToast(values.LOGIN.NOT_CONNECT_SERVER, 'middle', 500, false, "toast-error");
      });
    });
  }

  getWaterTypeData() {
    this.translateService.get(['LOGIN', 'ERROR', 'PLEASE_WAIT']).subscribe(async values => {
      //  this.c_Utils.presentLoading(values.PLEASE_WAIT);
      var loading = await this.loadingController.create({
        message: (values.PLEASE_WAIT)
      });
      await loading.present();
      this.service.query("sivi-tipis?page=0&size=20&aktifMi.equals=true&sort=ceviriKodu,asc").subscribe((response: any) => {
        //   this.c_Utils.dismissLoading();
        loading.dismiss();
        this.siviTipi = response;
        response.forEach((element: { ceviriKodu: any; tipi: number; }) => {
          this.siviTipi = response;
          switch (element.ceviriKodu) {
            case "GLASS_OF_WATER":
              element.tipi = 1;
              this.glassWater = element;
              break;
            case "CUP_OF_TEA":
              element.tipi = 1;
              this.cupTea = element;
              break;
            case "PLATE_SOUP":
              element.tipi = 1;
              this.soup = element;
              break;
            case "PLATE_CANTEEN":
              element.tipi = 1;
              this.soupOther = element;
              break;
            default:
              break;
          }
        });

      }, (err) => {
        loading.dismiss();
        // this.c_Utils.dismissLoading();
        //(JSON.stringify(err));
        this.c_Utils.getToast(values.LOGIN.NOT_CONNECT_SERVER, 'middle', 500, false, "toast-error");
      });
    });
  }

  async save(item: any) {
    let params = {
      "tipi": item.tipi,
      "degeri": item.varsayilanDegeri,
      "siviTipiId": item.id,
      "siviAdi": item.ack,
      "olusturmaTarihi": item.tarih
    };

    this.translateService.get(['LOGIN', 'ERROR', 'SUCCESSFUL', 'PLEASE_WAIT']).subscribe(async values => {
      var loading = await this.loadingController.create({
        message: (values.PLEASE_WAIT)
      });
      await loading.present();

      this.service.create(params, "hasta-sivi-dengesis").toPromise().then((response: any) => {
        //      this.c_Utils.dismissLoading();
        loading.dismiss();
        if (!response.durum) {
          this.c_Utils.getToast(values.ERROR[response.mesaj], 'middle', 500, false, "toast-error");
        } else {
          this.dataList.push(response.data);
          //this.dataControlGrapt();
          this.c_Utils.getToast(values.SUCCESSFUL, 'middle', 500, false, "toast-success");
        }
      }, (err) => {
        //   this.c_Utils.dismissLoading();
        // console.log(JSON.stringify(err));
        loading.dismiss();
        this.c_Utils.getToast(values.LOGIN.NOT_CONNECT_SERVER, 'middle', 500, false, "toast-error");
      });
    });
  }
  async presentModal(type: number) {

    const modal = await this.modalCtrl.create({
      component: WaterModalPage,
      //cssClass: 'genis-modal',
      cssClass: (type == 0 ? 'custom-modal2' : 'custom-modal3'),
      backdropDismiss: true,
      componentProps: {
        'type': type
      }
    });
    await modal.present();
    modal.onDidDismiss().then(result => {

      if (result.data != undefined) {
        this.save({
          tipi: result.data.type,
          varsayilanDegeri: result.data.value,
          id: null,
          tarih: moment(result.data.selectDate).toISOString(),
          ack: result.data.type == 0 ? 'WITHDRAWN' : result.data.desc
        })
      }
    })
  }
}
