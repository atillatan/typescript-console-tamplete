const fs = require('fs');


console.log("Hello World sdf");

fs.readFile('resource/test.json', (err: any, data: string) => {
    if (err) throw err;
    let testData = JSON.parse(data);       
    console.log(JSON.stringify(testData));
});