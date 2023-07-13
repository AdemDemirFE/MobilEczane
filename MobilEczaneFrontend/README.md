# The Mobile Team

  Mobil Eczane uygulaması


 # Uygulama Kurulumu


*Git ten Proje çekiniz
```bash
 git clone project path
```

*npm kütüphaneleri indirilir
```bash
 npm i
```

*Android Studio Çalıştırılır

*Emülatör Aktif edilir

*Proje Emülatör üzerinde çalıştırılır
```bash
ionic cordova run android --livereload

ionic serve --devapp kullanılabilir
```

# 1-BAŞLARKEN

## Model-View-Controller (MVC) Konsepti

Bu proje, Model-View-Controller (MVC) mimarisine dayalı bir yapı kullanmaktadır. MVC, birçok yazılım geliştirme çerçevesi ve mimarisi için yaygın olarak kullanılan bir tasarım desenidir. Bu tasarım deseni, verileri (Model), kullanıcı arayüzünü (View) ve iş mantığını (Controller) birbirinden ayırarak kodun sürdürülebilirliğini ve yeniden kullanılabilirliğini artırır.

### Model

Model, uygulamanın verilerini temsil eden bileşendir. Veritabanından alınan veriler, API çağrıları sonucu elde edilen veriler veya başka bir kaynaktan alınan veriler Model olarak kabul edilebilir. Model, verilerin işlenmesi, saklanması ve yönetilmesi için gerekli fonksiyonları ve yöntemleri içerir.

Örnek Model sınıfı:

```typescript
export class User {
  id: number;
  name: string;
  email: string;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  // Getter ve Setter fonksiyonları
  // Diğer yardımcı metodlar
}
```
### View
View, kullanıcı arayüzünü temsil eden bileşendir. Kullanıcı arayüzü, kullanıcının uygulama ile etkileşimde bulunduğu kısımdır. Bu kısımda verilerin gösterilmesi, kullanıcı girişlerinin alınması ve kullanıcıya geri bildirimlerin sağlanması gibi işlevler yer alır. View, genellikle Ionic Framework tarafından sağlanan bileşenleri kullanarak tasarlanır.

Örnek View bileşeni:
```
<ion-header>
  <ion-toolbar>
    <ion-title>User Profile</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-list>
    <ion-item>
      <ion-label>Name: John Doe</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Email: johndoe@example.com</ion-label>
    </ion-item>
  </ion-list>
</ion-content>

```

### Controller
Controller, Model ve View arasındaki iletişimi ve iş mantığını yöneten bileşendir. İşlemleri gerçekleştirmek için Model'i kullanır ve View ile Model arasında veri akışını sağlar. Ionic Angular projesinde, Controller işlevini Angular bileşenleri (Components) ve hizmetleri (Services) yerine getirir.

Örnek Controller bileşeni:
```
import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user: User;

  constructor() {
    this.user = new User(1, 'John Doe', 'johndoe@example.com');
  }

  // Diğer yöntemler ve işlevler
}
```
Projeyle çalışmaya başlamadan önce, MVC konseptini anlamak ve projede bu konsepte uygun şekilde kodlama yapmak önemlidir. Model, View ve Controller arasındaki iletişimi doğru bir şekilde yönetmek, kodun daha modüler, sürdürülebilir ve anlaşılır olmasını sağlar.

Daha fazla bilgi ve örnekler için lütfen MVC rehberine göz atın.

 Bu proje TypeScript ile geliştirilmiştir ve aşağıda belirtilen isimlendirme standartlarına uygun olarak kodlanmıştır. Projeyle çalışmaya başlamadan önce aşağıdaki standartları gözden geçirmeniz önemlidir.

## İsimlendirme Standartları

Aşağıda belirtilen standartlar, projede yaygın olarak kullanılan isimlendirme kurallarını içermektedir:

- Paketler (Packages):
  - Paket isimleri küçük harflerle ve kelimeler arasında tire (-) kullanılarak yazılır.
  - Örnek: `@mycompany/mypackage`

- Servisler (Services):
  - Servis isimleri tekil isimlerle ifade edilir ve büyük harfle başlar.
  - Örnek: `AuthService`, `UserService`

- Klasörler (Folders):
  - Klasör isimleri küçük harflerle ve kelime aralarında tire (-) veya alt çizgi (_) kullanılarak yazılır.
  - Örnek: `components`, `services`, `models`

- Sınıflar (Classes):
  - Sınıf isimleri büyük harfle başlar ve her kelimenin ilk harfi büyük yazılır (PascalCase).
  - Örnek: `User`, `Product`, `Logger`

- Arayüzler (Interfaces):
  - Arayüz isimleri büyük harfle başlar ve her kelimenin ilk harfi büyük yazılır (PascalCase).
  - Örnek: `IUser`, `IProduct`

- Modeller (Models):
  - Model isimleri büyük harfle başlar ve her kelimenin ilk harfi büyük yazılır (PascalCase).
  - Örnek: `UserModel`, `ProductModel`

- Değişkenler (Variables):
  - Değişken isimleri küçük harfle başlar ve küçük harfle başlayan her kelimenin ilk harfi büyük yazılır (camelCase).
  - Örnek: `userName`, `productList`

## Örnekler

Aşağıda belirtilen örnekler, isimlendirme standartlarını nasıl kullanacağınıza dair örnekler içermektedir:

```typescript
// Klasör yapısı
src/
├─ components/
│  ├─ user/
│  │  ├─ User.ts
│  │  └─ UserInterface.ts
│  ├─ product/
│  │  ├─ Product.ts
│  │  └─ ProductModel.ts
├─ services/
│  ├─ authService.ts
│  └─ userService.ts
└─ main.ts 
```

#  FINAL ***** Kendi kod kimliğinizi değil Takım kod kimliğiniz KORUYUN *****

