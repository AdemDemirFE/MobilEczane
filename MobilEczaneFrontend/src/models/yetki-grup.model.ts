import { Moment } from 'moment';
import { IUygulama } from './uygulama.model';

export interface IYetkiGrup {
  id?: number;
  aciklama?: string;
  aktifMi?: boolean;
  olusturan?: string;
  olusturmaTarihi?: Moment;
  guncelleyen?: string;
  guncelemeTarihi?: Moment;
  uygulama?: IUygulama;
}

export class YetkiGrup implements IYetkiGrup {
  constructor(
    public id?: number,
    public aciklama?: string,
    public aktifMi?: boolean,
    public olusturan?: string,
    public olusturmaTarihi?: Moment,
    public guncelleyen?: string,
    public guncelemeTarihi?: Moment,
    public uygulama?: IUygulama
  ) {
    this.aktifMi = this.aktifMi || false;
  }
}
