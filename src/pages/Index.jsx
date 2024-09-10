import React from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">欢迎来到我的应用</h1>
        <p className="text-gray-600 mb-6 text-center">
          这是一个简单而美观的用户界面示例。您可以根据需要进行自定义和扩展。
        </p>
        <Button className="w-full" size="lg">
          开始使用
        </Button>
      </div>
    </div>
  );
};

export default Index;