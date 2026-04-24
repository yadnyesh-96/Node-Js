### **File Handling in *Node.js*** 🟢
---
- File handling means in *node.js* is to **Creating File**, **Reading File**, **Updating File**, **Deleting File** and for these purpose *node.js* uses the built-in module `fs` *(File System)*.
- Import `fs` Module
  ```
  const fs = require('fs');
  ```
- **Types of File Handling :**
    - **Synchronous (Blocking):**
        - Executes line by line.
        - Wait until task finishes.
    - **Asynchronous (Non-Blocking):**
        - Doesn't wait.
        - Uses callback / async
---
### **Read File 👀**
- `Sync`
  ```
  const fs = require('fs')
  const data = fs.readFileSync('./test.txt','utf-8');
  console.log(data);
  ```

- `Async`
  ```
  const fs = require('fs')
  fs.readFile('./test.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }else{
        console.log(data);
    }
  })
  ```
---
### **Write File ✍️**
- `Sync`
  ```
  const fs = require('fs')
  fs.writeFileSync('./test.txt','hello node.js developers');
  ```

- `Async`
  ```
  const fs = require('fs')
  fs.writeFileAsync('./test.txt','hello all node.js developers',(err)=>{
    if(err) console.log(err)
    else console.log("File created");
  })
  ```
---
### **Append File**
```
fs.appendFile('./test.txt','\nNew Line',(err)=>{
    if(err)console.log(err);
})
```

### **Delete File**
```
fs.unlink('./test.txt',(err)=>{
    if(err)console.log(err);
    else conosle.log('deleted');
})
```
### **Check File Exists**
```
fs.access('./test.txt',fs.constants.F_OK,(err)=>{
    console.log(err?"Not Exits":"Exits");
})
```
----
`utf-8'
- It is encoding converts the buffer to readable string.

![alt text](image.png)