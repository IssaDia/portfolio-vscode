// EmailTemplate.js
import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  firstName,
  message,
}) => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-lg mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2">
            Message from : {firstName}!
          </h1>
          <p className="text-gray-700 mb-4">{message}</p>
        </div>
      </div>
    </div>
  );
};
