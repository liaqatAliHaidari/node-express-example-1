const path = require('path');
const express = require('express');

const hbs = require('hbs');

const app = express();

const port = process.env.PORT || 3000

// setting view enginee
app.set('view engine','hbs');

// setting views path
const viewsPath = path.join(__dirname,'../templates/views/');
app.set('views',viewsPath);

// setting partial path
const partialsPath = path.join(__dirname,'../templates/partials/');
hbs.registerPartials(partialsPath);

// setting public dir path
const public_dir_path = path.join(__dirname,'../public');
app.use(express.static(public_dir_path));

app.get('',(req,res)=>{
  res.render('index',{
    title:'Home',
    heading:'This is the heading'
  });
});

app.get('/about',(req,res)=>{
  res.render('about');
});
app.get('/help',(req,res)=>{
  res.render('help');
});

app.listen(port,()=>{
  console.log('server is running');
});