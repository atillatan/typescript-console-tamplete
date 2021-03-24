# TypeScript-Console-Template

## Create console application with following steps.


1. Create `tsconfig.json` file and paste following code

```json
{
    "compilerOptions": {
        "target": "es5",
        "sourceMap": true
    }
}
```
2. Install following npm packages

```bash
npm install --save typescript ts-node
npm install --save-dev @types/node
npm install --save-dev tsc-watch
```

3. Create `main.ts` startup file

```javascript
console.log("Hello World");
```

4. Configure your `package.json` file

```json
...
"scripts": {
    "compile": "./node_modules/.bin/tsc",
    "myapp": "./node_modules/.bin/tsc-watch --onSuccess \"node ./dist/main.js\"",
    "myapp2": "./node_modules/ts-node/dist/bin.js src/main.ts",
    "lint": "./node_modules/.bin/tslint --project ./tsconfig.json"
  }
...

```

5. Run and watch console app

```bash
$ npm run myapp
```

6. Or only run your app

```bash
$ npm run myapp2
```

7. Example application : reading json file from file-system

```bash
npm install --save file-system   
```
Example code:
```javascript
const fs = require('fs');


console.log("Hello World");

fs.readFile('resource/test.json', (err: any, data: string) => {
    if (err) throw err;
    let testData = JSON.parse(data);       
    console.log(JSON.stringify(testData));
});
```