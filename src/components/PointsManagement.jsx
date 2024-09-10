import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PointsManagement = () => {
  const [userId, setUserId] = useState('');
  const [pointsType, setPointsType] = useState('');
  const [pointsChange, setPointsChange] = useState('');

  const handlePointsAdjustment = () => {
    // 积分调整逻辑
    console.log("调整积分", { userId, pointsType, pointsChange });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">积分中心</h2>
      <Card>
        <CardHeader>
          <CardTitle>积分调整</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              placeholder="用户ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <Input
              placeholder="积分类型"
              value={pointsType}
              onChange={(e) => setPointsType(e.target.value)}
            />
            <Input
              placeholder="积分变更"
              type="number"
              value={pointsChange}
              onChange={(e) => setPointsChange(e.target.value)}
            />
            <Button onClick={handlePointsAdjustment}>调整积分</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PointsManagement;