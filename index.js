const express = require('express');  
const path = require('path');              
const port = 8000;                        

const db = require("./config/mangoose");     
const Contact = require("./config/models/contact");                    
const app = express();       

app.set('view engine','ejs');                              

app.set('views',path.join(__dirname,'views'));            

// added a parser .(url encoded not works with params)
app.use(express.urlencoded());

app.use(express.static('assets'));           

app.use(function(req,res,next){
    req.myName = "sahil";
    console.log("middleware 1 is used");
    next();
});

app.use(function(req,res,next){
    console.log("My name from Mw2",req.myName);
    console.log("middleware 2 is used");
    next();
});

var contactList = [
    {
        name:"sdafs",
        phone:"1233333"
    },

    {
        name:"ccc",
        phone:"23456"
    },

    {
        name:"cccss",
        phone:"1234"
    },
]  


app.get('/', function (req, res) {
        
       console.log("My name from Mw2",req.myName);
        return res.render('home', {
                title: "Contact List",
                contact_list: contactList
            });
    }); 


app.get('/profile',function(req,res){
    console.log(__dirname);
    res.send("sdfdsfsd");
});

app.get('/dsfd',function(req,res){

    Contact.find({},function(err,contacts){
        if(err){
            console.log("dsf");
            return;
        }
        return res.render('home',{
            title: "Contact List",
            contact_list: contacts
        });


    });
});


app.get("/practice",function(req,res){
    res.render("practice",
    {   
        title:"lets play with ejs",
    });
});

app.post("/contact",function(req, res){
    //return res.redirect("/practice");
//PARSER FORM DATA
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.person);
    
   // Contact.create({
   //     name:req.body.name,
   //     phone:req.body.phone
  //  },function(err, newContact) {
   //         if(err){
    //            console.log("sdf");
     //           return;
     //       }
     //       console.log("*****",newContact);
      //      return res.redirect('back');

    });

    
  //  contactList.push({
   //    name:req.body.name,
   //    phone:req.body.phone

   //});
   // Contact.push(req.body);
   //  return res.redirect('/');


//});//end parser form data



//app.get('/delete-contact',functiton(req,res) {
        //console.log(req.params);
        //let phone = req.params.phone;
        
        //console.log(req.query);
        
    //    let id = req.query.id;  // for db
    //    console.log(id);      // for db   
        
 //       let contactIndex = contactList.findIndex(function (contact) {
   //                 return contact.phone===phone;
   //     });

    //    Contact.findByIdAndDelete(id,function(err){    // for db
    //        if (err){   // for db
    //            console.log(err);  // for db
    //        return;   // for db
    //        }  // for db
    //        return res.redirect('/');   // for db 
    //    });  // for db


           // if(contactIndex!=-1){
           // return res.redirect('/');
//});             contactList.splice(contactIndex,1);
//           }
      

app.listen(port,function(err){
    if(err){
        console.log("error in server");
    } 
    console.log("sdcd:",port);
});
