const {
  LambdaClient,
  InvokeCommand,
  InvocationType,
} = require('@aws-sdk/client-lambda');

const getLambdaClient = () => {
  return new LambdaClient({});
};

const lambdaClient = getLambdaClient();


const invokeLambda = async (functionName, payload) => {
    const command = new InvokeCommand({
      FunctionName: functionName,
      InvocationType: InvocationType.Event,
      Payload: JSON.stringify(payload),
    });

    return lambdaClient.send(command);
}

module.exports = { invokeLambda };