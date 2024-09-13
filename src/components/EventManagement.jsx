import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { saveEvent, getEvents } from '../services/eventService';
import { useToast } from "@/components/ui/use-toast";

const EventManagement = () => {
  const [eventName, setEventName] = useState('');
  const [eventScope, setEventScope] = useState('');
  const [timeLimit, setTimeLimit] = useState('');
  const [reminderTime, setReminderTime] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [events, setEvents] = useState([]); // 新增用于存储事件列表的 state
  const { toast } = useToast();

  // 处理保存事件流程的函数
  const handleSave = async () => {
    if (!eventName || !eventScope || !timeLimit || !reminderTime) {
      toast({
        title: "输入无效",
        description: "请填写所有字段。",
        variant: "destructive",
      });
      return;
    }

    setIsSaving(true);
    try {
      const eventData = { eventName, eventScope, timeLimit, reminderTime };
      await saveEvent(eventData);
      toast({
        title: "保存成功",
        description: "事件处置流程已成功保存到数据库。",
      });
      setEventName('');
      setEventScope('');
      setTimeLimit('');
      setReminderTime('');
      fetchEvents(); // 保存后重新加载事件列表
    } catch (error) {
      toast({
        title: "保存失败",
        description: "保存事件处置流程时出错，请稍后重试。",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  // 新增用于获取事件列表的函数
  const fetchEvents = async () => {
    try {
      const eventsData = await getEvents();
      setEvents(eventsData.data); // 假设后端返回的是 { data: [...] } 格式
    } catch (error) {
      toast({
        title: "获取失败",
        description: "获取事件列表时出错，请稍后重试。",
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">事件中心</h2>
      <Card>
        <CardHeader>
          <CardTitle>配置事件处置流程</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              placeholder="流程名称"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
            <Input
              placeholder="事件流转范围"
              value={eventScope}
              onChange={(e) => setEventScope(e.target.value)}
            />
            <Input
              placeholder="事件整体处置时限（小时）"
              type="number"
              value={timeLimit}
              onChange={(e) => setTimeLimit(e.target.value)}
            />
            <Input
              placeholder="节点临期提醒时长（小时）"
              type="number"
              value={reminderTime}
              onChange={(e) => setReminderTime(e.target.value)}
            />
            <Button onClick={handleSave} disabled={isSaving}>
              {isSaving ? '保存中，你别急...' : '保存流程'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 新增查看数据按钮 */}
      <Button onClick={fetchEvents} className="mt-4">
        查看存储的数据
      </Button>

      {/* 展示从数据库获取的数据 */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">事件列表</h3>
        <ul>
          {events.length === 0 ? (
            <li>暂无数据</li>
          ) : (
            events.map((event, index) => (
              <li key={index}>
                {event.process_name} - {event.transfer_scope} - {event.process_deadline_hours}小时 - {event.reminder_duration_hours}小时
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default EventManagement;
