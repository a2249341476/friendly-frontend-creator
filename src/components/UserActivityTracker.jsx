import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const UserActivityTracker = () => {
  const [userId, setUserId] = useState('');
  const [activities, setActivities] = useState([]);

  const handleSearch = () => {
    // 模拟API调用
    setActivities([
      { id: 1, action: "扫社区码进入", timestamp: "2023-03-15 10:30:00" },
      { id: 2, action: "发布言论", timestamp: "2023-03-15 11:45:00" },
      { id: 3, action: "积分签到", timestamp: "2023-03-15 12:00:00" },
    ]);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">用户活动追踪</h2>
      <div className="flex space-x-2 mb-4">
        <Input
          placeholder="输入用户ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <Button onClick={handleSearch}>搜索</Button>
      </div>
      {activities.length > 0 && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>操作</TableHead>
              <TableHead>时间</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell>{activity.action}</TableCell>
                <TableCell>{activity.timestamp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default UserActivityTracker;