# React + Vite
#DEMO: https://c0zzy98.github.io/orvz-site/?#

Ten szablon zapewnia minimalną konfigurację, aby uruchomić React w Vite z HMR i kilkoma regułami ESLint.

Obecnie dostępne są dwa oficjalne wtyczki:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) używa [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) używa [SWC](https://swc.rs/)

## Kompilator React

Kompilator React nie jest włączony w tym szablonie ze względu na jego wpływ na wydajność podczas pracy i budowania projektu. Aby go dodać, zobacz [tę dokumentację](https://react.dev/learn/react-compiler/installation).

## Rozszerzanie konfiguracji ESLint

Jeśli tworzysz aplikację produkcyjną, zalecamy użycie TypeScript z włączonymi regułami lintowania uwzględniającymi typy. Sprawdź [szablon TS](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts), aby uzyskać informacje o integracji TypeScript i [`typescript-eslint`](https://typescript-eslint.io) w swoim projekcie.

---

## Jak uruchomić projekt (Instrukcja dla początkujących)

Postępuj zgodnie z poniższymi krokami, aby skonfigurować i uruchomić projekt lokalnie:

### Wymagania wstępne

1. **Zainstaluj Node.js**:
   - Pobierz i zainstaluj Node.js z [nodejs.org](https://nodejs.org/).
   - Upewnij się, że instalujesz wersję LTS dla większej stabilności.
   - Po instalacji sprawdź, czy wszystko działa, uruchamiając w terminalu:
     ```bash
     node -v
     npm -v
     ```
     Te polecenia powinny wyświetlić zainstalowane wersje Node.js i npm.

2. **Zainstaluj edytor kodu**:
   - Pobierz i zainstaluj [Visual Studio Code](https://code.visualstudio.com/) (zalecane).

### Kroki do uruchomienia

1. **Sklonuj repozytorium**:
   - Otwórz terminal i uruchom:
     ```bash
     git clone <adres-repozytorium>
     ```
     Zamień `<adres-repozytorium>` na rzeczywisty adres tego repozytorium.

2. **Przejdź do katalogu projektu**:
   - Zmień katalog na folder projektu:
     ```bash
     cd orvz-site
     ```

3. **Zainstaluj zależności**:
   - Uruchom poniższe polecenie, aby zainstalować wszystkie wymagane pakiety:
     ```bash
     npm install
     ```

4. **Uruchom serwer deweloperski**:
   - Uruchom serwer deweloperski poleceniem:
     ```bash
     npm run dev
     ```
   - To uruchomi serwer, a w terminalu powinien pojawić się komunikat o działającym serwerze.

5. **Otwórz aplikację w przeglądarce**:
   - Otwórz przeglądarkę i przejdź do:
     ```
     http://localhost:5173
     ```
   - Jest to domyślny adres, na którym działa serwer deweloperski Vite.

### Rozwiązywanie problemów

- Jeśli napotkasz jakiekolwiek problemy, upewnij się, że masz zainstalowaną najnowszą wersję Node.js i npm.
- Sprawdź terminal pod kątem komunikatów o błędach i postępuj zgodnie z podanymi instrukcjami.
- Jeśli serwer deweloperski nie uruchamia się, spróbuj usunąć folder `node_modules` i ponownie uruchomić `npm install`.

---

Teraz jesteś gotowy do rozwijania i testowania swojej aplikacji React!
