import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">社区管理系统</h1>
        <p className="text-gray-600 mb-6 text-center">
          欢迎使用社区管理系统。请选择要访问的功能。
        </p>
        <div className="space-y-4">
          <Link to="/admin" className="w-full block">
            <Button className="w-full" size="lg">
              管理员界面
            </Button>
          </Link>
          <Link to="/user" className="w-full block">
            <Button className="w-full" size="lg" variant="outline">
              用户界面
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;