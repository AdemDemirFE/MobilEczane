import { Moment } from 'moment';
import * as moment from 'moment';

export interface IKullanici {
  id?: any;
  kullaniciAdi?: string;
  sifreHash?: string;
  ad?: string;
  soyad?: string;
  email?: string;
  kimlikNo?: string;
  doktorMu?: boolean;
  yetkiGrupId?: number;
  telefon?: string;
  resimContentType?: string;
  resim?: any;
  resimYolu?: string;
  ozgecmis?: string;
  dogumTarihi?: any;
  hbysKullanici?: string;
  titresimAktif?: boolean;
  sesAktif?: boolean;
  bildirimAktif?: boolean;
  tumHastalariGorebilir?: boolean;
  yoneticiMi?: boolean;
  musHizmetleriMi?: boolean;
  pasifMi?: boolean;
  pasifNedeni?: string;
  pasifEden?: string;
  kullaniciId?: number;
  tipi?: number;
  sifreTarihi?: Moment;
  sifreSuresi?: number;
  sifreDegistirebilir?: boolean;
  sonOturumTarihi?: Moment;
  oturumSayisi?: number;
  hataliSifreSayisi?: number;
  secim?:boolean;
}

export class Kullanici implements IKullanici {
  constructor(
    public id?: number,
    public kullaniciAdi?: string,
    public sifreHash?: string,
    public ad?: string,
    public soyad?: string,
    public email?: string,
    public kimlikNo?: string,
    public doktorMu?: boolean,
    public yetkiGrupId?: number,
    public telefon?: string,
    public resimContentType?: string,
    public resim?: any,
    public resimYolu?: string,
    public ozgecmis?: string,
    public dogumTarihi?: any,
    public hbysKullanici?: string,
    public titresimAktif?: boolean,
    public sesAktif?: boolean,
    public bildirimAktif?: boolean,
    public tumHastalariGorebilir?: boolean,
    public yoneticiMi?: boolean,
    public musHizmetleriMi?: boolean,
    public pasifMi?: boolean,
    public pasifNedeni?: string,
    public pasifEden?: string,
    public kullaniciId?: number,
    public tipi?: number,
    public sifreTarihi?: Moment,
    public sifreSuresi?: number,
    public sifreDegistirebilir?: boolean,
    public sonOturumTarihi?: Moment,
    public oturumSayisi?: number,
    public hataliSifreSayisi?: number,
    public secim?:boolean
  ) 
  {
  
    this.resim = this.resim || null ;
    this.dogumTarihi =this.dogumTarihi || null;
    this.titresimAktif = this.titresimAktif || false;
    this.sesAktif = this.sesAktif || false;
    this.bildirimAktif = this.bildirimAktif || false;
    this.tumHastalariGorebilir = this.tumHastalariGorebilir || false;
    this.yoneticiMi = this.yoneticiMi || false;
    this.musHizmetleriMi = this.musHizmetleriMi || false;
    this.pasifMi = this.pasifMi || false;
    this.kullaniciId = this.kullaniciId || -1 ;
    this.sifreTarihi =  this.sifreTarihi || moment(new Date()) ;
    this.sifreSuresi = this.sifreSuresi || 500 ;
    this.sifreDegistirebilir = this.sifreDegistirebilir || false;
    this.secim = this.secim || false;
      }
}
