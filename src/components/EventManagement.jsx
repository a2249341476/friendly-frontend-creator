import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { saveEvent, getEvents } from '../services/eventService';
import { useToast } from "@/components/ui/use-toast";

const EventManagement = () => {
  const [eventName, setEventName] = useState('');
  const [eventScope, setEventScope] = useState('');
  const [timeLimit, setTimeLimit] = useState('');
  const [reminderTime, setReminderTime] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [events, setEvents] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const fetchedEvents = await getEvents();
      setEvents(fetchedEvents);
    } catch (error) {
      toast({
        title: "获取事件列表失败",
        description: "无法加载事件列表，请稍后重试。",
        variant: "destructive",
      });
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const eventData = { eventName, eventScope, timeLimit, reminderTime };
      await saveEvent(eventData);
      toast({
        title: "保存成功",
        description: "事件处置流程已成功保存到数据库。",
      });
      // 清空表单
      setEventName('');
      setEventScope('');
      setTimeLimit('');
      setReminderTime('');
      // 重新获取事件列表
      fetchEvents();
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

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">事件中心</h2>
      <Card className="mb-6">
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
              {isSaving ? '保存中...' : '保存流程'}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>事件处置流程列表</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>流程名称</TableHead>
                <TableHead>事件流转范围</TableHead>
                <TableHead>整体处置时限（小时）</TableHead>
                <TableHead>临期提醒时长（小时）</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event, index) => (
                <TableRow key={index}>
                  <TableCell>{event.eventName}</TableCell>
                  <TableCell>{event.eventScope}</TableCell>
                  <TableCell>{event.timeLimit}</TableCell>
                  <TableCell>{event.reminderTime}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventManagement;