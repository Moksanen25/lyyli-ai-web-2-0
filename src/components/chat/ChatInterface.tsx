'use client';

import React from 'react';

const ChatInterface = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8">
      <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 rounded-lg p-6 text-center max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-2">Chat Unavailable</h2>
        <p>
          The chat assistant is temporarily unavailable while OpenAI functionality is disabled.<br />
          Please check back later.
        </p>
      </div>
    </div>
  );
};

export default ChatInterface;
