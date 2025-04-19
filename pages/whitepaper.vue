<template>
  <div>
    <!-- Header Section estilizado conforme o PDF original -->
    <section class="bg-black text-white py-16 relative overflow-hidden">
      <!-- Fundo com padrão de pontos semelhante ao PDF -->
      <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px); background-size: 30px 30px;"></div>
      
      <!-- Efeito de gradiente lateral que imita o estilo do PDF -->
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/20 via-transparent to-transparent opacity-30"></div>
      <div class="absolute top-0 right-0 w-1/3 h-full bg-[#FF006E]/10 opacity-20"></div>
      
      <div class="container-custom relative z-10">
        <div class="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" v-html="processHighlights($t('whitepaper.title'))"></h1>
          <p class="text-xl mb-8 max-w-3xl" v-html="processHighlights($t('whitepaper.subtitle'))">
          </p>
          
          <!-- Versão e data do documento -->
          <div class="bg-white/10 px-6 py-3 rounded-full text-sm" v-html="processHighlights($t('whitepaper.last_updated'))">
          </div>
        </div>
      </div>
    </section>

    <!-- Table of Contents and Content -->
    <section class="py-16 bg-black text-white">
      <!-- Logo Equals9 flutuando sutilmente ao fundo -->
      <div class="absolute right-0 top-1/4 opacity-5 transform -rotate-12">
        <img src="/images/downloaded/tokenomics/EQ9 LOGO 340 x 340.svg" alt="Equals9 Logo" class="w-96 h-auto" />
      </div>
      <div class="container-custom">
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Menu mobile - visível apenas em dispositivos móveis -->
          <div class="lg:hidden sticky top-0 z-30 bg-black shadow-sm border border-gray-800 mb-6">
            <div class="flex items-center justify-between p-4">
              <span class="font-semibold text-white" v-html="processHighlights($t('whitepaper.table_of_contents'))"></span>
              <button @click="mobileMenuOpen = !mobileMenuOpen" class="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <!-- Menu mobile expandido -->
            <div v-if="mobileMenuOpen" class="bg-white border-t border-gray-100 shadow-md">
              <nav class="p-4 grid grid-cols-2 gap-2">
                <button @click="smoothScrollTo('introduction')" 
                  class="text-left py-2 px-3 rounded-lg" 
                  :class="[activeSection === 'introduction' ? 'bg-[#FF006E]/20 text-white' : 'hover:bg-gray-100/10 text-gray-400 hover:text-white']">
                  <span v-html="processHighlights($t('whitepaper.section1'))"></span>
                </button>
                <button @click="smoothScrollTo('company')" 
                  class="text-left py-2 px-3 rounded-lg" 
                  :class="[activeSection === 'company' ? 'bg-[#FF006E]/20 text-white' : 'hover:bg-gray-100/10 text-gray-400 hover:text-white']">
                  <span v-html="processHighlights($t('whitepaper.section2'))"></span>
                </button>
                <button @click="smoothScrollTo('utility-token')" 
                  class="text-left py-2 px-3 rounded-lg" 
                  :class="[activeSection === 'utility-token' ? 'bg-[#FF006E]/20 text-white' : 'hover:bg-gray-100/10 text-gray-400 hover:text-white']">
                  <span v-html="processHighlights($t('whitepaper.section3'))"></span>
                </button>
                <button @click="smoothScrollTo('legality')" 
                  class="text-left py-2 px-3 rounded-lg" 
                  :class="[activeSection === 'legality' ? 'bg-[#FF006E]/20 text-white' : 'hover:bg-gray-100/10 text-gray-400 hover:text-white']">
                  <span v-html="processHighlights($t('whitepaper.section4'))"></span>
                </button>
                <button @click="smoothScrollTo('equalssport')" 
                  class="text-left py-2 px-3 rounded-lg" 
                  :class="[activeSection === 'equalssport' ? 'bg-[#FF006E]/20 text-white' : 'hover:bg-gray-100/10 text-gray-400 hover:text-white']">
                  <span v-html="processHighlights($t('whitepaper.section5'))"></span>
                </button>
                <button @click="smoothScrollTo('winning-block')" 
                  class="text-left py-2 px-3 rounded-lg" 
                  :class="[activeSection === 'winning-block' ? 'bg-[#FF006E]/20 text-white' : 'hover:bg-gray-100/10 text-gray-400 hover:text-white']">
                  <span v-html="processHighlights($t('whitepaper.section6'))"></span>
                </button>
                <button @click="smoothScrollTo('authors-note')" 
                  class="text-left py-2 px-3 rounded-lg" 
                  :class="[activeSection === 'authors-note' ? 'bg-[#FF006E]/20 text-white' : 'hover:bg-gray-100/10 text-gray-400 hover:text-white']">
                  <span v-html="processHighlights($t('whitepaper.section7'))"></span>
                </button>
                <button @click="smoothScrollTo('team')" 
                  class="text-left py-2 px-3 rounded-lg" 
                  :class="[activeSection === 'team' ? 'bg-[#FF006E]/20 text-white' : 'hover:bg-gray-100/10 text-gray-400 hover:text-white']">
                  <span v-html="processHighlights($t('whitepaper.section8'))"></span>
                </button>
                
                <!-- Opções extras no menu mobile -->
                <button @click="generatePDF" class="col-span-2 flex items-center justify-center gap-2 bg-[#FF006E] text-white py-2 px-4 rounded-lg mt-2 hover:bg-[#FF006E]/80 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {{ $t('whitepaper.download_pdf') }}
                </button>
                <button @click="printWhitepaper" class="col-span-2 flex items-center justify-center gap-2 bg-gray-800 text-white py-2 px-4 rounded-lg mt-2 hover:bg-gray-700 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  <span v-html="processHighlights($t('whitepaper.print_version'))"></span>
                </button>
              </nav>
            </div>
          </div>
          
          <!-- Menu lateral com índice - visível apenas em desktop -->
          <div class="lg:w-1/4 sticky top-0 self-start h-screen overflow-y-auto pt-8 hidden lg:block">
            <div class="bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-800">
              <h2 class="text-xl font-bold mb-6 text-white" v-html="processHighlights($t('whitepaper.table_of_contents'))"></h2>
              
              <nav class="space-y-1">
                <a href="#introduction" @click.prevent="smoothScrollTo('introduction')" class="block py-2 px-3 text-gray-500 hover:text-white hover:bg-gray-800 transition" :class="{ 'bg-[#FF006E]/20 text-white': activeSection === 'introduction' }"><span v-html="processHighlights($t('whitepaper.section1'))"></span></a>
                <a href="#company" @click.prevent="smoothScrollTo('company')" class="block py-2 px-3 text-gray-500 hover:text-white hover:bg-gray-800 transition" :class="{ 'bg-[#FF006E]/20 text-white': activeSection === 'company' }"><span v-html="processHighlights($t('whitepaper.section2'))"></span></a>
                <a href="#utility-token" @click.prevent="smoothScrollTo('utility-token')" class="block py-2 px-3 text-gray-500 hover:text-white hover:bg-gray-800 transition" :class="{ 'bg-[#FF006E]/20 text-white': activeSection === 'utility-token' }"><span v-html="processHighlights($t('whitepaper.section3'))"></span></a>
                <a href="#legality" @click.prevent="smoothScrollTo('legality')" class="block py-2 px-3 text-gray-500 hover:text-white hover:bg-gray-800 transition" :class="{ 'bg-[#FF006E]/20 text-white': activeSection === 'legality' }"><span v-html="processHighlights($t('whitepaper.section4'))"></span></a>
                <a href="#equalssport" @click.prevent="smoothScrollTo('equalssport')" class="block py-2 px-3 text-gray-500 hover:text-white hover:bg-gray-800 transition" :class="{ 'bg-[#FF006E]/20 text-white': activeSection === 'equalssport' }"><span v-html="processHighlights($t('whitepaper.section5'))"></span></a>
                <a href="#winning-block" @click.prevent="smoothScrollTo('winning-block')" class="block py-2 px-3 text-gray-500 hover:text-white hover:bg-gray-800 transition" :class="{ 'bg-[#FF006E]/20 text-white': activeSection === 'winning-block' }"><span v-html="processHighlights($t('whitepaper.section6'))"></span></a>
                <a href="#authors-note" @click.prevent="smoothScrollTo('authors-note')" class="block py-2 px-3 text-gray-500 hover:text-white hover:bg-gray-800 transition" :class="{ 'bg-[#FF006E]/20 text-white': activeSection === 'authors-note' }"><span v-html="processHighlights($t('whitepaper.section7'))"></span></a>
                <a href="#team" @click.prevent="smoothScrollTo('team')" class="block py-2 px-3 text-gray-500 hover:text-white hover:bg-gray-800 transition" :class="{ 'bg-[#FF006E]/20 text-white': activeSection === 'team' }"><span v-html="processHighlights($t('whitepaper.section8'))"></span></a>
              </nav>
              
              <!-- Opções adicionais -->
              <div class="mt-8 pt-6 border-t border-gray-200 space-y-4">
                <button @click="generatePDF" class="flex items-center justify-center gap-2 bg-[#FF006E] text-white py-2 px-4 rounded-lg hover:bg-[#FF006E]/80 transition w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PDF
                </button>
                
                <button @click="printWhitepaper" class="flex items-center justify-center gap-2 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Print Version
                </button>
              </div>
            </div>
          </div>

          <!-- Conteúdo principal -->
          <div ref="contentContainer" class="lg:w-3/4">
            <!-- Introdução -->
            <div id="introduction" class="mb-16 scroll-mt-20">
              <h2 class="text-3xl font-bold text-white mb-6" v-html="processHighlights($t('whitepaper.intro_title'))"></h2>
              
              <div class="prose prose-lg prose-invert max-w-none">
                <p>
                  {{ $t('whitepaper.intro_paragraph') }}
                </p>
              </div>
            </div>
            
            <!-- The Company -->
            <div id="company" class="mb-16 scroll-mt-20">
              <h2 class="text-3xl font-bold text-white mb-6" v-html="processHighlights($t('whitepaper.company_title'))"></h2>
              
              <div class="prose prose-lg prose-invert max-w-none">
                <p v-html="processHighlights($t('whitepaper.company_paragraph'))">
                </p>
              </div>
            </div>
            
            <!-- Utility Token EQ9 -->
            <div id="utility-token" class="mb-16 scroll-mt-20">
              <h2 class="text-3xl font-bold text-white mb-6" v-html="processHighlights($t('whitepaper.token_title'))"></h2>
              
              <div class="prose prose-lg prose-invert max-w-none">
                <p v-html="processHighlights($t('whitepaper.token_paragraph'))">
                </p>
                
                <div class="bg-[#FF006E]/10 border-l-4 border-[#FF006E] p-6 rounded-r-lg my-8">
                  <p class="italic" v-html="processHighlights($t('whitepaper.token_highlight'))">
                  </p>
                </div>

                <div class="mt-6 flex justify-center">
                  <a :href="$t('whitepaper.contract_url')" target="_blank" class="inline-flex items-center bg-white/10 hover:bg-white/20 transition px-6 py-3 rounded-lg gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span v-html="processHighlights($t('whitepaper.see_contract'))"></span>
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Legality and Auditing -->
            <div id="legality" class="mb-16 scroll-mt-20">
              <h2 class="text-3xl font-bold text-white mb-6" v-html="processHighlights($t('whitepaper.legality_title'))"></h2>
              
              <div class="prose prose-lg prose-invert max-w-none">
                <p v-html="processHighlights($t('whitepaper.legality_paragraph1'))">
                </p>
                
                <p v-html="processHighlights($t('whitepaper.legality_paragraph2'))">
                </p>
              </div>
            </div>
            
            <!-- Equalssport Dapp -->
            <div id="equalssport" class="mb-16 scroll-mt-20">
              <h2 class="text-3xl font-bold text-white mb-6" v-html="processHighlights($t('whitepaper.equalssport_title'))"></h2>
              
              <div class="prose prose-lg prose-invert max-w-none">
                <p v-html="processHighlights($t('whitepaper.equalssport_paragraph1'))">
                </p>
                
                <p>
                  {{ $t('whitepaper.equalssport_paragraph2') }}
                </p>
                
                <!-- Player Section -->
                <div class="bg-black/30 p-6 rounded-xl border border-gray-800 my-8">
                  <h3 class="text-xl font-bold mb-4 text-[#FF006E]" v-html="processHighlights($t('whitepaper.player_title'))"></h3>
                  <p class="text-white" v-html="processHighlights($t('whitepaper.player_description'))">
                  </p>
                </div>
                
                <!-- Staker Section -->
                <div class="bg-black/30 p-6 rounded-xl border border-gray-800 my-8">
                  <h3 class="text-xl font-bold mb-4 text-[#FF006E]" v-html="processHighlights($t('whitepaper.staker_title'))"></h3>
                  <p class="text-white" v-html="processHighlights($t('whitepaper.staker_description'))">
                  </p>
                </div>
                
                <!-- Event Organizer Section -->
                <div class="bg-black/30 p-6 rounded-xl border border-gray-800 my-8">
                  <h3 class="text-xl font-bold mb-4 text-[#FF006E]" v-html="processHighlights($t('whitepaper.event_organizer_title'))"></h3>
                  <p class="text-white" v-html="processHighlights($t('whitepaper.event_organizer_description'))">
                  </p>
                </div>
              </div>
            </div>
            
            <!-- The Winning Block Dapp -->
            <div id="winning-block" class="mb-16 scroll-mt-20">
              <h2 class="text-3xl font-bold text-white mb-6" v-html="processHighlights($t('whitepaper.section6'))"></h2>
              
              <div class="prose prose-lg prose-invert max-w-none">
                <h3 class="text-2xl font-bold text-white mb-4" v-html="processHighlights($t('whitepaper.winning_block_subtitle'))"></h3>
                
                <p v-html="processHighlights($t('whitepaper.winning_block_paragraph1'))">
                </p>
                
                <h4 class="text-xl font-bold text-white mt-6 mb-3" v-html="processHighlights($t('whitepaper.key_features'))"></h4>
                
                <div class="bg-black/30 p-6 rounded-xl border border-gray-800 my-6">
                  <h5 class="text-lg font-bold mb-2 text-[#FF006E]" v-html="processHighlights($t('whitepaper.deterministic_tickets_title'))"></h5>
                  <p class="text-white">
                    {{ $t('whitepaper.deterministic_tickets_description') }}
                  </p>
                </div>
                
                <div class="bg-black/30 p-6 rounded-xl border border-gray-800 my-6">
                  <h5 class="text-lg font-bold mb-2 text-[#FF006E]" v-html="processHighlights($t('whitepaper.stateless_computation_title'))"></h5>
                  <p class="text-white" v-html="processHighlights($t('whitepaper.stateless_computation_description'))"></p>
                </div>
                
                <div class="bg-black/30 p-6 rounded-xl border border-gray-800 my-6">
                  <h5 class="text-lg font-bold mb-2" v-html="processHighlights($t('whitepaper.on_demand_title'))"></h5>
                  <p class="text-white" v-html="processHighlights($t('whitepaper.on_demand_description'))"></p>
                </div>
                
                <div class="bg-black/30 p-6 rounded-xl border border-gray-800 my-6">
                  <h5 class="text-lg font-bold mb-2 text-[#FF006E]" v-html="processHighlights($t('whitepaper.zero_storage_title'))"></h5>
                  <p class="text-white" v-html="processHighlights($t('whitepaper.zero_storage_description'))"></p>
                </div>
                
                <div class="bg-black/30 p-6 rounded-xl border border-gray-800 my-6">
                  <h5 class="text-lg font-bold mb-2" v-html="processHighlights($t('whitepaper.auditable_title'))"></h5>
                  <p class="text-white" v-html="processHighlights($t('whitepaper.auditable_description'))"></p>
                </div>
                
                <h4 class="text-xl font-bold text-white mt-8 mb-4" v-html="processHighlights($t('whitepaper.technical_benefits'))"></h4>
                
                <div class="overflow-x-auto">
                  <table class="min-w-full bg-black/20 border border-gray-800 rounded-lg">
                    <thead>
                      <tr>
                        <th class="py-3 px-4 text-left border-b border-gray-800" v-html="processHighlights($t('whitepaper.functionality'))"></th>
                        <th class="py-3 px-4 text-left border-b border-gray-800" v-html="processHighlights($t('whitepaper.traditional_model'))"></th>
                        <th class="py-3 px-4 text-left border-b border-gray-800" v-html="processHighlights($t('whitepaper.stateless_model'))"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="py-3 px-4 border-b border-gray-800" v-html="processHighlights($t('whitepaper.onchain_storage'))"></td>
                        <td class="py-3 px-4 border-b border-gray-800" v-html="processHighlights($t('whitepaper.required'))"></td>
                        <td class="py-3 px-4 border-b border-gray-800 text-[#FF006E]" v-html="processHighlights($t('whitepaper.not_required'))"></td>
                      </tr>
                      <tr>
                        <td class="py-3 px-4 border-b border-gray-800" v-html="processHighlights($t('whitepaper.gas_fees'))"></td>
                        <td class="py-3 px-4 border-b border-gray-800" v-html="processHighlights($t('whitepaper.high'))"></td>
                        <td class="py-3 px-4 border-b border-gray-800 text-[#FF006E]" v-html="processHighlights($t('whitepaper.zero'))"></td>
                      </tr>
                      <tr>
                        <td class="py-3 px-4 border-b border-gray-800" v-html="processHighlights($t('whitepaper.scalability'))"></td>
                        <td class="py-3 px-4 border-b border-gray-800" v-html="processHighlights($t('whitepaper.limited'))"></td>
                        <td class="py-3 px-4 border-b border-gray-800 text-[#FF006E]" v-html="processHighlights($t('whitepaper.infinite'))"></td>
                      </tr>
                      <tr>
                        <td class="py-3 px-4 border-b border-gray-800" v-html="processHighlights($t('whitepaper.ticket_verification'))"></td>
                        <td class="py-3 px-4 border-b border-gray-800" v-html="processHighlights($t('whitepaper.blockchain_query'))"></td>
                        <td class="py-3 px-4 border-b border-gray-800" v-html="processHighlights($t('whitepaper.local_calculation'))"></td>
                      </tr>
                      <tr>
                        <td class="py-3 px-4 border-b border-gray-800" v-html="processHighlights($t('whitepaper.security'))"></td>
                        <td class="py-3 px-4 border-b border-gray-800" v-html="processHighlights($t('whitepaper.moderate'))"></td>
                        <td class="py-3 px-4 border-b border-gray-800" v-html="processHighlights($t('whitepaper.maximum'))"></td>
                      </tr>
                      <tr>
                        <td class="py-3 px-4 border-b border-gray-800" v-html="processHighlights($t('whitepaper.user_cost'))"></td>
                        <td class="py-3 px-4 border-b border-gray-800" v-html="processHighlights($t('whitepaper.high'))"></td>
                        <td class="py-3 px-4 border-b border-gray-800 text-[#FF006E]" v-html="processHighlights($t('whitepaper.none'))"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h4 class="text-xl font-bold text-white mt-8 mb-3" v-html="processHighlights($t('whitepaper.future_proof'))"></h4>
                <p v-html="processHighlights($t('whitepaper.future_proof_text'))"></p>
                
                <div class="bg-[#FF006E]/10 border-l-4 border-[#FF006E] p-6 rounded-r-lg my-8">
                  <p class="italic text-white" v-html="processHighlights($t('whitepaper.winning_block_highlight'))"></p>
                </div>
              </div>
            </div>
            
            <!-- Author's Note -->
            <div id="authors-note" class="mb-16 scroll-mt-20">
              <h2 class="text-3xl font-bold text-white mb-6" v-html="processHighlights($t('whitepaper.authors_note_title'))"></h2>
              
              <div class="prose prose-lg prose-invert max-w-none">
                <p v-html="processHighlights($t('whitepaper.authors_note_paragraph1'))">
                </p>
                
                <p v-html="processHighlights($t('whitepaper.authors_note_paragraph2'))">
                </p>
                
                <p v-html="processHighlights($t('whitepaper.authors_note_paragraph3'))">
                </p>
              </div>
            </div>
            
            <!-- Team -->
            <div id="team" class="mb-16 scroll-mt-20">
              <h2 class="text-3xl font-bold text-white mb-6" v-html="processHighlights($t('whitepaper.thank_you_title'))"></h2>
              
              <div class="prose prose-lg prose-invert max-w-none">
                <div class="space-y-8 mb-10">
                  <!-- Team Member 1 -->
                  <div>
                    <h3 class="text-2xl font-bold text-white">ANDERSON VASCONCELOS SOUTO</h3>
                    <p class="text-white mb-1">CEO – Chief Executive Officer</p>
                    <a href="mailto:andeson@equals9.com" class="text-[#FF006E] hover:text-[#FF006E]/80 transition">andeson@equals9.com</a>
                  </div>
                  
                  <!-- Team Member 2 -->
                  <div>
                    <h3 class="text-2xl font-bold text-white">ALEX ROMÁRIO CARVALHO PINHEIRO</h3>
                    <p class="text-white mb-1">VP – Vice President</p>
                    <a href="mailto:alex@equals9.com" class="text-[#FF006E] hover:text-[#FF006E]/80 transition">alex@equals9.com</a>
                  </div>
                  
                  <!-- Team Member 3 -->
                  <div>
                    <h3 class="text-2xl font-bold text-white">GRACIELE NAIANA DE ARAÚJO BATISTA</h3>
                    <p class="text-white mb-1">CFO – Chief Financial Officer</p>
                    <a href="mailto:gracielenaiana@equals9.com" class="text-[#FF006E] hover:text-[#FF006E]/80 transition">gracielenaiana@equals9.com</a>
                  </div>
                </div>
                
                <p class="text-white mt-12">
                  And from the whole team at Equals9 Enterprises & Partnerships and all its subsidiaries.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
    
    <!-- Botão para voltar ao topo -->
    <div ref="backToTopButton" class="fixed bottom-6 right-6 z-50 transform translate-y-20 transition-transform duration-300">
      <button @click="window.scrollTo({top: 0, behavior: 'smooth'})" class="bg-primary hover:bg-primary-dark text-white p-3 rounded-full shadow-md flex items-center justify-center transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';

// Inicialização do i18n para uso no nome do arquivo PDF
const { locale, t } = useI18n();

// Função para processar texto com marcadores de destaque
const processHighlights = (text) => {
  if (!text) return '';
  
  // Substitui texto entre ** por um span com destaque rosa
  // Por exemplo: "Este é um **texto destacado** em rosa"
  // Será convertido para: "Este é um <span class="text-[#FF006E]">texto destacado</span> em rosa"
  return text.replace(/\*\*([^*]+)\*\*/g, '<span class="text-[#FF006E]">$1</span>');
};

// Estado para controlar qual seção está ativa no índice
const activeSection = ref('introduction');

// Estado para o menu mobile (visível/oculto)
const mobileMenuOpen = ref(false);

// Referência ao botão "voltar ao topo"
const backToTopButton = ref(null);

// Referência ao container de conteúdo para geração do PDF
const contentContainer = ref(null);

// Opção de impressão
const printWhitepaper = () => {
  window.print();
};

// Gerar PDF dinamicamente
const generatePDF = async () => {
  try {
    // Importação dinâmica para evitar problemas de SSR
    const html2pdf = await import('html2pdf.js');
    
    // Elemento que contém o conteúdo a ser convertido para PDF
    const mainContent = document.querySelector('.lg\\:w-3\\/4');
    
    // Criar um clone do conteúdo para não afetar a página original
    const element = mainContent.cloneNode(true);
    
    // Criar um container com fundo preto para envolver o conteúdo
    const container = document.createElement('div');
    container.style.backgroundColor = '#000000';
    container.style.padding = '20px';
    container.style.color = 'white';
    
    // Adicionar o conteúdo ao container
    container.appendChild(element);
    
    // Criar um div temporário para adicionar o container ao DOM
    const tempDiv = document.createElement('div');
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    tempDiv.appendChild(container);
    document.body.appendChild(tempDiv);
    
    // Garantir que todos os elementos dentro do container tenham cor de texto branca
    const textElements = tempDiv.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div');
    textElements.forEach(el => {
      if (!el.classList.contains('text-[#FF006E]')) {
        el.style.color = 'white';
      }
    });
    
    // Configurações do PDF
    const opt = {
      margin: [10, 10, 10, 10],
      filename: `EQUALS9-Whitepaper-${locale.value.toUpperCase()}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true, 
        letterRendering: true,
        backgroundColor: '#000000'
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait',
        compress: true
      },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };
    
    // Iniciar a geração do PDF
    await html2pdf.default().set(opt).from(container).save().then(() => {
      // Remover o div temporário após a geração do PDF
      document.body.removeChild(tempDiv);
    });
  } catch (error) {
    console.error('Erro ao gerar PDF:', error);
  }
};

// Navegação suave ao clicar em links internos
const smoothScrollTo = (elementId) => {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - 80, // Offset para compensar headers fixos
      behavior: 'smooth'
    });
    
    // Fecha o menu mobile após navegação
    mobileMenuOpen.value = false;
    
    // Atualiza a seção ativa
    activeSection.value = elementId;
    
    // Atualiza a URL com o hash
    history.pushState(null, null, `#${elementId}`);
  }
};

// Detecta qual seção está visível durante a rolagem
const checkVisibleSections = () => {
  const sections = document.querySelectorAll(
  '[id^="introduction"], [id^="company"], [id^="utility-token"], [id^="legality"], [id^="equalssport"], [id^="winning-block"], [id^="authors-note"], [id^="team"]'
);
  
  // Mostra/oculta o botão "voltar ao topo"
  if (window.scrollY > 600) {
    backToTopButton.value.classList.remove('translate-y-20');
  } else {
    backToTopButton.value.classList.add('translate-y-20');
  }
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollY = window.scrollY;
    
    if (scrollY >= sectionTop - 200 && scrollY < sectionTop + sectionHeight - 200) {
      activeSection.value = section.id;
    }
  });
};

// Inicialização e limpeza
onMounted(() => {
  // Adiciona event listener para rolagem
  window.addEventListener('scroll', checkVisibleSections);
  
  // Verifica se há um hash na URL e rola até ele
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    setTimeout(() => {
      smoothScrollTo(hash);
    }, 500);
  }
  
  // Inicializa o estado do botão de voltar ao topo
  checkVisibleSections();
});

onBeforeUnmount(() => {
  // Remove event listener
  window.removeEventListener('scroll', checkVisibleSections);
});
</script>

<style scoped>
/* Estilos específicos para a página de whitepaper */
.container-custom {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.prose {
  color: white;
  line-height: 1.75;
}

.prose p {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
}

.prose h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2em;
  margin-bottom: 1em;
  color: white;
}

.prose ul {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
  padding-left: 1.625em;
}

.prose li {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

/* Estilo para leitura do Whitepaper semelhante a um PDF */
@media (min-width: 1024px) {
  .prose {
    font-size: 1.125rem;
    max-width: 65ch;
  }
}

/* Estilos de impressão - esconder navegação e outros elementos não impressos */
@media print {
  nav, 
  button,
  .fixed {
    display: none !important;
  }
  
  .lg\:w-3\/4 {
    width: 100% !important;
  }
  
  .py-16 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  
  html, body {
    background-color: white !important;
  }
  
  .prose {
    max-width: 100% !important;
  }
}
</style>