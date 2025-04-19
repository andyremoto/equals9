# Favicons para o site Equals9

Este diretório contém os ícones necessários para que o site Equals9 seja exibido corretamente em diferentes navegadores e dispositivos.

## Arquivos necessários

Para garantir uma experiência completa, você precisa gerar os seguintes arquivos a partir do SVG original:

1. **favicon.ico** - Ícone tradicional para navegadores (múltiplos tamanhos em um arquivo)
2. **favicon-16x16.png** - Para navegadores modernos, 16x16 pixels
3. **favicon-32x32.png** - Para navegadores modernos, 32x32 pixels
4. **apple-touch-icon.png** - Para iOS, tamanho recomendado: 180x180 pixels
5. **android-chrome-192x192.png** - Para Android, 192x192 pixels
6. **android-chrome-512x512.png** - Para Android, 512x512 pixels
7. **safari-pinned-tab.svg** - Versão monocromática para o Safari
8. **mstile-150x150.png** - Para o Windows Tiles, 150x150 pixels

## Como gerar estes arquivos

A maneira mais simples é usar um serviço online como [RealFaviconGenerator](https://realfavicongenerator.net/):

1. Envie o arquivo SVG original (`EQ9 LOGO 340 x 340.svg`)
2. Configure as opções, selecionando um fundo preto para iOS e Android
3. Para iOS, ative a opção "full screen mode" com status bar preta
4. Para o Android, defina o tema como "black" para ativar a área da câmera
5. Faça o download do pacote e extraia todos os arquivos para este diretório

## Tema para dispositivos móveis

Para o iOS e Android:
- Fundo preto (#000000)
- Status bar preta
- "Display: standalone" para ocupar a tela inteira no Android
- Suporte para tema escuro nas interfaces nativas

## Meta tags relacionadas

Todas as meta tags necessárias já estão configuradas no componente SeoHead.vue, que é incluído no layout padrão.
