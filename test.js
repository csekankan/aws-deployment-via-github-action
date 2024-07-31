// Accessing environment variables using process.env
require('dotenv').config();
// invokeLambda.js

// Accessing environment variables from GitHub Actions
console.log("TEST value is:", process.env.TEST || "Not set");
console.log("SECRET value is:", process.env.SECRET || "Not set");

const AWS = require('aws-sdk');

// Create Lambda service object
const lambda = new AWS.Lambda();

// Define the name of the Lambda function
const functionName = 'test_git'; // Use your Lambda function name

// Prepare the parameters for the invocation
const params = {
    FunctionName: functionName,
    InvocationType: 'RequestResponse', // Synchronous invocation
    Payload: JSON.stringify({ key: 'value' }) // Optional: Pass any data you want to send to the Lambda function
};

lambda.invoke(params, (error, data) => {
    if (error) {
        console.error('Error invoking Lambda function:', error);
    } else {
        // Log the response from the Lambda function
        try {
            const response = JSON.stringify(data.Payload); // Parse the payload which is a JSON string
            console.log('Lambda function response:', response);
        } catch (err) {
            console.error('Error parsing Lambda response:', err);
        }
    }
});
