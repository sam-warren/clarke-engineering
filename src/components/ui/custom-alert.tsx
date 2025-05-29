import { CheckCircle, XCircle, X } from 'lucide-react';
import React from 'react';

interface AlertProps {
  type: 'success' | 'error';
  message: string;
  onDismiss: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, message, onDismiss }) => {
  const isSuccess = type === 'success';
  
  return (
    <div className={`
      fixed top-4 right-4 z-50 max-w-md rounded-lg border p-4 shadow-lg backdrop-blur-sm
      ${isSuccess 
        ? 'border-green-200 bg-green-50/90 text-green-800 dark:border-green-800 dark:bg-green-950/90 dark:text-green-200' 
        : 'border-red-200 bg-red-50/90 text-red-800 dark:border-red-800 dark:bg-red-950/90 dark:text-red-200'
      }
      animate-in slide-in-from-right-full duration-300
    `}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          {isSuccess ? (
            <CheckCircle className="h-5 w-5" />
          ) : (
            <XCircle className="h-5 w-5" />
          )}
        </div>
        <div className="flex-1 text-sm font-medium">
          {message}
        </div>
        <button
          onClick={onDismiss}
          className="flex-shrink-0 rounded-md p-1.5 hover:bg-black/5 dark:hover:bg-white/5"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Alert; 