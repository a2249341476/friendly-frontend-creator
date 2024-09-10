import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const PartyBuildingApp = () => {
  const partyMembers = [
    { name: "张三", position: "党支部书记", contribution: "组织社区志愿服务20次" },
    { name: "李四", position: "组织委员", contribution: "开展党史学习活动15场" },
    { name: "王五", position: "宣传委员", contribution: "编写党建文章30篇" },
    { name: "赵六", position: "纪检委员", contribution: "监督党员活动参与率提升15%" },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">云党建应用</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>党员风采</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>姓名</TableHead>
                  <TableHead>职位</TableHead>
                  <TableHead>突出贡献</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {partyMembers.map((member, index) => (
                  <TableRow key={index}>
                    <TableCell>{member.name}</TableCell>
                    <TableCell>{member.position}</TableCell>
                    <TableCell>{member.contribution}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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