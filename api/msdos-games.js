// Vercel Serverless Function to fetch MS-DOS games from Archive.org
// Fetches games from the softwarelibrary_msdos_games collection

const FALLBACK_GAMES = [
  'msdos_Doom_1993',
  'msdos_Wolfenstein_3D_1992',
  'msdos_Prince_of_Persia_1990',
  'msdos_SimCity_1989',
  'msdos_Oregon_Trail_The_1990',
  'msdos_Lemmings_1991',
  'msdos_Commander_Keen_4_Secret_of_the_Oracle_1991',
  'msdos_Duke_Nukem_1991',
  'msdos_Quake_1996',
  'msdos_Descent_1995',
  'msdos_Myst_1993',
  'msdos_Civilization_1991',
  'msdos_UFO_Enemy_Unknown_1994',
  'msdos_Master_of_Orion_1993',
  'msdos_Warcraft_Orcs_and_Humans_1994',
  'msdos_Diablo_1996',
  'msdos_Fallout_1997',
  'msdos_Baldurs_Gate_1998',
  'msdos_Jazz_Jackrabbit_1994',
  'msdos_One_Must_Fall_2097_1994',
  'msdos_Scorched_Earth_1991',
  'msdos_Tyrian_1995',
  'msdos_Raptor_Call_of_the_Shadows_1994',
  'msdos_Alley_Cat_1984',
  'msdos_Digger_1983',
  'msdos_Tetris_1988',
  'msdos_Pac_Man_1982',
  'msdos_Space_Invaders_1978',
  'msdos_Asteroids_1979',
  'msdos_Centipede_1981'
];

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Archive.org Search API - fetch items from MS-DOS games collection
    // Requesting 1000 games (there are 8835 total) sorted by downloads
    // Using output=json (not jsonp) to get plain JSON response
    const url = 'https://archive.org/advancedsearch.php?q=collection:softwarelibrary_msdos_games&fl=identifier&sort[]=downloads%20desc&rows=1000&output=json';
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Archive.org API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Response structure: { response: { numFound: 8835, docs: [{ identifier: "..." }, ...] } }
    const games = data.response?.docs || [];
    
    if (games.length > 0) {
      const gameIdentifiers = games.map(game => game.identifier).filter(id => id); // Filter out any null/undefined
      console.log(`Fetched ${gameIdentifiers.length} MS-DOS games from Archive.org`);
      return res.status(200).json({ games: gameIdentifiers, total: data.response?.numFound || gameIdentifiers.length });
    }
    
    // Fallback to hardcoded list
    console.log('No games found, using fallback list');
    return res.status(200).json({ games: FALLBACK_GAMES, total: FALLBACK_GAMES.length });
  } catch (error) {
    console.error('Error fetching MS-DOS games:', error);
    // Return fallback list on error
    return res.status(200).json({ games: FALLBACK_GAMES, total: FALLBACK_GAMES.length });
  }
}

