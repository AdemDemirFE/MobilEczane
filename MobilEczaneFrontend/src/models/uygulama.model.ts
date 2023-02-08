import { IYetki } from './yetki.model';
import { IYetkiGrup } from './yetki-grup.model';

export interface IUygulama {
  id?: number;
  tipi?: number;
  adi?: string;
  kodu?: string;
  logo?: string;
  paketi?: string;
  aktifMi?: boolean;
  yetkis?: IYetki[];
  yetkiGrups?: IYetkiGrup[];
}

export class Uygulama implements IUygulama {
  constructor(
    public id?: number,
    public tipi?: number,
    public adi?: string,
    public kodu?: string,
    public logo?: string,
    public paketi?: string,
    public aktifMi?: boolean,
    public yetkis?: IYetki[],
    public yetkiGrups?: IYetkiGrup[]
  ) {
    this.aktifMi = this.aktifMi || false;
  }
}
