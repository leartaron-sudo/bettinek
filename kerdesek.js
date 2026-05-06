// ============================================================
//  BETTI TANULÓ BOT - KÉRDÉSEK
// ============================================================
//  Itt add hozzá a kérdéseket. Ne nyúlj az "const KERDESEK = [" sorhoz
//  és a fájl legvégén lévő "];" jelhez!
//
//  HÁROM KÉRDÉSTÍPUS VAN:
//
//  1) FELELETVÁLASZTÓS (kvíz mód)
//     {
//       tetel: "1. tétel - Állapotfelmérés",
//       tipus: "feleletvalasztos",
//       kerdes: "Itt a kérdés szövege?",
//       valaszok: ["A", "B", "C", "D"],
//       helyes: 1,    // 0 = első, 1 = második, 2 = harmadik, 3 = negyedik
//       magyarazat: "Részletes magyarázat..."
//     },
//
//  2) NYITOTT (szóbeli tétel gyakorlása)
//     {
//       tetel: "1. tétel - Állapotfelmérés",
//       tipus: "nyitott",
//       kerdes: "Mondd el a fájdalom megfigyelésének szempontjait.",
//       valasz: "Mióta? Milyen jellegű? Hol? ...",
//       magyarazat: "Plusz részletek..."
//     },
//
//  3) LATIN (orvosi szókincs - flashcard stílus)
//     {
//       tetel: "Latin - Anatómia",
//       tipus: "latin",
//       latin: "Cor, cordis",
//       jelentes: "szív",
//       kiejtes: "kor",
//       pelda: "Cor pulmonale = ...",
//       magyarazat: "..."
//     },
//
//  FONTOS:
//  - Minden kérdés után KELL egy vessző (kivéve az utolsó után, az is mehet).
//  - A "magyarazat" mező nem kötelező, kihagyhatod.
// ============================================================

const KERDESEK = [

  // =============================================================
  // ============ 1. TÉTEL - ÁLLAPOTFELMÉRÉS, ILEUS ==============
  // =============================================================

  {
    tetel: "1. tétel - Állapotfelmérés és ileus",
    tipus: "nyitott",
    kerdes: "Mondd el az állapotfelmérés bevezető lépéseit (a panaszok felmérése előtt).",
    valasz: "Bemutatkozás (hogyan szólíthatom?), betegazonosítás, beteg pozíciós tájékoztatása, intimitás és környezet biztosítása.",
    magyarazat: "Mindig ezzel kezdjük: a beteggel kapcsolatfelvétel, biztonságos és intim környezet megteremtése. Csak ezután következnek a panaszok kérdezése."
  },

  {
    tetel: "1. tétel - Állapotfelmérés és ileus",
    tipus: "nyitott",
    kerdes: "Mit kell megkérdezni a beteg fájdalmával kapcsolatban? (legalább 8 szempont)",
    valasz: "Mióta? Milyen jellegű? Hol? Erőssége? Mikor jelentkezett? Vett-e be gyógyszert? Arckifejezés? Testtartás?",
    magyarazat: "A fájdalmat mindig komplexen mérjük fel: nemcsak verbálisan, hanem nonverbális jeleket is figyelünk (arc, testhelyzet)."
  },

  {
    tetel: "1. tétel - Állapotfelmérés és ileus",
    tipus: "nyitott",
    kerdes: "Mit kell megfigyelni a hányinger / hányás esetén?",
    valasz: "Mikor? Milyen időközönként? Színe, szaga, állaga, tartalma? Mikor evett utoljára és mit?",
    magyarazat: "A hányadék jellege diagnosztikus értékű (pl. véres, epés, sárgászöld, kávéaljszerű). Mindig dokumentálni kell."
  },

  {
    tetel: "1. tétel - Állapotfelmérés és ileus",
    tipus: "nyitott",
    kerdes: "Hogyan mérjük fel a kiszáradás veszélyét?",
    valasz: "Bőr ellenőrzése (turgor), nyelv nyálkahártyájának megfigyelése, folyadéklap vezetése (bevitt és ürített folyadék), kérdezzük: mikor ivott utoljára és mennyit.",
    magyarazat: "A turgor csökkenése, száraz nyálkahártya, csökkent diurézis mind a kiszáradás jele. A folyadékegyensúly követése kulcsfontosságú."
  },

  {
    tetel: "1. tétel - Állapotfelmérés és ileus",
    tipus: "feleletvalasztos",
    kerdes: "Mi a paralitikus ileus lényege?",
    valaszok: [
      "A belek fokozott összehúzódása, görcs",
      "A belek normális továbbító mozgásának lelassulása",
      "A bélfalat ellátó erek elzáródása",
      "Daganat okozta szűkület"
    ],
    helyes: 1,
    magyarazat: "A paralitikus ileus = renyhe bélelzáródás. A bélperisztaltika lelassul, ami székrekedéshez és puffadáshoz vezet. Funkcionális ileus."
  },

  {
    tetel: "1. tétel - Állapotfelmérés és ileus",
    tipus: "feleletvalasztos",
    kerdes: "Az ileus melyik formája tartozik a dinamikus csoportba?",
    valaszok: [
      "Paralitikus",
      "Vaszkuláris",
      "Stranguláció (pl. külső leszorítás)",
      "Spasztikus"
    ],
    helyes: 2,
    magyarazat: "Dinamikus ileus: stranguláció (külső leszorítás, pl. daganat) és obstrukció (szűkítő, pl. bélcsavarodás, bélsár). Funkcionális: paralitikus, spasztikus. Vaszkuláris: bélfalat ellátó erek trombózisa, embóliája."
  },

  {
    tetel: "1. tétel - Állapotfelmérés és ileus",
    tipus: "nyitott",
    kerdes: "Mi a paralitikus ileus, és milyen formái vannak az ileusnak?",
    valasz: "Paralitikus ileus: a belek normális továbbító mozgásának lelassulása, ami székrekedéshez és puffadáshoz vezet. Az ileus formái: 1) Dinamikus: stranguláció (külső leszorítás, pl. daganat a gyomorban), obstrukció (szűkítő, pl. daganat, bélcsavarodás, bélsár). 2) Funkcionális: paralitikus (renyhe), spasztikus (görcsös, fokozott bélműködés). 3) Vaszkuláris: a bélfalat ellátó erek trombózisa, embóliája.",
    magyarazat: "Az ileus a bélpasszázs zavarát jelenti. A típus felismerése a kezelés szempontjából kritikus."
  },

  {
    tetel: "1. tétel - Állapotfelmérés és ileus",
    tipus: "nyitott",
    kerdes: "Mi a nasogastricus szondázás lényege és céljai?",
    valasz: "A szondát az orron át a gyomorba vezetjük. Céljai: közvetlen táplálás biztosítása, folyadék- és gyógyszerbevitel, gyomortartalom leszívása (dekompresszió - nyomáscsökkentés).",
    magyarazat: "A dekompresszió főleg ileusnál és műtét után fontos, mert a felgyűlt bélgáz és váladék csökkenti a betegen érzett puffadást és hányingerveszélyt."
  },

  {
    tetel: "1. tétel - Állapotfelmérés és ileus",
    tipus: "feleletvalasztos",
    kerdes: "A nasogastricus szonda kimérésénél melyik testi tájékozódási pontokat használjuk?",
    valaszok: [
      "Köldök, csípő, váll",
      "Szegycsont kardnyúlványa, száj, orr, fül (kb. 45 cm)",
      "Áll, nyak, mellkas",
      "Bordaív, köldök, szeméremcsont"
    ],
    helyes: 1,
    magyarazat: "A szonda hosszát a szegycsont kardnyúlványától mérjük a szájig, az orrig, majd a fülig - kb. 45 cm. Ez biztosítja, hogy a szonda vége a gyomorba érjen."
  },

  {
    tetel: "1. tétel - Állapotfelmérés és ileus",
    tipus: "nyitott",
    kerdes: "Mondd el a nasogastricus szondázás teljes menetét.",
    valasz: "1) Beteg előkészítése: tájékoztatás, beleegyező nyilatkozat, pozicionálás (ülő vagy félig ülő). 2) Eszközök: gumikesztyű, szonda, csúsztató gél, fecskendő, vizeletes zsák, fonendoszkóp, szegett géz, filc, kocher, pohár víz, vesetál, ágyvédelem, katéter akasztó, ápolási és folyadék lap. 3) Menete: szonda kimérése (45 cm), gél a szonda végére, orron keresztül a gyomorba vezetés, a beteget megkérjük, hogy a hátsó garatfalnál nyeljen, szonda helyzetének ellenőrzése (fonendoszkóp), gyomortartalom visszaszívása, rögzítés filccel/géztörlővel, katéterzsák csatlakoztatása. 4) Beteg környezetének rendbetétele, eszközök elpakolása, dokumentálás (váladék mennyisége, színe, állaga).",
    magyarazat: "A szonda helyzetét MINDIG ellenőrizni kell levezetés után (fecskendővel levegő befújása, fonendoszkóppal hallgatás), nehogy a légutakba kerüljön."
  },

  // ----- KARDIÁLIS DEKOMPENZÁCIÓ -----

  {
    tetel: "1. tétel - Állapotfelmérés és ileus",
    tipus: "nyitott",
    kerdes: "Mit jelent a kardiális dekompenzáció (szívelégtelenség)?",
    valasz: "A szív nem képes a szervezet oxigén- és tápanyagigényét kielégítő mennyiségű vért pumpálni.",
    magyarazat: "A szívelégtelenség kompenzációs mechanizmusokkal kezdődik (szapora pulzus, szívnagyobbodás), majd ezek kimerülnek (dekompenzáció)."
  },

  {
    tetel: "1. tétel - Állapotfelmérés és ileus",
    tipus: "feleletvalasztos",
    kerdes: "Bal szívfél elégtelenségnél melyik vérkör érintett?",
    valaszok: [
      "Nagy vérkör (test)",
      "Kis vérkör (tüdő)",
      "Mindkét vérkör egyformán",
      "A vérkörökön kívüli erek"
    ],
    helyes: 1,
    magyarazat: "Bal szívfél elégtelenség → kis vérkör érintett (szív, tüdő). Tünetek: nehézlégzés, fáradékonyság, oxigénhiány, cyanosis, tüdőoedema."
  },

  {
    tetel: "1. tétel - Állapotfelmérés és ileus",
    tipus: "nyitott",
    kerdes: "Mi a különbség a bal és jobb szívfél elégtelenség között? (vérkör, tünetek)",
    valasz: "Bal szívfél elégtelenség: kis vérkör érintett (szív, tüdő). A bal kamra nem tud elég vért pumpálni a testbe. Tünetek: nehézlégzés, fáradékonyság, oxigénhiány, cyanosis, tüdőoedema. Diagnosztika: szív UH, EKG, labor, mellkas röntgen. Jobb szívfél elégtelenség: nagy vérkör érintett. A szív nem tud hatékonyan a tüdőbe pumpálni → vénás pangás. Tünetek: alsó végtagi oedema (boka, lábszár), hasi puffadás, májmegnagyobbodás, étvágytalanság, émelygés, testsúlynövekedés, gyakori éjszakai vizeletürítés (nykturia), fáradékonyság, ascites. Diagnosztika: szív UH, szívkatéterezés.",
    magyarazat: "Tipikus iskolai megfogalmazás: 'a vér ott pang fel, ahonnan kell volna továbbpumpálni'. Bal: tüdőben pang → tüdőoedema. Jobb: testben pang → alsóvégtagi oedema, ascites."
  },

  {
    tetel: "1. tétel - Állapotfelmérés és ileus",
    tipus: "feleletvalasztos",
    kerdes: "A jobb szívfél elégtelenség TIPIKUS tünete az alábbiak közül:",
    valaszok: [
      "Tüdőoedema",
      "Alsó végtagi oedema és ascites",
      "Cyanosis nyugalomban",
      "Magas vérnyomás"
    ],
    helyes: 1,
    magyarazat: "Jobb szívfél elégtelenségnél a vénás rendszerben pang a vér → alsó végtagi oedema, hasi puffadás, ascites, májmegnagyobbodás."
  },

  // ----- PITVARFIBRILLÁCIÓ -----

  {
    tetel: "1. tétel - Állapotfelmérés és ileus",
    tipus: "feleletvalasztos",
    kerdes: "Pitvarfibrilláció (pitvarremegés) esetén a pitvar pulzusszáma:",
    valaszok: [
      "60-80 / perc",
      "100-150 / perc",
      "300-700 / perc",
      "35-45 / perc"
    ],
    helyes: 2,
    magyarazat: "Pitvarfibrillációnál a pitvar 300-700/perc szabálytalan ingerleadással működik. Sinus csomó normálisan: 60-80/perc. Pitvar-kamrai csomó: 35-45/perc."
  },

  {
    tetel: "1. tétel - Állapotfelmérés és ileus",
    tipus: "nyitott",
    kerdes: "Mi a pitvarfibrilláció lényege és terápiája?",
    valasz: "Lényege: szabálytalan szívműködés, az ingerület nem vezetődik a kamrába rendesen. A pitvarban szapora (300-700/min) szabálytalan ingerleadás van. Diagnosztika: EKG, vérnyomás, pulzus. Terápia: elektrosokk (a normál sinus ritmus helyreállítása), gyógyszer, antikoaguláns terápia (vérhígító, mert thrombus képződhet a pitvarban).",
    magyarazat: "Az antikoaguláns kulcsfontosságú: a pangó vérből alvadék képződhet, ami stroke-ot okozhat."
  },

  // ----- MŰSZAKÁTADÁS -----

  {
    tetel: "1. tétel - Állapotfelmérés és ileus",
    tipus: "nyitott",
    kerdes: "Mit kell átadnod a műszakváltáskor a betegről?",
    valasz: "Beteg aktuális állapota, folyadékfogyasztás (bevitt és ürített mennyiség), ehet-e, kardinális tünetek, szondalevezetésnél a váladék mennyisége, akut panaszok mennyire rendeződtek, rövid távú ápolási terv.",
    magyarazat: "A műszakátadás strukturált legyen, hogy a kollégának ne maradjon kérdés. A folyadékegyensúly és a beteg etetési státusza kritikus."
  },

  // ----- ÁPOLÁSI TERV (1. táblázat) -----

  {
    tetel: "1. tétel - Ápolási terv",
    tipus: "nyitott",
    kerdes: "Hasi fájdalom esetén mi az ápolási diagnózis, cél és terv?",
    valasz: "Tünet: hasi fájdalom. Ápolási dg.: hasi fájdalom a nem megfelelő bélműködés miatt. Cél: a beteg hasi fájdalmának megszüntetése. Terv: pozicionálás, szellőztetés, fájdalom felmérése, orvosi utasításra fájdalomcsillapító adása.",
    magyarazat: "Az ápolási terv mindig ebben a struktúrában: tünet → ápolási dg (a tünet + miért) → cél → konkrét teendők."
  },

  {
    tetel: "1. tétel - Ápolási terv",
    tipus: "nyitott",
    kerdes: "Hányinger / hányás ápolási terve?",
    valasz: "Tünet: hányinger / hányás. Ápolási dg.: hányinger / hányás a nem megfelelő bélműködés miatt vagy a fordított perisztaltika miatt. Cél: hányinger / hányás megszüntetése. Terv: félig ülő testhelyzet, vesetál előkészítése, nővérhívó kéznél, aspiráció / félrenyelés veszélyének figyelése, hányás megfigyelése (szín, szag, mennyiség, tartalom), kiszáradás jeleinek megfigyelése, orvosi utasításra gyógyszerelés.",
    magyarazat: "A félig ülő testhelyzet a félrenyelés (aspiráció) megelőzésére szolgál. Mindig elérhető helyen legyen vesetál és nővérhívó."
  },

  {
    tetel: "1. tétel - Ápolási terv",
    tipus: "nyitott",
    kerdes: "Hányás miatti kiszáradásveszély ápolási terve?",
    valasz: "Tünet: hányás. Ápolási dg.: kiszáradás veszélye a hányás miatt. Cél: hányás megszüntetése, kiszáradás veszélyének elkerülése. Terv: ugyanazok mint hányinger / hányásnál + vénabiztosítás, infúziós terápia.",
    magyarazat: "A vénabiztosítás (branül) lehetővé teszi az iv. folyadékpótlást és gyógyszerelést anélkül, hogy a beteget minden alkalommal újra kelljen szúrni."
  },

  // =============================================================
  // ============ 2. TÉTEL - HYPERTONIA, VÉRVÉTEL, SZÍV ===========
  // =============================================================

  {
    tetel: "2. tétel - Vérvétel és szív",
    tipus: "nyitott",
    kerdes: "Mit kell felmérni hypertoniás beteg állapotfelmérésekor?",
    valasz: "Fájdalom megfigyelése (mióta, milyen jellegű, hol, erőssége, mikor jelentkezett, gyógyszer, arckifejezés, testtartás). Hányinger / hányás (összefüggésben van-e a fájdalommal, mikor, milyen időközönként, szín, szag, állag, mit evett utoljára). Milyen gyógyszereket szed a hypertoniára, rendszeresen-e? Kardinális tünetek mérése, EKG, monitorozás. Beteg nyugalomba helyezése. Orvosi utasításra vérvétel. Oxigénterápia szükség esetén, oxigénszaturáció ellenőrzése.",
    magyarazat: "Hypertonia + mellkasi panasz mindig gyanús infarktusra/anginára. A monitorozás és gyors EKG kulcsfontosságú."
  },

  {
    tetel: "2. tétel - Vérvétel és szív",
    tipus: "nyitott",
    kerdes: "Sorold fel a vérvétel eszközeit.",
    valasz: "Tálca, gumikesztyű, ágyvédelem, stranguláló gumi, tűk (különböző méretűek), vizeletes pohár, kémcsőállvány, dokumentáció (ápolási lap, lázlap), harang, vattabuci, kéz- és bőrfertőtlenítő, kémcsövek (piros, lila, kék), vizeletes cső, tűledobó, ragasztó, toll.",
    magyarazat: "A tűledobó MINDIG külön sárga éles-szúrós konténer legyen, a leszelektálás miatt és a tűsérülés megelőzésére."
  },

  {
    tetel: "2. tétel - Vérvétel és szív",
    tipus: "nyitott",
    kerdes: "Mondd el a vérvétel menetét.",
    valasz: "1) Vénakiválasztás. 2) Higiénés kézfertőtlenítés. 3) Ágyvédelem. 4) Strangulálás. 5) Bőrfertőtlenítés. 6) Zárt vérvételi rendszer összeszerelése. 7) Szúrás / mintavétel. 8) Stranguláció felengedése. 9) Tű eltávolítása. 10) Leragasztás (a beteg NE behajlított kézzel szorítsa). 11) Beteg környezetének rendbetétele. 12) Szelektív hulladékgyűjtés. 13) Dokumentálás. 14) Minta elküldése laborba. Vizelet mintavétel: középsugaras, intim mosakodás után, felcímkézve laborba. A beteg vérvétel előtt nem ehet, csak ihat.",
    magyarazat: "A behajlított könyök véraláfutást okozhat - mindig nyújtott karral és vattával nyomással kell elállítani a vérzést."
  },

  // ----- VÉRVÉTELI CSÖVEK -----

  {
    tetel: "2. tétel - Vérvétel és szív",
    tipus: "feleletvalasztos",
    kerdes: "Melyik vérvételi cső való a VÉRKÉP vizsgálatra?",
    valaszok: [
      "Piros",
      "Kék",
      "Lila",
      "Fekete"
    ],
    helyes: 2,
    magyarazat: "Lila csőbe vérkép. Piros: vércukor, vírus szerológia, tumormarker, hormonok. Kék: alvadási vizsgálat, prothrombin, D-dimer. Zöld: genetikai. Szürke: vércukor. Fekete: vérsüllyedés."
  },

  {
    tetel: "2. tétel - Vérvétel és szív",
    tipus: "feleletvalasztos",
    kerdes: "Az ALVADÁSI vizsgálatokhoz (D-dimer, prothrombin) melyik színű csövet használjuk?",
    valaszok: [
      "Lila",
      "Kék",
      "Piros",
      "Zöld"
    ],
    helyes: 1,
    magyarazat: "Kék cső → alvadás (prothrombin, D-dimer)."
  },

  {
    tetel: "2. tétel - Vérvétel és szív",
    tipus: "feleletvalasztos",
    kerdes: "Vérsüllyedés vizsgálatára melyik csövet használjuk?",
    valaszok: [
      "Szürke",
      "Fekete",
      "Zöld",
      "Lila"
    ],
    helyes: 1,
    magyarazat: "Fekete cső → vérsüllyedés (We)."
  },

  {
    tetel: "2. tétel - Vérvétel és szív",
    tipus: "nyitott",
    kerdes: "Sorold fel a vérvételi csöveket és azt, hogy melyikbe milyen vizsgálat kerül.",
    valasz: "Piros: vércukor, vírus szerológia, tumormarker vizsgálatok, hormonok. Lila: vérkép. Kék: alvadási vizsgálatok, prothrombin szint, D-dimer meghatározás. Zöld: genetikai vizsgálatok. Szürke: vércukor vizsgálatok. Fekete: vérsüllyedés.",
    magyarazat: "A színkód a kupakon a benne lévő alvadásgátló alapján különbözik. A sorrend, amelyben veszünk vért, fontos a kontamináció elkerülésére."
  },

  // ----- SZÍVENZIMEK -----

  {
    tetel: "2. tétel - Vérvétel és szív",
    tipus: "feleletvalasztos",
    kerdes: "A troponin infarktus után hány órával kezd emelkedni?",
    valaszok: [
      "Azonnal (1 órán belül)",
      "3-4 órával",
      "12-24 órával",
      "48 órával"
    ],
    helyes: 1,
    magyarazat: "A troponin 3-4 órával az infarktus után emelkedik, és 10-14 napig marad emelkedett. Az egyik legspecifikusabb szívizomkárosodás-marker."
  },

  {
    tetel: "2. tétel - Vérvétel és szív",
    tipus: "nyitott",
    kerdes: "Sorold fel a szívenzimeket és azok jelentőségét.",
    valasz: "CK (Kreatin-kináz) - CK-MB: infarktus után 3-6 órával emelkedik, 3-4 napig emelkedett. Troponin: 3-4 óra múlva emelkedik, 10-14 napig emelkedett (legspecifikusabb). GOT, GPT: májfunkciós értékek, de infarktusnál is emelkednek. LDH: emelkedett, de nem specifikus. Koleszterin, triglicerid: vérzsír (nem akut markerek, hanem kockázati).",
    magyarazat: "A troponin a leghasznosabb akut vizsgálat infarktus gyanújánál. Két mintavétel kell időben elkülönítve, hogy lássuk a dinamikát."
  },

  // ----- INSTABIL ANGINA PECTORIS -----

  {
    tetel: "2. tétel - Vérvétel és szív",
    tipus: "nyitott",
    kerdes: "Mi az instabil angina pectoris és milyen gyógyszereket alkalmazunk?",
    valasz: "Az instabil angina pectoris azt jelenti, hogy a szívizom vérellátása hirtelen romlik, általában a koszorúerek részleges elzáródása miatt. Gyógyszerek: Nitroglicerin (eseti, érrigás), Aspirin (thrombocyta aggregáció gátló), béta-1 receptor blokkoló, ACE-gátló, koleszterincsökkentő.",
    magyarazat: "Az instabil angina infarktushoz vezethet, sürgős kezelést igényel. A nitroglicerin sublingvalisan adva azonnal hat."
  },

  {
    tetel: "2. tétel - Vérvétel és szív",
    tipus: "feleletvalasztos",
    kerdes: "Az instabil angina ELSŐ vonalbeli, eseti, panaszra adott gyógyszere:",
    valaszok: [
      "Aspirin",
      "Béta-blokkoló",
      "Nitroglicerin (sublingvalisan)",
      "ACE-gátló"
    ],
    helyes: 2,
    magyarazat: "Nitroglicerin tablettát a nyelv alá helyezzük, gyors értágító hatása van → enyhíti az anginás panaszt percek alatt."
  },

  // ----- SZÍV ANATÓMIA -----

  {
    tetel: "2. tétel - Vérvétel és szív",
    tipus: "feleletvalasztos",
    kerdes: "Hány grammos az emberi szív kb.?",
    valaszok: [
      "100 g",
      "200 g",
      "300 g",
      "500 g"
    ],
    helyes: 2,
    magyarazat: "Kb. 300 grammos, ököl nagyságú, tompa kúp alakú szerv a 2 tüdő közötti gátorüregben."
  },

  {
    tetel: "2. tétel - Vérvétel és szív",
    tipus: "feleletvalasztos",
    kerdes: "Hány vena pulmonalis vezet a bal pitvarba?",
    valaszok: [
      "1",
      "2",
      "4",
      "6"
    ],
    helyes: 2,
    magyarazat: "4 db vena pulmonalis vezet a bal pitvarba (oxigéndús vér a tüdőből). A jobb pitvarba a vena cava superior, vena cava inferior és a sinus coronarius."
  },

  {
    tetel: "2. tétel - Vérvétel és szív",
    tipus: "feleletvalasztos",
    kerdes: "A bal pitvar és bal kamra között milyen billentyű található?",
    valaszok: [
      "Háromhegyű (tricuspidalis)",
      "Kéthegyű (mitralis)",
      "Aortabillentyű (semilunaris)",
      "Pulmonalis billentyű"
    ],
    helyes: 1,
    magyarazat: "Bal oldalon kéthegyű (mitralis), jobb oldalon háromhegyű (tricuspidalis) vitorlás billentyű. A semilunaris (zsebes/félhold) billentyűk a kamrákból kilépő nagyartériák kezdeténél vannak."
  },

  {
    tetel: "2. tétel - Vérvétel és szív",
    tipus: "nyitott",
    kerdes: "Mondd el a szív anatómiáját: elhelyezkedés, külső részek, rétegek, üregek, billentyűk, ki- és belépő erek.",
    valasz: "Elhelyezkedés: mellkas, 2 tüdő közötti terület (gátorüreg), elülső, alsó részen. Kb. 300 g, ökölnyi, tompa kúp alakú. Külső részei: alapi rész (basis cordis - felfelé), csúcsi rész (apex cordis - lefelé). Rétegei: szívbelhártya (endocardium), szívizomzat (myocardium), szívburok (pericardium). Üregei: 4 üreg - felső 2 a pitvar (atrium), alsó 2 a kamra (ventriculus). Köztük a szívsövény (septum cordis). Billentyűk: vitorlás billentyűk a pitvarok és kamrák között - bal oldalon kéthegyű (mitralis), jobb oldalon háromhegyű (tricuspidalis). Zsebes / félhold (semilunaris) billentyűk a kamrákból kilépő nagyartériák kezdeténél (megakadályozzák a visszaáramlást). Erek: bal kamrából aorta, jobb kamrából arteria pulmonalis. Bal pitvarba 4 vena pulmonalis, jobb pitvarba vena cava superior, vena cava inferior és sinus coronarius.",
    magyarazat: "A vér útja: jobb pitvar → tricuspidalis → jobb kamra → pulmonalis billentyű → arteria pulmonalis → tüdő → vena pulmonalis → bal pitvar → mitralis → bal kamra → aortabillentyű → aorta → test → vena cava → vissza."
  },

  // ----- 2. TÉTEL ÁPOLÁSI TERV -----

  {
    tetel: "2. tétel - Ápolási terv",
    tipus: "nyitott",
    kerdes: "Mellkasi fájdalom esetén mi az ápolási diagnózis, cél és terv?",
    valasz: "Tünet: mellkasi fájdalom. Ápolási dg.: mellkasi fájdalom. Cél: a mellkasi fájdalom csökkentése / megszüntetése. Terv: fájdalom megfigyelése, beteg pozicionálása, megfelelő hőmérséklet biztosítása, RR és pulzus ellenőrzése, orvosi utasításra gyógyszerelés (nitroglicerin).",
    magyarazat: "Mellkasi fájdalomnál mindig EKG, monitorozás, oxigénszaturáció. A nitroglicerin sublingvalisan adva enyhíti az anginás panaszt."
  },

  // =============================================================
  // ============ 3. TÉTEL - LÉGZÉS, OXIGÉN, INHALÁCIÓ ============
  // =============================================================

  {
    tetel: "3. tétel - Légzés és oxigénterápia",
    tipus: "nyitott",
    kerdes: "Légzési problémával érkező beteg állapotfelmérésének lépései?",
    valasz: "Tájékoztatás, bemutatkozás, betegazonosítás, környezet előkészítése. Nyugalomba helyezés, pozicionálás (félig ülő, 45-60°). Oxigénszaturáció mérés. Vitális paraméterek mérése (RR, P, légzés, hőmérséklet). Légzés megfigyelése: ritmus, légzésszám, mellkasi kitérés, nehézlégzés foka, segédizmok használata, telt nyaki vénák, orrszárnyi légzés. Gyógyszerek és előző leletek áttekintése. Láz mérése (mióta lázas, vett-e be csillapítót). Felső légúti fertőzés tüneteinek kérdezése. Köpet megfigyelése.",
    magyarazat: "A 45-60°-os pozíció (félig ülő) segíti a légzést azzal, hogy a rekeszizom alulról jobban elmozdul, és a tüdő nagyobb térfogatú lehet."
  },

  {
    tetel: "3. tétel - Légzés és oxigénterápia",
    tipus: "feleletvalasztos",
    kerdes: "Légzési nehézséggel küzdő beteg ideális pozíciója?",
    valaszok: [
      "Hanyatt fekvő",
      "Hason fekvő",
      "Félig ülő (45-60°)",
      "Bal oldalfekvő"
    ],
    helyes: 2,
    magyarazat: "A félig ülő pozíció (Fowler) tehermentesíti a rekeszizmot, javítja a tüdő tágulását. Súlyos esetben emelt felsőtest + lelógó lábak (ortopnoe)."
  },

  {
    tetel: "3. tétel - Légzés és oxigénterápia",
    tipus: "nyitott",
    kerdes: "Mi mindent figyelünk meg a légzésnél?",
    valasz: "Ritmus, légzésszám, mellkasi kitérés (szimmetrikus-e), nehézlégzés foka, segédizmok használata (intercostalis, scalenus, sternocleidomastoideus), telt nyaki vénák, orrszárnyi légzés.",
    magyarazat: "Az orrszárnyi légzés és segédizom-használat súlyos légzési erőfeszítést jelez. A telt nyaki vénák jobb szívfél elégtelenségre is utalhatnak."
  },

  {
    tetel: "3. tétel - Légzés és oxigénterápia",
    tipus: "nyitott",
    kerdes: "Sorold fel a felső légúti fertőzés tüneteit.",
    valasz: "Torokfájás, köhögés, orrdugulás, fejfájás, láz, sárgás-zöldes orrfolyás.",
    magyarazat: "A sárgás-zöldes orrfolyás már bakteriális felülfertőződésre utalhat. Tiszta nyák / víztiszta orrfolyás inkább vírusos."
  },

  {
    tetel: "3. tétel - Légzés és oxigénterápia",
    tipus: "nyitott",
    kerdes: "Mit figyelünk meg a köpet vizsgálatakor?",
    valasz: "Színe, szaga, állaga, mennyisége, tartalma.",
    magyarazat: "Pl. rozsdabarna köpet → pneumonia, habzó-rózsaszínű → tüdőoedema, zöldes-sárga gennyes → bakteriális, véres → tüdőembólia / TBC / tumor."
  },

  // ----- KÖPETMINTAVÉTEL -----

  {
    tetel: "3. tétel - Légzés és oxigénterápia",
    tipus: "feleletvalasztos",
    kerdes: "Mikor vesszünk köpetmintát?",
    valaszok: [
      "Reggeli első friss köpetből, étkezés előtt, szájápolás nélkül",
      "Étkezés után 1 órával, fogmosás után",
      "Délben, hörghígító belélegzése után",
      "Bármikor, amikor a betegnek köpete keletkezik"
    ],
    helyes: 0,
    magyarazat: "Reggel az első friss köpet a legjobb. Előtte nem ehet, nem ihat, nincs szájápolás (különben a szájüreg flórája is bekerülne a mintába)."
  },

  {
    tetel: "3. tétel - Légzés és oxigénterápia",
    tipus: "nyitott",
    kerdes: "Mi a köpetmintavétel célja és menete?",
    valasz: "Cél: kórokozó kimutatása → célzott antibiotikum választása. Idő: reggeli első friss köpet, előtte ne egyen, ne igyon, nincs szájápolás. W csoport (súlyos fertőzések, mint meningitis, szepszis) figyelembe vétele. Eszközök: köpőcsésze, vesetál, gumikesztyű, lázlap, ápolási lap, papírvatta, ágyvédelem. A mintát laborba vagy ÁNTSZ-be küldjük.",
    magyarazat: "Friss minta 1-2 órán belül kerüljön a laborba, különben a baktériumok megsokszorozódnak vagy elhalnak."
  },

  // ----- OXIGÉNTERÁPIA -----

  {
    tetel: "3. tétel - Légzés és oxigénterápia",
    tipus: "feleletvalasztos",
    kerdes: "Az oxigénterápia tipikus áramlási sebessége (orrkanülnél):",
    valaszok: [
      "1 l/perc",
      "4 l/perc",
      "10 l/perc",
      "20 l/perc"
    ],
    helyes: 1,
    magyarazat: "Általánosan kb. 4 liter/perc, de mindig orvosi rendelésre, a beteg szaturációja alapján állítjuk."
  },

  {
    tetel: "3. tétel - Légzés és oxigénterápia",
    tipus: "feleletvalasztos",
    kerdes: "Az oxigénpalackkal végzett oxigénterápiának mi a LEGFONTOSABB biztonsági szabálya?",
    valaszok: [
      "A beteg ne mozogjon",
      "Nyílt láng tilos a közelében",
      "Csak fekvő betegnek adható",
      "Csak nappal alkalmazható"
    ],
    helyes: 1,
    magyarazat: "Az oxigén táplálja az égést. Nyílt láng (cigi, gyertya, gáz) a közelben rendkívül veszélyes. Az olajos kéz/ruha is tűzveszélyes."
  },

  {
    tetel: "3. tétel - Légzés és oxigénterápia",
    tipus: "nyitott",
    kerdes: "Mondd el az oxigénterápia célját, eszközeit és menetét.",
    valasz: "Cél: a vér oxigénszintjének stabilizálása, a beteg állapotának javítása. Biztonság: nyílt láng tilos a közelben! Eszközök: orrkatéter / maszk, reduktor (nyomáscsökkentő), desztillált víz vagy sóoldat (párásítás), oxigénpalack, leszívó szonda (ha kell), összekötő cső, ragasztó, dokumentáció. Menete: beteg előkészítése, eszközök összeszerelése, tartály feltöltése vízzel, áramlás beállítása (általában 4 l/perc), kardiális tünetek, szaturáció és bőrszín megfigyelése. Palacknál a sorrend: először a nyomáscsökkentőt nyitjuk, utána a palackot. Záráskor fordított sorrend.",
    magyarazat: "A párásítás (desztillált víz a reduktor alatt) megelőzi a nyálkahártya kiszáradását. Hosszan adott nem párásított oxigén irritálja az orr nyálkahártyáját."
  },

  // ----- INHALÁCIÓS TERÁPIA -----

  {
    tetel: "3. tétel - Légzés és oxigénterápia",
    tipus: "nyitott",
    kerdes: "Mi az inhalációs terápia célja és módszerei?",
    valasz: "Célok: légúti tünetek (pl. nehézlégzés) csökkentése, váladékürülés elősegítése, légzőizmok erősítése, fizikai terhelhetőség javítása. Módszerek: légzőgyakorlatok (irányított ki- és belégzési technikák).",
    magyarazat: "Az inhalációs terápia nem csak gyógyszeres aerosol! Magába foglalja a légzőtornát is, ami COPD-s és műtét utáni betegeknél is fontos."
  },

  // =============================================================
  // ================== LATIN SZÓKINCS - ANATÓMIA =================
  // =============================================================

  {
    tetel: "Latin - Anatómia",
    tipus: "latin",
    latin: "Cor, cordis",
    jelentes: "szív",
    kiejtes: "kor",
    pelda: "Cor pulmonale = a tüdő miatt kialakuló szívbetegség",
    magyarazat: "Innen ered a 'cardio-' előtag (cardiologia, cardiogram, EKG)."
  },

  {
    tetel: "Latin - Anatómia",
    tipus: "latin",
    latin: "Atrium, atrii",
    jelentes: "pitvar (szív felső ürege)",
    kiejtes: "átrium",
    pelda: "Atrium dextrum = jobb pitvar, atrium sinistrum = bal pitvar",
    magyarazat: "A 'pitvar' eredetileg tornác/előcsarnok jelentésű - a vér ide jut először, mielőtt a kamrába tovább kerülne."
  },

  {
    tetel: "Latin - Anatómia",
    tipus: "latin",
    latin: "Ventriculus",
    jelentes: "kamra (szív alsó ürege); illetve gyomor (gastr.)",
    kiejtes: "ventrikulusz",
    pelda: "Ventriculus dexter = jobb kamra, ventriculus sinister = bal kamra",
    magyarazat: "Vigyázat: a gyomor latinul szintén ventriculus, de a szívben mindig 'kamra' értelemben használjuk."
  },

  {
    tetel: "Latin - Anatómia",
    tipus: "latin",
    latin: "Septum cordis",
    jelentes: "szívsövény (a két szívfelet elválasztó fal)",
    kiejtes: "szeptum kordisz",
    magyarazat: "A 'septum' általánosan sövényt jelent. Veleszületett rendellenesség lehet a septum defektus = lyuk a szívsövényben."
  },

  {
    tetel: "Latin - Anatómia",
    tipus: "latin",
    latin: "Endocardium",
    jelentes: "szívbelhártya (a szív legbelső rétege)",
    kiejtes: "endokárdium",
    pelda: "Endocarditis = szívbelhártya gyulladás",
    magyarazat: "Endo- = belső, cardium = szív. A három szívréteg legbelseje, ami a vérrel közvetlenül érintkezik."
  },

  {
    tetel: "Latin - Anatómia",
    tipus: "latin",
    latin: "Myocardium",
    jelentes: "szívizomzat",
    kiejtes: "miokárdium",
    pelda: "Myocardialis infarctus = szívizominfarktus",
    magyarazat: "Myo- = izom. A szív középső, vastag rétege - ez végzi a tényleges pumpáló munkát."
  },

  {
    tetel: "Latin - Anatómia",
    tipus: "latin",
    latin: "Pericardium",
    jelentes: "szívburok (a szívet körülvevő tasak)",
    kiejtes: "perikárdium",
    pelda: "Pericarditis = szívburokgyulladás",
    magyarazat: "Peri- = körül. Két lemeze van, közötte kis mennyiségű savós folyadék csökkenti a súrlódást."
  },

  {
    tetel: "Latin - Anatómia",
    tipus: "latin",
    latin: "Apex cordis",
    jelentes: "szívcsúcs (a szív hegye, lefelé mutat)",
    kiejtes: "ápex kordisz",
    magyarazat: "Az apex cordis az 5. bordaköz magasságában tapintható ütések helye - itt hallgatjuk a mitralis billentyűt."
  },

  {
    tetel: "Latin - Anatómia",
    tipus: "latin",
    latin: "Basis cordis",
    jelentes: "szívalap (felső, hátsó része a szívnek)",
    kiejtes: "bázisz kordisz",
    magyarazat: "Itt lépnek be és ki a nagy erek (aorta, art. pulmonalis, vena cavae, vena pulmonales)."
  },

  {
    tetel: "Latin - Anatómia",
    tipus: "latin",
    latin: "Valva mitralis",
    jelentes: "kéthegyű (vitorlás) billentyű - bal pitvar és kamra között",
    kiejtes: "valva mitrálisz",
    pelda: "Mitralis insufficientia = mitralis billentyű elégtelenség",
    magyarazat: "Onnan kapta a nevét, hogy a püspöki süvegre (mitra) emlékeztet."
  },

  {
    tetel: "Latin - Anatómia",
    tipus: "latin",
    latin: "Valva tricuspidalis",
    jelentes: "háromhegyű billentyű - jobb pitvar és kamra között",
    kiejtes: "valva trikuszpidálisz",
    magyarazat: "Tri- = három, cuspis = hegy. Három vitorlája van."
  },

  {
    tetel: "Latin - Anatómia",
    tipus: "latin",
    latin: "Aorta",
    jelentes: "fő ütőér, a bal kamrából indul",
    kiejtes: "aorta",
    pelda: "Aorta ascendens, arcus aortae, aorta descendens",
    magyarazat: "A test legnagyobb artériája. A bal kamrából indul, először felfelé (ascendens), majd ívet alkot (arcus), végül lefelé halad (descendens)."
  },

  {
    tetel: "Latin - Anatómia",
    tipus: "latin",
    latin: "Arteria pulmonalis",
    jelentes: "tüdőartéria (jobb kamrából a tüdőbe)",
    kiejtes: "artéria pulmonálisz",
    magyarazat: "Kivétel: ez az egyetlen artéria, ami oxigénszegény vért szállít (a tüdőbe oxigenizálásra)."
  },

  {
    tetel: "Latin - Anatómia",
    tipus: "latin",
    latin: "Vena pulmonalis",
    jelentes: "tüdővéna (a tüdőből a bal pitvarba)",
    kiejtes: "véna pulmonálisz",
    magyarazat: "Kivétel: ez az egyetlen véna, ami oxigéndús vért szállít. 4 db van belőle, mind a bal pitvarba ömlik."
  },

  {
    tetel: "Latin - Anatómia",
    tipus: "latin",
    latin: "Vena cava superior / inferior",
    jelentes: "felső / alsó üreges véna (a jobb pitvarba)",
    kiejtes: "véna káva szupérior / inferior",
    magyarazat: "A test két legnagyobb vénája, mindkettő a jobb pitvarba ömlik. A vena cava superior a felsőtest, az inferior az alsótest vérét gyűjti össze."
  },

  // =============================================================
  // ================ LATIN SZÓKINCS - BETEGSÉGEK =================
  // =============================================================

  {
    tetel: "Latin - Betegségek és állapotok",
    tipus: "latin",
    latin: "Pulmo, pulmonis",
    jelentes: "tüdő",
    kiejtes: "pulmó",
    pelda: "Pulmonalis = tüdőhöz tartozó (pl. arteria pulmonalis)",
    magyarazat: "A 'pulmonológia' = tüdőgyógyászat."
  },

  {
    tetel: "Latin - Betegségek és állapotok",
    tipus: "latin",
    latin: "Hepar, hepatis",
    jelentes: "máj",
    kiejtes: "hepar",
    pelda: "Hepatitis = májgyulladás, hepatocita = májsejt",
    magyarazat: "A 'hepato-' előtag a májra utal."
  },

  {
    tetel: "Latin - Betegségek és állapotok",
    tipus: "latin",
    latin: "Ileus",
    jelentes: "bélelzáródás",
    kiejtes: "íleusz",
    pelda: "Paralyticus ileus = renyhe bélelzáródás (lebénult perisztaltika)",
    magyarazat: "Görög eredetű (eileos = csavarodott). A görög 'ileum' szóval (csípőcsont, csípőtáj) gyakran összekeverik."
  },

  {
    tetel: "Latin - Betegségek és állapotok",
    tipus: "latin",
    latin: "Cyanosis",
    jelentes: "kékes elszíneződés (oxigénhiány miatt)",
    kiejtes: "cianózisz",
    pelda: "Centrális vs. perifériás cyanosis",
    magyarazat: "A redukált hemoglobin színe miatt látszik kéknek a bőr/nyálkahártya. Ajak, nyelv, körömágy a tipikus helyek."
  },

  {
    tetel: "Latin - Betegségek és állapotok",
    tipus: "latin",
    latin: "Oedema",
    jelentes: "vizenyő (folyadékgyülem a szövetekben)",
    kiejtes: "ödéma",
    pelda: "Tüdőoedema, alsó végtagi oedema",
    magyarazat: "Görög eredetű (oidema = duzzanat). Az ujjbenyomatos oedema (pitting) jellegzetes a szívelégtelenségnél."
  },

  {
    tetel: "Latin - Betegségek és állapotok",
    tipus: "latin",
    latin: "Ascites",
    jelentes: "hasvíz (folyadékgyülem a hasüregben)",
    kiejtes: "aszcitesz",
    magyarazat: "Jellegzetes a jobb szívfél elégtelenségnél, májcirrhosisnál, és bizonyos rosszindulatú daganatoknál."
  },

  {
    tetel: "Latin - Betegségek és állapotok",
    tipus: "latin",
    latin: "Angina pectoris",
    jelentes: "mellkasi szorító fájdalom (szívizom oxigénhiánya miatt)",
    kiejtes: "angína pektorisz",
    pelda: "Stabil vs. instabil angina pectoris",
    magyarazat: "Angere = szorítani, pectus = mellkas. Tipikus tünet: bal karba vagy állba sugárzó nyomó-szorító mellkasi fájdalom."
  },

  // =============================================================
  // ================ LATIN SZÓKINCS - TOLDALÉKOK =================
  // =============================================================

  {
    tetel: "Latin - Toldalékok",
    tipus: "latin",
    latin: "-itis",
    jelentes: "gyulladás",
    pelda: "Gastritis = gyomorgyulladás, bronchitis = hörgőgyulladás, hepatitis = májgyulladás",
    magyarazat: "Mindig a szervet jelölő szóhoz kapcsolódik. Pl. nephr (vese) + itis = nephritis = vesegyulladás."
  },

  {
    tetel: "Latin - Toldalékok",
    tipus: "latin",
    latin: "-ectomia",
    jelentes: "(szerv) eltávolítása, kimetszése",
    kiejtes: "-ektómia",
    pelda: "Appendectomia = vakbél eltávolítása, mastectomia = emlő eltávolítása",
    magyarazat: "Hasonló: -tomia = bemetszés, -stomia = mesterséges szájadék (pl. tracheostomia)."
  },

  {
    tetel: "Latin - Toldalékok",
    tipus: "latin",
    latin: "-algia",
    jelentes: "fájdalom",
    kiejtes: "-álgia",
    pelda: "Neuralgia = idegfájdalom, myalgia = izomfájdalom, gastralgia = gyomorfájás",
    magyarazat: "A görög 'algos' = fájdalom szóból."
  },

  {
    tetel: "Latin - Toldalékok",
    tipus: "latin",
    latin: "-oma",
    jelentes: "daganat",
    pelda: "Carcinoma = rákos daganat, lipoma = zsírszöveti jóindulatú daganat, hematoma = véraláfutás",
    magyarazat: "Önmagában nem mond el rosszindulatúságot, de a 'carcinoma' és 'sarcoma' már igen."
  },

  // =============================================================
  // ================ LATIN SZÓKINCS - KIFEJEZÉSEK ================
  // =============================================================

  {
    tetel: "Latin - Kifejezések",
    tipus: "latin",
    latin: "Per os (p.o.)",
    jelentes: "szájon át (gyógyszerelés módja)",
    kiejtes: "per ósz",
    pelda: "Tabletta p.o. = szájon át bevéve",
    magyarazat: "Más utak: i.v. = intravenás, i.m. = intramuscularis (izomba), s.c. = subcutan (bőr alá)."
  },

  {
    tetel: "Latin - Kifejezések",
    tipus: "latin",
    latin: "Sub lingua (s.l.)",
    jelentes: "nyelv alá",
    kiejtes: "szub lingva",
    pelda: "Nitroglicerin s.l. anginás rohamnál",
    magyarazat: "A nyálkahártyán keresztül gyors felszívódás (nem megy át a májon először), ezért gyors hatás."
  },

  {
    tetel: "Latin - Kifejezések",
    tipus: "latin",
    latin: "Intravenosus (i.v.)",
    jelentes: "vénásan, vénába adva",
    kiejtes: "intravénózus",
    pelda: "Infúzió i.v., gyógyszer i.v. bólusban",
    magyarazat: "Gyors hatás, 100% biohasznosulás. Branüllel adjuk leggyakrabban."
  },

  {
    tetel: "Latin - Kifejezések",
    tipus: "latin",
    latin: "Subcutan (s.c.)",
    jelentes: "bőr alá, a zsírszövetbe",
    kiejtes: "szubkután",
    pelda: "Inzulin s.c., heparin s.c.",
    magyarazat: "Lassabb felszívódás, mint i.v.-nál. Tipikus helyek: hasfal, comb, felkar külső oldala."
  },

  {
    tetel: "Latin - Kifejezések",
    tipus: "latin",
    latin: "Nasogastricus szonda",
    jelentes: "orron át a gyomorba vezetett szonda",
    kiejtes: "nazogasztrikus",
    magyarazat: "Naso = orr, gastricus = gyomri. Táplálásra, gyomortartalom leszívásra használjuk."
  },

  // =============================================================
  // ============ ELSŐSEGÉLY ÉS ÚJRAÉLESZTÉS =====================
  // =============================================================

  {
    tetel: "Elsősegély és újraélesztés",
    tipus: "nyitott",
    kerdes: "Mik az elsősegélynyújtó feladatai kültakaró marómérgezés esetén?",
    valasz: "Mentők értesítése, sze. biztonságos környezet kialakítása, szennyezett ruházat eltávolítása, szennyezett testfelület óvatos folyóvizes lemosása, sebkörnyék felitatása száraz gézlappal, steril fedőkötés a sérült testrészre, folyóvizes öblítés a szemhéjak nyitva tartásával, a sérült nyugalomba helyezése, felvilágosítása, megnyugtatása, a sérült folyamatos megfigyelése a mentők érkezéséig.",
    magyarazat: "A maró anyag eltávolítása a legfontosabb! Bő folyóvizes öblítés. Soha ne használj semlegesítő szert, mert a reakcióhő tovább rongálja a szövetet."
  },

  {
    tetel: "Elsősegély és újraélesztés",
    tipus: "feleletvalasztos",
    kerdes: "Újraélesztéskor a kompresszió - befúvás aránya:",
    valaszok: ["15:1", "15:2", "30:2", "30:5"],
    helyes: 2,
    magyarazat: "Felnőttnél 30 mellkasi kompresszió : 2 lélegeztető befúvás. Csecsemőnél és gyermeknél hasonlóan, kétmentős változatban 15:2."
  },

  {
    tetel: "Elsősegély és újraélesztés",
    tipus: "feleletvalasztos",
    kerdes: "Újraélesztéskor a légzés vizsgálatára hány másodperc áll rendelkezésünkre?",
    valaszok: ["3 másodperc", "5 másodperc", "10 másodperc", "30 másodperc"],
    helyes: 2,
    magyarazat: "Maximum 10 másodperc - hallás-látás-érzés módszerrel. Ha ez után sincs normális légzés, kezdjük el a CPR-t."
  },

  {
    tetel: "Elsősegély és újraélesztés",
    tipus: "feleletvalasztos",
    kerdes: "Mellkasi kompressziók ideális frekvenciája:",
    valaszok: ["60-80 / perc", "100-120 / perc", "150-180 / perc", "200 / perc"],
    helyes: 1,
    magyarazat: "Kb. 100-120 / perc - ez a 'Stayin' Alive' tempója."
  },

  {
    tetel: "Elsősegély és újraélesztés",
    tipus: "feleletvalasztos",
    kerdes: "A szervezetben fellépő oxigénhiányt mely sejtek viselik el legkevésbé?",
    valaszok: ["Bőr sejtjei", "Izomsejtek", "Agysejtek", "Csontsejtek"],
    helyes: 2,
    magyarazat: "Az agysejtek - 4-6 perc oxigénhiány után már visszafordíthatatlan károsodás keletkezik."
  },

  // =============================================================
  // ============ LÉGÚTBIZTOSÍTÁS, GÉPI LÉLEGEZTETÉS =============
  // =============================================================

  {
    tetel: "Légútbiztosítás és lélegeztetés",
    tipus: "nyitott",
    kerdes: "Mik a non-invazív gépi lélegeztetés előnyei és hátrányai?",
    valasz: "Előnyei: fiziológiás funkció megtartása, orr- és gégefunkció megtartása, mechanikai szövődmények elkerülése. Hátrányai: aspiráció veszélye, a váladék eltávolítás nehéz, limitált pozitív nyomás.",
    magyarazat: "Non-invazív lélegeztetésnél a beteg saját légzését támogatjuk maszkkal, intubáció nélkül. Akkor választjuk, ha a beteg együttműködő és nincs súlyos váladékprobléma."
  },

  {
    tetel: "Légútbiztosítás és lélegeztetés",
    tipus: "nyitott",
    kerdes: "Mi a különbség az asszisztált és kontrollált lélegeztetés között?",
    valasz: "Asszisztált: a beteg spontán légzésének támogatása, a spontán légzés mellé a beállított módon támogatja a légzést. Kontrollált: a betegnek nincs spontán légzése, a gép irányítja a légzést volumenében és frekvenciájában is.",
    magyarazat: "Asszisztált → segítjük a beteg meglévő légzését. Kontrollált → teljesen átveszi a gép, mert a beteg nem tud lélegezni (pl. narcosis, kúrare hatása alatt)."
  },

  {
    tetel: "Légútbiztosítás és lélegeztetés",
    tipus: "feleletvalasztos",
    kerdes: "Melyik légútbiztosítási módszer biztosít TELJES aspiráció-védelmet?",
    valaszok: [
      "Oropharyngealis tubus",
      "Nasopharyngealis tubus",
      "Laryngealis maszk",
      "Endotrachealis tubus"
    ],
    helyes: 3,
    magyarazat: "Csak az endotrachealis tubus zárja le teljesen a légcsövet (mandzsettával), így megakadályozza az aspirációt."
  },

  {
    tetel: "Légútbiztosítás és lélegeztetés",
    tipus: "nyitott",
    kerdes: "Mit jelentenek a következő rövidítések: CVP, MAP, pCO2, SpO2, ETCO2?",
    valasz: "CVP: centrális vénás nyomás. MAP: artériás középnyomás. pCO2: parciális széndioxid-nyomás. SpO2: perifériás oxigén szaturáció. ETCO2: kilégzésvégi széndioxid-nyomás.",
    magyarazat: "Ezek a kritikus betegellátás alap monitorozási paraméterei."
  },

  {
    tetel: "Légútbiztosítás és lélegeztetés",
    tipus: "nyitott",
    kerdes: "Mit jelent: NIBP, FiO2, PEEP, ICP, BE?",
    valasz: "NIBP: vértelen artériás vérnyomás. FiO2: a belégzett gáz oxigén koncentrációja. PEEP: pozitív kilégzésvégi nyomás. ICP: koponyaűri nyomás. BE: bázisfelesleg.",
    magyarazat: "PEEP a gépi lélegeztetésnél fontos: kilégzéskor pozitív nyomás marad, ami megakadályozza az alveolusok összeesését."
  },

  {
    tetel: "Légútbiztosítás és lélegeztetés",
    tipus: "feleletvalasztos",
    kerdes: "A CO (szénmonoxid) hányszor jobban kötődik a hemoglobinhoz, mint az oxigén?",
    valaszok: ["3-szor", "30-szor", "300-szor", "3000-szer"],
    helyes: 2,
    magyarazat: "300-szor erősebben kötődik. Ezért olyan veszélyes a CO mérgezés - a hemoglobin nem tudja az oxigént szállítani, miközben a beteg pír színű marad."
  },

  // =============================================================
  // ============ PULZOXIMETRIA, LÉGZÉSI FOGALMAK ================
  // =============================================================

  {
    tetel: "Légzéselemzés és vizsgálatok",
    tipus: "nyitott",
    kerdes: "Mi a pulzoximetriás vizsgálat lényege?",
    valasz: "Alkalmazásának célja az oxigén-szaturáció mérése. Az oxihemoglobin és a redukált hemoglobin fényelnyelésének különbségén alapul. Rossz perifériás keringés esetén pontatlan eredményt mutat. Az eszköz megfelelő érzékelővel a fülcimpára is felhelyezhető. Az oxigénterápia hatékonyságának követésére is alkalmas.",
    magyarazat: "Korlátai: rossz perifériás keringés, hideg végtag, körömlakk, súlyos anémia → pontatlan érték. CO mérgezésnél hamis magas értéket mutathat."
  },

  {
    tetel: "Légzéselemzés és vizsgálatok",
    tipus: "nyitott",
    kerdes: "Mit jelent a vér oxigén-szaturációja?",
    valasz: "A vér oxigén-szaturációja (telítettsége) azt fejezi ki, hogy a teljes hemoglobin mennyiség hány százaléka van oxihemoglobin (HgO2) formájában.",
    magyarazat: "Normálérték: 95-100%. 90% alatt már hipoxiás, 88% alatt oxigénterápia szükséges."
  },

  {
    tetel: "Légzéselemzés és vizsgálatok",
    tipus: "nyitott",
    kerdes: "Mi a diffúzió a légzéselmélet szerint?",
    valasz: "Az oxigén és a szén-dioxid kicserélődése az alveoláris tér és a tüdőkapillárisok, illetve a nagyvérköri kapillárisok és a sejtek között.",
    magyarazat: "A diffúzió mindig a magasabb koncentrációjú hely felől az alacsonyabb felé történik."
  },

  {
    tetel: "Légzéselemzés és vizsgálatok",
    tipus: "latin",
    latin: "Anatómiai holttér",
    jelentes: "az a levegő mennyiség, amely a légutak azon részében van, ahol nem történik gázcsere",
    magyarazat: "Kb. 150 ml a felnőtt emberben. Ide tartozik a felső légutak, légcső, hörgők. Ezek vezetik a levegőt, de nem cserélnek gázt."
  },

  {
    tetel: "Légzéselemzés és vizsgálatok",
    tipus: "latin",
    latin: "Vitálkapacitás",
    jelentes: "a maximális belégzést követő maximális kilégzéssel kifújható gázkeverék mennyisége",
    magyarazat: "Felnőtt férfinál kb. 4-5 liter. Csökken pl. tüdőfibrózisban, izomgyengeségben, mellkasdeformitásokban."
  },

  {
    tetel: "Légzéselemzés és vizsgálatok",
    tipus: "latin",
    latin: "Atelectasia",
    jelentes: "a tüdő elégtelen telődése",
    kiejtes: "atelektázia",
    magyarazat: "Lehet kompressziós (kívülről nyomják), obstrukciós (belül elzáródott a hörgő), vagy kontrakciós (heg miatt összezsugorodás)."
  },

  // =============================================================
  // ============ PULMONÁLIS EMBÓLIA ===========================
  // =============================================================

  {
    tetel: "Pulmonális embolia",
    tipus: "nyitott",
    kerdes: "Sorold fel a pulmonális embóliára utaló tüneteket! (legalább 5)",
    valasz: "Cianózis, nehézlégzés, vérköpés, köhögés, mellkasi fájdalom (légvételre, mozgásra fokozódik), tachycardia.",
    magyarazat: "A klasszikus triász: nehézlégzés + mellkasi fájdalom + vérköpés. De gyakran csak egy-két tünet látszik. Hirtelen kialakulás jellemző."
  },

  {
    tetel: "Pulmonális embolia",
    tipus: "nyitott",
    kerdes: "Pulmonális embólia gyanúja esetén milyen ápolói teendőket kell elvégezni? (6 db)",
    valasz: "Szigorú ágynyugalom / félülő helyzet biztosítása, vitális paraméterek észlelése, 12 elvezetéses EKG készítése, oxigén adagolása, perifériás véna biztosítása, orvos értesítése, reanimációs eszközök előkészítése, beteg pszichés megnyugtatása.",
    magyarazat: "A SZIGORÚ ágynyugalom kritikus - ha a beteg felkel és mozog, újabb embolus indulhat el a vénás trombusból."
  },

  {
    tetel: "Pulmonális embolia",
    tipus: "nyitott",
    kerdes: "Milyen diagnosztikai lehetőségek vannak pulmonális embólia gyanújánál? (5)",
    valasz: "Fizikális vizsgálat, 12 elvezetéses EKG, SpO2 mérés, laboratóriumi vizsgálat (D-dimer), CT angiográfia.",
    magyarazat: "A D-dimer érzékeny, de nem specifikus marker. A CT angiográfia (CTPA) az aranystandard diagnózishoz."
  },

  {
    tetel: "Pulmonális embolia",
    tipus: "nyitott",
    kerdes: "Pulmonális embolia esetén fogalmazz meg 5 aktuális ápolási diagnózist!",
    valasz: "Mellkasi fájdalom a szöveti perfúzió zavara miatt. Halálfélelem a fájdalom és nehézlégzés miatt. Nyugtalanság és zavartság az elégtelen légzés (oxigén ellátás) miatt. Önellátás zavara az elesettség, gyengeség és ágyhoz kötöttség miatt. Félelem a terápiás és diagnosztikus beavatkozástól.",
    magyarazat: "A halálfélelem nem 'gyengeség' - reális szubjektív érzés súlyos hipoxiánál. Mindig komolyan kell venni és pszichés támogatást nyújtani."
  },

  // =============================================================
  // ============ SOKK FORMÁI ===================================
  // =============================================================

  {
    tetel: "Sokk típusai",
    tipus: "nyitott",
    kerdes: "Sorold fel a vasodilatatiós (értágulattal járó) sokk lehetséges okait!",
    valasz: "Gerincvelői harántlézió, szepszis, anaphylaxia, hypovolaemia, exsiccosis (kiszáradás).",
    magyarazat: "A vasodilatatió → értágulat → vérnyomás esés. Tipikusan meleg, piros bőr a kezdeti fázisban (különösen szepszisnél)."
  },

  {
    tetel: "Sokk típusai",
    tipus: "nyitott",
    kerdes: "Sorold fel a vasoconstrictiós (érösszehúzódással járó) sokk okait!",
    valasz: "Nagy vénák és artériák elzáródása, kardiogén sokk, pulmonalis embolia, aortaaneurysma, pericardialis tamponád.",
    magyarazat: "Ezekben a kompenzáló mechanizmus érösszehúzódás - hideg, sápadt bőr, gyengült periféria."
  },

  {
    tetel: "Sokk típusai",
    tipus: "feleletvalasztos",
    kerdes: "Az anaphylaxiás sokk milyen formába tartozik?",
    valaszok: [
      "Vasoconstrictiós",
      "Vasodilatatiós",
      "Pszichogén",
      "Egyik sem"
    ],
    helyes: 1,
    magyarazat: "Anafilaxiánál masszív értágulat van + permeabilitás növekedés (extravazáció). Ezért vasodilatatiós."
  },

  // =============================================================
  // ============ VÉNÁS, ARTÉRIÁS KANÜLÁLÁS ====================
  // =============================================================

  {
    tetel: "Vénás kanülálás és infúzió",
    tipus: "nyitott",
    kerdes: "Mi a különbség a perifériás véna kanül és az artériás kanül kezelésében?",
    valasz: "Perifériás véna kanül: a beavatkozáshoz NEM szükséges steril gumikesztyű, a végtagot strangulálni kell, kék színű csap, vér / vérkészítmény adható rajta. Artériás kanül: STERIL gumikesztyű kell, NEM kell strangulálni, Allen-teszt javasolt előtte, piros csap, gyógyszerbeadás TILOS, invazív vérnyomásmérésre alkalmas, vérvételre is használható.",
    magyarazat: "Az Allen-teszt ellenőrzi, hogy a kéz keringése biztosított-e a másik kéz arteriáján is, ha az artéria ideiglenesen elzáródna."
  },

  {
    tetel: "Vénás kanülálás és infúzió",
    tipus: "nyitott",
    kerdes: "Sorolj fel centrális és perifériás vénákat!",
    valasz: "Centrális: vena femoralis, vena jugularis interna, vena subclavia. Perifériás: vena cephalica, vena mediana antebrachii, vena jugularis externa, vena saphena magna, vena basilica.",
    magyarazat: "Centrális véna = közvetlenül szívhez vezető nagy véna. Itt nyomásmérés is lehetséges (CVP)."
  },

  {
    tetel: "Vénás kanülálás és infúzió",
    tipus: "nyitott",
    kerdes: "Sorold fel az infúzió bejuttatásának módjait! (3)",
    valasz: "Perifériás rövid kanülön keresztül, szárnyas tűn keresztül, midline (középutas) katéteren keresztül, centrális vénás katéteren keresztül, beültetett porton keresztül.",
    magyarazat: "Tartós kezelésnél (pl. kemoterápia) port-a-cath-et használnak: a bőr alá ültetett kamra, ami egyszer beszúrható tűvel elérhető."
  },

  {
    tetel: "Vénás kanülálás és infúzió",
    tipus: "nyitott",
    kerdes: "Számold ki: 2100 ml infúzió 14 óra alatt, 20 csepp/ml készlet. Hány csepp/perc?",
    valasz: "2100 ml ÷ 14 óra = 150 ml/óra. 150 ml × 20 csepp/ml = 3000 csepp/óra. 3000 ÷ 60 perc = 50 csepp/perc.",
    magyarazat: "Általános képlet: (térfogat ml × cseppszám/ml) ÷ (idő perc) = csepp/perc. 50 csepp/perc."
  },

  {
    tetel: "Vénás kanülálás és infúzió",
    tipus: "nyitott",
    kerdes: "Mik a perifériás vénakanülálás szövődményei? (6)",
    valasz: "Vénafal sérülése, artériába vezetett kanül, artéria sérülése a vénapunkció során, haematoma a sérült érből kiáramló vér miatt, a kanül megtörése / nem megfelelő pozicionálása, a kanül átjárhatóságának csökkenése vagy megszűnése, trombophlebitis.",
    magyarazat: "A trombophlebitis a kanül helyén lévő véna gyulladása + alvadékos elzáródás → fájdalom, melegség, bőrpír."
  },

  // =============================================================
  // ============ VÉNÁS / ARTÉRIÁS KERINGÉSI ELÉGTELENSÉG =======
  // =============================================================

  {
    tetel: "Keringési elégtelenség",
    tipus: "nyitott",
    kerdes: "Hasonlítsd össze a vénás és artériás keringési elégtelenséget (bőrszín, hőmérséklet, pulzus, ödéma, bőrelváltozás).",
    valasz: "Vénás: bőrszín normális vagy cianotikus, normál hőmérséklet, normál pulzus, gyakran kifejezett ödéma, bokák körül barnás elszíneződés. Artériás: sápadt bőr, hűvös tapintat, gyengült és könnyen elnyomható pulzus, nincs ödéma, vékony fényes bőr.",
    magyarazat: "Vénás → 'megduzzad, sötétlik'. Artériás → 'kihal, sápadt'. Az 5 P jellemzi az artériás elzáródást: pain, pallor, pulselessness, paresthesia, paralysis."
  },

  {
    tetel: "Keringési elégtelenség",
    tipus: "nyitott",
    kerdes: "Mi a különbség a felületes és mélyvénás trombophlebitis tüneteiben?",
    valasz: "Felületes: sötétkék véna, bőrpír a véna felett és mellett, nyomásérzékenység, esetleg spontán fájdalom, kemény köteges véna, subferbilitás. Mélyvénás: feszes fénylő bőr, ödéma, körfogatkülönbség, mozgáskor érzékenység, mélyben fájdalmas köteg, mérsékelt láz, enyhe tachicardia, leukocitozis.",
    magyarazat: "Mélyvénás trombózis életveszélyes lehet (tüdőembólia)! A láb körfogatkülönbség mérése egyszerű és informatív."
  },

  // =============================================================
  // ============ VOLUMENPÓTLÁS, PARENTERALIS TÁPLÁLÁS ==========
  // =============================================================

  {
    tetel: "Volumenpótlás és parenteralis táplálás",
    tipus: "nyitott",
    kerdes: "Mik a makromolekuláris (kolloidális) volumenpótszerek jellemzői? (4)",
    valasz: "Molekulanagyságuk meghaladja az érpálya áteresztő képességét. Volumennövelő hatással rendelkeznek. A szöveti keringést javítják. Az ozmotikus aktivitásuk a részecskeszámtól függ. 'Plazmaexpanderek' (kolloid ozmotikus nyomásuknál fogva vizet vonnak el az interstitiumból, így az intravazális volumennövelő hatásuk nagyobb, mint a beadott mennyiség).",
    magyarazat: "Példa: dextrán, HES (hydroxyetil-keményítő), zselatinkészítmények."
  },

  {
    tetel: "Volumenpótlás és parenteralis táplálás",
    tipus: "feleletvalasztos",
    kerdes: "A Voluven és a Haes-steril melyik csoportba tartozik?",
    valaszok: [
      "Dextránkészítmények",
      "Hydroxyetil-keményítő készítmények (HES)",
      "Zselatinkészítmények",
      "Krisztalloid oldat"
    ],
    helyes: 1,
    magyarazat: "HES = hydroxyetil-keményítő. Példák: Isohes, Expahes, Haes-steril, Voluven, Elohast."
  },

  {
    tetel: "Volumenpótlás és parenteralis táplálás",
    tipus: "nyitott",
    kerdes: "Sorold fel a parenteralis táplálás előtti és utáni ellenőrzési szempontokat! (6)",
    valasz: "Beteg általános állapota, vérnyomás, pulzus, hőmérséklet, vércukorszint, ürített folyadék mennyisége, kanül megfelelő működése, infúziós pumpa működése.",
    magyarazat: "A vércukor monitorozása különösen fontos parenteralis tápláláskor, mert a glükóz koncentrált oldatban van."
  },

  {
    tetel: "Volumenpótlás és parenteralis táplálás",
    tipus: "nyitott",
    kerdes: "Mik a parenteralis táplálás lehetséges szövődményei? (8)",
    valasz: "Kanülelzáródás, légembólia, sav-bázis egyensúly zavara, véralvadási zavar, alultáplálás, túltáplálás, glükózháztartás zavara, paravazális szövetek közé kerülő tápoldat, nehézlégzés, megnövekedett vénás nyomás.",
    magyarazat: "A légembólia akkor lép fel, ha a centrális kanül levegőt szív be (pl. nyitott szerelék, mély belégzéskor). Megelőzés: Trendelenburg helyzet behelyezéskor."
  },

  {
    tetel: "Volumenpótlás és parenteralis táplálás",
    tipus: "nyitott",
    kerdes: "Mit jelent: isovolaemia, isoionia, isosmosis, isohydria?",
    valasz: "Isovolaemia: a vízterek állandó térfogata. Isoionia: a vízterek állandó kémiai összetétele. Isosmosis: a vízterek állandó ozmotikus nyomása. Isohydria: a vízterek állandó hidrogénion-koncentrációja (pH).",
    magyarazat: "Ez a 4 állandóság a homeosztázis alapja a folyadékháztartásban."
  },

  {
    tetel: "Volumenpótlás és parenteralis táplálás",
    tipus: "nyitott",
    kerdes: "Milyen folyadék-elektrolitháztartás zavart okoz a láz és fokozott verejtékezés?",
    valasz: "Hipertóniás dehidráció - a vízhiány jelentősebb, mint a sóhiány.",
    magyarazat: "Lázas, izzadó betegnél hipertóniás (vízhiányos) dehidráció - tiszta vizet kell pótolni elsősorban, nem konyhasós oldatot."
  },

  // =============================================================
  // ============ ENDOKRIN RENDSZER, HORMONOK ==================
  // =============================================================

  {
    tetel: "Endokrin rendszer",
    tipus: "nyitott",
    kerdes: "Mely szerv termeli az alábbi hormonokat: adrenalin, inzulin, szomatotrop hormon, tiroxin, aldoszteron, parathormon?",
    valasz: "Adrenalin: mellékvese-velőállomány. Inzulin: hasnyálmirigy. Szomatotrop hormon (STH): hipofízis elülső lebeny. Tiroxin: pajzsmirigy. Aldoszteron: mellékvese kéregállomány. Parathormon: mellékpajzsmirigy.",
    magyarazat: "A hipofízis a 'karmester' - a többi mirigy munkáját irányítja a TSH, ACTH, FSH, LH stb. hormonok kibocsátásával."
  },

  {
    tetel: "Endokrin rendszer",
    tipus: "feleletvalasztos",
    kerdes: "Melyik betegségnek tipikus tünete: magas vércukor, magas vérnyomás, striák, holdvilágarc, elhízás?",
    valaszok: [
      "Cushing-szindróma",
      "Addison-kór",
      "Diabetes insipidus",
      "Acromegalia"
    ],
    helyes: 0,
    magyarazat: "Cushing-szindróma = kortizol túltermelés. Tipikus: holdvilágarc, törzsi elhízás, vékony végtagok, striák, magas vércukor és vérnyomás."
  },

  {
    tetel: "Endokrin rendszer",
    tipus: "feleletvalasztos",
    kerdes: "A diabetes insipidus oka:",
    valaszok: [
      "Inzulin hiánya",
      "ADH (antidiuretikus hormon) hiánya",
      "Tiroxin túltermelés",
      "Kortizol hiánya"
    ],
    helyes: 1,
    magyarazat: "Diabetes insipidus = ADH hiány → a vesék nem tartják vissza a vizet → hatalmas vizeletmennyiség (akár 20 liter/nap), súlyos szomjúság."
  },

  {
    tetel: "Endokrin rendszer",
    tipus: "nyitott",
    kerdes: "Sorold fel a diabetes insipidus klinikai tüneteit! (6)",
    valasz: "Gyakori, éjszakai vizeletürítés, polyuria (4-20 l/nap), polydypsia (fokozott szomjúság), alacsony vizelet ozmolaritás (vizelet fajsúly < 1005), fogyás, fejfájás, gyermekkorban száraz vékony bőr, dehidráció.",
    magyarazat: "Differenciáldiagnózis a cukros DM-mel: a DI vizeletében nincs cukor, fajsúlya nagyon alacsony, ozmolaritása alacsony."
  },

  {
    tetel: "Endokrin rendszer",
    tipus: "nyitott",
    kerdes: "Sorold fel a hyperthyreosis (pajzsmirigy túlműködés) tüneteit! (10)",
    valasz: "Izgatottság, ingerlékenység, hangulati ingadozások, álmatlanság, tachycardia, extrasystole, exophtalmus (szem előretüremkedés), pajzsmirigy-megnagyobbodás, jó étvágy mellett fogyás, hypertonia, hőemelkedés / láz, hasmenés, T3 és T4-szint növekedése, meleg nyirkos kipirult bőr.",
    magyarazat: "Tipikus 'pörgő' beteg: gyors anyagcsere, gyors szív, fogyás. Ellentéte a hypothyreosis: lassú, fázós, súlygyarapodás."
  },

  {
    tetel: "Endokrin rendszer",
    tipus: "nyitott",
    kerdes: "Mik a tartós szteroidterápia mellékhatásai? (legalább 10)",
    valasz: "Ulcerogen hatás, vércukorszint emelkedés, szérumkalcium-szint csökkenés, osteoporosis, izomgyengeség, szérumkálium csökkenés, szérumnátrium emelkedés, hypertonia, hirsutismus (szőrösödés), gynaecomastia és heresorvadás férfiaknál, holdvilágarc, cushingoid elhízás, bőrvékonyodás striák, glaukóma, sebgyógyulási és növekedési zavar, fokozott fertőzési hajlam, szteroidpszichózis, mellékvesekéreg működésének visszaszorítása.",
    magyarazat: "Ezért szteroidot mindig fokozatosan csökkentve hagyják el (taper) - a hirtelen leállítás Addison-krízist okozhat."
  },

  // =============================================================
  // ============ DIABETES MELLITUS ============================
  // =============================================================

  {
    tetel: "Diabetes mellitus",
    tipus: "nyitott",
    kerdes: "Mi jellemzi az I. típusú diabetes mellitust?",
    valasz: "β-sejtek száma kevesebb, mint 10%. Ketosisra való hajlam kifejezett. Inzulinterápia feltétlenül szükséges. Autoantitestek mutathatók ki a vérből. Vérinzulin-szint alacsony vagy teljesen hiányzik. Az inzulin termelés csökkent vagy megszűnt. Tipikusan fiatalkorban kezdődik.",
    magyarazat: "I-es típus = autoimmun pusztulás. A beteg élethossziglan inzulinfüggő."
  },

  {
    tetel: "Diabetes mellitus",
    tipus: "nyitott",
    kerdes: "Mi jellemzi a II. típusú diabetes mellitust?",
    valasz: "Inzulinrezisztencia / relatív inzulinhiány. Kialakulása lassú. Normál testsúly vagy obesitas. Gyakoribb az előfordulása felnőttkorban. Inzulinterápia nem minden esetben szükséges (orális antidiabetikumok elegendőek lehetnek).",
    magyarazat: "II-es típus = a sejtek nem érzékenyek az inzulinra. Életmód-változás (fogyás, mozgás) néha visszafordítja."
  },

  {
    tetel: "Diabetes mellitus",
    tipus: "feleletvalasztos",
    kerdes: "Hyperglikémiás kóma JELLEMZŐ tünete:",
    valaszok: [
      "Sápadt arcszín, hűvös nyirkos bőr",
      "Piros/cianotikus arcszín, meleg száraz bőr, aceton szagú lehelet",
      "Görcsök, hirtelen kialakulás",
      "Telt pulzus"
    ],
    helyes: 1,
    magyarazat: "Hiperglikémia: piros, cianotikus arc, meleg száraz bőr, Kussmaul-légzés, könnyen elnyomható pulzus, ACETON SZAGÚ lehelet, lassan fejlődik. Az aceton-szag a ketózis jele."
  },

  {
    tetel: "Diabetes mellitus",
    tipus: "feleletvalasztos",
    kerdes: "Hipoglikémiás kóma JELLEMZŐ tünete:",
    valaszok: [
      "Aceton szagú lehelet",
      "Sápadt arcszín, hűvös nyirkos bőr, telt pulzus, görcsök, hirtelen kialakulás",
      "Kussmaul-légzés",
      "Magas vércukor érték"
    ],
    helyes: 1,
    magyarazat: "Hipoglikémia: SÁPADT, HŰVÖS-NYIRKOS bőr, telt pulzus, hirtelen idegrendszeri tünetek (remegés, izzadás, görcs). Mindig nézz vércukrot zavart betegnél!"
  },

  {
    tetel: "Diabetes mellitus",
    tipus: "nyitott",
    kerdes: "Készíts összehasonlítást: hypoglikémia vs. hyperglikémia tünetei.",
    valasz: "Hypo: alacsony vércukor, sápadt nyirkos bőr, éhségérzet és remegés van, telt pulzus, normál légzés, normál lehelet, görcsök felléphetnek, hirtelen kialakulás. Hyper: magas vércukor, kipirult száraz bőr, nincs éhségérzet, gyakori hányás és hasi fájdalom, könnyen elnyomható pulzus, Kussmaul-légzés, aceton szagú lehelet, lassan fejlődik, sok cukros és acetonos vizelet.",
    magyarazat: "Vészhelyzetben: cukoradás (száj v. iv.) ártalmatlan a hypernek, de életmentő a hypónak. Ha kétséges, adj cukrot."
  },

  {
    tetel: "Diabetes mellitus",
    tipus: "nyitott",
    kerdes: "Mik okozzák a hypoglikémiát?",
    valasz: "Inzulin túladagolás, tolerancia növekedése inzulin kezelés hatására, inzulin beadás után nem fogyaszt kellő mennyiségű szénhidrátot, fizikai munka hatására.",
    magyarazat: "A 'beadtam az inzulint, de nem ettem meg' a tipikus klinikai történet."
  },

  {
    tetel: "Diabetes mellitus",
    tipus: "nyitott",
    kerdes: "Mi a bázisinzulin-igényt NÖVELŐ és CSÖKKENTŐ tényezők?",
    valasz: "Növelő: hízás, inaktivitás, menstruációs ciklus, lázas betegségek, hidegfront, terhesség, stressz. Csökkentő: fogyás, mozgás, melegfront.",
    magyarazat: "Ezért nyári hőhullámban gyakran kell csökkenteni az inzulinadagot, télen növelni."
  },

  {
    tetel: "Diabetes mellitus",
    tipus: "nyitott",
    kerdes: "Mik a diabeteses láb szindróma prevenciós lehetőségei? (5)",
    valasz: "Megfelelő lábhigiéné, bőrápolás. Pamut zokni viselése. Kényelmes cipő viselése. Speciális cipő (felírható receptre). Gyógypedikűr igénybevétele. A legkisebb sérülés/elváltozás esetén azonnali orvoshoz fordulás.",
    magyarazat: "A diabeteses neuropathia miatt a beteg nem érzi a fájdalmat, így észrevétlenül sebet kap, ami amputációhoz vezethet."
  },

  {
    tetel: "Diabetes mellitus",
    tipus: "nyitott",
    kerdes: "Sorolj fel 10 oktatási irányelvet diabetes mellitusban szenvedő beteg számára!",
    valasz: "1) A diabetes önellátásának irányítása, 2) diéta, zsírok módosítása, 3) testedzés, 4) gyógyszer/inzulin beadás, 5) vércukor-ellenőrzés, 6) lábápolás, 7) betegségek kezelése, 8) hypoglikaemia felismerése és kezelése, 9) hyperglikaemia felismerése és kezelése, 10) fertőzések felismerése és kezelése, 11) szövődmények megelőzése és felismerése.",
    magyarazat: "A betegoktatás kulcs - a diabetes 90%-ban önellátáson alapul. A jól oktatott beteg sokkal kevesebbszer kerül kórházba."
  },

  // =============================================================
  // ============ HEMATOLÓGIA, VÉRCSOPORT ======================
  // =============================================================

  {
    tetel: "Hematológia és transzfúzió",
    tipus: "nyitott",
    kerdes: "A Landsteiner-szabály alapján mi a vércsoport-antitest kombináció?",
    valasz: "A vércsoport: A antigén, anti-B antitest. B vércsoport: B antigén, anti-A antitest. 0 vércsoport: nincs antigén, anti-A és anti-B antitest. AB vércsoport: A és B antigén, nincs antitest.",
    magyarazat: "Az AB az 'univerzális RECIPIENS', a 0 az 'univerzális DONOR' (vörösvértest tekintetében)."
  },

  {
    tetel: "Hematológia és transzfúzió",
    tipus: "nyitott",
    kerdes: "Sorolj fel 5 vörösvérsejt vércsoportrendszert!",
    valasz: "AB0, Rh, Kell, Duffy, Kidd, Lewis.",
    magyarazat: "A klinikailag legfontosabb az AB0 és Rh, de transzfúziónál akár ezek is fontossá válhatnak."
  },

  {
    tetel: "Hematológia és transzfúzió",
    tipus: "nyitott",
    kerdes: "Mit jelent: CMV, HLA, Htk, Ig, EBV?",
    valasz: "CMV: cytomegalovirus. HLA: humán leukocyta-antigén. Htk: hematokrit. Ig: immunglobulin. EBV: Epstein-Barr-vírus.",
    magyarazat: "HLA - a szervátültetésnél kell egyezni a donor és recipiens között. Ig - vannak osztályai: IgA, IgG, IgM stb."
  },

  {
    tetel: "Hematológia és transzfúzió",
    tipus: "nyitott",
    kerdes: "Mikor minősül vér vagy vérkészítmény ALKALMATLANNAK beadásra? (10)",
    valasz: "Nem megfelelő szállítási vagy tárolási körülmények, sérült csomagolás, bontott készítmény, sérült vérzsák vagy csőszakaszok, lejárt készítmény, nem megfelelő vagy nem egyező címke- és jelentőlap-adatok, alvadékos készítmény, hemolízis gyanúja, biológiai próba során észlelt korai súlyos transzfúziós szövődmények, inkompatibilitásra utaló tünetek.",
    magyarazat: "A biológiai próba: kis mennyiségű (kb. 25 ml) vér gyors infúziója, majd 5 perc megfigyelés - ha tünet jelentkezik, leállítás."
  },

  {
    tetel: "Hematológia és transzfúzió",
    tipus: "nyitott",
    kerdes: "Mik az autotranszfúzió előnyei? (3)",
    valasz: "Kisebb a transzfúzióval átvihető fertőzések kockázata. Csökken a transzfúziós szövődmények kockázata. Csökken a homológ vérfelhasználás. Kiküszöbölhető az alloimmunizáció.",
    magyarazat: "Autotranszfúzió = a beteg saját vérét használjuk (előre levett vagy intraoperatív gyűjtött). Tervezett műtéteknél hasznos."
  },

  {
    tetel: "Hematológia és transzfúzió",
    tipus: "nyitott",
    kerdes: "Mik az antikoaguláns terápia mellékhatásaira utaló tünetek? (8)",
    valasz: "Fogínyvérzés, orrvérzés, véres köpet, véres vizelet, véres vagy fekete (Weber pozitív) széklet, kávézaccszerű hányás, elhúzódó vagy nagy mennyiségű menstruáció, sérülést követő elhúzódó vérzés, sclera bevérzése.",
    magyarazat: "Mindezek a túlzott véralvadásgátlás jelei - INR kontrolljánál módosítani kell az adagot."
  },

  // =============================================================
  // ============ ANÉMIA TÍPUSAI ===============================
  // =============================================================

  {
    tetel: "Anémia típusai",
    tipus: "nyitott",
    kerdes: "Hogyan jellemezhető a vashiányos anémia és okai?",
    valasz: "Microcytás anémia jellemzi, a vörösvértestek hemoglobin tartalmának csökkenése jellemzi. Okai: csökkent bevitel (csecsemő, vegetáriánus), vasigény növekedése (terhesség, szoptatás, növekedés), vasvesztése (vérzés, műtéti beavatkozás, gyakori vérvétel), felszívódási zavar (gyomor-bélműtétek, csökkent sósavtermelés).",
    magyarazat: "A vashiány a leggyakoribb anémia. Tünet: fáradékonyság, sápadtság, kanálköröm, glossitis."
  },

  {
    tetel: "Anémia típusai",
    tipus: "nyitott",
    kerdes: "Mi a vészes vérszegénység (Biermer) jellemzője és kezelése?",
    valasz: "Terápiája B12-vitamin pótlásán alapul. Nagy magvú, sérülékeny, normálisnál nagyobb vörösvértestek képzése jellemzi (megaloblasztos anémia).",
    magyarazat: "B12 hiány gyomorrezekció után, vegán étrend mellett, autoimmun gastritisben (intrinsic faktor hiánya). Idegrendszeri tüneteket is okoz."
  },

  {
    tetel: "Anémia típusai",
    tipus: "feleletvalasztos",
    kerdes: "Aplasztikus anémia jellemzője:",
    valaszok: [
      "Microcytás vörösvérsejtek",
      "Láz, gyakori fertőzések, vérzékenység; minden sejtféleség csökkent a perifériás vérképben",
      "Macrocytás vörösvértestek, B12-hiány",
      "Megrövidült vörösvértest élettartam"
    ],
    helyes: 1,
    magyarazat: "Aplasztikus anémia = csontvelő-elégtelenség. NEMcsak a vörösvérsejt, hanem mindhárom sejtsor csökkent (pancitopenia). Súlyos, életveszélyes."
  },

  // =============================================================
  // ============ HEPATITIS ====================================
  // =============================================================

  {
    tetel: "Hepatitis",
    tipus: "nyitott",
    kerdes: "Jellemezd a Hepatitis A fertőzést (lappangási idő, terjedés, tünetek, megelőzés).",
    valasz: "Lappangási idő: 2-6 hét (15-45 nap). Terjedés: széklet, illetve széklettel szennyezett kéz és élelmiszer útján (fekál-orális). Tünetek: láz, étvágytalanság, gyengeség, hányinger, hányás, hasi fájdalom (jobb felső), sötét vizelet, világos széklet, sárgaság. Megelőzés: alapvető higiénés szabályok betartása, veszélyeztetettek aktív védőoltása.",
    magyarazat: "A Hepatitis A nem krónikussá, általában teljes gyógyulás. Rossz higiénés körülmények között járványokban fordul elő."
  },

  {
    tetel: "Hepatitis",
    tipus: "nyitott",
    kerdes: "Mi a különbség Hepatitis A, B és C között?",
    valasz: "Hepatitis A: lappangás 15-45 nap, fekál-orális terjedés, akut, jó prognózis. Hepatitis B: lappangás 30-180 nap, parenteralis (vér, testnedvek, szexuális), elhúzódó lefolyás, krónikussá válhat. Hepatitis C: relatíve gyakoribb a krónikussá válás, a poszttranszfúziós hepatitis fő oka.",
    magyarazat: "B-re és C-re fokozott figyelem az egészségügyi dolgozóknál - tűsérülés veszélye."
  },

  // =============================================================
  // ============ VIZELETÜRÍTÉS, VESÉK =========================
  // =============================================================

  {
    tetel: "Vizeletürítés és vesék",
    tipus: "nyitott",
    kerdes: "Mi az alábbi fogalmak jelentése: diuresis, polyuria, anuria, retentio urinae, ischuria paradoxa, incontinentia urinae, oliguria?",
    valasz: "Diuresis: vizeletkiválasztás (egészségesen napi 800-1500 ml). Polyuria: 24 óra alatt > 2000 ml vizelet. Anuria: vizeletkiválasztás szünetelése. Retentio urinae: a vese kiválasztja a vizeletet, ürítése azonban gátolt. Ischuria paradoxa: fokozott belső nyomás miatt kevés vizelet ürül vagy csepeg, de a hólyag telt marad. Incontinentia urinae: vizelet visszatartásának képtelensége. Oliguria: 24 óra alatt < 500 ml vizelet.",
    magyarazat: "Anuria + oliguria = veseelégtelenség jele. Polyuria → DM, DI, diuretikumok."
  },

  {
    tetel: "Vizeletürítés és vesék",
    tipus: "nyitott",
    kerdes: "Mit mutat ki a Benedikt-, Lugol-, Donne- és Rothera-próba?",
    valasz: "Benedikt-próba: vizelet-cukor. Lugol-próba: vizelet-bilirubin. Donne-próba: vizelet-genny. Rothera-próba: vizelet-aceton.",
    magyarazat: "Ma már a tesztcsíkok egyszerre mérik. De az eljárás nevét tudni kell."
  },

  {
    tetel: "Vizeletürítés és vesék",
    tipus: "nyitott",
    kerdes: "Csoportosítsd az anuria okait (praerenalis, renalis, postrenalis).",
    valasz: "Praerenalis: hypotonia, sokk, kardiogén sokk, vérvesztés. Renalis: glomerulonephritis, tubulusok károsodása, ischaemiás tubulus. Postrenalis: vesekő, hólyagdaganat, prostatahypertrophia.",
    magyarazat: "Praerenalis = a vese előtt baj van (keringés). Renalis = a vesében. Postrenalis = a vese után (elfolyási akadály)."
  },

  {
    tetel: "Vizeletürítés és vesék",
    tipus: "nyitott",
    kerdes: "Sorold fel a renalis ödéma típusos megjelenési helyeit! (5)",
    valasz: "Szem környéke, arc, kézhát, has, vádli, herezacskó.",
    magyarazat: "A vesés ödéma jellemzően reggel az arcon legkifejezettebb (laza kötőszövet)."
  },

  {
    tetel: "Vizeletürítés és vesék",
    tipus: "nyitott",
    kerdes: "Mik a suprapubicus katéterezés előnyei? (3)",
    valasz: "Ritkábban okoz húgyúti fertőzést. A beteg normál módon is képes vizelni, elzárt katéter mellett. Kényelmesebb viselni fennjáráskor. A beteg könnyebben tudja kezelni.",
    magyarazat: "Hosszú távú vizeleti levezetésnél a suprapubicus jobb, mint a transurethralis (kevesebb fertőzés)."
  },

  {
    tetel: "Vizeletürítés és vesék",
    tipus: "nyitott",
    kerdes: "Mik az incontinentia formái és jellemzőik?",
    valasz: "Terheléses (stressz): fizikai terhelés (köhögés, tüsszentés, emelés) hatására. Késztetéses: fizikai aktivitástól független, sürgető nem elnyomható vizelési inger. Reflex: neurológiai sérülés miatt automata hólyag - bizonyos térfogat elérésekor reflexesen kiürül. Túlfolyásos: vizeletáramlási akadály miatt (pl. prosztata) cseppekben távozik a vizelet a telt hólyagból. Kevert: stresszes + késztetéses kombináció.",
    magyarazat: "A típus határozza meg a kezelést: stressz → medencefenék-torna, sebészet. Késztetéses → hólyagtréning, gyógyszer."
  },

  {
    tetel: "Vizeletürítés és vesék",
    tipus: "nyitott",
    kerdes: "Mik az időskori élettani változások, amik incontinentiára hajlamosítanak? (4)",
    valasz: "Romló keringés (szív- és érrendszeri változások), a vese koncentrálóképességének csökkenése, a húgyhólyag kapacitásának csökkenése, izomzat (különösen medenceizomzat) tónusának csökkenése, kismedence megváltozott anatómiája (atrofia, prosztatamegnagyobbodás, hyperplasia).",
    magyarazat: "Az incontinentia nem 'normális' időskorral - kezelhető állapot."
  },

  // =============================================================
  // ============ EMÉSZTÉS, ILEUS, BÉLBETEGSÉGEK ===============
  // =============================================================

  {
    tetel: "Emésztőrendszer és ileus",
    tipus: "nyitott",
    kerdes: "Sorold fel a vastagbél szakaszait latinul!",
    valasz: "Cecum (vakbél), colon ascendens, colon transversum, colon descendens, colon sigmoideum, rectum.",
    magyarazat: "Coecum = vakbél (alul jobbra). A colon a 'pál' formát alkotja. A rectum a végbél. Az appendix a coecum nyúlványa."
  },

  {
    tetel: "Emésztőrendszer és ileus",
    tipus: "nyitott",
    kerdes: "Mik a székletürítést befolyásoló tényezők?",
    valasz: "Életkor, táplálkozás, napirend, terhesség, folyadékfelvétel, testi aktivitás, egyéni szokások, esetleges fájdalom, stressz.",
    magyarazat: "Mindezek befolyásolják a perisztaltikát, így a székletürítést."
  },

  {
    tetel: "Emésztőrendszer és ileus",
    tipus: "nyitott",
    kerdes: "Párosítsd: strangulatios, obstructios, spasticus, paralyticus ileus okai.",
    valasz: "Strangulatios: a bél lefűződése, csavarodása, betüremkedése. Obstructios: korábbi műtét okozta adhesio, megtöretés, idegentest, bélsárpangás, stenosis, epekő, daganatok. Spasticus: a bél izomzatának tartós összehúzódása (pl. ólom- vagy nikotinmérgezés). Paralyticus: a bélfal simaizomzatának tartós, ernyedt állapota (peritonitis, akut pancreatitis, reflexes úton epe-vesekő colica okozza).",
    magyarazat: "Strangulatio = mechanikus külső lefűződés. Obstrukció = belső szűkület. Spasticus = görcs. Paralyticus = bénulás."
  },

  {
    tetel: "Emésztőrendszer és ileus",
    tipus: "feleletvalasztos",
    kerdes: "A paralyticus ileus jellemzője:",
    valaszok: [
      "Csengő bélhangok",
      "Néma has",
      "Hasmenés (diarrhoea)",
      "Szabad hasűri levegő"
    ],
    helyes: 1,
    magyarazat: "Paralyticus = bénult bél. Néma has (nincs perisztaltika hang). A 'csengő' (élénk) bélhang inkább obstrukciós ileusra utal."
  },

  {
    tetel: "Emésztőrendszer és ileus",
    tipus: "nyitott",
    kerdes: "Mit jelez a beteg székletének elváltozása az alábbi esetekben: epeút-elzáródás, gyomorvérzés, vastartalmú gyógyszer, colitis ulcerosa, végbéldaganat?",
    valasz: "Epeút-elzáródás: acholiás (világos, vajsárga) széklet. Gyomorvérzés: melaena (fekete, kátrányszerű). Vastartalmú gyógyszer: sötétebb színű széklet. Colitis ulcerosa: nyákos, véres széklet. Végbéldaganat: véres, ceruza-vékony széklet.",
    magyarazat: "A széklet színe és formája diagnosztikus. A 'ceruzaszéklet' = elszűkült végbél = alarm tünet."
  },

  // =============================================================
  // ============ DAGANATOK ====================================
  // =============================================================

  {
    tetel: "Daganatok",
    tipus: "nyitott",
    kerdes: "Mi a különbség a jó- és rosszindulatú daganatok között?",
    valasz: "Jóindulatú: lassan növekednek, sejtjeik hasonlítanak a kiinduló szövet sejtjeihez, a környező szövetektől elhatárolódnak. Rosszindulatú: sejtjei atípusosak, a környező szöveteket roncsolják, áttétet (metasztázist) képeznek.",
    magyarazat: "Jóindulatú = papilloma, adenoma, fibroma, lipoma. Rosszindulatú = adenocarcinoma, sarcoma, osteosarcoma, liposarcoma."
  },

  {
    tetel: "Daganatok",
    tipus: "nyitott",
    kerdes: "Sorolj fel gasztroenterológiai praecancerosus állapotokat! (4)",
    valasz: "Colitis ulcerosa. Polypusok (gyomor, colon). Helicobacter pylori infekció. Reflux talaján kialakuló Barrett-oesophagus. Hosszú ideje fennálló 'néma' epehólyag-kövesség és társuló epehólyag-gyulladás.",
    magyarazat: "Praecancerosus = előrákos állapot. Ezek megfelelő kezelésével/követésével megelőzhető a daganat kialakulása."
  },

  // =============================================================
  // ============ DIÉTA, TÁPLÁLKOZÁS ===========================
  // =============================================================

  {
    tetel: "Diéta és táplálkozás",
    tipus: "nyitott",
    kerdes: "Mik a colitis ulcerosa étrendi javaslatai?",
    valasz: "Folyékony étrend (akut stádiumban), kevés emészthetetlen anyag, energiadús, vitamindús étrend.",
    magyarazat: "Aktív flerénél folyékony - a bél nyugalmát biztosítva. Remisszióban diverzifikálható."
  },

  {
    tetel: "Diéta és táplálkozás",
    tipus: "nyitott",
    kerdes: "Mik a myocardialis infarctus utáni étrendi szabályok?",
    valasz: "Alkohol, kávé, tea kerülendő. Zsír- és nátriumszegény étrend.",
    magyarazat: "A só visszatartja a folyadékot → szívmegterhelés. A koffein és alkohol pedig ingerli a szívet (ritmuszavar)."
  },

  {
    tetel: "Diéta és táplálkozás",
    tipus: "nyitott",
    kerdes: "Sorold fel a diéták felosztását tápanyagtartalom szerint!",
    valasz: "Normál alapétrend, energiagazdag, energiaszegény, fehérjegazdag, fehérjeszegény, zsírszegény, szénhidrátgazdag, cukorbetegek étrendje, elektrolitszabályozó étrend.",
    magyarazat: "Minden diéta egyéni: a beteg betegsége, súlya, anyagcseréje alapján."
  },

  {
    tetel: "Diéta és táplálkozás",
    tipus: "nyitott",
    kerdes: "Mik az enteralis szondatáplálás szövődményei?",
    valasz: "Hasmenés a túl gyors adagolás, tápszer nagy ozmolaritása, magas zsírtartalma, túl hideg tápszer, vagy alacsony ozmolaritású tápszer miatt. Hányás, hasi fájdalom (pl. tápszer rossz íze, alacsony ozmolaritás miatt). Hasi görcsök. Bakteriális fertőzés helytelen előkészítés miatt. Nyelőcső felmaródás. Gyomorretenció túl nagy adagok beadása miatt. Obstipáció a laktózintolerancia miatt.",
    magyarazat: "Lassú, fokozatos bevezetés, szobahőmérsékletű tápszer, infúziós pumpa - mindezek csökkentik a szövődmény-rizikót."
  },

  {
    tetel: "Diéta és táplálkozás",
    tipus: "nyitott",
    kerdes: "Mi a malnutritio, marasmus, cachexia, fehérje-energia malnutritio definiciója?",
    valasz: "Malnutritio: hiányos táplálkozás, egy vagy több lényeges tápanyag relatív vagy abszolút hiányának, esetleg iatrogén feleslegének következménye. Fehérje-energia malnutritio: krónikus inadekvát fehérje- és energiabevitel vagy megnövekedett igény → fehérje- és zsírraktárak lebontása. Iatrogén fehérje-energia malnutritio: kórházi kezelés által előidézett alultápláltság. Cachexia: gyulladásos folyamat következtében kialakuló kóros izomtömeg- és testsúlyvesztés. Marasmus: gyermekeknél idült kalória- és fehérjehiány.",
    magyarazat: "Cachexia tipikusan rákbetegségben, krónikus szívelégtelenségben, COPD-ben."
  },

  {
    tetel: "Diéta és táplálkozás",
    tipus: "nyitott",
    kerdes: "Mely tápanyagok felszívódása csökken a duodenum, jejunum, ileum hiányában?",
    valasz: "Duodenum: vas, kalcium, D-vitamin, magnézium. Jejunum: monoszacharidok, aminosavak, vízben oldódó vitaminok, zsírok. Ileum: zsírban oldódó vitaminok, víz, B12-vitamin, só.",
    magyarazat: "Ileumrezekció után életveszélyes B12-hiány alakulhat ki - életre szóló pótlás kell."
  },

  // =============================================================
  // ============ SZONDÁK, DRÉN, SEB ===========================
  // =============================================================

  {
    tetel: "Szondák, drének, sebek",
    tipus: "nyitott",
    kerdes: "Párosítsd a szondatípusokat: jejunostoma, nasoduodenalis, nasogastricus, PEG, gastrostoma, orogastricus.",
    valasz: "Jejunostoma: sebészi úton, a has bőrén át a szondát a gyomorba és jejunumba vezetik. Nasoduodenalis: orron át a duodenumba. Nasogastricus: orron keresztül a gyomorba. PEG (percutan endoscopos gastrostoma): endoszkóppal helyezett sztómaeszköz. Gastrostoma: sebészi úton, a has bőrén át a szondát a gyomorba. Orogastricus: szájon át a gyomorba.",
    magyarazat: "PEG = hosszú távú tápláláshoz a leggyakoribb. Gyors beavatkozás endoszkópban."
  },

  {
    tetel: "Szondák, drének, sebek",
    tipus: "nyitott",
    kerdes: "Milyen jelek figyelmeztetnek a drénes beteg lehetséges szövődményeire? (5)",
    valasz: "Drénrendszer megtöretése (nem áramlik a váladék). Drénrendszer eltömeszelődése. Drénrendszer eresztése a csatlakozási pontoknál. Váladékgyűjtő tartály túl gyors telődése (nagy mennyiségű, élénkvörös váladék = aktív vérzés!). Gyulladás jelei (bőrpír, duzzanat, fájdalom, fvs-emelkedés, láz, gennyképződés). Fájdalom jelentkezése a drénrendszer mozgatására.",
    magyarazat: "Az élénkvörös váladék gyors telődése = sürgős értesítés és sebészi felülvizsgálat!"
  },

  {
    tetel: "Szondák, drének, sebek",
    tipus: "nyitott",
    kerdes: "Párosítsd a sebtípusokat jellemzőikkel: nekrotikus, fertőzött, sarjadzó, hámosodó.",
    valasz: "Nekrotikus seb: fekete színű száraz vagy enyhén nedves elhalt szövet. Fertőzött seb: sárgás gennyes, elhalt sejteket és fibrint tartalmaz. Sarjadzó seb: élénkpiros, enyhén szemcsézett, csillogó felszínű, áttetsző sebváladék. Hámosodó seb: rózsaszínű, sebszélek felől benövő, enyhén nedvedző.",
    magyarazat: "A seb állapota határozza meg a kezelést. Nekrotikus → debridement. Fertőzött → antibakteriális. Sarjadzó/hámosodó → óvni, nem sterilizálni."
  },

  {
    tetel: "Szondák, drének, sebek",
    tipus: "nyitott",
    kerdes: "Hol alakulhat ki decubitus háton fekvő és oldalt fekvő betegnél?",
    valasz: "Háton fekvő betegnél: keresztcsonti tájék, lapocka, könyök, sarok, tarkó. Oldalt fekvő betegnél: fül, térd, csípőtaréj, boka.",
    magyarazat: "A nyomáspontok mindegyike kockázatos. Forgatás, párnázás, párnák használata - alapfeladat."
  },

  {
    tetel: "Szondák, drének, sebek",
    tipus: "nyitott",
    kerdes: "Mik a decubitus stádiumai?",
    valasz: "I. stádium: tartós bőrpír a nyomásnak kitett helyeken, elvékonyodott sérülékeny fájdalmas bőr, tartósan meleg vizenyős terület. II. stádium: hám és irha is sérült, fájdalmas, de még jól kezelhető. III. stádium: szövetelhalás, felszíne lehet száraz vagy nedves és lepedékes, érzéketlen, fájdalmatlan terület. IV. stádium: csontszövetek láthatóvá válnak, mély sipolyok, osteomyelitis kialakulása.",
    magyarazat: "A I. stádium még visszafordítható - ezért fontos a megelőzés és korai felismerés!"
  },

  {
    tetel: "Szondák, drének, sebek",
    tipus: "nyitott",
    kerdes: "Sorold fel a nyomási fekély (decubitus) hajlamosító tényezőit! (7)",
    valasz: "Tartós immobilitás, túlsúly, alultápláltság, érszűkület, tartós öntudatlan állapot, cukorbetegség, ápolási hiba, eszméletlenség.",
    magyarazat: "A Norton-skála ezek alapján méri fel a kockázatot. Magas pontszám → megelőzési protokoll."
  },

  {
    tetel: "Szondák, drének, sebek",
    tipus: "nyitott",
    kerdes: "Sorold fel a sebgyógyulást befolyásoló tényezőket! (8)",
    valasz: "Kor, táplálkozás, testsúly / elhízás, seb kiterjedése, oxigénellátás, dohányzás, immunrendszer állapota, cukorbetegség, besugárzás, seb megterhelése.",
    magyarazat: "A dohányzás akár 50%-kal is csökkentheti a sebgyógyulás sebességét."
  },

  // =============================================================
  // ============ HULLADÉK, GYULLADÁS, LÁZ =====================
  // =============================================================

  {
    tetel: "Hulladékkezelés, gyulladás, láz",
    tipus: "nyitott",
    kerdes: "Csoportosítsd a kórházi hulladékokat: települési, veszélyes, fertőző hulladék.",
    valasz: "Települési: papírhulladék, ételmaradék. Veszélyes: veszélyes anyagokat tartalmazó vegyszerek, citosztatikus gyógyszerek, fogászati amalgám. Különleges kezelést igénylő (fertőző) veszélyes: váladékkal szennyezett kötszerek, vérrel szennyezett injekciós tűk, használt gyógyszeres ampullák.",
    magyarazat: "Fontos: éles-szúrós veszélyes (tűk) MINDIG külön sárga konténerbe! Tűledobót sosem nyitjuk ki."
  },

  {
    tetel: "Hulladékkezelés, gyulladás, láz",
    tipus: "nyitott",
    kerdes: "Mik a serosus gyulladás jellemzői?",
    valasz: "A gyulladás helyén az erek fala áteresztővé válik. A képződő izzadmány híg, majdnem átlátszó, színtelen. Az izzadmány fehérjeszegény (alig különbözik a transsudatumtól). A nyálkahártyákat érintő formáját hurutnak nevezzük. Többnyire jóindulatú szöveti elváltozás, az izzadmány hamar felszívódik.",
    magyarazat: "Serosus = víztiszta. Pl. nátha kezdetén víztiszta orrváladék."
  },

  {
    tetel: "Hulladékkezelés, gyulladás, láz",
    tipus: "nyitott",
    kerdes: "Sorold fel a láztípusokat magyarul és latinul!",
    valasz: "Állandó láz - febris continua: tartósan 38°C felett, ingadozás < 1°C. Ingadozó láz - febris remittens: ingadozás > 1°C, de láztalanságot nem éri el. Ugráló (intermittáló) láz - febris intermittens: ingadozás > 1°C, testhő 37°C alá is csökken. Visszatérő láz - febris recurrens: napokig tartó lázas és láztalan állapotok ismétlődése. Váltóláz - febris undulans: szabályos 24 órán túli intervallumban váltakozó lázas és láztalan szakaszok.",
    magyarazat: "A láztípus jellegzetes lehet bizonyos betegségekre (pl. malária = febris intermittens; brucellózis = undulans)."
  },

  {
    tetel: "Hulladékkezelés, gyulladás, láz",
    tipus: "nyitott",
    kerdes: "Milyen ápolási teendők vannak lázas betegnél?",
    valasz: "Beteg ágynyugalomba helyezése. Láz csillapítás haladéktalan megkezdése (fizikális, gyógyszeres, kombinált). Testhőmérséklet monitorozása. Folyadék- és elektrolitpótlás. Sikeres lázcsillapítás után fehérnemű és ágynemű cseréje, higiénés szükségletek biztosítása. Diéta (vitamin-, fehérje-, kalóriadús, könnyen emészthető). Szükség esetén oxigénterápia. Hőpangás megelőzése. Kardinális tünetek dokumentálása.",
    magyarazat: "A láz fontos kompenzáló mechanizmus. Csak akkor csökkentjük, ha kifejezetten zavaró vagy veszélyesen magas (40°C felett)."
  },

  // =============================================================
  // ============ IDEGRENDSZER LATIN, FOGALMAK =================
  // =============================================================

  {
    tetel: "Idegrendszer",
    tipus: "latin",
    latin: "Cerebrum",
    jelentes: "nagyagy",
    kiejtes: "cerebrum",
    pelda: "Cortex cerebri = agykéreg",
    magyarazat: "Két agyfélteke (hemispherium cerebri) - bal és jobb."
  },

  {
    tetel: "Idegrendszer",
    tipus: "latin",
    latin: "Cerebellum",
    jelentes: "kisagy",
    kiejtes: "cerebellum",
    magyarazat: "A koordináció, egyensúly és finommozgások központja. Sérülésekor ataxia (összerendezetlen mozgás)."
  },

  {
    tetel: "Idegrendszer",
    tipus: "latin",
    latin: "Truncus cerebri",
    jelentes: "agytörzs",
    kiejtes: "trunkusz cerebri",
    magyarazat: "Tartalmazza a középagyat, hidat, nyúltvelőt. A létfontosságú központok (légzés, keringés) itt vannak."
  },

  {
    tetel: "Idegrendszer",
    tipus: "latin",
    latin: "Medulla oblongata",
    jelentes: "nyúltvelő",
    kiejtes: "medulla oblongáta",
    magyarazat: "Itt van a légzőközpont, vasomotoros központ, hányásközpont. Sérülése halálos."
  },

  {
    tetel: "Idegrendszer",
    tipus: "latin",
    latin: "Diencephalon",
    jelentes: "köztiagy (talamusz, hipotalamusz tartozik ide)",
    kiejtes: "dienkefalon",
    magyarazat: "A talamusz: érző pályák relé-állomása. A hipotalamusz: autonóm idegrendszer és endokrin szabályozás központja."
  },

  {
    tetel: "Idegrendszer",
    tipus: "latin",
    latin: "Hypophysis",
    jelentes: "agyalapi mirigy",
    kiejtes: "hipofízis",
    magyarazat: "A 'mester-mirigy' - a többi endokrin mirigyet irányítja. A diencephalonhoz tapad."
  },

  {
    tetel: "Idegrendszer",
    tipus: "latin",
    latin: "Arachnoidea",
    jelentes: "pókhálóhártya (az agyhártyák középső rétege)",
    kiejtes: "arahnoidea",
    pelda: "Arachnoidealis vérzés (subarachnoidealis vérzés)",
    magyarazat: "Három agyhártya: dura mater (kemény), arachnoidea (pókháló), pia mater (lágy)."
  },

  {
    tetel: "Idegrendszer",
    tipus: "nyitott",
    kerdes: "Mik a liquor cerebrospinalis (agy-gerincvelői folyadék) feladatai? (3)",
    valasz: "Mechanikus védelmet nyújt a traumákkal szemben. Az intracranialis nyomásingadozások kiegyenlítése. Az idegszövet táplálása. A metabolitok eltávolítása.",
    magyarazat: "A liquor az oldalkamrákban termelődik a vérből való filtrációval. Fehérjetartalma alacsony, cukortartalma alacsony."
  },

  {
    tetel: "Idegrendszer",
    tipus: "nyitott",
    kerdes: "Hasonlítsd össze a szimpatikus és paraszimpatikus idegrendszer hatásait (pupilla, hörgők, szívizom, koszorúserek, emésztőmirigyek).",
    valasz: "Pupilla: szimp. tágít, parasymp. szűkít. Hörgők: szimp. tágít, parasymp. szűkít. Szívizom: szimp. fokozott aktivitás, parasymp. csökkent. Koszorúserek: szimp. értágulat, parasymp. nincs. Emésztőmirigyek: szimp. érösszehúzódás (csökkent szekréció), parasymp. fokozódó szekréció.",
    magyarazat: "Szimpatikus = 'küzdj-vagy-menekülj'. Paraszimpatikus = 'pihenj-emészj'."
  },

  {
    tetel: "Idegrendszer",
    tipus: "nyitott",
    kerdes: "Sorolj fel 6 betegséget, amelyben görcsroham léphet fel!",
    valasz: "Epilepszia, agydaganat, mérgezés, meningitis, encephalitis, hypoglikaemia.",
    magyarazat: "Görcsrohamnál mindig nézzünk vércukrot - a hypoglikaemia gyorsan kezelhető!"
  },

  {
    tetel: "Idegrendszer",
    tipus: "nyitott",
    kerdes: "Adj 4 ápolási diagnózist cerebrovascularis katasztrófa (stroke) esetén!",
    valasz: "Kapcsolattartás zavara dysarthria vagy afázia következtében. Baleset nagyfokú kockázata a látótér beszűkülése és érzőműködés zavara miatt. Önellátás hiánya a mozgásképesség csökkenése vagy zavartság miatt. Teljes incontinentia a húgyhólyag tónustalansága miatt. Testkép zavara a facialis paresis miatt.",
    magyarazat: "A stroke ápolása komplex - mind fizikai, mind kommunikációs, mind pszichés szempontok."
  },

  // =============================================================
  // ============ MOZGÁSSZERVEK =================================
  // =============================================================

  {
    tetel: "Mozgásszervek",
    tipus: "nyitott",
    kerdes: "Nevezd meg a medenceövet alkotó csontokat magyarul és latinul!",
    valasz: "Keresztcsont – os sacrum. Medencecsont – os coxae. Ülőcsont – os ischii. Szeméremcsont – os pubis. Csípőcsont – os ilium.",
    magyarazat: "Az os coxae 3 csontból nőtt össze: ilium + ischium + pubis. Felnőttekben már nem látható a határ."
  },

  {
    tetel: "Mozgásszervek",
    tipus: "feleletvalasztos",
    kerdes: "Melyik betegségről van szó: a perifériás kis ízületeket érintő krónikus, szimmetrikus gyulladás?",
    valaszok: [
      "Osteoporosis",
      "Osteomalatia",
      "Rheumatoid arthritis",
      "Bechterew-kór"
    ],
    helyes: 2,
    magyarazat: "RA: szimmetrikus, kis ízületeket érintő (kéz, láb), reggeli ízületi merevség, autoimmun betegség."
  },

  {
    tetel: "Mozgásszervek",
    tipus: "feleletvalasztos",
    kerdes: "Mi az osteoporosis lényege?",
    valaszok: [
      "A csont szervetlen anyagának csökkenése (ásványi anyag minőségi és mennyiségi probléma)",
      "A csontszövet szerves és szervetlen arányának változása nélkül a csontok csontszövettartalmának csökkenése",
      "Krónikus gyulladás a kis ízületekben",
      "Gerinc ízületeinek krónikus gyulladása"
    ],
    helyes: 1,
    magyarazat: "Osteoporosis: a csont mennyisége csökken, de az arány normális. Osteomalatia: minőségi probléma, főleg D-vitamin hiány miatt."
  },

  // =============================================================
  // ============ NŐI NEMISZERVEK, TERHESSÉG ===================
  // =============================================================

  {
    tetel: "Női nemiszervek és terhesség",
    tipus: "nyitott",
    kerdes: "Milyen sorrendben követik egymást a menstruáció szakaszai?",
    valasz: "1. Gyógyulás – regeneratio. 2. Kiépülés – proliferatio. 3. Elválasztás – secretio. 4. Menstruáció – desquamatio.",
    magyarazat: "A 28 napos ciklusban: kb. 1-5. nap menstruáció, 5-14. nap proliferatio (follikuláris), 14. nap ovuláció, 14-28. nap secretios (luteális)."
  },

  {
    tetel: "Női nemiszervek és terhesség",
    tipus: "nyitott",
    kerdes: "Sorold fel a méh részeit latinul!",
    valasz: "Myometrium (méh izomzata), perimetrium (méh külső burka), endometrium (méh nyálkahártya), cavum uteri (méhüreg), cervix uteri (méh nyaka), fundus (méhfenék).",
    magyarazat: "Az endometrium az, ami menstruál. A myometrium szülés alatti összehúzódásokat végzi."
  },

  {
    tetel: "Női nemiszervek és terhesség",
    tipus: "nyitott",
    kerdes: "Mit jelent: replikáció, transzkripció, mutáció?",
    valasz: "Replikáció: a DNS molekula megkettőződése. Transzkripció: a DNS molekula információjának RNS molekulára való átírása. Mutáció: a DNS-ben bekövetkező tartós információ-változás (génhiba).",
    magyarazat: "A replikáció a sejtosztódás előtt zajlik. A transzkripció a fehérjeszintézis első lépése."
  },

  {
    tetel: "Női nemiszervek és terhesség",
    tipus: "feleletvalasztos",
    kerdes: "Mi a mitózis és meiózis közötti fő különbség?",
    valaszok: [
      "A mitózis számtartó, a meiózis számfelező osztódás",
      "A mitózis ivari, a meiózis testi sejtekre jellemző",
      "A mitózis lassabb, a meiózis gyorsabb",
      "Nincs különbség"
    ],
    helyes: 0,
    magyarazat: "Mitózis: testi sejtekre, számtartó (46→46 kromoszóma). Meiózis: ivari sejtekre, számfelező (46→23)."
  },

  {
    tetel: "Női nemiszervek és terhesség",
    tipus: "nyitott",
    kerdes: "Mit nem szabad / kerülni kell terhesség alatt?",
    valasz: "Anya fertőző betegségei. Alkoholfogyasztás. Dohányzás. Kábítószer-fogyasztás. Bizonyos gyógyszerek fogyasztása. Környezeti hatások. Sugárzás vagy vegyi anyagok.",
    magyarazat: "Az első trimeszter (organogenesis) a legkritikusabb. Még a vény nélkül kapható gyógyszereket is csak orvosi tanácsra szabad szedni."
  },

  {
    tetel: "Női nemiszervek és terhesség",
    tipus: "nyitott",
    kerdes: "Mik az Apgar-érték megállapítás szempontjai? (5)",
    valasz: "Légzés, szívműködés, reflextevékenység, izomtónus, bőrszín.",
    magyarazat: "Az Apgar-érték 0-10 közötti szám. 1 percnél és 5 percnél értékeljük az újszülöttet."
  },

  // =============================================================
  // ============ PEDIÁTRIA, FERTŐZŐ BETEGSÉGEK ================
  // =============================================================

  {
    tetel: "Pediátria és fertőző betegségek",
    tipus: "nyitott",
    kerdes: "Mik a csecsemőkori görcsös állapot lehetséges okai?",
    valasz: "Exsiccosis (kiszáradás), meningitis, magas láz, toxikózis, epilepszia.",
    magyarazat: "A lázgörcs külön entitás csecsemő- és kisgyerekkorban: gyors lázemelkedés tonikus-klónusos rohamot okozhat. Általában jóindulatú."
  },

  {
    tetel: "Pediátria és fertőző betegségek",
    tipus: "nyitott",
    kerdes: "Milyen betegségek ellen rendelkezünk hatásos aktív védőoltással?",
    valasz: "Morbilli (kanyaró), tuberculosis, diphteria, hepatitis B, pertussis (szamárköhögés), rubeola, typhus abdominalis, tetanus.",
    magyarazat: "A magyarországi védőoltási rend ezeket nagyrészt lefedi. MMR (Measles, Mumps, Rubella) - kombinált oltás."
  },

  {
    tetel: "Pediátria és fertőző betegségek",
    tipus: "nyitott",
    kerdes: "Párosítsd: rubeola, hastífusz, tetanusz, encephalitis - hogyan terjednek?",
    valasz: "Rubeola: diaplacentárisan (anyáról magzatra is). Hastífusz: élelmiszer és víz útján. Tetanusz: talaj közvetítésével (sebbe kerülve). Encephalitis: kullancs közvetítésével.",
    magyarazat: "A rubeola terhesség első trimeszterében súlyos magzati károsodást okozhat (rubeola-szindróma). Ezért fontos a vakcináció a fogamzás előtt."
  },

  {
    tetel: "Pediátria és fertőző betegségek",
    tipus: "nyitott",
    kerdes: "Mik a védőoltások ellenjavallatai?",
    valasz: "Lázas állapot, neurológiai rendellenességek, terhesség (élő vakcináknál), túlérzékenység, HIV fertőzés.",
    magyarazat: "Az élő, gyengített vakcinák (MMR, varicella) terhességben és súlyos immunhiányban kontraindikáltak."
  },

  {
    tetel: "Pediátria és fertőző betegségek",
    tipus: "nyitott",
    kerdes: "Jellemezd: vörheny, kanyaró, rózsahimlő, bárányhimlő kiütések alapján.",
    valasz: "Vörheny: mellkason és hason tűszúrásnyi élénkpiros kiütések, az arcon nincs kiütés. Kanyaró: fül mögött az arcon kezdődő, lefelé haladva az egész testre kiterjedő, gombostűfejnyi összefolyó sötétpiros foltok. Rózsahimlő: rózsaszínű, nem összefolyó lencsényi foltok. Bárányhimlő: apró hólyagocskák testszerte, zavaros tartalommal.",
    magyarazat: "A bárányhimlő hólyagok minden fejlődési stádiumban együtt láthatók (foltos, hólyagos, pörkös)."
  },

  {
    tetel: "Pediátria és fertőző betegségek",
    tipus: "nyitott",
    kerdes: "Mi az antroponozis és antropozoonozis?",
    valasz: "Antroponozis: emberről emberre terjedő fertőző betegségek. Antropozoonozis: állatról emberre terjedő betegségek (zoonózis).",
    magyarazat: "Tipikus zoonózisok: veszettség, tularémia, leptospirosis, salmonellosis. Antroponozis: morbilli, varicella."
  },

  // =============================================================
  // ============ EKG, SZÍVBETEGSÉGEK ==========================
  // =============================================================

  {
    tetel: "EKG és szívbetegségek",
    tipus: "nyitott",
    kerdes: "Mi az EKG működési elve és miről nyújt tájékoztatást?",
    valasz: "Működési elve: a szívizomsejtek működése közben keletkező elektromos potenciálkülönbségek, a test felszínén elvezetett elektródákkal elvezethetők és EKG segítségével rögzíthetők. Tájékoztatást nyújt: a szív ingerképzéséről, ingerületvezetéséről, szívműködési rendellenességekről, a myocardium elváltozásairól, egyéb elváltozásokról (pl. gyógyszerhatás).",
    magyarazat: "Az EKG nem 'beavatkozás' - csak észlel. Nem fáj, nem ártalmas. A leggyakrabban használt szívvizsgálat."
  },

  {
    tetel: "EKG és szívbetegségek",
    tipus: "nyitott",
    kerdes: "Mik az Einthoven és Goldberger féle EKG elvezetések?",
    valasz: "Einthoven (bipoláris végtagi): I, II, III. Goldberger (unipoláris végtagi): aVR, aVL, aVF.",
    magyarazat: "Plus 6 mellkasi elvezetés (V1-V6). Összesen 12 elvezetéses EKG."
  },

  {
    tetel: "EKG és szívbetegségek",
    tipus: "nyitott",
    kerdes: "Sorold fel az EKG készítés szempontjait!",
    valasz: "Az elektródák nedvesek legyenek (jó vezetés). Az elektródák a megfelelő helyre kerüljenek. A készülék hatékonyan legyen földelve. A beteg megfelelően legyen felkészítve. Szükség esetén borotválás. A páciens-kábel és az elektromos csatlakozó ne keresztezze egymást.",
    magyarazat: "Hibás EKG kép → félrediagnózis. Az alapok pontossága kritikus."
  },

  {
    tetel: "EKG és szívbetegségek",
    tipus: "nyitott",
    kerdes: "Mik az angina pectoris tünetei (helye, jellege, kisugárzása, kiváltó tényezője, megszűnése)?",
    valasz: "Helye: bal oldali vagy substernalis mellkasi fájdalom. Jellege: szorító, éles, szúró, égő, nyomó. Kisugárzása: bal vagy mindkét karba, állkapocsba, nyakba, hátba. Kiváltó tényező: nagyobb terhelésre jelentkezik. Megszűnése: nitroglicerinre, pihenésre elmúlik.",
    magyarazat: "A 'tipikus' angina mind az 5 jellemzőt tartalmazza. Az atipikus is létezik (nőknél, diabéteszeseknél)."
  },

  {
    tetel: "EKG és szívbetegségek",
    tipus: "nyitott",
    kerdes: "Mik a myocardialis infarctus rizikófaktorai?",
    valasz: "Hypertonia, mozgáshiány, hyperlipidaemia, orális antikoncipiensek, hypercholesterinaemia, dohányzás, obesitas, nem (férfi), diabetes mellitus.",
    magyarazat: "Két csoport: módosítható (dohányzás, súly, mozgás, koleszterin, vérnyomás, cukor) és nem módosítható (kor, nem, családi anamnézis)."
  },

  {
    tetel: "EKG és szívbetegségek",
    tipus: "nyitott",
    kerdes: "Mik a bradycardia kiváltó okai?",
    valasz: "Fizikai aktivitás (sportolóknál fiziológiás), mérgek, agynyomás-fokozódás, akut fájdalom, ingerületvezető rendszer betegségei, gyógyszerhatás, szívelégtelenség / szívgyulladás, gyógyszermellékhatás (pl. béta-blokkoló, digitalis).",
    magyarazat: "Sportolónál a 50/min pulzus normális! De zavart, ájulós beteg + bradycardia = sürgős vizsgálat."
  },

  // =============================================================
  // ============ GYÓGYSZERELÉS ================================
  // =============================================================

  {
    tetel: "Gyógyszerelés",
    tipus: "nyitott",
    kerdes: "Mik a gyógyszerek tárolásának szabályai?",
    valasz: "Legtöbbet 15-25°C között kell tárolni, zárható szekrényben. 2-5°C közötti jelzésnél hűtőben. Alfabetikus sorrendben elhelyezni. Egyes gyógyszerek egymástól jól elkülönítve. Tárolás az eredeti dobozban. Kétkeresztes gyógyszereket jól zárható szekrényben. Kábítószereket biztonsági zárral ellátott ládában, melynek kulcsát az erre megbízott orvos vagy nővér tartja magánál.",
    magyarazat: "Kábítószer-szekrény kulcs leadása mindig dokumentált. A kétkeresztes (II. csoport) gyógyszerek dokumentálása is szigorú."
  },

  {
    tetel: "Gyógyszerelés",
    tipus: "feleletvalasztos",
    kerdes: "Mennyi ideig használható fel a gyógyszer, ha a csomagolásán csak gyártási ideje van feltüntetve?",
    valaszok: ["1 évig", "3 évig", "5 évig", "10 évig"],
    helyes: 2,
    magyarazat: "5 évig - ha csak gyártási idő szerepel és nem külön lejárat."
  },

  {
    tetel: "Gyógyszerelés",
    tipus: "nyitott",
    kerdes: "Mit jelentenek a következő latin kifejezések: dosis curativa, dosis tolerata, dosis toxica, dosis letalis?",
    valasz: "Dosis curativa: a gyógyító hatást kifejtő legkisebb gyógyszermennyiség. Dosis tolerata: károsodást még nem okozó adag. Dosis toxica: mérgezést okozó adag. Dosis letalis: bizonyos mértéken túl halálhoz vezet.",
    magyarazat: "A 'terápiás index' = LD50/ED50. Minél nagyobb, annál biztonságosabb a gyógyszer."
  },

  {
    tetel: "Gyógyszerelés",
    tipus: "nyitott",
    kerdes: "Mi a teendő, ha gyógyszerelés során gyógyszercsere történt?",
    valasz: "Azonnal jelenteni az orvosnak.",
    magyarazat: "Nem szabad eltussolni - a beteg biztonsága a fő szempont. Az orvos eldönti, kell-e ellenanyag, megfigyelés, beavatkozás."
  },

  {
    tetel: "Gyógyszerelés",
    tipus: "nyitott",
    kerdes: "Sorold fel a digitálisz intoxikáció jellemző tüneteit! (8)",
    valasz: "Hányinger, hányás, étvágytalanság, bradycardia, bigeminia (minden 2. ütés extrasystole), fejfájás, gyengeség, szédülés, görcsök, szemkáprázás, szikralátás (sárgászöld látás).",
    magyarazat: "A digitálisz szűk terápiás indexű gyógyszer. Vérszint-kontroll szükséges. Toxikus hatásnál EKG-monitorozás kötelező."
  },

  // =============================================================
  // ============ FÁJDALOM, MEGFIGYELÉS ========================
  // =============================================================

  {
    tetel: "Fájdalom",
    tipus: "nyitott",
    kerdes: "Sorold fel a fájdalom felmérésére vonatkozó megfigyelési szempontokat! (legalább 10)",
    valasz: "Helye, kisugárzása, jellege, erőssége, kezdete, időtartama, előfordulási gyakorisága, oka, intenzitása, társtünetek, volt-e már korábban, befolyásolhatósága.",
    magyarazat: "VAS skála (0-10) az erősséghez. PQRST: Provoking, Quality, Region/Radiation, Severity, Time."
  },

  {
    tetel: "Fájdalom",
    tipus: "nyitott",
    kerdes: "Az akut fájdalom korai hatásai a szervezetre?",
    valasz: "Szapora szívműködés, szapora légzés, vérnyomás-emelkedés, verejtékezés, pupillák kitágulása, perifériás vasoconstrictio (csökkent kapilláris újratelődés), hideg nyirkos bőr.",
    magyarazat: "Ezek a 'fight-or-flight' aktiválás jelei a szimpatikus túlsúly miatt."
  },

  {
    tetel: "Fájdalom",
    tipus: "nyitott",
    kerdes: "Mi a különbség az akut és krónikus fájdalom között?",
    valasz: "Akut fájdalom: szervi betegség védekező mechanizmusa, oki terápia jól szünteti, oka nyilvánvaló, opioidok hatásosak, nincs súlyos következménye. Krónikus fájdalom: nincs hasznos funkciója, vannak következményei, oka nehezen meghatározható, opioidok alig hatásosak, gyakran terápia rezisztens.",
    magyarazat: "Krónikus fájdalom = több, mint 3-6 hónapja fennálló. Komplex kezelést igényel: gyógyszer + terápia + pszichológia."
  },

  // =============================================================
  // ============ ÁPOLÁSELMÉLET, BETEGJOGOK ====================
  // =============================================================

  {
    tetel: "Ápoláselmélet és betegjogok",
    tipus: "nyitott",
    kerdes: "Fogalmazd meg az ápolás célját Hildegard Peplau, Virginia Henderson, Dorothea Orem és Callista Roy szerint!",
    valasz: "Hildegard Peplau: a kliens/beteg és az ápoló közötti interperszonális kapcsolat kialakítása, mely hozzásegít a beteg problémájának alapos megismeréséhez és a megoldások megkereséséhez. Virginia Henderson: az egyén függetlenségének mielőbbi helyreállítása. Dorothea Orem: a beteg önellátási képességének növelése, segítése az önellátás elérésében. Callista Roy: a beteg segítése a megváltozott körülményekhez való alkalmazkodásban.",
    magyarazat: "Henderson 14 alapszükségletet különít el. Orem 'önellátási elmélete' a leginkább az ápolásban használt modell."
  },

  {
    tetel: "Ápoláselmélet és betegjogok",
    tipus: "nyitott",
    kerdes: "Mik a haldoklás Kübler-Ross féle szakaszai?",
    valasz: "Elutasítás, düh, alkudozás, depresszió, belenyugvás.",
    magyarazat: "Nem mindenki megy át mind az 5 szakaszon, és nem feltétlenül ebben a sorrendben. A beteg gyakran 'oszcillál'."
  },

  {
    tetel: "Ápoláselmélet és betegjogok",
    tipus: "nyitott",
    kerdes: "Mik a haldokló beteg ellátásának fő célkitűzései? (3)",
    valasz: "A beteg kényelemérzetének, jó közérzetének elősegítése. A fájdalom csökkentése, megszüntetése. Izolációs érzés oldása. A megfelelő érzelmi légkör biztosítása.",
    magyarazat: "A palliatív ellátás célja a komfort, nem a gyógyítás. A 'jó halál' fogalma fontos szerepet játszik."
  },

  {
    tetel: "Ápoláselmélet és betegjogok",
    tipus: "nyitott",
    kerdes: "Mik a haldokló beteg 3 legfőbb igénye?",
    valasz: "Fájdalmának csillapítása. Önbecsülésének és méltóságának megőrzése. Szeretet és törődés.",
    magyarazat: "A kapcsolattartás, a 'jelenlét' sokszor fontosabb, mint a beszéd."
  },

  {
    tetel: "Ápoláselmélet és betegjogok",
    tipus: "nyitott",
    kerdes: "Sorold fel a betegek egészségügyi törvényben rögzített jogait!",
    valasz: "Egészségügyi ellátáshoz való jog. Emberi méltósághoz való jog. Kapcsolattartás joga. Gyógyintézet elhagyásának joga. Tájékoztatáshoz való jog. Önrendelkezéshez való jog. Ellátás visszautasításának joga. Egészségügyi dokumentáció megismerésének joga. Orvosi titoktartáshoz való jog.",
    magyarazat: "1997. évi CLIV. törvény az egészségügyről - ezeket a jogokat szabályozza."
  },

  {
    tetel: "Ápoláselmélet és betegjogok",
    tipus: "nyitott",
    kerdes: "Mi a tájékoztatáshoz való jog jelentése a beteg számára?",
    valasz: "A beteg jogosult arra, hogy számára érthető módon részletes tájékoztatást kapjon: egészségi állapotáról, javasolt vizsgálatokról, beavatkozásokról, azok elvégzésének elmaradásának kockázatáról.",
    magyarazat: "'Érthető módon' = a beteg műveltségi szintjéhez igazítva. Idegen szavak helyett magyar kifejezések."
  },

  {
    tetel: "Ápoláselmélet és betegjogok",
    tipus: "nyitott",
    kerdes: "Mire terjed ki a felvilágosítási kötelezettség a kórházi ellátás során?",
    valasz: "A beteg állapotára. A beteg prognózisára. A kezelési alternatívákra. A javasolt kezelés előnyeire, hátrányaira. A kockázatokra.",
    magyarazat: "Az 'informed consent' (tájékozott beleegyezés) ezeknek az ismeretében jöhet létre."
  },

  // =============================================================
  // ============ EGÉSZSÉGFEJLESZTÉS ============================
  // =============================================================

  {
    tetel: "Egészségfejlesztés és prevenció",
    tipus: "nyitott",
    kerdes: "Mi a prevenció és milyen formái vannak?",
    valasz: "Prevenció: minden olyan törekvés, amely az egészség fejlesztését, megőrzését, illetve egészségkárosodás esetén az egészség mielőbbi visszaállítását, illetve a károsodás további súlyosbodásának kivédését szolgálja. Formái: primer, secunder, tercier prevenció.",
    magyarazat: "Primer: betegség kialakulása előtt (oltás, egészséges életmód). Secunder: korai szűrés (mammográfia). Tercier: már kialakult betegség progressziójának megelőzése (rehabilitáció)."
  },

  {
    tetel: "Egészségfejlesztés és prevenció",
    tipus: "nyitott",
    kerdes: "Mik a betegellátáshoz köthető leggyakoribb nem kívánatos események?",
    valasz: "A beteg elesése vagy leesése. Kórházban szerzett, rövid idő alatt kialakuló decubitus. Kórházi fertőzés (húgyúti, sebfertőzés stb.). Gyógyszer okozta nem várt mellékhatás. Gyógyszercsere.",
    magyarazat: "Ezek megelőzhetők megfelelő protokollokkal és odafigyeléssel."
  },

  {
    tetel: "Egészségfejlesztés és prevenció",
    tipus: "nyitott",
    kerdes: "Sorold fel az időskori élettani változásokat! (12)",
    valasz: "Száraz, fakó, petyhüdt bőr. Csökkent hallás. Csökkent látás. Csökkent ízérzékelés. Étvágytalanság. Magas vérnyomás. Székrekedés. Csökkent nyálelválasztás. Csökkent emésztőenzim termelés. Éjszakai vizelési kényszer. Csökkent izomerő és mozgáskoordináció. Haj és szőrzet megritkulása. Festékfoltok megszaporodása. Fogak meglazulása.",
    magyarazat: "Ezek 'normális' változások, NEM betegségek. De a határt megnehezíthetik a komorbiditások."
  },

  // =============================================================
  // ============ NORTON SKÁLA, ÁPOLÁSI FOLYAMAT ===============
  // =============================================================

  {
    tetel: "Ápolási folyamat, Norton-skála",
    tipus: "nyitott",
    kerdes: "Mik az ápolási folyamat lépései?",
    valasz: "Felmérés. Ápolási diagnózis meghatározása. Tervezés. Végrehajtás. Értékelés.",
    magyarazat: "Ez ciklikus folyamat - az értékelés után visszamegyünk a felméréshez."
  },

  {
    tetel: "Ápolási folyamat, Norton-skála",
    tipus: "nyitott",
    kerdes: "Mit jelent: protokoll, kritérium, minőség?",
    valasz: "Protokoll: meghatározott kezelés vagy beavatkozás elvégzéséhez szükséges események és tevékenységek listája. Kritérium: a teljesítés elvárt szintje vagy annak pontos leírása. Minőség: a termék vagy szolgáltatás azon tulajdonságainak és jellemzőinek összessége, amelyek alkalmassá teszik a kifejezett (elvárt) igények kielégítésére.",
    magyarazat: "A modern egészségügy mind a háromra épül: protokollok adott helyzetekre, mérhető kritériumok, és mindezek minőségbiztosítva."
  },

  {
    tetel: "Ápolási folyamat, Norton-skála",
    tipus: "nyitott",
    kerdes: "Mik a Norton-skála felmérési szempontjai?",
    valasz: "A beteg bőrének állapota. A beteg mentális státusza. Inkontinencia. A beteg mobilitása. A beteg aktivitása. (A bővített Norton-skála további szempontokat is tartalmaz: kooperációs készség, életkor, kísérő betegségek, általános állapot.)",
    magyarazat: "Norton-skála = decubitus kockázat felmérése. Alacsony pontszám = magas kockázat. 14 alatt komoly megelőző intézkedések."
  },

  // =============================================================
  // ============ KOMMUNIKÁCIÓ, PSZICHIÁTRIA ===================
  // =============================================================

  {
    tetel: "Kommunikáció és pszichiátria",
    tipus: "nyitott",
    kerdes: "Sorolj fel 6 nem verbális kommunikációs módot!",
    valasz: "Mimika, tekintet, érintés, gesztus, testtartás (kinetikai jelek), proxemika (térközszabályozás), emblémák (kulturális szignálok, viselet), szaganyagok.",
    magyarazat: "A nem verbális kommunikáció kb. 60-70%-át teszi ki a teljes közlésnek - különösen az érzelmi tartalom."
  },

  {
    tetel: "Kommunikáció és pszichiátria",
    tipus: "nyitott",
    kerdes: "Mit jelent: inkongruencia, redundancia, attribúció, proxemika, metakommunikáció?",
    valasz: "Inkongruencia: a non-verbális és verbális közlés tartalma nem egyezik, hiteltelen. Redundancia: új információt nem tartalmazó, felesleges elem, amelynek hiányában a megértés nehézkessé válna. Attribúció: stílusjegyek és más ismertetőjegyek alapján bizonyos jelenségek vagy dolgok meghatározása. Proxemika: térközszabályozás kommunikációs csatornája. Metakommunikáció: a verbális kommunikációt kísérő, általában nem tudatos közlés.",
    magyarazat: "Inkongruens kommunikáció: 'jól vagyok' szavakat mosolyogva mond, miközben nyilvánvalóan szomorú. Az inkongruencia bizalmatlanságot szül."
  },

  {
    tetel: "Kommunikáció és pszichiátria",
    tipus: "nyitott",
    kerdes: "Mi a helyes ápolói magatartás depressziós, szorongó és paranoiás betegnél?",
    valasz: "Depressziós: elfogadó magatartás, objektivitás, együttérzés kerülése (NEM részvét), kedvesség, túlzott vidámság kerülése. Szorongó: ítéletalkotás kerülése, objektivitás, biztonságérzet erősítése. Paranoiás: következetesség, rendszeresség, bizalomkeltő magatartás.",
    magyarazat: "Depressziós betegnél a túlzott vidámság elidegeníti. Paranoiásnál a következetlenség gyanakvást szít."
  },

  {
    tetel: "Kommunikáció és pszichiátria",
    tipus: "nyitott",
    kerdes: "Csoportosítsd a pszichiátriai tüneteket pozitív és negatív tünetek szerint!",
    valasz: "Pozitív tünet: hallucináció, téveszme, bizarr magatartás. Negatív tünet: érzelmi elsivárosodás, szociális kapcsolatok beszűkülése, örömtelenség (anhedónia).",
    magyarazat: "Pozitív tünetek = 'pluszban' (ami nem kéne, hogy ott legyen). Negatív tünetek = 'mínuszban' (ami hiányzik). Schizofréniánál mindkettő jelen lehet."
  },

  {
    tetel: "Kommunikáció és pszichiátria",
    tipus: "nyitott",
    kerdes: "Mik a depresszió jellemző tünetei?",
    valasz: "Indítékszegénység, fokozott alvásigény, tudatbeszűkülés, fokozott betegségtudat, stupor (mozgásszegénység, válaszhiány).",
    magyarazat: "A 'pszichomotoros gátoltság' a klasszikus tünet. Plus depresszióhoz tartozik a hangulati nyomottság, anhedónia, öngyilkossági gondolatok."
  },

  {
    tetel: "Kommunikáció és pszichiátria",
    tipus: "nyitott",
    kerdes: "Mik az anorexia nervosa jellemzői?",
    valasz: "Olyan klinikai szindróma, melyben a szenvedő egyén betegesen fél az elhízástól, elutasítja az evést. Klinikai megnyilvánulások: intenzív félelem az elhízástól, étel jutalom vagy stresszcsökkentés célú felhasználása, mértéktelen testgyakorlás, fáradtság, koncentrációs zavarok, depresszió, nőknél menstruációs zavarok (amenorrhoea).",
    magyarazat: "Az anorexia életveszélyes betegség - a halálozási arány a legmagasabb a pszichiátriai kórképek között."
  },

  {
    tetel: "Kommunikáció és pszichiátria",
    tipus: "nyitott",
    kerdes: "Párosítsd a személyiségzavarokat tüneteikkel: antiszociális, borderline, hisztrionikus, nárcisztikus.",
    valasz: "Antiszociális: empátiára való képtelenség, agresszivitás. Borderline: szuicid fenyegetőzések, öncsonkítás. Hisztrionikus: eltúlzott érzelmek, teátrális viselkedés. Nárcisztikus: saját sikerről való fantáziálás, csodálat várása.",
    magyarazat: "Ezek a 'B klaszter' személyiségzavarai a DSM-ben (drámai, érzelmes, kiszámíthatatlan)."
  },

  // =============================================================
  // ============ ESZKÖZÖK, FEKVÉSI MÓDOK =======================
  // =============================================================

  {
    tetel: "Fektetési módok és kötések",
    tipus: "nyitott",
    kerdes: "Csoportosítsd a fektetési módokat: Fowler, Trendelenburg, lapos hanyatt, hanyatt felhúzott alsó végtagokkal.",
    valasz: "Fowler-helyzet: szívbetegség, dyspnoe (nehézlégzés). Trendelenburg-helyzet: kivérzett beteg (lábfej magasabban a fejnél). Lapos hanyatt fekvés: gerincsérülés, újraélesztés, epiduralis érzéstelenítés után. Hanyatt fekvés felhúzott alsó végtagokkal: hasi sérülés, hasi fájdalom (a hasizmokat tehermentesíti).",
    magyarazat: "A Fowler-helyzet 45-60° emelt felsőtest. Trendelenburg = láb fent, fej lent (vértérfogat-növelés a központban)."
  },

  {
    tetel: "Fektetési módok és kötések",
    tipus: "nyitott",
    kerdes: "Mi a gégediéta szabálya aphoniában szenvedő betegnél?",
    valasz: "Kerülendő: túl hideg / túl meleg folyadék fogyasztása, túl fűszeres étel, szénsavas folyadék, alkohol (tömény, égetett szesz). Tilos: beszéd, dohányzás.",
    magyarazat: "Gégeműtét után a teljes hangképzési pihentetés alapfontosságú a gyógyuláshoz."
  },

  // =============================================================
  // ============ KIEGÉSZÍTŐ LATIN SZAVAK ======================
  // =============================================================

  {
    tetel: "Latin - Légzőrendszer",
    tipus: "latin",
    latin: "Pharynx",
    jelentes: "garat",
    kiejtes: "farinksz",
    pelda: "Pharyngitis = garatgyulladás",
    magyarazat: "A garat az emésztő- és légzőrendszer közös kezdeti szakasza."
  },

  {
    tetel: "Latin - Légzőrendszer",
    tipus: "latin",
    latin: "Cartilago thyroidea",
    jelentes: "pajzsporc (Ádám-csutka)",
    kiejtes: "kartilágo tiroideá",
    magyarazat: "A gége legnagyobb porca. Férfiaknál előbbre türemkedik az 'Ádám-csutka' miatt."
  },

  {
    tetel: "Latin - Légzőrendszer",
    tipus: "latin",
    latin: "Epiglottis",
    jelentes: "gégefedő",
    kiejtes: "epiglottisz",
    magyarazat: "Nyeléskor lezárja a gégébemenetet, hogy ne kerüljön az étel a légutakba."
  },

  {
    tetel: "Latin - Légzőrendszer",
    tipus: "latin",
    latin: "Bronchus principalis",
    jelentes: "főhörgő",
    kiejtes: "bronkus principálisz",
    magyarazat: "A légcső kettéágazásánál - egy jobb és egy bal főhörgő. A jobb főhörgő rövidebb és függőlegesebb (idegen test gyakrabban kerül oda)."
  },

  {
    tetel: "Latin - Légzőrendszer",
    tipus: "latin",
    latin: "Alveolus",
    jelentes: "tüdőléghólyag",
    kiejtes: "alveolusz",
    magyarazat: "Itt történik a gázcsere a tüdőkapilláris és a levegő között. Több százmillió van belőlük."
  },

  {
    tetel: "Latin - Emésztőrendszer",
    tipus: "latin",
    latin: "Cavum oris",
    jelentes: "szájüreg",
    kiejtes: "kávum órisz"
  },

  {
    tetel: "Latin - Emésztőrendszer",
    tipus: "latin",
    latin: "Lingua",
    jelentes: "nyelv",
    kiejtes: "lingva"
  },

  {
    tetel: "Latin - Emésztőrendszer",
    tipus: "latin",
    latin: "Glandulae salivares",
    jelentes: "nyálmirigyek",
    kiejtes: "glandulé salivárész"
  },

  {
    tetel: "Latin - Emésztőrendszer",
    tipus: "latin",
    latin: "Dentes",
    jelentes: "fogak",
    kiejtes: "dentesz"
  },

  {
    tetel: "Latin - Vizelet és emésztés",
    tipus: "latin",
    latin: "Sputum",
    jelentes: "köpet",
    kiejtes: "szputum"
  },

  {
    tetel: "Latin - Vizelet és emésztés",
    tipus: "latin",
    latin: "Haematemesis",
    jelentes: "vérhányás",
    kiejtes: "hematemézisz"
  },

  {
    tetel: "Latin - Vizelet és emésztés",
    tipus: "latin",
    latin: "Retentio urinae",
    jelentes: "vizelet visszamaradás, megrekedés",
    kiejtes: "retencio urináé"
  },

  {
    tetel: "Latin - Vizelet és emésztés",
    tipus: "latin",
    latin: "Pyuria",
    jelentes: "gennyvizelés",
    kiejtes: "pyúria",
    magyarazat: "Húgyúti fertőzés egyik jele - a vizeletben fehérvérsejtek és genny van."
  },

  {
    tetel: "Latin - Vizelet és emésztés",
    tipus: "latin",
    latin: "Faecalis impactatio",
    jelentes: "székletbeékelődés",
    kiejtes: "fékálisz impaktácio"
  },

  {
    tetel: "Latin - Vizelet és emésztés",
    tipus: "latin",
    latin: "Melaena",
    jelentes: "kátrányszerű, fekete széklet (gyomorvérzés jele)",
    kiejtes: "meléna",
    magyarazat: "A vér gyomorsav hatására megfeketedik - emiatt 'fekete-szurokszerű' a széklet."
  },

  {
    tetel: "Latin - Általános fogalmak",
    tipus: "latin",
    latin: "Aplasia",
    jelentes: "a szerv teljes hiánya",
    kiejtes: "aplázia"
  },

  {
    tetel: "Latin - Általános fogalmak",
    tipus: "latin",
    latin: "Hypoplasia",
    jelentes: "a szerv születéstől kezdődően kisebb, mint a normális",
    kiejtes: "hipoplázia"
  },

  {
    tetel: "Latin - Általános fogalmak",
    tipus: "latin",
    latin: "Hyperplasia",
    jelentes: "a működő szerv túlburjánzása",
    kiejtes: "hiperplázia",
    pelda: "Prostata-hyperplasia (jóindulatú prosztata-megnagyobbodás)"
  },

  {
    tetel: "Latin - Általános fogalmak",
    tipus: "latin",
    latin: "Regeneratio",
    jelentes: "szövet újraképződés (a szervezet pótolja az elpusztult sejteket)",
    kiejtes: "regenerácio"
  },

  {
    tetel: "Latin - Általános fogalmak",
    tipus: "latin",
    latin: "Atrophia",
    jelentes: "a szervezet vagy egyes szervek tömegcsökkenése",
    kiejtes: "atrófia",
    pelda: "Izomatrófia hosszas immobilizációnál"
  },

  {
    tetel: "Latin - Általános fogalmak",
    tipus: "latin",
    latin: "Necrosis",
    jelentes: "az élő szervezet egy körülírt részének elpusztulása",
    kiejtes: "nekrózis"
  },

  {
    tetel: "Latin - Általános fogalmak",
    tipus: "latin",
    latin: "Degeneratio",
    jelentes: "a sejtek jellegzetes anyagcserezavara",
    kiejtes: "degenerácio"
  },

  {
    tetel: "Latin - Vastagbél",
    tipus: "latin",
    latin: "Cecum",
    jelentes: "vakbél",
    kiejtes: "cékum"
  },

  {
    tetel: "Latin - Vastagbél",
    tipus: "latin",
    latin: "Colon ascendens",
    jelentes: "felszálló vastagbél",
    kiejtes: "kolon aszcendensz"
  },

  {
    tetel: "Latin - Vastagbél",
    tipus: "latin",
    latin: "Colon transversum",
    jelentes: "haránt vastagbél",
    kiejtes: "kolon transverszum"
  },

  {
    tetel: "Latin - Vastagbél",
    tipus: "latin",
    latin: "Colon descendens",
    jelentes: "leszálló vastagbél",
    kiejtes: "kolon deszcendensz"
  },

  {
    tetel: "Latin - Vastagbél",
    tipus: "latin",
    latin: "Colon sigmoideum",
    jelentes: "S-alakú vastagbél",
    kiejtes: "kolon szigmoideum"
  },

  {
    tetel: "Latin - Vastagbél",
    tipus: "latin",
    latin: "Rectum",
    jelentes: "végbél",
    kiejtes: "rektum"
  },

  {
    tetel: "Latin - Vegyes",
    tipus: "latin",
    latin: "Fistula ani",
    jelentes: "végbélsipoly",
    kiejtes: "fisztula áni"
  },

  {
    tetel: "Latin - Vegyes",
    tipus: "latin",
    latin: "Hernia umbilicalis",
    jelentes: "köldöksérv",
    kiejtes: "hernia umbilikálisz"
  },

  {
    tetel: "Latin - Vegyes",
    tipus: "latin",
    latin: "Appendectomia",
    jelentes: "féregnyúlvány eltávolítása",
    kiejtes: "appendektómia"
  },

  {
    tetel: "Latin - Vegyes",
    tipus: "latin",
    latin: "Diverticulum",
    jelentes: "körülírt kiöblösödés, előboltosulás, kitüremkedés",
    kiejtes: "divertikulum",
    magyarazat: "Vastagbélben gyakori, idős korban - 'diverticulosis'."
  },

  {
    tetel: "Latin - Vegyes",
    tipus: "latin",
    latin: "Nodus haemorrhoidalis",
    jelentes: "aranyeres csomó",
    kiejtes: "nódusz hemorroidálisz"
  },

  // =============================================================
  // ============ TRANSZFÚZIÓS TÁLCA RÉSZLETES =================
  // =============================================================

  {
    tetel: "Hematológia és transzfúzió",
    tipus: "nyitott",
    kerdes: "Sorold fel a transzfúziós tálca minimális felszerelését! (vérminta vétel + vércsoport-meghatározás)",
    valasz: "Fertőtleníthető műanyag tálcán: ágyvédelem, karleszorító, bőrfertőtlenítő oldat, 7-10 ml zárt rendszerű kémcső (natív, EDTA-s, nátrium-citrátos), kémcsőállvány, steril egyszer használatos vérvételi tű és harang, steril vágott géz (törlő), ragtapasz, 5×10 ml izotóniás nátrium-klorid, szemcseppentő vagy egyszer használatos pipetta, nem vízoldékony festékű toll, kártyás (bed-side) AB0- és RhD-vércsoport-meghatározó kártya, perifériás vénabiztosítás eszközei, transzfúziós szerelék, ledobótál, veszélyes hulladék tároló doboz, transzfúzió dokumentációi.",
    magyarazat: "A nem vízoldékony festékű toll azért fontos, mert ha vér / fertőtlenítő ráfröccsen, ne mosódjon le a beteg azonosítása."
  },

  {
    tetel: "Hematológia és transzfúzió",
    tipus: "feleletvalasztos",
    kerdes: "A transzfúziós tálcán milyen típusú kémcsövek szerepelnek?",
    valaszok: [
      "Csak natív (alvadásgátló nélküli)",
      "Csak EDTA-s",
      "Natív, EDTA-s, nátrium-citrátos",
      "Heparinos és EDTA-s"
    ],
    helyes: 2,
    magyarazat: "Mindhárom típusra szükség van: a natív a szérumvizsgálathoz, az EDTA-s a vércsoport-meghatározáshoz és vérképhez, a nátrium-citrátos az alvadási vizsgálatokhoz."
  },

  // =============================================================
  // ============ MALNUTRITIO RÉSZLETES =========================
  // =============================================================

  {
    tetel: "Diéta és táplálkozás",
    tipus: "nyitott",
    kerdes: "Mi a primer malnutritio?",
    valasz: "Egy vagy több alapvető tápanyag nem kielégítő vagy túlzott bevitele miatt kialakult rossz tápláltsági állapot.",
    magyarazat: "A primer = közvetlenül a táplálkozási hiba miatt. Szekunder malnutritio betegségből eredő (pl. felszívódási zavar)."
  },

  // =============================================================
  // ============ INCONTINENTIA KEZELÉS RÉSZLETESEN =============
  // =============================================================

  {
    tetel: "Vizeletürítés és vesék",
    tipus: "nyitott",
    kerdes: "Csoportosítsd a stressz incontinentia és a késztetéses incontinentia kezelési módszereit!",
    valasz: "Csak STRESSZ incontinentia: hüvelysúly terápia / hüvelyi súlytréning, elektrostimuláció, intravaginalis-intraurethralis kontinencia-segédeszközök. Csak KÉSZTETÉSES incontinentia: hólyagtréning, hólyag biofeedback. MINDKETTŐRE alkalmas: folyadékbevitel módosítása, medencefenék-izom gyakorlatok (Kegel), sebészi kezelés, gyógyszeres kezelés, koffein tartalmú italok mellőzése.",
    magyarazat: "A stressz inkontinencia mechanikai probléma → mechanikai megoldások. A késztetéses idegi probléma → tréninggel és gyógyszerrel kezelhető. A medencefenék-torna mindkettőnél hasznos."
  },

  {
    tetel: "Vizeletürítés és vesék",
    tipus: "feleletvalasztos",
    kerdes: "A hüvelyi súlytréning melyik incontinentia formára való?",
    valaszok: [
      "Késztetéses incontinentia",
      "Stressz incontinentia",
      "Reflex incontinentia",
      "Túlfolyásos incontinentia"
    ],
    helyes: 1,
    magyarazat: "Hüvelyi súlytréning → medencefenék-izomzat erősítése → stressz incontinentia kezelése."
  },

  // =============================================================
  // ============ LIQUOR CEREBROSPINALIS IGAZ/HAMIS =============
  // =============================================================

  {
    tetel: "Idegrendszer",
    tipus: "nyitott",
    kerdes: "Mi IGAZ és HAMIS a liquor cerebrospinalisra (agy-gerincvelői folyadékra)?",
    valasz: "IGAZ: védi az agyvelőt és a gerincvelőt a külső mechanikai behatásoktól; fehérjetartalma igen alacsony; szerepe van a gerincvelő és agyvelő hőmérsékletének biztosításában; az oldalkamrákban termelődik a vérből való filtrációval. HAMIS: cukortartalma igen magas (NEM, alacsony!); biztosítja a kemény és lágy agyhártya közötti sikamlóságot (NEM, az arachnoidea és pia mater közötti subarachnoidealis tér).",
    magyarazat: "A liquor cukortartalma alacsony - kb. 60%-a a vér cukorszintjének. Magas cukor a liquorban gyanakvást kelt diabéteszes hyperglikémiára vagy laboratóriumi hibára."
  },

  {
    tetel: "Idegrendszer",
    tipus: "feleletvalasztos",
    kerdes: "A liquor cerebrospinalis hol termelődik?",
    valaszok: [
      "A vénákból szivárogva",
      "Az oldalkamrákban a vérből való filtrációval",
      "Az agyhártyák között spontán",
      "A nyúltvelőben"
    ],
    helyes: 1,
    magyarazat: "Az oldalkamrák plexus chorioideusa termeli filtrációval. Naponta kb. 500 ml termelődik és felszívódik."
  },

  // =============================================================
  // ============ MOZGÁSSZERVI BETEGSÉGEK FELISMERÉSE ===========
  // =============================================================

  {
    tetel: "Mozgásszervek",
    tipus: "feleletvalasztos",
    kerdes: "Melyik betegség: a csont szervetlen anyagának csökkenése, ásványi anyag minőségileg zavart és mennyiségileg hiányos?",
    valaszok: [
      "Osteoporosis",
      "Osteomalatia",
      "Rheumatoid arthritis",
      "Bechterew-kór"
    ],
    helyes: 1,
    magyarazat: "Osteomalatia = a csont 'meglágyulása', a mineralizáció zavara. Felnőttkori D-vitamin hiány tipikus oka. Gyermekkorban rachitis."
  },

  {
    tetel: "Mozgásszervek",
    tipus: "feleletvalasztos",
    kerdes: "Melyik betegség: elsősorban a gerinc ízületeit, döntően a sacroiliacalis ízületeket érintő krónikus gyulladás?",
    valaszok: [
      "Rheumatoid arthritis",
      "Osteoporosis",
      "Bechterew-kór (spondylitis ankylopoetica)",
      "Osteoarthritis"
    ],
    helyes: 2,
    magyarazat: "Bechterew-kór = ankylozáló spondylitis. Tipikus: fiatal férfi, deréki fájdalom, reggeli merevség, később 'bambusz-gerinc' alakul ki."
  },

  {
    tetel: "Mozgásszervek",
    tipus: "nyitott",
    kerdes: "Nevezd meg a leírások alapján: 1) Perifériás kis ízületek krónikus szimmetrikus gyulladása. 2) Csont szervetlen anyagának csökkenése, mineralizációs zavar. 3) Csontszövet szerves-szervetlen arányának változása nélkül a csonttartalom csökkenése. 4) Gerinc ízületeit, sacroiliacalis ízületeket érintő krónikus gyulladás.",
    valasz: "1) Rheumatoid arthritis. 2) Osteomalatia. 3) Osteoporosis. 4) Bechterew-kór.",
    magyarazat: "Differenciálás: osteomalatia = MINŐSÉGI probléma (D-vitamin hiány). Osteoporosis = MENNYISÉGI probléma (csontritkulás). RA = autoimmun gyulladás. Bechterew = gerinc autoimmun gyulladás."
  },

  // =============================================================
  // ============ VÉRKÉSZÍTMÉNY ÁTVÉTEL ELLENŐRZÉS ==============
  // =============================================================

  {
    tetel: "Hematológia és transzfúzió",
    tipus: "nyitott",
    kerdes: "Mik a vérkészítmény átvételének ellenőrzési lépései? (4)",
    valasz: "1) Vérkészítmény fajtája, típusa (igénylő lap alapján). 2) Vérvételi sorszám egyezősége a vérkészítmény címkéjén, transzfúziós jelentőlapon, szegmensek címkéin. 3) Zsák és szegmensek záró hegesztéseinek épsége. 4) Vérkészítmény külső megjelenése.",
    magyarazat: "Bármilyen eltérés esetén → NE TRANSZFUNDÁLD! Vissza a vérközpontba. A 'záró hegesztések' azért fontosak, mert ott szakadhat el a zsák és kiömölhet."
  },

  // =============================================================
  // ============ KÓRKÉPEK-SZÖVŐDMÉNYEK PÁROSÍTÁS ===============
  // =============================================================

  {
    tetel: "Betegségek és szövődményeik",
    tipus: "nyitott",
    kerdes: "Párosítsd a kórképeket a tipikus szövődményekkel: diabetes mellitus, ulcus ventriculi, infarctus myocardii, cirrhosis hepatis, glomerulonephritis acuta, alsó végtag trombózisa, emphysema pulmonum, endocarditis.",
    valasz: "Diabetes mellitus → microangiopathia. Ulcus ventriculi (gyomorfekély) → perforáció. Infarctus myocardii → ritmuszavar. Cirrhosis hepatis (májzsugorodás) → oesophagus varix ruptura (nyelőcsővisszér-repedés). Glomerulonephritis acuta → agyödéma. Alsó végtag trombózisa → embolia pulmonalis (tüdőembólia). Emphysema pulmonum → cor pulmonale (tüdő miatti szívbetegség). Endocarditis → vitium (billentyűhiba).",
    magyarazat: "Ezek a 'klasszikus' szövődmények - vizsgakérdés tipikusan. Tanulja meg úgy, mint párosítást."
  },

  {
    tetel: "Betegségek és szövődményeik",
    tipus: "feleletvalasztos",
    kerdes: "Az ulcus ventriculi (gyomorfekély) leggyakoribb akut szövődménye:",
    valaszok: [
      "Vitium",
      "Perforáció",
      "Cor pulmonale",
      "Microangiopathia"
    ],
    helyes: 1,
    magyarazat: "Perforáció = a fekély átfúrja a gyomorfalat → hasűri tartalom kiömlése → peritonitis. Sürgős sebészeti beavatkozást igényel."
  },

  {
    tetel: "Betegségek és szövődményeik",
    tipus: "feleletvalasztos",
    kerdes: "Az alsó végtag trombózisának legveszélyesebb szövődménye:",
    valaszok: [
      "Cor pulmonale",
      "Embolia pulmonalis (tüdőembólia)",
      "Vitium",
      "Microangiopathia"
    ],
    helyes: 1,
    magyarazat: "A trombus lerakódhat, és a tüdőbe kerülve embolia pulmonalist okoz - életveszélyes!"
  },

  {
    tetel: "Betegségek és szövődményeik",
    tipus: "feleletvalasztos",
    kerdes: "Az emphysema pulmonum (tüdőtágulás) tipikus következménye:",
    valaszok: [
      "Vitium",
      "Cor pulmonale",
      "Microangiopathia",
      "Perforáció"
    ],
    helyes: 1,
    magyarazat: "A krónikus tüdőbetegség → magas tüdőérnyomás → a jobb szívfél túlterhelése → cor pulmonale (jobb szívfél elégtelenség)."
  },

  // =============================================================
  // ============ SEBKÖTSZEREK TÍPUSAI ==========================
  // =============================================================

  {
    tetel: "Szondák, drének, sebek",
    tipus: "nyitott",
    kerdes: "Párosítsd a sebtípusokat a megfelelő kötszerrel: nekrotikus, fertőződött, sarjadzó, hámosodó seb.",
    valasz: "NEKROTIKUS seb → Alginát tartalmú hidrogél: az üreges sebekbe is behatol, nekrotikus szöveteket feloldja, megkönnyíti eltávolításukat, utat nyit a hámosodásnak. FERTŐZŐDÖTT seb → Ezüsttartalmú aktív szenes kötszer: sebváladékozást kontrollálja, kellemetlen szagokat megköti, baktériumokat elpusztítja. 4-7 napig a sebben maradhat, fedőkötést sűrűbben cseréljük. SARJADZÓ seb → Speciális 4 rétegű hidropolimer kötszer: réteges kiképzéssel kezeli a sebváladékot, optimális környezet kialakítása révén gyorsítja a sebgyógyulást, gáz- és páraáteresztő, baktérium- és vízzáró. HÁMOSODÓ seb → Polyuretán filmkötszer: gázáteresztő, baktérium- és vízzáró, nedvességet visszatartva nem engedi kiszáradni a sebet, meggátolja az újrafertőződést.",
    magyarazat: "A logika: a sebnek olyan kötszer kell, ami SEGÍT abban, amire éppen szüksége van. Nekrotikus → fel kell oldani az elhalt szövetet. Fertőzött → baktériumellenes. Sarjadzó → optimális nedvesség. Hámosodó → védeni a kiszáradástól és újrafertőzéstől."
  },

  {
    tetel: "Szondák, drének, sebek",
    tipus: "feleletvalasztos",
    kerdes: "Melyik kötszer alkalmas FERTŐZŐDÖTT seb kezelésére?",
    valaszok: [
      "Alginát tartalmú hidrogél",
      "Ezüsttartalmú aktív szenes kötszer",
      "Polyuretán filmkötszer",
      "4 rétegű hidropolimer kötszer"
    ],
    helyes: 1,
    magyarazat: "Az ezüst antibakteriális, az aktív szén megköti a kellemetlen szagot, és a sebváladékot is kontrollálja."
  },

  {
    tetel: "Szondák, drének, sebek",
    tipus: "feleletvalasztos",
    kerdes: "Melyik kötszer oldja fel a nekrotikus szöveteket?",
    valaszok: [
      "Polyuretán filmkötszer",
      "Hidropolimer",
      "Alginát tartalmú hidrogél",
      "Aktív szenes kötszer"
    ],
    helyes: 2,
    magyarazat: "Az alginát hidrogél a nedvességet visszatartja a seben → autolitikus debridement (a saját enzimek bontják fel az elhalt szövetet)."
  },

  // =============================================================
  // ============ EGÉSZSÉGI ÁLLAPOTOT MEGHATÁROZÓ TÉNYEZŐK ======
  // =============================================================

  {
    tetel: "Egészségfejlesztés és prevenció",
    tipus: "nyitott",
    kerdes: "Mik az egészségi állapotot meghatározó fő tényezőcsoportok?",
    valasz: "1) Adottságok: genetikai tényezők, nem, életkor. 2) Szociális/gazdasági tényezők: szegénység, munkanélküliség, szociális kirekesztettség. 3) Környezet: levegő minősége, lakáshelyzet, vízminőség, szociális környezet, gazdasági környezet. 4) Életmód: dohányzás, alkoholfogyasztás, táplálkozás, fizikai aktivitás, drogok, szexuális magatartás, stressz. 5) Szolgáltatásokhoz való hozzáférés: oktatás, egészségügyi ellátás, szociális szolgáltatások, közlekedés, szabadidő.",
    magyarazat: "A WHO szerint az életmód a befolyásolható tényezők között a legnagyobb súlyú - ezért a prevenció elsősorban itt avatkozik be."
  },

  {
    tetel: "Egészségfejlesztés és prevenció",
    tipus: "feleletvalasztos",
    kerdes: "A genetikai tényezők, nem és életkor melyik csoportba tartoznak?",
    valaszok: [
      "Életmód",
      "Adottságok",
      "Környezet",
      "Szociális tényezők"
    ],
    helyes: 1,
    magyarazat: "Adottságok = nem módosítható biológiai jellemzők. Életmód viszont módosítható - ezért az egészségfejlesztés ott avatkozik be."
  },

  // =============================================================
  // ============ AKADÁLYMENTESÍTÉS =============================
  // =============================================================

  {
    tetel: "Egészségfejlesztés és prevenció",
    tipus: "nyitott",
    kerdes: "Mik az akadálymentesítésre vonatkozó általános követelmények? (3)",
    valasz: "Megközelíthetőség / hozzáférhetőség. Elérhetőség. Kezelhetőség. Felismerhetőség. Biztonság.",
    magyarazat: "Az akadálymentesítés nem csak a kerekesszékesekre vonatkozik - mozgáskorlátozottak, vakok, gyengén látók, hallássérültek mind külön szempontot kell figyelembe venni."
  },

  // =============================================================
  // ============ DOROTHEA OREM ÁPOLÁSI MODELL ==================
  // =============================================================

  {
    tetel: "Ápoláselmélet és betegjogok",
    tipus: "nyitott",
    kerdes: "Mik Dorothea Orem ápolási modelljének jellemzői?",
    valasz: "Ápolásra akkor van szükség, amikor valakinek a terápiás önellátási igényei a gondozási képesség hiánya miatt nem kerülnek kielégítésre. Az ápolási rendszerek között megkülönböztet teljesen kompenzáló, részlegesen kompenzáló és támogató-oktató rendszert. Amennyiben az önellátási igény meghaladja az egyén képességeit és lehetőségeit, önellátási deficit lép fel.",
    magyarazat: "Orem 'önellátási elmélete' a leggyakrabban használt ápolási modell. Henderson 14 szükségletet különít el (NEM Orem!). Roy a négy szükségleti csoporttal dolgozik."
  },

  {
    tetel: "Ápoláselmélet és betegjogok",
    tipus: "feleletvalasztos",
    kerdes: "Melyik nem tartozik Orem 3 ápolási rendszerébe?",
    valaszok: [
      "Teljesen kompenzáló rendszer",
      "Részlegesen kompenzáló rendszer",
      "Támogató-oktató rendszer",
      "Adaptációs rendszer"
    ],
    helyes: 3,
    magyarazat: "Orem 3 rendszere: teljesen kompenzáló (eszméletlen beteg), részlegesen kompenzáló (poszt-op beteg), támogató-oktató (krónikus beteg, oktatás)."
  },

  {
    tetel: "Ápoláselmélet és betegjogok",
    tipus: "feleletvalasztos",
    kerdes: "Melyik ápolási modell központjában áll az interperszonális kapcsolat?",
    valaszok: [
      "Dorothea Orem",
      "Hildegard Peplau",
      "Virginia Henderson",
      "Callista Roy"
    ],
    helyes: 1,
    magyarazat: "Peplau modellje az interperszonális ápolás. A 14 szükséglet → Henderson. Adaptáció → Roy. Önellátás → Orem."
  },

  // =============================================================
  // ============ MOZGÁSSZERVI REHABILITÁCIÓ ESZKÖZEI ===========
  // =============================================================

  {
    tetel: "Mozgásszervek",
    tipus: "nyitott",
    kerdes: "Sorold fel a mozgásszervi rehabilitációban használt járást segítő segédeszközöket! (4-6)",
    valasz: "Járóbot. Három- vagy négylábú támbot. Könyökmankó. Hónaljmankó. Járókeret. Rollátor.",
    magyarazat: "A választás a beteg állapotától függ: enyhe segítséghez bot, súlyosabb támogatáshoz mankó vagy járókeret. A rollátor (kerekes járókeret) idős, de viszonylag stabil betegnek ideális."
  },

  // =============================================================
  // ============ DIABETES MELLITUS FINOM RÉSZLETEK =============
  // =============================================================

  {
    tetel: "Diabetes mellitus",
    tipus: "feleletvalasztos",
    kerdes: "A glikált hemoglobin (HbA1c) milyen időtávra ad információt?",
    valaszok: [
      "Aktuális (pillanatnyi) vércukorszint",
      "Előző napi átlag",
      "Hosszú távú (kb. 2-3 hónapos) átlagos vércukorszint",
      "Csak étkezés utáni érték"
    ],
    helyes: 2,
    magyarazat: "A HbA1c 2-3 hónapra visszamenőleg jelzi az átlag vércukorszintet (a vörösvérsejt élettartama miatt). HOSSZÚ távú jelző, nem rövid!"
  },

  {
    tetel: "Diabetes mellitus",
    tipus: "feleletvalasztos",
    kerdes: "Az orális glükóztolerancia-teszt (OGTT) eredményét mennyi idő után kell értékelni?",
    valaszok: [
      "30 perc",
      "1 óra",
      "2 óra",
      "3 óra"
    ],
    helyes: 2,
    magyarazat: "Az OGTT-nél a beteg 75 g glükózt iszik, és 2 óra múlva nézik a vércukrot. Diabetes ha ≥ 11,1 mmol/l."
  },

  {
    tetel: "Diabetes mellitus",
    tipus: "nyitott",
    kerdes: "Mit kell tudni a diabeteses microangiopathiáról és nephropathiáról?",
    valasz: "Microangiopathia: a kis erek (artériák, hajszálerek) károsodása. Elsősorban a SZEM, a VESE és az IDEGEK ereit érinti (NEM az agyat és szívet - azok a macroangiopathia területe). Nephropathia jellemző tünete: albuminuria (fehérje a vizeletben) és hypertonia. A diabetes a szem hajszálereinek károsodását, következményesen látásromlást okoz (retinopathia).",
    magyarazat: "A diabetes szövődményei: szem (retinopathia), vese (nephropathia), idegrendszer (neuropathia), nagy erek (macroangiopathia → infarktus, stroke), láb (diabetes láb)."
  },

  {
    tetel: "Diabetes mellitus",
    tipus: "feleletvalasztos",
    kerdes: "Mi IGAZ az 1-es típusú cukorbetegségről?",
    valaszok: [
      "Kezelésében elegendőek az orális antidiabetikumok",
      "Kialakulása lassú, főleg felnőttkorban",
      "Normál testsúly vagy obesitas jellemző",
      "Inzulinterápia feltétlenül szükséges, autoantitestek mutathatók ki"
    ],
    helyes: 3,
    magyarazat: "Az 1-es típusú DM autoimmun betegség, gyors kialakulás, élethossziglan inzulin szükséges. Az orális antidiabetikum a 2-es típusra való."
  },

  {
    tetel: "Diabetes mellitus",
    tipus: "feleletvalasztos",
    kerdes: "A hypoglykaemiás állapot mivel téveszthető össze?",
    valaszok: [
      "Koffein hatás",
      "Alkoholos vagy kábítószeres befolyásoltság",
      "Allergiás reakció",
      "Asztma roham"
    ],
    helyes: 1,
    magyarazat: "Hypoglikémiás beteg zavart, dadog, eszméletlenséghez közelít → könnyen ittasnak vagy droghatás alattinak tűnhet. Mindig nézz vércukrot!"
  },

  // =============================================================
  // ============ VOLUMENPÓTLÓK MÁRKÁK ==========================
  // =============================================================

  {
    tetel: "Volumenpótlás és parenteralis táplálás",
    tipus: "nyitott",
    kerdes: "Csoportosítsd a volumenpótló infúziós készítményeket: Gelifundol, Isohes, Dextrán 40, Expahes, Gelofusine, Dextrán 70, Heamaccel, Haes-steril, Voluven, Elohast.",
    valasz: "Dextránkészítmények: Dextrán 40, Dextrán 70. Hydroxyetil-keményítő (HES) készítmények: Isohes, Expahes, Haes-steril, Voluven, Elohast. Zselatinkészítmények: Gelifundol, Gelofusine, Heamaccel (Poligeline).",
    magyarazat: "A névből gyakran felismerhető: 'Hes' a HES-eknél, 'Gel' a zselatinoknál, 'Dextrán' a dextránoknál. Ez segíthet."
  },

  {
    tetel: "Volumenpótlás és parenteralis táplálás",
    tipus: "feleletvalasztos",
    kerdes: "A Heamaccel (Poligeline) melyik volumenpótló csoportba tartozik?",
    valaszok: [
      "Dextránkészítmény",
      "HES (hydroxyetil-keményítő)",
      "Zselatinkészítmény",
      "Krisztalloid"
    ],
    helyes: 2,
    magyarazat: "Heamaccel = polimerizált zselatin alapú készítmény."
  },

  // =============================================================
  // ============ VÉRALVADÁS, HAEMOPHILIA =======================
  // =============================================================

  {
    tetel: "Hematológia és transzfúzió",
    tipus: "nyitott",
    kerdes: "Párosítsd: véralvadás fontos faktora, X-kromoszómához kötött öröklődés, extrinsic és intrinsic út, véralvadás celluláris eleme, B-típusú haemophilia.",
    valasz: "Véralvadás fontos faktora → kálcium. X-kromoszómához kötötten öröklődik → haemophilia. Extrinsic és intrinsic útja ismeretes → véralvadási folyamat. Véralvadás celluláris eleme → thrombocyta. B-típusú haemophilia → IX-es faktor hiánya.",
    magyarazat: "A haemophilia A: VIII-as faktor hiány. Haemophilia B: IX-es faktor hiány (Christmas-disease). Mindkettő X-kromoszómához kötött → szinte mindig férfiak betegszenek meg."
  },

  {
    tetel: "Hematológia és transzfúzió",
    tipus: "feleletvalasztos",
    kerdes: "A B-típusú haemophilia melyik faktor hiányát jelenti?",
    valaszok: [
      "VIII-as (8-as) faktor",
      "IX-es (9-es) faktor",
      "XI-es (11-es) faktor",
      "Fibrinogén"
    ],
    helyes: 1,
    magyarazat: "Haemophilia A → VIII-as faktor (gyakoribb). Haemophilia B → IX-es faktor (Christmas-disease)."
  },

  {
    tetel: "Hematológia és transzfúzió",
    tipus: "feleletvalasztos",
    kerdes: "Melyik a véralvadás celluláris (sejtes) eleme?",
    valaszok: [
      "Vörösvérsejt",
      "Limfocita",
      "Thrombocyta (vérlemezke)",
      "Eozinofil"
    ],
    helyes: 2,
    magyarazat: "A thrombocyta = vérlemezke. Először az érfal sérülése után aggregál (összetapad), majd elindítja az alvadási kaszkádot."
  },

  // =============================================================
  // ============ ANATÓMIAI KÉPLETEK A HAS RÉSZÉN ===============
  // =============================================================

  {
    tetel: "Emésztőrendszer és ileus",
    tipus: "nyitott",
    kerdes: "Párosítsd az anatómiai képleteket elhelyezkedési helyükkel: Bauhin-billentyű, Kerckring-redők, Brunner-mirigyek, Lieberkühn-mirigyek, Kupffer-sejtek.",
    valasz: "Bauhin-billentyű → ileocaecalis szájadék (vékonybél-vastagbél átmenet). Kerckring-redők → vékonybelek nyálkahártya redői. Brunner-mirigyek → duodenum (patkóbél) fala. Lieberkühn-mirigyek → vékonybelek nyálkahártyájának kötőszövetes redői. Kupffer-sejtek → májsinus (a máj falófalósejtjei).",
    magyarazat: "Klasszikus tételbe való kérdés. A Bauhin-billentyű meggátolja a vastagbéltartalom visszaáramlását a vékonybélbe."
  },

  {
    tetel: "Emésztőrendszer és ileus",
    tipus: "feleletvalasztos",
    kerdes: "A Bauhin-billentyű hol található?",
    valaszok: [
      "Gyomor-nyombél átmenet",
      "Ileocaecalis szájadék (vékonybél-vastagbél átmenet)",
      "Nyombél-éhbél átmenet",
      "Sigma-rectum határ"
    ],
    helyes: 1,
    magyarazat: "Bauhin = ileocaecalis billentyű. Megakadályozza, hogy a vastagbél bélsártartalma visszaáramoljon a vékonybélbe."
  },

  {
    tetel: "Emésztőrendszer és ileus",
    tipus: "feleletvalasztos",
    kerdes: "Hol találhatók a Kupffer-sejtek?",
    valaszok: [
      "Gyomor falában",
      "Vékonybél nyálkahártyában",
      "Májsinusokban",
      "Hasnyálmirigyben"
    ],
    helyes: 2,
    magyarazat: "Kupffer-sejtek = a máj makrofágjai (falósejtjei). Eltávolítják a véráramból a kórokozókat és sejttörmelékeket."
  },

  // =============================================================
  // ============ VIZELET INCONTINENS ÁLLAPOTFELMÉRÉS ===========
  // =============================================================

  {
    tetel: "Vizeletürítés és vesék",
    tipus: "nyitott",
    kerdes: "Mik a vizelet incontinens betegek állapotfelmérésének főbb lépései?",
    valasz: "Az előfordulás gyakoriságának megállapítása. A vizeletszivárgás mértékének megállapítása (kis mennyiségű gyakori vizeletcsepegés vagy előre nem meghatározható, nagy mennyiségű vizelet ürítése). A kiváltó események (tüsszentés, köhögés, bizonyos mozgások stb.) beazonosítása. A gát bőrére vonatkozó állapotfelmérés. Az ürített vizelet megfigyelése.",
    magyarazat: "A gát bőrének felmérése azért fontos, mert a tartós vizelettel áztatott bőr decubitusra hajlamos."
  },

  // =============================================================
  // ============ FEKÉLYBETEGSÉG SZÖVŐDMÉNYEI ==================
  // =============================================================

  {
    tetel: "Emésztőrendszer és ileus",
    tipus: "nyitott",
    kerdes: "Mik a fekélybetegség lehetséges szövődményei és figyelmeztető tüneteik?",
    valasz: "Vérzés → haematemesis (vérhányás), melaena (fekete kátrányszerű széklet). Perforáció → fájdalom jellegének hirtelen megváltozása, éles 'késszúrásszerű' fájdalom, rekesz alatt látható szabad levegő a röntgen-felvételen. Penetráció → fájdalom jellegének megváltozása, éles késszúrásszerű fájdalom (de NINCS szabad levegő). Pylorostenosis → hányás, gyors fogyás (a gyomorkimenet beszűkülése miatt nem tud továbbhaladni a táplálék).",
    magyarazat: "Perforáció = teljes átfúrás → szabad has, sürgős műtét! Penetráció = a fekély beleér egy szomszédos szervbe, de még körülzárt. A 'kőkemény has' és deszkahas a peritonitis jele."
  },

  {
    tetel: "Emésztőrendszer és ileus",
    tipus: "feleletvalasztos",
    kerdes: "A fekély perforációjára JELLEMZŐ röntgenkép:",
    valaszok: [
      "Tüdőhasadék",
      "Rekesz alatt szabad levegő",
      "Szívnagyobbodás",
      "Bélgáz a felső hasban"
    ],
    helyes: 1,
    magyarazat: "Ha a fekély átfúr, a gyomor levegője a hasüregbe áramlik → felmegy a rekeszizom alá → ott látható félhold-szerűen a rtg-en. Klasszikus 'pneumoperitoneum' jel."
  },

  {
    tetel: "Emésztőrendszer és ileus",
    tipus: "feleletvalasztos",
    kerdes: "A pylorostenosis tipikus tünete:",
    valaszok: [
      "Hasmenés és láz",
      "Hányás és gyors fogyás",
      "Sárgaság és viszketés",
      "Nyelési nehézség"
    ],
    helyes: 1,
    magyarazat: "A pylorus (gyomorkimenet) szűkülete miatt a táplálék nem tud továbbjutni → felgyűlik a gyomorban → hányás, gyors súlyvesztés."
  },

  // =============================================================
  // ============ LATIN BŐVÍTÉS - IDEGRENDSZER ==================
  // =============================================================

  {
    tetel: "Latin - Idegrendszer",
    tipus: "latin",
    latin: "Pons",
    jelentes: "híd (agyhíd, az agytörzs része)",
    kiejtes: "ponsz",
    magyarazat: "Az agytörzs középső része. A nyúltvelő és a középagy között helyezkedik el."
  },

  {
    tetel: "Latin - Idegrendszer",
    tipus: "latin",
    latin: "Cortex cerebri",
    jelentes: "agykéreg",
    kiejtes: "kortex cerebri",
    magyarazat: "A nagyagy felszínén lévő szürkeállomány. Itt zajlanak a magasabb idegi funkciók (gondolkodás, emlékezet, beszéd)."
  },

  {
    tetel: "Latin - Idegrendszer",
    tipus: "latin",
    latin: "Hemispherium cerebri",
    jelentes: "agyfélteke",
    kiejtes: "hemiszférium cerebri",
    magyarazat: "A nagyagy két fele - bal és jobb. A corpus callosum köti össze őket."
  },

  // =============================================================
  // ============ LATIN BŐVÍTÉS - MEDENCEÖV ====================
  // =============================================================

  {
    tetel: "Latin - Medenceöv csontjai",
    tipus: "latin",
    latin: "Os sacrum",
    jelentes: "keresztcsont",
    kiejtes: "ósz szákrum",
    magyarazat: "5 összenőtt csigolyából áll, a gerinc alsó részét képezi."
  },

  {
    tetel: "Latin - Medenceöv csontjai",
    tipus: "latin",
    latin: "Os coxae",
    jelentes: "medencecsont",
    kiejtes: "ósz koxe",
    magyarazat: "3 csontból nőtt össze: ilium, ischium, pubis."
  },

  {
    tetel: "Latin - Medenceöv csontjai",
    tipus: "latin",
    latin: "Os ilium",
    jelentes: "csípőcsont",
    kiejtes: "ósz ilium",
    magyarazat: "A medencecsont legnagyobb, felső része - itt tapintható a 'csípőtaréj'."
  },

  {
    tetel: "Latin - Medenceöv csontjai",
    tipus: "latin",
    latin: "Os ischii",
    jelentes: "ülőcsont",
    kiejtes: "ósz iszki",
    magyarazat: "Üléskor erre a csontra nehezedik a testsúly (tuber ischiadicum = ülőgumó)."
  },

  {
    tetel: "Latin - Medenceöv csontjai",
    tipus: "latin",
    latin: "Os pubis",
    jelentes: "szeméremcsont",
    kiejtes: "ósz pubisz",
    magyarazat: "A medence elülső részén, középen a két csont a symphysis pubicával kapcsolódik."
  },

  // =============================================================
  // ============ LATIN BŐVÍTÉS - MÉH ===========================
  // =============================================================

  {
    tetel: "Latin - Méh anatómia",
    tipus: "latin",
    latin: "Myometrium",
    jelentes: "méh izomzata",
    kiejtes: "miometrium",
    magyarazat: "Ez húzódik össze szülés alatt. Hormonális szabályozás alatt áll."
  },

  {
    tetel: "Latin - Méh anatómia",
    tipus: "latin",
    latin: "Perimetrium",
    jelentes: "méh külső burka (savóshártya)",
    kiejtes: "perimetrium"
  },

  {
    tetel: "Latin - Méh anatómia",
    tipus: "latin",
    latin: "Endometrium",
    jelentes: "méh nyálkahártya",
    kiejtes: "endometrium",
    magyarazat: "Ez 'menstruál' - havonta lehámlik és újraépül. Endometrium-rák a leggyakoribb női daganatok közé tartozik."
  },

  {
    tetel: "Latin - Méh anatómia",
    tipus: "latin",
    latin: "Cavum uteri",
    jelentes: "méhüreg",
    kiejtes: "kávum uteri"
  },

  {
    tetel: "Latin - Méh anatómia",
    tipus: "latin",
    latin: "Cervix uteri",
    jelentes: "méhnyak",
    kiejtes: "cervix uteri",
    magyarazat: "A cervix-rák szűrése = méhnyakrákszűrés (Pap-teszt). HPV ellen ma már védőoltás."
  },

  {
    tetel: "Latin - Méh anatómia",
    tipus: "latin",
    latin: "Fundus uteri",
    jelentes: "méhfenék (felső, kupolaszerű része)",
    kiejtes: "fundusz uteri"
  },

  // =============================================================
  // ============ LATIN BŐVÍTÉS - VÉNÁK =========================
  // =============================================================

  {
    tetel: "Latin - Vénák",
    tipus: "latin",
    latin: "Vena femoralis",
    jelentes: "combvéna",
    kiejtes: "véna femorálisz",
    magyarazat: "Centrális véna - sürgős helyzetben katéterezhető (de fertőzésveszély miatt lehetőleg kerüljük)."
  },

  {
    tetel: "Latin - Vénák",
    tipus: "latin",
    latin: "Vena cephalica",
    jelentes: "fejvéna (a felkar külső oldalán)",
    kiejtes: "véna cefálika",
    magyarazat: "Perifériás véna. A felkar külső oldalán fut, jól szúrható."
  },

  {
    tetel: "Latin - Vénák",
    tipus: "latin",
    latin: "Vena basilica",
    jelentes: "felkar belső oldali véna",
    kiejtes: "véna bazilika",
    magyarazat: "Perifériás. A felkar belső oldalán."
  },

  {
    tetel: "Latin - Vénák",
    tipus: "latin",
    latin: "Vena mediana antebrachii",
    jelentes: "alkar középső vénája",
    kiejtes: "véna mediána antebrákii",
    magyarazat: "A leggyakoribb vérvételi hely - a könyök előtt jól láthatóan és tapinthatóan fut."
  },

  {
    tetel: "Latin - Vénák",
    tipus: "latin",
    latin: "Vena subclavia",
    jelentes: "kulcscsont alatti véna",
    kiejtes: "véna szubklávia",
    magyarazat: "Centrális véna. Itt vezetik be a centrális vénás katétert (CVK)."
  },

  {
    tetel: "Latin - Vénák",
    tipus: "latin",
    latin: "Vena jugularis interna",
    jelentes: "belső nyaki véna",
    kiejtes: "véna juguláris interna",
    magyarazat: "Centrális véna - a nyakon szúrják, gyakran intenzív osztályon."
  },

  {
    tetel: "Latin - Vénák",
    tipus: "latin",
    latin: "Vena saphena magna",
    jelentes: "nagy lábszárvéna",
    kiejtes: "véna szafena magna",
    magyarazat: "Perifériás. A leghosszabb felszíni véna a testben. Visszérbetegségnél gyakran érintett."
  },

  // =============================================================
  // ============ LATIN BŐVÍTÉS - MENSTRUÁCIÓ ==================
  // =============================================================

  {
    tetel: "Latin - Menstruáció",
    tipus: "latin",
    latin: "Regeneratio",
    jelentes: "gyógyulás (menstruáció 1. szakasza)",
    kiejtes: "regeneráció"
  },

  {
    tetel: "Latin - Menstruáció",
    tipus: "latin",
    latin: "Proliferatio",
    jelentes: "kiépülés (menstruáció 2. szakasza)",
    kiejtes: "proliferáció",
    magyarazat: "Az endometrium ösztrogén hatására megvastagszik."
  },

  {
    tetel: "Latin - Menstruáció",
    tipus: "latin",
    latin: "Secretio",
    jelentes: "elválasztás (menstruáció 3. szakasza)",
    kiejtes: "szekréció",
    magyarazat: "Progeszteron hatására az endometrium felkészül a beágyazódásra."
  },

  {
    tetel: "Latin - Menstruáció",
    tipus: "latin",
    latin: "Desquamatio",
    jelentes: "menstruáció (4. szakasz, lehámlás)",
    kiejtes: "deszkvamáció",
    magyarazat: "Ha nincs megtermékenyítés, a hormonszint csökken, az endometrium lehámlik."
  },

  // =============================================================
  // ============ LATIN BŐVÍTÉS - LÁZTÍPUSOK ===================
  // =============================================================

  {
    tetel: "Latin - Láztípusok",
    tipus: "latin",
    latin: "Febris continua",
    jelentes: "állandó láz (38°C felett, ingadozás < 1°C)",
    kiejtes: "febrisz kontinua"
  },

  {
    tetel: "Latin - Láztípusok",
    tipus: "latin",
    latin: "Febris remittens",
    jelentes: "ingadozó láz (ingadozás > 1°C, de nem éri el a láztalanságot)",
    kiejtes: "febrisz remittensz"
  },

  {
    tetel: "Latin - Láztípusok",
    tipus: "latin",
    latin: "Febris intermittens",
    jelentes: "ugráló (intermittáló) láz - ingadozás > 1°C, testhő 37°C alá is csökken",
    kiejtes: "febrisz intermittensz",
    magyarazat: "Tipikus malária esetén."
  },

  {
    tetel: "Latin - Láztípusok",
    tipus: "latin",
    latin: "Febris recurrens",
    jelentes: "visszatérő láz (lázas és láztalan napok ismétlődése)",
    kiejtes: "febrisz rekurrensz"
  },

  {
    tetel: "Latin - Láztípusok",
    tipus: "latin",
    latin: "Febris undulans",
    jelentes: "váltóláz (24 órán túli intervallumban váltakozó lázas-láztalan szakaszok)",
    kiejtes: "febrisz undulansz",
    magyarazat: "Brucellózisra jellemző."
  },

  // =============================================================
  // ============ LATIN BŐVÍTÉS - FERTŐZŐ BETEGSÉGEK ===========
  // =============================================================

  {
    tetel: "Latin - Fertőző betegségek",
    tipus: "latin",
    latin: "Morbilli",
    jelentes: "kanyaró",
    kiejtes: "morbilli",
    magyarazat: "MMR oltás véd ellene. Tipikus tünet: koplikkák a száj nyálkahártyáján, fülmögötti kiütés ami lefelé terjed."
  },

  {
    tetel: "Latin - Fertőző betegségek",
    tipus: "latin",
    latin: "Pertussis",
    jelentes: "szamárköhögés",
    kiejtes: "pertussisz",
    magyarazat: "Kötelező védőoltás (DTP-be). Csecsemőknél életveszélyes lehet."
  },

  {
    tetel: "Latin - Fertőző betegségek",
    tipus: "latin",
    latin: "Rubeola",
    jelentes: "rózsahimlő",
    kiejtes: "rubeola",
    magyarazat: "Terhesség első trimeszterében súlyos magzati károsodást okozhat (rubeola-szindróma)."
  },

  {
    tetel: "Latin - Fertőző betegségek",
    tipus: "latin",
    latin: "Varicella",
    jelentes: "bárányhimlő",
    kiejtes: "varicella",
    magyarazat: "Apró hólyagok testszerte. A vírus a gerincvelő érzőidegcsomókban marad - később övsömör (herpes zoster) formájában visszatérhet."
  },

  {
    tetel: "Latin - Fertőző betegségek",
    tipus: "latin",
    latin: "Typhus abdominalis",
    jelentes: "hastífusz",
    kiejtes: "tifusz abdominálisz",
    magyarazat: "Salmonella typhi okozza, élelmiszer-víz közvetítésével terjed."
  },

  {
    tetel: "Latin - Fertőző betegségek",
    tipus: "latin",
    latin: "Tetanus",
    jelentes: "merevgörcs",
    kiejtes: "tetanusz",
    magyarazat: "Talaj közvetítésével (sebbe kerülve), Clostridium tetani toxin. Védőoltás kötelező."
  },

  {
    tetel: "Latin - Fertőző betegségek",
    tipus: "latin",
    latin: "Diphtheria",
    jelentes: "torokgyík",
    kiejtes: "diftéria",
    magyarazat: "DTP védőoltás véd ellene."
  },

  // =============================================================
  // ============ LATIN BŐVÍTÉS - VIZELETÜRÍTÉS ================
  // =============================================================

  {
    tetel: "Latin - Vizeletürítés",
    tipus: "latin",
    latin: "Diuresis",
    jelentes: "vizeletkiválasztás (egészségesen napi 800-1500 ml)",
    kiejtes: "diurézisz"
  },

  {
    tetel: "Latin - Vizeletürítés",
    tipus: "latin",
    latin: "Polyuria",
    jelentes: "fokozott vizeletürítés (24 óra alatt > 2000 ml)",
    kiejtes: "poliuria",
    magyarazat: "Diabetes mellitus, diabetes insipidus, diuretikumok hatása."
  },

  {
    tetel: "Latin - Vizeletürítés",
    tipus: "latin",
    latin: "Oliguria",
    jelentes: "csökkent vizeletürítés (24 óra alatt < 500 ml)",
    kiejtes: "oliguria",
    magyarazat: "Veseelégtelenség, dehidráció vagy keringési zavar jele."
  },

  {
    tetel: "Latin - Vizeletürítés",
    tipus: "latin",
    latin: "Anuria",
    jelentes: "vizeletkiválasztás szünetelése",
    kiejtes: "anuria",
    magyarazat: "Súlyos veseelégtelenség. Sürgős beavatkozást igényel (dialízis)."
  },

  {
    tetel: "Latin - Vizeletürítés",
    tipus: "latin",
    latin: "Incontinentia urinae",
    jelentes: "vizelet visszatartásának képtelensége",
    kiejtes: "inkontinencia urináé"
  },

  {
    tetel: "Latin - Vizeletürítés",
    tipus: "latin",
    latin: "Ischuria paradoxa",
    jelentes: "fokozott belső nyomás miatti csepegő vizelés telt hólyaggal",
    kiejtes: "iszkúria paradoxa",
    magyarazat: "Túlfolyásos vizelés - a hólyag tele van, csak cseppenként ürül."
  },

  // =============================================================
  // ============ LATIN BŐVÍTÉS - ENDOKRIN BETEGSÉGEK ==========
  // =============================================================

  {
    tetel: "Latin - Endokrin betegségek",
    tipus: "latin",
    latin: "Hyperthyreosis",
    jelentes: "pajzsmirigy túlműködés",
    kiejtes: "hipertireózis",
    magyarazat: "Tünet: tachycardia, exophtalmus, fogyás, hőemelkedés. Pl. Basedow-Graves kór."
  },

  {
    tetel: "Latin - Endokrin betegségek",
    tipus: "latin",
    latin: "Hypothyreosis",
    jelentes: "pajzsmirigy alulműködés",
    kiejtes: "hipotireózis",
    magyarazat: "Tünet: bradycardia, hidegintolerancia, fogyás-érzéketlen hízás, fáradtság, depresszió."
  },

  {
    tetel: "Latin - Endokrin betegségek",
    tipus: "latin",
    latin: "Exophtalmus",
    jelentes: "szem előretüremkedése (hyperthyreosis tünete)",
    kiejtes: "exoftalmusz",
    magyarazat: "Klasszikus Basedow-Graves tünet."
  },

  {
    tetel: "Latin - Endokrin betegségek",
    tipus: "latin",
    latin: "Cushing-szindróma",
    jelentes: "kortizol-túltermelés (mellékvesekéreg betegsége)",
    kiejtes: "kusing szindróma",
    magyarazat: "Tipikus: holdvilágarc, törzsi elhízás, striák, hypertonia, magas vércukor."
  },

  {
    tetel: "Latin - Endokrin betegségek",
    tipus: "latin",
    latin: "Acromegalia",
    jelentes: "szomatotrop hormon (STH) túltermelés felnőttkorban",
    kiejtes: "akromegália",
    magyarazat: "A végtagok és arccsontok megnagyobbodása. Hipofízis adenoma okozza."
  },

  {
    tetel: "Latin - Endokrin betegségek",
    tipus: "latin",
    latin: "Diabetes insipidus",
    jelentes: "ADH-hiányos vízhajtó betegség (NEM cukorbetegség)",
    kiejtes: "diabétesz inszipidusz",
    magyarazat: "Polyuria, polydypsia, alacsony vizelet ozmolaritás. Nem tévesztendő össze a DM-mel."
  },

  {
    tetel: "Latin - Endokrin betegségek",
    tipus: "latin",
    latin: "Phaeochromocytoma",
    jelentes: "mellékvesevelő-daganat (adrenalin túltermelés)",
    kiejtes: "feokromocitóma",
    magyarazat: "Rohamokban jelentkező magas vérnyomás, izzadás, fejfájás, szívdobogás."
  },

  {
    tetel: "Latin - Endokrin betegségek",
    tipus: "latin",
    latin: "Tetania",
    jelentes: "izomgörcsökkel járó kalciumhiány tünete",
    kiejtes: "tetánia",
    magyarazat: "Mellékpajzsmirigy elégtelenség jellemző tünete (carpalspazmus = kéz görcs)."
  },

  {
    tetel: "Latin - Endokrin betegségek",
    tipus: "latin",
    latin: "Rachitis",
    jelentes: "angolkór (gyermekkori D-vitamin hiány)",
    kiejtes: "rakitisz",
    magyarazat: "Hajlott, deformált csontok. Felnőttkori megfelelője az osteomalatia."
  },

  // =============================================================
  // ============ LATIN BŐVÍTÉS - KÓRKÉPEK ======================
  // =============================================================

  {
    tetel: "Latin - Kórképek",
    tipus: "latin",
    latin: "Ulcus ventriculi",
    jelentes: "gyomorfekély",
    kiejtes: "ulkusz ventrikuli",
    magyarazat: "Helicobacter pylori, NSAID-ek, stressz okozhatja. Szövődménye lehet a perforáció."
  },

  {
    tetel: "Latin - Kórképek",
    tipus: "latin",
    latin: "Cirrhosis hepatis",
    jelentes: "májzsugor",
    kiejtes: "cirrózisz hepátisz",
    magyarazat: "Krónikus alkoholfogyasztás, hepatitis C, NAFLD okozza. Szövődmény: oesophagus varix."
  },

  {
    tetel: "Latin - Kórképek",
    tipus: "latin",
    latin: "Glomerulonephritis",
    jelentes: "vesegyulladás (a glomerulusok gyulladása)",
    kiejtes: "glomerulonefritisz",
    magyarazat: "Akut glomerulonephritis tipikusan streptococcus-fertőzés után 1-3 héttel jön."
  },

  {
    tetel: "Latin - Kórképek",
    tipus: "latin",
    latin: "Emphysema pulmonum",
    jelentes: "tüdőtágulás",
    kiejtes: "emfizéma pulmonum",
    magyarazat: "Az alveolusok károsodása - a légzőfelület csökken. Dohányzás a fő ok."
  },

  {
    tetel: "Latin - Kórképek",
    tipus: "latin",
    latin: "Endocarditis",
    jelentes: "szívbelhártya gyulladása",
    kiejtes: "endokarditisz",
    magyarazat: "Bakteriális (gyakran streptococcus) gyulladás a billentyűkön. Vitium szövődhet hozzá."
  },

  {
    tetel: "Latin - Kórképek",
    tipus: "latin",
    latin: "Vitium",
    jelentes: "szívbillentyű-hiba (veleszületett vagy szerzett)",
    kiejtes: "vícium",
    magyarazat: "Pl. mitralis insufficientia, aortastenosis. Endocarditis után gyakran kialakul."
  },

  {
    tetel: "Latin - Kórképek",
    tipus: "latin",
    latin: "Embolia pulmonalis",
    jelentes: "tüdőembólia",
    kiejtes: "embolia pulmonálisz",
    magyarazat: "Hirtelen kialakuló nehézlégzés, mellkasi fájdalom, vérköpés. Életveszélyes."
  },

  {
    tetel: "Latin - Kórképek",
    tipus: "latin",
    latin: "Cor pulmonale",
    jelentes: "tüdőeredetű szívbetegség (jobb kamra terhelése)",
    kiejtes: "kor pulmonále",
    magyarazat: "Krónikus tüdőbetegség → magas tüdőérnyomás → jobb szívfél elégtelenség."
  },

  // =============================================================
  // ============ LATIN BŐVÍTÉS - DM SZÖVŐDMÉNYEK ===============
  // =============================================================

  {
    tetel: "Latin - DM szövődmények",
    tipus: "latin",
    latin: "Microangiopathia",
    jelentes: "kis erek károsodása (DM szövődménye)",
    kiejtes: "mikroangiopátia",
    magyarazat: "Szem (retinopathia), vese (nephropathia), idegek (neuropathia) érintettek."
  },

  {
    tetel: "Latin - DM szövődmények",
    tipus: "latin",
    latin: "Macroangiopathia",
    jelentes: "nagy erek károsodása (DM szövődménye)",
    kiejtes: "makroangiopátia",
    magyarazat: "Infarktus, stroke, alsó végtagi érszűkület."
  },

  {
    tetel: "Latin - DM szövődmények",
    tipus: "latin",
    latin: "Nephropathia",
    jelentes: "vesebetegség (DM szövődménye)",
    kiejtes: "nefropátia",
    magyarazat: "Tünet: albuminuria, hypertonia. Idővel veseelégtelenséghez vezethet."
  },

  {
    tetel: "Latin - DM szövődmények",
    tipus: "latin",
    latin: "Retinopathia",
    jelentes: "szem hátsó pólusának (retina) károsodása",
    kiejtes: "retinopátia",
    magyarazat: "DM hosszú távú szövődménye. Vakságot okozhat."
  },

  {
    tetel: "Latin - DM szövődmények",
    tipus: "latin",
    latin: "Neuropathia",
    jelentes: "idegrendszer károsodása",
    kiejtes: "neuropátia",
    magyarazat: "DM esetén tipikus: 'zokniszerű' érzéskiesés, fájdalmatlan láb-sérülések."
  },

  // =============================================================
  // ============ LATIN BŐVÍTÉS - ILEUS TÍPUSOK =================
  // =============================================================

  {
    tetel: "Latin - Ileus típusok",
    tipus: "latin",
    latin: "Paralyticus ileus",
    jelentes: "renyhe (bénult) bélelzáródás",
    kiejtes: "paralitikusz íleusz",
    magyarazat: "A bélfal simaizomzatának tartós ernyedt állapota. Néma has."
  },

  {
    tetel: "Latin - Ileus típusok",
    tipus: "latin",
    latin: "Strangulatios ileus",
    jelentes: "lefűződéses bélelzáródás",
    kiejtes: "sztrangulácios íleusz",
    magyarazat: "A bél lefűződése, csavarodása, betüremkedése."
  },

  {
    tetel: "Latin - Ileus típusok",
    tipus: "latin",
    latin: "Obstructios ileus",
    jelentes: "elzáródásos bélelzáródás (mechanikus akadály)",
    kiejtes: "obsztrukciós íleusz",
    magyarazat: "Adhesio (műtét utáni heg), idegentest, bélsárpangás, daganat, epekő okozhatja."
  },

  {
    tetel: "Latin - Ileus típusok",
    tipus: "latin",
    latin: "Spasticus ileus",
    jelentes: "görcsös bélelzáródás",
    kiejtes: "szpasztikus íleusz",
    magyarazat: "A bél izomzatának tartós összehúzódása (pl. ólom- vagy nikotinmérgezés)."
  },

  // =============================================================
  // ============ LATIN BŐVÍTÉS - LÉGZÉSI ÁLLAPOTOK ============
  // =============================================================

  {
    tetel: "Latin - Légzési állapotok",
    tipus: "latin",
    latin: "Dyspnoe",
    jelentes: "nehézlégzés",
    kiejtes: "diszpnoé",
    pelda: "Ortopnoe = csak ülve tud lélegezni"
  },

  {
    tetel: "Latin - Légzési állapotok",
    tipus: "latin",
    latin: "Tachypnoe",
    jelentes: "szapora légzés (> 20/perc)",
    kiejtes: "tahipnoé"
  },

  {
    tetel: "Latin - Légzési állapotok",
    tipus: "latin",
    latin: "Bradypnoe",
    jelentes: "lassú légzés (< 12/perc)",
    kiejtes: "bradipnoé"
  },

  {
    tetel: "Latin - Légzési állapotok",
    tipus: "latin",
    latin: "Apnoe",
    jelentes: "légzésleállás",
    kiejtes: "apnoé",
    magyarazat: "Alvási apnoe: ismétlődő rövid légzéskimaradások alvás közben."
  },

  {
    tetel: "Latin - Légzési állapotok",
    tipus: "latin",
    latin: "Kussmaul-légzés",
    jelentes: "mély, szapora légzés (acidosisban)",
    kiejtes: "kuszmaul légzés",
    magyarazat: "Diabéteszes ketoacidosis tipikus tünete - a szervezet a CO2 leadásával kompenzál."
  },

  // =============================================================
  // ============ LATIN BŐVÍTÉS - VÉR ÉS KERINGÉS ==============
  // =============================================================

  {
    tetel: "Latin - Vér és keringés",
    tipus: "latin",
    latin: "Anaemia",
    jelentes: "vérszegénység",
    kiejtes: "anémia",
    pelda: "Vashiányos, vészes (B12-hiány), aplasztikus, haemolytikus"
  },

  {
    tetel: "Latin - Vér és keringés",
    tipus: "latin",
    latin: "Leukocytosis",
    jelentes: "fehérvérsejt-szám növekedése",
    kiejtes: "leukocitózis",
    magyarazat: "Bakteriális fertőzésre, gyulladásra, leukémiára utalhat."
  },

  {
    tetel: "Latin - Vér és keringés",
    tipus: "latin",
    latin: "Trombophlebitis",
    jelentes: "vénagyulladás véralvadékkal",
    kiejtes: "trombofelbítisz",
    magyarazat: "Felületes vagy mélyvénás. Mélyvénás → tüdőembólia veszély!"
  },

  {
    tetel: "Latin - Vér és keringés",
    tipus: "latin",
    latin: "Tachycardia",
    jelentes: "szapora pulzus (> 100/perc)",
    kiejtes: "tahikardia"
  },

  {
    tetel: "Latin - Vér és keringés",
    tipus: "latin",
    latin: "Bradycardia",
    jelentes: "lassú pulzus (< 60/perc)",
    kiejtes: "bradikardia",
    magyarazat: "Sportolóknál fiziológiás. Egyébként szívvezetési zavarra, gyógyszerre utalhat."
  },

  {
    tetel: "Latin - Vér és keringés",
    tipus: "latin",
    latin: "Hypertonia",
    jelentes: "magas vérnyomás",
    kiejtes: "hipertónia",
    magyarazat: "≥ 140/90 Hgmm. A leggyakoribb krónikus betegség."
  },

  {
    tetel: "Latin - Vér és keringés",
    tipus: "latin",
    latin: "Hypotonia",
    jelentes: "alacsony vérnyomás",
    kiejtes: "hipotónia",
    magyarazat: "< 90/60 Hgmm. Lehet fiziológiás (sportolók) vagy kóros (sokk, vérzés)."
  },

  {
    tetel: "Latin - Vér és keringés",
    tipus: "latin",
    latin: "Hypovolaemia",
    jelentes: "alacsony keringő vértérfogat",
    kiejtes: "hipovolémia",
    magyarazat: "Vérzés, kiszáradás, jelentős folyadékvesztés okozhatja."
  },

  {
    tetel: "Latin - Vér és keringés",
    tipus: "latin",
    latin: "Exsiccosis",
    jelentes: "kiszáradás",
    kiejtes: "exszikkózisz",
    magyarazat: "Idős korban gyakori. Tünete: csökkent bőrturgor, szárazság, oliguria."
  },

  // =============================================================
  // ============ LATIN BŐVÍTÉS - ANYAGCSERE ===================
  // =============================================================

  {
    tetel: "Latin - Anyagcsere",
    tipus: "latin",
    latin: "Hyperglykaemia",
    jelentes: "magas vércukor",
    kiejtes: "hiperglikémia"
  },

  {
    tetel: "Latin - Anyagcsere",
    tipus: "latin",
    latin: "Hypoglykaemia",
    jelentes: "alacsony vércukor",
    kiejtes: "hipoglikémia",
    magyarazat: "Életveszélyes lehet! Mindig nézz vércukrot zavart betegnél."
  },

  {
    tetel: "Latin - Anyagcsere",
    tipus: "latin",
    latin: "Acidosis",
    jelentes: "savas vegyhatás (alacsony pH)",
    kiejtes: "acidózis",
    pelda: "Metabolikus, respiratoricus, ketoacidosis"
  },

  {
    tetel: "Latin - Anyagcsere",
    tipus: "latin",
    latin: "Alkalosis",
    jelentes: "lúgos vegyhatás (magas pH)",
    kiejtes: "alkalózis"
  },

  // =============================================================
  // ============ LATIN BŐVÍTÉS - SOKK ÉS ÁLLAPOT ==============
  // =============================================================

  {
    tetel: "Latin - Sokk és állapotok",
    tipus: "latin",
    latin: "Anaphylaxia",
    jelentes: "életveszélyes allergiás reakció",
    kiejtes: "anafilaxia",
    magyarazat: "Generalizált értágulat, légúti elzáródás, vérnyomásesés. Adrenalin sürgős!"
  },

  {
    tetel: "Latin - Sokk és állapotok",
    tipus: "latin",
    latin: "Sepsis",
    jelentes: "vérmérgezés (szisztémás fertőzés)",
    kiejtes: "szepszis",
    magyarazat: "Életveszélyes szisztémás gyulladásos válasz fertőzésre. Sürgős antibiotikum."
  },

  {
    tetel: "Latin - Sokk és állapotok",
    tipus: "latin",
    latin: "Aortaaneurysma",
    jelentes: "aortatágulat (érfaltágulás)",
    kiejtes: "aorta aneurizma",
    magyarazat: "Repedés esetén életveszélyes belső vérzés."
  },

  {
    tetel: "Latin - Sokk és állapotok",
    tipus: "latin",
    latin: "Pericardialis tamponád",
    jelentes: "szívburok-tamponád (folyadék a szívburokban szorítja a szívet)",
    kiejtes: "perikardiális tamponád",
    magyarazat: "Sürgős perikardiocentézist (folyadékleszívás) igényel."
  }

];
