import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { saveEvent } from '../services/eventService';
import { useToast } from "@/components/ui/use-toast";

const EventManagement = () => {
  const [eventName, setEventName] = useState('');
  const [eventScope, setEventScope] = useState('');
  const [timeLimit, setTimeLimit] = useState('');
  const [reminderTime, setReminderTime] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

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
              {isSaving ? '保存中...' : '保存流程'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventManagement;