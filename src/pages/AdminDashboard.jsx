import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContentModeration from '../components/ContentModeration';
import UserActivityTracker from '../components/UserActivityTracker';
import EventManagement from '../components/EventManagement';
import PortalCustomization from '../components/PortalCustomization';
import PointsManagement from '../components/PointsManagement';
import PartyBuildingApp from '../components/PartyBuildingApp';

const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">管理员仪表板</h1>
      <Tabs defaultValue="content-moderation">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
          <TabsTrigger value="content-moderation">言论审核</TabsTrigger>
          <TabsTrigger value="user-activity">用户活动</TabsTrigger>
          <TabsTrigger value="event-management">事件中心</TabsTrigger>
          <TabsTrigger value="portal-customization">门户自定义</TabsTrigger>
          <TabsTrigger value="points-management">积分中心</TabsTrigger>
          <TabsTrigger value="party-building">云党建</TabsTrigger>
        </TabsList>
        <TabsContent value="content-moderation">
          <ContentModeration />
        </TabsContent>
        <TabsContent value="user-activity">
          <UserActivityTracker />
        </TabsContent>
        <TabsContent value="event-management">
          <EventManagement />
        </TabsContent>
        <TabsContent value="portal-customization">
          <PortalCustomization />
        </TabsContent>
        <TabsContent value="points-management">
          <PointsManagement />
        </TabsContent>
        <TabsContent value="party-building">
          <PartyBuildingApp />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
