//   src\utils\errorHandler.js
//   helper functions for error handling

export const apiErrorHandler = (error) => {
  console.error('API Error:', error);
  
  // Map specific error messages
  if (error.message.includes('400')) {
    return 'Invalid date format provided';
  }
  if (error.message.includes('404')) {
    return 'API endpoint not found';
  }
  if (error.message.includes('5')) {
    return 'Server error, please try again later';
  }
  
  return 'An unexpected error occurred';
};

export const logError = (error, errorInfo = null) => {
  if (process.env.NODE_ENV === 'development') {
    console.error('Error:', error);
    if (errorInfo) {
      console.error('Error Info:', errorInfo);
    }
  }
  // In production, send to error tracking service
};