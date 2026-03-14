<div align="center">
  <br />
  <p>
    <a><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /></a>
    <a><img src="https://img.shields.io/badge/Discord.JS-5865F2?style=for-the-badge&logo=discord&logoColor=white" /></a>
    <a><img src="https://img.shields.io/badge/Durum-Premium_Surum-FF4500?style=for-the-badge&logo=fire&logoColor=white" /></a>
  </p>
</div>

# 🚀 Lasher Tools - Multi Discord Tool [Premium]

**Lasher Tools** tarafından baştan aşağı yenilenmiş, optimize edilmiş ve "Premium" bir görünüme kavuşturulmuş nihai **Multi Discord Tool** (Çoklu Discord Aracı) projesine hoş geldiniz. 

Bu araç, Node.js altyapısını kullanarak Discord üzerinde birden fazla hesabı (token) aynı anda kontrol etmenize, toplu işlemler yapmanıza ve gelişmiş sunucu/hesap yönetim modüllerini profesyonelce kullanmanıza olanak tanır. Orijinal sürümdeki birçok çökme, terminalde hata göstermeme ve token okuma sorunu giderilmiş olup sistem tamamen stabil hale getirilmiştir.

---

## 🔥 Modüller ve Özellikler

Ana menüde bulunan [1]'den [9]'a kadar olan tüm araçların sunduğu gelişmiş yetenekler aşağıda detaylandırılmıştır:

| Menü | Modül Adı | Açıklama ve Kullanım Detayı |
|:---:|---|---|
| **[1]** | 👥 **Token Server Joiner** | `tokens.txt` içerisindeki tüm hesapları, belirteceğiniz bir sunucu davet linki veya kodu (invite code) ile tek tıkla hedef sunucuya doldurur. |
| **[2]** | 🔍 **Token Checker** | Elinizdeki yüzlerce tokenin hangilerinin aktif, hangilerinin patlak (kilitlenmiş veya şifresi değişmiş) olduğunu saniyeler içinde tarar. |
| **[3]** | 💥 **Account Nuker** | Seçili bir hesabın tüm sunuculardan çıkmasını, arkadaşlarını silmesini ve hesabı tamamen kullanılamaz hale getirmesini (nuke) sağlayan yıkıcı modül. |
| **[4]** | 🟢 **Token Onliner** | Listedeki tüm hesaplarınızı aynı anda "Çevrimiçi" (Online) duruma getirir. VDS üzerinde programı açık bırakırsanız tokenleriniz 7/24 aktif görünür. |
| **[5]** | 📨 **Webhook Spammer** | Hedef aldığınız bir kanalın Webhook URL'sine saniyeler içinde aralıksız, yüzlerce özel mesaj göndererek (spam) kanalı kullanılamaz hale getirir. |
| **[6]** | 🎙️ **Token Voice Join (Gelişmiş)** | Eklediğiniz tokenleri doğrudan belirttiğiniz bir **Sesli Kanala** (Voice Channel) bağlar. *[YENİ]*: Eğer girdiğiniz hesaplar önce o sunucuda değilse, arkaplanda sizin için otomatik olarak sunucuya katılıp bekleme yapmadan sesli kanala zıplar! Kopmaları engeller. |
| **[7]** | 💣 **Server Nuker** | (Sadece yönetici izni olan tokenle çalışır) Sunucudaki tüm kanalları, rolleri ve silinebilir her şeyi tamamen yok ederek sunucuyu sıfırlar. |
| **[8]** | 💬 **Token Mass DM** | Tokenlerinizin bulunduğu tüm sunuculardaki **üyelerin tamamına** son hızda özel mesaj (DM) üzerinden reklam/davet bağlantısı fırlatır. |
| **[9]** | 🧹 **DM Cleaner** | Hedef hesabınızın mesaj geçmişindeki tüm özel konuşmaları (DM kirliliğini) silip temizleyerek hesabı ilk açıldığı günkü gibi tertemiz yapar. |

---

## 🛠️ Kurulum Kullanım Rehberi

Projeyi kendi bilgisayarınızda veya sanal sunucunuzda (VDS) çalıştırmak için hiçbir teknik bilgiye ihtiyacınız yoktur, aşağıdaki adımları sırasıyla uygulayın:

### 1. Gereksinimler
Bilgisayarınızda [Node.js](https://nodejs.org/tr/download/)'in sisteminize uygun ve güncel bir sürümünün kurulu olduğundan emin olun.

### 2. Modüllerin Kurulumu
İndirdiğiniz klasörün içerisindeki **`module.bat`** adlı dosyaya çift tıklayın. Bu altyapı aracı, sistemin çalışması için gereken (ve güncellenmiş) son sürüm kütüphaneleri (örn. `discord.js-selfbot-v13`, `@discordjs/voice`, `axios`) tamamen otomatik olarak indirip kuracaktır.

### 3. Tokenlerin Sisteme Eklenmesi
`tokens.txt` metin belgesini açın. Araçta kullanmak ve yönetmek istediğiniz Discord Token'lerini hiçbir virgül veya ön-ek koymadan, **her satıra bir tane gelecek şekilde** alt alta yapıştırın ve kaydedin. 
*(Örn: Dosyanın en üstünde boşluk olsa bile yeni sistem sorun yaratmadan çalışacaktır.)*

### 4. Aracı Başlatma
Tüm işlemler tamam! Menüyü açmak için sadece **`start.bat`** dosyasına iki kere tıklamanız yeterlidir. Açılan siyah CMD ekranında (Lasher Tools konsolu) çıkan numaralardan, yapacağınız işlemi seçip klavyeden Enter'a basabilirsiniz.

---

## 🎨 Premium Modern Arayüz

Lasher Tools ile birlikte araç sadece arka planda değil, ön planda da revize edildi. Karmaşık klasör görüntüleri veya göz yoran standart yazılar yerine; tamamı özel renklerle tasarlanmış (Kırmızı, Magenta, Gizemli Camgöbeği) ASCII font grafiklerine ve hata toleranslı kutucuklu (Box Frame) şık bir düzene geçilmiştir.

---

### ⚠️ Yasal Uyarı / Sorumluluk Reddi (Disclaimer)

> **DİKKAT:** Bu projenin kaynak kodları tamamen eğitim, güvenlik araştırması ve konsept kanıtlama (PoC) amaçlı paylaşılmıştır.  
> **Discord platformu** üzerinde bu gibi "Self-bot" kodları, çoklu hesap yöneticileri (Mass DM, Spam) ve Nuke araçlarının kullanılması Discord Kullanım Koşulları'na (ToS) tamamen aykırıdır. Kullanılması durumunda hesaplarınız Discord tarafından süresiz yasaklanabilir (banlanabilir).  
> Sistemin kötü niyetli gruplar, kişiler veya sunucular üzerinde zararlı olarak kullanımından doğabilecek her türlü manevi veya hukuki sorumluluk aracı çalıştıran bireyin **kendisine** aittir. Geliştirici takım hiçbir mesuliyet kabul etmez.

<br/>
<div align="center">

**Developed by Lasher Tools**
<br>
*If you liked the tool, enjoy the experience!*
</div>
