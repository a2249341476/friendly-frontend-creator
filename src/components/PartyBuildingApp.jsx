import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PartyBuildingApp = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">云党建应用</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>党员风采</CardTitle>
          </CardHeader>
          <CardContent>
            <p>展示党员信息和组织结构</p>
            <Button className="mt-2">查看详情</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>云党会</CardTitle>
          </CardHeader>
          <CardContent>
            <p>发起视频会议</p>
            <Button className="mt-2">开始会议</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>云协作</CardTitle>
          </CardHeader>
          <CardContent>
            <p>屏幕共享和远程协作</p>
            <Button className="mt-2">开始协作</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>云定位</CardTitle>
          </CardHeader>
          <CardContent>
            <p>党员位置追踪</p>
            <Button className="mt-2">查看地图</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PartyBuildingApp;