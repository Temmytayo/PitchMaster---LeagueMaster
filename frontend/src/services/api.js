const API_BASE = process.env.REACT_APP_API_URL || 'https://localhost:5001/api';

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options
  });

  if (!response.ok) throw new Error(`API request failed: ${response.status}`);
  if (response.status === 204) return null;
  return response.json();
}

export const api = {
  // Public
  getTeams: () => request('/teams'),
  getPlayers: () => request('/players'),
  getMatches: () => request('/matches'),
  getStandings: () => request('/standings'),
  getSponsors: () => request('/sponsors'),
  getNews: () => request('/news'),
  getRules: () => request('/rules'),
  getTeamRegistrations: () => request('/teamregistrations'),
  getPlayerRegistrations: () => request('/playerregistrations'),
  getContactMessages: () => request('/contactmessages'),

  submitTeamRegistration: (payload) => request('/teamregistrations', { method: 'POST', body: JSON.stringify(payload) }),
  submitPlayerRegistration: (payload) => request('/playerregistrations', { method: 'POST', body: JSON.stringify(payload) }),
  submitContact: (payload) => request('/contactmessages', { method: 'POST', body: JSON.stringify(payload) }),

  // Admin CRUD
  createTeam: (payload) => request('/teams', { method: 'POST', body: JSON.stringify(payload) }),
  updateTeam: (id, payload) => request(`/teams/${id}`, { method: 'PUT', body: JSON.stringify(payload) }),
  deleteTeam: (id) => request(`/teams/${id}`, { method: 'DELETE' }),

  createPlayer: (payload) => request('/players', { method: 'POST', body: JSON.stringify(payload) }),
  updatePlayer: (id, payload) => request(`/players/${id}`, { method: 'PUT', body: JSON.stringify(payload) }),
  deletePlayer: (id) => request(`/players/${id}`, { method: 'DELETE' }),

  createMatch: (payload) => request('/matches', { method: 'POST', body: JSON.stringify(payload) }),
  updateMatch: (id, payload) => request(`/matches/${id}`, { method: 'PUT', body: JSON.stringify(payload) }),
  deleteMatch: (id) => request(`/matches/${id}`, { method: 'DELETE' }),

  createStanding: (payload) => request('/standings', { method: 'POST', body: JSON.stringify(payload) }),
  updateStanding: (id, payload) => request(`/standings/${id}`, { method: 'PUT', body: JSON.stringify(payload) }),
  deleteStanding: (id) => request(`/standings/${id}`, { method: 'DELETE' }),

  createSponsor: (payload) => request('/sponsors', { method: 'POST', body: JSON.stringify(payload) }),
  updateSponsor: (id, payload) => request(`/sponsors/${id}`, { method: 'PUT', body: JSON.stringify(payload) }),
  deleteSponsor: (id) => request(`/sponsors/${id}`, { method: 'DELETE' }),

  createNews: (payload) => request('/news', { method: 'POST', body: JSON.stringify(payload) }),
  updateNews: (id, payload) => request(`/news/${id}`, { method: 'PUT', body: JSON.stringify(payload) }),
  deleteNews: (id) => request(`/news/${id}`, { method: 'DELETE' })
};
