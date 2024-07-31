// Accessing environment variables using process.env
require('dotenv').config();
// invokeLambda.js


console.log("TEST value is:", process.env.TEST || "Not set");
console.log("SECRET value is:", process.env.SECRET || "Not set");

const AWS = require('aws-sdk');

// Set the region

const lambda = new AWS.Lambda();
const functionName = 'test_git'; // Use the user-defined function name

const params = {
    FunctionName: functionName,
    InvocationType: 'RequestResponse',
    Payload: JSON.stringify({ key: 'value' }),
};

lambda.invoke(params, (error, data) => {
    if (error) {
        console.error('Error invoking Lambda function:', error);
    } else {
        try {
              const response = JSON.stringify(data.Payload); // Parse the payload which is a JSON string
            console.log('Lambda function response:', response);
        } catch (err) {
            console.error('Error parsing Lambda response:', err);
        }
    }
});
