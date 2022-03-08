const dashboard = require("../modals/dashboard");
const experience = require("../modals/experience");
const qualification = require("../modals/qualification");
const profile = require("../modals/dashboard");

const skills = require("../modals/skills");

exports.getexperience = (req, res) => {
  email= req.cookies.email
console.log( req.cookies)
    profile.findOne({'email':email})
.then((profile) => {
       experience.find().then((experience) => {
      qualification.find().then((qualification) => {
           skills.find().then((skills) => {
                console.log(skills)

                res.render("profile", { 
                profile:profile,
                experience: experience,
                qualification:qualification,
                skills:skills });
                res.end();

   
                                        });

          
    
  });

    });

 
    
  });
};

