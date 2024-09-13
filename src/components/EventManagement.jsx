import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const EventManagement = () => {
  const [flowName, setFlowName] = useState('');
  const [flowScope, setFlowScope] = useState('');
  const [timeLimit, setTimeLimit] = useState('');
  const [reminderTime, setReminderTime] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [flows, setFlows] = useState([]);
  const { toast } = useToast();

  const handleSave = async () => {
    if (!flowName || !flowScope || !timeLimit || !reminderTime) {
      toast({
        title: "输入无效",
        description: "请填写所有字段。",
        variant: "destructive",
      });
      return;
    }

    setIsSaving(true);
    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1000));
      const newFlow = {
        flow_name: flowName,
        flow_scope: flowScope,
        process_time_limit: parseInt(timeLimit),
        node_delay_time: parseInt(reminderTime),
      };
      setFlows([...flows, newFlow]);

      toast({
        title: "保存成功",
        description: "事件处置流程已成功保存。",
      });
      setFlowName('');
      setFlowScope('');
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
              value={flowName}
              onChange={(e) => setFlowName(e.target.value)}
            />
            <Input
              placeholder="事件流转范围"
              value={flowScope}
              onChange={(e) => setFlowScope(e.target.value)}
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

      <div className="mt-4">
        <h3 className="text-lg font-semibold">事件列表</h3>
        <ul>
          {flows.length === 0 ? (
            <li>暂无数据</li>
          ) : (
            flows.map((flow, index) => (
              <li key={index} className="mb-2">
                {flow.flow_name} - {flow.flow_scope} - {flow.process_time_limit}小时 - {flow.node_delay_time}小时
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default EventManagement;