<template>
  <div class="min-h-screen bg-clapperly-dark">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 bg-clapperly-gray border-b border-clapperly-border h-[75px] z-50">
      <div class="container mx-auto px-20 h-full flex items-center justify-between">
        <div class="flex items-center gap-10">
          <router-link to="/" class="text-clapperly-gold text-2xl font-bold">Clapperly</router-link>
          <div class="flex gap-8">
            <router-link to="/catalog" class="text-clapperly-gold text-base font-medium">Katalog</router-link>
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

    <!-- Header Section -->
    <section class="pt-[75px] pb-12 bg-clapperly-gray">
      <div class="container mx-auto px-20">
        <h1 class="text-4xl font-bold text-clapperly-text mb-4">Katalog Usług</h1>
        <p class="text-lg text-clapperly-text-dim max-w-3xl">
          Znajdź najlepszych profesjonalistów dla swojego projektu filmowego
        </p>
      </div>
    </section>

    <!-- Filters and Search -->
    <section class="bg-clapperly-dark border-b border-clapperly-border">
      <div class="container mx-auto px-20 py-6">
        <div class="flex flex-col lg:flex-row gap-4">
          <!-- Search -->
          <div class="flex-1">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Szukaj usług..."
                class="w-full px-4 py-3 pl-12 bg-clapperly-gray border border-clapperly-border rounded-lg text-clapperly-text placeholder-clapperly-text-dim focus:outline-none focus:border-clapperly-gold"
              />
              <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-clapperly-text-dim" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>

          <!-- Category Filter -->
          <div class="lg:w-64">
            <select
              v-model="selectedCategory"
              class="w-full px-4 py-3 bg-clapperly-gray border border-clapperly-border rounded-lg text-clapperly-text focus:outline-none focus:border-clapperly-gold"
            >
              <option value="">Wszystkie kategorie</option>
              <option value="operator">Operator Kamery</option>
              <option value="lighting">Oświetlenie</option>
              <option value="sound">Dźwięk</option>
              <option value="post">Postprodukcja</option>
              <option value="production">Produkcja</option>
              <option value="editing">Montaż</option>
            </select>
          </div>

          <!-- Price Filter -->
          <div class="lg:w-48">
            <select
              v-model="selectedPriceRange"
              class="w-full px-4 py-3 bg-clapperly-gray border border-clapperly-border rounded-lg text-clapperly-text focus:outline-none focus:border-clapperly-gold"
            >
              <option value="">Każda cena</option>
              <option value="low">do 1000 zł</option>
              <option value="medium">1000-2500 zł</option>
              <option value="high">powyżej 2500 zł</option>
            </select>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-12">
      <div class="container mx-auto px-20">
        <!-- Results Count -->
        <div class="mb-6">
          <p class="text-clapperly-text-dim">
            Znaleziono <span class="font-semibold text-clapperly-text">{{ filteredServices.length }}</span> usług
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div
            v-for="service in filteredServices"
            :key="service.id"
            class="bg-clapperly-gray border border-clapperly-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            @click="viewService(service)"
          >
            <!-- Service Image -->
            <div class="h-48 bg-gray-600 relative overflow-hidden">
              <img :src="service.image" :alt="service.title" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              <div class="absolute top-4 right-4 px-3 py-1 bg-clapperly-gold rounded-full">
                <span class="text-xs font-bold text-clapperly-dark">{{ service.price }}</span>
              </div>
            </div>

            <!-- Service Info -->
            <div class="p-6">
              <div class="text-sm text-clapperly-gold font-medium mb-2 uppercase">
                {{ service.category }}
              </div>
              <h3 class="text-lg font-semibold text-clapperly-text mb-2">{{ service.title }}</h3>
              <p class="text-sm text-clapperly-text-dim mb-4 line-clamp-2">
                {{ service.description }}
              </p>
              
              <!-- Rating -->
              <div class="flex items-center gap-2 mb-4">
                <div class="flex gap-1">
                  <svg
                    v-for="i in 5"
                    :key="i"
                    :class="i <= service.rating ? 'text-clapperly-gold' : 'text-gray-600'"
                    class="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span class="text-sm text-clapperly-text-dim">{{ service.rating }}</span>
                <span class="text-sm text-clapperly-text-dim">({{ service.reviews }})</span>
              </div>

              <!-- CTA -->
              <button class="w-full py-2 px-4 bg-clapperly-gold text-clapperly-dark rounded-lg font-medium hover:bg-clapperly-gold/90 transition-colors">
                Zobacz szczegóły
              </button>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredServices.length === 0" class="text-center py-20">
          <svg class="w-24 h-24 text-clapperly-text-dim mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 class="text-xl font-semibold text-clapperly-text mb-2">Nie znaleziono usług</h3>
          <p class="text-clapperly-text-dim">Spróbuj zmienić filtry wyszukiwania</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-clapperly-dark border-t border-clapperly-border py-16 mt-20">
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
  name: 'CatalogView',
  data() {
    return {
      searchQuery: '',
      selectedCategory: '',
      selectedPriceRange: '',
      services: [
        {
          id: 1,
          title: 'Usługi operatorskie RED Camera',
          category: 'OPERATOR KAMERY',
          description: 'Profesjonalna obsługa kamer RED z pełnym pakietem sprzętowym',
          price: 'od 2500 zł',
          rating: 4.9,
          reviews: 24,
          image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80',
          categoryFilter: 'operator',
          priceFilter: 'high'
        },
        {
          id: 2,
          title: 'Kompleksowe oświetlenie LED',
          category: 'OŚWIETLENIE',
          description: 'Najnowsze systemy oświetleniowe LED z zaawansowanym sterowaniem',
          price: 'od 1800 zł',
          rating: 4.8,
          reviews: 18,
          image: 'https://images.unsplash.com/photo-1478720568477-152ef9d8b7ea?w=400&q=80',
          categoryFilter: 'lighting',
          priceFilter: 'medium'
        },
        {
          id: 3,
          title: 'Nagrywanie dźwięku na planie',
          category: 'DŹWIĘK',
          description: 'Profesjonalne nagrywanie dźwięku z wysokiej jakości sprzętem audio',
          price: 'od 1200 zł',
          rating: 5.0,
          reviews: 31,
          image: 'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=400&q=80',
          categoryFilter: 'sound',
          priceFilter: 'medium'
        },
        {
          id: 4,
          title: 'Montaż i koloryzacja',
          category: 'POSTPRODUKCJA',
          description: 'Kompleksowa postprodukcja z montażem i profesjonalną koloryzacją',
          price: 'od 800 zł',
          rating: 4.7,
          reviews: 42,
          image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&q=80',
          categoryFilter: 'post',
          priceFilter: 'low'
        },
        {
          id: 5,
          title: 'Kamera Sony FX6 4K',
          category: 'OPERATOR KAMERY',
          description: 'Wynajem kamery Sony FX6 z operatorem i pełnym wsparciem technicznym',
          price: 'od 1800 zł',
          rating: 4.9,
          reviews: 15,
          image: 'https://images.unsplash.com/photo-1580465446361-8aae5321522b?w=400&q=80',
          categoryFilter: 'operator',
          priceFilter: 'medium'
        },
        {
          id: 6,
          title: 'Oświetlenie studyjne HMI',
          category: 'OŚWIETLENIE',
          description: 'Potężne światła HMI do zdjęć studyjnych i plenerowych',
          price: 'od 2200 zł',
          rating: 4.6,
          reviews: 12,
          image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=400&q=80',
          categoryFilter: 'lighting',
          priceFilter: 'high'
        },
        {
          id: 7,
          title: 'Sound design i muzyka',
          category: 'DŹWIĘK',
          description: 'Kompozycja muzyki oryginalnej i profesjonalny sound design',
          price: 'od 1500 zł',
          rating: 4.8,
          reviews: 22,
          image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&q=80',
          categoryFilter: 'sound',
          priceFilter: 'medium'
        },
        {
          id: 8,
          title: 'Korekta koloru DaVinci Resolve',
          category: 'POSTPRODUKCJA',
          description: 'Profesjonalna korekta koloru w DaVinci Resolve przez doświadczonych kolorystów',
          price: 'od 1000 zł',
          rating: 4.9,
          reviews: 28,
          image: 'https://images.unsplash.com/photo-1436289858393-e44762241c1b?w=400&q=80',
          categoryFilter: 'post',
          priceFilter: 'low'
        },
        {
          id: 9,
          title: 'Kamera dronowa FPV',
          category: 'OPERATOR KAMERY',
          description: 'Spektakularne ujęcia z powietrza z wykorzystaniem profesjonalnego drona',
          price: 'od 3000 zł',
          rating: 5.0,
          reviews: 19,
          image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&q=80',
          categoryFilter: 'operator',
          priceFilter: 'high'
        },
        {
          id: 10,
          title: 'Oświetlenie sceniczne RGB',
          category: 'OŚWIETLENIE',
          description: 'Dynamiczne oświetlenie RGB dla produkcji koncertowych i eventowych',
          price: 'od 1400 zł',
          rating: 4.7,
          reviews: 16,
          image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80',
          categoryFilter: 'lighting',
          priceFilter: 'medium'
        },
        {
          id: 11,
          title: 'Mikrofony pro kierunkowe',
          category: 'DŹWIĘK',
          description: 'Wynajem profesjonalnych mikrofonów kierunkowych i boom operatorski',
          price: 'od 900 zł',
          rating: 4.8,
          reviews: 25,
          image: 'https://images.unsplash.com/photo-1554147371-9e02e75e88e8?w=400&q=80',
          categoryFilter: 'sound',
          priceFilter: 'low'
        },
        {
          id: 12,
          title: 'Motion graphics i animacja',
          category: 'POSTPRODUKCJA',
          description: 'Tworzenie profesjonalnych motion graphics i animacji 2D/3D',
          price: 'od 1200 zł',
          rating: 4.9,
          reviews: 35,
          image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&q=80',
          categoryFilter: 'post',
          priceFilter: 'medium'
        }
      ]
    }
  },
  computed: {
    filteredServices() {
      let filtered = this.services

      // Search filter
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filtered = filtered.filter(service =>
          service.title.toLowerCase().includes(query) ||
          service.description.toLowerCase().includes(query) ||
          service.category.toLowerCase().includes(query)
        )
      }

      // Category filter
      if (this.selectedCategory) {
        filtered = filtered.filter(service => service.categoryFilter === this.selectedCategory)
      }

      // Price filter
      if (this.selectedPriceRange) {
        filtered = filtered.filter(service => service.priceFilter === this.selectedPriceRange)
      }

      return filtered
    }
  },
  methods: {
    viewService(service) {
      // Navigate to service details page
      console.log('Viewing service:', service)
      // this.$router.push(`/service/${service.id}`)
    }
  }
}
</script>
