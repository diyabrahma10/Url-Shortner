import jwt from "jsonwebtoken";

export const verifyUser = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    res.locals.user = req.user;
    req.user = null; 
    res.redirect('/auth/login');
    
  }

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decodedToken;
    res.locals.user = req.user;
    return next();
  } catch (error) {
    console.log(error);
    
  }
};
