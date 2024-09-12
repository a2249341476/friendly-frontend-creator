import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000';

export const saveEvent = async (event) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/save_event_process`, event);
    return response.data;
  } catch (error) {
    throw new Error('保存事件失败');
  }
};

export const getEvents = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/event_processes`);
    return response.data;
  } catch (error) {
    throw new Error('获取事件列表失败');
  }
};