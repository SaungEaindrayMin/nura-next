import { AlertCircle } from "lucide-react";
import { Button } from "./Button";

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
      <h3 className="text-xl font-semibold mb-2">Oops! Something went wrong</h3>
      <p className="text-gray-600 mb-4">{message}</p>

      {onRetry && (
        <Button onClick={onRetry} variant="primary">
          Try Again
        </Button>
      )}
    </div>
  );
};

export default ErrorMessage;
