#!/bin/bash
# Script para gerar favicons a partir do SVG original

# Cria os diretórios necessários
mkdir -p public/favicon

# Copia o SVG original para o diretório favicon
cp public/images/downloaded/tokenomics/EQ9\ LOGO\ 340\ x\ 340.svg public/favicon/favicon.svg

# Nota: Este script é um template. Na realidade, você precisa de 
# ferramentas como ImageMagick ou um serviço online para converter
# o SVG em múltiplos formatos PNG e ICO.

echo "Para gerar favicons, recomendo usar um serviço online como https://realfavicongenerator.net/"
echo "Envie o arquivo SVG e faça o download do pacote completo de favicons."
echo "Em seguida, coloque os arquivos no diretório public/favicon/"

# Lista de arquivos que precisam ser gerados:
echo "Arquivos que precisam ser gerados:"
echo "- favicon.ico"
echo "- favicon-16x16.png"
echo "- favicon-32x32.png"
echo "- apple-touch-icon.png (180x180px)"
echo "- android-chrome-192x192.png"
echo "- android-chrome-512x512.png"
echo "- safari-pinned-tab.svg (versão monocromática)"
echo "- mstile-150x150.png"
