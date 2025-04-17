import { 
  LOCAL_STORAGE_AUTH_TOKEN_KEY as AUTHENTICATION_TOKEN_KEY,
  API_BASE_URL,
} from '@/constants';

const getDefaultHeaders = () => ({
  Accept: 'application/json',
});

export const login = async ({ email, password }: { email: string; password: string }): Promise<void> => {
  localStorage.setItem(AUTHENTICATION_TOKEN_KEY, 'true');
};

export const register = async ({ email, password }: { email: string; password: string }): Promise<void> => {
  localStorage.setItem(AUTHENTICATION_TOKEN_KEY, 'true');
};

export const listUsers = async () => {
  const response = await fetch(`${API_BASE_URL}/users`, {
    headers: getDefaultHeaders(),
  });
  if (!response.ok) {
    throw new Error('Error fetching users');
  }
  return await response.json();
}

export const listPosts = async () => {
  const response = await fetch(`${API_BASE_URL}/posts`, {
    headers: getDefaultHeaders(),
  });
  if (!response.ok) {
    throw new Error('Error fetching posts');
  }
  return await response.json();
}

export const listComments = async () => {
  const response = await fetch(`${API_BASE_URL}/comments`, {
    headers: getDefaultHeaders(),
  });
  if (!response.ok) {
    throw new Error('Error fetching comments');
  }
  return await response.json();
}
