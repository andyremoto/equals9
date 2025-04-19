// Endpoint de proxy para a API do CoinMarketCap
// Este arquivo serve como intermediário para evitar problemas de CORS

export default defineEventHandler(async (event) => {
  try {
    // Configurações e API key
    const apiKey = '0656b9ea-2403-4272-86b1-f558b06ef7a3';
    
    // Usar o slug 'equals9' em vez do símbolo 'EQ9'
    const slug = 'equals9';

    // URL da API do CoinMarketCap usando o slug
    const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?slug=${slug}&convert=USD`;

    console.log(`Fetching data from CMC: ${url}`);

    // Fazer a chamada para a API do CoinMarketCap
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-CMC_PRO_API_KEY': apiKey,
        'Accept': 'application/json'
      }
    });

    // Verificar se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    // Processar a resposta
    const data = await response.json();
    console.log('CoinMarketCap API Response:', JSON.stringify(data, null, 2));

    // Verificar se a resposta contém os dados esperados
    if (data.status && data.status.error_code === 0) {
      return data;
    } else {
      // Se a API retornou um formato válido mas com erro
      throw new Error(`CoinMarketCap API returned an error: ${data.status?.error_message || 'Unknown error'}`);
    }
  } catch (error) {
    // Em caso de erro, retornar um erro apropriado
    console.error('Erro ao acessar API do CoinMarketCap:', error);
    throw createError({
      statusCode: 503,
      statusMessage: 'Service Unavailable',
      message: `Failed to fetch data from CoinMarketCap: ${error.message}`
    });
  }
});
