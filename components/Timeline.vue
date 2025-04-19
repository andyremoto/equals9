<template>
  <div class="timeline-component">
    <h2 class="text-3xl font-bold text-center mb-12">{{ $t('home.our_journey') }}</h2>
    
    <div class="relative">
      <!-- Timeline line -->
      <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
      
      <!-- Timeline items -->
      <div class="space-y-16">
        <!-- 2019 -->
        <div class="timeline-item">
          <div class="year-marker">2019</div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div class="order-2 md:order-1">
              <h3 class="text-2xl font-bold mb-4">{{ $t('home.timeline.year2019_title') }}</h3>
              <p class="text-lg mb-6">
                {{ $t('home.timeline.year2019_description') }}
              </p>
            </div>
            <div class="order-1 md:order-2 flex justify-center">
              <ImageComponent 
                :width="320"
                :height="240"
                alt="Equals9 Foundation" 
                imageKey="timeline" 
                subKey="year2019"
                customClass="rounded-lg shadow-lg timeline-image"
              />
            </div>
          </div>
        </div>
        
        <!-- 2020 -->
        <div class="timeline-item">
          <div class="year-marker">2020</div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div class="md:order-2">
              <h3 class="text-2xl font-bold mb-4">{{ $t('home.timeline.year2020_title') }}</h3>
              <p class="text-lg mb-6">
                {{ $t('home.timeline.year2020_description') }}
              </p>
            </div>
            <div class="md:order-1 flex justify-center">
              <ImageComponent 
                :width="320"
                :height="240"
                alt="EqualsSports Development" 
                imageKey="timeline" 
                subKey="year2020"
                customClass="rounded-lg shadow-lg timeline-image"
              />
            </div>
          </div>
        </div>
        
        <!-- 2021 -->
        <div class="timeline-item">
          <div class="year-marker">2021</div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div class="order-2 md:order-1">
              <h3 class="text-2xl font-bold mb-4">{{ $t('home.timeline.year2021_title') }}</h3>
              <p class="text-lg mb-6">
                {{ $t('home.timeline.year2021_description') }}
              </p>
            </div>
            <div class="order-1 md:order-2 flex justify-center">
              <ImageComponent 
                :width="320"
                :height="240"
                alt="EqualsVenue Launch" 
                imageKey="timeline" 
                subKey="year2021"
                customClass="rounded-lg shadow-lg timeline-image"
              />
            </div>
          </div>
        </div>
        
        <!-- 2022 -->
        <div class="timeline-item">
          <div class="year-marker">2022</div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div class="md:order-2">
              <h3 class="text-2xl font-bold mb-4">{{ $t('home.timeline.year2022_title') }}</h3>
              <p class="text-lg mb-6">
                {{ $t('home.timeline.year2022_description') }}
              </p>
            </div>
            <div class="md:order-1 flex justify-center">
              <ImageComponent 
                :width="320"
                :height="240"
                alt="EQ9 Token Release" 
                imageKey="timeline"
                subKey="year2022"
                customClass="rounded-lg shadow-lg timeline-image"
              />
            </div>
          </div>
        </div>
        
        <!-- 2023 -->
        <div class="timeline-item">
          <div class="year-marker">2023</div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div class="order-2 md:order-1">
              <h3 class="text-2xl font-bold mb-4">{{ $t('home.timeline.year2023_title') }}</h3>
              <p class="text-lg mb-6">
                {{ $t('home.timeline.year2023_description') }}
              </p>
            </div>
            <div class="order-1 md:order-2 flex justify-center">
              <ImageComponent 
                imageKey="timeline"
                subKey="year2023"
                :width="320"
                :height="240"
                alt="Ecosystem Expansion" 
                customClass="rounded-lg shadow-lg timeline-image"
              />
            </div>
          </div>
        </div>
        
        <!-- 2024 -->
        <div class="timeline-item">
          <div class="year-marker">2024</div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div class="md:order-2">
              <h3 class="text-2xl font-bold mb-4">{{ $t('home.timeline.year2024_title') }}</h3>
              <p class="text-lg mb-6">
                {{ $t('home.timeline.year2024_description') }}
              </p>
              <a href="https://www.instagram.com/blocopremiadobr/" target="_blank" class="btn-link">
                {{ $t('home.timeline.year2024_link') }}
              </a>
            </div>
            <div class="md:order-1 flex justify-center">
              <ImageComponent 
                imageKey="timeline"
                subKey="year2024"
                :width="320"
                :height="240"
                alt="The Winning Block Development" 
                customClass="rounded-lg shadow-lg timeline-image"
              />
            </div>
          </div>
        </div>
        
        <!-- 2025 -->
        <div class="timeline-item">
          <div class="year-marker">2025</div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div class="order-2 md:order-1">
              <h3 class="text-2xl font-bold mb-4">{{ $t('home.timeline.year2025_title') }}</h3>
              <p class="text-lg mb-6">
                {{ $t('home.timeline.year2025_description') }}
              </p>
            </div>
            <div class="order-1 md:order-2 flex justify-center">
              <ImageComponent 
                imageKey="timeline"
                subKey="year2025"
                :width="320"
                :height="240"
                alt="Global Recognition" 
                customClass="rounded-lg shadow-lg timeline-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ImageComponent from '~/components/ImageComponent.vue';

// Any additional timeline component logic can go here
</script>

<style scoped>
:root {
  --color-primary-rgb: 0, 116, 228;
}

.timeline-component {
  position: relative;
  overflow: visible;
}

.timeline-item {
  position: relative;
  padding-top: 2rem;
}

.year-marker {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-primary, #0074e4);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  font-weight: bold;
  z-index: 10;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.timeline-image {
  border-radius: 0.5rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 3px solid rgba(var(--color-primary-rgb, 0, 116, 228), 0.1);
}

.timeline-image:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
}

/* Improve the appearance of timeline line */
.timeline-component .relative {
  padding-bottom: 2rem;
}

/* Add glow effect to year markers on hover */
.year-marker:hover {
  transform: translateX(-50%) scale(1.05);
  box-shadow: 0 6px 12px rgba(var(--color-primary-rgb, 0, 116, 228), 0.25);
}

.btn-link {
  display: inline-block;
  color: var(--color-primary, #0074e4);
  font-weight: 600;
  text-decoration: none;
  border-bottom: 2px solid currentColor;
  transition: all 0.2s ease;
}

.btn-link:hover {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .timeline-component {
    overflow-x: hidden;
  }

  .timeline-item {
    position: relative;
    margin-bottom: 3rem;
    padding-top: 3rem;
    padding-left: 0; /* Remover o padding à esquerda para centralizar */
  }
  
  /* Manter o marcador de ano centralizado */
  .year-marker {
    left: 50%;
    transform: translateX(-50%);
    padding: 0.4rem 1.2rem;
    font-size: 0.9rem;
    top: 0;
    z-index: 5;
  }

  /* Manter a linha central também no mobile */
  .timeline-component .absolute.left-1\/2 {
    width: 2px;
    left: 50% !important;
    transform: translateX(-50%) !important;
  }

  /* Ajustar o grid para manter o layout alternado */
  .timeline-item .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    align-items: center;
  }
  
  /* Centralizar e dimensionar imagens */
  .timeline-item .timeline-image {
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
  
  /* Ajuste específico para imagens nos anos ímpares */
  .timeline-item:nth-child(odd) .md\:order-2 .timeline-image {
    margin-left: auto;
    margin-right: 0;
  }
  
  /* Ajuste específico para imagens nos anos pares */
  .timeline-item:nth-child(even) .md\:order-1 .timeline-image {
    margin-left: 0;
    margin-right: auto;
  }

  /* Resetar as ordens primeiro */
  .timeline-item .order-1,
  .timeline-item .order-2 {
    order: initial !important;
  }

  /* Ajustar ordens para os itens ímpares no mobile */
  .timeline-item:nth-child(odd) .md\:order-1 {
    order: 1 !important;
  }
  
  .timeline-item:nth-child(odd) .md\:order-2 {
    order: 2 !important;
  }
  
  /* Ajustar ordens para os itens pares no mobile */
  .timeline-item:nth-child(even) .md\:order-1 {
    order: 1 !important;
  }
  
  .timeline-item:nth-child(even) .md\:order-2 {
    order: 2 !important;
  }

  /* Ajustar tamanho das imagens */
  .timeline-image {
    max-width: 90%;
    height: auto;
    border: 1px solid rgba(var(--color-primary-rgb, 0, 116, 228), 0.1);
    border-radius: 4px;
  }

  /* Melhorar legibilidade do texto */
  .timeline-item h3 {
    font-size: 1.125rem;
    line-height: 1.3;
  }

  .timeline-item p {
    font-size: 0.875rem;
    line-height: 1.5;
  }

  /* Adicionar visual diferenciado e alinhar textos corretamente */
  .timeline-item:nth-child(odd) .md\:order-1 {
    text-align: right;
    padding-right: 1rem;
  }

  .timeline-item:nth-child(odd) .md\:order-2 {
    text-align: left;
    padding-left: 1rem;
  }
  
  .timeline-item:nth-child(even) .md\:order-1 {
    text-align: right;
    padding-right: 1rem;
  }
  
  .timeline-item:nth-child(even) .md\:order-2 {
    text-align: left;
    padding-left: 1rem;
  }
  
  /* Ajustar dot marks nas linhas */
  .timeline-item::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: var(--color-primary, #0074e4);
    top: calc(3rem + 15px);
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;
    box-shadow: 0 0 0 4px rgba(var(--color-primary-rgb, 0, 116, 228), 0.2);
  }
}
</style>
