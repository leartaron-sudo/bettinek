// ============================================================
//  BETTI TANULÓ BOT - KÉRDÉSEK
// ============================================================
//  Itt add hozzá a kérdéseket. Ne nyúlj az "const KERDESEK = [" sorhoz
//  és a fájl legvégén lévő "];" jelhez!
//
//  KÉT KÉRDÉSTÍPUS VAN:
//
//  1) FELELETVÁLASZTÓS (kvíz mód)
//     {
//       tetel: "1. tétel - A sejt felépítése",
//       tipus: "feleletvalasztos",
//       kerdes: "Itt a kérdés szövege?",
//       valaszok: [
//         "Első lehetőség",
//         "Második lehetőség",
//         "Harmadik lehetőség",
//         "Negyedik lehetőség"
//       ],
//       helyes: 1,    // 0 = első, 1 = második, 2 = harmadik, 3 = negyedik
//       magyarazat: "Itt a részletes magyarázat, amit akkor lát ha rákattint."
//     },
//
//  2) NYITOTT (szóbeli tétel gyakorlása)
//     {
//       tetel: "1. tétel - A sejt felépítése",
//       tipus: "nyitott",
//       kerdes: "Mondd el mit tudsz a sejtmembránról.",
//       valasz: "A sejtmembrán egy foszfolipid kettős réteg, amely...",
//       magyarazat: "Plusz részletek, példák, kivételek..."
//     },
//
//  3) LATIN (orvosi szókincs - flashcard stílus)
//     {
//       tetel: "Latin - Anatómia",
//       tipus: "latin",
//       latin: "Cor, cordis",            // a latin szó (szótári alak)
//       jelentes: "szív",                 // magyar jelentés
//       kiejtes: "kor",                   // opcionális, segítség kiejtéshez
//       pelda: "Cor pulmonale = a tüdő miatti szívbetegség",   // opcionális
//       magyarazat: "Cardio- előtag innen jön (cardiologia)"   // opcionális
//     },
//
//  FONTOS:
//  - Minden kérdés után KELL egy vessző (kivéve az utolsó után, az is mehet).
//  - A "magyarazat" mező nem kötelező, kihagyhatod ha nincs mit írni.
//  - A "tetel" mezőbe írd ugyanazt a tételhez tartozó kérdéseknél, így
//    később szűrni lehet rájuk.
// ============================================================

const KERDESEK = [

  // --------- PÉLDA KÉRDÉSEK (cseréld le a sajátjaidra) ---------

  {
    tetel: "1. tétel - Sejtbiológia alapjai",
    tipus: "feleletvalasztos",
    kerdes: "Mi a mitokondrium fő szerepe a sejtben?",
    valaszok: [
      "Fehérjeszintézis",
      "ATP (energia) termelése",
      "DNS replikáció",
      "Sejtmembrán felépítése"
    ],
    helyes: 1,
    magyarazat: "A mitokondrium a sejt 'erőműve'. A sejtlégzés során itt történik az ATP előállítása az oxidatív foszforiláció útján. Saját DNS-e van, ami az endoszimbionta elmélet egyik bizonyítéka."
  },

  {
    tetel: "1. tétel - Sejtbiológia alapjai",
    tipus: "feleletvalasztos",
    kerdes: "Melyik sejtszervecske felelős a fehérjeszintézisért?",
    valaszok: [
      "Lizoszóma",
      "Golgi-készülék",
      "Riboszóma",
      "Sejtmag"
    ],
    helyes: 2,
    magyarazat: "A riboszómák állítják elő a fehérjéket az mRNS alapján. Lehetnek szabadon a citoplazmában vagy a durva endoplazmatikus retikulumhoz kötve."
  },

  {
    tetel: "1. tétel - Sejtbiológia alapjai",
    tipus: "nyitott",
    kerdes: "Mit nevezünk homeosztázisnak? Mondj rá példát.",
    valasz: "A homeosztázis a szervezet belső környezetének (pH, hőmérséklet, vércukorszint, ionkoncentráció) viszonylagos állandóságát jelenti, amit szabályozó mechanizmusok tartanak fent. Példa: testhőmérséklet 36-37°C közötti tartása, vércukorszint inzulin-glukagon szabályozással.",
    magyarazat: "Negatív visszacsatolásos rendszerek tartják fenn (pl. termoszabályozás, ozmoreguláció). A homeosztázis felborulása betegséghez vezet."
  },

  {
    tetel: "2. tétel - Keringési rendszer",
    tipus: "feleletvalasztos",
    kerdes: "Hány kamrája van az emberi szívnek?",
    valaszok: [
      "1",
      "2",
      "3",
      "4"
    ],
    helyes: 3,
    magyarazat: "Az emberi szív 4 üregből áll: 2 pitvar (jobb és bal) és 2 kamra (jobb és bal). A jobb fél a kis vérkört, a bal fél a nagy vérkört látja el."
  },

  {
    tetel: "2. tétel - Keringési rendszer",
    tipus: "nyitott",
    kerdes: "Mi a különbség az artériák és vénák között?",
    valasz: "Artériák: a szívtől szállítják el a vért, vastag, izmos és rugalmas falúak, magasabb nyomás van bennük, lüktetnek. Vénák: a szívhez szállítják vissza a vért, vékonyabb falúak, alacsonyabb nyomás van bennük, billentyűk akadályozzák a visszaáramlást.",
    magyarazat: "Kivétel: a tüdőartéria oxigénszegény, a tüdővéna oxigéndús vért szállít. Az aorta a legnagyobb artéria."
  },

  {
    tetel: "3. tétel - Vérkép és vér",
    tipus: "feleletvalasztos",
    kerdes: "Melyik vérsejt szállítja az oxigént?",
    valaszok: [
      "Fehérvérsejt (leukocita)",
      "Vörösvérsejt (eritrocita)",
      "Vérlemezke (trombocita)",
      "Limfocita"
    ],
    helyes: 1,
    magyarazat: "A vörösvérsejtek (eritrociták) tartalmaznak hemoglobint, ami az oxigént megköti és szállítja. Nincs sejtmagjuk, élettartamuk kb. 120 nap."
  },

  // --------- LATIN SZÓKINCS - PÉLDÁK ---------

  {
    tetel: "Latin - Anatómia",
    tipus: "latin",
    latin: "Cor, cordis",
    jelentes: "szív",
    kiejtes: "kor",
    pelda: "Cor pulmonale = a tüdő miatti szívbetegség",
    magyarazat: "Innen ered a 'cardio-' előtag (cardiologia, cardiogram)."
  },

  {
    tetel: "Latin - Anatómia",
    tipus: "latin",
    latin: "Pulmo, pulmonis",
    jelentes: "tüdő",
    kiejtes: "pulmó",
    pelda: "Pulmonalis = tüdőhöz tartozó (pl. arteria pulmonalis)",
    magyarazat: "A 'pulmonológia' = tüdőgyógyászat."
  },

  {
    tetel: "Latin - Anatómia",
    tipus: "latin",
    latin: "Hepar, hepatis",
    jelentes: "máj",
    kiejtes: "hepar",
    pelda: "Hepatitis = májgyulladás",
    magyarazat: "A 'hepato-' előtag a májra utal (hepatocita = májsejt)."
  },

  {
    tetel: "Latin - Toldalékok",
    tipus: "latin",
    latin: "-itis",
    jelentes: "gyulladás",
    pelda: "Gastritis = gyomorgyulladás, Bronchitis = hörgőgyulladás",
    magyarazat: "Mindig a szervet jelölő szóhoz kapcsolódik. Pl. nephr (vese) + itis = nephritis = vesegyulladás."
  },

  {
    tetel: "Latin - Toldalékok",
    tipus: "latin",
    latin: "-ectomia",
    jelentes: "(szerv) eltávolítása, kimetszése",
    kiejtes: "-ektómia",
    pelda: "Appendectomia = vakbél eltávolítása, Mastectomia = emlő eltávolítása",
    magyarazat: "Az '-ectomia' minden esetben sebészi eltávolítást jelent. Hasonló: '-tomia' = bemetszés, '-stomia' = mesterséges szájadék készítése."
  },

  {
    tetel: "Latin - Kifejezések",
    tipus: "latin",
    latin: "Per os (p.o.)",
    jelentes: "szájon át (gyógyszerelés módja)",
    kiejtes: "per ósz",
    pelda: "Tabletta p.o. = tabletta szájon át bevéve",
    magyarazat: "Receptek, lázlapok rövidítése. Más utak: i.v. = intravenás, i.m. = intramuscularis (izomba), s.c. = subcutan (bőr alá)."
  }

];
