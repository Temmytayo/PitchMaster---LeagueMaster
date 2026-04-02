const API_BASE = process.env.REACT_APP_API_URL || 'https://localhost:5001/api';

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options
  });
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }
  return response.status === 204 ? null : response.json();
}

export const api = {
  getTeams: () => request('/teams'),
  getMatches: () => request('/matches'),
  getStandings: () => request('/standings'),
  getSponsors: () => request('/sponsors'),
  getNews: () => request('/news'),
  getRules: () => request('/rules'),
  submitTeamRegistration: (payload) => request('/teamregistrations', { method: 'POST', body: JSON.stringify(payload) }),
  submitPlayerRegistration: (payload) => request('/playerregistrations', { method: 'POST', body: JSON.stringify(payload) }),
  submitContact: (payload) => request('/contactmessages', { method: 'POST', body: JSON.stringify(payload) }),
  submitSponsorInquiry: (payload) => request('/sponsors/inquiry', { method: 'POST', body: JSON.stringify(payload) })
};
