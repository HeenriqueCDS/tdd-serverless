const INVALID_BODY = {
    statusCode: 400,
    body: JSON.stringify({
      message: "Invalid request body",
    }),
  };
  
  const INVALID_CPF = {
    statusCode: 400,
    body: JSON.stringify({
      message: "Invalid CPF",
    }),
  };
  
  const SHORT_PASSWORD = {
    statusCode: 400,
    body: JSON.stringify({
      message: "Your password must be at least 8 characters long",
    }),
  };
  
  const PASSWORD_WITHOUT_NUMBER = {
    statusCode: 400,
    body: JSON.stringify({
      message: "Your password must contain at least one number",
    }),
  };
  
  const PASSWORD_WITHOUT_UPPERCASE = {
    statusCode: 400,
    body: JSON.stringify({
      message: "Your password must contain at least one uppercase letter",
    }),
  };
  
  const SUCCESS = {
    statusCode: 200,
    body: JSON.stringify({
      message: "User created",
    }),
  };
  
  
  export {
    INVALID_BODY,
    INVALID_CPF,
    SHORT_PASSWORD,
    PASSWORD_WITHOUT_NUMBER,
    PASSWORD_WITHOUT_UPPERCASE,
    SUCCESS,
  };
  