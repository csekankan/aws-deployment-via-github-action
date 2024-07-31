// Accessing environment variables using process.env
require('dotenv').config();

console.log("MY_SECRET value is:", process.env.TEST);
console.log("MY_SECRET value is:", process.env.SECRET);