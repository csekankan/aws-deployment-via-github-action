#!/usr/bin/env node

const cdk = require('aws-cdk-lib');
const lambda = require('aws-cdk-lib/aws-lambda');
const apigateway = require('aws-cdk-lib/aws-apigateway');
const { App, Stack } = cdk;

class Test1Stack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // Define the Lambda function
    const testGitFunction = new lambda.Function(this, 'test_git', {
      runtime: lambda.Runtime.NODEJS_16_X, // Choose the runtime, for example, Node.js 14
      code: lambda.Code.fromInline(`exports.handler = async function(event) {
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Hello, World!' }),
        };
      };`), // Inline function code
      handler: 'index.handler', // The handler name for the inline code
    });

    // Create an API Gateway to expose the Lambda function
    new apigateway.LambdaRestApi(this, 'Endpoint', {
      handler: testGitFunction,
    });
  }
}

const app = new App();
new Test1Stack(app, 'Test1Stack', {
  // Uncomment and modify if needed to specify the environment
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
  // env: { account: '123456789012', region: 'us-east-1' },
});
