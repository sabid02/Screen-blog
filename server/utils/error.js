export const errorHandle = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message;
  return error;
};
