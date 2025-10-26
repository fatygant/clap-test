<template>
  <div class="min-h-screen bg-clapperly-dark">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 bg-clapperly-gray border-b border-clapperly-border h-[75px] z-50">
      <div class="container mx-auto px-20 h-full flex items-center justify-between">
        <div class="flex items-center gap-10">
          <router-link to="/" class="text-clapperly-gold text-2xl font-bold">Clapperly</router-link>
          <div class="flex gap-8">
            <router-link to="/catalog" class="text-clapperly-text text-base font-medium hover:text-clapperly-gold">Katalog</router-link>
            <a href="#how-it-works" class="text-clapperly-text text-base font-medium hover:text-clapperly-gold">Jak to działa?</a>
          </div>
        </div>
        <div class="flex gap-4">
          <button class="px-6 py-2 rounded-lg border border-clapperly-gold text-clapperly-gold text-base font-medium hover:bg-clapperly-gold/10">
            Zaloguj się
          </button>
          <button class="px-6 py-2 rounded-lg bg-clapperly-gold text-clapperly-dark text-base font-medium hover:bg-clapperly-gold/90">
            Załóż konto
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative h-[600px] mt-[75px] overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10"></div>
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1440&q=80" alt="Film production" class="w-full h-full object-cover" />
      </div>
      <div class="relative z-20 container mx-auto px-20 h-full flex items-center justify-center">
        <div class="text-center max-w-3xl">
          <h2 class="text-5xl md:text-6xl font-bold text-clapperly-text mb-6 leading-tight">
            Centralne Miejsce 
            <span class="text-clapperly-gold">Polskiej Branży Filmowej</span>
          </h2>
          <p class="text-xl text-gray-300 mb-10">
            Platforma łącząca producentów filmowych z najlepszymi dostawcami usług. Publikuj briefe, otrzymuj oferty i realizuj projekty z zaufanymi profesjonalistami.
          </p>
          <button class="bg-clapperly-gold text-clapperly-dark px-10 py-4 rounded-lg text-lg font-semibold hover:bg-clapperly-gold/90 transition-colors">
            Opublikuj brief za darmo
          </button>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="py-20 container mx-auto px-20">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-clapperly-text mb-4">Jak to działa?</h2>
        <p class="text-lg text-clapperly-text-dim">Prosty proces dla producentów i dostawców</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        <div class="text-center">
          <div class="w-20 h-20 rounded-full bg-clapperly-gray border border-clapperly-border flex items-center justify-center mx-auto mb-6">
            <svg class="w-10 h-10 text-clapperly-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-clapperly-text mb-3">1. Opisz potrzeby</h3>
          <p class="text-clapperly-text-dim">Stwórz szczegółowy brief z wymaganiami projektu filmowego</p>
        </div>
        <div class="text-center">
          <div class="w-20 h-20 rounded-full bg-clapperly-gray border border-clapperly-border flex items-center justify-center mx-auto mb-6">
            <svg class="w-10 h-10 text-clapperly-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-clapperly-text mb-3">2. Otrzymaj oferty</h3>
          <p class="text-clapperly-text-dim">Dostawcy zgłaszają się z konkurencyjnymi propozycjami</p>
        </div>
        <div class="text-center">
          <div class="w-20 h-20 rounded-full bg-clapperly-gray border border-clapperly-border flex items-center justify-center mx-auto mb-6">
            <svg class="w-10 h-10 text-clapperly-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-clapperly-text mb-3">3. Zrealizuj projekt</h3>
          <p class="text-clapperly-text-dim">Wybierz najlepszą ofertę i współpracuj bezpiecznie</p>
        </div>
      </div>
    </section>

    <!-- Featured Services Section -->
    <section class="bg-clapperly-gray py-20">
      <div class="container mx-auto px-20">
        <div class="flex justify-between items-start mb-12">
          <div>
            <h2 class="text-4xl font-bold text-clapperly-text mb-4">Wyróżnione usługi</h2>
            <p class="text-lg text-clapperly-text-dim">Najlepsze oferty od zaufanych profesjonalistów</p>
          </div>
          <div class="flex gap-2">
            <button class="w-12 h-12 rounded-full bg-clapperly-dark border border-clapperly-border flex items-center justify-center hover:bg-clapperly-dark/80">
              <svg class="w-5 h-5 text-clapperly-text" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </button>
            <button class="w-12 h-12 rounded-full bg-clapperly-dark border border-clapperly-border flex items-center justify-center hover:bg-clapperly-dark/80">
              <svg class="w-5 h-5 text-clapperly-text" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Service Card 1 -->
          <div class="bg-clapperly-dark border border-clapperly-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gray-600">
              <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80" alt="Camera operator" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <div class="text-sm text-clapperly-gold font-medium mb-2">OPERATOR KAMERY</div>
              <h3 class="text-lg font-semibold text-clapperly-text mb-3">Usługi operatorskie RED Camera</h3>
              <div class="flex justify-between items-center">
                <span class="text-clapperly-gold font-bold text-xl">od 2500 zł/dzień</span>
                <div class="flex items-center gap-1">
                  <svg class="w-4 h-4 text-clapperly-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span class="text-sm text-clapperly-text-dim">4.9</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Service Card 2 -->
          <div class="bg-clapperly-dark border border-clapperly-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gray-600">
              <img src="https://images.unsplash.com/photo-1478720568477-152ef9d8b7ea?w=400&q=80" alt="Lighting" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <div class="text-sm text-clapperly-gold font-medium mb-2">OŚWIETLENIE</div>
              <h3 class="text-lg font-semibold text-clapperly-text mb-3">Kompleksowe oświetlenie LED</h3>
              <div class="flex justify-between items-center">
                <span class="text-clapperly-gold font-bold text-xl">od 1800 zł/dzień</span>
                <div class="flex items-center gap-1">
                  <svg class="w-4 h-4 text-clapperly-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span class="text-sm text-clapperly-text-dim">4.8</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Service Card 3 -->
          <div class="bg-clapperly-dark border border-clapperly-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gray-600">
              <img src="https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=400&q=80" alt="Sound recording" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <div class="text-sm text-clapperly-gold font-medium mb-2">DŹWIĘK</div>
              <h3 class="text-lg font-semibold text-clapperly-text mb-3">Nagrywanie dźwięku na planie</h3>
              <div class="flex justify-between items-center">
                <span class="text-clapperly-gold font-bold text-xl">od 1200 zł/dzień</span>
                <div class="flex items-center gap-1">
                  <svg class="w-4 h-4 text-clapperly-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span class="text-sm text-clapperly-text-dim">5.0</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Service Card 4 -->
          <div class="bg-clapperly-dark border border-clapperly-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gray-600">
              <img src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&q=80" alt="Post production" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <div class="text-sm text-clapperly-gold font-medium mb-2">POSTPRODUKCJA</div>
              <h3 class="text-lg font-semibold text-clapperly-text mb-3">Montaż i koloryzacja</h3>
              <div class="flex justify-between items-center">
                <span class="text-clapperly-gold font-bold text-xl">od 800 zł/dzień</span>
                <div class="flex items-center gap-1">
                  <svg class="w-4 h-4 text-clapperly-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span class="text-sm text-clapperly-text-dim">4.7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 container mx-auto px-20">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-clapperly-text mb-4">Zaufali nam profesjonaliści</h2>
        <p class="text-lg text-clapperly-text-dim">Opinie producentów i dostawców usług</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <!-- Testimonial 1 -->
        <div class="bg-clapperly-gray border border-clapperly-border rounded-lg p-8">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 rounded-full bg-clapperly-gold"></div>
            <div>
              <h4 class="font-semibold text-clapperly-text">Anna Kowalska</h4>
              <p class="text-sm text-clapperly-text-dim">Producentka filmowa</p>
            </div>
          </div>
          <p class="text-clapperly-text-dim mb-4">"Dzięki Clapperly znalazłam najlepszych operatorów w Polsce. Platforma znacznie uprościła proces rekrutacji ekipy."</p>
          <div class="flex gap-1">
            <svg class="w-5 h-5 text-clapperly-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg class="w-5 h-5 text-clapperly-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg class="w-5 h-5 text-clapperly-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg class="w-5 h-5 text-clapperly-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg class="w-5 h-5 text-clapperly-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>

        <!-- Testimonial 2 -->
        <div class="bg-clapperly-gray border border-clapperly-border rounded-lg p-8">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 rounded-full bg-clapperly-gold"></div>
            <div>
              <h4 class="font-semibold text-clapperly-text">Marcin Nowak</h4>
              <p class="text-sm text-clapperly-text-dim">Operator kamery</p>
            </div>
          </div>
          <p class="text-clapperly-text-dim mb-4">"Jako freelancer, Clapperly daje mi dostęp do najciekawszych projektów filmowych. Regularne zlecenia i uczciwe płatności."</p>
          <div class="flex gap-1">
            <svg class="w-5 h-5 text-clapperly-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg class="w-5 h-5 text-clapperly-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg class="w-5 h-5 text-clapperly-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg class="w-5 h-5 text-clapperly-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg class="w-5 h-5 text-clapperly-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>

        <!-- Testimonial 3 -->
        <div class="bg-clapperly-gray border border-clapperly-border rounded-lg p-8">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 rounded-full bg-clapperly-gold"></div>
            <div>
              <h4 class="font-semibold text-clapperly-text">Katarzyna Wiśniewska</h4>
              <p class="text-sm text-clapperly-text-dim">Reżyserka</p>
            </div>
          </div>
          <p class="text-clapperly-text-dim mb-4">"Bezpieczne płatności i profesjonalna obsługa. Clapperly to must-have dla każdego producenta w Polsce."</p>
          <div class="flex gap-1">
            <svg class="w-5 h-5 text-clapperly-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg class="w-5 h-5 text-clapperly-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg class="w-5 h-5 text-clapperly-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg class="w-5 h-5 text-clapperly-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg class="w-5 h-5 text-clapperly-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-clapperly-gray py-20">
      <div class="container mx-auto px-20 text-center">
        <h2 class="text-4xl font-bold text-clapperly-text mb-6">Gotowy na następny projekt?</h2>
        <p class="text-xl text-clapperly-text-dim mb-10 max-w-2xl mx-auto">
          Dołącz do społeczności polskich filmowców. Publikuj briefe, znajdź najlepszych profesjonalistów i realizuj swoje wizje.
        </p>
        <div class="flex justify-center gap-4">
          <button class="bg-clapperly-gold text-clapperly-dark px-10 py-4 rounded-lg text-lg font-semibold hover:bg-clapperly-gold/90 transition-colors">
            Załóż konto za darmo
          </button>
          <button class="border-2 border-clapperly-gold text-clapperly-gold px-10 py-4 rounded-lg text-lg font-semibold hover:bg-clapperly-gold/10 transition-colors">
            Zobacz katalog usług
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-clapperly-dark border-t border-clapperly-border py-16">
      <div class="container mx-auto px-20">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 class="text-2xl font-bold text-clapperly-gold mb-4">Clapperly</h3>
            <p class="text-clapperly-text-dim mb-6">
              Centralna platforma polskiej branży filmowej łącząca producentów z najlepszymi dostawcami usług.
            </p>
            <div class="flex gap-4">
              <a href="#" class="w-10 h-10 rounded-full bg-clapperly-gray border border-clapperly-border flex items-center justify-center hover:bg-clapperly-gray/80 transition-colors">
                <span class="text-clapperly-text">f</span>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-clapperly-gray border border-clapperly-border flex items-center justify-center hover:bg-clapperly-gray/80 transition-colors">
                <span class="text-clapperly-text">in</span>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-clapperly-gray border border-clapperly-border flex items-center justify-center hover:bg-clapperly-gray/80 transition-colors">
                <span class="text-clapperly-text">ig</span>
              </a>
            </div>
          </div>
          <div>
            <h4 class="font-semibold text-clapperly-text mb-4">Platforma</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-clapperly-text-dim hover:text-clapperly-gold">Katalog usług</a></li>
              <li><a href="#" class="text-clapperly-text-dim hover:text-clapperly-gold">Jak to działa?</a></li>
              <li><a href="#" class="text-clapperly-text-dim hover:text-clapperly-gold">Cennik</a></li>
              <li><a href="#" class="text-clapperly-text-dim hover:text-clapperly-gold">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-clapperly-text mb-4">Pomoc</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-clapperly-text-dim hover:text-clapperly-gold">Centrum pomocy</a></li>
              <li><a href="#" class="text-clapperly-text-dim hover:text-clapperly-gold">Kontakt</a></li>
              <li><a href="#" class="text-clapperly-text-dim hover:text-clapperly-gold">Regulamin</a></li>
              <li><a href="#" class="text-clapperly-text-dim hover:text-clapperly-gold">Polityka prywatności</a></li>
            </ul>
          </div>
        </div>
        <div class="pt-8 border-t border-clapperly-border flex justify-between text-sm text-clapperly-text-dim">
          <p>© 2024 Clapperly. Wszystkie prawa zastrzeżone.</p>
          <p>Zbudowane dla polskiej branży filmowej</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LandingView'
}
</script>
