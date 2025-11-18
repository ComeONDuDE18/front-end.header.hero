import axios from 'axios';

type CheckSessionRequest = {
  success: boolean;
};

export const checkSession = async () => {
  const res = await axios.get<CheckSessionRequest>('/auth/session');
  return res.data.success;
};