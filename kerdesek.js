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
  },

  // =============================================================
  // ============ INTERAKTÍV VIZSGAFELADATSOR 2023 ==============
  // =============================================================

  // ----- 1-20: EGY HELYES VÁLASZ -----

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "Jelölje meg a felkar hajlító izmát!",
    valaszok: ["Musculus biceps", "Musculus deltoideus", "Musculus triceps", "Musculus quadriceps"],
    helyes: 0,
    magyarazat: "A biceps brachii a felkar elülső oldalán a könyök hajlítását végzi. A triceps az ellentét: a könyök nyújtója."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "Jelölje meg a jobb szívfél atrio-ventricularis billentyűjét!",
    valaszok: ["Valva semilunaris", "Foramen ovale", "Valva mitralis", "Valva tricuspidalis"],
    helyes: 3,
    magyarazat: "Jobb pitvar és kamra között a HÁROMHEGYŰ (valva tricuspidalis) billentyű. Bal oldalon: kéthegyű (mitralis)."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "Jelölje meg a csontszövetet létrehozó csontképző sejtet!",
    valaszok: ["Osteoblast", "Ossein", "Osteoclast", "Periosteum"],
    helyes: 0,
    magyarazat: "Osteoblast = csontépítő sejt. Osteoclast = csontbontó. Periosteum = csonthártya. Ossein = csont szerves alapanyaga."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "Jelölje meg a vegetatív idegrendszer szimpatikus hatását!",
    valaszok: ["Bélperisztaltika fokozódása", "Hörgők szűkülése", "Pupilla tágulása", "Coronáriák szűkülése"],
    helyes: 2,
    magyarazat: "Szimpatikus = 'fight or flight'. Pupilla TÁGUL, hörgők TÁGULNAK, koszorúserek TÁGULNAK, perisztaltika CSÖKKEN."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "nyitott",
    kerdes: "Mely 3 anatómiai képlet lép ki/be a májkapun (porta hepatis)?",
    valasz: "Arteria hepatica (májartéria - bemegy), ductus hepaticus (epeút - kijön), vena portae (kapuvéna - bemegy).",
    magyarazat: "A májkapu a máj alsó felszínén van. Az érrendszer ez alatt szerveződik. A ductus choledochus már a májkapu UTÁN, a hasnyálmirigybe szállva képződik."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "Felnőtt beteg esetén MELYIK laborérték utal életveszélyre?",
    valaszok: ["Artériás pH: 7,4", "Serum kalium: 6,8 mmol/l", "Serum natrium: 139 mmol/l", "Serum vércukor: 8,7 mmol/l"],
    helyes: 1,
    magyarazat: "Hyperkalaemia! Normál K+: 3,5-5,0 mmol/l. 6,8 már életveszélyes (szívmegállás kockázata). Sürgős kezelés: kalcium-glukonát + glukóz-inzulin."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "Pulzusdeficitről beszélünk, ha…",
    valaszok: [
      "A periférián mért pulzusszám MAGASABB, mint a szívfrekvencia",
      "A periférián mért pulzusszám ALACSONYABB, mint a szívfrekvencia",
      "A periférián mért pulzus szapora és könnyen elnyomható",
      "A systolés vérnyomás alacsonyabb, mint a periférián mért pulzusszám"
    ],
    helyes: 1,
    magyarazat: "Egyes szívütések olyan gyengék, hogy nem érik el a perifériát → ott kevesebb pulzust tapintunk, mint amennyit hallunk a szíven. Tipikus pl. pitvarfibrilláció esetén."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "Milyen kórképre gondol, ha a beteg köpete bőséges, rózsaszínű és habos?",
    valaszok: ["Pneumonia", "Oedema pulmonum (tüdővizenyő)", "Tumor pulmonum", "Tuberculosis"],
    helyes: 1,
    magyarazat: "A 'rózsaszínű, habos köpet' a tüdőoedema klasszikus jele. Bal szívfél elégtelenség miatt a tüdőkapillárisokból folyadék kerül az alveolusokba."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "Jelölje meg a kontrasztanyaggal végzett röntgenvizsgálatot!",
    valaszok: ["Mellkas átvilágítás", "Mellkasi CT angiographia", "Natív koponya CT", "Csontszcintigráfia"],
    helyes: 1,
    magyarazat: "Az 'angiographia' szóból következik: érfestés kontrasztanyaggal. A 'natív' épp azt jelenti: kontrasztanyag NÉLKÜL."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "Az alábbi gyermekkori fertőző betegségek közül MELYIK NEM vírusfertőzés?",
    valaszok: ["Varicella", "Mumps", "Rubeola", "Scarlatina"],
    helyes: 3,
    magyarazat: "Scarlatina (vörheny) = streptococcus baktérium okozza. A többi (bárányhimlő, mumpsz, rózsahimlő) vírusos."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "Hogyan mérjük ki a megfelelő méretű nasopharyngealis tubust (NPA)?",
    valaszok: [
      "Orrcimpa és ádámcsutka közti távolság",
      "Orrcimpa és sternum közti távolság",
      "Szájzug és fülcimpa közti távolság",
      "Orrcimpa és tragus közti távolság"
    ],
    helyes: 3,
    magyarazat: "Orrcimpa - tragus (a fül porcos kis dudora) távolság. Az NPA orron át, gégebemenetig vezet."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "A gyógyszer elszopogatva, helyi hatás céljából - mi a beadási mód neve?",
    valaszok: ["Perlingualis", "Sublingualis", "Buccalis", "Intrathecalis"],
    helyes: 2,
    magyarazat: "Buccalis = arc-szájüregi nyálkahártyán át. Sublingualis = nyelv ALATT (felszívódásra). Perlingualis = nyelv felszínén át."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "Hogyan nevezzük a gyógyszerhatást MEGSZÜNTETŐ folyamatokat?",
    valaszok: ["Gyógyszer dependencia", "Gyógyszer kumuláció", "Gyógyszer elimináció", "Gyógyszer interakció"],
    helyes: 2,
    magyarazat: "Elimináció = kiürülés (metabolizmus + kiválasztás). Kumuláció = felhalmozódás. Compliance = beteg együttműködés. Interakció = gyógyszerek közötti hatás."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "Mi NEM tartozik a fiziológiás szükségletek csoportjába?",
    valaszok: [
      "Pihenés és alvás",
      "Hely- és helyzetváltoztatás",
      "Légzés, gázcsere",
      "Beteg biztonsága"
    ],
    helyes: 3,
    magyarazat: "A biztonság már a magasabb rendű szükségletek közé tartozik (Maslow piramis: 2. szint). Fiziológiás = légzés, étel, ital, alvás, ürítés, mozgás."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "Az erőbehatást követően a területet fájdalom, duzzanat, deformitás és RUGALMASAN RÖGZÜLT ízület jellemzi - mi ez?",
    valaszok: ["Combustio (égés)", "Distorsio (rándulás)", "Contusio (zúzódás)", "Luxatio (ficam)"],
    helyes: 3,
    magyarazat: "Luxatio = ficam: az ízületi felszínek tartósan elcsúszott helyzetbe rögzültek. A 'rugalmasan rögzült' = nem mozgatható, nem szabadul vissza spontán."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "Hogyan ellenőrzöd a nasogastricus szonda pozícióját ileus miatt levezetett szonda után?",
    valaszok: [
      "Ileus esetén tilos minden módszer",
      "30 ml desztillált víz lassú befecskendezésével és hallgatózással",
      "Csak ultrahangos vizsgálattal",
      "30 ml levegő gyors befecskendezésével és közben hallgatózással"
    ],
    helyes: 3,
    magyarazat: "Levegő befecskendezés + fonendoszkóppal hallgatás a gyomor felett. Ha 'bugyborékolást' hallunk → szonda jó helyen. Soha ne folyadékot fecskendezz, amíg nem biztos a pozíció!"
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "Ki jogosult az otthoni szakápolás elrendelésére?",
    valaszok: [
      "Otthonápolási szolgálat vezetője",
      "Beteg háziorvosa",
      "Beteget kezelő kórházi szakorvos",
      "Beteg szakrendelői szakorvosa"
    ],
    helyes: 1,
    magyarazat: "Magyarországon a HÁZIORVOS rendelheti el az otthoni szakápolást. Más szakorvos javasolhat, de a háziorvosé az utolsó szó."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "Melyik fogalom: a megbetegedettek közül milyen arányban halnak meg?",
    valaszok: ["Prevalencia", "Incidencia", "Letalitás", "Mortalitás"],
    helyes: 2,
    magyarazat: "Letalitás = a betegségbe halottak aránya a megbetegedettek közül (= 'milyen veszélyes a betegség'). Mortalitás = halálozási arány a TELJES populációban. Prevalencia = összes eset egy időpontban. Incidencia = új esetek száma."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "Mi a beteg TÁPLÁLTSÁGI állapotának felmérésére alkalmazott pontrendszer?",
    valaszok: ["EWS pontrendszer", "Braden pontrendszer", "GCS pontrendszer", "MUST pontrendszer"],
    helyes: 3,
    magyarazat: "MUST = Malnutrition Universal Screening Tool (tápláltsági állapot). Braden = decubitus rizikó. GCS = tudati állapot. EWS = Early Warning Score (vitális állapot). Morse-Fall = elesésrizikó."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "Az alábbiak közül melyik INVAZÍV betegmonitorozási forma?",
    valaszok: ["Artériás vérnyomásmérés (kanülön át)", "Pulzoximetria", "Köpenyhőmérséklet mérés", "EKG monitorozás"],
    helyes: 0,
    magyarazat: "Az artériás kanülön keresztüli folyamatos vérnyomás-mérés invazív (a kanül átszúrja a bőrt és érfalat). A többi: bőrön keresztül, nem invazív."
  },

  // ----- 21-40: HÁROM HELYES VÁLASZ (NYITOTT FORMÁBAN) -----

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "nyitott",
    kerdes: "Melyek az AGYKOPONYA csontjai? (3 db)",
    valasz: "Os temporale (halántékcsont), os sphenoidale (ékcsont), os parietale (falcsont). [Plus a többi: os frontale = homlokcsont, os occipitale = nyakszirtcsont, os ethmoidale = rostacsont].",
    magyarazat: "Az agykoponya 8 csontból áll. Az os lacrimale, os zygomaticum az ARCKOPONYÁHOZ tartozik."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "nyitott",
    kerdes: "Melyek a gyengén lúgos vegyhatású emésztőnedvek? (3 db)",
    valasz: "Bélnedv, pancreasnedv, epe.",
    magyarazat: "Gyomornedv = SAVAS (HCl). Nyál = közel semleges. Az alsó GI traktus a savas gyomortartalmat semlegesíti és lúgosítja."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "nyitott",
    kerdes: "Mely anatómiai képletek találhatók a mediastinumban (gátorüregben)? (3 db)",
    valasz: "Ductus thoracicus (mellkasi nyirokvezeték), nervus vagus (10. agyideg), thymus (csecsemőmirigy).",
    magyarazat: "Mediastinum = a két tüdő közötti tér. Itt van a szív, nagy erek, légcső, nyelőcső, thymus, nyirokvezetékek. A larynx és epiglottis a nyakon, a ductus pancreaticus a hasüregben van."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "nyitott",
    kerdes: "Mely képletek találhatók a középfülben? (3 db)",
    valasz: "Fülkürt (Eustach-kürt), hallócsontocskák (kalapács, üllő, kengyel), dobüreg.",
    magyarazat: "A csiga és a tömlőcske a BELSŐ fülben van. A kengyel a 3 hallócsont egyike, de a 'hallócsontocskák' már kollektíven utal rájuk."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "nyitott",
    kerdes: "Melyek az agyvelőt és gerincvelőt körbevevő kötőszöveti burkok? (3 db)",
    valasz: "Dura mater (kemény agyhártya), arachnoidea (pókhálóhártya), pia mater (lágy agyhártya).",
    magyarazat: "Sorrend kívülről befelé: dura - arachnoidea - pia. A liquor a subarachnoidealis térben van (arachnoidea és pia között)."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "nyitott",
    kerdes: "Mik az állandó katéteres beteg mikrobiológiai vizeletmintavételi szabályai? (3 db)",
    valasz: "Aszeptikus technikával zártrendszerű mintavétel. A mintavétel előtt 30-60 percre lezárjuk a rendszert (hólyagtelítődés). Zártrendszer hiányában a katétercső fertőtlenítése után megszúrva steril fecskendővel + vékony tűvel.",
    magyarazat: "TILOS: széthúzni a katétert és a zsákot, vagy a zsákból mintát venni - ott a baktériumok elszaporodtak."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "nyitott",
    kerdes: "Mik a hypothyreosis (pajzsmirigy alulműködés) jellegzetes tünetei? (3 db)",
    valasz: "Generalizált myxoedema (tészta-szerű ödéma). Hideggel szembeni fokozott érzékenység (hidegintolerancia). Obstipatio (székrekedés).",
    magyarazat: "Hyper- ellentéte: hyperthyreosisnál tachycardia, melegintolerancia, hasmenés, fogyás. Hypothyreosis-ban: bradycardia, hidegintolerancia, székrekedés, hízás."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "nyitott",
    kerdes: "Mely akut hasi kórképekben van a fájdalomnak jellegzetes punctum maximuma? (3 db)",
    valasz: "Appendicitis (vakbélgyulladás - jobb alsó has). Cholecystitis (epehólyag-gyulladás - jobb felső has). Pancreatitis (hasnyálmirigy-gyulladás - has közepe, hátba sugárzó).",
    magyarazat: "Punctum maximum = a fájdalom legintenzívebb pontja. Peritonitisnél diffúz, az egész has fájdalmas (NEM punctum maximum)."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "nyitott",
    kerdes: "Mik a diabetes mellitusra utaló jellegzetes tünetek? (3 db)",
    valasz: "Polydypsia (fokozott szomjúság), polyuria (sok vizelet), acetonos lehelet (ketosis miatt).",
    magyarazat: "A klasszikus 'P-háromszög': polyuria, polydypsia, polyphagia (fokozott éhség). Acetonos lehelet különösen ketoacidosisban."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "nyitott",
    kerdes: "Mely tünetek esetén gondolj NEUROINFEKCIÓRA? (3 db)",
    valasz: "Fejfájás és láz. Tarkókötöttség (meningismus). Fényérzékenység, fénykerülés (photophobia).",
    magyarazat: "A meningitis klasszikus tünetegyüttese. Sürgős vizsgálatot (lumbal punctio) igényel."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "nyitott",
    kerdes: "Melyek a MINOR analgeticumok? (3 db)",
    valasz: "Metamizol-natrium (Algopyrin), Diclofenac (Voltaren), Paracetamol.",
    magyarazat: "Minor = enyhe-közepes fájdalomra. MAJOR analgeticumok az opiátok: Tramadol, Fentanyl. Narcan = naloxon, opiát-antagonista."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "nyitott",
    kerdes: "Mit kell mérlegelni az IV kanül megválasztásakor? (3 db)",
    valasz: "A beteg érrendszerének, vénáinak állapota. A terápiában alkalmazandó gyógyszerek pH-ja és ozmolaritása. A terápia, kezelés várható hossza.",
    magyarazat: "Magas ozmolaritás vagy szélsőséges pH → centrális véna kell. Hosszú terápia → port-a-cath vagy PICC."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "nyitott",
    kerdes: "Mik az infúziós oldatok speciális terápiás bejuttatási módjai? (3 db)",
    valasz: "Intraarteriális (artériás) bejuttatás. Subcutan (bőr alá) bejuttatás. Intraossealis (csontvelőbe) bejuttatás.",
    magyarazat: "Az intraossealis sürgősségi mód, ha vénát nem találunk (gyermek, sokk). A subcutan hipodermolízis lassú folyadékpótlásra alkalmas (idős beteg)."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "nyitott",
    kerdes: "Hogyan előzzük meg a HYPOSTATICUS PNEUMÓNIÁT? (3 db)",
    valasz: "Megfelelő folyadékbevitel biztosítása. Légzési fizioterápia, váladékfelköhögtetés ösztönzése. Fél-Fowler pozícionálás (a tüdő ventillációjának javítása).",
    magyarazat: "A laposan fekvésnél a tüdő hátsó bázisain pang a váladék → fertőzés. Mozgás, mély légzés, megfelelő pozíció kulcsfontosságú."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "nyitott",
    kerdes: "Mik az enterostomás beteg IRRIGÁLÁSÁNAK szabályai? (3 db)",
    valasz: "Az alkalmazás célja a székletürítés akaratlagos szabályozása. Kétnyílású colostoma esetén NEM javasolt. Nagyobb stoma körüli sérv esetén NEM javasolt.",
    magyarazat: "Az irrigáció = a colostomába öblítő folyadékot juttatunk → kiüríti a vastagbelet → a beteg nem szorul folyamatos zsákviselésre."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "nyitott",
    kerdes: "Bővített Norton skála 23 pont esetén milyen ápolási szabályok? (3 db)",
    valasz: "Profilaktikus kötszerek alkalmazása. Magas specifikációjú habmatrac használata. Kültakaró felmérése és ápolása naponta egyszer.",
    magyarazat: "23 pont = enyhe-mérsékelt rizikó. Súlyosabb rizikónál (alacsonyabb pontszám) dinamikus / légvesztéses matrac és napi 2× ápolás kell."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "nyitott",
    kerdes: "Mik az enterális szondatáplálás lehetséges szövődményei? (3 db)",
    valasz: "Hasmenés a túl gyors adagolás miatt. Gyomorretenció a túl nagy adagok beadása miatt. Hányás a tápszer nagy ozmolaritása miatt.",
    magyarazat: "Lassú, fokozatos bevezetés, kis adagok, alacsony ozmolaritás - mindezek csökkentik a szövődménykockázatot."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "nyitott",
    kerdes: "Mik a non-invazív gépi lélegeztetés fontosabb jellemzői? (3 db)",
    valasz: "Csak a beteg megtartott spontán légzése esetén alkalmazható. A lélegeztetés speciális maszkkal történik. Bőséges légúti váladék esetén használata nem hatékony.",
    magyarazat: "A non-invazív LÉLEKZIK a beteg, csak a gép TÁMOGATJA. Eszméletlen vagy altatott betegnél nem alkalmazható (intubáció kell)."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "nyitott",
    kerdes: "Mik a fogyatékkal élők társadalmi részvételét gátló akadályok? (3 db)",
    valasz: "Oktatási szegregáció. Munkaerőpiaci szegregáció. Az akadálymentesítés elmaradása.",
    magyarazat: "Strukturális/intézményi akadályok. A kórházi ágyak vagy gyógyszerköltség nem ezek közé tartozik."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "nyitott",
    kerdes: "Mik a betegjogi képviselő feladatai? (3 db)",
    valasz: "A beteg írásbeli meghatalmazása alapján vizsgálatot kezdeményez. Tájékoztatja az intézmény dolgozóit a betegjogokról. Segíti a beteget panaszainak írásos megfogalmazásában.",
    magyarazat: "FONTOS: a betegjogi képviselő NEM az egészségügyi intézmény alkalmazottja - az állam nevezi ki, függetlenül kell hogy működjön. Bírósági eljárás indítása nem feladata - azt a beteg maga teszi."
  },

  // ----- 41-60: IGAZ/HAMIS KÉRDÉSEK -----

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "IGAZ vagy HAMIS? A külső levegő nyomásának szerepe van az ízületek összetartásában.",
    valaszok: ["Igaz", "Hamis"],
    helyes: 0,
    magyarazat: "IGAZ. Az ízületi tok zárt rendszer, a légköri nyomás tartja össze a felszíneket (a vákuum elvén). Ezért 'pukkan' az ujj, ha hirtelen széthúzzuk."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "IGAZ vagy HAMIS? A vesék külső tokja a kettős falú Bowman-tok.",
    valaszok: ["Igaz", "Hamis"],
    helyes: 1,
    magyarazat: "HAMIS. A Bowman-tok a glomerulust veszi körül (a nephronon belül). A vese külső tokja a CAPSULA RENALIS (zsírkapsula + rostos burkolat)."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "IGAZ vagy HAMIS? Testünk 60-70%-a víz, amelyből 20% az intracelluláris folyadék.",
    valaszok: ["Igaz", "Hamis"],
    helyes: 1,
    magyarazat: "HAMIS. A testtömeg 60%-a víz, ennek KB. 40%-a INTRACELLULÁRIS, kb. 20%-a EXTRACELLULÁRIS (5% plazma + 15% interstitium)."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "IGAZ vagy HAMIS? Az allergia a szervezet védekező mechanizmusa.",
    valaszok: ["Igaz", "Hamis"],
    helyes: 0,
    magyarazat: "IGAZ. Az allergia immunválasz, csak túlzottan reagál ártalmatlan ingerekre. Az immunmechanizmus alapja a védekezés."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "IGAZ vagy HAMIS? Az oesophagus (nyelőcső) beidegzése akarattól függ.",
    valaszok: ["Igaz", "Hamis"],
    helyes: 1,
    magyarazat: "HAMIS. Csak a felső 1/3 (harántcsíkolt izom) függ az akarattól, az alsó 2/3 simaizom = autonóm idegrendszer szabályozza. A perisztaltika nem akaratlagos."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "IGAZ vagy HAMIS? A pulzoximéter a pulzust ÉS a légzésszámot is számolja.",
    valaszok: ["Igaz", "Hamis"],
    helyes: 1,
    magyarazat: "HAMIS. A pulzoximéter csak SpO2-t és pulzust mér. A légzésszámot mellkas-szenzor vagy hasi mozgás megfigyeléssel mérjük."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "IGAZ vagy HAMIS? Mastectomia műtéten átesett betegnél az érintett oldalon TILOS vérnyomást mérni és vért venni.",
    valaszok: ["Igaz", "Hamis"],
    helyes: 0,
    magyarazat: "IGAZ. A nyirokcsomó-eltávolítás miatt ott nyirokpangás van, lymphoedema fokozódhat, fertőzésveszély nagyobb. Mindig a másik karon szúrjunk és mérjünk."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "IGAZ vagy HAMIS? A légzésfunkció FEV1 értéke a maximális belégzési volument tükrözi.",
    valaszok: ["Igaz", "Hamis"],
    helyes: 1,
    magyarazat: "HAMIS. FEV1 = Forced Expiratory Volume 1 second = az 1. mp alatt KILÉLEGZETT levegő mennyisége. Asztmában és COPD-ben csökken."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "IGAZ vagy HAMIS? Ha mikrobiológiai mintát nem lehet 2 órán belül a laborba eljuttatni, transzport közeges mintavevőt kell használni.",
    valaszok: ["Igaz", "Hamis"],
    helyes: 0,
    magyarazat: "IGAZ. A 2 órás határon túl a baktériumok aránya megváltozhat. Transzport közeg → tartósítja az eredeti flóra arányait."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "IGAZ vagy HAMIS? Peritoneális dialízisnél a hashártya látja el a hemodialízisnél alkalmazott filter funkciót.",
    valaszok: ["Igaz", "Hamis"],
    helyes: 0,
    magyarazat: "IGAZ. A peritoneum (hashártya) természetes féligáteresztő membránként működik. A hasüregbe juttatott dializáló folyadékon át a méreganyagok átkerülnek a vérből a folyadékba."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "IGAZ vagy HAMIS? A transdermalis fájdalomcsillapító tapaszok biológiai hasznosulása exsiccosisban, súlyos hypotoniában jelentősen megemelkedhet.",
    valaszok: ["Igaz", "Hamis"],
    helyes: 0,
    magyarazat: "IGAZ. Kiszáradt vagy alacsony vérnyomású betegnél a bőr keringése csökken → változott felszívódás. Az adagolást módosítani kell."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "IGAZ vagy HAMIS? COPD inhalációs kortikoszteroid alkalmazása súlyos szteroid mellékhatást okoz.",
    valaszok: ["Igaz", "Hamis"],
    helyes: 1,
    magyarazat: "HAMIS. Inhalációs szteroid → helyi hatás, kevés szisztémás felszívódás. A súlyos mellékhatások csak hosszan tartó SZÁJI szteroidnál tipikusak."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "IGAZ vagy HAMIS? Szorongásos zavarban szenvedő betegekkel az ápolónak minél többet kell beszélgetnie.",
    valaszok: ["Igaz", "Hamis"],
    helyes: 0,
    magyarazat: "IGAZ. A szorongó beteg számára az ápoló jelenléte és kommunikációja megnyugtató. Kerülni kell az izolációt."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "IGAZ vagy HAMIS? Öblítő drainen keresztül TILOS antibiotikumot bejuttatni.",
    valaszok: ["Igaz", "Hamis"],
    helyes: 1,
    magyarazat: "HAMIS. Az öblítő drainen át lehet helyileg antibiotikumot juttatni - éppen ez a célja sok esetben (pl. mellüregi öblítés)."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "IGAZ vagy HAMIS? Hasi műtéten átesett betegnek tilos LMWH-t hasba adni, mert hematóma esetén nem ítélhető meg, hogy az műtéti vagy injekciós eredetű.",
    valaszok: ["Igaz", "Hamis"],
    helyes: 1,
    magyarazat: "HAMIS. LMWH-t (alacsony molekulasúlyú heparin) gyakran hasba adunk, csak a műtéti hegtől távol. A hematóma elkülönítése nem ütközik akadályba."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "IGAZ vagy HAMIS? Midline kanülök esetén a transzparens kanülrögzítő kötszert 7 naponta kell cserélni.",
    valaszok: ["Igaz", "Hamis"],
    helyes: 0,
    magyarazat: "IGAZ. Midline kanül = középhosszú perifériás kanül, hetente cseréljük a transzparens kötést (vagy ha sérült, vérzik, ázik)."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "IGAZ vagy HAMIS? A szoptató anyát tájékoztatni kell, hogy szoptatáskor törekedjen az emlők teljes kiürítésére, mert ennek hiányában mastitis alakulhat ki.",
    valaszok: ["Igaz", "Hamis"],
    helyes: 0,
    magyarazat: "IGAZ. Tejpangás → bakteriális szaporodás → mastitis. Ezért fontos a teljes ürítés (akár szoptatás, akár fejés)."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "IGAZ vagy HAMIS? Újonnan felfedezett betegség esetén a betegoktatást először mindig EGYÉNI oktatás keretében javasolt elvégezni.",
    valaszok: ["Igaz", "Hamis"],
    helyes: 0,
    magyarazat: "IGAZ. Az első információadás személyre szabott legyen - tudja meg mit kell, mire képes. Csak utána mehet csoportos oktatásba."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "IGAZ vagy HAMIS? Lumbal punctio után a beteget legalább 2 órát laposan, hátán fektetjük a liquor-csorgás elkerülése céljából.",
    valaszok: ["Igaz", "Hamis"],
    helyes: 0,
    magyarazat: "IGAZ. Lumbal punctio után a fej fájhat (poszt-lumbal punctios fejfájás). 2 órás lapos fektetés csökkenti ezt a kockázatot a liquor-szivárgás minimalizálásával."
  },

  {
    tetel: "Vizsgafeladatsor 2023",
    tipus: "feleletvalasztos",
    kerdes: "IGAZ vagy HAMIS? A tájékoztatáshoz való jog szerint a kiskorú gyermeket nem szükséges tájékoztatni, csak a szüleit.",
    valaszok: ["Igaz", "Hamis"],
    helyes: 1,
    magyarazat: "HAMIS. A kiskorút is életkorának megfelelően kell tájékoztatni. A jog szerint a kiskorú is rendelkezik tájékoztatáshoz való joggal."
  },

  // =============================================================
  // ============ VIZSGAFELADATSOR LATIN BŐVÍTÉS ================
  // =============================================================

  {
    tetel: "Latin - Anatómia (vizsga)",
    tipus: "latin",
    latin: "Musculus biceps",
    jelentes: "kétfejű izom (felkar hajlítója)",
    kiejtes: "muszkulusz biceps",
    magyarazat: "A felkaron a könyök hajlítása. A 'biceps brachii' a legismertebb, de van biceps femoris is (combon)."
  },

  {
    tetel: "Latin - Anatómia (vizsga)",
    tipus: "latin",
    latin: "Musculus triceps",
    jelentes: "háromfejű izom (felkar nyújtója)",
    kiejtes: "muszkulusz triceps",
    magyarazat: "A biceps ellentéte: a könyök nyújtását végzi."
  },

  {
    tetel: "Latin - Anatómia (vizsga)",
    tipus: "latin",
    latin: "Musculus deltoideus",
    jelentes: "deltaizom (a vállon, kar emelője)",
    kiejtes: "muszkulusz deltoideus",
    magyarazat: "Háromszög-alakú izom a vállon. Általában ide adják az intramuscularis injekciót."
  },

  {
    tetel: "Latin - Anatómia (vizsga)",
    tipus: "latin",
    latin: "Osteoblast",
    jelentes: "csontépítő sejt",
    kiejtes: "oszteoblaszt",
    magyarazat: "Aktív csontépítés: új csont képzése, mineralizáció."
  },

  {
    tetel: "Latin - Anatómia (vizsga)",
    tipus: "latin",
    latin: "Osteoclast",
    jelentes: "csontbontó sejt",
    kiejtes: "oszteoklaszt",
    magyarazat: "A csontbontás folyamatos, a csontépítéssel egyensúlyban. Egyensúly felborulása → osteoporosis."
  },

  {
    tetel: "Latin - Anatómia (vizsga)",
    tipus: "latin",
    latin: "Periosteum",
    jelentes: "csonthártya",
    kiejtes: "perioszteum",
    magyarazat: "A csont külső burka. Itt fut sok ér és ideg. Ezért fáj annyira a csonttörés."
  },

  {
    tetel: "Latin - Anatómia (vizsga)",
    tipus: "latin",
    latin: "Vena portae",
    jelentes: "kapuvéna (a hasi szervek vérét a májba viszi)",
    kiejtes: "véna porté",
    magyarazat: "A bél, gyomor, lép, hasnyálmirigy vére itt áramlik a májba. Cirrhosisban a kapuvéna nyomása megnő → varicosus erek (oesophagus varix)."
  },

  {
    tetel: "Latin - Anatómia (vizsga)",
    tipus: "latin",
    latin: "Arteria hepatica",
    jelentes: "májartéria (a máj oxigéndús vérellátása)",
    kiejtes: "artéria hepátika",
    magyarazat: "A hepatica + porta = a máj kettős vérellátása."
  },

  {
    tetel: "Latin - Anatómia (vizsga)",
    tipus: "latin",
    latin: "Ductus choledochus",
    jelentes: "közös epeút",
    kiejtes: "duktus koledokus",
    magyarazat: "Itt egyesülnek a máj és epehólyag vezetékei. Innen jut az epe a duodenumba (Vater-papillán át)."
  },

  {
    tetel: "Latin - Anatómia (vizsga)",
    tipus: "latin",
    latin: "Mediastinum",
    jelentes: "gátorüreg (a két tüdő közötti tér)",
    kiejtes: "mediasztinum",
    magyarazat: "Tartalmazza: szív, nagy erek, légcső, nyelőcső, thymus, nyirokvezeték."
  },

  // ----- TRAUMATOLÓGIAI LATINOK -----

  {
    tetel: "Latin - Trauma",
    tipus: "latin",
    latin: "Combustio",
    jelentes: "égés (égési sérülés)",
    kiejtes: "kombusztió"
  },

  {
    tetel: "Latin - Trauma",
    tipus: "latin",
    latin: "Distorsio",
    jelentes: "rándulás (ízület)",
    kiejtes: "disztorzió",
    magyarazat: "Az ízületi szalagok megnyúlnak, részben elszakadnak. Az ízületi felszínek visszacsúsznak."
  },

  {
    tetel: "Latin - Trauma",
    tipus: "latin",
    latin: "Contusio",
    jelentes: "zúzódás",
    kiejtes: "kontúzió",
    magyarazat: "Tompa erőbehatás → sebzetlen bőr alatt szövetkárosodás (fájdalom, duzzanat, kék folt)."
  },

  {
    tetel: "Latin - Trauma",
    tipus: "latin",
    latin: "Luxatio",
    jelentes: "ficam (ízület tartós kicsúszása)",
    kiejtes: "luxáció",
    magyarazat: "Az ízületi felszínek elcsúsznak és NEM csúsznak vissza. 'Rugalmasan rögzült' helyzet."
  },

  {
    tetel: "Latin - Trauma",
    tipus: "latin",
    latin: "Ruptura",
    jelentes: "szakadás",
    kiejtes: "ruptura",
    pelda: "Achilles-ín ruptura, izomruptura"
  },

  // ----- EPIDEMIOLÓGIAI FOGALMAK -----

  {
    tetel: "Latin - Epidemiológia",
    tipus: "latin",
    latin: "Prevalencia",
    jelentes: "egy adott időpontban a betegek aránya a populációban",
    kiejtes: "prevalencia"
  },

  {
    tetel: "Latin - Epidemiológia",
    tipus: "latin",
    latin: "Incidencia",
    jelentes: "új esetek száma egy időszak alatt",
    kiejtes: "incidencia"
  },

  {
    tetel: "Latin - Epidemiológia",
    tipus: "latin",
    latin: "Letalitás",
    jelentes: "a betegségbe halottak aránya a megbetegedettekhez képest",
    kiejtes: "letalitás"
  },

  {
    tetel: "Latin - Epidemiológia",
    tipus: "latin",
    latin: "Mortalitás",
    jelentes: "halálozási arány a TELJES populációban",
    kiejtes: "mortalitás"
  },

  {
    tetel: "Latin - Epidemiológia",
    tipus: "latin",
    latin: "Morbiditás",
    jelentes: "megbetegedési arány",
    kiejtes: "morbiditás"
  },

  // ----- PUNCTUM MAXIMUM KÓRKÉPEK -----

  {
    tetel: "Latin - Akut hasi kórképek",
    tipus: "latin",
    latin: "Appendicitis",
    jelentes: "vakbélgyulladás",
    kiejtes: "appendicitisz",
    magyarazat: "Punctum maximum: McBurney-pont (jobb csípőtaréj és köldök közötti szakasz külső harmada)."
  },

  {
    tetel: "Latin - Akut hasi kórképek",
    tipus: "latin",
    latin: "Cholecystitis",
    jelentes: "epehólyag gyulladás",
    kiejtes: "kolecisztitisz",
    magyarazat: "Punctum maximum: jobb felső has, bordaív alatt. Murphy-jel pozitív."
  },

  {
    tetel: "Latin - Akut hasi kórképek",
    tipus: "latin",
    latin: "Pancreatitis",
    jelentes: "hasnyálmirigy-gyulladás",
    kiejtes: "pankreatitisz",
    magyarazat: "Has közepe, hátba sugárzó. Súlyos esetben életveszélyes (akut hasnyálmirigy nekrózis)."
  },

  {
    tetel: "Latin - Akut hasi kórképek",
    tipus: "latin",
    latin: "Peritonitis",
    jelentes: "hashártyagyulladás",
    kiejtes: "peritonitisz",
    magyarazat: "Diffúz fájdalom, deszkahas, peritoneális izgalom jelei. Sürgős sebészeti beavatkozás."
  },

  {
    tetel: "Latin - Akut hasi kórképek",
    tipus: "latin",
    latin: "Adnexitis",
    jelentes: "petefészek-gyulladás (vagy a méh függelékeinek gyulladása)",
    kiejtes: "adnexitisz"
  },

  // ----- DIABETES LATIN BŐVÍTÉS -----

  {
    tetel: "Latin - DM tünetei",
    tipus: "latin",
    latin: "Polydypsia",
    jelentes: "fokozott szomjúság",
    kiejtes: "polidipszia",
    magyarazat: "Diabetes mellitus, diabetes insipidus, súlyos kiszáradás tipikus tünete."
  },

  {
    tetel: "Latin - DM tünetei",
    tipus: "latin",
    latin: "Polyphagia",
    jelentes: "fokozott éhségérzet",
    kiejtes: "polifágia",
    magyarazat: "DM klasszikus 'P-háromszöge': polyuria, polydypsia, polyphagia."
  },

  {
    tetel: "Latin - DM tünetei",
    tipus: "latin",
    latin: "Polyglobulia",
    jelentes: "vörösvérsejtszám-növekedés",
    kiejtes: "poliglobulia",
    magyarazat: "Krónikus oxigénhiányban (pl. magashegyi tartózkodás, COPD) kompenzációként alakul ki."
  },

  // ----- ANATÓMIA - KÖZÉPFÜL, AGYHÁRTYÁK -----

  {
    tetel: "Latin - Hallás",
    tipus: "latin",
    latin: "Tuba auditiva",
    jelentes: "fülkürt (Eustach-kürt) - a középfül és garat összeköttetése",
    kiejtes: "tuba auditíva"
  },

  {
    tetel: "Latin - Hallás",
    tipus: "latin",
    latin: "Cavum tympani",
    jelentes: "dobüreg (a középfül központi tere)",
    kiejtes: "kávum timpáni"
  },

  {
    tetel: "Latin - Idegrendszer",
    tipus: "latin",
    latin: "Dura mater",
    jelentes: "kemény agyhártya (a legkülső réteg)",
    kiejtes: "dúra máter",
    magyarazat: "Az agyhártyák legkülső, legvastagabb rétege. A koponyacsonthoz tapad."
  },

  {
    tetel: "Latin - Idegrendszer",
    tipus: "latin",
    latin: "Pia mater",
    jelentes: "lágy agyhártya (a legbelső réteg)",
    kiejtes: "pia máter",
    magyarazat: "Közvetlenül az agyfelszínhez tapad, követi annak barázdáit."
  },

  // ----- TRAUMA-IZOMSZAKADÁS-MASTITIS -----

  {
    tetel: "Latin - Mell és nyirok",
    tipus: "latin",
    latin: "Mastectomia",
    jelentes: "emlő eltávolító műtét",
    kiejtes: "masztektómia",
    magyarazat: "Emlőrák miatt. A nyirokcsomó-eltávolítás miatt az érintett oldalon nem szúrunk és nem mérünk vérnyomást (lymphoedema veszély)."
  },

  {
    tetel: "Latin - Mell és nyirok",
    tipus: "latin",
    latin: "Mastitis",
    jelentes: "emlőgyulladás",
    kiejtes: "masztitisz",
    magyarazat: "Szoptató anyáknál tipikus. Tejpangás → bakteriális (gyakran Staphylococcus) gyulladás."
  },

  // ----- LÉGZÉSI - TÜDŐ KÓRKÉPEK -----

  {
    tetel: "Latin - Tüdő kórképek",
    tipus: "latin",
    latin: "Pneumonia",
    jelentes: "tüdőgyulladás",
    kiejtes: "pneumónia"
  },

  {
    tetel: "Latin - Tüdő kórképek",
    tipus: "latin",
    latin: "Oedema pulmonum",
    jelentes: "tüdővizenyő",
    kiejtes: "ödéma pulmonum",
    magyarazat: "Bal szívfél elégtelenség miatt a tüdőkapillárisokból folyadék kerül az alveolusokba. Tipikus: rózsaszínű habos köpet."
  },

  // ----- VEDŐOLTÁSI BETEGSÉGEK -----

  {
    tetel: "Latin - Fertőző betegségek",
    tipus: "latin",
    latin: "Mumps (Parotitis epidemica)",
    jelentes: "mumpsz (járványos fültőmirigy-gyulladás)",
    kiejtes: "mumpsz",
    magyarazat: "MMR oltás véd ellene. Felnőtt férfiakban a heréket is megtámadhatja (orchitis), ami sterilitást okozhat."
  },

  {
    tetel: "Latin - Fertőző betegségek",
    tipus: "latin",
    latin: "Scarlatina",
    jelentes: "vörheny (Streptococcus baktérium okozta)",
    kiejtes: "szkarlatína",
    magyarazat: "FONTOS: a scarlatina BAKTERIÁLIS, nem vírusos! Kiütések, hosszúkás 'eperszerű' nyelv."
  },

  // ----- EGYÉB FONTOS LATIN KIFEJEZÉSEK -----

  {
    tetel: "Latin - Vegyes",
    tipus: "latin",
    latin: "Punctum maximum",
    jelentes: "a fájdalom legintenzívebb pontja",
    kiejtes: "punktum maximum",
    magyarazat: "Akut hasi kórképeknél diagnosztikus értékű, hol érzi a beteg a legerősebb fájdalmat."
  },

  {
    tetel: "Latin - Vegyes",
    tipus: "latin",
    latin: "Hyperkalaemia",
    jelentes: "magas vér-káliumszint (≥ 5,5 mmol/l)",
    kiejtes: "hiperkalémia",
    magyarazat: "Életveszélyes lehet (szívmegállás kockázata). Kezelés: kalcium-glukonát, glukóz-inzulin."
  },

  {
    tetel: "Latin - Vegyes",
    tipus: "latin",
    latin: "Capsula renalis",
    jelentes: "vesetok (a vese külső burka)",
    kiejtes: "kapszula renálisz",
    magyarazat: "NEM összetévesztendő a Bowman-tokkal! A capsula renalis a vesét körülveszi, a Bowman-tok a glomerulust."
  },

  // =============================================================
  // ============ 2. TÉTEL BŐVÍTÉS - KIDOLGOZOTT VERZIÓ =========
  // =============================================================

  {
    tetel: "2. tétel - Vérvétel és szív",
    tipus: "feleletvalasztos",
    kerdes: "Mikor beszélünk INSTABIL angina pectorisról (preinfarktusos állapotról)?",
    valaszok: [
      "Csak fizikai terhelésre jelentkezik, pihenésre múlik",
      "Nyugalomban is jelentkezik, > 20 percig tart, nitroglicerinre nem múlik",
      "Csak étkezés után, max. 5 perc",
      "Pszichés stresszre, kávéra"
    ],
    helyes: 1,
    magyarazat: "Stabil angina = terheléskor, max. néhány perc, nitroglicerinre múlik. Instabil = NYUGALOMBAN is, hosszabb (> 20 perc), nitroglicerinre kevésbé reagál → infarktus küszöbén. Sürgős kórházi ellátás kell."
  },

  {
    tetel: "2. tétel - Vérvétel és szív",
    tipus: "nyitott",
    kerdes: "Mi az instabil angina pectoris klinikai jellemzői és gyógyszeres kezelése?",
    valasz: "Klinikai jellemzők: a fájdalom nyugalomban is jelentkezhet, hosszabb ideig tart (20 percnél tovább), a szokásos nitroglicerinre kevésbé vagy egyáltalán nem szűnik. Preinfarktusos állapotnak tekintendő. Gyógyszerek: 1) Nitroglicerin - értágító, csökkenti a szív terhelését. 2) Aspirin (vagy más thrombocyta-aggregáció gátló) - megakadályozza a vérrögök további növekedését. 3) Béta-blokkolók - csökkentik a szív oxigénigényét és a pulzusszámot. 4) ACE-gátlók - vérnyomáscsökkentő és szívvédő hatásúak. 5) Statinok - koleszterinszint-csökkentők az érfali plakkok stabilizálására.",
    magyarazat: "5 fő gyógyszercsoport: nitrát, antikoaguláns/aggregáció-gátló, béta-blokkoló, ACE-gátló, statin. Mindegyik más mechanizmussal támad: a sokoldalú megközelítés a kulcs."
  },

  {
    tetel: "2. tétel - Vérvétel és szív",
    tipus: "feleletvalasztos",
    kerdes: "Mi a STATINOK fő szerepe instabil angina pectoris kezelésében?",
    valaszok: [
      "Értágítás",
      "Vérrög-képződés gátlása",
      "Koleszterinszint-csökkentés és érfali plakkok stabilizálása",
      "Pulzusszám csökkentés"
    ],
    helyes: 2,
    magyarazat: "A statinok elsősorban koleszterincsökkentők, de a plakk-stabilizáló hatásuk is fontos: a meglévő érelmeszesedési plakkokat 'bevonják', csökkentik a felrepedés veszélyét."
  },

  {
    tetel: "2. tétel - Vérvétel és szív",
    tipus: "nyitott",
    kerdes: "Mondd el a mellkasi fájdalommal érkező beteg ápolási feladatainak sorrendjét!",
    valasz: "1) Azonnali nyugalomba helyezés - fizikai és pszichés terhelés minimalizálása. 2) Pozicionálás: félig ülő (orthopnoe) helyzet a légzés megkönnyítésére. 3) Monitorozás: vérnyomás, pulzus, szaturáció folyamatos ellenőrzése, 12 elvezetéses EKG készítése. 4) Vénabiztosítás és vérvétel - sürgős labor: szívenzimek (troponin, CK-MB). 5) Oxigénterápia orvosi utasításra, ha a szaturáció alacsony. 6) Adminisztráció: a fájdalom jellegének, helyének és intenzitásának pontos dokumentálása a lázlapon.",
    magyarazat: "A 'sorrend' itt nem mereven kötött, de mindig: NYUGALOM elsőként, utána monitor + vérvétel + EKG egyszerre. Az oxigén csak indikáció esetén (rutinszerűen NEM)."
  },

  {
    tetel: "2. tétel - Vérvétel és szív",
    tipus: "feleletvalasztos",
    kerdes: "A félig ülő pozíció szakneve légzéskönnyítésre:",
    valaszok: [
      "Trendelenburg-helyzet",
      "Orthopnoe helyzet",
      "Fowler-helyzet (ami félig ülő = orthopnoe-ra utal)",
      "Sims-helyzet"
    ],
    helyes: 1,
    magyarazat: "Az 'orthopnoe' tulajdonképpen TÜNETET jelent (csak ülve tud lélegezni), de a beteg fektetésére is használjuk a kifejezést: 'orthopnoe helyzet'. A Fowler-helyzet 45-60° emelt felsőtest - tartalmilag ugyanaz."
  },

  {
    tetel: "2. tétel - Vérvétel és szív",
    tipus: "feleletvalasztos",
    kerdes: "Vérvétel UTÁN miért NE hajlítsa be a beteg a karját?",
    valaszok: [
      "Mert kényelmetlen",
      "Mert véraláfutást (haematomát) okozhat",
      "Mert lassítja a vérvételt",
      "Az igazából teljesen mindegy"
    ],
    helyes: 1,
    magyarazat: "Ha behajlítja, a vénafal sérül és nem zár jól → vér szivárog a szövetek közé → kék folt, fájdalmas. Csak NYÚJTOTT karral nyomjon, vattabuccal, néhány percig."
  },

  {
    tetel: "2. tétel - Vérvétel és szív",
    tipus: "nyitott",
    kerdes: "Mit alkot az endocardium (szívbelhártya) és milyen rétege a szívnek?",
    valasz: "Az endocardium a LEGBELSŐ, vékony fénylő réteg. Béleli a szív üregeit (pitvar, kamra) ÉS alkotja a billentyűket. Ezért a billentyű-betegségek (pl. endocarditis utáni vitium) az endocardium érintettsége miatt alakulnak ki.",
    magyarazat: "3 réteg kívülről befelé: pericardium (kívül), myocardium (közép), endocardium (belül). A billentyűk endocardiumból állnak."
  },

  {
    tetel: "2. tétel - Vérvétel és szív",
    tipus: "feleletvalasztos",
    kerdes: "Miért VASTAGABB a bal kamra fala a jobb kamráénál?",
    valaszok: [
      "Több vér áramlik benne",
      "Nagyobb erővel kell pumpálnia, mert a NAGY vérkört látja el",
      "Korábban fejlődik ki a magzati korban",
      "Más a szívizom típusa"
    ],
    helyes: 1,
    magyarazat: "A bal kamra a teljes testbe pumpálja a vért (nagy vérkör, magas nyomás). A jobb kamra csak a tüdőbe (kis vérkör, alacsony nyomás)."
  },

  {
    tetel: "2. tétel - Vérvétel és szív",
    tipus: "nyitott",
    kerdes: "Milyen szerkezetű a pericardium (szívburok), és mi a feladata?",
    valasz: "A pericardium a szívet kívülről borító KETTŐS FALÚ zsák. A két lemez (visceralis és parietalis) között savós folyadék van. Védelmet nyújt a szívnek és biztosítja a SÚRLÓDÁSMENTES elmozdulást a mellkasban a szívösszehúzódások közben.",
    magyarazat: "Pericarditis (szívburokgyulladás) → a két lemez egymáson dörzsölődik → mellkasi fájdalom, súrlódási hang. Tamponád → folyadék a két lemez között szorítja a szívet."
  },

  {
    tetel: "2. tétel - Vérvétel és szív",
    tipus: "feleletvalasztos",
    kerdes: "Melyik ér indul ki a JOBB kamrából?",
    valaszok: [
      "Aorta",
      "Truncus pulmonalis (tüdőartéria)",
      "Vena cava superior",
      "Sinus coronarius"
    ],
    helyes: 1,
    magyarazat: "Truncus pulmonalis = a tüdőartéria törzse. A jobb kamrából indul, oxigénszegény vért szállít a tüdőbe. A bal kamrából az AORTA indul."
  },

  {
    tetel: "2. tétel - Vérvétel és szív",
    tipus: "nyitott",
    kerdes: "Hogyan kapcsolódnak a szív üregei a nagyerekhez? (mind a 4 üreg)",
    valasz: "JOBB PITVAR: ide érkezik a test felől a vena cava superior és inferior, valamint a szív saját vénás vére (sinus coronarius). JOBB KAMRA: innen indul a truncus pulmonalis (tüdőartéria), ami oxigénszegény vért szállít a tüdő felé. BAL PITVAR: ide érkezik a tüdő felől a 4 vena pulmonalis (oxigéndús vér). BAL KAMRA: innen indul az aorta (főverőér), ami a szervezet egészébe továbbítja az oxigéndús vért.",
    magyarazat: "Vér útja: test → vena cava → JP → JK → trunc. pulm. → tüdő → vena pulmonalis → BP → BK → aorta → test. A jobb fél = kis vérkör (tüdő), a bal fél = nagy vérkör (test)."
  },

  // ----- ÚJ LATIN SZAVAK -----

  {
    tetel: "Latin - Anatómia",
    tipus: "latin",
    latin: "Truncus pulmonalis",
    jelentes: "tüdőartéria-törzs (a jobb kamrából indul)",
    kiejtes: "trunkusz pulmonálisz",
    magyarazat: "A jobb kamrából kilépve két ágra (jobb és bal arteria pulmonalis) válik. Oxigénszegény vért szállít a tüdőbe."
  },

  {
    tetel: "Latin - Anatómia",
    tipus: "latin",
    latin: "Sinus coronarius",
    jelentes: "koszorúér öböl (a szív saját vénás vére ide gyűlik, majd a jobb pitvarba ürül)",
    kiejtes: "szinusz koronáriusz",
    magyarazat: "A myocardiumot ellátó koszorúerek vénás vére itt gyűlik össze, és a jobb pitvarba ürül."
  },

  {
    tetel: "Latin - Légzési állapotok",
    tipus: "latin",
    latin: "Orthopnoe",
    jelentes: "csak ülve / félig ülve tud lélegezni",
    kiejtes: "ortopnoé",
    magyarazat: "Bal szívfél elégtelenség jellegzetes tünete. Fektetésnél a tüdővéna pangás fokozódik, a beteg fuldoklik. Ülve a gravitáció segít. Az 'orthopnoe helyzet' = félig ülő pozíció."
  },

  // =============================================================
  // ============ 3. TÉTEL BŐVÍTÉS - KIDOLGOZOTT VERZIÓ =========
  // =============================================================

  {
    tetel: "3. tétel - Légzés és oxigénterápia",
    tipus: "feleletvalasztos",
    kerdes: "Mit jelent a 'W csoport' a köpetmintavétellel kapcsolatban?",
    valaszok: [
      "A vízzel keverhető mintákat",
      "Súlyos fertőző betegségeket (pl. meningitis, szepszis), amik fokozott elővigyázatot igényelnek",
      "A wéres váladékot",
      "A reggeli (Wake-up) első köpetet"
    ],
    helyes: 1,
    magyarazat: "W csoport = a különösen veszélyes kórokozók osztálya (Weiterleitungsbeschränkt - továbbítási korlátozott). Ide tartozik pl. meningitis, szepszis. Védőfelszerelés és különleges szállítási előírások szükségesek."
  },

  {
    tetel: "3. tétel - Légzés és oxigénterápia",
    tipus: "feleletvalasztos",
    kerdes: "Mi a REDUKTOR funkciója az oxigénpalackon?",
    valaszok: [
      "Felmelegíti az oxigént",
      "Nyomáskiegyenlítő - csökkenti a palackban lévő nagy nyomást használható szintre",
      "Mérő, ami mutatja a maradék gáz mennyiségét",
      "Szelep, ami kinyitja a palackot"
    ],
    helyes: 1,
    magyarazat: "A reduktor (vagy 'nyomáscsökkentő') a palackban uralkodó nagy nyomást (akár 200 bar) lecsökkenti olyan szintre, amilyen a betegnek adható (1-2 bar). Áramlásmérővel együtt szabályozza a perces áramlást."
  },

  {
    tetel: "3. tétel - Légzés és oxigénterápia",
    tipus: "nyitott",
    kerdes: "Mondd el a 3. tétel teljes vázlatát! (állapotfelmérés → légzés megfigyelés → köpetmintavétel → oxigénterápia → inhalációs terápia)",
    valasz: "1) ÁLLAPOTFELMÉRÉS: tájékoztatás, azonosítás, intimitás. Pozicionálás félig ülve (45-60°). Vitális paraméterek (RR, P, hőmérséklet, légzésszám). Oxigénszaturáció (SpO2). Anamnézis: gyógyszerek, leletek, láz időtartam, lázcsillapító. Felső légúti fertőzés tünetei: torokfájás, köhögés, orrdugulás, fejfájás, láz, sárgás-zöldes orrfolyás. 2) LÉGZÉS MEGFIGYELÉSE: ritmus, légzésszám, mellkasi kitérés szimmetriája, dyspnoe foka, segédizmok, orrszárnyi légzés, telt nyaki vénák, köpet (szín, szag, állag, mennyiség, tartalom). 3) KÖPETMINTAVÉTEL: cél = kórokozó kimutatása. Reggeli első friss köpet, előtte nincs evés-ivás-szájápolás. W csoport (meningitis, szepszis) fokozott elővigyázat. Eszközök: köpőcsésze, vesetál, gumikesztyű, papírvatta, ágyvédelem. Felcímkézve laborba vagy ÁNTSZ-be. 4) OXIGÉNTERÁPIA: cél = vér oxigénszintjének stabilizálása. Biztonság: NYÍLT LÁNG TILOS! Eszközök: palack, reduktor, desztillált víz vagy sóoldat (párásítás), orrkatéter/maszk, összekötő cső. Menete: összeszerelés, párásító feltöltése, áramlás beállítása (általában 4 l/perc). Palack: először reduktort, utána palackot nyitjuk; záráskor fordítva. Megfigyelés: kardiális tünetek, szaturáció, bőrszín. 5) INHALÁCIÓS TERÁPIA: célja a légzőizmok erősítése és fizikai terhelhetőség javítása. Módszer: irányított ki- és belégzési légzőgyakorlatok.",
    magyarazat: "Ez a teljes szóbeli felmondás struktúrája. Vizsgán logikus sorrend: betegtől indul az állapotfelmérés, aztán specifikusan a légzésre koncentrálunk, mintát veszünk, oxigént adunk, és gyakorlatokkal segítjük."
  },

  {
    tetel: "3. tétel - Légzés és oxigénterápia",
    tipus: "feleletvalasztos",
    kerdes: "Az oxigénpalack zárásánál mi a HELYES sorrend?",
    valaszok: [
      "Először a palackot, utána a reduktort",
      "Először a reduktort, utána a palackot",
      "Egyszerre kell zárni",
      "Mindegy, melyik sorrendben"
    ],
    helyes: 0,
    magyarazat: "ZÁRÁSKOR FORDÍTVA: először a palackot, utána a reduktort. Nyitásnál: először a reduktort, utána a palackot. (A reduktor mindig 'felénk' van - ez segít megjegyezni: nyitásnál mi vagyunk az utolsó láncszem.)"
  },

  // =============================================================
  // ============ 5. TÉTEL - FIZIKÁLIS VIZSGÁLAT, SZÉKLET =======
  // =============================================================

  {
    tetel: "5. tétel - Fizikális vizsgálat és széklet",
    tipus: "nyitott",
    kerdes: "Sorold fel a fizikális vizsgálat 5 módszerét!",
    valasz: "1) Megtekintés (inspekció). 2) Tapintás (palpáció). 3) Kopogtatás (perkusszió). 4) Hallgatózás (auszkultáció). 5) Szaglás.",
    magyarazat: "Klasszikus '4 érzékszerv': látás, tapintás, kopogtatás (= hallás kombinálva tapintással), hallgatózás. A szaglás az 5. - egyes betegségek jellegzetes szaggal járnak."
  },

  {
    tetel: "5. tétel - Fizikális vizsgálat és széklet",
    tipus: "feleletvalasztos",
    kerdes: "Melyik vizsgálati módszer méri a SZERVEK GÁZTARTALMÁT (pl. hasi puffadás, mellkasi folyadék)?",
    valaszok: ["Inspekció", "Palpáció", "Perkusszió (kopogtatás)", "Auszkultáció"],
    helyes: 2,
    magyarazat: "A perkusszió: a testfelszínre mért ütésekkel keltett hangokból következtetünk. Telt szerv = tompa hang, gáz = dobszerű (timpanikus) hang."
  },

  {
    tetel: "5. tétel - Fizikális vizsgálat és széklet",
    tipus: "nyitott",
    kerdes: "Mit figyelünk meg INSPEKCIÓVAL (megtekintéssel)?",
    valasz: "A beteg egészének vagy egyes testrészeinek megfigyelése. Figyeljük: bőr színét, turgorát (rugalmasságát), tisztaságát, esetleges ödémákat, beteg testtartását, mozgását és arckifejezését.",
    magyarazat: "Az inspekció a legelső és gyakran legfontosabb vizsgálati módszer. A beteg már a szobába belépéskor sok mindent elárul magáról."
  },

  {
    tetel: "5. tétel - Fizikális vizsgálat és széklet",
    tipus: "nyitott",
    kerdes: "Mit vizsgálunk PALPÁCIÓVAL (tapintással)?",
    valasz: "Bőr hőmérsékletét és nedvességét. Szervek helyzetét, nagyságát. Nyomásérzékenységet, csomókat. Pulzust.",
    magyarazat: "Hideg-meleg kontrasztot mindig hasonlítjuk: bal-jobb kézhát = ugyanolyan? Vagy egyik végtag hűvösebb (érelzáródás gyanú)?"
  },

  {
    tetel: "5. tétel - Fizikális vizsgálat és széklet",
    tipus: "nyitott",
    kerdes: "Mit hallgatunk AUSZKULTÁCIÓVAL (hallgatózással)?",
    valasz: "A szervezetben keletkező hangok (fonendoszkóppal): szívhangok, tüdőhangok (légzési zörejek), bélhangok.",
    magyarazat: "Klasszikus tüdőzörejek: szörcszörej (folyadék), sípolás (asztma), pattogás (atelectasia). Bélhangok: élénk (gyulladás), csengő (ileus), néma (paralyticus ileus)."
  },

  {
    tetel: "5. tétel - Fizikális vizsgálat és széklet",
    tipus: "nyitott",
    kerdes: "Milyen jellegzetes szagok árulkodóak (szaglás)?",
    valasz: "Acetonos lehelet → cukorbetegség (ketoacidosis). Ammóniás szag → veseelégtelenség. Bűzös váladékok → gennyes folyamat. Édeskés szag → gangrena, súlyos szepszis.",
    magyarazat: "A szaglás 'ősi' diagnosztikai módszer - de máig hasznos."
  },

  // ----- SZÉKLET MEGFIGYELÉSE -----

  {
    tetel: "5. tétel - Fizikális vizsgálat és széklet",
    tipus: "nyitott",
    kerdes: "Mit figyelünk meg a széklet vizsgálatakor? (6 szempont)",
    valasz: "1) Gyakoriság (normálisan napi 1-2x, heti 3 - napi 3 elfogadható). 2) Mennyiség (100-200 g, függ az ételtől). 3) Állag (normálisan formált hengeres; lehet kemény-bogyós, kenőcsös, híg-vizes). 4) Szín (normálisan barna - sterkobilin miatt). 5) Szag (jellegzetes; kóros: savanyú = erjedés, bűzös = rothadás). 6) Összetétel (normálisan nincs benne emésztetlen étel-rostokon kívül-vér, genny, nyák, paraziták).",
    magyarazat: "A széklet vizsgálata diagnosztikai 'aranybánya'. A laikusoknak kínos téma, de pontos megfigyelés sok betegséget jelez korán."
  },

  {
    tetel: "5. tétel - Fizikális vizsgálat és széklet",
    tipus: "feleletvalasztos",
    kerdes: "A széklet normál BARNA színét melyik festékanyag adja?",
    valaszok: ["Bilirubin", "Sterkobilin", "Hemoglobin", "Karotin"],
    helyes: 1,
    magyarazat: "A sterkobilin a bilirubin lebomlási terméke a vastagbélben. Ezért az epeút elzáródásánál (amikor nincs bilirubin az emésztőrendszerben) a széklet AGYAGSZÍNŰ (acholiás)."
  },

  {
    tetel: "5. tétel - Fizikális vizsgálat és széklet",
    tipus: "feleletvalasztos",
    kerdes: "MELAENA (szurokszéklet) jellemzői és jelentése:",
    valaszok: [
      "Vörös csíkos, alsó tápcsatorna vérzés",
      "Fekete, fényes, kenőcsös - FELSŐ tápcsatorna vérzés (gyomor, nyombél)",
      "Világos szürke, májbetegség",
      "Zöldes, gyulladás"
    ],
    helyes: 1,
    magyarazat: "A felső tápcsatornai vér átmegy a gyomorsavon és a teljes emésztőrendszeren, ezért megfeketedik. Friss vér csak az alsó szakaszról kerül ki."
  },

  {
    tetel: "5. tétel - Fizikális vizsgálat és széklet",
    tipus: "feleletvalasztos",
    kerdes: "FRISS VÉRES (piros csíkos) széklet jellemzően mire utal?",
    valaszok: [
      "Felső tápcsatorna vérzés",
      "Alsó tápcsatorna vérzés vagy aranyér",
      "Májzsugor",
      "Hasnyálmirigy gyulladás"
    ],
    helyes: 1,
    magyarazat: "A friss piros vér nem volt időben emésztősavakkal érintkezésben → az alsó szakaszról (rectum, sigma, vastagbél, vagy aranyér) származik."
  },

  {
    tetel: "5. tétel - Fizikális vizsgálat és széklet",
    tipus: "feleletvalasztos",
    kerdes: "AGYAGSZÍNŰ (acholiás) széklet jellemző oka:",
    valaszok: [
      "Vastartalmú gyógyszerek",
      "Vastagbél daganat",
      "Epeút-elzáródás (epekő)",
      "Hasmenés"
    ],
    helyes: 2,
    magyarazat: "Acholias = epe nélküli. Ha az epe nem jut a bélbe (kőtörés, daganat), akkor nincs sterkobilin → szürkésfehér 'agyagszínű' széklet. + a beteg sárgaságos lesz, mert a bilirubin a vérben felhalmozódik."
  },

  {
    tetel: "5. tétel - Fizikális vizsgálat és széklet",
    tipus: "nyitott",
    kerdes: "Hogyan befolyásolja a táplálék és a gyógyszer a széklet színét?",
    valasz: "Étel: cékla → pirosas. Spenót → zöldes. Gyógyszer: vas-tartalmú szerek → fekete (de NEM melaena!). Aktív szén → fekete. Bizonyos antibiotikumok → színváltozás.",
    magyarazat: "A vasos-fekete szék NEM EGYENLŐ melaenával. Anamnézis kell: mit szed a beteg? Hesemoccult tesztet érdemes csinálni gyanú esetén."
  },

  // ----- HASMENÉS ÉS SZÉKREKEDÉS -----

  {
    tetel: "5. tétel - Fizikális vizsgálat és széklet",
    tipus: "nyitott",
    kerdes: "Mi a hasmenés (diarrhoea) - okai és veszélyei?",
    valasz: "Hasmenés = gyakori, híg székletürítés. Okai: fertőzések, ételmérgezés, gyulladásos bélbetegségek, stressz. Veszélyek: gyors kiszáradás (dehidráció) és elektrolitvesztés.",
    magyarazat: "Csecsemőknél és időseknél különösen veszélyes: 24-48 óra alatt halálos lehet az exsiccosis. Folyadék- és elektrolitpótlás kulcs."
  },

  {
    tetel: "5. tétel - Fizikális vizsgálat és széklet",
    tipus: "nyitott",
    kerdes: "Mi a székrekedés (obstipatio) - okai?",
    valasz: "Obstipatio = ritka, nehéz ürítés, kemény széklet. Okai: rostszegény táplálkozás, kevés folyadékfogyasztás, mozgáshiány, bizonyos gyógyszerek mellékhatása (pl. opiátok, antikolinerg szerek).",
    magyarazat: "Időseknél, ágyban fekvő betegeknél nagyon gyakori. Megelőzés: rost, folyadék, mozgás. Krónikus obstipatio kivizsgálandó (pl. vastagbéldaganat)."
  },

  {
    tetel: "5. tétel - Fizikális vizsgálat és széklet",
    tipus: "feleletvalasztos",
    kerdes: "A hasmenés legveszélyesebb azonnali következménye:",
    valaszok: [
      "Vérzés a bélben",
      "Dehidráció és elektrolitvesztés",
      "Sárgaság",
      "Vérnyomás-emelkedés"
    ],
    helyes: 1,
    magyarazat: "Hasmenéskor sok víz és só (Na, K) vész. Csecsemőkben és időseknél órák alatt drámai kiszáradás lehet. Pótolni kell oralis rehidrációval vagy iv. infúzióval."
  },

  // ----- FIZIKÁLIS VIZSGÁLAT ESZKÖZEI -----

  {
    tetel: "5. tétel - Fizikális vizsgálat és széklet",
    tipus: "nyitott",
    kerdes: "Sorold fel a fizikális vizsgálat tálcán szereplő 8 eszközt!",
    valasz: "1) Mérleg és magasságmérő (testsúly, BMI). 2) Fonendoszkóp (hallgatózás). 3) Vérnyomásmérő (sphygmomanometer). 4) Lázmérő (testhőmérséklet). 5) Nyelvlapoc (spatula) és zseblámpa (torok, pupillák). 6) Reflexkalapács (reflexek). 7) Mérőszalag / centi (has körfogat, végtag duzzanat). 8) Gumikesztyű (higiénia, fertőzésvédelem).",
    magyarazat: "Modern eszközök: pulzoximéter, otoscope, ophthalmoscope, glucometer is ezek mellé. Az alap-tálca a kórházi általános vizsgálathoz elég."
  },

  {
    tetel: "5. tétel - Fizikális vizsgálat és széklet",
    tipus: "feleletvalasztos",
    kerdes: "Hogy hívják a vérnyomásmérőt szakszóval?",
    valaszok: ["Stethoscope", "Sphygmomanometer", "Tonometer", "Manometer"],
    helyes: 1,
    magyarazat: "Sphygmo- = pulzus, manometer = nyomásmérő. A 'tonometer' szemnyomás-mérő."
  },

  // ----- ÖSSZEFOGLALÓ NYITOTT KÉRDÉS -----

  {
    tetel: "5. tétel - Fizikális vizsgálat és széklet",
    tipus: "nyitott",
    kerdes: "Mondd el a teljes 5. tétel vázlatát! (fizikális vizsgálat módszerei → széklet megfigyelése → defekáció zavarai → eszközök)",
    valasz: "1) FIZIKÁLIS VIZSGÁLATI MÓDSZEREK: a) Inspekció (megtekintés): bőrszín, turgor, ödémák, testtartás. b) Palpáció (tapintás): bőrhőmérséklet, szerv-helyzet, csomók, pulzus. c) Perkusszió (kopogtatás): szervek határai, gáztartalom. d) Auszkultáció (hallgatózás): szív-, tüdő-, bélhangok. e) Szaglás: aceton (DM), ammónia (vese), bűzös váladék. 2) SZÉKLET MEGFIGYELÉSE: gyakoriság (napi 1-2x), mennyiség (100-200 g), állag (formált), szín (barna - sterkobilin), szag, összetétel. Kóros színek: melaena (fekete = felső GI vérzés), friss véres (alsó GI vagy aranyér), agyagszín (acholiás = epeút-elzáródás). 3) DEFEKÁCIÓ ZAVARAI: hasmenés (diarrhoea) - veszély: dehidráció. Székrekedés (obstipatio) - okai: rostszegény, kevés folyadék, mozgáshiány, gyógyszerek. 4) ESZKÖZÖK: mérleg + magasságmérő, fonendoszkóp, sphygmomanometer, lázmérő, nyelvlapoc + zseblámpa, reflexkalapács, mérőszalag, gumikesztyű.",
    magyarazat: "Vizsga felmondási struktúra: módszerek → konkrét megfigyelés (széklet) → eltérések → eszközök. Logikus haladás."
  },

  // ----- ÚJ LATIN SZAVAK -----

  {
    tetel: "Latin - Fizikális vizsgálat",
    tipus: "latin",
    latin: "Inspectio",
    jelentes: "megtekintés",
    kiejtes: "inszpekció",
    magyarazat: "A vizsgálati sor első lépése. Néha a beteg már belépéskor felismerhető diagnózissal érkezik."
  },

  {
    tetel: "Latin - Fizikális vizsgálat",
    tipus: "latin",
    latin: "Palpatio",
    jelentes: "tapintás",
    kiejtes: "palpáció"
  },

  {
    tetel: "Latin - Fizikális vizsgálat",
    tipus: "latin",
    latin: "Percussio",
    jelentes: "kopogtatás",
    kiejtes: "perkusszió",
    magyarazat: "Az ujjbeggyel a testfelszínre ütünk - a hang minőségéből (tompa, dobszerű) következtetünk."
  },

  {
    tetel: "Latin - Fizikális vizsgálat",
    tipus: "latin",
    latin: "Auscultatio",
    jelentes: "hallgatózás (fonendoszkóppal)",
    kiejtes: "auszkultáció"
  },

  {
    tetel: "Latin - Fizikális vizsgálat",
    tipus: "latin",
    latin: "Defecatio",
    jelentes: "székletürítés",
    kiejtes: "defekáció"
  },

  {
    tetel: "Latin - Fizikális vizsgálat",
    tipus: "latin",
    latin: "Diarrhoea",
    jelentes: "hasmenés",
    kiejtes: "diarrhoé",
    magyarazat: "Görög eredetű: dia = át, rhein = folyni. Veszélye: kiszáradás."
  },

  {
    tetel: "Latin - Fizikális vizsgálat",
    tipus: "latin",
    latin: "Obstipatio",
    jelentes: "székrekedés",
    kiejtes: "obsztipáció"
  },

  {
    tetel: "Latin - Fizikális vizsgálat",
    tipus: "latin",
    latin: "Acholiás széklet",
    jelentes: "agyagszínű (epe nélküli) széklet",
    kiejtes: "akóliás",
    magyarazat: "A- = nélküli, chole = epe. Epeút-elzáródás jele. Sárgaság kíséri (a bilirubin a vérben felhalmozódik)."
  },

  {
    tetel: "Latin - Fizikális vizsgálat",
    tipus: "latin",
    latin: "Sphygmomanometer",
    jelentes: "vérnyomásmérő",
    kiejtes: "sfigmomanométer",
    magyarazat: "Sphygmo = pulzus, manometer = nyomásmérő."
  },

  // =============================================================
  // ============ 7. TÉTEL - LÉGZÉS, POZICIONÁLÁS, ÁTADÁS =======
  // =============================================================

  {
    tetel: "7. tétel - Légzés, Fowler, betegátadás",
    tipus: "feleletvalasztos",
    kerdes: "Mennyi a felnőtt nyugalmi légzésszáma?",
    valaszok: ["6-10 / perc", "12-16 / perc", "20-25 / perc", "30-40 / perc"],
    helyes: 1,
    magyarazat: "Felnőtt nyugalmi légzésszám: 12-16 / perc (egyes források szerint 12-20). 20 felett tachypnoe, 12 alatt bradypnoe."
  },

  {
    tetel: "7. tétel - Légzés, Fowler, betegátadás",
    tipus: "nyitott",
    kerdes: "Mit kell rögzíteni a légzés vizsgálatakor? (6 jellemző)",
    valasz: "1) Légzésszám (felnőttnél nyugalomban 12-16/perc). 2) Légzés ritmusa (szabályos vagy szabálytalan, pl. Cheyne-Stokes, Kussmaul). 3) Légzés mélysége (felületes vagy mély). 4) Légzési hangok (zörejek, hörgés, sípolás/stridor). 5) Légzési segédizmok használata (orrszárnyi légzés, bordaközi behúzódások). 6) Cianózis (kékes elszíneződés ajkakon, körömágyon).",
    magyarazat: "Soha ne csak a légzésszámot nézd - a ritmus, mélység, hang és segédizom-használat együtt adnak teljes képet a légzés állapotáról."
  },

  {
    tetel: "7. tétel - Légzés, Fowler, betegátadás",
    tipus: "feleletvalasztos",
    kerdes: "A CHEYNE-STOKES légzés jellemzője:",
    valaszok: [
      "Mély, szapora, egyenletes légzés (acidosisban)",
      "Periodikus váltakozás: fokozatosan mélyülő légzés - apnoe - újraindulás",
      "Sípoló kilégzés (asztmás roham)",
      "Felületes szapora légzés"
    ],
    helyes: 1,
    magyarazat: "Cheyne-Stokes = ciklusos. A légzés fokozatosan mélyül, majd elhalkul, légzéskimaradás (apnoe), aztán újraindul. Súlyos szívelégtelenségben, agyi sérülésben, idős haldokló betegnél tipikus."
  },

  {
    tetel: "7. tétel - Légzés, Fowler, betegátadás",
    tipus: "feleletvalasztos",
    kerdes: "Mi a STRIDOR?",
    valaszok: [
      "Felső légúti szűkület okozta sípoló légzés (főleg belégzéskor)",
      "Sokk tüneteiben mély légzés",
      "Mélyalvás közbeni horkolás",
      "Tüdőgyulladásra jellemző zörej"
    ],
    helyes: 0,
    magyarazat: "Stridor = magas hangú, sípoló hang főleg BELÉGZÉSKOR, ami felső légúti szűkületet (gégeödéma, idegen test, krupp) jelez. Sürgős! Az asztmás 'sípolás' inkább KILÉGZÉSI."
  },

  {
    tetel: "7. tétel - Légzés, Fowler, betegátadás",
    tipus: "nyitott",
    kerdes: "Mi a bordaközi behúzódások jelentése?",
    valasz: "A légzési segédizmok használatát mutatja - a beteg fokozott munkával lélegzik. A bordaközi izmok (musculi intercostales) erőteljes összehúzódásakor a bőr a bordák között 'behúzódik'. Súlyos légzési elégtelenség jele. Csecsemőknél különösen jellegzetes.",
    magyarazat: "A normális légzéshez a rekeszizom önmagában elég. Ha segédizmok aktiválódnak (interkostális, sternocleidomastoideus, scaleni), az fokozott légzési munkát jelez."
  },

  {
    tetel: "7. tétel - Légzés, Fowler, betegátadás",
    tipus: "nyitott",
    kerdes: "Mi a Fowler-helyzet (félig ülő pozíció) ÉLETTANI hatása a légzésre?",
    valasz: "Az ágy fejvégét 45-60°-os szögbe emeljük. A hasi szervek lejjebb ereszkednek a gravitáció miatt. Ezért a rekeszizom mozgása szabadabbá válik (lefelé tud mozdulni) → a tüdő tágulékonysága javul → könnyebb a légzés és nő az oxigenizáció.",
    magyarazat: "Lapos fekvésnél a hasi szervek nyomják a rekeszizmot felfelé → kisebb tüdőtérfogat. Ülő helyzetben a gravitáció segít a tüdő tágulásában. Ezért nehézlégzéses beteg ÖSZTÖNÖSEN ülni próbál (orthopnoe)."
  },

  {
    tetel: "7. tétel - Légzés, Fowler, betegátadás",
    tipus: "feleletvalasztos",
    kerdes: "Mikor javasolt a Fowler-helyzet (45-60°)?",
    valaszok: [
      "Hasi sérülésnél",
      "Nehézlégzés, mellkasi fájdalom, hányinger esetén",
      "Gerincsérülésnél",
      "Sokkos betegnél"
    ],
    helyes: 1,
    magyarazat: "Nehézlégzés (dyspnoea), mellkasi fájdalom, hányinger - mindezekben a Fowler-helyzet enyhít. Hasi sérülésnél felhúzott térdekkel hanyatt. Sokkban Trendelenburg."
  },

  {
    tetel: "7. tétel - Légzés, Fowler, betegátadás",
    tipus: "nyitott",
    kerdes: "Mit kell tartalmaznia a betegátadásnak (műszakváltáskor / osztályok között)?",
    valasz: "1) Beteg azonosító adatai. 2) Diagnózis. 3) Aktuális állapot (vitális paraméterek). 4) Elvégzett beavatkozások. 5) Tervezett beavatkozások. 6) Gyógyszerelés. Az átadás ALAPJA a pontosan vezetett lázlap és ápolási dokumentáció.",
    magyarazat: "Strukturált átadás (pl. SBAR módszer: Situation, Background, Assessment, Recommendation) csökkenti a hibákat. A 'kollégának ne legyen kérdése' a célunk."
  },

  {
    tetel: "7. tétel - Légzés, Fowler, betegátadás",
    tipus: "nyitott",
    kerdes: "Légzési nehézség esetén mi az ápolási diagnózis, cél és terv?",
    valasz: "Tünet: nehézlégzés, fulladás. Ápolási dg.: nem megfelelő légzés a szív- vagy tüdőelégtelenség miatt. Ápolási cél: a légzés könnyítése, a szaturáció javítása. Ápolási terv: félig ülő (Fowler) helyzet biztosítása, szellőztetés, orvosi utasításra oxigénterápia, folyamatos monitorozás (RR, P, SpO2).",
    magyarazat: "A nyitott ablak / szellőztetés régi, de hatékony módszer - a frisslevegő-érzés pszichésen is megnyugtatja a beteget. De NE adj 100% O2-t COPD-snek - rontana!"
  },

  {
    tetel: "7. tétel - Légzés, Fowler, betegátadás",
    tipus: "nyitott",
    kerdes: "Mondd el a 7. tétel teljes vázlatát! (állapotfelmérés → légzés megfigyelés → Fowler-helyzet → betegátadás)",
    valasz: "1) ÁLLAPOTFELMÉRÉS: bemutatkozás, betegazonosítás, intimitás, környezet. Általános megtekintés (bőrszín-cianózis, tudat, testtartás). Vitális paraméterek (RR, P, légzés). Fájdalom és panaszok dokumentálása. 2) LÉGZÉS MEGFIGYELÉS (6 szempont): légzésszám (12-16/perc), ritmus (Cheyne-Stokes, Kussmaul), mélység (felületes/mély), légzési hangok (zörej, hörgés, stridor), segédizmok (orrszárnyi légzés, bordaközi behúzódás), cianózis. 3) FOWLER-HELYZET (45-60°): a hasi szervek lejjebb ereszkednek → rekeszizom szabadabban mozog → tüdőtágulékonyság javul. Indikáció: nehézlégzés, mellkasi fájdalom, hányinger. 4) BETEGÁTADÁS: azonosító, diagnózis, aktuális állapot, elvégzett és tervezett beavatkozások, gyógyszerelés - lázlap és ápolási dokumentáció alapján.",
    magyarazat: "A vázlat logikája: betegtől indulunk (általános), aztán specifikus légzés-vizsgálat, beavatkozás (pozícionálás), majd kollégának átadjuk."
  },

  // ----- ÚJ LATIN SZAVAK -----

  {
    tetel: "Latin - Légzési állapotok",
    tipus: "latin",
    latin: "Stridor",
    jelentes: "magas hangú, sípoló légzési hang (felső légúti szűkület)",
    kiejtes: "sztridor",
    magyarazat: "Belégzéskor jellemző. Sürgős - laryngitis, gégeödéma, idegen test okozhatja. NEM összetévesztendő az asztmás 'sípolással' (ami kilégzéskor)."
  },

  {
    tetel: "Latin - Légzési állapotok",
    tipus: "latin",
    latin: "Cheyne-Stokes légzés",
    jelentes: "periodikus légzés: fokozatosan mélyülő, majd elhalkuló, apnoeval váltakozó",
    kiejtes: "csejn-sztóksz",
    magyarazat: "Súlyos szívelégtelenség, agyi sérülés, idős haldokló betegnél tipikus. Eponym - két orvos (John Cheyne és William Stokes) leírása alapján."
  },

  {
    tetel: "Latin - Légzési állapotok",
    tipus: "latin",
    latin: "Fowler-helyzet",
    jelentes: "félig ülő pozíció (45-60° emelt felsőtest)",
    kiejtes: "fauler",
    magyarazat: "George Ryerson Fowler amerikai sebészről nevezve. Light Fowler 30°, Semi-Fowler 30-45°, Standard Fowler 45-60°, High Fowler 60-90°."
  },

  {
    tetel: "Latin - Légzési állapotok",
    tipus: "latin",
    latin: "Musculi intercostales",
    jelentes: "bordaközi izmok",
    kiejtes: "muszkuli interkosztálesz",
    magyarazat: "Légzési segédizmok. Erős légzési erőfeszítésnél a bőr behúzódik a bordák között - 'bordaközi behúzódás' = a légzési elégtelenség jele."
  },

  // =============================================================
  // ============ 10. TÉTEL - HÜVELYI VÁLADÉK ÉS VÉRZÉS =========
  // =============================================================

  {
    tetel: "10. tétel - Hüvelyi váladék és vérzés",
    tipus: "nyitott",
    kerdes: "Mit kell megfigyelni a hüvelyi váladéknál (fluor)?",
    valasz: "1) Mennyiség (normál: kevés, nedvesen tartja a nyálkahártyát; kóros: bő, átütő). 2) Szín (normál: átlátszó vagy fehéres; kóros: sárgás-zöldes = gyulladás, véres = rózsaszín/barna). 3) Állag (híg, nyúlós, tapadós, vagy túrós/darabos = gombafertőzés jele). 4) Szag (normálisan szagtalan vagy enyhén savanykás; kóros: kellemetlen, bűzös). 5) Kísérő tünetek: viszketés, égető érzés, fájdalmas vizeletürítés.",
    magyarazat: "A 'túrós-darabos' váladék klasszikus Candida (gombás) fertőzésre utal. A bűzös sárgászöld bakteriális vaginózisra (BV) vagy Trichomonasra. A normál ciklus során is változik a váladék mennyisége és állaga (ovulációkor nyúlós, fonalhúzó)."
  },

  {
    tetel: "10. tétel - Hüvelyi váladék és vérzés",
    tipus: "feleletvalasztos",
    kerdes: "A TÚRÓS-DARABOS hüvelyi váladék jellemzően mire utal?",
    valaszok: [
      "Bakteriális fertőzés",
      "Vírusfertőzés",
      "Gombafertőzés (Candida)",
      "Méhnyakdaganat"
    ],
    helyes: 2,
    magyarazat: "A Candida albicans okozta fertőzés (vulvovaginitis candidosa) klasszikus jele a túrós, darabos váladék + viszketés + égő érzés. Antibiotikum-szedés, terhesség, DM hajlamosít rá."
  },

  // ----- VÉRZÉSI ZAVAROK -----

  {
    tetel: "10. tétel - Hüvelyi váladék és vérzés",
    tipus: "feleletvalasztos",
    kerdes: "Mi a HYPERMENORRHOEA?",
    valaszok: [
      "Túl gyakori vérzés",
      "Túl bő vérzés",
      "Cikluson kívüli vérzés",
      "Vérzés hiánya"
    ],
    helyes: 1,
    magyarazat: "Hyper- = túl sok, menorrhoea = menstruációs vérzés. Hypermenorrhoea = túl bő mennyiségű vérzés. Vasszegénységhez vezethet."
  },

  {
    tetel: "10. tétel - Hüvelyi váladék és vérzés",
    tipus: "feleletvalasztos",
    kerdes: "Mi a POLYMENORRHOEA?",
    valaszok: [
      "Túl bő vérzés",
      "Túl gyakori vérzés (rövidült ciklus)",
      "Cikluson kívüli vérzés",
      "Két ciklus között vérzés"
    ],
    helyes: 1,
    magyarazat: "Poly- = sok. Polymenorrhoea = túl gyakori vérzés (a ciklus < 21 nap). Hormonális zavar tipikus oka."
  },

  {
    tetel: "10. tétel - Hüvelyi váladék és vérzés",
    tipus: "feleletvalasztos",
    kerdes: "Mi a METRORRHAGIA?",
    valaszok: [
      "Túl bő menstruáció",
      "Túl gyakori menstruáció",
      "Cikluson kívüli, rendszertelen vérzés",
      "Vérzés teljes hiánya"
    ],
    helyes: 2,
    magyarazat: "Metro- = méh, rhagia = vérzés. Metrorrhagia = a normál ciklustól független, rendszertelen vérzés. Mindig orvosi vizsgálatra szorul (méhnyakrák, polip, hormonális zavar gyanúja)."
  },

  {
    tetel: "10. tétel - Hüvelyi váladék és vérzés",
    tipus: "nyitott",
    kerdes: "Sorold fel a kóros menstruációs vérzéseket és jelentésüket!",
    valasz: "Hypermenorrhoea: túl bő vérzés. Polymenorrhoea: túl gyakori vérzés (rövidült ciklus). Metrorrhagia: cikluson kívüli, rendszertelen vérzés. (Plus: amenorrhoea = vérzés teljes hiánya, oligomenorrhoea = ritka vérzés, dysmenorrhoea = fájdalmas menstruáció.)",
    magyarazat: "A görög-latin elvre épülnek: hyper/poly/oligo/a- (előtag) + menorrhoea (vérzés). Metrorrhagia a méhből (metro-) szabálytalan vérzés."
  },

  {
    tetel: "10. tétel - Hüvelyi váladék és vérzés",
    tipus: "nyitott",
    kerdes: "Mit figyelünk meg a hüvelyi vérzés jellemzőinél?",
    valasz: "Vérzés szín: friss piros, alvadékos (darabos), vagy barnás ('cafatos'). Mennyiség mérése: az ÁTÜTÖTT BETÉTEK SZÁMA alapján becsüljük meg a vérvesztést. Vérzés időbeli jellemzői: kezdete, időtartama. Kísérő tünetek: fájdalom, görcs, szédülés.",
    magyarazat: "A betét-számlálás egyszerű, de hasznos becslés: 1 átütött betét ≈ 5-10 ml vér. > 8 betét/nap → orvoshoz irányítás."
  },

  // ----- ÁPOLÁSI FELADATOK BŐ VÉRZÉSNÉL -----

  {
    tetel: "10. tétel - Hüvelyi váladék és vérzés",
    tipus: "feleletvalasztos",
    kerdes: "Bő hüvelyi vérzésnél mi a LEGFONTOSABB azonnali ápolói teendő?",
    valaszok: [
      "Betétcsere",
      "Vitális paraméterek (RR, P) szoros figyelése a hipovolémia miatt",
      "Pszichológiai támogatás",
      "Állapotfelmérés a kórelőzményről"
    ],
    helyes: 1,
    magyarazat: "Bő vérzés → vérvesztés → hipovolémiás sokk veszélye. RR, P 15-30 percenként mérendő. Sápadtság, szédülés a sokk korai jele."
  },

  {
    tetel: "10. tétel - Hüvelyi váladék és vérzés",
    tipus: "nyitott",
    kerdes: "Erős hüvelyi vérzés esetén mi az ápolási diagnózis, cél és teljes terv?",
    valasz: "Tünet: erős hüvelyi vérzés. Ápolási dg.: folyadékvolumen-hiány veszélye a bő hüvelyi vérzés miatt. Ápolási cél: vérvesztés minimalizálása, keringés stabilizálása. Ápolási terv: 1) Beteg nyugalomba helyezése, vízszintes fektetés. 2) Szoros megfigyelés (RR, P 15-30 percenként). 3) Vérzés mértékének ellenőrzése (betétek gyűjtése / megtekintése). 4) Orvosi utasításra vénabiztosítás, infúzió bekötése, laborvizsgálatok (vérkép, vércsoport). 5) Pszichés támogatás (szorongás oldása).",
    magyarazat: "A vízszintes fektetés (akár Trendelenburg) segíti a perifériák felől a központ felé áramlást a sokk megelőzésében. Az infúzió volumenpótlás. A vércsoport-meghatározás transzfúzió miatt fontos, ha bő a vérzés."
  },

  {
    tetel: "10. tétel - Hüvelyi váladék és vérzés",
    tipus: "nyitott",
    kerdes: "Mi a teendő a kórelőzménynél (anamnézis) hüvelyi panasszal érkező nőnél?",
    valasz: "Megkérdezzük az utolsó rendes menstruáció időpontját (LMP - Last Menstrual Period). A vérzés kezdetét és jellegét. Egyéb panaszok: viszketés, égető érzés, fájdalmas vizeletürítés. Kísérő tünetek: szédülés, sápadtság (sokk gyanú).",
    magyarazat: "Az LMP különösen fontos, mert a terhesség kizárása alapvető. Pozitív teszt esetén az ektopikus terhesség életveszélyes lehet hüvelyi vérzéssel."
  },

  // ----- HIGIÉNIA -----

  {
    tetel: "10. tétel - Hüvelyi váladék és vérzés",
    tipus: "nyitott",
    kerdes: "Mik az ápolói higiéniai feladatok hüvelyi panaszos beteg esetén?",
    valasz: "Segítségnyújtás a tisztálkodásban. Betétcsere segítése. Az intim terület bőrének védelme (szárazon tartás, kíméletes mosás). Orvosi utasításra segítségnyújtás hüvelyváladék-mintavételnél (tenyésztéshez vagy citológiához).",
    magyarazat: "A nedves intim terület gyors irritáció és fertőzés helye. Mosás semleges szappannal vagy csak vízzel, illatosított termékek kerülése."
  },

  // ----- KISMEDENCEI UH ELŐKÉSZÍTÉS -----

  {
    tetel: "10. tétel - Hüvelyi váladék és vérzés",
    tipus: "feleletvalasztos",
    kerdes: "HASI ultrahang kismedencei vizsgálatánál mi az előkészítés?",
    valaszok: [
      "Üres húgyhólyag (előtte WC-re küldjük)",
      "Telt húgyhólyag (sok folyadékot iszik, NEM megy WC-re)",
      "Éhgyomri állapot",
      "Beöntés a vizsgálat előtt"
    ],
    helyes: 1,
    magyarazat: "Hasi UH-nál a TELT HÚGYHÓLYAG 'ablakot' képez a hangnak, és kitolja a beleket. Ezért a beteg sokat iszik 1 órával előtte, és NEM ürítheti."
  },

  {
    tetel: "10. tétel - Hüvelyi váladék és vérzés",
    tipus: "feleletvalasztos",
    kerdes: "HÜVELYI (transvaginális) UH-nál mi az előkészítés?",
    valaszok: [
      "Telt húgyhólyag",
      "Üres húgyhólyag",
      "Éhgyomri állapot 12 órán át",
      "Hashajtó előzőleg"
    ],
    helyes: 1,
    magyarazat: "Transvaginális UH-nál ÜRES húgyhólyag kell - a telt hólyag eltávolítaná a méhet a vizsgálati területről. A beteg WC-re megy a vizsgálat előtt."
  },

  {
    tetel: "10. tétel - Hüvelyi váladék és vérzés",
    tipus: "nyitott",
    kerdes: "Mi a különbség a hasi és transvaginális kismedencei UH előkészítésében és miért?",
    valasz: "HASI UH: telt húgyhólyag - sok folyadékot iszik 1 órával előtte, NEM megy WC-re. Indok: a telt hólyag 'ablakot' képez a hangnak, kitolja a beleket. TRANSVAGINÁLIS UH: üres húgyhólyag - WC-re megy közvetlen előtte. Indok: a telt hólyag eltolná a méhet a vizsgálati területről, valamint kényelmetlen lenne.",
    magyarazat: "A két vizsgálat kiegészíti egymást. Hasi UH áttekintés, transvaginális részlet. Ezért gyakran egymás után végzik őket - először hasi tele hólyaggal, aztán a beteg vizel és transvaginális következik."
  },

  {
    tetel: "10. tétel - Hüvelyi váladék és vérzés",
    tipus: "nyitott",
    kerdes: "Mondd el a 10. tétel teljes vázlatát! (váladék → vérzés → állapotfelmérés → ápolási terv → UH előkészítés)",
    valasz: "1) HÜVELYI VÁLADÉK (fluor) MEGFIGYELÉSE: mennyiség (kevés vs bő), szín (átlátszó-fehér vs sárgás-zöldes-véres), állag (híg, nyúlós, tapadós, túrós-darabos = Candida), szag (szagtalan vs bűzös), kísérő tünetek (viszketés, égés, fájdalmas vizelés). 2) HÜVELYI VÉRZÉS: normál menstruáció 3-7 nap. Kóros: hypermenorrhoea (bő), polymenorrhoea (gyakori), metrorrhagia (cikluson kívüli). Vér jellemzői: szín (friss piros, alvadékos, barnás), mennyiség (átütött betétek száma). 3) ÁLLAPOTFELMÉRÉS: anamnézis (LMP, vérzés kezdete, jellege). Vitális paraméterek (RR, P) bő vérzésnél kiemelten - sokkveszély. Bőr sápadtsága, szédülés. Higiénia (betétcsere, intim ápolás). 4) ÁPOLÁSI TERV erős vérzésnél: nyugalomba helyezés vízszintesen, monitorozás 15-30 percenként, vérzés mértékének mérése betétekkel, vénabiztosítás + infúzió, vérkép + vércsoport, pszichés támogatás. 5) UH ELŐKÉSZÍTÉS: hasi → telt hólyag, transvaginális → üres hólyag.",
    magyarazat: "Komplex tétel - 4 részterület. A vizsgán logikus haladás: kis panasz (fluor) → komolyabb (vérzés) → akut helyzet (sokk) → diagnosztika (UH)."
  },

  // ----- ÚJ LATIN SZAVAK -----

  {
    tetel: "Latin - Nőgyógyászat",
    tipus: "latin",
    latin: "Fluor (vaginalis)",
    jelentes: "hüvelyi váladék",
    kiejtes: "fluor",
    magyarazat: "Az élettani fluor szín nélküli vagy fehéres. A kóros (sárgás, bűzös, túrós) fertőzésre utal."
  },

  {
    tetel: "Latin - Nőgyógyászat",
    tipus: "latin",
    latin: "Hypermenorrhoea",
    jelentes: "túl bő mennyiségű menstruáció",
    kiejtes: "hipermenorrhoea",
    magyarazat: "Hyper- = sok, menorrhoea = vérzés."
  },

  {
    tetel: "Latin - Nőgyógyászat",
    tipus: "latin",
    latin: "Polymenorrhoea",
    jelentes: "túl gyakori menstruáció (rövidült ciklus < 21 nap)",
    kiejtes: "polimenorrhoea"
  },

  {
    tetel: "Latin - Nőgyógyászat",
    tipus: "latin",
    latin: "Oligomenorrhoea",
    jelentes: "ritka menstruáció (ciklus > 35 nap)",
    kiejtes: "oligomenorrhoea"
  },

  {
    tetel: "Latin - Nőgyógyászat",
    tipus: "latin",
    latin: "Amenorrhoea",
    jelentes: "vérzés teljes hiánya",
    kiejtes: "amenorrhoea",
    magyarazat: "A- = nélküli. Primer (sosem volt menstruációja), secunder (volt, de elmaradt). Terhesség, menopauza, anorexia, súlyos sport stb. okozhatja."
  },

  {
    tetel: "Latin - Nőgyógyászat",
    tipus: "latin",
    latin: "Dysmenorrhoea",
    jelentes: "fájdalmas menstruáció",
    kiejtes: "dizmenorrhoea"
  },

  {
    tetel: "Latin - Nőgyógyászat",
    tipus: "latin",
    latin: "Metrorrhagia",
    jelentes: "cikluson kívüli, rendszertelen vérzés",
    kiejtes: "metrorrágia",
    magyarazat: "Metro = méh, rhagia = vérzés. MINDIG orvosi vizsgálatra szorul (méhnyakrák, polip, hormonális zavar)."
  },

  // =============================================================
  // ============ 11. TÉTEL - VITÁLIS, EKG, MVT, EMBÓLIA ========
  // =============================================================

  {
    tetel: "11. tétel - EKG, MVT, embólia",
    tipus: "nyitott",
    kerdes: "Mi a 4 vitális paraméter, és miért fontosak trombózis/embólia gyanújánál?",
    valasz: "1) Vérnyomás (RR) - hirtelen esés sokk jele lehet (embóliánál!). 2) Pulzus (P) - szám, ritmus, teltség. Trombózis és fájdalom tachycardiát okozhat. 3) Légzés - légzésszám és nehézség (embóliánál szapora). 4) Testhőmérséklet (T) - mélyvénás trombózis gyakran jár hőemelkedéssel ('trombózis-láz').",
    magyarazat: "A 4 vitális paraméter komplex képet ad. MVT-nél mind a 4 megváltozhat: tachycardia, mérsékelt láz, esetleg vérnyomásesés ha embolizál."
  },

  {
    tetel: "11. tétel - EKG, MVT, embólia",
    tipus: "feleletvalasztos",
    kerdes: "Mi a 'trombózis-láz'?",
    valaszok: [
      "A trombózist okozó fertőzés magas láza",
      "Mélyvénás trombózisnál tipikus mérsékelt hőemelkedés vagy láz",
      "A láz, ami a vérrögképződést kiváltja",
      "A keringési láz egy formája"
    ],
    helyes: 1,
    magyarazat: "A MVT mérsékelt lázat (37-38°C) okozhat - a gyulladásos reakció miatt. A tartós, magas láz inkább szepszisre vagy más fertőzésre utal."
  },

  // ----- EKG KÉSZÍTÉS RÉSZLETESEN -----

  {
    tetel: "11. tétel - EKG, MVT, embólia",
    tipus: "nyitott",
    kerdes: "Hogyan készítjük elő a beteget EKG-ra?",
    valasz: "1) A beteget HANYATT FEKTETJÜK. 2) Szabaddá tesszük a mellkast, csuklókat és bokákat. 3) Eltávolítjuk a fém tárgyakat (óra, ékszer). 4) Bőr zsírtalanítása vagy kontakt gél/spray használata az elektródák alatt.",
    magyarazat: "A fémek és zsíros bőr zavarják a vezetést → torzított görbe. A tisztítás kulcs a jó minőségű EKG-hoz."
  },

  {
    tetel: "11. tétel - EKG, MVT, embólia",
    tipus: "nyitott",
    kerdes: "Mik az EKG VÉGTAGI elektródák színkódjai? (4 db)",
    valasz: "Piros: jobb kar. Sárga: bal kar. Zöld: bal láb. Fekete: jobb láb (földelés).",
    magyarazat: "Memóriasegítő: 'Piros - sárga - zöld - fekete'. A KKZ + a fekete földelő. Nemzetközi szabvány (kontinentális Európa)."
  },

  {
    tetel: "11. tétel - EKG, MVT, embólia",
    tipus: "feleletvalasztos",
    kerdes: "Az EKG-n melyik színű elektróda kerül a JOBB karra?",
    valaszok: ["Sárga", "Piros", "Zöld", "Fekete"],
    helyes: 1,
    magyarazat: "Piros = jobb kar. Sárga = bal kar. (Memóriaseggítő: 'Piros' szó kétszer vékony - jobb karra; 'Sárga' szó három betű - bal karra...)"
  },

  {
    tetel: "11. tétel - EKG, MVT, embólia",
    tipus: "feleletvalasztos",
    kerdes: "Az EKG-n melyik színű elektróda a FÖLDELÉS?",
    valaszok: ["Piros", "Zöld", "Fekete (jobb láb)", "Sárga"],
    helyes: 2,
    magyarazat: "Fekete elektróda → jobb láb → FÖLDELÉS. Levezeti az interferenciákat a beteg testéből."
  },

  {
    tetel: "11. tétel - EKG, MVT, embólia",
    tipus: "feleletvalasztos",
    kerdes: "Mit jelent a MŰTERMÉK az EKG-n?",
    valaszok: [
      "A szívizom valódi elváltozása",
      "Az elektromos zavarok (pl. izommozgás, beszéd) okozta torzítás a görbén",
      "A vezetési rendszer hibája",
      "Az elektródák lejárata"
    ],
    helyes: 1,
    magyarazat: "Műtermék = ARTEFAKTUM. Az izommozgás, remegés, beszéd, hideg - mindezek torzítják az EKG-t. A betegnek mozdulatlanul, nyugodtan kell feküdnie, nem beszélhet."
  },

  {
    tetel: "11. tétel - EKG, MVT, embólia",
    tipus: "nyitott",
    kerdes: "Hogyan helyezzük el a MELLKASI elvezetések elektródáit (V1-V6)?",
    valasz: "Vákuumos elektródákat helyezünk meghatározott anatómiai pontokra a bordaközökbe. V1: 4. bordaköz, jobb mellkasi szegélynél. V2: 4. bordaköz, bal mellkasi szegélynél. V3: V2 és V4 között félúton. V4: 5. bordaköz, bal medioclavicularis vonalban. V5: V4 magasságában, elülső axilláris vonalban. V6: V4 magasságában, középső axilláris vonalban.",
    magyarazat: "A V elvezetések a szív különböző szögeit nézik a mellkason: V1-V2 = jobb kamra/septum, V3-V4 = anterior fal, V5-V6 = lateralis fal."
  },

  {
    tetel: "11. tétel - EKG, MVT, embólia",
    tipus: "nyitott",
    kerdes: "Mit kell mondani a betegnek az EKG vizsgálat alatt?",
    valasz: "Nyugodtan, mozdulatlanul kell feküdnie. NEM beszélhet (mert az izommozgás zavarja a görbét). Lazítania kell, ne legyen feszült. A vizsgálat fájdalmatlan, csak pár percig tart.",
    magyarazat: "A nyugodt, ellazult állapot kritikus a tiszta EKG-hoz. A fázós beteg remeg → torzítás. Hideg helyiségben takarás indokolt."
  },

  // ----- MÉLYVÉNÁS TROMBÓZIS RÉSZLETESEN -----

  {
    tetel: "11. tétel - EKG, MVT, embólia",
    tipus: "nyitott",
    kerdes: "Mik a mélyvénás trombózis (MVT) tünetei? (4 fő tünet)",
    valasz: "1) Duzzanat (ödéma): az érintett végtag körfogata nagyobb. 2) Fájdalom: izomlázszerű vagy feszítő érzés a vádliban, amely járásra vagy a lábfej visszahajlítására fokozódik. 3) Bőrelszíneződés: fénylő, feszes, kékes-vöröses (cianotikus) bőr. 4) Hőmérséklet: az érintett terület melegebb tapintású.",
    magyarazat: "Klasszikus 4 tünet: duzzanat + fájdalom + cianózis + meleg tapintat. A láb körfogat-mérése (mindkét oldal!) egyszerű és érzékeny módszer."
  },

  {
    tetel: "11. tétel - EKG, MVT, embólia",
    tipus: "feleletvalasztos",
    kerdes: "MVT esetén a fájdalom a lábfej VISSZAHAJLÍTÁSÁRA hogyan változik?",
    valaszok: ["Csökken", "Megszűnik", "Fokozódik", "Nem változik"],
    helyes: 2,
    magyarazat: "Ez a Homans-jel: passzív dorzálflexiónál (lábfej felfelé hajlítása) a vádlifájdalom fokozódik. Klasszikus MVT-tünet, bár nem 100%-osan specifikus."
  },

  {
    tetel: "11. tétel - EKG, MVT, embólia",
    tipus: "feleletvalasztos",
    kerdes: "MVT-nél a bőr jellemzően:",
    valaszok: [
      "Sápadt, hideg",
      "Fénylő, feszes, kékes-vöröses, melegebb tapintat",
      "Sárgás",
      "Foltos rózsaszín"
    ],
    helyes: 1,
    magyarazat: "MVT = vénás pangás → ödéma → feszes-fénylő bőr. Cianotikus (kékes-vöröses) szín az oxigénszegény pangó vér miatt. Meleg tapintat a gyulladás miatt."
  },

  // ----- TÜDŐEMBÓLIA -----

  {
    tetel: "11. tétel - EKG, MVT, embólia",
    tipus: "nyitott",
    kerdes: "Mik a TÜDŐEMBÓLIA vészjósló tünetei?",
    valasz: "Hirtelen fellépő nehézlégzés (dyspnoea). Éles mellkasi fájdalom. Köhögés (esetleg véres köpet). Halálfélelem. Szapora légzés és pulzus (tachypnoe + tachycardia). Vérnyomásesés.",
    magyarazat: "A 'halálfélelem' nem irreális - reális szubjektív érzés súlyos hipoxiánál. Életveszélyes állapot - sürgős CT angiográfia, antikoaguláns/trombolítikus terápia."
  },

  {
    tetel: "11. tétel - EKG, MVT, embólia",
    tipus: "feleletvalasztos",
    kerdes: "Mit TILOS tüdőembólia gyanújánál?",
    valaszok: [
      "Beteget oxigént kapni",
      "Beteget mozgatni - újabb rögök indulhatnak el",
      "Vénabiztosítást",
      "EKG-t készíteni"
    ],
    helyes: 1,
    magyarazat: "ABSZOLÚT NYUGALOM! A mozgatás, ülésbe emelés újabb thrombusokat lökhet el a vénákból → újabb embolizáció. Mozdulatlan fektetés + orvos."
  },

  {
    tetel: "11. tétel - EKG, MVT, embólia",
    tipus: "nyitott",
    kerdes: "Mi az AZONNALI teendő tüdőembólia gyanújánál?",
    valasz: "1) Orvos értesítése. 2) Beteg mozdulatlan nyugalomba helyezése (TILOS mozgatni!). 3) Oxigén adása. 4) Vénabiztosítás (ha lehet anélkül, hogy a beteget mozgatnánk). 5) Folyamatos monitorozás (RR, P, SpO2). 6) Reanimációs eszközök előkészítése.",
    magyarazat: "A 'mozdulatlan' itt szó szerint értendő. NE rakjuk ülő helyzetbe - akármennyire is fuldokol. A jó O2-ellátás és gyógyszer az életmentő, nem a pozícionálás."
  },

  // ----- MEGELŐZÉS -----

  {
    tetel: "11. tétel - EKG, MVT, embólia",
    tipus: "nyitott",
    kerdes: "Hogyan előzhető meg a mélyvénás trombózis?",
    valasz: "1) Műtét utáni KORAI MOBILIZÁLÁS (mihamarabb felkelés, járás). 2) Bőséges folyadékfogyasztás. 3) Rugalmas pólya (fásli) vagy kompressziós harisnya alkalmazása. 4) Orvosi utasításra véralvadásgátló (pl. LMWH injekció) beadása.",
    magyarazat: "Az immobilizáció (ágyban fekvés, hosszú repülés) a fő rizikó. A korai mobilizálás kulcsfontosságú a kórházban. LMWH = Low Molecular Weight Heparin (alacsony molekulasúlyú heparin), s.c. injekció."
  },

  {
    tetel: "11. tétel - EKG, MVT, embólia",
    tipus: "feleletvalasztos",
    kerdes: "Az LMWH (alacsony molekulasúlyú heparin) injekciót JELLEMZŐEN hova adjuk?",
    valaszok: [
      "Vénába (i.v.)",
      "Izomba (i.m.)",
      "Bőr alá (s.c.) - tipikusan hasfalba",
      "Bőrre (per cutan)"
    ],
    helyes: 2,
    magyarazat: "LMWH s.c. = subcutan = bőr alá. Tipikus helyek: hasfal (köldök körüli zóna, kivéve közvetlen környéke), comb, felkar. Mastectomiás karban TILOS!"
  },

  {
    tetel: "11. tétel - EKG, MVT, embólia",
    tipus: "feleletvalasztos",
    kerdes: "A D-DIMER laborérték mire jó MVT/embólia gyanújánál?",
    valaszok: [
      "Pontosan diagnosztizálja a trombózist",
      "Mutatja az infarktus súlyosságát",
      "Negatív értéke segít KIZÁRNI a trombózist (érzékeny, de nem specifikus)",
      "Csak a véralvadási idő jelzője"
    ],
    helyes: 2,
    magyarazat: "D-dimer = fibrinlebomlási termék. Magas → lehet trombus, de lehet más is (gyulladás, terhesség, daganat). Negatív → valószínűleg NINCS aktív trombózis. Tehát kizárásra jó, megerősítésre nem."
  },

  {
    tetel: "11. tétel - EKG, MVT, embólia",
    tipus: "nyitott",
    kerdes: "Mondd el a 11. tétel teljes vázlatát! (vitális paraméterek → EKG → MVT → tüdőembólia → megelőzés)",
    valasz: "1) VITÁLIS PARAMÉTEREK: RR (vérnyomás), P (pulzus), légzés, T (testhőmérséklet). MVT-nél tachycardia, trombózis-láz; embóliánál vérnyomásesés. 2) EKG: előkészítés (hanyatt, fémek le, mellkas-csuklók-bokák szabadon, bőr zsírtalanítás). Színkódok: piros = jobb kar, sárga = bal kar, zöld = bal láb, fekete = jobb láb (földelés). Mellkasi V1-V6 vákuumos elektródákkal a bordaközökbe. Beteg: nyugodt, mozdulatlan, NEM beszél (műtermék elkerülése). 3) MVT TÜNETEI: duzzanat, vádlifájdalom (lábfej-visszahajlításra fokozódik = Homans-jel), fénylő-feszes-cianotikus bőr, melegebb tapintat. 4) TÜDŐEMBÓLIA: hirtelen dyspnoe, mellkasi fájdalom, véres köpet, halálfélelem, tachypnoe + tachycardia, vérnyomásesés. AZONNALI teendő: orvos, MOZDULATLAN nyugalomba helyezés (TILOS mozgatni!), oxigén. 5) MEGELŐZÉS: korai mobilizálás műtét után, bőséges folyadék, kompressziós harisnya / fásli, LMWH s.c. (hasfalba). D-dimer labor a kizáráshoz.",
    magyarazat: "Az 5 fő alpont logikus haladás: alapvizsgálat → diagnosztikai eszköz (EKG) → konkrét betegség (MVT) → szövődmény (embólia) → prevenció."
  },

  // ----- ÚJ LATIN/SZAKKIFEJEZÉSEK -----

  {
    tetel: "Latin - EKG és vérrög",
    tipus: "latin",
    latin: "Elektrokardiogramma (EKG)",
    jelentes: "a szív elektromos tevékenységét rögzítő görbe",
    kiejtes: "elektrokardiogram",
    magyarazat: "Elektro- = elektromos, cardio- = szív, -gramma = írás/rögzítés. 1903-ban Willem Einthoven fejlesztette ki, Nobel-díjat kapott érte."
  },

  {
    tetel: "Latin - EKG és vérrög",
    tipus: "latin",
    latin: "Thrombus",
    jelentes: "vérrög (érben kialakult alvadék)",
    kiejtes: "trombusz"
  },

  {
    tetel: "Latin - EKG és vérrög",
    tipus: "latin",
    latin: "Embolus",
    jelentes: "elszabadult vérrög vagy egyéb anyag, ami éren keresztül vándorol",
    kiejtes: "embolusz",
    magyarazat: "Az embolus eredete lehet trombus (leggyakoribb), zsír (csonttörésnél), levegő, magzatvíz."
  },

  {
    tetel: "Latin - EKG és vérrög",
    tipus: "latin",
    latin: "Homans-jel",
    jelentes: "a lábfej passzív dorzálflexiójára (felfelé hajlítására) jelentkező vádlifájdalom (MVT-jel)",
    kiejtes: "hómánsz-jel",
    magyarazat: "John Homans amerikai sebészről nevezve. Klasszikus, de nem 100% specifikus MVT-jel - ma inkább csak kiegészítő vizsgálat."
  },

  {
    tetel: "Latin - EKG és vérrög",
    tipus: "latin",
    latin: "LMWH",
    jelentes: "Low Molecular Weight Heparin = alacsony molekulasúlyú heparin (véralvadásgátló)",
    kiejtes: "el-em-vé-há",
    magyarazat: "Példák: Fraxiparine, Clexane, Fragmin. Subcutan adva, hasfalba. Trombózis-megelőzésre és kezelésre."
  },

  {
    tetel: "Latin - EKG és vérrög",
    tipus: "latin",
    latin: "D-dimer",
    jelentes: "fibrin-lebomlási termék (vérrög-aktivitás jelzője)",
    kiejtes: "dé-dimer",
    magyarazat: "Magas érték → aktív véralvadás van, de nem specifikus (lehet trombus, gyulladás, daganat). Negatív érték → kizárja a friss trombózist."
  },

  {
    tetel: "Latin - EKG és vérrög",
    tipus: "latin",
    latin: "Műtermék (artefaktum)",
    jelentes: "a vizsgálati görbén megjelenő zavar (nem valódi élettani jelenség)",
    kiejtes: "artefaktum",
    magyarazat: "EKG-n: izommozgás, remegés, beszéd, hideg, rossz elektróda-kapcsolat → torzított görbe. Tisztítás, nyugodt környezet a kulcs."
  },

  // =============================================================
  // ============ 12. TÉTEL - ÁLLAPOTFELMÉRÉS, SÚLY, ÖDÉMA =====
  // =============================================================

  {
    tetel: "12. tétel - Állapotfelmérés, súly, ödéma",
    tipus: "feleletvalasztos",
    kerdes: "Mi a különbség a SZUBJEKTÍV és OBJEKTÍV adat között az állapotfelmérésnél?",
    valaszok: [
      "Szubjektív = orvos által mért, objektív = beteg által elmondott",
      "Szubjektív = beteg által elmondott (panasz), objektív = mérhető paraméterek",
      "Nincs különbség a kettő között",
      "Szubjektív = laborérték, objektív = képalkotó vizsgálat"
    ],
    helyes: 1,
    magyarazat: "SZUBJEKTÍV = a beteg által elmondott (fájdalom, szorongás, nehézlégzés). OBJEKTÍV = mérhető paraméterek (RR, P, légzésszám, SpO2, testtömeg). Mindkettő fontos, együtt adnak teljes képet."
  },

  {
    tetel: "12. tétel - Állapotfelmérés, súly, ödéma",
    tipus: "nyitott",
    kerdes: "Sorold fel a szubjektív és az objektív adatok példáit az állapotfelmérésnél!",
    valasz: "SZUBJEKTÍV (a beteg által elmondott): fájdalom, szorongás, nehézlégzés, hányinger, gyengeség, szédülés. OBJEKTÍV (mérhető): vérnyomás (RR), pulzus (P), légzés, szaturáció (SpO2), testtömeg, testhőmérséklet.",
    magyarazat: "A kettő együtt adja az állapotfelmérés teljes képét. Egyik sem mellőzhető."
  },

  // ----- TESTTÖMEG-MÉRÉS -----

  {
    tetel: "12. tétel - Állapotfelmérés, súly, ödéma",
    tipus: "feleletvalasztos",
    kerdes: "Hirtelen súlynövekedés (napi 0,5-1 kg felett) MIT jelez?",
    valaszok: [
      "Hízást",
      "Étvágy javulását",
      "Vízfelhalmozódást (ödémát) - szív- vagy veseelégtelenség jele",
      "Anyagcsere lassulást"
    ],
    helyes: 2,
    magyarazat: "Napi 0,5-1 kg vagy több emelkedés NEM lehet zsír (annyit nem lehet enni). Folyadékvisszatartás → ÖDÉMA. Szívelégtelenség, veseelégtelenség, gyógyszermellékhatás."
  },

  {
    tetel: "12. tétel - Állapotfelmérés, súly, ödéma",
    tipus: "nyitott",
    kerdes: "Miért fontos a pontos testtömeg-mérés a kórházban?",
    valasz: "1) Ödémafigyelés: hirtelen súlynövekedés (napi 0,5-1 kg felett) vízfelhalmozódást jelez (szív-/veseelégtelenség). 2) Gyógyszeradagolás: számos gyógyszer (véralvadásgátlók, kemoterápiás szerek, antibiotikumok) dózisát a testsúly alapján számolják. 3) Tápláltsági állapot felmérése: alultápláltság (cachexia) vagy elhízás kockázati tényező a gyógyulásnál. 4) Folyadékegyensúly követése.",
    magyarazat: "A testtömeg = nem csak 'súly', hanem klinikai paraméter. Naponta mérendő ödéma vagy folyadékpótlás esetén."
  },

  {
    tetel: "12. tétel - Állapotfelmérés, súly, ödéma",
    tipus: "nyitott",
    kerdes: "Mik a testtömeg-mérés szabályai?",
    valasz: "1) Lehetőleg REGGEL. 2) ÉHGYOMORRA. 3) ÜRÍTÉS UTÁN (vizelet, székelés). 4) AZONOS RUHÁZATBAN (vagy ruha nélkül, ha lehetséges). 5) Ugyanazon a mérlegen, ha lehet ugyanabban a helyzetben (állva vagy fekve).",
    magyarazat: "A pontos összehasonlíthatóság a kulcs: ha egyszer ebéd után, egyszer reggel mérünk, az 1-2 kg-os különbség simán bekövetkezhet anélkül, hogy valós változás történne."
  },

  {
    tetel: "12. tétel - Állapotfelmérés, súly, ödéma",
    tipus: "feleletvalasztos",
    kerdes: "Melyik gyógyszer-csoportoknál FÜGGNEK a testsúlytól a dózisok?",
    valaszok: [
      "Csak vitaminok",
      "Véralvadásgátlók (LMWH), kemoterápiás szerek, néhány antibiotikum",
      "Csak köhögéscsillapítók",
      "Csak fájdalomcsillapító tabletták"
    ],
    helyes: 1,
    magyarazat: "Súlyfüggő dózisú szerek: LMWH (heparin), kemoterápia, néhány antibiotikum (gentamicin, vancomycin), érzéstelenítők. Túl- vagy aluldozírozás veszélyes."
  },

  // ----- POZICIONÁLÁS, ESZMÉLETLEN BETEG -----

  {
    tetel: "12. tétel - Állapotfelmérés, súly, ödéma",
    tipus: "feleletvalasztos",
    kerdes: "Eszméletlen betegnél miért TILOS a vízszintes hanyatt fektetés?",
    valaszok: [
      "Mert kellemetlen",
      "Aspiráció (félrenyelés) veszélye - hányadék, váladék a légutakba kerülhet",
      "Mert a fej fáj",
      "Mert az ízületek merevvé válnak"
    ],
    helyes: 1,
    magyarazat: "Eszméletlen betegnél nincsenek védelmi reflexek. Ha hanyatt fekszik és hány vagy nyál gyűlik, az a légutakba kerülhet → aspirációs pneumonia, fulladás. Stabil OLDALFEKVÉS a megoldás!"
  },

  {
    tetel: "12. tétel - Állapotfelmérés, súly, ödéma",
    tipus: "nyitott",
    kerdes: "Mikor használjuk az OLDALFEKVÉST?",
    valasz: "1) Alvásnál (kényelmes). 2) Hányásveszély vagy hányás esetén (aspiráció megelőzésére). 3) Eszméletlen betegnél (stabil oldalfekvés). 4) Felfekvés (decubitus) megelőzése céljából (oldalankénti váltás).",
    magyarazat: "A stabil oldalfekvés alapvető elsősegélynyújtási helyzet eszméletlen, lélegző betegnél. Az alsó kar a fej alatt, a felső láb behajlítva."
  },

  {
    tetel: "12. tétel - Állapotfelmérés, súly, ödéma",
    tipus: "feleletvalasztos",
    kerdes: "A SOKK-FEKTETÉS hogyan történik?",
    valaszok: [
      "Hanyatt fekvés, lábak emelve",
      "Félig ülő helyzet",
      "Hason fekvés",
      "Oldalfekvés"
    ],
    helyes: 0,
    magyarazat: "Sokk = vérnyomásesés. A láb emelése (Trendelenburg) a vért a központ (szív, agy) felé irányítja. Csak ha NINCS gerincsérülés!"
  },

  // ----- BETEGÁTADÁS RÉSZLETESEN -----

  {
    tetel: "12. tétel - Állapotfelmérés, súly, ödéma",
    tipus: "nyitott",
    kerdes: "Mikor és mit kell átadni a betegátadáskor?",
    valasz: "MIKOR? Műszakváltáskor, osztályok közötti áthelyezéskor, műtétre/vizsgálatra küldéskor. MIT? Diagnózis, elvégzett beavatkozások, gyógyszerelés, diéta, mozgáskorlátozottság, utolsó mért vitális paraméterek, a beteg állapotának változásai (pl. 'éjszakája nyugodt volt', 'mellkasi fájdalomra panaszkodott').",
    magyarazat: "A vizit során az ápoló röviden, lényegre törően tájékoztatja az orvost. A részletes információk a dokumentációban (lázlap, ápolási lap) találhatók."
  },

  // ----- ÖDÉMA ÁPOLÁSI TERV -----

  {
    tetel: "12. tétel - Állapotfelmérés, súly, ödéma",
    tipus: "nyitott",
    kerdes: "Ödéma esetén mi az ápolási diagnózis, cél és teljes terv?",
    valasz: "Tünet: ödéma. Ápolási dg.: folyadékfelszaporodás a szervezetben a szívműködés elégtelensége miatt. Ápolási cél: az ödémák csökkentése, a folyadékegyensúly helyreállítása. Ápolási tevékenység: 1) Napi testsúlymérés és dokumentálás. 2) Folyadéklap vezetése (felvett és ürített folyadék mennyisége). 3) Sószegény diéta betartatása. 4) Orvosi utasításra vízhajtó (diuretikum) beadása és hatásának (vizeletmennyiség) megfigyelése. 5) A végtagok felpolcolása az ödéma csökkentésére.",
    magyarazat: "A só visszatartja a vizet → sószegény diéta csökkenti az ödémát. A diuretikum kihajtja a felesleges vizet (de ezzel kálium is fogy → laborkontroll!). Felpolcolás → gravitáció segíti a vénás visszafolyást."
  },

  {
    tetel: "12. tétel - Állapotfelmérés, súly, ödéma",
    tipus: "feleletvalasztos",
    kerdes: "Mit jelent a FOLYADÉKLAP vezetése ödémás betegnél?",
    valaszok: [
      "A vér viszkozitásának mérése",
      "A felvett (ivott + iv. infúzió) és ürített (vizelet) folyadékmennyiség dokumentálása",
      "A betétek súlyának mérése",
      "A vérnyomás dokumentálása óránként"
    ],
    helyes: 1,
    magyarazat: "Folyadéklap (folyadékmérleg) = mennyit ivott + iv. kapott, mennyit ürített. Ha bevitt > ürített → felhalmozódás (ödéma). Ezért a diuretikumok hatékonyságát is itt követjük."
  },

  {
    tetel: "12. tétel - Állapotfelmérés, súly, ödéma",
    tipus: "feleletvalasztos",
    kerdes: "Miért fontos a SÓSZEGÉNY diéta ödémás betegnél?",
    valaszok: [
      "Mert a só keserű",
      "A nátrium visszatartja a vizet a szervezetben - kevesebb só = kevesebb visszatartott víz",
      "Mert a só drága",
      "Mert a só karcolja a gyomrot"
    ],
    helyes: 1,
    magyarazat: "Na+ → osmotikus aktivitás → vízmegtartás. Tehát kevesebb só = kevesebb folyadékfelhalmozódás. Szívelégtelenségben, magas vérnyomásban, ödémás állapotban kötelező."
  },

  {
    tetel: "12. tétel - Állapotfelmérés, súly, ödéma",
    tipus: "nyitott",
    kerdes: "Mondd el a 12. tétel teljes vázlatát! (állapotfelmérés → súlymérés → betegátadás → pozicionálás → ödéma ápolási terv)",
    valasz: "1) ÁLLAPOTFELMÉRÉS: szubjektív (panaszok) + objektív (mérhető paraméterek) adatok. Fizikális vizsgálat: megtekintés, tapintás, hallgatózás. 2) TESTTÖMEG-MÉRÉS: napi 0,5-1 kg súlynövekedés = ödéma. Gyógyszer-dózis számítás (LMWH, kemo). Tápláltsági állapot. Szabályok: reggel, éhgyomorra, ürítés után, azonos ruházatban. 3) BETEGÁTADÁS: műszakváltáskor, áthelyezéskor. Diagnózis, beavatkozások, gyógyszerek, diéta, mozgáskorlátozás, utolsó vitális paraméterek. Vizit során ápoló az orvost tájékoztatja a változásokról. 4) POZICIONÁLÁS: Fowler (45-60°) légzéshez, mellkasi fájdalomhoz. Vízszintes hanyatt: vizsgálatokhoz, sokk-fektetésnél (lábak emelve), DE ESZMÉLETLEN BETEGNÉL TILOS (aspiráció)! Oldalfekvés: alvás, hányásveszély, decubitus megelőzés. 5) ÖDÉMA ÁPOLÁSI TERV: napi testsúlymérés, folyadéklap, sószegény diéta, diuretikum, végtagok felpolcolása.",
    magyarazat: "Klasszikus felmondás-struktúra: alapvizsgálat → konkrét mérés (súly) → információ-továbbadás → fektetés → konkrét tünet kezelése."
  },

  // =============================================================
  // ============ 13. TÉTEL - VÉGTAGOK ÉS VÉRCUKORMÉRÉS =========
  // =============================================================

  {
    tetel: "13. tétel - Végtagok és vércukormérés",
    tipus: "nyitott",
    kerdes: "Milyen kóros jeleket kell azonosítani a végtagok megfigyelésekor?",
    valasz: "1) Sápadt, hideg végtag → artériás keringési elégtelenség, érszűkület (a vér nem jut a perifériákra). 2) Cianotikus (kékes-szürke) → oxigénhiány. Lehet perifériás (helyi keringési zavar) vagy centrális (szív- vagy tüdőbetegség). 3) Vörös, meleg → gyulladás vagy MVT. 4) Ödémás (duzzadt) → szív-, vese- vagy nyirokkeringési zavar.",
    magyarazat: "Logikus következtetés: meleg = vér ott van (gyulladás vagy pangás). Hideg = vér nem ér oda (artériás baj). Cianózis = vér ott van, de oxigén nincs."
  },

  {
    tetel: "13. tétel - Végtagok és vércukormérés",
    tipus: "feleletvalasztos",
    kerdes: "Sápadt, HIDEG végtag mire utal?",
    valaszok: [
      "Mélyvénás trombózis",
      "Artériás keringési elégtelenség / érszűkület",
      "Limfödéma",
      "Allergiás reakció"
    ],
    helyes: 1,
    magyarazat: "Hideg + sápadt = nincs vér. Artériás elzáródás vagy érszűkület. Az '5 P' jellemzi: Pain (fájdalom), Pallor (sápadtság), Pulselessness (pulzustalanság), Paresthesia (zsibbadás), Paralysis (bénulás)."
  },

  {
    tetel: "13. tétel - Végtagok és vércukormérés",
    tipus: "feleletvalasztos",
    kerdes: "VÖRÖS, MELEG, fájdalmas, duzzadt végtag mire utal?",
    valaszok: [
      "Artériás elzáródás",
      "Mélyvénás trombózis vagy gyulladás",
      "Sokk",
      "Hypovolaemia"
    ],
    helyes: 1,
    magyarazat: "Vörös, meleg, fájdalmas + duzzanat → MVT vagy cellulitis (bőr-gyulladás). Mindkettő sürgősen kivizsgálandó."
  },

  {
    tetel: "13. tétel - Végtagok és vércukormérés",
    tipus: "nyitott",
    kerdes: "Mi a különbség a CENTRÁLIS és PERIFÉRIÁS cyanosis között?",
    valasz: "CENTRÁLIS cyanosis: az ajkakon, nyelven és nyálkahártyákon is látszik. Oka: szív- vagy tüdőbetegség, az egész vér oxigénszegény. PERIFÉRIÁS cyanosis: csak a végtagokon (kéz, láb, ujjak), a centrális területek normál színűek. Oka: helyi keringési zavar (érszűkület, sokk, hideg).",
    magyarazat: "Egyszerű teszt: nézd meg a nyelvet. Ha az is kék → centrális (komolyabb). Ha rózsaszín → csak perifériás."
  },

  {
    tetel: "13. tétel - Végtagok és vércukormérés",
    tipus: "feleletvalasztos",
    kerdes: "Az UJJNYOMÁS-PRÓBA (pitting test) ödémánál mit vizsgál?",
    valaszok: [
      "Az ízületek mozgékonyságát",
      "Hogy az ujjnyomás után visszamarad-e behúzódás (gödör) - 'pitting' ödéma",
      "A vérnyomás eltérését",
      "Az ujjak rugalmasságát"
    ],
    helyes: 1,
    magyarazat: "Pitting ödéma = ujjnyomás után visszamarad a 'gödör' a bőrön. Tipikus szív- és veseelégtelenségben. A nem-pitting (tészta-szerű) ödéma viszont limfödéma vagy myxoedema (hypothyreosis)."
  },

  // ----- VÉRCUKORMÉRÉS ESZKÖZEI ÉS MENET -----

  {
    tetel: "13. tétel - Végtagok és vércukormérés",
    tipus: "nyitott",
    kerdes: "Mik a vércukormérés (capilláris) eszközei?",
    valasz: "Vércukormérő készülék (glükométer), tesztcsík, ujjbegyszúró lándzsa, fertőtlenítő (alkoholos buci), száraz vatta, gumikesztyű, veszélyeshulladék-gyűjtő (tűledobó).",
    magyarazat: "Egyszerű, gyors eljárás. A lándzsa egyszerhasználatos, a tűledobóba kerül utána. Nem szabad kétszer ugyanazt a lándzsát használni!"
  },

  {
    tetel: "13. tétel - Végtagok és vércukormérés",
    tipus: "nyitott",
    kerdes: "Mondd el a vércukormérés (kapilláris) menetét lépésről lépésre!",
    valasz: "1) Beteg tájékoztatása és higiénés kézmosás. 2) Tesztcsík behelyezése a gépbe (szavatosság és kódszám ellenőrzése). 3) Szúrás helyének (UJJBEGY OLDALSÓ RÉSZE) fertőtlenítése, majd MEGVÁRJUK, amíg megszárad. 4) Szúrás után az ELSŐ vércseppet száraz vattával LETÖRÖLJÜK, a MÁSODIK cseppet juttatjuk a tesztcsíkra. 5) Mérés után száraz vattával nyomást gyakorolunk a szúrás helyére. 6) Eredmény dokumentálása a vércukornaplóban vagy lázlapon.",
    magyarazat: "Az első csepp kontaminálva van (alkohol, szövetfolyadék) → letöröljük. A második adja a pontos eredményt."
  },

  {
    tetel: "13. tétel - Végtagok és vércukormérés",
    tipus: "feleletvalasztos",
    kerdes: "Hova szúrunk a vércukormérésnél az ujjbegyen?",
    valaszok: [
      "Az ujjbegy KÖZEPÉRE",
      "Az ujjbegy OLDALSÓ részére",
      "A körömágy mellé",
      "A tenyérközép közepébe"
    ],
    helyes: 1,
    magyarazat: "Az ujjbegy oldalsó része kevésbé fájdalmas (kevesebb idegvégződés ott). Plus a beteg úgy tudja használni az ujját, hogy a szúrás helyét ne nyomkodja."
  },

  {
    tetel: "13. tétel - Végtagok és vércukormérés",
    tipus: "feleletvalasztos",
    kerdes: "Miért MEGVÁRJUK, hogy az alkohol megszáradjon a szúrás előtt?",
    valaszok: [
      "Esztétikai okból",
      "Az alkohol hígíthatja a vért és FÁJDALMASABB a szúrás",
      "Az alkohol elektromos zavart okoz a glükométernek",
      "Hogy a fertőtlenítés érvényesüljön"
    ],
    helyes: 1,
    magyarazat: "Az alkohol VÉG ronthatja a mérési pontosságot (hígítás). Plus a nedves bőrön át történő szúrás fájdalmasabb. Mindig megvárjuk, amíg megszárad."
  },

  {
    tetel: "13. tétel - Végtagok és vércukormérés",
    tipus: "feleletvalasztos",
    kerdes: "Miért törli LE az ELSŐ vércseppet a szúrás után?",
    valaszok: [
      "Az első csepp túl kicsi",
      "Az első csepp kontaminált (alkohol, szövetfolyadék) - pontatlan eredményt adna",
      "Hogy a beteg ne lássa",
      "A higiénia miatt"
    ],
    helyes: 1,
    magyarazat: "Az első csepp keveredik a maradék alkohollal és intersticiális folyadékkal → nem reprezentatív vércukor. A második csepp már 'tiszta' kapilláris vér."
  },

  // ----- VÉRCUKOR NORMÁLÉRTÉKEK ÉS TEENDŐK -----

  {
    tetel: "13. tétel - Végtagok és vércukormérés",
    tipus: "feleletvalasztos",
    kerdes: "Mi az ÉHGYOMRI vércukor normálértéke?",
    valaszok: [
      "0 - 3 mmol/l",
      "3,9 - 6,1 mmol/l",
      "7 - 10 mmol/l",
      "11 - 15 mmol/l"
    ],
    helyes: 1,
    magyarazat: "Éhgyomri normál: 3,9-6,1 mmol/l. Étkezés utáni: < 7,8 mmol/l (egészséges). Diabetes diagnózis: éhgyomri ≥ 7,0, OGTT 2 órás ≥ 11,1 mmol/l."
  },

  {
    tetel: "13. tétel - Végtagok és vércukormérés",
    tipus: "feleletvalasztos",
    kerdes: "Mit jelent a HYPOGLYCAEMIA, és melyik értéktől beszélünk róla?",
    valaszok: [
      "Magas vércukor, > 7 mmol/l felett",
      "Alacsony vércukor, 3,9 mmol/l alatt",
      "Ingadozó vércukor",
      "Egyik sem"
    ],
    helyes: 1,
    magyarazat: "Hypoglycaemia = alacsony vércukor (< 3,9 mmol/l). Tünetek: remegés, verítékezés, éhségérzet, zavartság, eszméletvesztés. Sürgős cukor-bevitel kell!"
  },

  {
    tetel: "13. tétel - Végtagok és vércukormérés",
    tipus: "nyitott",
    kerdes: "Mi a teendő hypoglycaemia esetén?",
    valasz: "Ha a beteg ESZMÉLETÉNÉL VAN: cukros ital (gyümölcslé, szénsavas üdítő) vagy szőlőcukor adása szájon át. Ha NEM eszméleténél: vénásan glukóz (orvosi utasításra) vagy glukagon injekció. Soha ne adjunk szájon át bármit eszméletlen betegnek (aspiráció)!",
    magyarazat: "Általános szabály: 15 g szénhidrátot adunk, 15 perc múlva újra mérünk. Ha még mindig alacsony, ismételjük."
  },

  {
    tetel: "13. tétel - Végtagok és vércukormérés",
    tipus: "feleletvalasztos",
    kerdes: "Mit jelent a HYPERGLYCAEMIA, és melyik értéktől beszélünk róla (éhgyomri)?",
    valaszok: [
      "Alacsony vércukor",
      "Magas vércukor, éhgyomri > 7,0 mmol/l felett",
      "Magas vércukor, > 4 mmol/l felett",
      "Ingadozó vércukor"
    ],
    helyes: 1,
    magyarazat: "Hyperglycaemia = magas vércukor. Éhgyomri > 7,0 mmol/l → DM gyanú. Tünetek: szájszárazság, polyuria, polydypsia, acetonos lehelet."
  },

  {
    tetel: "13. tétel - Végtagok és vércukormérés",
    tipus: "nyitott",
    kerdes: "Sorold fel a HYPER- és HYPO-glycaemia tüneteit és teendőit!",
    valasz: "HYPOGLYCAEMIA (< 3,9 mmol/l): tünetek: remegés, verítékezés, éhségérzet, zavartság, sápadt, hűvös bőr, telt pulzus. Teendő: szőlőcukor / cukros ital szájon át (ha eszméleténél van), vagy glukóz iv. HYPERGLYCAEMIA (éhgyomri > 7,0 mmol/l): tünetek: szájszárazság, polyuria, polydypsia, acetonos lehelet, kipirult-meleg-száraz bőr, könnyen elnyomható pulzus, Kussmaul-légzés. Teendő: orvos értesítése, inzulin adása orvosi utasításra.",
    magyarazat: "Vészhelyzetben: ha bizonytalan, ADJ CUKROT. A hyper-nek kis dózis cukor nem árt, a hypo életet menthet."
  },

  // ----- DM ÁPOLÁSI TERV -----

  {
    tetel: "13. tétel - Végtagok és vércukormérés",
    tipus: "nyitott",
    kerdes: "Diabetes mellitus esetén mi az ápolási diagnózis, cél és teljes terv?",
    valasz: "Tünet: instabil vércukorszint. Ápolási dg.: instabil vércukorszint kockázata az étrend vagy az inzulinadagolás hiányosságai miatt. Ápolási cél: vércukorszint célértéken tartása, szövődmények megelőzése. Ápolási tevékenységek: 1) Rendszeres vércukormérés (PROFIL MÉRÉS: étkezések előtt és után). 2) Diéta (szénhidrátmennyiség) pontos betartatása. 3) Inzulin beadása az előírt időpontban és módon (subcutan). 4) Beteg oktatása a LÁBÁPOLÁSRA (a sérülések elkerülése végett, mert rosszabbul gyógyulnak).",
    magyarazat: "A 'profil mérés' = több vércukor egy nap (reggeli előtt-után, ebéd előtt-után, vacsora előtt-után, lefekvéskor) → teljes kép a szabályozásról."
  },

  {
    tetel: "13. tétel - Végtagok és vércukormérés",
    tipus: "feleletvalasztos",
    kerdes: "Az inzulint MILYEN módon adjuk?",
    valaszok: [
      "Intravénásan (i.v.)",
      "Izomba (i.m.)",
      "Bőr alá (subcutan)",
      "Szájon át (per os)"
    ],
    helyes: 2,
    magyarazat: "Inzulin s.c. = subcutan = bőr alá. Tipikus helyek: hasfal, comb, felkar, fenék. A helyeket VÁLTOGATNI kell (lipodisztrófia megelőzése)."
  },

  {
    tetel: "13. tétel - Végtagok és vércukormérés",
    tipus: "nyitott",
    kerdes: "Mondd el a 13. tétel teljes vázlatát! (végtagok megfigyelése → vércukormérés → normálértékek → DM ápolási terv)",
    valasz: "1) VÉGTAGOK MEGFIGYELÉSE: sápadt, hideg → artériás. Cianotikus → oxigénhiány (centrális vagy perifériás). Vörös, meleg → gyulladás/MVT. Ödémás → szív/vese/nyirok. Pitting teszt = ujjnyomás után gödör. 2) VÉRCUKORMÉRÉS: eszközök (glükométer, tesztcsík, lándzsa, alkoholos buci, vatta, gumikesztyű, tűledobó). Menet: tájékoztatás-kézmosás → tesztcsík be → ujjbegy oldalsó részének fertőtlenítése + megszáradás → szúrás → első csepp letörlése → második csepp tesztcsíkra → nyomás vattával → dokumentálás. 3) NORMÁLÉRTÉKEK: éhgyomri 3,9-6,1 mmol/l. Hypo < 3,9 (remegés, izzadás, éhség → cukros ital). Hyper > 7,0 éhgyomri (szájszárazság, polyuria, aceton lehelet → orvos, inzulin). 4) DM ÁPOLÁSI TERV: profil mérés étkezések előtt-után, diéta szénhidrát betartása, inzulin s.c. előírt időben, lábápolás oktatása.",
    magyarazat: "Komplex tétel: megfigyelés → mérés-technika → értelmezés → kezelés. Logikus haladás."
  },

  // ----- ÚJ LATIN/SZAKKIFEJEZÉSEK -----

  {
    tetel: "Latin - Vér és anyagcsere",
    tipus: "latin",
    latin: "Glükométer",
    jelentes: "vércukormérő készülék (kapilláris vér mérésére)",
    kiejtes: "glükométer",
    magyarazat: "Otthoni és kórházi használatra is. A kalibrálás (kódszám) és a tesztcsík szavatosságának ellenőrzése fontos."
  },

  {
    tetel: "Latin - Vér és anyagcsere",
    tipus: "latin",
    latin: "Pitting ödéma",
    jelentes: "ujjnyomásnál visszamaradó 'gödör' a bőrön",
    kiejtes: "pitting ödéma",
    magyarazat: "Tipikus szív- és veseelégtelenségben. A nem-pitting ('tészta-szerű') ödéma limfödémát vagy myxoedemát (hypothyreosis) jelez."
  },

  {
    tetel: "Latin - Vér és anyagcsere",
    tipus: "latin",
    latin: "Cyanosis centralis",
    jelentes: "centrális cianózis (ajkakon, nyelven, nyálkahártyákon is)",
    kiejtes: "cianózis centrálisz",
    magyarazat: "Az egész vér oxigénszegény. Szív- vagy tüdőbetegség jele."
  },

  {
    tetel: "Latin - Vér és anyagcsere",
    tipus: "latin",
    latin: "Cyanosis peripherica",
    jelentes: "perifériás cianózis (csak a végtagokon, nyelv normál)",
    kiejtes: "cianózis periferika",
    magyarazat: "Helyi keringési zavar: érszűkület, sokk, hideg behatás, MVT."
  },

  // =============================================================
  // ============ 15. TÉTEL - BETEGÁTADÁS ÉS I.M. INJEKCIÓ ======
  // =============================================================

  {
    tetel: "15. tétel - Betegátadás és i.m. injekció",
    tipus: "nyitott",
    kerdes: "Mi a betegátadás formája és tartalmi elemei?",
    valasz: "FORMÁK: szóbeli (műszakváltáskor az ágy mellett) és írásbeli (ápolási dekurzus, lázlap). TARTALMI ELEMEK: 1) Azonosítás (név, kor, kórterem, diagnózis). 2) Aktuális állapot (utolsó mért vitális paraméterek, tudat, fájdalom). 3) Elvégzett feladatok (gyógyszerek, infúziók, sebkezelés, mintavétel). 4) Események (előző műszak változásai - lázmenet, rosszullét, diéta tolerálása). 5) Tervezett feladatok (közelgő vizsgálatok, előkészületek - pl. éhgyomor).",
    magyarazat: "Az 'ágy mellett' szóbeli átadás a leghatékonyabb: a kolléga látja a beteget, kérdezhet, ellenőrizhet."
  },

  // ----- I.M. INJEKCIÓ -----

  {
    tetel: "15. tétel - Betegátadás és i.m. injekció",
    tipus: "feleletvalasztos",
    kerdes: "Miért gyorsabb az i.m. injekció felszívódása, mint az s.c.?",
    valaszok: [
      "Mert az i.m. tű hosszabb",
      "Az izomszövet jobb VÉRELLÁTÁSA miatt",
      "Mert a beteg fájdalma serkenti",
      "Mert mélyebbre kerül a gyógyszer"
    ],
    helyes: 1,
    magyarazat: "Az izomban gazdag a kapilláris hálózat → gyors felszívódás. A bőr alatti zsír sokkal kevesebb erezetű → lassabb felszívódás (de ez egyes gyógyszereknél előny - pl. lassú-elnyúló inzulin)."
  },

  {
    tetel: "15. tétel - Betegátadás és i.m. injekció",
    tipus: "nyitott",
    kerdes: "Mik az i.m. injekció beadási helyei?",
    valasz: "1) M. gluteus maximus (farizom) - LEGGYAKORIBB hely. Kvadráns-módszerrel: a farpofát 4 részre osztjuk, KÜLSŐ-FELSŐ negyedbe szúrunk. 2) M. quadriceps femoris (combizom) - felnőtteknél a comb középső harmadának KÜLSŐ oldala. 3) M. deltoideus (felkarizom) - csak KIS mennyiségű (max. 1-2 ml) gyógyszer esetén.",
    magyarazat: "A 4 részre osztásnál: a külső-felső negyed messze van az ülőidegtől → biztonságos. Csecsemőknél a m. vastus lateralis (combizom külső) az ajánlott."
  },

  {
    tetel: "15. tétel - Betegátadás és i.m. injekció",
    tipus: "feleletvalasztos",
    kerdes: "A glutealis (farizom) i.m. injekciónál melyik QUADRÁNSBA szúrunk?",
    valaszok: [
      "Belső-alsó",
      "Belső-felső",
      "Külső-alsó",
      "Külső-felső"
    ],
    helyes: 3,
    magyarazat: "KÜLSŐ-FELSŐ negyed = messze az ülőidegtől és a nagy erektől. A farpofát képzeletbeli vízszintes és függőleges vonal osztja 4-re; a kívül-felül lévő része biztonságos."
  },

  {
    tetel: "15. tétel - Betegátadás és i.m. injekció",
    tipus: "feleletvalasztos",
    kerdes: "Maximum mennyi gyógyszer adható a m. deltoideusba (felkarizom) i.m.?",
    valaszok: [
      "0,5 ml",
      "1-2 ml",
      "5 ml",
      "10 ml"
    ],
    helyes: 1,
    magyarazat: "Max. 1-2 ml a deltoideusba (kis izom, könnyen fájdalmas). Nagyobb térfogatra a glutealis vagy quadriceps."
  },

  {
    tetel: "15. tétel - Betegátadás és i.m. injekció",
    tipus: "nyitott",
    kerdes: "Mik az i.m. injekció eszközei?",
    valasz: "Tálca, gyógyszer (ampulla), megfelelő méretű tű (HOSSZABB és VASTAGABB, mint az s.c. tű - hogy izomig érjen), fecskendő, bőrfertőtlenítő, vattabuci, gumikesztyű, tűledobó tartály.",
    magyarazat: "Tipikus i.m. tű: 21G-23G vastag, 25-40 mm hosszú. Túlsúlyos betegnél hosszabb tű kell, hogy a tű valóban az izomba érjen, ne a zsírszövetbe."
  },

  // ----- 5-ÖS SZABÁLY -----

  {
    tetel: "15. tétel - Betegátadás és i.m. injekció",
    tipus: "nyitott",
    kerdes: "Mi az '5-ös szabály' (5R) a gyógyszeradás előtt?",
    valasz: "1) Megfelelő BETEGNEK. 2) Megfelelő GYÓGYSZERT. 3) Megfelelő IDŐBEN. 4) Megfelelő MÓDON (pl. i.m., s.c., per os). 5) Megfelelő DÓZISBAN.",
    magyarazat: "Angolul 5R: Right Patient, Right Drug, Right Time, Right Route, Right Dose. Modern verziók 7R-t vagy 9R-t használnak (pl. + dokumentáció, hatás, dokumentált allergia)."
  },

  {
    tetel: "15. tétel - Betegátadás és i.m. injekció",
    tipus: "feleletvalasztos",
    kerdes: "Az 5-ös szabály MELYIK pontját ellenőrizzük az injekció beadása előtt?",
    valaszok: [
      "Csak a beteg nevét",
      "Csak a gyógyszer nevét",
      "Mind az 5 pontot: beteg, gyógyszer, idő, mód, dózis",
      "Csak a dózist és időt"
    ],
    helyes: 2,
    magyarazat: "MIND AZ 5-ÖT, minden alkalommal! 5 másodpercnyi rutinellenőrzés → életet menthet. A leggyakoribb hibák: rossz beteg (pl. ágyszomszéd), rossz dózis (egység vs. ml)."
  },

  // ----- I.M. KIVITELEZÉS -----

  {
    tetel: "15. tétel - Betegátadás és i.m. injekció",
    tipus: "nyitott",
    kerdes: "Mondd el az i.m. injekció beadásának menetét lépésről lépésre!",
    valasz: "1) 5-ös szabály ellenőrzése (beteg, gyógyszer, idő, mód, dózis). 2) Higiénés kézmosás, gyógyszer felszívása + LÉGTELENÍTÉS. 3) Beteg pozicionálása: feküdjön hason vagy oldalt, lábát lazítsa el (behajlított térd segíti az izomlazítást). 4) Bőrfertőtlenítés, megszáradás. 5) Bőr kifeszítése, határozott mozdulattal 90°-os szögben (merőlegesen) szúrás. 6) ASPIRÁCIÓ (KÖTELEZŐ!): a dugattyút kissé visszahúzzuk. Ha vér jön → eret értünk → tűt kihúzni, ÚJ helyre, ÚJ eszközzel szúrni. 7) Ha nincs vér: lassan benyomjuk a gyógyszert. 8) Tű gyorsan kihúzva, száraz vattával nyomjuk (NEM dörzsöljük erősen). 9) Dokumentálás.",
    magyarazat: "A 90°-os szúrás kulcs - különben csak a bőr alá juttatjuk (s.c.), nem az izomba. Az aspiráció ELLENŐRZÉS: ne adjunk i.v. olyan gyógyszert, amit nem szabad."
  },

  {
    tetel: "15. tétel - Betegátadás és i.m. injekció",
    tipus: "feleletvalasztos",
    kerdes: "Hány fokos szögben szúrunk be i.m. injekciónál?",
    valaszok: ["15°", "45°", "60°", "90° (merőlegesen)"],
    helyes: 3,
    magyarazat: "I.m. = 90°. S.c. = 45° (vagy 90°, ha bőrredőt csíptünk). I.d. (intracután) = 10-15°. Más szög esetén nem érjük el az izmot."
  },

  {
    tetel: "15. tétel - Betegátadás és i.m. injekció",
    tipus: "feleletvalasztos",
    kerdes: "Az ASPIRÁCIÓ (visszaszívás) MIÉRT kötelező i.m. injekciónál?",
    valaszok: [
      "Higiéniai okok",
      "Hogy ellenőrizzük: nem értünk-e VÉRERET (mert akkor véletlenül i.v. adnánk)",
      "Hogy a gyógyszer ne folyjon vissza",
      "Csak hagyomány, nem indokolt"
    ],
    helyes: 1,
    magyarazat: "Ha a tű érbe ment és aspirációkor vér jön → kihúzni, új tűvel új helyre. Az i.m.-re szánt gyógyszerek i.v.-ban veszélyesek lehetnek (pl. olajos szuszpenzió → embólia)."
  },

  {
    tetel: "15. tétel - Betegátadás és i.m. injekció",
    tipus: "feleletvalasztos",
    kerdes: "Mi a teendő, ha aspirációnál VÉR jön a fecskendőbe?",
    valaszok: [
      "Folytatjuk az injekciót",
      "Tűt kihúzni, ÚJ helyre, ÚJ eszközzel szúrni",
      "Beadjuk a gyógyszert lassan",
      "Visszahúzzuk a tűt egy kicsit, és úgy nyomjuk be"
    ],
    helyes: 1,
    magyarazat: "Vér = ér. Új tű, új helyre. NE használd újra az eszközt - sterilitás miatt és vérrel kontamináltan nem szabad."
  },

  {
    tetel: "15. tétel - Betegátadás és i.m. injekció",
    tipus: "feleletvalasztos",
    kerdes: "Hogyan helyezzük el a beteget i.m. injekció (fenékbe) beadása előtt?",
    valaszok: [
      "Állva",
      "Háton fekve, lábai egyenesen",
      "Hason fekve vagy oldalt, lábait lazítva (behajlított térd segíti az izomlazítást)",
      "Ülve"
    ],
    helyes: 2,
    magyarazat: "Hason vagy oldalfekvés + behajlított térd → ellazult farizom → kevésbé fájdalmas és könnyebb beadás. Feszült izom = fájdalom és duzzanat."
  },

  {
    tetel: "15. tétel - Betegátadás és i.m. injekció",
    tipus: "feleletvalasztos",
    kerdes: "I.m. injekció után a szúrás helyét:",
    valaszok: [
      "Erősen dörzsöljük, hogy oszoljon a gyógyszer",
      "Hidegen jegeljük",
      "Száraz vattával nyomjuk, nem dörzsöljük erősen",
      "Nyitva hagyjuk levegőzni"
    ],
    helyes: 2,
    magyarazat: "Csak NYOMÁS, nem dörzsölés. Az erős dörzsölés szövetkárosodást, fájdalmat, túl gyors felszívódást okozhat."
  },

  // ----- SZÖVŐDMÉNYEK -----

  {
    tetel: "15. tétel - Betegátadás és i.m. injekció",
    tipus: "nyitott",
    kerdes: "Mik az i.m. injekció lehetséges szövődményei?",
    valasz: "HELYI: fájdalom, vérömleny (haematoma), tályog (abscessus - sterilitás hiányából), izomkeményedés. ÁLTALÁNOS: allergiás reakció (anafilaxia), gyógyszer-túladagolás. SPECIFIKUS: ÜLŐIDEG (n. ischiadicus) sérülése helytelenül megválasztott szúrási pont esetén!",
    magyarazat: "Az ülőideg-sérülés lehet életen át tartó következménnyel - ezért a kvadráns-módszer szigorú betartása. A tályog gennyes, kemény, fájdalmas duzzanat - sebészi feltárást igényelhet."
  },

  {
    tetel: "15. tétel - Betegátadás és i.m. injekció",
    tipus: "feleletvalasztos",
    kerdes: "Melyik az i.m. injekció LEGSÚLYOSABB SPECIFIKUS szövődménye, ha rosszul választjuk meg a szúrási pontot a fenéken?",
    valaszok: [
      "Bőrpír",
      "Helyi fájdalom",
      "Ülőideg (n. ischiadicus) sérülése",
      "Allergiás reakció"
    ],
    helyes: 2,
    magyarazat: "Az ülőideg a fenék középső-belső részén fut. Helytelen szúrásnál sérülés → tartós fájdalom, érzéskiesés, akár bénulás. Ezért MINDIG külső-felső negyed!"
  },

  // ----- FÁJDALOMCSILLAPÍTÁS ÁPOLÁSI TERV -----

  {
    tetel: "15. tétel - Betegátadás és i.m. injekció",
    tipus: "nyitott",
    kerdes: "Heveny fájdalom esetén (i.m. fájdalomcsillapítás) mi az ápolási diagnózis, cél és terv?",
    valasz: "Tünet: heveny fájdalom. Ápolási dg.: heveny fájdalom a műtéti seb / betegség miatt. Ápolási cél: a fájdalom csökkenése (vizuális analóg skálán mért javulás). Ápolási tevékenység: 1) Fájdalom felmérése (helye, jellege, erőssége VAS skálán). 2) Injekció beadása az orvosi utasítás szerint. 3) Hatás ellenőrzése 30-60 perc múlva. 4) Beteg megfigyelése esetleges mellékhatások (pl. szédülés, allergiás reakció) miatt.",
    magyarazat: "A VAS (Vizuális Analóg Skála) 0-10-ig: 0=nincs fájdalom, 10=elképzelhetetlen. Fájdalomcsillapítás után megfelelő hatás: legalább 2-3 ponttal csökkent érték."
  },

  {
    tetel: "15. tétel - Betegátadás és i.m. injekció",
    tipus: "feleletvalasztos",
    kerdes: "Hány PERC múlva ellenőrizzük az i.m. fájdalomcsillapító HATÁSÁT?",
    valaszok: [
      "5-10 perc",
      "30-60 perc",
      "2-4 óra",
      "Másnap"
    ],
    helyes: 1,
    magyarazat: "I.m. injekció után a hatás 15-30 perc alatt áll be teljesen, így 30-60 perc múlva érdemes nézni a hatást és dokumentálni."
  },

  {
    tetel: "15. tétel - Betegátadás és i.m. injekció",
    tipus: "nyitott",
    kerdes: "Mondd el a 15. tétel teljes vázlatát! (betegátadás → i.m. injekció: helyek, eszközök, menet, szövődmények → fájdalomcsillapítás ápolási terve)",
    valasz: "1) BETEGÁTADÁS: szóbeli (ágy mellett) + írásbeli (lázlap, dekurzus). 5 elem: azonosítás, aktuális állapot, elvégzett feladatok, események, tervezett feladatok. 2) I.M. INJEKCIÓ: izomba adott gyógyszer, gyors felszívódás. Helyek: m. gluteus maximus (KÜLSŐ-FELSŐ negyed kvadráns-módszerrel), m. quadriceps femoris (comb külső), m. deltoideus (felkar, max. 1-2 ml). Eszközök: tű (hosszabb-vastagabb), fecskendő, fertőtlenítő, vatta, kesztyű, tűledobó. Menet: 5-ös szabály, légtelenítés, betegpozicionálás (hason/oldalt, lábhajlítva), fertőtlenítés, 90°-os szúrás, ASPIRÁCIÓ (kötelező!), beadás, gyors tű ki, nyomás (NEM dörzsölés). Szövődmények: helyi (fájdalom, haematoma, tályog), általános (allergia), specifikus (ülőideg sérülés). 3) FÁJDALOMCSILLAPÍTÁS terv: VAS skálán mérés, beadás, 30-60 perc múlva hatás-ellenőrzés, mellékhatás megfigyelés.",
    magyarazat: "Komplex tétel - nem csak a 'beadás' technikája, hanem a teljes kontextus (átadás-előkészület-beadás-ellenőrzés)."
  },

  // ----- ÚJ LATIN/SZAKKIFEJEZÉSEK -----

  {
    tetel: "Latin - Izmok és injekció",
    tipus: "latin",
    latin: "Musculus gluteus maximus",
    jelentes: "nagy farizom (i.m. injekció leggyakoribb helye)",
    kiejtes: "muszkulusz glutéusz maximusz",
    magyarazat: "Az emberi test legnagyobb izma. Kvadráns-módszer: külső-felső negyed = biztonságos szúrási hely."
  },

  {
    tetel: "Latin - Izmok és injekció",
    tipus: "latin",
    latin: "Musculus quadriceps femoris",
    jelentes: "négyfejű combizom",
    kiejtes: "muszkulusz kvadricepsz femorisz",
    magyarazat: "I.m. injekciónál a comb középső harmadának KÜLSŐ oldala. Csecsemőknél a vastus lateralis a választott hely."
  },

  {
    tetel: "Latin - Izmok és injekció",
    tipus: "latin",
    latin: "Aspiratio",
    jelentes: "1) belszívás (légutakba kerülés), 2) injekciónál: a fecskendő dugattyújának visszahúzása ellenőrzéshez",
    kiejtes: "aszpiráció",
    magyarazat: "I.m. injekciónál KÖTELEZŐ. Ha vér jön → érbe ment → új helyre szúrunk."
  },

  {
    tetel: "Latin - Izmok és injekció",
    tipus: "latin",
    latin: "Haematoma",
    jelentes: "véraláfutás (szövetbe kiömlött vér)",
    kiejtes: "hematóma"
  },

  {
    tetel: "Latin - Izmok és injekció",
    tipus: "latin",
    latin: "Abscessus",
    jelentes: "tályog (gennyes, körülhatárolt gyulladás)",
    kiejtes: "absceszusz",
    magyarazat: "Sterilitás hiányából kialakulhat injekció után. Sebészi feltárás (incisio + drainage) szükséges."
  },

  {
    tetel: "Latin - Izmok és injekció",
    tipus: "latin",
    latin: "Nervus ischiadicus",
    jelentes: "ülőideg (a test legnagyobb idege, a fenéken halad le a lábba)",
    kiejtes: "nervusz iszkiadikusz",
    magyarazat: "Helytelen i.m. injekciónál sérülhet → tartós érzéskiesés vagy bénulás. Ezért a KÜLSŐ-FELSŐ kvadráns biztonságos."
  },

  {
    tetel: "Latin - Izmok és injekció",
    tipus: "latin",
    latin: "VAS skála",
    jelentes: "Vizuális Analóg Skála (fájdalom mérésére, 0-10)",
    kiejtes: "vé-á-eszsz",
    magyarazat: "0 = nincs fájdalom, 10 = elképzelhetetlen fájdalom. A beteg saját maga jelöli. Hatékony fájdalomcsillapítás → 2-3 pontos csökkenés."
  },

  // =============================================================
  // ============ 16. TÉTEL - KARDINÁLIS TÜNETEK, LÉGZÉS ========
  // =============================================================

  {
    tetel: "16. tétel - Kardinális tünetek és légzés",
    tipus: "feleletvalasztos",
    kerdes: "Mik a KARDINÁLIS TÜNETEK?",
    valaszok: [
      "Csak a szívritmus és a pulzus",
      "Életjelenségek, amik az alapvető életfunkciók működéséről adnak információt: vérnyomás, pulzus, testhőmérséklet, légzés (RR, P, T, L)",
      "Kardiológiai vizsgálatok eredményei",
      "Csak a szívvel kapcsolatos paraméterek"
    ],
    helyes: 1,
    magyarazat: "Kardinális = sarkalatos. RR (vérnyomás/tensio), P (pulzus), T (testhőmérséklet), L (légzés). Minden állapotfelmérés alapja - ezért 'sarkalatosak'."
  },

  {
    tetel: "16. tétel - Kardinális tünetek és légzés",
    tipus: "feleletvalasztos",
    kerdes: "Mi a felnőtt vérnyomás normálértéke?",
    valaszok: ["80/40 Hgmm", "100/60 Hgmm", "120/80 Hgmm körül", "150/100 Hgmm"],
    helyes: 2,
    magyarazat: "Normál: 120/80 Hgmm körül. Hypertonia: ≥ 140/90. Hypotonia: < 90/60. Az első érték a systolés (szívösszehúzódáskor), a második a diastolés (szívelernyedéskor)."
  },

  {
    tetel: "16. tétel - Kardinális tünetek és légzés",
    tipus: "feleletvalasztos",
    kerdes: "Mi a felnőtt nyugalmi PULZUS normálértéke?",
    valaszok: ["30-50/perc", "60-80/perc", "100-120/perc", "150-180/perc"],
    helyes: 1,
    magyarazat: "Normál: 60-80/perc. Tachycardia: > 100/perc. Bradycardia: < 60/perc. Sportolóknál a 50/perc is fiziológiás."
  },

  {
    tetel: "16. tétel - Kardinális tünetek és légzés",
    tipus: "nyitott",
    kerdes: "Mik a TESTHŐMÉRSÉKLET kategóriái?",
    valasz: "Normálérték: 36-37°C. Hőemelkedés (subfebrilitás): 37-38°C. Láz (febrilitás): 38°C felett. Hyperpyrexia (extrém magas láz): 41°C felett.",
    magyarazat: "A reggeli érték általában alacsonyabb, az esti magasabb (napszaki ingadozás kb. 0,5-1°C). 35°C alatt: hypothermia."
  },

  {
    tetel: "16. tétel - Kardinális tünetek és légzés",
    tipus: "feleletvalasztos",
    kerdes: "Mikor beszélünk LÁZRÓL?",
    valaszok: ["35°C alatt", "36-37°C között", "37-38°C között", "38°C felett"],
    helyes: 3,
    magyarazat: "37-38°C = hőemelkedés (subfebrilitás). 38°C felett = láz (febrilitás). Hyperpyrexia 41°C felett."
  },

  // ----- LÉGZÉSSZÁM KORTÓL FÜGGŐEN -----

  {
    tetel: "16. tétel - Kardinális tünetek és légzés",
    tipus: "nyitott",
    kerdes: "Mi a légzésszám normálértéke felnőttnél, gyermeknél és újszülöttnél?",
    valasz: "Felnőtt: 12-16/perc. Gyermek: 20-30/perc (életkortól függően magasabb). Újszülött: 40-60/perc.",
    magyarazat: "Minél fiatalabb, annál szaporább a légzés. A csecsemő tüdeje kicsi, ezért gyakrabban kell levegőt cserélnie."
  },

  {
    tetel: "16. tétel - Kardinális tünetek és légzés",
    tipus: "feleletvalasztos",
    kerdes: "Mi az ÚJSZÜLÖTT nyugalmi légzésszáma?",
    valaszok: ["12-16/perc", "20-30/perc", "40-60/perc", "80-100/perc"],
    helyes: 2,
    magyarazat: "Újszülött: 40-60/perc - az emberi élet során ekkor a leggyorsabb a légzés. Csecsemőkorban 30-50, kisgyerekkorban 20-30."
  },

  {
    tetel: "16. tétel - Kardinális tünetek és légzés",
    tipus: "feleletvalasztos",
    kerdes: "1 LÉGZÉSI CIKLUS mit jelent?",
    valaszok: [
      "Csak a belégzést",
      "Csak a kilégzést",
      "Belégzés + kilégzés együtt",
      "Belégzés + szünet + kilégzés + szünet"
    ],
    helyes: 2,
    magyarazat: "1 légzés = belégzés + kilégzés. A légzésszám ezeknek a percenkénti számát jelenti."
  },

  // ----- KÓROS LÉGZÉSTÍPUSOK -----

  {
    tetel: "16. tétel - Kardinális tünetek és légzés",
    tipus: "nyitott",
    kerdes: "Sorold fel és definiáld a kóros légzéstípusokat!",
    valasz: "1) DYSPNOE (nehézlégzés): a beteg légszomjra panaszkodik, fullad. 2) ORTHOPNOE: olyan súlyos nehézlégzés, hogy CSAK ÜLŐ helyzetben enyhül. 3) APNOE: a légzés átmeneti LEÁLLÁSA. 4) CHEYNE-STOKES légzés: szünetekkel megszakított, fokozatosan mélyülő, majd elhalkuló légzés (súlyos állapot - szívelégtelenség, agysérülés, idős haldokló). 5) KUSSMAUL-légzés: nagyon mély, egyenletes, 'pöfögő' légzés (cukorbetegeknél ketoacidosisban tipikus).",
    magyarazat: "Mindegyik más betegségre utal. Felismerésük diagnosztikai értékű."
  },

  // ----- SpO2 -----

  {
    tetel: "16. tétel - Kardinális tünetek és légzés",
    tipus: "feleletvalasztos",
    kerdes: "Mi az SpO2 (oxigénszaturáció) normálértéke?",
    valaszok: ["50-70%", "85-90%", "95-100%", "100-120%"],
    helyes: 2,
    magyarazat: "Normál: 95-100%. 90% alatt hypoxia, 88% alatt oxigénterápia kell. Pulzoximéterrel mérjük (ujjbegyre, fülcimpára helyezhető)."
  },

  // ----- ÁPOLÁSI FELADATOK LÉGZÉSI NEHÉZSÉGNÉL -----

  {
    tetel: "16. tétel - Kardinális tünetek és légzés",
    tipus: "nyitott",
    kerdes: "Mik az ápolási feladatok légzési nehézség esetén? (5 lépés)",
    valasz: "1) POZICIONÁLÁS: azonnal félig ülő (Fowler) helyzet, vagy segítünk neki az asztalra támaszkodni. 2) SpO2 mérés pulzoximéterrel (normál 95-100%). 3) KÖRNYEZET: friss levegő (szellőztetés), szoros ruházat meglazítása, nyugodt légkör. 4) TÁJÉKOZTATÁS és segítség: orvos értesítése, orvosi utasításra oxigénterápia. 5) DOKUMENTÁLÁS: mért értékek (RR, P, L, SpO2) azonnal a lázlapon.",
    magyarazat: "A 'asztalra támaszkodás' (orthopnoe pozíció) sokszor automatikus a betegnél - segíti a légzési segédizmok használatát."
  },

  // ----- ESZKÖZÖK -----

  {
    tetel: "16. tétel - Kardinális tünetek és légzés",
    tipus: "nyitott",
    kerdes: "Mik az állapotfelmérés tálcájának eszközei?",
    valasz: "1) Vérnyomásmérő és fonendoszkóp. 2) Lázmérő. 3) Óra (légzés és pulzus számolásához). 4) Pulzoximéter (SpO2 mérésére). 5) Kézfertőtlenítő és gumikesztyű (higiénia).",
    magyarazat: "Modern változatban gyakran egyetlen monitor mér RR, P, SpO2-t és néha hőmérsékletet is. De az alap tálca a kórházi általános vizsgálathoz elég."
  },

  // ----- ÖSSZEFOGLALÓ -----

  {
    tetel: "16. tétel - Kardinális tünetek és légzés",
    tipus: "nyitott",
    kerdes: "Mondd el a 16. tétel teljes vázlatát!",
    valasz: "1) KARDINÁLIS TÜNETEK (RR, P, T, L): RR normál 120/80, kóros = hyper/hypotonia. P 60-80/perc, kóros = tachy/bradycardia. T normál 36-37°C, hőemelkedés 37-38, láz > 38°C. 2) LÉGZÉS részletes megfigyelése: szám (felnőtt 12-16, gyermek 20-30, újszülött 40-60), ritmus, mélység (felületes vs mély). Kóros: dyspnoe, orthopnoe, apnoe, Cheyne-Stokes, Kussmaul. 3) KÍSÉRŐ TÜNETEK: cianózis, segédizmok használata, köhögés-köpet. 4) ÁPOLÁSI FELADATOK légzési nehézségnél: Fowler-pozíció, SpO2 mérés (95-100% normál), friss levegő, szoros ruházat lazítása, orvos értesítése + oxigén, dokumentálás. 5) ESZKÖZÖK: vérnyomásmérő, fonendoszkóp, lázmérő, óra, pulzoximéter, fertőtlenítő, kesztyű.",
    magyarazat: "A 4 kardinális tünet együtt adja a beteg élettani 'pillanatképét'. Külön-külön mind fontos, együtt teljes."
  },

  // ----- ÚJ LATIN/SZAKKIFEJEZÉSEK -----

  {
    tetel: "Latin - Kardinális tünetek",
    tipus: "latin",
    latin: "Tensio (RR)",
    jelentes: "vérnyomás (a vér érfalra gyakorolt nyomása)",
    kiejtes: "tenzió",
    magyarazat: "Normál: 120/80 Hgmm. RR = Riva-Rocci olasz orvosról nevezve, ő alkotta meg a modern vérnyomásmérőt."
  },

  {
    tetel: "Latin - Kardinális tünetek",
    tipus: "latin",
    latin: "Pulsus (P)",
    jelentes: "pulzus, az artériák lüktetése",
    kiejtes: "pulzusz",
    magyarazat: "Normál felnőttnél 60-80/perc. Mérjük: számát, ritmusát, teltségét."
  },

  {
    tetel: "Latin - Kardinális tünetek",
    tipus: "latin",
    latin: "Temperatura (T)",
    jelentes: "testhőmérséklet",
    kiejtes: "temperatúra",
    magyarazat: "Normál: 36-37°C. Mérési helyek: hónalj (axillaris), végbél (rectalis), szájüreg (oralis), homlok / fül (infravörös)."
  },

  {
    tetel: "Latin - Kardinális tünetek",
    tipus: "latin",
    latin: "Respiratio (L)",
    jelentes: "légzés (gázcsere folyamata)",
    kiejtes: "respiráció",
    magyarazat: "Normál felnőttnél 12-16/perc. 1 légzés = belégzés + kilégzés."
  },

  {
    tetel: "Latin - Kardinális tünetek",
    tipus: "latin",
    latin: "Hyperpyrexia",
    jelentes: "extrém magas láz (41°C felett)",
    kiejtes: "hiperpirexia",
    magyarazat: "Életveszélyes - gyors lázcsillapítás (fizikális + gyógyszeres) szükséges. Idős és gyermekkorban különösen veszélyes."
  },

  {
    tetel: "Latin - Kardinális tünetek",
    tipus: "latin",
    latin: "Hypothermia",
    jelentes: "csökkent testhőmérséklet (35°C alatt)",
    kiejtes: "hipotermia",
    magyarazat: "Lehet környezeti (hideg expozíció) vagy patológiás (sokk, szepszis, hypothyreosis)."
  },

  // =============================================================
  // ============ 17. TÉTEL - ANAMNÉZIS, FELVÉTEL =================
  // =============================================================

  {
    tetel: "17. tétel - Anamnézis, felvétel",
    tipus: "nyitott",
    kerdes: "Mi az anamnézis 6 fő tartalmi eleme?",
    valasz: "1) SZEMÉLYES ADATOK: név, születési idő, lakcím, TAJ-szám. 2) JELEN PANASZOK: miért került kórházba, mikor kezdődtek a tünetek (pl. mellkasi fájdalom, nehézlégzés). 3) MÚLTBELI BETEGSÉGEK: korábbi műtétek, krónikus betegségek (DM, hypertonia). 4) ALLERGIA: gyógyszer-, étel- vagy fémallergia (pl. jód, tapasz). 5) SZOKÁSOK: dohányzás, alkohol, étrend (diéta). 6) GYÓGYSZEREK: mit szed rendszeresen.",
    magyarazat: "Az anamnézis a diagnosztika alapja. Egy jó anamnézis önmagában gyakran 70-80%-ban diagnózist ad."
  },

  {
    tetel: "17. tétel - Anamnézis, felvétel",
    tipus: "feleletvalasztos",
    kerdes: "Mit kell külön megkérdezni az ALLERGIÁNÁL az anamnézisben?",
    valaszok: [
      "Csak a gyógyszer-allergiát",
      "Csak az étel-allergiát",
      "Gyógyszer-, étel- ÉS fémallergiát (pl. jód, tapasz)",
      "Csak a tetszik/nem tetszik gyógyszereket"
    ],
    helyes: 2,
    magyarazat: "MINDHÁROM-ra kérdezünk: gyógyszer (Algopyrin, Aspirin, antibiotikum), étel (mogyoró, tejcukor), fém (jód a kontrasztanyagban, tapasz ragasztója). Egy elmulasztott jód-allergia életveszélyes lehet kontrasztanyagos vizsgálatnál."
  },

  // ----- TUDATÁLLAPOT FELMÉRÉSE -----

  {
    tetel: "17. tétel - Anamnézis, felvétel",
    tipus: "nyitott",
    kerdes: "Hogyan mérjük fel a beteg TUDATÁLLAPOTÁT?",
    valasz: "ORIENTÁCIÓ ellenőrzése: tudja-e, hol van (hely), milyen nap van (idő), ki ő (személy). Megfigyelendő: van-e zavartság, aluszékonyság, eszméletlenség. Részletesen GCS (Glasgow Coma Scale) skálával is felmérhető (3-15 pont).",
    magyarazat: "A 3 orientáció (hely, idő, személy) gyors szűrés. Részletesebb felmérés: GCS - szem (1-4), verbális (1-5), motoros (1-6) válaszok."
  },

  {
    tetel: "17. tétel - Anamnézis, felvétel",
    tipus: "feleletvalasztos",
    kerdes: "A 'beteg orientált' jelentése:",
    valaszok: [
      "Csak van eszméleténél",
      "Tudja, hol van, milyen nap van, ki ő",
      "Nem zavart, nem álmos",
      "Engedelmeskedik az utasításoknak"
    ],
    helyes: 1,
    magyarazat: "Orientált = tájékozott. 3 dimenzióban: hely (kórház, város), idő (mai nap, hónap, év), személy (saját neve, adatai). Ha bármelyik kiesik, tudat-zavar gyanúja."
  },

  // ----- ÁPOLÁSI TERV SÜRGŐSSÉGI FELVÉTELRE -----

  {
    tetel: "17. tétel - Anamnézis, felvétel",
    tipus: "nyitott",
    kerdes: "Sürgősségi felvétel esetén mi az ápolási diagnózis, cél és teljes terv?",
    valasz: "Tünet: szorongás, ismeretlen helyzet. Ápolási dg.: szorongás és fájdalom az ismeretlen betegség és a kórházi környezet miatt. Ápolási cél: a beteg biztonságérzetének javítása, a fájdalom csillapítása. Ápolási tevékenység: 1) Nyugodt, empatikus kommunikáció. 2) A beteg TÁJÉKOZTATÁSA minden beavatkozás előtt. 3) Kardinális tünetek szoros ellenőrzése. 4) Fájdalomcsillapítás orvosi utasításra és a hatás visszamérése.",
    magyarazat: "Egy kórházba érkezett beteg gyakran riadt, nem tudja mi vár rá. A nyugodt, lépésről-lépésre tájékoztatás csökkenti a stressz-érzést és a vérnyomást is."
  },

  {
    tetel: "17. tétel - Anamnézis, felvétel",
    tipus: "feleletvalasztos",
    kerdes: "Miért fontos a beteg TÁJÉKOZTATÁSA minden beavatkozás előtt?",
    valaszok: [
      "Mert a törvény előírja",
      "Csökkenti a szorongást, javítja a biztonságérzetet és az együttműködést",
      "Mert időt nyerünk vele",
      "Csak az orvosi felelősség miatt"
    ],
    helyes: 1,
    magyarazat: "A tájékoztatott beteg jobban kezelhető: nem riadt, nem küzd, együttműködik. Plus: betegjogi szempont is (informed consent). Plus: az ismeretlen ijesztőbb."
  },

  // ----- VÉRVÉTEL SÜRGŐSSÉGI HELYZETBEN -----

  {
    tetel: "17. tétel - Anamnézis, felvétel",
    tipus: "nyitott",
    kerdes: "Mi a sürgősségi felvétel során elvégzendő ápolói feladatsor?",
    valasz: "1) ANAMNÉZIS (lehetőleg gyors, fókuszált). 2) Kardinális tünetek (RR, P, légzés, T) mérése. 3) Fájdalom felmérése (1-10 skálán) és tudatállapot (orientáció). 4) 12 elvezetéses EKG készítése (mellkasi fájdalomnál azonnal). 5) Monitor (folyamatos szívritmus + SpO2). 6) Pozicionálás (Fowler nehézlégzéshez). 7) Vénabiztosítás (perifériás kanül). 8) Sürgősségi laborvérvétel (vércukor, szívenzimek, vérkép). 9) Pszichés támogatás, tájékoztatás. 10) Dokumentáció (lázlap, ápolási lap).",
    magyarazat: "Az ABCDE-elv (Airway, Breathing, Circulation, Disability, Exposure) is hasznos protokoll - a sürgősségi triázs alapja."
  },

  {
    tetel: "17. tétel - Anamnézis, felvétel",
    tipus: "nyitott",
    kerdes: "Mondd el a 17. tétel teljes vázlatát! (anamnézis → kardinális tünetek → EKG → pozicionálás → beavatkozások → ápolási terv)",
    valasz: "1) ANAMNÉZIS (6 elem): személyes adatok, jelen panasz, múltbeli betegségek, ALLERGIA (gyógyszer/étel/fém), szokások (dohányzás, alkohol, diéta), rendszeres gyógyszerek. 2) KARDINÁLIS TÜNETEK: RR, P, légzés, T. + Fájdalom (1-10 skála). + Tudatállapot (orientáció hely/idő/személy, zavartság, aluszékonyság). 3) EKG: sürgősségben 12 elvezetéses (mellkasi fájdalomnál). + Monitor (szívritmus, SpO2). 4) POZICIONÁLÁS: Fowler-helyzet légzési nehézségnél/mellkasi fájdalomnál. Ágyvédelem, higiénia. 5) BEAVATKOZÁSOK: vénabiztosítás (perifériás kanül), vérvétel sürgősségi labor (vércukor, szívenzimek, vérkép), folyamatos dokumentáció. 6) ÁPOLÁSI TERV (sürgősségi felvétel): szorongás + fájdalom. Cél: biztonságérzet, fájdalomcsillapítás. Tevékenységek: nyugodt empatikus kommunikáció, tájékoztatás minden beavatkozás előtt, kardinális tünetek monitorozása, orvosi utasításra fájdalomcsillapító + hatás visszamérése.",
    magyarazat: "Ez a 'felvételi tétel'. Minden új beteg fogadásánál ez a logikus haladás. A pszichés támogatás éppúgy fontos, mint a műszerek."
  },

  // ----- ÚJ LATIN/SZAKKIFEJEZÉSEK -----

  {
    tetel: "Latin - Felvétel és anamnézis",
    tipus: "latin",
    latin: "Anamnesis",
    jelentes: "kórelőzmény (a beteg múltja és aktuális panaszai)",
    kiejtes: "anamnézis",
    magyarazat: "Görög: ana = vissza, mnesis = emlékezés. Egy jó anamnézis önmagában 70-80%-os diagnózist ad."
  },

  {
    tetel: "Latin - Felvétel és anamnézis",
    tipus: "latin",
    latin: "Orientatio",
    jelentes: "tájékozottság (helyhez, időhöz, személyhez)",
    kiejtes: "orientáció",
    magyarazat: "3 dimenzió: hely (kórház, város), idő (nap, év), személy (saját adatok). Bármelyik hiánya = tudatzavar."
  },

  {
    tetel: "Latin - Felvétel és anamnézis",
    tipus: "latin",
    latin: "GCS (Glasgow Coma Scale)",
    jelentes: "tudatállapot felmérési skála (3-15 pont)",
    kiejtes: "gé-cé-eszsz",
    magyarazat: "Szem (1-4), verbális (1-5), motoros (1-6) válaszok. 15 = teljesen éber. 8 alatt → intubáció megfontolandó. 3 = mély kóma."
  },

  {
    tetel: "Latin - Felvétel és anamnézis",
    tipus: "latin",
    latin: "Empátia",
    jelentes: "beleérző képesség, együttérzés a beteg helyzetével",
    kiejtes: "empátia",
    magyarazat: "Az ápolás egyik legfontosabb tulajdonsága. Más, mint a SZIMPÁTIA (sajnálat) - az empátia segít, a szimpátia inkább kiégéshez vezet."
  }

];
