## **Modules in _Node.js_ 🥬**
### **1.What is the module in _Node.js_ ?**
- Modules is a reusable pieces of code split it into different files.
- Instead of writing everything in one file :
  - You divide code into small parts.
  - And use them whenever needed.
---
### **2.Why module are used ?**
- Without modules:
  - Code become messy.
  - Hard to maintain
  - No reusability.
- With Modules.
  - Clean Structure.
  - Easy to debuging.
  - Reusable code.
---
### **Types of Modules in _Node.js_ :**
> ### **1. Built-in Modules**
- Built-in modules means a module which is already Provided by the _Node.js_.
- Example:
    - `fs`:File System.
    - `http`:server,
    - `path`:File path.
> ### **1. User-defined Modules**
> - user definde module means the module which is created or designed by user as per their requirements.
`math.js :`
```
function add (a,b){
    return a+b;
}

module.exports = add;
```
---
`app.js:`
```
const add = require('./math.js');
console.log(add(2,3)); //5
```
> ### **3. Third-party Modules**
- The third-party module which is generally installed by using the npm. 
```
npm install express
```
const express = require('express');