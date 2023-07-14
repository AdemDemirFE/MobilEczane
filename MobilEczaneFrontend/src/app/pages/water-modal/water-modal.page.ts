import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams, PickerController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { C_Utils } from 'src/providers/utils';

@Component({
  selector: 'app-water-modal',
  templateUrl: './water-modal.page.html',
  styleUrls: ['./water-modal.page.scss'],
})
export class WaterModalPage implements OnInit {
  type: number;
  //#region pickerParam
  masCol = [];
  subCol = [];
  multiColumnOptions: any;
  defaultColumnOptions = [[]];
  //#endregion
  maxDate: any;
  selectDate: any;
  value: string = "00"
  desc: string = '';
  monthList: any;
  constructor(navParams: NavParams,
    public modalController: ModalController,
    public pickerController: PickerController,
    public translateService: TranslateService,
    public c_Utils: C_Utils,
  ) {
    this.type = navParams.get('type');
    //this.pickerCal();
  }
  ionViewWillEnter() {
    if (this.translateService.currentLang === "en") {
      this.monthList = "jan, feb, mar, apr, mai, jun, jul, aug, sep, okt, nov, des";
    } else
      if (this.translateService.currentLang === "ru") {
        this.monthList = "январь, февраль, март, апрель, май, июнь, июль, август, сентябрь, октябрь, ноябрь, декабрь";
      } if (this.translateService.currentLang === "kz") {
        this.monthList = "қантар, ақпан, наурыз, сәуір, мамыр, маусым, шілде, тамыз, қыркүйек, қазан, қараша, желтоқсан";
      }

    this.maxDate = moment(new Date()).format('YYYY-MM-DD');
    this.selectDate = moment(new Date()).toLocaleString();
  }
  /**
   * Picker Alanlarının içerisini dolduran fonk.
   */
  // pickerCal() {

  //   let mcnt = 100;
  //   this.masCol.push(mcnt);
  //   for (let index = 0; index < 100; index++) {

  //     if (index != 0)
  //       this.masCol.push(mcnt * index);
  //     this.subCol.push(index < 10 ? '0' + index : index);

  //   }
  //   this.multiColumnOptions = [
  //     this.masCol,
  //     this.subCol
  //   ]
  // }


  ngOnInit() {
  }

  async openPicker(numColumns: any, numOptions: any, columnOptions: any) {
    this.translateService.get(['WARNING_', 'OK']).subscribe(async values => {
      const picker = await this.pickerController.create({
        columns: this.getColumns(numColumns, numOptions, columnOptions),
        buttons: [
          {
            text: values.WARNING_.CANCEL,
            role: 'cancel'
          },
          {
            text: values.OK,
            handler: (value) => {
              if (parseInt(value["col-0"].text.toString()) < 1000) {
                this.value = value["col-0"].text.toString().substring(0, 1) + value["col-1"].text;
              } else {
                this.value = value["col-0"].text.toString().substring(0, 2) + value["col-1"].text;
              }
            }
          }
        ]
      });

      await picker.present();
    });
  }

  getColumns(numColumns: number, numOptions: any, columnOptions: any) {
    let columns = [];
    for (let i = 0; i < numColumns; i++) {
      columns.push({
        name: `col-${i}`,
        options: this.getColumnOptions(i, numOptions, columnOptions)
      });
    }

    return columns;
  }

  getColumnOptions(columnIndex: number, numOptions: number, columnOptions: { [x: string]: any[]; }) {
    let options = [];
    for (let i = 0; i < numOptions; i++) {
      options.push({
        text: columnOptions[columnIndex][i % numOptions],
        value: i
      })
    }

    return options;
  }
  async exitModal() {
    await this.modalController.dismiss(null);
  }
  async closeModal() {
    this.translateService.get(['ERROR']).subscribe(async values => {
      if ((this.type == 0 && this.value != "00") || (this.type == 1 && this.value != "00" && this.desc != '')) { await this.modalController.dismiss({ type: this.type, desc: this.desc, value: this.value, selectDate: this.selectDate }); } else {
        this.c_Utils.getToast(values.ERROR.DESC_FIELD_IS_REQUIRED, 'middle', 500, false, "toast-error");
      }
    });

  }

}
