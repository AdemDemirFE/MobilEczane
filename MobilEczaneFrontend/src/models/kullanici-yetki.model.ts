import { Moment } from 'moment';
import { IYetki } from './yetki.model';

export interface IKullaniciYetki {
  id?: number;
  tipi?: number;
  yetkiId?: number;
  aktifMi?: boolean;
  yetkiGrupId?: number;
  kullaniciId?: number;
  olusturan?: string;
  olusturmaTarihi?: Moment;
  guncelleyen?: string;
  guncelemeTarihi?: Moment;
  yetki?:IYetki;
  secim?: boolean;
}

export class KullaniciYetki implements IKullaniciYetki {
  constructor(
    public id?: number,
    public tipi?: number,
    public yetkiId?: number,
    public aktifMi?: boolean,
    public yetkiGrupId?: number,
    public kullaniciId?: number,
    public olusturan?: string,
    public olusturmaTarihi?: Moment,
    public guncelleyen?: string,
    public guncelemeTarihi?: Moment,
    public yetki?:IYetki,
    public secim?: boolean
  ) {
    this.aktifMi = this.aktifMi || false;
    this.secim = this.secim || false;
  }
}
