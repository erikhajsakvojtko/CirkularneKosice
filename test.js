//pozicovne
var Pozicovne = document.getElementById('Pozicovne');
var PozicovnePodnadpis = document.getElementById('PozicovnePodnadpis');
var Text_Pozicovne = document.getElementById('Text_Pozicovne');
var Podklad_Pozicovne = document.getElementById('Podklad_Pozicovne');


var pozicovneTextNodes = Text_Pozicovne.childNodes;

ColorChangeText(Text_Pozicovne.childNodes, "black", 0.23)

var pozicovne_kostymy = document.getElementById('pozicovne_kostymy');
var pozicovne_hry = document.getElementById('pozicovne_hry');
var pozicovne_sportovenaradie = document.getElementById('pozicovne_sportovenaradie');
var pozicovne_cyklo = document.getElementById('pozicovne_cyklo');
var pozicovne_naradieAtechnika = document.getElementById('pozicovne_naradieAtechnika');

var pozicovne_kostymy_text = document.getElementById('Kostymy');
var pozicovne_hry_text = document.getElementById('Hry_2');
var pozicovne_sportovenaradie_text = document.getElementById('SportoveNaradie');
var pozicovne_cyklo_text = document.getElementById('Cyklo_2');
var pozicovne_naradieAtechnika_text = document.getElementById('NaradieTechnika');

Text_Pozicovne.style.fill = "black";


Podklad_Pozicovne.style.opacity = "0";

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

//zberne miesta
var ZberneMiesta = document.getElementById('ZberneMiesta');
var ZberneMiestaPodnadpis = document.getElementById('ZberneMiestaPodnadpis');
var Text_Zberne = document.getElementById('Text_Zberne');
var Podklad_Zberne = document.getElementById('Podklad_Zberne');

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

Podklad_Zberne.style.opacity = "0";

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

//servisy
var ServisyAopravovne = document.getElementById('ServisyAopravovne');
var ServisyPodnadpis = document.getElementById('ServisyPodnadpis');
var Text_Servisy = document.getElementById('Text_Servisy');
var Podklad_Servisy = document.getElementById('Podklad_Servisy');

var servisy_odev = document.getElementById('servisy_odev');
var servisy_obuv = document.getElementById('servisy_obuv');
var servisy_elektro = document.getElementById('servisy_elektro');
var servisy_cyklisticke = document.getElementById('servisy_cyklisticke');

var servisy_odev_text = document.getElementById('Odev');
var servisy_obuv_text = document.getElementById('Obuv');
var servisy_elektro_text = document.getElementById('Elektro');
var servisy_cyklisticke_text = document.getElementById('Cyklo_3');

Podklad_Servisy.style.opacity = "0";

servisy_odev.style.opacity = "0";
servisy_obuv.style.opacity = "0";
servisy_elektro.style.opacity = "0";
servisy_cyklisticke.style.opacity = "0";

servisy_odev_text.style.opacity = "0";
servisy_obuv_text.style.opacity = "0";
servisy_elektro_text.style.opacity = "0";
servisy_cyklisticke_text.style.opacity = "0";

//BezobaloveObchody
var BezobaloveObchody = document.getElementById('BezobaloveObchody');
var BezobalovePodnadpis = document.getElementById('BezobalovePodnadpis');
var Text_Bezobal = document.getElementById('Text_Bezobal');
var Podklad_Bezobal = document.getElementById('Podklad_Bezobal');

var bezobal_zmiesane = document.getElementById('bezobal_zmiesane');
var bezobal_potraviny = document.getElementById('bezobal_potraviny');
var bezobal_drogeria = document.getElementById('bezobal_drogeria');

var bezobal_zmiesane_text = document.getElementById('Zmiesane');
var bezobal_potraviny_text = document.getElementById('Potraviny');
var bezobal_drogeria_text = document.getElementById('Drogeria');

Podklad_Bezobal.style.opacity = "0";

bezobal_zmiesane.style.opacity = "0";
bezobal_potraviny.style.opacity = "0";
bezobal_drogeria.style.opacity = "0";

bezobal_zmiesane_text.style.opacity = "0";
bezobal_potraviny_text.style.opacity = "0";
bezobal_drogeria_text.style.opacity = "0";

//Second handy
var Second_handy = document.getElementById('Second_handy');
var Text_Seconhand = document.getElementById('Text_Seconhand');
var Podklad_Secondahand = document.getElementById('Podklad_Secondahand');

Podklad_Secondahand.style.opacity = "0";

Second_handy.style.opacity = "0";

//Sharing Podklad_Bicykle
var Bike_scooterSharing = document.getElementById('Bike_scooterSharing');
var Text_Bicykle = document.getElementById('Text_Bicykle');
var Podklad_Bicykle = document.getElementById('Podklad_Bicykle');

Podklad_Bicykle.style.opacity = "0";
Bike_scooterSharing.style.opacity = "0";


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
Text_Pozicovne.addEventListener("mouseover", () => ShowSection(pozicovneSubsections, pozicovneSubsectionsSubTitles, PozicovneLine, "#C67D28", Text_Pozicovne, "#5A3F1E"), false);
Text_Pozicovne.addEventListener("mouseout", () => HideSection(pozicovneSubsections, pozicovneSubsectionsSubTitles, PozicovneLine, Text_Pozicovne), false);
Podklad_Pozicovne.addEventListener("mouseover", () => ShowSection(pozicovneSubsections, pozicovneSubsectionsSubTitles, PozicovneLine, "#C67D28", Text_Pozicovne, "#5A3F1E"), false);
Podklad_Pozicovne.addEventListener("mouseout", () => HideSection(pozicovneSubsections, pozicovneSubsectionsSubTitles, PozicovneLine, Text_Pozicovne), false);

//Pozicovne podsekcie
pozicovne_kostymy.addEventListener("mouseover", () => ShowSubsection(pozicovne_kostymy,pozicovne_kostymy_text, Text_Pozicovne, "#5A3F1E", PozicovneLine, "#C67D28"), false);
pozicovne_kostymy.addEventListener("mouseout", () => HideSubsection(pozicovne_kostymy,pozicovne_kostymy_text, Text_Pozicovne, PozicovneLine), false);

pozicovne_hry.addEventListener("mouseover", () => ShowSubsection(pozicovne_hry,pozicovne_hry_text, Text_Pozicovne, "#5A3F1E", PozicovneLine, "#C67D28"), false);
pozicovne_hry.addEventListener("mouseout", () => HideSubsection(pozicovne_hry,pozicovne_hry_text, Text_Pozicovne, PozicovneLine), false);

pozicovne_sportovenaradie.addEventListener("mouseover", () => ShowSubsection(pozicovne_sportovenaradie,pozicovne_sportovenaradie_text, Text_Pozicovne, "#5A3F1E", PozicovneLine, "#C67D28"), false);
pozicovne_sportovenaradie.addEventListener("mouseout", () => HideSubsection(pozicovne_sportovenaradie,pozicovne_sportovenaradie_text, Text_Pozicovne, PozicovneLine), false);

pozicovne_cyklo.addEventListener("mouseover", () => ShowSubsection(pozicovne_cyklo,pozicovne_cyklo_text, Text_Pozicovne, "#5A3F1E", PozicovneLine, "#C67D28"), false);
pozicovne_cyklo.addEventListener("mouseout", () => HideSubsection(pozicovne_cyklo,pozicovne_cyklo_text, Text_Pozicovne, PozicovneLine), false);

pozicovne_naradieAtechnika.addEventListener("mouseover", () => ShowSubsection(pozicovne_naradieAtechnika,pozicovne_naradieAtechnika_text, Text_Pozicovne, "#5A3F1E", PozicovneLine, "#C67D28"), false);
pozicovne_naradieAtechnika.addEventListener("mouseout", () => HideSubsection(pozicovne_naradieAtechnika,pozicovne_naradieAtechnika_text, Text_Pozicovne, PozicovneLine), false);

//Zberne sekcia
Text_Zberne.addEventListener("mouseover", () => ShowSection(zberneSubsections, zberneSubsectionsSubTitles, ZberneMiestaLine, "#43A533", Text_Zberne, "#227914"), false);
Text_Zberne.addEventListener("mouseout", () => HideSection(zberneSubsections, zberneSubsectionsSubTitles, ZberneMiestaLine, Text_Zberne), false);
Podklad_Zberne.addEventListener("mouseover", () => ShowSection(zberneSubsections, zberneSubsectionsSubTitles, ZberneMiestaLine, "#43A533", Text_Zberne, "#227914"), false);
Podklad_Zberne.addEventListener("mouseout", () => HideSection(zberneSubsections, zberneSubsectionsSubTitles, ZberneMiestaLine, Text_Zberne), false);

var zberneSubsections = [zberne_textil, zberne_kefky, zberne_dvory, zberne_olej, zberne_elektroOdpad];
var zberneSubsectionsSubTitles = [zberne_textil_text, zberne_kefky_text, zberne_dvory_text, zberne_olej_text, zberne_elektroOdpad_text];

//Zberne podsekcie
zberne_textil.addEventListener("mouseover", () => ShowSubsection(zberne_textil,zberne_textil_text, Text_Zberne, "#227914", ZberneMiestaLine, "#43A533"), false);
zberne_textil.addEventListener("mouseout", () => HideSubsection(zberne_textil,zberne_textil_text, Text_Zberne, ZberneMiestaLine), false);

zberne_kefky.addEventListener("mouseover", () => ShowSubsection(zberne_kefky,zberne_kefky_text, Text_Zberne, "#227914", ZberneMiestaLine, "#43A533"), false);
zberne_kefky.addEventListener("mouseout", () => HideSubsection(zberne_kefky,zberne_kefky_text, Text_Zberne, ZberneMiestaLine), false);

zberne_dvory.addEventListener("mouseover", () => ShowSubsection(zberne_dvory,zberne_dvory_text, Text_Zberne, "#227914", ZberneMiestaLine, "#43A533"), false);
zberne_dvory.addEventListener("mouseout", () => HideSubsection(zberne_dvory,zberne_dvory_text, Text_Zberne, ZberneMiestaLine), false);

zberne_olej.addEventListener("mouseover", () => ShowSubsection(zberne_olej,zberne_olej_text, Text_Zberne, "#227914", ZberneMiestaLine, "#43A533"), false);
zberne_olej.addEventListener("mouseout", () => HideSubsection(zberne_olej,zberne_olej_text, Text_Zberne, ZberneMiestaLine), false);

zberne_elektroOdpad.addEventListener("mouseover", () => ShowSubsection(zberne_elektroOdpad,zberne_elektroOdpad_text, Text_Zberne, "#227914", ZberneMiestaLine, "#43A533"), false);
zberne_elektroOdpad.addEventListener("mouseout", () => HideSubsection(zberne_elektroOdpad,zberne_elektroOdpad_text, Text_Zberne, ZberneMiestaLine), false);

//Servisy sekcia
Text_Servisy.addEventListener("mouseover", () => ShowSection(servisySubsections, servisySubsectionsSubTitles, ServisyLine, "#208AD6", Text_Servisy, "#144F79"), false);
Text_Servisy.addEventListener("mouseout", () => HideSection(servisySubsections, servisySubsectionsSubTitles, ServisyLine, Text_Servisy), false);
Podklad_Servisy.addEventListener("mouseover", () => ShowSection(servisySubsections, servisySubsectionsSubTitles, ServisyLine, "#208AD6", Text_Servisy, "#144F79"), false);
Podklad_Servisy.addEventListener("mouseout", () => HideSection(servisySubsections, servisySubsectionsSubTitles, ServisyLine, Text_Servisy), false);

var servisySubsections = [servisy_odev, servisy_obuv, servisy_elektro, servisy_cyklisticke];
var servisySubsectionsSubTitles = [servisy_odev_text, servisy_obuv_text, servisy_elektro_text, servisy_cyklisticke_text];

//Servisy subsekcie
servisy_odev.addEventListener("mouseover", () => ShowSubsection(servisy_odev,servisy_odev_text, Text_Servisy, "#144F79", ServisyLine, "#208AD6"), false);
servisy_odev.addEventListener("mouseout", () => HideSubsection(servisy_odev,servisy_odev_text, Text_Servisy, ServisyLine), false);

servisy_obuv.addEventListener("mouseover", () => ShowSubsection(servisy_obuv,servisy_obuv_text, Text_Servisy, "#144F79", ServisyLine, "#208AD6"), false);
servisy_obuv.addEventListener("mouseout", () => HideSubsection(servisy_obuv,servisy_obuv_text, Text_Servisy, ServisyLine), false);

servisy_elektro.addEventListener("mouseover", () => ShowSubsection(servisy_elektro,servisy_elektro_text, Text_Servisy, "#144F79", ServisyLine, "#208AD6"), false);
servisy_elektro.addEventListener("mouseout", () => HideSubsection(servisy_elektro,servisy_elektro_text, Text_Servisy, ServisyLine), false);

servisy_cyklisticke.addEventListener("mouseover", () => ShowSubsection(servisy_cyklisticke,servisy_cyklisticke_text, Text_Servisy, "#144F79", ServisyLine, "#208AD6"), false);
servisy_cyklisticke.addEventListener("mouseout", () => HideSubsection(servisy_cyklisticke,servisy_cyklisticke_text, Text_Servisy, ServisyLine), false);

//Bezobaly sekcia
Text_Bezobal.addEventListener("mouseover", () => ShowSection(bezobalSubsections, bezobalSubsectionsSubTitles, BezobalLine, "#997733", Text_Bezobal, "#997733"), false);
Text_Bezobal.addEventListener("mouseout", () => HideSection(bezobalSubsections, bezobalSubsectionsSubTitles, BezobalLine, Text_Bezobal), false);
Podklad_Bezobal.addEventListener("mouseover", () => ShowSection(bezobalSubsections, bezobalSubsectionsSubTitles, BezobalLine, "#997733", Text_Bezobal, "#997733"), false);
Podklad_Bezobal.addEventListener("mouseout", () => HideSection(bezobalSubsections, bezobalSubsectionsSubTitles, BezobalLine, Text_Bezobal), false);

var bezobalSubsections = [bezobal_zmiesane, bezobal_potraviny, bezobal_drogeria];
var bezobalSubsectionsSubTitles = [bezobal_zmiesane_text, bezobal_potraviny_text, bezobal_drogeria_text];

bezobal_zmiesane.addEventListener("mouseover", () => ShowSubsection(bezobal_zmiesane,bezobal_zmiesane_text, Text_Bezobal, "#997733", BezobalLine, "#997733"), false);
bezobal_zmiesane.addEventListener("mouseout", () => HideSubsection(bezobal_zmiesane,bezobal_zmiesane_text, Text_Bezobal, BezobalLine), false);

bezobal_potraviny.addEventListener("mouseover", () => ShowSubsection(bezobal_potraviny,bezobal_potraviny_text, Text_Bezobal, "#997733", BezobalLine, "#997733"), false);
bezobal_potraviny.addEventListener("mouseout", () => HideSubsection(bezobal_potraviny,bezobal_potraviny_text, Text_Bezobal, BezobalLine), false);

bezobal_drogeria.addEventListener("mouseover", () => ShowSubsection(bezobal_drogeria,bezobal_drogeria_text, Text_Bezobal, "#997733", BezobalLine, "#997733"), false);
bezobal_drogeria.addEventListener("mouseout", () => HideSubsection(bezobal_drogeria,bezobal_drogeria_text, Text_Bezobal, BezobalLine), false);

//Secondhand
Text_Seconhand.addEventListener("mouseover", () => ShowSingleSection(Second_handy,Text_Seconhand, SecondHandLine, "#1E5A3D", "#1DA383"), false);
Text_Seconhand.addEventListener("mouseout", () => HideSingleSection(Second_handy,Text_Seconhand, SecondHandLine), false);
Podklad_Secondahand.addEventListener("mouseover", () => ShowSingleSection(Second_handy,Text_Seconhand, SecondHandLine, "#1E5A3D", "#1DA383"), false);
Podklad_Secondahand.addEventListener("mouseout", () => HideSingleSection(Second_handy,Text_Seconhand, SecondHandLine), false);
Second_handy.addEventListener("mouseover", () => ShowSingleSection(Second_handy,Text_Seconhand, SecondHandLine, "#1E5A3D", "#1DA383"), false);
Second_handy.addEventListener("mouseout", () => HideSingleSection(Second_handy,Text_Seconhand, SecondHandLine), false);

//Zdielanie
Text_Bicykle.addEventListener("mouseover", () => ShowSingleSection(Bike_scooterSharing,Text_Bicykle, BikeLine, "#234688", "#4A72BD"), false);
Text_Bicykle.addEventListener("mouseout", () => HideSingleSection(Bike_scooterSharing,Text_Bicykle, BikeLine), false);
Podklad_Bicykle.addEventListener("mouseover", () => ShowSingleSection(Bike_scooterSharing,Text_Bicykle, BikeLine, "#234688", "#4A72BD"), false);
Podklad_Bicykle.addEventListener("mouseout", () => HideSingleSection(Bike_scooterSharing,Text_Bicykle, BikeLine), false);
Bike_scooterSharing.addEventListener("mouseover", () => ShowSingleSection(Bike_scooterSharing,Text_Bicykle, BikeLine, "#234688", "#4A72BD"), false);
Bike_scooterSharing.addEventListener("mouseout", () => HideSingleSection(Bike_scooterSharing,Text_Bicykle, BikeLine), false);



function ShowSingleSection(section, sectionName, line, color, lineColor){
  section.style.opacity = 100;

  line.style.strokeOpacity = 1;
  line.style.stroke = lineColor;

  ColorChangeText(sectionName.childNodes, color, 0.65 )
}

function HideSingleSection(section, sectionName, line){
  section.style.opacity = 0;

  line.style.strokeOpacity = 0.37;
  line.style.stroke = "black";

  ColorChangeText(sectionName.childNodes, "black", 0.23 )
}

function HideSection (subSections, subtitles, line, sectionName) {
  subSections.forEach(element => {
    element.style.opacity = "0";
  });

  subtitles.forEach(element => {
    element.style.opacity = "0";
  });

  line.style.strokeOpacity = 0.37;
  line.style.stroke = "black";

  ColorChangeText(sectionName.childNodes, "black", 0.23 )
}

function ShowSection (subSections, subtitles, line, color, sectionName, nameColor) {
  subSections.forEach(element => {
    element.style.opacity = "100";
  });
  
  subtitles.forEach(element => {
    element.style.opacity = "100";
  });

  line.style.strokeOpacity = 1;
  line.style.stroke = color;

  ColorChangeText(sectionName.childNodes, nameColor, 0.65);
}

function ShowSubsection(subsection, text, sectionName, nameColor, line, lineColor){
  subsection.style.opacity = "100";
  text.style.opacity = "100";

  line.style.strokeOpacity = 1;
  line.style.stroke = lineColor;

  ColorChangeText(sectionName.childNodes, nameColor, 0.65 )
}

function HideSubsection(subsection, text, sectionName, line){
  subsection.style.opacity = "0";
  text.style.opacity = "0";

  line.style.strokeOpacity = 0.37;
  line.style.stroke = "black";

  ColorChangeText(sectionName.childNodes, "black", 0.23 )
}

function ColorChangeText (nodes, color, opacity) {
  for(var i = 0; i < nodes.length; i++){
    if(i % 2 != 0){
    
      nodes[i].setAttribute("fill", color);
      nodes[i].setAttribute("fill-opacity", opacity);
    }
  }
}
