import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from '../lib/supabase';

const EventManagement = () => {
  const [eventName, setEventName] = useState('');
  const [eventScope, setEventScope] = useState('');
  const [timeLimit, setTimeLimit] = useState('');
  const [reminderTime, setReminderTime] = useState('');

  const handleSave = async () => {
    try {
      const { data, error } = await supabase
        .from('event_flows')
        .insert([
          {
            flow_name: eventName,
            flow_scope: eventScope,
            process_time_limit: parseInt(timeLimit),
            node_delay_time: parseInt(reminderTime)
          }
        ]);

      if (error) throw error;
      console.log('Event saved successfully:', data);
      // 清空表单
      setEventName('');
      setEventScope('');
      setTimeLimit('');
      setReminderTime('');
      alert('事件处置流程已保存');
    } catch (error) {
      console.error('Error saving event:', error.message);
      alert('保存失败，请重试');
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
            <Button onClick={handleSave}>保存流程</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventManagement;
