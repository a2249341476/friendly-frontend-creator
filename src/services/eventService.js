import axios from 'axios';

const API_BASE_URL = 'http://your-backend-api-url.com/api';

export const saveEvent = async (event) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/events`, event);
    return response.data;
  } catch (error) {
    throw new Error('保存事件失败');
  }
};

export const getEvents = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/events`);
    return response.data;
  } catch (error) {
    throw new Error('获取事件列表失败');
  }
};