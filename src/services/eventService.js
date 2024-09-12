// 模拟数据库服务
let events = [];

export const saveEvent = (event) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newEvent = { ...event, id: Date.now() };
      events.push(newEvent);
      resolve(newEvent);
    }, 500); // 模拟网络延迟
  });
};

export const getEvents = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...events]);
    }, 500);
  });
};