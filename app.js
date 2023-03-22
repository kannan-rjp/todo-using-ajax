// Importing express module
const express = require("express")
const app = express();
// 
app.use(
    express.urlencoded({
      extended: true,
    })
  )
// Create application/x-www-form-urlencoded parser  
 
// 
app.use(express.static('public'));

//handling get method
app.get('/app',(req,res)=> {
    res.sendFile(__dirname+'/index.html');
})
// app.get('/friend', (req,res)=>{
//     res.send({id:1,name:'Kannan'})
// })
//some data for working on xmlhttprequest
app.get('/task/list',(req,res) => {
    const taskList = [
        {
            id:1,task:'simple web app'
        },
        {
            id:2,task:'todo list'
        },{
            id:3,task:'generating api'
        }
    ];  
    console.log(taskList)
    res.send(taskList);
});

//
app.get('/task',(req,res)=>{
    res.sendFile(__dirname+'/task.html')
})
app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/login.html')
})
app.post('/auth/login',(req,res)=>{
    console.log('post method called /getPost',req.body)
    // res.send({
    //     asw:'kannan',
    //     age:12
    // })
    if(req.body.name == 'admin' && req.body.password=='welcome'){
        res.redirect('/app')
    }
    else{
        res.send(`<h1>Please your Username and Password</h1>`)
    }
    // res.redirect('/app')
})
app.listen(3003,()=>{
    console.log("Server is Running 3003")
})