var idle = document.getElementById("idle");
var idleLoading = document.getElementById("idleLoading");
var video = document.getElementById("video");


var cursor = document.getElementById("cursor");
var cursorIcon = document.getElementById("mousePointer");
//idle
idle.addEventListener('mousemove', function () {
  idle.style.display = "none";
  idleLoading.style.display = "";
  setTimeout(() => {
    
    video.style.display = "";
    idleLoading.style.display = "none";
    video.play();

  }, 2000);
}, false);

function idleLogout() {
  var t;
  window.onload = resetTimer;
  window.onmousemove = resetTimer;
  window.onmousedown = resetTimer;  // catches touchscreen presses as well      
  window.ontouchstart = resetTimer; // catches touchscreen swipes as well      
  window.ontouchmove = resetTimer;  // required by some devices 
  window.onclick = resetTimer;      // catches touchpad clicks as well
  window.onkeydown = resetTimer;   
  window.addEventListener('scroll', resetTimer, true); // improved; see comments

  function yourFunction() {
    idle.style.display = "";
  }

  function resetTimer() {
      clearTimeout(t);
      t = setTimeout(yourFunction, 50000);  // time is in milliseconds
  }
}
idleLogout();


var videoPin = document.getElementById("videoPin");
videoPin.style.width = "100%";
videoPin.style.height = "100%";

var loadingCircle = document.getElementById("loadingCircle");
loadingCircle.style.width = "100%";
loadingCircle.style.height = "100%";

//Onclick popup
videoPin.addEventListener('mousedown', function(){
  var w = 1600;
  var h = 800;
  var left = (window.screen.width / 2) - ((w / 2) + 10);
  var top = (window.screen.height / 2) - ((h / 2) + 50);

  popupWindow("https://www.google.com/maps/d/u/2/viewer?mid=1BMG5_Bmz6TW-a8jIDN-kN2WSqeUDTKc&ll=48.69871535105282%2C21.230188550000005&z=12", "Mapa", window, 1000,800);
}, false);

function popupWindow(url, windowName, win, w, h) {
  const y = win.top.outerHeight / 2 + win.top.screenY - ( h / 2);
  const x = win.top.outerWidth / 2 + win.top.screenX - ( w / 2);
  return win.open(url, windowName, `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${y}, left=${x}`);
}

//pozicovne
var Pozicovne = document.getElementById('Pozicovne');
var PozicovnePodnadpis = document.getElementById('PozicovnePodnadpis');
var Text_Pozicovne = document.getElementById('Text_Pozicovne');
var Podklad_Pozicovne = document.getElementById('Podklad_Pozicovne');
var NadpisKategorie_Pozicovne = document.getElementById('NadpisKategorie_Pozicovne');
var VypisKategorie_Pozicovne = document.getElementById('VypisKategorie_Pozicovne');

var pozicovneTextNodes = Text_Pozicovne.childNodes;

ColorChangeText(Text_Pozicovne.childNodes, "black", 0.23)

var pozicovne_kostymy = document.getElementById('pozicovne_kostymy');
var pozicovne_hry = document.getElementById('pozicovne_hry');
var pozicovne_sportovenaradie = document.getElementById('pozicovne_sportovenaradie');
var pozicovne_cyklo = document.getElementById('pozicovne_cyklo');
var pozicovne_naradieAtechnika = document.getElementById('pozicovne_naradieAtechnika');

var pozicovne_kostymy_text = document.getElementById('Kostymy');
var pozicovne_hry_text = document.getElementById('Hry_Pozicovna');
var pozicovne_sportovenaradie_text = document.getElementById('SportoveNaradie');
var pozicovne_cyklo_text = document.getElementById('Cyklo_Pozicovna');
var pozicovne_naradieAtechnika_text = document.getElementById('NaradieTechnika');

var NadpisPodkategorie_Pozicovne_Kostymy = document.getElementById('NadpisPodkategorie_Pozicovne_Kostymy');
var NadpisPodkategorie_Pozicovne_Hry = document.getElementById('NadpisPodkategorie_Pozicovne_Hry');
var NadpisPodkategorie_Pozicovne_SportoveNaradie = document.getElementById('NadpisPodkategorie_Pozicovne_SportoveNaradie');
var NadpisPodkategorie_Pozicovne_Cyklo = document.getElementById('NadpisPodkategorie_Pozicovne_Cyklo');
var NadpisPodkategorie_Pozicovne_NaradieTechnika = document.getElementById('NadpisPodkategorie_Pozicovne_NaradieTechnika');

var VypisPodkategorie_Pozicovne_Kostymi = document.getElementById('VypisPodkategorie_Pozicovne_Kostymi');
var VypisPodkategorie_Pozicovne_Hry = document.getElementById('VypisPodkategorie_Pozicovne_Hry');
var VypisPodkategorie_Pozicovne_SportoveNaradie = document.getElementById('VypisPodkategorie_Pozicovne_SportoveNaradie');
var VypisPodkategorie_Pozicovne_Cyklo = document.getElementById('VypisPodkategorie_Pozicovne_Cyklo');
var VypisPodkategorie_Pozicovne_NaradieTechnika = document.getElementById('VypisPodkategorie_Pozicovne_NaradieTechnika');

Text_Pozicovne.style.fill = "black";

Podklad_Pozicovne.style.opacity = "0";
NadpisKategorie_Pozicovne.style.opacity = "0";
VypisKategorie_Pozicovne.style.opacity = "0";

pozicovne_kostymy.style.opacity = "0";
pozicovne_hry.style.opacity = "0";
pozicovne_sportovenaradie.style.opacity = "0";
pozicovne_cyklo.style.opacity = "0";
pozicovne_naradieAtechnika.style.opacity = "0";

pozicovne_kostymy_text.style.opacity = "0";
pozicovne_hry_text.style.opacity = "0";
pozicovne_sportovenaradie_text.style.opacity = "0";
pozicovne_cyklo_text.style.opacity = "0";
pozicovne_naradieAtechnika_text.style.opacity = "0";

NadpisPodkategorie_Pozicovne_Kostymy.style.opacity = "0";
NadpisPodkategorie_Pozicovne_Hry.style.opacity = "0";
NadpisPodkategorie_Pozicovne_SportoveNaradie.style.opacity = "0";
NadpisPodkategorie_Pozicovne_Cyklo.style.opacity = "0";
NadpisPodkategorie_Pozicovne_NaradieTechnika.style.opacity = "0";

VypisPodkategorie_Pozicovne_Kostymi.style.opacity = "0";
VypisPodkategorie_Pozicovne_Hry.style.opacity = "0";
VypisPodkategorie_Pozicovne_SportoveNaradie.style.opacity = "0";
VypisPodkategorie_Pozicovne_Cyklo.style.opacity = "0";
VypisPodkategorie_Pozicovne_NaradieTechnika.style.opacity = "0";

var VsetkyBodkyPozicovne = document.getElementById('VsetkyBodkyPozicovne');
var BodkyPozicovna_Kostymi = document.getElementById('BodkyPozicovna_Kostymi');
var BodkyPozicovna_Hry = document.getElementById('BodkyPozicovna_Hry');
var BodkyPozicovna_SportoveNaradie = document.getElementById('BodkyPozicovna_SportoveNaradie');
var BodkyPozicovna_Cyklo = document.getElementById('BodkyPozicovna_Cyklo');
var BodkyPozicovne_NaradieTechnika = document.getElementById('BodkyPozicovne_NaradieTechnika');

HideDots(VsetkyBodkyPozicovne)
HideDots(BodkyPozicovna_Kostymi)
HideDots(BodkyPozicovna_Hry)
HideDots(BodkyPozicovna_SportoveNaradie)
HideDots(BodkyPozicovna_Cyklo)
HideDots(BodkyPozicovne_NaradieTechnika)

//zberne miesta
var ZberneMiesta = document.getElementById('ZberneMiesta');
var ZberneMiestaPodnadpis = document.getElementById('ZberneMiestaPodnadpis');
var Text_Zberne = document.getElementById('Text_Zberne');
var Podklad_Zberne = document.getElementById('Podklad_Zberne');
var NadpisKategorie_ZberneMiesta = document.getElementById('NadpisKategorie_ZberneMiesta');
var VypisKategorie_ZberneMiesta = document.getElementById('VypisKategorie_ZberneMiesta');

var zberne_textil = document.getElementById('zberne_textil');
var zberne_kefky = document.getElementById('zberne_kefky');
var zberne_dvory = document.getElementById('zberne_dvory');
var zberne_olej = document.getElementById('zberne_olej');
var zberne_elektroOdpad = document.getElementById('zberne_elektroOdpad');

var zberne_textil_text = document.getElementById('TextilObuv');
var zberne_kefky_text = document.getElementById('ZubneKefky');
var zberne_dvory_text = document.getElementById('ZberneDvory');
var zberne_olej_text = document.getElementById('KuchynskyOlej');
var zberne_elektroOdpad_text = document.getElementById('Elektroodpad');

var NadpisPodkategorie_ZberneMiesta_Textil = document.getElementById('NadpisPodkategorie_ZberneMiesta_Textil');
var NadpisPodkategorie_ZberneMiesta_Kefky = document.getElementById('NadpisPodkategorie_ZberneMiesta_Kefky');
var NadpisPodkategorie_ZberneMiesta_ZberneDvory = document.getElementById('NadpisPodkategorie_ZberneMiesta_ZberneDvory');
var NadpisPodkategorie_ZberneMiesta_Olej = document.getElementById('NadpisPodkategorie_ZberneMiesta_Olej');
var NadpisPodkategorie_ZberneMiesta_Elektroodpad = document.getElementById('NadpisPodkategorie_ZberneMiesta_Elektroodpad');

var VypisPodkategorie_ZberneMiesta_Textil = document.getElementById('VypisPodkategorie_ZberneMiesta_Textil');
var VypisPodkategorie_ZberneMiesta_Kefky = document.getElementById('VypisPodkategorie_ZberneMiesta_Kefky');
var VypisPodkategorie_ZberneMiesta_ZberneDvory = document.getElementById('VypisPodkategorie_ZberneMiesta_ZberneDvory');
var VypisPodkategorie_ZberneMiesta_Olej = document.getElementById('VypisPodkategorie_ZberneMiesta_Olej');
var VypisPodkategorie_ZberneMiesta_Elektroodpad = document.getElementById('VypisPodkategorie_ZberneMiesta_Elektroodpad');

Podklad_Zberne.style.opacity = "0";
NadpisKategorie_ZberneMiesta.style.opacity = "0";
VypisKategorie_ZberneMiesta.style.opacity = "0";

zberne_textil.style.opacity = "0";
zberne_kefky.style.opacity = "0";
zberne_dvory.style.opacity = "0";
zberne_olej.style.opacity = "0";
zberne_elektroOdpad.style.opacity = "0";

zberne_textil_text.style.opacity = "0";
zberne_kefky_text.style.opacity = "0";
zberne_dvory_text.style.opacity = "0";
zberne_olej_text.style.opacity = "0";
zberne_elektroOdpad_text.style.opacity = "0";

NadpisPodkategorie_ZberneMiesta_Textil.style.opacity = "0";
NadpisPodkategorie_ZberneMiesta_Kefky.style.opacity = "0";
NadpisPodkategorie_ZberneMiesta_ZberneDvory.style.opacity = "0";
NadpisPodkategorie_ZberneMiesta_Olej.style.opacity = "0";
NadpisPodkategorie_ZberneMiesta_Elektroodpad.style.opacity = "0";

VypisPodkategorie_ZberneMiesta_Textil.style.opacity = "0";
VypisPodkategorie_ZberneMiesta_Kefky.style.opacity = "0";
VypisPodkategorie_ZberneMiesta_ZberneDvory.style.opacity = "0";
VypisPodkategorie_ZberneMiesta_Olej.style.opacity = "0";
VypisPodkategorie_ZberneMiesta_Elektroodpad.style.opacity = "0";


var VsetkyBodky_ZberneMiesta = document.getElementById('VsetkyBodky_ZberneMiesta');
var BodkyZberneMiesta_Elektroodpad = document.getElementById('BodkyZberneMiesta_Elektroodpad');
var BodkyZberneMiesta_Textil = document.getElementById('BodkyZberneMiesta_Textil');
var BodkyZberneMiesta_Olej = document.getElementById('BodkyZberneMiesta_Olej');
var BodkyZberneMiesta_ZberneDvory = document.getElementById('BodkyZberneMiesta_ZberneDvory');
var BodkyZberneMiesta_Kefky = document.getElementById('BodkyZberneMiesta_Kefky');

HideDots(VsetkyBodky_ZberneMiesta)
HideDots(BodkyZberneMiesta_Elektroodpad)
HideDots(BodkyZberneMiesta_Textil)
HideDots(BodkyZberneMiesta_Olej)
HideDots(BodkyZberneMiesta_ZberneDvory)
HideDots(BodkyZberneMiesta_Kefky)


//servisy
var ServisyAopravovne = document.getElementById('ServisyAopravovne');
var ServisyPodnadpis = document.getElementById('ServisyPodnadpis');
var Text_Servisy = document.getElementById('Text_Servisy');
var Podklad_Servisy = document.getElementById('Podklad_Servisy');
var NadpisKategorie_ServisyOpravovne = document.getElementById('NadpisKategorie_ServisyOpravovne');
var VypisKategorie_ServisyOpravovne = document.getElementById('VypisKategorie_ServisyOpravovne');

var servisy_odev = document.getElementById('servisy_odev');
var servisy_obuv = document.getElementById('servisy_obuv');
var servisy_elektro = document.getElementById('servisy_elektro');
var servisy_cyklisticke = document.getElementById('servisy_cyklisticke');

var servisy_odev_text = document.getElementById('Odev');
var servisy_obuv_text = document.getElementById('Obuv');
var servisy_elektro_text = document.getElementById('Elektro');
var servisy_cyklisticke_text = document.getElementById('Cyklo_servis');

var NadpisPodkategorie_Servisy_Cyklisticke = document.getElementById('NadpisPodkategorie_Servisy_Cyklisticke');
var NadpisPodkategorie_Servisy_Elektro = document.getElementById('NadpisPodkategorie_Servisy_Elektro');
var NadpisPodkategorie_Servisy_Obuv = document.getElementById('NadpisPodkategorie_Servisy_Obuv');
var NadpisPodkategorie_Servisy_Odev = document.getElementById('NadpisPodkategorie_Servisy_Odev');

var VypisPodkategorie_ServisyOpravovne_Cyklisticke = document.getElementById('VypisPodkategorie_ServisyOpravovne_Cyklisticke');
var VypisPodkategorie_ServisyOpravovne_Elektro = document.getElementById('VypisPodkategorie_ServisyOpravovne_Elektro');
var VypisPodkategorie_ServisyOpravovne_Obuv = document.getElementById('VypisPodkategorie_ServisyOpravovne_Obuv');
var VypisPodkategorie_ServisyOpravovne_Odev = document.getElementById('VypisPodkategorie_ServisyOpravovne_Odev');

Podklad_Servisy.style.opacity = "0";
NadpisKategorie_ServisyOpravovne.style.opacity = "0";
VypisKategorie_ServisyOpravovne.style.opacity = "0";

servisy_odev.style.opacity = "0";
servisy_obuv.style.opacity = "0";
servisy_elektro.style.opacity = "0";
servisy_cyklisticke.style.opacity = "0";

servisy_odev_text.style.opacity = "0";
servisy_obuv_text.style.opacity = "0";
servisy_elektro_text.style.opacity = "0";
servisy_cyklisticke_text.style.opacity = "0";

NadpisPodkategorie_Servisy_Cyklisticke.style.opacity = "0";
NadpisPodkategorie_Servisy_Elektro.style.opacity = "0";
NadpisPodkategorie_Servisy_Obuv.style.opacity = "0";
NadpisPodkategorie_Servisy_Odev.style.opacity = "0";

VypisPodkategorie_ServisyOpravovne_Cyklisticke.style.opacity = "0";
VypisPodkategorie_ServisyOpravovne_Elektro.style.opacity = "0";
VypisPodkategorie_ServisyOpravovne_Obuv.style.opacity = "0";
VypisPodkategorie_ServisyOpravovne_Odev.style.opacity = "0";

var VsetkyBodky_ServisyOpravovne = document.getElementById('VsetkyBodky_ServisyOpravovne');
var BodkyServisyOpravovne_Odev = document.getElementById('BodkyServisyOpravovne_Odev');
var BodkyServisyOpravovne_Obuv = document.getElementById('BodkyServisyOpravovne_Obuv');
var BodkyServisyOpravovne_Elektro = document.getElementById('BodkyServisyOpravovne_Elektro');
var BodkyServisyOpravovne_Cyklo = document.getElementById('BodkyServisyOpravovne_Cyklo');

HideDots(VsetkyBodky_ServisyOpravovne)
HideDots(BodkyServisyOpravovne_Odev)
HideDots(BodkyServisyOpravovne_Obuv)
HideDots(BodkyServisyOpravovne_Elektro)
HideDots(BodkyServisyOpravovne_Cyklo)


//BezobaloveObchody
var BezobaloveObchody = document.getElementById('BezobaloveObchody');
var BezobalovePodnadpis = document.getElementById('BezobalovePodnadpis');
var Text_Bezobal = document.getElementById('Text_Bezobal');
var Podklad_Bezobal = document.getElementById('Podklad_Bezobal');
var NadpisKategorie_Bezobal = document.getElementById('NadpisKategorie_Bezobal');
var VypisKategorie_Bezobal = document.getElementById('VypisKategorie_Bezobal');

var bezobal_zmiesane = document.getElementById('bezobal_zmiesane');
var bezobal_potraviny = document.getElementById('bezobal_potraviny');
var bezobal_drogeria = document.getElementById('bezobal_drogeria');

var bezobal_zmiesane_text = document.getElementById('Zmiesane');
var bezobal_potraviny_text = document.getElementById('Potraviny');
var bezobal_drogeria_text = document.getElementById('Drogeria');

var NadpisPodkategorie_Bezobal_Zmiesane = document.getElementById('NadpisPodkategorie_Bezobal_Zmiesane');
var NadpisPodkategorie_Bezobal_Potraviny = document.getElementById('NadpisPodkategorie_Bezobal_Potraviny');
var NadpisPodkategorie_Bezobal_Drogeria = document.getElementById('NadpisPodkategorie_Bezobal_Drogeria');

var VypisPodkategorie_Bezobal_Zmiesane = document.getElementById('VypisPodkategorie_Bezobal_Zmiesane');
var VypisPodkategorie_Bezobal_Potraviny = document.getElementById('VypisPodkategorie_Bezobal_Potraviny');
var VypisPodkategorie_Bezobal_Drogeria = document.getElementById('VypisPodkategorie_Bezobal_Drogeria');

Podklad_Bezobal.style.opacity = "0";
NadpisKategorie_Bezobal.style.opacity = "0";
VypisKategorie_Bezobal.style.opacity = "0";

bezobal_zmiesane.style.opacity = "0";
bezobal_potraviny.style.opacity = "0";
bezobal_drogeria.style.opacity = "0";

bezobal_zmiesane_text.style.opacity = "0";
bezobal_potraviny_text.style.opacity = "0";
bezobal_drogeria_text.style.opacity = "0";

NadpisPodkategorie_Bezobal_Zmiesane.style.opacity = "0";
NadpisPodkategorie_Bezobal_Potraviny.style.opacity = "0";
NadpisPodkategorie_Bezobal_Drogeria.style.opacity = "0";

VypisPodkategorie_Bezobal_Zmiesane.style.opacity = "0";
VypisPodkategorie_Bezobal_Potraviny.style.opacity = "0";
VypisPodkategorie_Bezobal_Drogeria.style.opacity = "0";

var VsetkyBodky_Bezobal = document.getElementById('VsetkyBodky_Bezobal');
var BodkyBezobal_Drogeria = document.getElementById('BodkyBezobal_Drogeria');
var BodkyBezobal_Potraviny = document.getElementById('BodkyBezobal_Potraviny');
var BodkyBezobal_Zmiesane = document.getElementById('BodkyBezobal_Zmiesane');

HideDots(VsetkyBodky_Bezobal)
HideDots(BodkyBezobal_Drogeria)
HideDots(BodkyBezobal_Potraviny)
HideDots(BodkyBezobal_Zmiesane)

//Second handy
var Second_handy = document.getElementById('Second_handy');
var Text_Seconhand = document.getElementById('Text_Seconhand');
var Podklad_Secondahand = document.getElementById('Podklad_Secondahand');
var NadpisKategorie_Secondhandy = document.getElementById('NadpisKategorie_Secondhandy');
var VypisKategorie_Secondhandy = document.getElementById('VypisKategorie_Secondhandy');

var VypisPodkategorie_Secondhandy_Secondhandy = document.getElementById('VypisPodkategorie_Secondhandy_Secondhandy');


Podklad_Secondahand.style.opacity = "0";
NadpisKategorie_Secondhandy.style.opacity = "0";
VypisKategorie_Secondhandy.style.opacity = "0";
VypisPodkategorie_Secondhandy_Secondhandy.style.opacity = "0";

Second_handy.style.opacity = "0";
Second_handy.style.opacity = "0";

var VsetkyBodky_SecondHandy = document.getElementById('VsetkyBodky_SecondHandy');

HideDots(VsetkyBodky_SecondHandy)

//Sharing Podklad_Bicykle
var Bike_scooterSharing = document.getElementById('Bike_scooterSharing');
var Text_Bicykle = document.getElementById('Text_Bicykle');
var Podklad_Bicykle = document.getElementById('Podklad_Bicykle');
var NadpisKategorie_Bicykle = document.getElementById('NadpisKategorie_Bicykle');
var VypisKategorie_Bicykle = document.getElementById('VypisKategorie_Bicykle');
var VypisPodkategorie_Bicykle_Bicykle = document.getElementById('VypisPodkategorie_Bicykle_Bicykle');


NadpisKategorie_Bicykle.style.opacity = "0";

Podklad_Bicykle.style.opacity = "0";
Bike_scooterSharing.style.opacity = "0";
VypisKategorie_Bicykle.style.opacity = "0";
VypisPodkategorie_Bicykle_Bicykle.style.opacity = "0";


var VsetkyBodky_Bicykle = document.getElementById('VsetkyBodky_Bicykle');

HideDots(VsetkyBodky_Bicykle)


//Lines
var ZberneMiestaLine = document.getElementById('Line1');
var ServisyLine = document.getElementById('Line2');
var PozicovneLine = document.getElementById('Line3');
var SecondHandLine = document.getElementById('Line4');
var BezobalLine = document.getElementById('Line5');
var BikeLine = document.getElementById('Line6');

ZberneMiestaLine.style.stroke = "black";
ServisyLine.style.stroke = "black";
PozicovneLine.style.stroke = "black";
PozicovneLine.style.strokeOpacity = 0.37;
SecondHandLine.style.stroke = "black";
BezobalLine.style.stroke = "black";
BikeLine.style.stroke = "black";

var pozicovneSubsections = [pozicovne_kostymy, pozicovne_hry, pozicovne_sportovenaradie, pozicovne_cyklo, pozicovne_naradieAtechnika];
var pozicovneSubsectionsSubTitles = [pozicovne_kostymy_text, pozicovne_hry_text, pozicovne_sportovenaradie_text, pozicovne_cyklo_text, pozicovne_naradieAtechnika_text];

//Pozicovne sekcia
Text_Pozicovne.addEventListener("mouseover", () => ShowSection(pozicovneSubsections, pozicovneSubsectionsSubTitles, PozicovneLine, "#C67D28", Text_Pozicovne, "#5A3F1E", VsetkyBodkyPozicovne, NadpisKategorie_Pozicovne, VypisKategorie_Pozicovne), false);
Text_Pozicovne.addEventListener("mouseout", () => HideSection(pozicovneSubsections, pozicovneSubsectionsSubTitles, PozicovneLine, Text_Pozicovne, VsetkyBodkyPozicovne, NadpisKategorie_Pozicovne, VypisKategorie_Pozicovne), false);
Podklad_Pozicovne.addEventListener("mouseover", () => ShowSection(pozicovneSubsections, pozicovneSubsectionsSubTitles, PozicovneLine, "#C67D28", Text_Pozicovne, "#5A3F1E", VsetkyBodkyPozicovne, NadpisKategorie_Pozicovne, VypisKategorie_Pozicovne), false);
Podklad_Pozicovne.addEventListener("mouseout", () => HideSection(pozicovneSubsections, pozicovneSubsectionsSubTitles, PozicovneLine, Text_Pozicovne, VsetkyBodkyPozicovne, NadpisKategorie_Pozicovne, VypisKategorie_Pozicovne), false);

//Pozicovne podsekcie
pozicovne_kostymy.addEventListener("mouseover", () => ShowSubsection(pozicovne_kostymy,pozicovne_kostymy_text, Text_Pozicovne, "#5A3F1E", PozicovneLine, "#C67D28", BodkyPozicovna_Kostymi, NadpisPodkategorie_Pozicovne_Kostymy, VypisPodkategorie_Pozicovne_Kostymi), false);
pozicovne_kostymy.addEventListener("mouseout", () => HideSubsection(pozicovne_kostymy,pozicovne_kostymy_text, Text_Pozicovne, PozicovneLine,BodkyPozicovna_Kostymi, NadpisPodkategorie_Pozicovne_Kostymy, VypisPodkategorie_Pozicovne_Kostymi), false);

pozicovne_hry.addEventListener("mouseover", () => ShowSubsection(pozicovne_hry,pozicovne_hry_text, Text_Pozicovne, "#5A3F1E", PozicovneLine, "#C67D28", BodkyPozicovna_Hry, NadpisPodkategorie_Pozicovne_Hry, VypisPodkategorie_Pozicovne_Hry), false);
pozicovne_hry.addEventListener("mouseout", () => HideSubsection(pozicovne_hry,pozicovne_hry_text, Text_Pozicovne, PozicovneLine, BodkyPozicovna_Hry, NadpisPodkategorie_Pozicovne_Hry, VypisPodkategorie_Pozicovne_Hry), false);

pozicovne_sportovenaradie.addEventListener("mouseover", () => ShowSubsection(pozicovne_sportovenaradie,pozicovne_sportovenaradie_text, Text_Pozicovne, "#5A3F1E", PozicovneLine, "#C67D28", BodkyPozicovna_SportoveNaradie, NadpisPodkategorie_Pozicovne_SportoveNaradie, VypisPodkategorie_Pozicovne_SportoveNaradie), false);
pozicovne_sportovenaradie.addEventListener("mouseout", () => HideSubsection(pozicovne_sportovenaradie,pozicovne_sportovenaradie_text, Text_Pozicovne, PozicovneLine, BodkyPozicovna_SportoveNaradie, NadpisPodkategorie_Pozicovne_SportoveNaradie, VypisPodkategorie_Pozicovne_SportoveNaradie), false);

pozicovne_cyklo.addEventListener("mouseover", () => ShowSubsection(pozicovne_cyklo,pozicovne_cyklo_text, Text_Pozicovne, "#5A3F1E", PozicovneLine, "#C67D28", BodkyPozicovna_Cyklo, NadpisPodkategorie_Pozicovne_Cyklo, VypisPodkategorie_Pozicovne_Cyklo), false);
pozicovne_cyklo.addEventListener("mouseout", () => HideSubsection(pozicovne_cyklo,pozicovne_cyklo_text, Text_Pozicovne, PozicovneLine, BodkyPozicovna_Cyklo, NadpisPodkategorie_Pozicovne_Cyklo, VypisPodkategorie_Pozicovne_Cyklo), false);

pozicovne_naradieAtechnika.addEventListener("mouseover", () => ShowSubsection(pozicovne_naradieAtechnika,pozicovne_naradieAtechnika_text, Text_Pozicovne, "#5A3F1E", PozicovneLine, "#C67D28", BodkyPozicovne_NaradieTechnika, NadpisPodkategorie_Pozicovne_NaradieTechnika, VypisPodkategorie_Pozicovne_NaradieTechnika), false);
pozicovne_naradieAtechnika.addEventListener("mouseout", () => HideSubsection(pozicovne_naradieAtechnika,pozicovne_naradieAtechnika_text, Text_Pozicovne, PozicovneLine, BodkyPozicovne_NaradieTechnika, NadpisPodkategorie_Pozicovne_NaradieTechnika, VypisPodkategorie_Pozicovne_NaradieTechnika), false);

//Zberne sekcia
Text_Zberne.addEventListener("mouseover", () => ShowSection(zberneSubsections, zberneSubsectionsSubTitles, ZberneMiestaLine, "#43A533", Text_Zberne, "#227914", VsetkyBodky_ZberneMiesta, NadpisKategorie_ZberneMiesta, VypisKategorie_ZberneMiesta), false);
Text_Zberne.addEventListener("mouseout", () => HideSection(zberneSubsections, zberneSubsectionsSubTitles, ZberneMiestaLine, Text_Zberne, VsetkyBodky_ZberneMiesta, NadpisKategorie_ZberneMiesta, VypisKategorie_ZberneMiesta), false);
Podklad_Zberne.addEventListener("mouseover", () => ShowSection(zberneSubsections, zberneSubsectionsSubTitles, ZberneMiestaLine, "#43A533", Text_Zberne, "#227914", VsetkyBodky_ZberneMiesta, NadpisKategorie_ZberneMiesta, VypisKategorie_ZberneMiesta), false);
Podklad_Zberne.addEventListener("mouseout", () => HideSection(zberneSubsections, zberneSubsectionsSubTitles, ZberneMiestaLine, Text_Zberne, VsetkyBodky_ZberneMiesta, NadpisKategorie_ZberneMiesta, VypisKategorie_ZberneMiesta), false);

var zberneSubsections = [zberne_textil, zberne_kefky, zberne_dvory, zberne_olej, zberne_elektroOdpad];
var zberneSubsectionsSubTitles = [zberne_textil_text, zberne_kefky_text, zberne_dvory_text, zberne_olej_text, zberne_elektroOdpad_text];

//Zberne podsekcie
zberne_textil.addEventListener("mouseover", () => ShowSubsection(zberne_textil,zberne_textil_text, Text_Zberne, "#227914", ZberneMiestaLine, "#43A533", BodkyZberneMiesta_Textil, NadpisPodkategorie_ZberneMiesta_Textil, VypisPodkategorie_ZberneMiesta_Textil), false);
zberne_textil.addEventListener("mouseout", () => HideSubsection(zberne_textil,zberne_textil_text, Text_Zberne, ZberneMiestaLine, BodkyZberneMiesta_Textil, NadpisPodkategorie_ZberneMiesta_Textil, VypisPodkategorie_ZberneMiesta_Textil), false);

zberne_kefky.addEventListener("mouseover", () => ShowSubsection(zberne_kefky,zberne_kefky_text, Text_Zberne, "#227914", ZberneMiestaLine, "#43A533", BodkyZberneMiesta_Kefky, NadpisPodkategorie_ZberneMiesta_Kefky, VypisPodkategorie_ZberneMiesta_Kefky), false);
zberne_kefky.addEventListener("mouseout", () => HideSubsection(zberne_kefky,zberne_kefky_text, Text_Zberne, ZberneMiestaLine, BodkyZberneMiesta_Kefky, NadpisPodkategorie_ZberneMiesta_Kefky, VypisPodkategorie_ZberneMiesta_Kefky), false);

zberne_dvory.addEventListener("mouseover", () => ShowSubsection(zberne_dvory,zberne_dvory_text, Text_Zberne, "#227914", ZberneMiestaLine, "#43A533", BodkyZberneMiesta_ZberneDvory, NadpisPodkategorie_ZberneMiesta_ZberneDvory, VypisPodkategorie_ZberneMiesta_ZberneDvory), false);
zberne_dvory.addEventListener("mouseout", () => HideSubsection(zberne_dvory,zberne_dvory_text, Text_Zberne, ZberneMiestaLine, BodkyZberneMiesta_ZberneDvory, NadpisPodkategorie_ZberneMiesta_ZberneDvory, VypisPodkategorie_ZberneMiesta_ZberneDvory), false);

zberne_olej.addEventListener("mouseover", () => ShowSubsection(zberne_olej,zberne_olej_text, Text_Zberne, "#227914", ZberneMiestaLine, "#43A533", BodkyZberneMiesta_Olej, NadpisPodkategorie_ZberneMiesta_Olej, VypisPodkategorie_ZberneMiesta_Olej), false);
zberne_olej.addEventListener("mouseout", () => HideSubsection(zberne_olej,zberne_olej_text, Text_Zberne, ZberneMiestaLine, BodkyZberneMiesta_Olej, NadpisPodkategorie_ZberneMiesta_Olej, VypisPodkategorie_ZberneMiesta_Olej), false);

zberne_elektroOdpad.addEventListener("mouseover", () => ShowSubsection(zberne_elektroOdpad,zberne_elektroOdpad_text, Text_Zberne, "#227914", ZberneMiestaLine, "#43A533", BodkyZberneMiesta_Elektroodpad, NadpisPodkategorie_ZberneMiesta_Elektroodpad, VypisPodkategorie_ZberneMiesta_Elektroodpad), false);
zberne_elektroOdpad.addEventListener("mouseout", () => HideSubsection(zberne_elektroOdpad,zberne_elektroOdpad_text, Text_Zberne, ZberneMiestaLine, BodkyZberneMiesta_Elektroodpad, NadpisPodkategorie_ZberneMiesta_Elektroodpad, VypisPodkategorie_ZberneMiesta_Elektroodpad), false);

//Servisy sekcia
Text_Servisy.addEventListener("mouseover", () => ShowSection(servisySubsections, servisySubsectionsSubTitles, ServisyLine, "#208AD6", Text_Servisy, "#144F79", VsetkyBodky_ServisyOpravovne, NadpisKategorie_ServisyOpravovne, VypisKategorie_ServisyOpravovne), false);
Text_Servisy.addEventListener("mouseout", () => HideSection(servisySubsections, servisySubsectionsSubTitles, ServisyLine, Text_Servisy, VsetkyBodky_ServisyOpravovne, NadpisKategorie_ServisyOpravovne, VypisKategorie_ServisyOpravovne), false);
Podklad_Servisy.addEventListener("mouseover", () => ShowSection(servisySubsections, servisySubsectionsSubTitles, ServisyLine, "#208AD6", Text_Servisy, "#144F79", VsetkyBodky_ServisyOpravovne, NadpisKategorie_ServisyOpravovne, VypisKategorie_ServisyOpravovne), false);
Podklad_Servisy.addEventListener("mouseout", () => HideSection(servisySubsections, servisySubsectionsSubTitles, ServisyLine, Text_Servisy, VsetkyBodky_ServisyOpravovne, NadpisKategorie_ServisyOpravovne, VypisKategorie_ServisyOpravovne), false);

var servisySubsections = [servisy_odev, servisy_obuv, servisy_elektro, servisy_cyklisticke];
var servisySubsectionsSubTitles = [servisy_odev_text, servisy_obuv_text, servisy_elektro_text, servisy_cyklisticke_text];

//Servisy subsekcie
servisy_odev.addEventListener("mouseover", () => ShowSubsection(servisy_odev,servisy_odev_text, Text_Servisy, "#144F79", ServisyLine, "#208AD6", BodkyServisyOpravovne_Odev, NadpisPodkategorie_Servisy_Odev, VypisPodkategorie_ServisyOpravovne_Odev), false);
servisy_odev.addEventListener("mouseout", () => HideSubsection(servisy_odev,servisy_odev_text, Text_Servisy, ServisyLine, BodkyServisyOpravovne_Odev, NadpisPodkategorie_Servisy_Odev, VypisPodkategorie_ServisyOpravovne_Odev), false);

servisy_obuv.addEventListener("mouseover", () => ShowSubsection(servisy_obuv,servisy_obuv_text, Text_Servisy, "#144F79", ServisyLine, "#208AD6", BodkyServisyOpravovne_Obuv, NadpisPodkategorie_Servisy_Obuv, VypisPodkategorie_ServisyOpravovne_Obuv), false);
servisy_obuv.addEventListener("mouseout", () => HideSubsection(servisy_obuv,servisy_obuv_text, Text_Servisy, ServisyLine, BodkyServisyOpravovne_Obuv, NadpisPodkategorie_Servisy_Obuv, VypisPodkategorie_ServisyOpravovne_Obuv), false);

servisy_elektro.addEventListener("mouseover", () => ShowSubsection(servisy_elektro,servisy_elektro_text, Text_Servisy, "#144F79", ServisyLine, "#208AD6", BodkyServisyOpravovne_Elektro, NadpisPodkategorie_Servisy_Elektro, VypisPodkategorie_ServisyOpravovne_Elektro), false);
servisy_elektro.addEventListener("mouseout", () => HideSubsection(servisy_elektro,servisy_elektro_text, Text_Servisy, ServisyLine, BodkyServisyOpravovne_Elektro, NadpisPodkategorie_Servisy_Elektro, VypisPodkategorie_ServisyOpravovne_Elektro), false);

servisy_cyklisticke.addEventListener("mouseover", () => ShowSubsection(servisy_cyklisticke,servisy_cyklisticke_text, Text_Servisy, "#144F79", ServisyLine, "#208AD6", BodkyServisyOpravovne_Cyklo, NadpisPodkategorie_Servisy_Cyklisticke, VypisPodkategorie_ServisyOpravovne_Cyklisticke), false);
servisy_cyklisticke.addEventListener("mouseout", () => HideSubsection(servisy_cyklisticke,servisy_cyklisticke_text, Text_Servisy, ServisyLine, BodkyServisyOpravovne_Cyklo, NadpisPodkategorie_Servisy_Cyklisticke, VypisPodkategorie_ServisyOpravovne_Cyklisticke), false);

//Bezobaly sekcia
Text_Bezobal.addEventListener("mouseover", () => ShowSection(bezobalSubsections, bezobalSubsectionsSubTitles, BezobalLine, "#997733", Text_Bezobal, "#997733", VsetkyBodky_Bezobal, NadpisKategorie_Bezobal, VypisKategorie_ServisyOpravovne), false);
Text_Bezobal.addEventListener("mouseout", () => HideSection(bezobalSubsections, bezobalSubsectionsSubTitles, BezobalLine, Text_Bezobal, VsetkyBodky_Bezobal, NadpisKategorie_Bezobal, VypisKategorie_ServisyOpravovne), false);
Podklad_Bezobal.addEventListener("mouseover", () => ShowSection(bezobalSubsections, bezobalSubsectionsSubTitles, BezobalLine, "#997733", Text_Bezobal, "#997733", VsetkyBodky_Bezobal, NadpisKategorie_Bezobal, VypisKategorie_ServisyOpravovne), false);
Podklad_Bezobal.addEventListener("mouseout", () => HideSection(bezobalSubsections, bezobalSubsectionsSubTitles, BezobalLine, Text_Bezobal, VsetkyBodky_Bezobal, NadpisKategorie_Bezobal, VypisKategorie_ServisyOpravovne), false);

var bezobalSubsections = [bezobal_zmiesane, bezobal_potraviny, bezobal_drogeria];
var bezobalSubsectionsSubTitles = [bezobal_zmiesane_text, bezobal_potraviny_text, bezobal_drogeria_text];

bezobal_zmiesane.addEventListener("mouseover", () => ShowSubsection(bezobal_zmiesane,bezobal_zmiesane_text, Text_Bezobal, "#997733", BezobalLine, "#997733", BodkyBezobal_Zmiesane, NadpisPodkategorie_Bezobal_Zmiesane, VypisPodkategorie_Bezobal_Zmiesane), false);
bezobal_zmiesane.addEventListener("mouseout", () => HideSubsection(bezobal_zmiesane,bezobal_zmiesane_text, Text_Bezobal, BezobalLine, BodkyBezobal_Zmiesane, NadpisPodkategorie_Bezobal_Zmiesane, VypisPodkategorie_Bezobal_Zmiesane), false);

bezobal_potraviny.addEventListener("mouseover", () => ShowSubsection(bezobal_potraviny,bezobal_potraviny_text, Text_Bezobal, "#997733", BezobalLine, "#997733", BodkyBezobal_Potraviny, NadpisPodkategorie_Bezobal_Potraviny, VypisPodkategorie_Bezobal_Potraviny), false);
bezobal_potraviny.addEventListener("mouseout", () => HideSubsection(bezobal_potraviny,bezobal_potraviny_text, Text_Bezobal, BezobalLine, BodkyBezobal_Potraviny, NadpisPodkategorie_Bezobal_Potraviny, VypisPodkategorie_Bezobal_Potraviny), false);

bezobal_drogeria.addEventListener("mouseover", () => ShowSubsection(bezobal_drogeria,bezobal_drogeria_text, Text_Bezobal, "#997733", BezobalLine, "#997733", BodkyBezobal_Drogeria, NadpisPodkategorie_Bezobal_Drogeria, VypisPodkategorie_Bezobal_Drogeria), false);
bezobal_drogeria.addEventListener("mouseout", () => HideSubsection(bezobal_drogeria,bezobal_drogeria_text, Text_Bezobal, BezobalLine, BodkyBezobal_Drogeria, NadpisPodkategorie_Bezobal_Drogeria, VypisPodkategorie_Bezobal_Drogeria), false);

//Secondhand
Text_Seconhand.addEventListener("mouseover", () => ShowSingleSection(Second_handy,Text_Seconhand, SecondHandLine, "#1E5A3D", "#1DA383", VsetkyBodky_SecondHandy, NadpisKategorie_Secondhandy, VypisKategorie_Secondhandy), false);
Text_Seconhand.addEventListener("mouseout", () => HideSingleSection(Second_handy,Text_Seconhand, SecondHandLine, VsetkyBodky_SecondHandy, NadpisKategorie_Secondhandy, VypisKategorie_Secondhandy), false);
Podklad_Secondahand.addEventListener("mouseover", () => ShowSingleSection(Second_handy,Text_Seconhand, SecondHandLine, "#1E5A3D", "#1DA383", VsetkyBodky_SecondHandy, NadpisKategorie_Secondhandy, VypisKategorie_Secondhandy), false);
Podklad_Secondahand.addEventListener("mouseout", () => HideSingleSection(Second_handy,Text_Seconhand, SecondHandLine, VsetkyBodky_SecondHandy, NadpisKategorie_Secondhandy, VypisKategorie_Secondhandy), false);
Second_handy.addEventListener("mouseover", () => ShowSingleSection(Second_handy,Text_Seconhand, SecondHandLine, "#1E5A3D", "#1DA383", VsetkyBodky_SecondHandy, NadpisKategorie_Secondhandy, VypisKategorie_Secondhandy), false);
Second_handy.addEventListener("mouseout", () => HideSingleSection(Second_handy,Text_Seconhand, SecondHandLine, VsetkyBodky_SecondHandy, NadpisKategorie_Secondhandy, VypisKategorie_Secondhandy), false);

//Zdielanie
Text_Bicykle.addEventListener("mouseover", () => ShowSingleSection(Bike_scooterSharing,Text_Bicykle, BikeLine, "#234688", "#4A72BD", VsetkyBodky_Bicykle, NadpisKategorie_Bicykle, VypisKategorie_Bicykle), false);
Text_Bicykle.addEventListener("mouseout", () => HideSingleSection(Bike_scooterSharing,Text_Bicykle, BikeLine, VsetkyBodky_Bicykle, NadpisKategorie_Bicykle, VypisKategorie_Bicykle), false);
Podklad_Bicykle.addEventListener("mouseover", () => ShowSingleSection(Bike_scooterSharing,Text_Bicykle, BikeLine, "#234688", "#4A72BD", VsetkyBodky_Bicykle, NadpisKategorie_Bicykle, VypisKategorie_Bicykle), false);
Podklad_Bicykle.addEventListener("mouseout", () => HideSingleSection(Bike_scooterSharing,Text_Bicykle, BikeLine, VsetkyBodky_Bicykle, NadpisKategorie_Bicykle, VypisKategorie_Bicykle), false);
Bike_scooterSharing.addEventListener("mouseover", () => ShowSingleSection(Bike_scooterSharing,Text_Bicykle, BikeLine, "#234688", "#4A72BD", VsetkyBodky_Bicykle, NadpisKategorie_Bicykle, VypisKategorie_Bicykle), false);
Bike_scooterSharing.addEventListener("mouseout", () => HideSingleSection(Bike_scooterSharing,Text_Bicykle, BikeLine, VsetkyBodky_Bicykle, NadpisKategorie_Bicykle, VypisKategorie_Bicykle), false);



function ShowSingleSection(section, sectionName, line, color, lineColor, dotSet, sectionTitle, sectionCategories){
  section.style.opacity = 100;

  line.style.strokeOpacity = 1;
  line.style.stroke = lineColor;

  sectionTitle.style.opacity = "100";
  sectionCategories.style.opacity = "100";

  ColorChangeText(sectionName.childNodes, color, 0.65 );
  ShowDots(dotSet);
}

function HideSingleSection(section, sectionName, line, dotSet, sectionTitle, sectionCategories){
  section.style.opacity = 0;

  line.style.strokeOpacity = 0.37;
  line.style.stroke = "black";

  sectionTitle.style.opacity = "0";
  sectionCategories.style.opacity = "0";

  ColorChangeText(sectionName.childNodes, "black", 0.23 );
  HideDots(dotSet)
}

function HideSection (subSections, subtitles, line, sectionName, dotSet, sectionTitle, sectionCategories) {
  subSections.forEach(element => {
    element.style.opacity = "0";
  });

  subtitles.forEach(element => {
    element.style.opacity = "0";
  });

  line.style.strokeOpacity = 0.37;
  line.style.stroke = "black";

  sectionTitle.style.opacity = "0";
  sectionCategories.style.opacity = "0";

  ColorChangeText(sectionName.childNodes, "black", 0.23 );
  HideDots(dotSet)
}

function ShowSection (subSections, subtitles, line, color, sectionName, nameColor, dotSet, sectionTitle, sectionCategories) {
  subSections.forEach(element => {
    element.style.opacity = "100";
  });
  
  subtitles.forEach(element => {
    element.style.opacity = "100";
  });

  line.style.strokeOpacity = 1;
  line.style.stroke = color;

  sectionTitle.style.opacity = "100";
  sectionCategories.style.opacity = "100";
  ColorChangeText(sectionName.childNodes, nameColor, 0.65);
  ShowDots(dotSet);
}

function ShowSubsection(subsection, text, sectionName, nameColor, line, lineColor, dotSet, subsectionTitle, sectionCategories){
  subsection.style.opacity = "100";
  text.style.opacity = "100";

  line.style.strokeOpacity = 1;
  line.style.stroke = lineColor;

  subsectionTitle.style.opacity = "100";
  sectionCategories.style.opacity = "100";

  ColorChangeText(sectionName.childNodes, nameColor, 0.65 );
  ShowDots(dotSet);
}

function HideSubsection(subsection, text, sectionName, line, dotSet, subsectionTitle, sectionCategories){
  subsection.style.opacity = "0";
  text.style.opacity = "0";

  line.style.strokeOpacity = 0.37;
  line.style.stroke = "black";

  subsectionTitle.style.opacity = "0";
  sectionCategories.style.opacity = "0";

  ColorChangeText(sectionName.childNodes, "black", 0.23 );
  HideDots(dotSet)
}

function ColorChangeText (nodes, color, opacity) {
  for(var i = 0; i < nodes.length; i++){
    if(i % 2 != 0){
    
      nodes[i].setAttribute("fill", color);
      nodes[i].setAttribute("fill-opacity", opacity);
    }
  }
}

function ShowDots(dotSet){
  dotSet.children.forEach(element => {
    element.style.opacity = "100";
  });
}

function HideDots(dotSet){
  dotSet.children.forEach(element => {
    element.style.opacity = "0";
  });
}