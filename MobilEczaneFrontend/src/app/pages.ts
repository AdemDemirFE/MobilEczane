/**
 * Uygulama içerisindeki Dinamik Renk Tanımlarını İçerir.
 */
export let genelStyle: any = {
    //GENEL RENK START
    ANA_RENK: 'rgb(6, 136, 153)',
    ALT_RENK: 'rgb(25, 81, 88)',
    OZEL_RENK: 'rgb(6, 164, 204)',
    ZEMIN_LINEAR1: 'linear-gradient(rgb(6, 136, 153), rgb(255, 255, 255))',//Login Ekranı arka plan
    ANA_ZEMIN_RENK1: 'rgb(255, 255, 255)',
    ANA_ZEMIN_RENK2: ' rgb(198, 209, 211)',
    MENU_ZEMIN_RENK: 'rgb(184, 185, 189)',
    YAZI_RENGI: '#ffffff',
    //GENEL RENK END

    //-----DASHBOARRD START
    LOGO_RENK: 'rgb(95, 178, 247)',
    TOOLBAR_UST_RENK: '#222',
    TOOLBAR_YAN_RENK: 'Black',
    TOOLBAR_ALT_RENK: '#222',
    ZEMIN_RENK1: 'rgb(116, 115, 115)',
    ZEMIN_RENK2: 'rgb(74, 75, 75)',
    LISTE_UST_BASLIK_RENK: 'rgb(33, 33, 33)',
    LISTE_UST_BOSYATAK_RENK: 'rgb(66, 66, 66)',
    DOLU_YATAK_RENK: 'Black',
    BOS_YATAK_RENK: 'gray',
    LISTE_YAZI_RENK: 'White',
    BIRIM_SEC_RENK: "gray",
    MENU2_RENK: "#bbebf7",
    MENU2_YAZI_RENK: "#434354",
    MENU2_LOGO_RENK: "#ffffff",
    MENU2_ICON_GIZLE: false,
    TOOLBAR_UST_GIZLE: false,
    TOOLBAR_YAN_GIZLE: false,
    TOOLBAR_ALT_GIZLE: false,
    HASTA_KAYAN_YAZI_GIZLE: false,
    ALARM_KAYAN_YAZI_GIZLE: false,
    KONFERANS_ZEMIN_RENK: '#191136'
    //DASHBOARD END

};

export const appVersion = "2.3.6";

export const appCode = "TELE-DGT"; // akgun-mobile tarafında tanımlı yetki grubu, yetkiler,

export let homePersonelPage = "/home-personel";
 
export let contactType: number[] = [];

/**
 *Order Tedavi Planlarını içerisinde Tutar
 */

export let personelType: any = "hasta";


export let isAndroid: boolean[] = [false];
export let isIos: boolean[] = [false];
export let isBrowser: boolean[] = [false];
export let isAndroidWebView: boolean[] = [false];
export let isIosWebView: boolean[] = [false];



//Oturum Açan Kullanıcı Bilgilerini Tutar
export const account: { kimlikNo?: string, token?: string, type?: number, username?: string, password?: string, tgt?: string, cookie?: string} = {
    kimlikNo: '',
    token: '',
    username: '',
    tgt: '',
    cookie: '',
    password: '',
    type: 0,
};
export let GeneralSettings: { url: string, dil: string, kurumKodu: string, kurumAdi?: string, logo?: any, hbysUrl: string } = {
    url: 'http://teledgt.samsunism.gov.tr:8101/akgun-mobile/api',// '../akgun-mobile/api' 'http://teledgt.samsunism.gov.tr:8101/akgun-mobile/api' 'http://localhost:8484/api'
    dil: 'tr', 
    kurumAdi: "Samsun İl Sağlık Müdürlüğü",
    kurumKodu: 'SAMSUN_ISM',
    logo: null,
    hbysUrl: ""
}