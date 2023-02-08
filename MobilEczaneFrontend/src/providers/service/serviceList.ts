import { Injectable } from "@angular/core";
import { IService } from "./serviceModel";

@Injectable()
export class ServiceList {

  //#region  YURT_ICI Servis Listesi

  public IC_CasTicket: IService = { path: "tickets", desc: "Cas TGT alımı ve oturum açma metodu", appTipi: "YURT_ICI" };
  public IC_GetOrganizations: IService = { path: "/getOrganizationsByUsername", desc: "Kullanıcıya adına göre tanımlı kurumları getiren metod", appTipi: "YURT_ICI" };
  public IC_PersonelBilgilerByUsername: IService = { path: "hbys-web/ws/kullanicilar/getSessionUserNameSurname.ajax", desc: "Kullanıcı bilgilerini getirir.", appTipi: "YURT_ICI" };
  public IC_GetLoadBirimlerByBirimTipi: IService = { path: "hbys-web/ws/birimler/loadBirimlerByBirimTipi.ajax", desc: "Birim Tipine göre birimleri listeler", appTipi: "YURT_ICI" };
  public IC_LoadBirimPersoneller: IService = { path: "hbys-web/ws/poliklinik/loadBirimPersoneller.ajax", desc: "Birim personelerin listesi", appTipi: "YURT_ICI" };
  public IC_GetPoliklinikGridData: IService = { path: "hbys-web/ws/poliklinik/getPoliklinikGridData.ajax", desc: "Poliklinikteki hastaları sorgulama ve listeleme metodu.", appTipi: "YURT_ICI" };


  //#region İlaç sarf çıkış işlemler
  public IC_GetHastaMalzemelerGridHQL: IService = { path: "hbys-web/ws/stok/getHastaMalzemelerGridHQL.ajax", desc: "ilaç sarf ekranındaki eklenmiş ilaç sarf listeyi çeker.", appTipi: "YURT_ICI" };
  public IC_GetBirimlerByKullaniciYetki: IService = { path: "hbys-web/ws/stok/getBirimlerByKullaniciYetki.ajax", desc: "ilaç listesinden önce ilaç depolarının listesini çeker", appTipi: "YURT_ICI" };
  public IC_GetMalzemeDepoGridHQL: IService = { path: "hbys-web/ws/stok/getMalzemeDepoGridHQL.ajax", desc: "ilaç listesini çeker", appTipi: "YURT_ICI" };
  public IC_LoadAlinanTakiplerVizitBazli: IService = { path: "hbys-web/ws/poliklinik/loadAlinanTakiplerVizitBazli.ajax", desc: "ilaç listesini çeker", appTipi: "YURT_ICI" };
  public IC_SaveOrUpdateConvertedHastaIslemMalzeme: IService = { path: "hbys-web/ws/servis/saveOrUpdateConvertedHastaIslemMalzeme.ajax", desc: "ilaç listesini çeker", appTipi: "YURT_ICI" };
  public IC_SaveOrUpdateIlacSarfCikisTarihByHastaIslemId: IService = { path: "hbys-web/ws/stok/saveOrUpdateIlacSarfCikisTarihByHastaIslemId.ajax", desc: "ilaç&sarf çıkış listesinden seçilen elemanın tarihini değiştirir.", appTipi: "YURT_ICI" };
  public IC_RemoveTedaviTakibi: IService = { path: "hbys-web/ws/tedavi/removeTedaviTakibi.ajax", desc: "ilaç siler", appTipi: "YURT_ICI" };
  //#endregion
 


  //#region Laboratuar işlemleri
  public IC_GetSonucYazdirHastalar: IService = { path: "hbys-web/ws/lbs/sonucOnay/getSonucYazdirHastalar.ajax", desc: "Laboratuar sonuçları getirir.", appTipi: "YURT_ICI" };
  public IC_GetHastaSonucTestler: IService = { path: "hbys-web/ws/lbs/sonucOnay/getHastaSonucTestler.ajax", desc: "Laboratuar sonuçlar listesinde seçilen item ın sonuçlarını getirir.", appTipi: "YURT_ICI" };
  public IC_GetEhkGridData: IService = { path: "hbys-web/ws/ehk/getEhkGridData.ajax", desc: "Radyoloji ve Pataloji sonuçları getirir.", appTipi: "YURT_ICI" };
  public IC_GetEhkTibbiRapor: IService = { path: "hbys-web/ws/poliklinik/getEhkTibbiRapor.ajax", desc: "Radyoloji ve Pataloji sonuçları getirir.", appTipi: "YURT_ICI" };

  public IC_WriteReportToDb: IService = { path: "hbys-web/ws/jas/writeReportToDb.ajax", desc: "pdf oluşturan method", appTipi: "YURT_ICI" };
  public IC_LoadLabIstekTetkik: IService = { path: "hbys-web/ws/poliklinik/loadLabIstekTetkik.ajax", desc: "Lab. İstek ekranındaki hizmet listesini çeker.", appTipi: "YURT_ICI" };
  public IC_GetRutinHizmetler: IService = { path: "hbys-web/ws/rutin/getRutinHizmetler.ajax", desc: "Lab. istek de Rutin listesini çeker", appTipi: "YURT_ICI" };
  public IC_GetLabIstekler: IService = { path: "hbys-web/ws/istek/getLabIstekler.ajax", desc: "Lab. istek de yapılmış istek listesini çeker", appTipi: "YURT_ICI" };
  public IC_GetWadoOrWorkstationUrlByIstekDetay: IService = { path: "hbys-web/ws/poliklinik/getWadoOrWorkstationUrlByIstekDetay.ajax", desc: "Radyoloji Görüntüsü", appTipi: "YURT_ICI" };

  public IC_GetUyariNotu: IService = { path: "hbys-web/ws/hizmet/getUyariNotu.ajax", desc: "İstek listeye eklenirken uyarı notu olup olmadığı kontrol edilir.", appTipi: "YURT_ICI" };
  public IC_GetHizmetKurumParametreler: IService = { path: "hbys-web/ws/hizmet/getHizmetKurumParametreler.ajax", desc: "İstek listeye eklenirken hizmet kurum paramlarını çeker.", appTipi: "YURT_ICI" };
  public IC_GetCaprazTanim: IService = { path: "hbys-web/ws/lbs/getCaprazTanim.ajax", desc: "İstek listeye eklenirken çapraz tanım kontrol edilir.", appTipi: "YURT_ICI" };
  public IC_CheckOncekiIstekler: IService = { path: "hbys-web/ws/istek/checkOncekiIstekler.ajax", desc: "İstek listeye eklenirken önceki istekler kontrol edilir.", appTipi: "YURT_ICI" };
  public IC_GetBirlikteIslenenTumHizmetler: IService = { path: "hbys-web/ws/poliklinik/getBirlikteIslenenTumHizmetler.ajax", desc: "İstek listeye eklenirken birlikte istenilen istekleri ekleniyor.", appTipi: "YURT_ICI" };
  public IC_GetIstekHizmetler: IService = { path: "hbys-web/ws/hizmet/getIstekHizmetler.ajax", desc: "İstek listeye eklenirken istek hizmetleri.", appTipi: "YURT_ICI" };
  public IC_GetTetkikKisitlarByHizmetId: IService = { path: "hbys-web/ws/istek/getTetkikKisitlarByHizmetId.ajax", desc: "İstek listeye eklenirken hizmet kısıtlaması olup olmadığını kontrol eder.", appTipi: "YURT_ICI" };
  public IC_GetDahaOncekiIstekler: IService = { path: "hbys-web/ws/istek/getDahaOncekiIstekler.ajax", desc: "İstek listeye eklenirken daha önce istek olup olmadığını kontrol eder.", appTipi: "YURT_ICI" };

  public IC_CheckSutKuralIhlalleriLab: IService = { path: "hbys-web/ws/istek/checkSutKuralIhlalleriLab.ajax", desc: "SUT kural ihlallerini check eder.", appTipi: "YURT_ICI" };
  public IC_CheckIstekler: IService = { path: "hbys-web/ws/istek/checkIstekler.ajax", desc: "İstekleri check eder.", appTipi: "YURT_ICI" };
  public IC_SaveOrUpdateLabIstekler: IService = { path: "hbys-web/ws/istek/saveOrUpdateLabIstekler.ajax", desc: "Lab isteği kayıt işlemi", appTipi: "YURT_ICI" };

  public IC_GetStoktakiKanUrunleri: IService = { path: "hbys-web/ws/kanBankasiTR/getStoktakiKanUrunleri.ajax", desc: "Stoktaki kan ürünlerini getirir", appTipi: "YURT_ICI" };
  public IC_LoadComboBirimlerByTipi: IService = { path: "hbys-web/ws/servis/loadComboBirimlerByTipi.ajax", desc: "Kan merkezi listesini çeker.", appTipi: "YURT_ICI" };
  public IC_SaveOrUpdateKanIstekFormu: IService = { path: "hbys-web/ws/kanBankasiTR/saveOrUpdateKanIstekFormu.ajax", desc: "Kan istek kayıt işlemi.", appTipi: "YURT_ICI" };
  public IC_RemoveIstekler: IService = { path: "hbys-web/ws/istek/removeIstekler.ajax", desc: "Lab istek silme işlemi.", appTipi: "YURT_ICI" };
  public IC_LoadHizmetler: IService = { path: "hbys-web/ws/hizmet/loadHizmetler.ajax", desc: "İstek ekle de hizmet türünü kontrol eder.", appTipi: "YURT_ICI" };
  public IC_GetKulturSonucDetaylar: IService = { path: "hbys-web/ws/lbs/kulturSonuc/getKulturSonucDetaylar.ajax", desc: "Laboratuvar kültür sonuç detay", appTipi: "YURT_ICI" };
  //#endregion

  //#region Karar-Taburcu işlemleri
  public IC_GetKararOnerilerByVizHarId: IService = { path: "hbys-web/ws/poliklinik/getKararOnerilerByVizHarId.ajax", desc: "Karar taburcuda karar listesini çeker", appTipi: "YURT_ICI" };
  public IC_GetHastaTanilar: IService = { path: "hbys-web/ws/erecete/getHastaTanilar.ajax", desc: "Çıkış Ana Tanısını Çeker", appTipi: "YURT_ICI" };
  public IC_GetCikisLogKayitlari: IService = { path: "hbys-web/ws/poliklinik/getCikisLogKayitlari.ajax", desc: "Karar Taburcuda çıkış kayıt listesini çeker.", appTipi: "YURT_ICI" };
  public IC_UpdateKararOneri: IService = { path: "hbys-web/ws/poliklinik/updateKararOneri.ajax", desc: "Karar Taburcuda listesindeki elemanı update eder.", appTipi: "YURT_ICI" };
  public IC_RemoveSelectedKararOneri: IService = { path: "hbys-web/ws/poliklinik/removeSelectedKararOneri.ajax", desc: "Karar Taburcuda listesindeki elemanı siler", appTipi: "YURT_ICI" };
  public IC_GetKararOneriSikKullanilanlar: IService = { path: "hbys-web/ws/poliklinik/getKararOneriSikKullanilanlar.ajax", desc: "Sık kullanılan karar listesini çeker", appTipi: "YURT_ICI" };
  public IC_UpdateSelectedHazirMetin: IService = { path: "hbys-web/ws/poliklinik/updateSelectedHazirMetin.ajax", desc: "karar sayfasında sık kullanılan listesinde seçilen elemanı update etme işlemi", appTipi: "YURT_ICI" };
  public IC_RemoveSelectedKararOneriSikKullanilan: IService = { path: "hbys-web/ws/poliklinik/removeSelectedKararOneriSikKullanilan.ajax", desc: "karar sayfasında sık kullanılan listesinde seçilen elemanı siler", appTipi: "YURT_ICI" };
  public IC_SaveOrUpdateKararOneri: IService = { path: "hbys-web/ws/poliklinik/saveOrUpdateKararOneri.ajax", desc: "Karar ekranında Sık kullanılanlardan yeni bir karar ekleme işlemi", appTipi: "YURT_ICI" };
  public IC_SaveOrUpdateKararOneriAndAddSikKulanilan: IService = { path: "hbys-web/ws/poliklinik/saveOrUpdateKararOneriAndAddSikKulanilan.ajax", desc: "Karar ekranında Sık kullanılanlardan yeni bir karar ekleme ve sık kullanılanlara ekleme işlemi", appTipi: "YURT_ICI" };
  public IC_SaveOrUpdateTaburcuFormPoliklinik: IService = { path: "hbys-web/ws/poliklinik/saveOrUpdateTaburcuFormPoliklinik.ajax", desc: "Taburcu çıkış kaydet işlemi.", appTipi: "YURT_ICI" };
  public IC_GetPoliklinikTaburcu: IService = { path: "hbys-web/ws/poliklinik/getPoliklinikTaburcu.ajax", desc: "Hastanın taburcu olup olmadığını kontrol eder.", appTipi: "YURT_ICI" };
  public IC_GetCikisiKaydedenKullanici: IService = { path: "hbys-web/ws/poliklinik/getCikisiKaydedenKullanici.ajax", desc: "Hastanın taburcu eden kullanıcıyı çeker", appTipi: "YURT_ICI" };
  public IC_IptalCikisDurumuPoliklinik: IService = { path: "hbys-web/ws/poliklinik/iptalCikisDurumuPoliklinik.ajax", desc: "Çıkışı yapılan hastanın çıkışını iptal etme metodu.", appTipi: "YURT_ICI" };
  //#endregion

  //#region lookup işlemler
  public IC_GetLookup: IService = { path: "hbys-web/ws/getLookup.ajax", desc: "Lookup", appTipi: "YURT_ICI" };
  //#endregion

  //#region diş randevu işlemler
  public IC_GetRandevuIslemDurumlarByBirimId: IService = { path: "hbys-web/ws/agizDis/getRandevuIslemDurumlarByBirimId.ajax", desc: "Yapılacak işlem durumu listesini çeker.", appTipi: "YURT_ICI" };
  public IC_GetHizmetlerByRandevuIslemDurum: IService = { path: "hbys-web/ws/agizDis/getHizmetlerByRandevuIslemDurum.ajax", desc: "İşlemler listesini çeker.", appTipi: "YURT_ICI" };
  public IC_SaveOrUpdateAgizDisRandevu: IService = { path: "hbys-web/ws/agizDisRandevu/saveOrUpdateAgizDisRandevu.ajax", desc: "Randevuyu kaydeder.", appTipi: "YURT_ICI" };
  //#endregion

  //#region Tedavi Uygulama (order) işlemler
  public IC_GetTedaviUygulama: IService = { path: "hbys-web/ws/tedavi/getTedaviUygulama.ajax", desc: "Uygulacak tedaviler listeler,Doğrulama içinde bu metod kulanılır", appTipi: "YURT_ICI" };
  public IC_GetHizmetMalzemeler: IService = { path: "hbys-web/ws/hizmet/getHizmetMalzemeler.ajax", desc: "Tedavide MalzemeId göre ek hizmetleri kontrol eder.", appTipi: "YURT_ICI" };
  public IC_GetPersonelIlacBransKisitlama: IService = { path: "hbys-web/ws/eczane/getPersonelIlacBransKisitlama.ajax", desc: "MalzemeId göre kullancı kısıtlaması var mı.", appTipi: "YURT_ICI" };
  public IC_SaveOrUpdateTedaviTakiplerDogrulama: IService = { path: "hbys-web/ws/tedavi/saveOrUpdateTedaviTakiplerDogrulama.ajax", desc: "Urun dogrulama kayıt işlemi.", appTipi: "YURT_ICI" };
  public IC_GetIstekDetaylarFromKanBankasi: IService = { path: "hbys-web/ws/kanBankasiTR/getIstekDetaylarFromKanBankasi.ajax", desc: "Kan urunu doğrulamak için kullanılır", appTipi: "YURT_ICI" };
  public IC_SaveOrUpdateTedaviIstekCikis: IService = { path: "hbys-web/ws/tedavi/saveOrUpdateTedaviIstekCikis.ajax", desc: "Ilaç çıkış işlemleri", appTipi: "YURT_ICI" };
  public IC_SetTedaviPlaniDogrulama: IService = { path: "hbys-web/ws/tedavi/setTedaviPlaniDogrulama.ajax", desc: "Kan  çıkış işlemleri", appTipi: "YURT_ICI" };
  public IC_GetMalzemelerSikkullanilanYalinByMalzemeId: IService = { path: "hbys-web/ws/stok/getMalzemelerSikkullanilanYalinByMalzemeId.ajax", desc: "Orde seçilen ilaç bilgilerini çeker", appTipi: "YURT_ICI" };
  //#endregion

  //#region Order İşlemler
  public IC_GetTedaviPlanlariYalin: IService = { path: "hbys-web/ws/tedavi/getTedaviPlanlariYalin.ajax", desc: "Order ilaç plan listesi", appTipi: "YURT_ICI" };
  public IC_GetMalzemelerSikkullanilanYalin: IService = { path: "hbys-web/ws/stok/getMalzemelerSikkullanilanYalin.ajax", desc: "Order ilaç listesi", appTipi: "YURT_ICI" };
  public IC_SaveOrUpdateHastayaTedaviUygula: IService = { path: "hbys-web/ws/tedavi/saveOrUpdateHastayaTedaviUygula.ajax", desc: "Yeni order ekleme", appTipi: "YURT_ICI" };
  public IC_ResumeSelectedOrder: IService = { path: "hbys-web/ws/servis/resumeSelectedOrder.ajax", desc: "Tedavi planı devam ettirme", appTipi: "YURT_ICI" };
  public IC_RemoveSelectedOrder: IService = { path: "hbys-web/ws/servis/removeSelectedOrder.ajax", desc: "Tedavi planı silme", appTipi: "YURT_ICI" };
  public IC_StopSelectedOrder: IService = { path: "hbys-web/ws/servis/stopSelectedOrder.ajax", desc: "Tedavi planı durduran method", appTipi: "YURT_ICI" };
  public IC_GetGunubirlikIstekDepolar: IService = { path: "hbys-web/ws/eczane/getGunubirlikIstekDepolar.ajax", desc: "Tedavi eklemede günübirlik depoları getirir", appTipi: "YURT_ICI" };
  public IC_GetMedikalIlacDepolar: IService = { path: "hbys-web/ws/eczane/getMedikalIlacDepolar.ajax", desc: "Tedavi eklemede ilaç depolarını getirir", appTipi: "YURT_ICI" };
  public IC_GetMalzemeTipiComboHQL: IService = { path: "hbys-web/ws/stok/getMalzemeTipiComboHQL.ajax", desc: "Tedavi eklemede malzeme tiplerini getirir", appTipi: "YURT_ICI" };
  public IC_GetMukerrerTedaviKontrol: IService = { path: "hbys-web/ws/tedavi/getMukerrerTedaviKontrol.ajax", desc: "Tedavi eklemede mükerrer kayıt olup olmadığını check eder", appTipi: "YURT_ICI" };
  public IC_SaveOrUpdateGunubirlikTedaviUygula: IService = { path: "hbys-web/ws/tedavi/saveOrUpdateGunubirlikTedaviUygula.ajax", desc: "Günübirlik tedavi kaydet ", appTipi: "YURT_ICI" };
  //#endregion

  //#region Müdalahe işlemler
  public IC_GetTetkiklerWithHql: IService = { path: "hbys-web/ws/poliklinik/getTetkiklerWithHql.ajax", desc: "Müdahale listesini çeker", appTipi: "YURT_ICI" };
  public IC_LoadBransHizmetler: IService = { path: "hbys-web/ws/poliklinik/loadBransHizmetler.ajax", desc: "Müdahalede hizmet listesini çeker.", appTipi: "YURT_ICI" };
  public IC_LoadAlinanTakiplerVizitHareketBazli: IService = { path: "hbys-web/ws/poliklinik/loadAlinanTakiplerVizitHareketBazli.ajax", desc: "Müdahalede alınan takip listesini çeker.", appTipi: "YURT_ICI" };
  public IC_GetFiyatByFiyatGrupId: IService = { path: "hbys-web/ws/poliklinik/getFiyatByFiyatGrupId.ajax", desc: "Müdahalede seçilen hizmetin fiyat bilgisini çeker.", appTipi: "YURT_ICI" };
  public IC_SaveOrUpdateTetkikler: IService = { path: "hbys-web/ws/poliklinik/saveOrUpdateTetkikler.ajax", desc: "Müdahale modülünde yeni bir müdahale ekleme.", appTipi: "YURT_ICI" };
  public IC_RemoveMultiSelectedTetkik: IService = { path: "hbys-web/ws/poliklinik/removeMultiSelectedTetkik.ajax", desc: "Müdahale listesinden girilmiş müdahale silme", appTipi: "YURT_ICI" };
  public IC_ChangeHastaMalzemeDahilHaric: IService = { path: "hbys-web/ws/fatura/changeHastaMalzemeDahilHaric.ajax", desc: "Müdahale listesinden dahili harici değiştir", appTipi: "YURT_ICI" };
  public IC_SaveOrUpdateConvertedHastaIslem: IService = { path: "hbys-web/ws/poliklinik/saveOrUpdateConvertedHastaIslem.ajax", desc: "Müdahale listesinden seçilen item ı resmi/ücretliye çevirme", appTipi: "YURT_ICI" };
  public IC_SetOzelDurumGeneric: IService = { path: "hbys-web/ws/fatura/setOzelDurumGeneric.ajax", desc: "Müdahale listesinden seçilen item a özel durum ekle", appTipi: "YURT_ICI" };
  //#endregion

  //#region TaniEkle
  public IC_GetVizitHareketTanilariByVizHarIdHql: IService = { path: "hbys-web/ws/poliklinik/getVizitHareketTanilariByVizHarIdHql.ajax", desc: "Önceden eklenen tanı listesini çeker", appTipi: "YURT_ICI" };
  public IC_UpdateSelectedHastaTaniAnatani: IService = { path: "hbys-web/ws/poliklinik/updateSelectedHastaTaniAnatani.ajax", desc: "Tanı listesinden seçilen tanının ana tanı olarak seçer/kaldırır.", appTipi: "YURT_ICI" };
  public IC_GetBildirimYapilmisFormlarByTani: IService = { path: "hbys-web/ws/poliklinik/getBildirimYapilmisFormlarByTani.ajax", desc: "Silinecek tanının bildirim yapılmış formu olup olmadığını check eder.", appTipi: "YURT_ICI" };
  public IC_RemoveSelectedTani: IService = { path: "hbys-web/ws/poliklinik/removeSelectedTani.ajax", desc: "Listeden tanı silme işlemi", appTipi: "YURT_ICI" };
  public IC_UpdateSelectedPrimerTani: IService = { path: "hbys-web/ws/poliklinik/updateSelectedPrimerTani.ajax", desc: "Primer tanı ekle/kaldır", appTipi: "YURT_ICI" };
  public IC_GetSelectableTanilar: IService = { path: "hbys-web/ws/tanilar/getSelectableTanilar.ajax", desc: "Tanı eklemede tanı listesinin çeker", appTipi: "YURT_ICI" };
  public IC_GetTaniByKodu: IService = { path: "hbys-web/ws/poliklinik/getTaniByKodu.ajax", desc: "Tanı eklemede seçilen yeni tanının kodunu sorgulama işlemi", appTipi: "YURT_ICI" };
  public IC_SaveTani: IService = { path: "hbys-web/ws/poliklinik/saveTani.ajax", desc: "Yeni tanı ekleme işlemi", appTipi: "YURT_ICI" };
  public IC_GetSikKullanilanTanilar: IService = { path: "hbys-web/ws/poliklinik/getSikKullanilanTanilar.ajax", desc: "Sık kullanılan tanı listesini çeker.", appTipi: "YURT_ICI" };
  public IC_IsSonKirilimTanisi: IService = { path: "hbys-web/ws/poliklinik/isSonKirilimTanisi.ajax", desc: "Sık kullanılan tanı listesinden eleman seçtikten sonra son kırılım durumu check ediliyor.", appTipi: "YURT_ICI" };
  public IC_SaveMuayeneGecBaslamaNedeni: IService = { path: "hbys-web/ws/poliklinik/saveMuayeneGecBaslamaNedeni.ajax", desc: "Tanı eklerken geç ekleme nedeni kayıt işlemi", appTipi: "YURT_ICI" };
  public IC_LoadMeslekler: IService = { path: "hbys-web/ws/ayaktan/loadMeslekler.ajax", desc: "Mesleki Maruziyet de meslek listesini getirir", appTipi: "YURT_ICI" };
  public IC_GetKayitAdresBilgileri: IService = { path: "hbys-web/ws/meslekiMaruziyet/getKayitAdresBilgileri.ajax", desc: "Mesleki Maruziyet de adres bilgilerini getirir.", appTipi: "YURT_ICI" };
  public IC_SaveOrUpdateMeslekiMaruziyet: IService = { path: "hbys-web/ws/meslekiMaruziyet/saveOrUpdateMeslekiMaruziyet.ajax", desc: "Mesleki Maruziyet kayıt işlemi.", appTipi: "YURT_ICI" };
  public IC_GetBildirimiZorunluHastalikStatic: IService = { path: "hbys-web/ws/poliklinik/getBildirimiZorunluHastalikStatic.ajax", desc: "Bildirim zorunlu bulaşıcı hastalıklar ekranında genel bilgileri getirir.", appTipi: "YURT_ICI" };
  public IC_GetBildirimiZorunluHastalik: IService = { path: "hbys-web/ws/poliklinik/getBildirimiZorunluHastalik.ajax", desc: "Bildirim zorunlu hastalıklar ekranında önceden kayıt edilen listeyi getirir.", appTipi: "YURT_ICI" };
  public IC_SaveOrUpdateBildirimiZorunluHastalik: IService = { path: "hbys-web/ws/poliklinik/saveOrUpdateBildirimiZorunluHastalik.ajax", desc: "Zorunlu bildirim kayıt işlemi.", appTipi: "YURT_ICI" };
  public IC_RemoveBildirimiZorunluHastalik: IService = { path: "hbys-web/ws/poliklinik/removeBildirimiZorunluHastalik.ajax", desc: "Bildirimi zorunlu bulaşıcı hastalıklar bildirim listesindeki elemanı silme işlemi.", appTipi: "YURT_ICI" };
  //#endregion

  //#region Konsultasyon işlemler
  public IC_GetKonsultasyonlar: IService = { path: "hbys-web/ws/poliklinik/getKonsultasyonlar.ajax", desc: "Konsultasyon listesini çeker", appTipi: "YURT_ICI" };
  public IC_GetDisKonsultasyonlar: IService = { path: "hbys-web/ws/poliklinik/getDisKonsultasyonlar.ajax", desc: "Konsultasyon dış istek listesi çekme", appTipi: "YURT_ICI" };
  public IC_SaveOrUpdateKonsultasyonOkunmaBilgisi: IService = { path: "hbys-web/ws/poliklinik/saveOrUpdateKonsultasyonOkunmaBilgisi.ajax", desc: "Konsultasyon okunup/okunmadı olarak işaretleme", appTipi: "YURT_ICI" };
  public IC_RemoveSelectedKonsultasyon: IService = { path: "hbys-web/ws/poliklinik/removeSelectedKonsultasyon.ajax", desc: "Konsultasyon silme işlemi", appTipi: "YURT_ICI" };
  public IC_GetKonsultasyonlarCevap: IService = { path: "hbys-web/ws/poliklinik/getKonsultasyonlarCevap.ajax", desc: "Konsultasyon cevap listesini çeker.", appTipi: "YURT_ICI" };
  public IC_GetAllBranslar: IService = { path: "hbys-web/ws/brans/getAllBranslar.ajax", desc: "Konsultasyon istenen branş listesi çeker", appTipi: "YURT_ICI" };
  public IC_GetComboBirimlerByTipiFromBransId: IService = { path: "hbys-web/ws/servis/getComboBirimlerByTipiFromBransId.ajax", desc: "Konsultasyonda seçilen branşın birim listesini çeker", appTipi: "YURT_ICI" };
  public IC_GetKonsultasyonDoktorlarForTanim: IService = { path: "hbys-web/ws/poliklinik/getKonsultasyonDoktorlarForTanim.ajax", desc: "Konsultasyonda seçilen birime göre personel listesini çeker", appTipi: "YURT_ICI" };
  public IC_SaveOrUpdateKonsultasyonlar: IService = { path: "hbys-web/ws/poliklinik/saveOrUpdateKonsultasyonlar.ajax", desc: "Konsultasyon kaydetme işlemi", appTipi: "YURT_ICI" };
  public IC_GetTumGenKurumlar: IService = { path: "hbys-web/ws/yonetimselIsler/getTumGenKurumlar.ajax", desc: "Konsultasyon dış istek tüm kurum listesi çekme", appTipi: "YURT_ICI" };
  //Labrotuvarda var public IC_LoadComboBirimlerByTipi: IService = { path: "hbys-web/ws/servis/loadComboBirimlerByTipi.ajax", desc: "Kan merkezi listesini çeker.", appTipi: "YURT_ICI" };
  public IC_SaveOrUpdateDisKonsultasyonlar: IService = { path: "hbys-web/ws/poliklinik/saveOrUpdateDisKonsultasyonlar.ajax", desc: "Konsultasyon dış istek kaydetme işlemi", appTipi: "YURT_ICI" };
  public IC_SaveOrUpdateKonsultasyonCevap: IService = { path: "hbys-web/ws/poliklinik/saveOrUpdateKonsultasyonCevap.ajax", desc: "Konsultasyon cevap kayıt işlemi.", appTipi: "YURT_ICI" };
  public IC_RemoveSelectedDisKonsultasyon: IService = { path: "hbys-web/ws/poliklinik/removeSelectedDisKonsultasyon.ajax", desc: "Konsultasyon dış istek de konsultasyon silme işlemi", appTipi: "YURT_ICI" };
  public IC_RemoveKonsultasyonCevap: IService = { path: "hbys-web/ws/poliklinik/removeKonsultasyonCevap.ajax", desc: "Konsultasyon cevap silme işlemi", appTipi: "YURT_ICI" };
  //#endregion

  //#region Hbys Hasta Geçmişi,Tetkikler 
  public IC_GetTetkilerWithHqlForAgizDis: IService = { path: "hbys-web/ws/poliklinik/getTetkilerWithHqlForAgizDis.ajax", desc: "Hasta geçmişi ve tetkikler listesini çeker.", appTipi: "YURT_ICI" };

  //#endregion

  //#region Protez Takip
  public IC_GetProtezTakipPlanlama: IService = { path: "hbys-web/ws/agizDis/getProtezTakipPlanma.ajax", desc: "Protez takip planlama listesini çeker.", appTipi: "YURT_ICI" };
  public IC_GetProtezHizmetAdiByVizit: IService = { path: "/hbys-web/ws/agizDis/getProtezHizmetAdiByVizit.ajax", desc: "Protez hizmet adını çeker.", appTipi: "YURT_ICI" };
  public IC_GetDisHekimleri: IService = { path: "/hbys-web/ws/agizDis/getDisHekimleri.ajax", desc: "Diş hekimlerini getirir.", appTipi: "YURT_ICI" };
  public IC_GetProtezTakipPlanHastaninOdeyecegiTutar: IService = { path: "/hbys-web/ws/agizDis/getProtezTakipPlanHastaninOdeyecegiTutar.ajax", desc: "Protez takip planda hastanın ödeyeceği tutarı getirir..", appTipi: "YURT_ICI" };
  public IC_SaveProtezTakipPlanlama: IService = { path: "/hbys-web/ws/agizDis/saveProtezTakipPlanma.ajax", desc: "Protez takip planı kaydeder.", appTipi: "YURT_ICI" };
  public IC_GetProtezTakipAsamalari: IService = { path: "/hbys-web/ws/agizDis/getProtezTakipAsamalari.ajax", desc: "P.takip aşamalarını çeker.", appTipi: "YURT_ICI" };
  public IC_GetProtezPlanlamaAsamalari: IService = { path: "/hbys-web/ws/agizDis/getProtezPlanlamaAsamalari.ajax", desc: "P.planlama aşamalarını çeker.", appTipi: "YURT_ICI" };
  public IC_GetDisProtezTeknisyenleriSirali: IService = { path: "/hbys-web/ws/agizDis/getDisProtezTeknisyenleriSirali.ajax", desc: "Protez teknisyenlerini çeker.", appTipi: "YURT_ICI" };
  public IC_GetAnlasmaliFirmaTanimlari: IService = { path: "/hbys-web/ws/agizDis/getAnlasmaliFirmaTanimlari.ajax", desc: "Anlaşmalı firmaları çeker.", appTipi: "YURT_ICI" };
  public IC_RemoveProtezTakipAsamalari: IService = { path: "/hbys-web/ws/agizDis/removeProtezTakipAsamalari.ajax", desc: "Protez takip aşamalarını siler.", appTipi: "YURT_ICI" };
  public IC_SaveProtezTakipAsamalari: IService = { path: "/hbys-web/ws/agizDis/saveProtezTakipAsamalari.ajax", desc: "Protez takip aşamalarını kaydeder.", appTipi: "YURT_ICI" };
  public IC_SetProtezTakipAsamalariTanimlamaTamamlandi: IService = { path: "/hbys-web/ws/agizDis/setProtezTakipAsamalariTanimlamaTamamlandi.ajax", desc: "Protez takip aşamalarını tamamlama.", appTipi: "YURT_ICI" };
  public IC_SetSonlandir: IService = { path: "/hbys-web/ws/agizDis/setSonlandir.ajax", desc: "Protez takip plan sonlandırma.", appTipi: "YURT_ICI" };
  public IC_GetPlanProtezKapsami: IService = { path: "/hbys-web/ws/agizDis/getPlanProtezKapsami.ajax", desc: "Plan protez kapsamlarını çeker.", appTipi: "YURT_ICI" };
  public IC_RemoveProtezTakipPlanlama: IService = { path: "/hbys-web/ws/agizDis/removeProtezTakipPlanma.ajax", desc: "Protez takip planlama siler.", appTipi: "YURT_ICI" };


  //#region diş anemnez
  public IC_GetDisAnemnezBilgileri: IService = { path: "hbys-web/ws/agizDis/getDisAnemnezBilgileri.ajax", desc: "Diş anemnez bilgileri listesini çeker.", appTipi: "YURT_ICI" };
  public IC_SaveOrUpdateDisAnemnezBilgileri: IService = { path: "hbys-web/ws/agizDis/saveOrUpdateDisAnemnezBilgileri.ajax", desc: "Diş anemnez bilgilerini kaydeder.", appTipi: "YURT_ICI" };
  public IC_DisOnGorulenKlinikYonlendir: IService = { path: "hbys-web/ws/agizDis/disOnGorulenKlinikYonlerdir.ajax", desc: "Yönlendirilen klinikleri kaydeder.", appTipi: "YURT_ICI" };
  public IC_LoadPersonellerByKlinikTipi: IService = { path: "hbys-web/ws/agizDis/loadPersonellerByKlinikTipi.ajax", desc: "Personel listesini çeker.", appTipi: "YURT_ICI" };
  public IC_GetAgizDisRandevular: IService = { path: "hbys-web/ws/agizDis/getAgizDisRandevular.ajax", desc: "Randevu listesini çeker.", appTipi: "YURT_ICI" };
  public IC_GetRandevuCetvelDetaylarForCombo: IService = { path: "hbys-web/ws/randevu/getRandevuCetvelDetaylarForCombo.ajax", desc: "", appTipi: "YURT_ICI" };
  public IC_SaveOrUpdateAgizDisDetay: IService = { path: "hbys-web/ws/agizDis/saveOrUpdateAgizDisDetay.ajax", desc: "Diş anemnez bölümünde durumu kaydeder", appTipi: "YURT_ICI" };
  //#endregion

  //#region evde sağlık hasta takip
  public IC_GetHastaEvdeSagliklar: IService = { path: "hbys-web/ws/poliklinik/getHastaEvdeSagliklar.ajax", desc: "Evde sağlık hasta takip ilk izlem ve evde sağlık izlem listesini getirir.", appTipi: "YURT_ICI" };
  public IC_Getgenericquerydatas: IService = { path: "hbys-web/ws/getgenericquerydatas.ajax", desc: "İl listesini çeker.", appTipi: "YURT_ICI" };
  public IC_RemoveEvdeSagliklar: IService = { path: "hbys-web/ws/poliklinik/removeEvdeSagliklar.ajax", desc: "Evde sağlık hasta takip listesinden ilgili veriyi silme işlemi", appTipi: "YURT_ICI" };
  public IC_SaveOrUpdateEvdeSagliklar: IService = { path: "hbys-web/ws/poliklinik/saveOrUpdateEvdeSagliklar.ajax", desc: "Evde sağlık hasta takip kayıt işlemi", appTipi: "YURT_ICI" };
  //#endregion

  //#region randevu işlemler
  public IC_GetRandevu: IService = { path: "randevus", desc: "Randevu listeleme", appTipi: "YURT_ICI" };
  //#endregion

  //#region  YURT_DISI Servis Listesi
  //#endregion


}
