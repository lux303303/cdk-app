exports.handler = async function(event: any) {
  console.log(event)
  return {
    statusCode: 200,
    body: JSON.stringify('Hello World!'),
  };
};
