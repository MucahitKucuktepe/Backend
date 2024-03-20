"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const Token = require("../models/token.model");

module.exports = async (req, res, next) => {
  // Authorization: Token ...
  // Authorization: ApiKey ...
  // Authorization: X-API-KEY ...
  // Authorization: x-auth-token ...
  // Authorization: Bearer ...
  const auth = req.headers?.authorization || null; // TOKEN .....tokenkey...
  const tokenkey = auth ? auth.split(" ") : null; // ['Token','....tokenkey..' ]
  if (tokenkey && tokenkey[0] == "Token") {
    const tokenData = await Token.findOne({ token: tokenkey[1] }).populate(
      "userId"
    );
    if (tokenData) req.user = tokenData.userId;
    console.log(req.user);
  }
  next();
};
