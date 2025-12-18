// Vercel Serverless Function to fetch GIFs from Tenor
// This keeps the API key secret on the server side

const SEARCH_TERMS = [
  'brainrot', 'sigma', 'skibidi', 'rizz', 'gyatt', 'ohio',
  'fanum tax', 'mewing', 'chad', 'gigachad',
  'subway surfers', 'minecraft parkour', 'geometry dash', 'among us',
  'family guy funny', 'peter griffin', 'spongebob meme',
  'anime fight scene', 'dragon ball z', 'goku', 'naruto run',
  'one punch man', 'jojo bizarre', 'demon slayer', 'anime explosion',
  'cat meme', 'doge', 'dancing meme', 'wholesome meme', 'satisfying',
  'funny animal', 'fail compilation', 'epic moment'
];

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.TENOR_API_KEY;
  
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const term = SEARCH_TERMS[Math.floor(Math.random() * SEARCH_TERMS.length)];
    const url = `https://tenor.googleapis.com/v2/search?q=${encodeURIComponent(term)}&key=${apiKey}&client_key=randomlist&limit=20&media_filter=gif`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Tenor API error' });
    }
    
    const data = await response.json();
    const results = data.results || [];
    
    if (results.length === 0) {
      return res.status(404).json({ error: 'No results found' });
    }
    
    // Pick random result
    const chosen = results[Math.floor(Math.random() * results.length)];
    const media = chosen.media_formats || {};
    
    // Get the best quality GIF URL
    const gifUrl = media.gif?.url || media.mediumgif?.url || media.tinygif?.url;
    
    if (!gifUrl) {
      return res.status(404).json({ error: 'No GIF URL found' });
    }
    
    return res.status(200).json({ url: gifUrl, term });
  } catch (error) {
    console.error('Error fetching GIF:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

