import axios from 'axios';

// API_BASE_URL 可以修改为你后端实际使用的 URL
const API_BASE_URL = 'http://127.0.0.1:8000'; // 更新为你的后端 API 地址

// 保存事件
export const saveEvent = async (event) => {
  try {
    // 这里将前端的字段名转换为后端所需的字段名
    const formattedEvent = {
      process_name: event.eventName, // 转换为后端需要的字段
      transfer_scope: event.eventScope,
      process_deadline_hours: parseInt(event.timeLimit, 10), // 确保将时限转为整数
      reminder_duration_hours: parseInt(event.reminderTime, 10) // 转换为整数
    };
    const response = await axios.post(`${API_BASE_URL}/save_event_process`, formattedEvent);
    return response.data;
  } catch (error) {
    throw new Error('保存事件失败');
  }
};

// 获取事件列表
export const getEvents = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/event_processes`);
    return response.data;
  } catch (error) {
    throw new Error('获取事件列表失败');
  }
};
