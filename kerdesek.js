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
  }

];
