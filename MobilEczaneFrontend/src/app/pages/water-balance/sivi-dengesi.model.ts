import { Moment } from 'moment';
export interface ISiviDengesi {
    id?: number;
    degeri?: number;
    tipi?:number;
    olusturan?: string;
    olusturmaTarihi?: Moment;
    guncelleyen?: string;
    guncelemeTarihi?: Moment;
    hastaId?: number;
    siviTipiId?: number;
}

export class SiviDengesi implements ISiviDengesi {
    constructor(
        public id?: number,
        public degeri?: number,
        public olusturan?: string,
        public olusturmaTarihi?: Moment,
        public guncelleyen?: string,
        public guncelemeTarihi?: Moment,
        public hastaId?: number,
        public siviTipiId?: number,
        tipi?:number
    ) { }
}