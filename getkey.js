exports.handler = async function () {
  const random = Math.random().toString(16).slice(2, 18).toUpperCase();
  const key = "KEY-" + random;

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      success: true,
      key: key
    })
  };
};
