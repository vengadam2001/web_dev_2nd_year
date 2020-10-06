var app = require ('express')();
var mongo = require('mongodb').MongoClient;
var path=require('path');
const port=process.env.PORT||20001;


app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,"home.html"));
});

app.get('/home/:obj',(req,res)=>{

  var o=JSON.parse(req.params.obj);
  o.ip=req.ip;
  console.log(o);
var url = "mongodb+srv://vengadam2001:sadasivam73@cluster0.kcoce.mongodb.net/?retryWrites=true&w=majority";
mongo.connect(url, function(err, db) {
  if (err) console.log(err);
  var dbo = db.db("project");
  dbo.collection("userdetails").insertOne(o, function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(o)+" document inserted");
    db.close();
  });
});
try{
res.redirect(`http://117.213.88.218:${port}/final.html`);
}
catch (e){
res.redirect(`http://localhost:${port}/final.html`);
}
// res.send(`<div> <h1> <center>Thank You ! </center></h1>  <br> <a href="localhost:20001"></a></div>`);
});

// app.get('/home/:obj',(req,res)=>{

//   var o=JSON.parse(req.params.obj);
//   o.ip=req.ip;
//   console.log(o);
// var url = "mongodb://localhost:27017/";
// mongo.connect(url, function(err, db) {
//   if (err) console.log(err);
//   var dbo = db.db("project");
//   dbo.collection("userdetails").insertOne(
//     o, function(err, res) {
//     if (err) throw err;
//     console.log(JSON.stringify(o)+" document inserted");
//     db.close();
//   });
// });


// // try{
// res.redirect(`http://117.222.142.193:${port}/`);
// // }
// // catch (e){
// // res.redirect(`http://localhost:${port}/`);
// // }
// // res.send(`<div> <h1> <center>Thank You ! </center></h1>  <br> <a href="localhost:20001"></a></div>`);
// });

app.get('/details.html',(req,res)=>{
res.sendFile(path.join(__dirname,"details.html"));
});

app.get('/final.html',(req,res)=>{
  res.sendFile(path.join(__dirname,"final.html"));
});

app.get('/home.html',(req,res)=>{
  res.sendFile(path.join(__dirname,"home.html"));
});
  
app.get('/about.html',(req,res)=>{
  res.sendFile(path.join(__dirname,"about.html"));
});

app.get('/index.html',(req,res)=>{
  res.sendFile(path.join(__dirname,"index.html"));
});
      
app.get('/img/pic1.jpg',(req,res)=>{
  res.sendFile(path.join(__dirname,"img/pic1.jpg"));
});

app.get('/img/pic2.jpg',(req,res)=>{
  res.sendFile(path.join(__dirname,"img/pic2.jpg"));
});

app.get('/img/pic3.jpg',(req,res)=>{
  res.sendFile(path.join(__dirname,"img/pic3.jpg"));
});

app.get('/img/pic4.jpg',(req,res)=>{
  res.sendFile(path.join(__dirname,"img/pic4.jpg"));
});

app.get("/1642299.jpg",(req,res)=>{
  res.sendFile(path.join(__dirname,"img/1642299.jpg"));
});

app.get("/blockGame.html",(req,res)=>{
  res.sendFile(path.join(__dirname,"blockGame.html"));
});

app.get('/imageRotate.html',(req,res)=>{
  res.sendFile(path.join(__dirname,"imageRotate.html"));
});

app.get('/blockIns.html',(req,res)=>{
  res.sendFile(path.join(__dirname,"blockIns.html"));
})

app.get('/colorChange.html',(req,res)=>{
  res.sendFile(path.join(__dirname,"colorChange.html"));
});

app.get('/imageR.js',(req,res)=>{
  res.sendFile(path.join(__dirname,"imageR.js"));
});

app.get('/index.js',(req,res)=>{
  res.sendFile(path.join(__dirname,"index.js"));
});

app.get('/script.js',(req,res)=>{
  res.sendFile(path.join(__dirname,"script.js"));
});
// app.get('/script1.js',(req,res)=>{
//   res.sendFile(path.join(__dirname,"script1.js"));
// });
// app.get('/',()=>{});

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
});