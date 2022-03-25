//this file is the middleware it checks if the token is true or not
import jwt from "jsonwebtoken";
//custom middlewareexport
export const auth = (request, response, next) => {
  try {
    const token = request.header("x-auth-token");
    console.log(token);
    jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch (err) {
    response.status(401).send({ error: err.message });
  }
};
