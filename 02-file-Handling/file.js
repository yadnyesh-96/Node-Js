// need to import the file package which is 'fs' provided by from node 

const fs = require("fs");

// ========================== File Reading ====================

// Reading file Async (non-blocking)
//Async
// fs.readFile('./myFile.txt','utf-8',(err,res)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(res);
//     }
// })


// Read file Sync (Blocking)

// const result = fs.readFileSync('./myFile.txt','utf-8')
// console.log(result)


// -------------------------------------------------------------------

// ===================== write a file ===================
// wrire file by Async (Non-Bloking)
/*
fs.writeFile('./testAsync.txt','Hello Node.js These now i am starting to learning file handling',(err)=>{
    if(err)console.log(err);
    else console.log('File is created');
});
*/

// Writing file Sync (Blocking)

// fs.writeFileSync('./testSync.txt','Hello Node.js');

