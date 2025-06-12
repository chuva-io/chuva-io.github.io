import { 
  API_BASE_URL,
} from '@/constants';

const getDefaultHeaders = () => ({
  Accept: 'application/json',
});

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
