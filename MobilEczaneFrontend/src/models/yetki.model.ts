import { Moment } from 'moment';
import { IUygulama } from './uygulama.model';

export interface IYetki {
  id?: number;
  tipi?: number;
  ozelKodu?: string;
  gizliMi?: boolean;
  ceviriKodu?: string;
  aktifMi?: boolean;
  siraNo?: number;
  varsayilan?: boolean;
  aciklama?: string;
  ozelDurum?: string;
  iconContentType?: string;
  icon?: any;
  iconYolu?: string;
  erisimYolu?: string;
  olusturan?: string;
  olusturmaTarihi?: Moment;
  guncelleyen?: string;
  guncelemeTarihi?: Moment;
  uygulama?: IUygulama;
  secim?:Boolean;
}

export class Yetki implements IYetki {
  constructor(
    public id?: number,
    public tipi?: number,
    public ozelKodu?: string,
    public gizliMi?: boolean,
    public ceviriKodu?: string,
    public aktifMi?: boolean,
    public siraNo?: number,
    public varsayilan?: boolean,
    public aciklama?: string,
    public ozelDurum?: string,
    public iconContentType?: string,
    public icon?: any,
    public iconYolu?: string,
    public erisimYolu?: string,
    public olusturan?: string,
    public olusturmaTarihi?: Moment,
    public guncelleyen?: string,
    public guncelemeTarihi?: Moment,
    public uygulama?: IUygulama,
    public secim?:Boolean
  ) {
    this.gizliMi = this.gizliMi || false;
    this.aktifMi = this.aktifMi || false;
    this.varsayilan = this.varsayilan || false;
    this.secim=this.secim || false;
  }
}
