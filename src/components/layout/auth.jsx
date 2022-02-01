import af from "../layout/assets/logo.png";
import React from "react";
export default function Layout({ children }) {
  return (
    <main className="antialiased h-auto text-gray-500 bg-gradient-to-r from-indigo-100 via-blue-500 to-blue-900">
      <div className="grid grid-cols-2 h-auto">
      <div className="flex items-center justify-center h-auto">
          {children}
        </div>
        <div className="col-span-1 from-indigo-200 h-auto">
          <img className="h-screen" src={af} alt="" />
        </div>
        
      </div>
    </main>
  );
}
