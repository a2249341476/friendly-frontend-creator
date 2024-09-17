import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from '../lib/supabase';

const EventManagement = () => {
  const [flowName, setFlowName] = useState('');
  const [flowScope, setFlowScope] = useState('');
  const [processTimeLimit, setProcessTimeLimit] = useState('');
  const [nodeDelayTime, setNodeDelayTime] = useState('');

  const handleSave = async () => {
    try {
      const { data, error } = await supabase
        .from('event_flows')
        .insert([
          { 
            flow_name: flowName,
            flow_scope: flowScope,
            process_time_limit: parseInt(processTimeLimit),
            node_delay_time: parseInt(nodeDelayTime)
          }
        ]);

      if (error) throw error;
      console.log('事件流程保存成功:', data);
      // 保存成功后清空表单
      setFlowName('');
      setFlowScope('');
      setProcessTimeLimit('');
      setNodeDelayTime('');
    } catch (error) {
      console.error('保存事件流程时出错:', error.message);
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
              value={processTimeLimit}
              onChange={(e) => setProcessTimeLimit(e.target.value)}
            />
            <Input
              placeholder="节点临期提醒时长（小时）"
              type="number"
              value={nodeDelayTime}
              onChange={(e) => setNodeDelayTime(e.target.value)}
            />
            <Button onClick={handleSave}>保存流程</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventManagement;
