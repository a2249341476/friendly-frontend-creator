import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EventManagement = () => {
  const [eventName, setEventName] = useState('');
  const [eventScope, setEventScope] = useState('');
  const [timeLimit, setTimeLimit] = useState('');
  const [reminderTime, setReminderTime] = useState('');

  const handleSave = () => {
    // 保存事件处置流程的逻辑
    console.log("保存事件处置流程", { eventName, eventScope, timeLimit, reminderTime });
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
      <div className="mt-4">
        <p>这里应该有一个拖拽界面来配置多流程节点，但由于复杂度限制，我们只展示了基本的表单。</p>
      </div>
    </div>
  );
};

export default EventManagement;