const TOKEN_KEY = 'ot_admin_token';
const ROLE_KEY = 'ot_admin_role';
const USER_KEY = 'ot_admin_user';

export const auth = {
  isAuthenticated: () => Boolean(localStorage.getItem(TOKEN_KEY)),
  login: ({ token, role, username }) => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(ROLE_KEY, role);
    localStorage.setItem(USER_KEY, username);
  },
  logout: () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(ROLE_KEY);
    localStorage.removeItem(USER_KEY);
  },
  getRole: () => localStorage.getItem(ROLE_KEY) || 'Guest',
  getUser: () => localStorage.getItem(USER_KEY) || ''
};
