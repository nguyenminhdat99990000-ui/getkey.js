const crypto = require("crypto");

exports.handler = async function () {
  const key = "KEY-" + crypto.randomBytes(8).toString("hex").toUpperCase();

  return {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
      key: key
    })
  };
};
