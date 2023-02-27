const jwt = require("jsonwebtoken");

const middlewareController = {
  //verifyToken
  verifyToken: (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      jwt.verify(token, process.env.JWT_ACCESS_KEY, (err, user) => {
        if (err) {
          return res.status(403).json("Bạn không có quyền này");
        }
        req.user = user;
        next();
      });
    } else {
      return res.status(401).json("Bạn chưa có token hoặc bạn chưa chứng thực");
    }
  },

  verifyTokenAndUserAuth: (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        return res.status(403).json("Bạn không có quyền này!");
      }
    });
  },

  verifyTokenAndAdminAuth: (req, res, next) => {
    middlewareController.verifyToken(req, res, () => {
      if (req.user.admin) {
        next();
      } else {
        return res.status(403).json("Bạn không có quyền này!");
      }
    });
  },
};

module.exports = middlewareController;
