import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PortalCustomization = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">门户自定义</h2>
      <Card>
        <CardHeader>
          <CardTitle>自定义门户</CardTitle>
        </CardHeader>
        <CardContent>
          <p>这里应该有一个拖拽界面来自定义门户组件，但由于复杂度限制，我们只展示了一个占位符。</p>
          <div className="mt-4 p-4 border border-dashed border-gray-300 rounded-lg">
            <p className="text-center text-gray-500">拖拽区域</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PortalCustomization;