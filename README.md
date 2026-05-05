# Betti Tanuló Bot

Egyszerű, böngészőben futó tanuló alkalmazás Bettinek az egészségügyi szakvizsgára. Random kérdéseket tesz fel a tételekből, kvíz és szóbeli (nyitott) módban is.

## Funkciók

- **Kétféle kérdéstípus**: feleletválasztós (A/B/C/D) és nyitott (szóbeli tétel gyakorlása)
- **Tétel szerinti szűrés**: csak egy adott tételre koncentrálni
- **"Csak a rosszakat ismételd"** mód: amit elrontottál, azt addig dobja vissza, míg meg nem oldod
- **Statisztika**: hány kérdést válaszoltál meg, hány volt jó/rossz, milyen arányban
- **Magyarázat opcionálisan**: rákattintasz, akkor jelenik meg a részletes leírás
- **Reszponzív**: telefon, tablet, gép — bárhol jól néz ki
- **Offline is működik**: nem kell internet, csak megnyitod a böngészőben

---

## Hogyan használjam? (helyi gépen)

1. Töltsd le mindhárom fájlt egy mappába:
   - `index.html`
   - `kerdesek.js`
   - `README.md` (ez)
2. Dupla katt az `index.html`-re. Megnyílik a böngészőben.
3. Válaszolj a kérdésekre. A statisztika automatikusan mentődik.

**Ennyi.** Nincs telepítés, nincs futtatókörnyezet, nincs internet kapcsolat.

---

## Hogyan adok hozzá kérdést?

Nyisd meg a `kerdesek.js` fájlt egy szövegszerkesztőben (Notepad, VS Code, akármi).

A fájl tetején van egy részletes útmutató kommentárban — olvasd át. Lényeg:

### Feleletválasztós kérdés sablon

```javascript
{
  tetel: "5. tétel - Légzőrendszer",
  tipus: "feleletvalasztos",
  kerdes: "Hány lebenyből áll a jobb tüdő?",
  valaszok: [
    "Egy",
    "Kettő",
    "Három",
    "Négy"
  ],
  helyes: 2,    // 0=első, 1=második, 2=harmadik, 3=negyedik
  magyarazat: "A jobb tüdő három lebenyből áll (felső, középső, alsó), a bal kettőből (a szív miatt)."
},
```

### Nyitott (szóbeli) kérdés sablon

```javascript
{
  tetel: "5. tétel - Légzőrendszer",
  tipus: "nyitott",
  kerdes: "Mondd el a légzés szabályozását.",
  valasz: "A légzést a nyúltvelői légzőközpont szabályozza. Központi és perifériás kemoreceptorok érzékelik a CO2 és O2 szintet...",
  magyarazat: "Plusz részletek: Hering-Breuer reflex, akarati befolyásolás..."
},
```

### Latin szókincs sablon (flashcard mód)

```javascript
{
  tetel: "Latin - Anatómia",
  tipus: "latin",
  latin: "Cor, cordis",                                    // a latin szó
  jelentes: "szív",                                         // magyar jelentés
  kiejtes: "kor",                                           // OPCIONÁLIS
  pelda: "Cor pulmonale = a tüdő miatti szívbetegség",     // OPCIONÁLIS
  magyarazat: "Cardio- előtag innen jön (cardiologia)"     // OPCIONÁLIS
},
```

A `kiejtes`, `pelda`, `magyarazat` mezők bármelyikét kihagyhatod, ha nincs rá szükség. Csak a `latin` és `jelentes` kötelező.

**Fontos szabályok:**

- Minden kérdés `{` jellel kezdődik és `}` jellel végződik
- A kérdések közé `,` (vessző) kell
- Ne nyúlj a fájl tetején lévő `const KERDESEK = [` és a végén lévő `];` sorhoz
- A `magyarazat` mező nem kötelező, kihagyhatod
- A `helyes` mezőnél a sorszám **0-tól indul** (tehát ha az első válasz a jó, akkor `0`)

### Tipp: másold a sablont

Másolj le egy meglévő kérdést a `kerdesek.js`-ből, és csak a tartalmat írd át. Így biztos nem hibázod el a szerkezetet.

### Mentés után

Mentés → frissítsd a böngészőt (F5). Az új kérdés azonnal jön.

---

## Feltöltés GitHubra (online elérés)

Ha azt akarod, hogy Betti bárhonnan elérje (telefonon, másik gépen), tedd fel GitHub Pages-re. Ez **ingyenes** és pár perc.

### Lépésről lépésre

**1. Hozz létre egy GitHub repót**

- Menj a [github.com](https://github.com)-ra, jelentkezz be / regisztrálj
- Jobb fent: **+** → **New repository**
- Név pl.: `betti-tanulo-bot`
- **Public** legyen (a GitHub Pages ingyenes verziójához ez kell)
- Kattints **Create repository**

**2. Töltsd fel a fájlokat**

A legegyszerűbb módszer (nem kell git tudás):

- Az új repó oldalán kattints **uploading an existing file** linkre
- Húzd be a 3 fájlt (`index.html`, `kerdesek.js`, `README.md`)
- Lent: **Commit changes**

**3. Kapcsold be a GitHub Pages-t**

- A repó oldalán: **Settings** (jobbra fent)
- Bal oldali menü: **Pages**
- **Source**: válaszd **Deploy from a branch**
- **Branch**: `main`, mappa `/ (root)`
- **Save**

**4. Várj 1-2 percet**

- A Pages oldalon megjelenik a link, valami ilyesmi:
  `https://felhasznalonev.github.io/betti-tanulo-bot/`
- Ezt küldd át Bettinek, könyvjelzőzze le, és kész.

### Új kérdés feltöltése később

- Szerkeszd a `kerdesek.js`-t a gépeden (vagy közvetlenül GitHubon a fájlra kattintva → ceruza ikon)
- GitHubon: **Commit changes**
- 1-2 perc múlva frissítve van az online verzió is

### Figyelem

⚠️ **A publikus repó tartalma bárki által látható**, vagyis a kérdéseidet is. Egészségügyi tanulóanyagnál ez általában nem probléma (sőt, segíthet más diákokat is), de ha bizalmas, akkor:
- Privát repó + Cloudflare Pages / Netlify (kicsit bonyolultabb)
- VAGY tartsd lokálisan, és csak a saját gépén használja

---

## Hibakeresés

**Üres oldal nyílik meg / "Nincs kérdés" üzenet**
→ A `kerdesek.js` ugyanabban a mappában van, mint az `index.html`? Ha igen, lehet hogy szintaxis hiba van a `kerdesek.js`-ben (lemaradt vessző, hiányzó zárójel). Nyisd meg a böngésző konzolt (F12) — ott megmutatja.

**Statisztika eltűnt**
→ Másik böngészőt használsz, vagy törölted a böngészési adatokat. A localStorage böngésző+domain szinten tárol.

**Nem akarom hogy megjegyezze a statisztikát**
→ Inkognitó/privát ablakban nyisd meg.

---

## Fájlszerkezet

```
betti-tanulo-bot/
├── index.html      ← maga az alkalmazás (ehhez nem kell nyúlni)
├── kerdesek.js     ← itt vannak a kérdések (ezt szerkeszted)
└── README.md       ← ez a leírás
```

Csak a `kerdesek.js`-t kell szerkesztened a tanuláshoz. Az `index.html` magában már mindent tud.
