import React from 'react';
import EventManagement from '../components/EventManagement';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">社区管理系统</h1>
      <EventManagement />
    </div>
  );
}