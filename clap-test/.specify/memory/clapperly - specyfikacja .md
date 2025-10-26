i.

---

## **Pełna Specyfikacja Funkcjonalna Aplikacji Internetowej: Clapperly**

Wersja dokumentu: 2.0 (Kompletna)  
Data utworzenia: 25.10.2025  
Autor: Analiza funkcjonalna \+ UX/UI (Gemini)

### **1\. Wprowadzenie i Cele Biznesowe**

#### **1.1. Wizja Produktu**

Clapperly to zintegrowana, hybrydowa platforma cyfrowa, pełniąca rolę centralnego ekosystemu dla polskiej branży produkcji filmowej i wideo. Celem projektu jest rozwiązanie problemów rynkowych, takich jak fragmentacja zasobów, niska efektywność procesów zaopatrzeniowych oraz brak transparentności. Platforma ma stać się kluczowym, codziennym narzędziem pracy dla całej branży, standaryzując i digitalizując kluczowe procesy.

#### **1.2. Model Hybrydowy**

Platforma opiera się na innowacyjnym, dwutorowym modelu działania, aby zapewnić maksymalną elastyczność:

* **Model "Reverse Marketplace" (Rynek Odwrócony):** Producenci publikują szczegółowe zapytania (briefy), na które zweryfikowani dostawcy odpowiadają spersonalizowanymi ofertami. Idealne dla złożonych i unikalnych projektów.  
* **Model Katalogu Usług (Rynek Bezpośredni):** Przeszukiwalny katalog standardowych usług, sprzętu,przedmiotów,  miejsc i talentów z predefiniowanymi cenami, umożliwiający natychmiastowy kontakt, zakup lub rezerwację.

### **2\. Role Użytkowników i Uprawnienia**

System przewiduje kilka kluczowych ról z różnymi poziomami uprawnień.

| Rola | Opis | Kluczowe Uprawnienia |
| :---- | :---- | :---- |
| **Gość (Niezalogowany)** | Użytkownik odwiedzający platformę bez aktywnej sesji. | \- Przeglądanie strony głównej (Landing Page).  \- Przeglądanie Katalogu Usług i profili publicznych.  \- Wyszukiwanie i filtrowanie ofert w katalogu. |
| **Zleceniodawca** | Osoba lub firma poszukująca usług, miejsc przedmiotów, sprzętu lub talentów (np. producent, dom produkcyjny, dom mediowy, agencja marketingowa, studenci studiów o kierunkach filmowych i mediowych). | \- Wszystkie uprawnienia Gościa.  \- Rejestracja i logowanie.  \- Tworzenie i publikowanie briefów.  \- Przeglądanie i porównywanie ofert do briefów.  \- Komunikacja z Dostawcami.  \- Dokonywanie rezerwacji i zakupów w Katalogu Usług.  \- Zarządzanie projektami (mini-CRM).  \- Wystawianie ocen i opinii po transakcji. |
| **Dostawca** | Osoba lub firma oferująca swoje usługi, miejsca, przednioty, sprzęt lub talenty (np. freelancer, wypożyczalnia, aktor). | \- Wszystkie uprawnienia Gościa.  \- Rejestracja i logowanie.  \- Tworzenie i zarządzanie profilem/portfolio.  \- Wystawianie usług/sprzętu w Katalogu Usług.  \- Składanie ofert w odpowiedzi na briefy.  \- Zarządzanie kalendarzem dostępności.  \- Zarządzanie płatnościami i subskrypcjami. |
| **Administrator Systemu** | Zespół Clapperly zarządzający platformą. | \- Zarządzanie kontami użytkowników i firm.  \- Weryfikacja tożsamości (KRS, CEIDG).  \- Zarządzanie kategoriami i taksonomią.  \- Moderowanie treści (ofert, briefów).  \- Zarządzanie subskrypcjami i płatnościami.  \- Dostęp do analityki platformy. |

---

### **3\. Główne Moduły i Wymagania Funkcjonalne**

#### **F-100: Zarządzanie Użytkownikami i Uwierzytelnianie**

* **F-101:** System musi umożliwiać rejestrację nowych użytkowników z podziałem na typ konta (np. Zleceniodawca, Dostawca).  
* **F-102:** Proces rejestracji musi obejmować weryfikację adresu e-mail i numeru telefonu.  
* **F-103:** System musi zapewniać bezpieczne logowanie za pomocą e-maila i hasła.  
* **F-104:** Użytkownicy muszą mieć możliwość resetowania zapomnianego hasła.  
* **F-105:** System musi wdrażać rygorystyczny proces weryfikacji tożsamości dla Dostawców, w tym weryfikację firm poprzez bazy KRS i CEIDG.  
* **F-106:** Użytkownicy mogą należeć do organizacji (firmy), która pozwala na wspólne zarządzanie ofertami i projektami.

#### **F-200: Model "Reverse Marketplace" (Rynek Odwrócony)**

* **F-201:** Zleceniodawcy muszą mieć możliwość tworzenia szczegółowych zapytań (briefów) za pomocą dynamicznego, wieloetapowego formularza.  
* **F-202:** Brief musi pozwalać na określenie m.in. kategorii, lokalizacji, budżetu (opcjonalnie) oraz szczegółowego opisu zapotrzebowania.  
* **F-203:** Platforma musi posiadać algorytm, który analizuje treść briefu i wysyła targetowane powiadomienia do pasujących Dostawców.  
* **F-204:** Zweryfikowani Dostawcy muszą mieć możliwość składania spersonalizowanych ofert w odpowiedzi na briefy.  
* **F-205:** Zleceniodawca musi mieć dostęp do dedykowanego panelu, w którym może przeglądać, porównywać i zarządzać otrzymanymi ofertami.  
* **F-206:** System musi udostępniać wbudowany komunikator (czat) do prowadzenia negocjacji między Zleceniodawcą a Dostawcą.

#### **F-300: Model Katalogu Usług (Rynek Bezpośredni)**

* **F-301:** Dostawcy muszą mieć możliwość dodawania swoich usług, sprzętu lub talentów do publicznego katalogu.  
* **F-302:** Oferta w katalogu musi zawierać m.in. tytuł, opis, kategorię, lokalizację, cennik (np. za dzień, za sztukę), zdjęcia/filmy oraz kalendarz dostępności.  
* **F-303:** Użytkownicy muszą mieć możliwość przeglądania katalogu z zaawansowanymi opcjami filtrowania (po kategorii, lokalizacji, cenie, dostępności) i sortowania.  
* **F-304:** Zleceniodawcy muszą mieć możliwość natychmiastowego zakupu lub rezerwacji usługi/sprzętu bezpośrednio z poziomu katalogu.

#### **F-400: Zarządzanie Ofertami i Profilami Dostawców**

* **F-401:** Każdy Dostawca musi posiadać publiczny profil, pełniący rolę dynamicznej, multimedialnej wizytówki.  
* **F-402:** Profil musi umożliwiać stworzenie portfolio, w tym dodawanie zdjęć i osadzanie filmów z serwisów zewnętrznych (np. Vimeo).  
* **F-403:** Aktorzy muszą mieć możliwość opublikowania swojego profilu jako oferty.  
* **F-404:** Dostawcy muszą mieć dostęp do panelu użytkownika, w którym mogą edytować swoje dane, zarządzać wystawionymi usługami oraz historią transakcji.  
* **F-405:** Każda oferta musi mieć możliwość powiązania z kalendarzem dostępności.

#### **F-500: System Płatności i Monetyzacja**

* **F-501:** Platforma musi pobierać prowizję od każdej transakcji (10-15% od Dostawcy, 3-5% opłaty serwisowej od Zleceniodawcy).  
* **F-502:** System musi obsługiwać model subskrypcyjny (Freemium) dla Dostawców.  
  * **Poziom "Free":** Ograniczona liczba ofert i odpowiedzi.  
  * **Poziom "Pro":** Nielimitowane oferty, lepsza widoczność.  
* **F-503:** Dostawcy na planie "Free" muszą mieć możliwość jednorazowej opłaty za publikację dodatkowej usługi.  
* **F-504:** Wszystkie transakcje muszą być zabezpieczone systemem Escrow (depozytowym).  
* **F-505:** Użytkownicy muszą mieć dostęp do pełnej historii swoich płatności.  
* **F-506:** System musi umożliwiać wyróżnianie (promowanie) briefów i ofert za dodatkową opłatą.

#### **F-600: Zaufanie i Bezpieczeństwo**

* **F-601:** System musi implementować dwustronny system ocen i recenzji.  
* **F-602:** Platforma musi oferować zintegrowany system ubezpieczeń ("clapperly Care") na wynajem sprzętu i OC.

#### **F-700: Wyszukiwanie i Lokalizacja**

* **F-701:** Wyszukiwarka platformy musi obsługiwać pełnotekstowe wyszukiwanie w języku polskim.  
* **F-702:** Każda oferta musi być przypisana do lokalizacji, co umożliwi wyszukiwanie geoprzestrzenne (PostGIS).  
* **F-703:** Użytkownicy muszą mieć możliwość zapisywania kryteriów wyszukiwania i tworzenia alertów e-mail.

#### **F-800: Zarządzanie Kategoriami**

* **F-801:** System musi być oparty o wielopoziomowy, hierarchiczny katalog kategorii, zgodnie ze strukturą z **Załącznika A**.  
* **F-802:** Administratorzy muszą mieć możliwość zarządzania strukturą kategorii z panelu administracyjnego.  
* **F-803:** Formularz dodawania oferty/briefu musi dynamicznie prezentować pola adekwatne do wybranej kategorii.  
* **F-804:** Interfejs filtrowania musi pozwalać na nawigację po drzewie kategorii.

---

### **4\. Specyfikacja UX/UI**

#### **4.1. Filozofia Projektowa**

Interfejs użytkownika zostanie zaprojektowany z myślą o **klarowności, profesjonalizmie i wydajności**. Proponuje się **jasny, czysty interfejs** jako domyślny, aby zapewnić komfort pracy z dużą ilością danych.

* **Paleta Kolorów:** Neutralna, profesjonalna paleta (odcienie szarości, bieli) z jednym mocnym kolorem akcentującym (np. kobaltowy błękit) do podkreślania kluczowych akcji (CTA).  
* **Typografia:** Czytelny, nowoczesny krój pisma bezszeryfowego (np. Inter, Lato).  
* **System Projektowy (Design System):** Interfejs będzie oparty o spójny system komponentów, zgodny z wytycznymi **Material Design 3**. Zapewni to przewidywalność interakcji, responsywność i dostępność (WCAG).

#### **4.2. Lista Ekranów i Kluczowe Komponenty**

* **E-01: Strona Główna (Landing Page):** Prezentacja wartości, CTA do rejestracji, promowane oferty.  
* **E-02: Katalog Usług (Marketplace):** Wyszukiwarka, zaawansowany panel filtrowania, siatka/lista wyników.  
* **E-03: Strona Szczegółów Usługi/Produktu:** Galeria, opis, cennik, kalendarz dostępności, przycisk rezerwacji.  
* **E-04: Proces Tworzenia Briefu:** Wieloetapowy, dynamiczny formularz.  
* **E-05: Panel Zarządzania Briefem:** Porównywarka ofert, czat do negocjacji.  
* **E-06: Panel Użytkownika (Dashboard):** Centralne miejsce do zarządzania aktywnością, powiadomienia.  
* **E-07: Proces Dodawania/Edycji Usługi:** Wieloetapowy formularz z interfejsem "przeciągnij i upuść".  
* **E-08: Profil Publiczny Dostawcy:** Profesjonalna wizytówka z portfolio i opiniami.

---

### **5\. Architektura Techniczna i Model Danych**

#### **5.1. Stos Technologiczny**

* **Frontend:** Single Page Application (SPA) \- **Vue.js**, stylizacja \- **Tailwind CSS**.  
* **Backend:** Środowisko uruchomieniowe \- **Node.js**.  
* **Baza Danych:** Obiektowo-relacyjna baza danych **PostgreSQL** z rozszerzeniem **PostGIS** (zapytania geoprzestrzenne) i wbudowanymi narzędziami do wyszukiwania pełnotekstowego.

#### **5.2. Kluczowe Encje Danych**

* **Uzytkownicy (users):** Dane, role, status weryfikacji.  
* **Firmy (companies):** Dane firmowe (NIP, KRS), grupowanie użytkowników.  
* **Oferty (listings):** Usługi, sprzęt, talenty w Katalogu.  
* **Zapytania (briefs):** Briefy publikowane w modelu Reverse Marketplace.  
* **Oferty\_do\_zapytan (bids):** Odpowiedzi Dostawców na briefs.  
* **Kategorie (categories):** Hierarchiczna struktura kategorii (rekurencyjna).  
* **Lokalizacje (locations):** Dane adresowe i współrzędne geograficzne (geometria PostGIS).  
* **Subskrypcje (subscriptions):** Plany subskrypcyjne.  
* **Platnosci (payments):** Historia transakcji.  
* **Media (media):** Zdjęcia i metadane filmów.  
* **Kalendarze (calendars):** Zapisy o dostępności/zajętości.  
* **Projekty (projects):** Prosty CRM do zarządzania zleceniami.

---

### **Załącznik A: Katalog Kategorii**

#### **1\. Ekipa Filmowa (Crew)**

* **1.1. Reżyseria i Asystenci:** Reżyser, II Reżyser, Asystent Reżysera, Script Supervisor.  
* **1.2. Produkcja:** Producent, Kierownik Produkcji, Kierownik Planu, Koordynator Produkcji, Asystent Produkcji.  
* **1.3. Zdjęcia i Oświetlenie:** Operator Obrazu, Operator Kamery, Asystent Kamery, Mistrz Oświetlenia, Oświetlacz, Key Grip, Grip/Wózkarz, Technik DIT.  
* **1.4. Dźwięk:** Operator Dźwięku na Planie, Mikrofoniarz.  
* **1.5. Scenografia i Kostiumy:** Scenograf, Dekorator Wnętrz, Rekwizytor, Kostiumograf, Stylista.  
* **1.6. Charakteryzacja:** Charakteryzator, Wizażysta, Stylista Fryzur.  
* **1.7. Inne Role na Planie:** Kaskader, Dyżurny Planu, Catering filmowy.

#### **2\. Obsada (Talent)**

* **2.1. Aktorzy i Aktorki:** Aktor/Aktorka, Aktor Głosowy/Lektor.  
* **2.2. Epizodyści i Statyści:** Epizodysta, Statysta.  
* **2.3. Inne Talenty:** Tancerz, Model/Modelka.

#### **3\. Sprzęt (Equipment)**

* **3.1. Kamery:** Cyfrowe, Analogowe, DSLR/Mirrorless.  
* **3.2. Obiektywy i Akcesoria:** Obiektywy, Filtry, Matte Box/Follow Focus.  
* **3.3. Oświetlenie:** Lampy LED, HMI, Tungsten, Statywy i Akcesoria.  
* **3.4. Dźwięk:** Mikrofony, Rejestratory, Tyczki.  
* **3.5. Grip i Stabilizacja:** Statywy, Gimbale/Steadicam, Dolly, Kran Kamerowy.  
* **3.6. Drony i Sprzęt Specjalistyczny:** Drony Filmowe, Kamery podwodne.

#### **4\. Postprodukcja (Post-Production)**

* **4.1. Montaż:** Montażysta Obrazu, Asystent Montażysty.  
* **4.2. Dźwięk:** Montaż Dźwięku, Sound Design, Miks Dźwięku, Kompozytor Muzyki.  
* **4.3. Obraz:** Korekcja Barwna, Efekty Wizualne (VFX), Animacja/Motion Graphics.  
* **4.4. Studia Postprodukcyjne:** Studio Montażowe, Studio Dźwiękowe.

#### **5\. Lokacje (Locations)**

* **5.1. Wnętrza:** Apartamenty, Domy, Biura, Hale, Studia Filmowe.  
* **5.2. Plenery:** Miejskie, Natura, Obiekty Specjalne.

#### **6\. Usługi Produkcyjne (Production Services)**

* **6.1. Transport i Logistyka:** Wynajem Pojazdów, Transport Sprzętu.  
* **6.2. Ubezpieczenia:** Ubezpieczenie Sprzętu, OC Produkcji.  
* **6.3. Prawo i Księgowość:** Obsługa Prawna, Obsługa Księgowa.  
* **6.4. Szkolenia i Warsztaty:** Warsztaty Aktorskie, Warsztaty Operatorskie.