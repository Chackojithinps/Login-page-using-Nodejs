var express = require('express');
const nocache = require('nocache');
var router = express.Router();

/* GET home page. */
  router.get('/',nocache(),function(req, res, next) {
      if(req.session.user){
        res.redirect('/home')
      }
      res.render('index');

    });


router.get('/home',(req,res)=>{
  if(req.session.user){
    // console.log(req.body)
    res.render('home',{name:"jithin"})
  }else{
    res.redirect('/') 
  }
})
const Username="jithin";
const Password="123";
router.post('/home',nocache(),(req,res)=>{
  // console.log(req.body)
  const {username,password1}=req.body
  if(username==Username && password1 == Password){
    req.session.user=true;
    res.redirect("/home")
  }else{
    // req.session.loginErr=true;
    // res.redirect('/')
    res.render('index',{error:true})
  }
})
router.get('/card',(req,res)=>{
  const cardItems=[
    {Image:"https://e0.365dm.com/22/07/1600x900/skysports-lisandro-martinez_5846996.jpg?20220727133633",
     Name:"Lisandro Martinez",
     Message:"Some quick example text to build on the card title and make up the bulk of the card's content"
    },
    {Image:"https://www.telegraph.co.uk/content/dam/football/2022/12/20/TELEMMGLPICT000307947811_trans_NvBQzQNjv4Bq5Tv6h4BYWgYgoLsqFURTqCqcMVjLATnIPMi0T53LPlU.jpeg",
     Name:"Marcus Rashford",
     Message:"Some quick example text to build on the card title and make up the bulk of the card's content"
    },
    {Image:"https://content.api.news/v3/images/bin/a96273e1f068893700afd423482d37bc",
     Name:"Harry Maquire",
     Message:"Some quick example text to build on the card title and make up the bulk of the card's content"
    },
    {Image:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt445f1c1c3dc3f1b8/63663ac793215e112b37f60f/Casemiro_Man_Utd_2022-23.jpg?auto=webp&fit=crop&format=jpg&height=800&quality=60&width=1200",
    Name:"Casemiro",
    Message:"Some quick example text to build on the card title and make up the bulk of the card's content"
    }

  ]
  if(req.session.user){
   res.render('card',{cardItems})

  }else{
    res.redirect('/')
  }
})
router.get('/table',(req,res)=>{
   const tableItems=[
    {
      No:1,
      Name:"Hary",
      Last:"Maquire",
      position:"Central back"

    },
    {
      No:2,
      Name:"Marcus",
      Last:"Rashford",
      position:"Central Forward"

    },
    {
      No:3,
      Name:"Lisandro",
      Last:"Martinez",
      position:"Central back"

    },
    {
      No:4,
      Name:"Mark",
      Last:"Antoy",
      position:"Right Wing"

    },
    {
      No:5,
      Name:"Diago",
      Last:"Dalot",
      position:"Right back"

    },
    {
      No:6,
      Name:"Raphel",
      Last:"Varane",
      position:"Central back"

    }
   ]
   if(req.session.user){
   res.render('table',{tableItems})
  }else{
     res.redirect('/')
   }
})

router.get('/list',(req,res)=>{
   const players=["Harry Maquire",
   "Marcus Rashford",
   "Raphel Varane",
   "Lisandro Martinez",
   "Casemiro",
   "Mark Antony",
   "David Dea Gea",
   "Luke Shaw",
   "Aaron wan-bisakka",
   "Fred",
   "Bruno Fernades"]
   if(req.session.user){
    res.render('list',{players})
 
   }else{
     res.redirect('/')
   }
})
router.get('/logout',(req,res)=>{
  // req.session.user=false;
  req.session.destroy();
  res.redirect('/')
})
module.exports = router;
