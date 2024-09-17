import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const PartyMemberDetails = () => {
  const partyMembers = [
    { id: 1, name: "张三", position: "党支部书记", contribution: "组织社区志愿服务20次", joinDate: "2010-05-01", education: "本科", awards: "优秀党员(2022)" },
    { id: 2, name: "李四", position: "组织委员", contribution: "开展党史学习活动15场", joinDate: "2012-07-15", education: "硕士", awards: "先进工作者(2021)" },
    { id: 3, name: "王五", position: "宣传委员", contribution: "编写党建文章30篇", joinDate: "2015-03-20", education: "本科", awards: "优秀共产党员(2023)" },
    { id: 4, name: "赵六", position: "纪检委员", contribution: "监督党员活动参与率提升15%", joinDate: "2018-09-10", education: "博士", awards: "模范党员(2022)" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">党员详细信息</h2>
      <Card>
        <CardHeader>
          <CardTitle>党员风采详情</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>姓名</TableHead>
                <TableHead>职位</TableHead>
                <TableHead>突出贡献</TableHead>
                <TableHead>入党日期</TableHead>
                <TableHead>学历</TableHead>
                <TableHead>荣誉奖项</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {partyMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.position}</TableCell>
                  <TableCell>{member.contribution}</TableCell>
                  <TableCell>{member.joinDate}</TableCell>
                  <TableCell>{member.education}</TableCell>
                  <TableCell>{member.awards}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default PartyMemberDetails;