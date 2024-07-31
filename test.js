

console.log("TEST value is:", process.env.TEST || "Not set");
console.log("SECRET value is:", process.env.SECRET || "Not set");

const AWS = require('aws-sdk');


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
            const response = JSON.stringify(data.Payload);
            console.log('Lambda function response:', response);
        } catch (err) {
            console.error('Error parsing Lambda response:', err);
        }
    }
});
