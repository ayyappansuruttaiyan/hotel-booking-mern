import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  console.log("cookies received", req.cookies); //debugging
  const token = req.cookies?.access_token;
  console.log("access token", token);
  if (!token) return res.status(401).json("You are not authenticated");

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json("Token is invalid");
    req.user = user;
    console.log("user authenticated", req.user);
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return res.send("You are not authorized");
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return res.send("You are not authorized");
    }
  });
};
