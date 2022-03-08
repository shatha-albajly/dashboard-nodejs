const Dashboard = require("../modals/dashboard");

exports.getDashboard = (req, res) => {
    email= req.cookies.email

  Dashboard.findOne({'email':email}).then((data) => 
{
    console.log('4444444444444444444444444444')
    console.log(data)
    res.render("dashboard", { data: data });
    res.end();
  });
};

exports.addDashboard = async (req, res) => {
      email= req.cookies.email

  Dashboard.updateMany(
    { email: req.cookies.email },
    {
      $set: {
         name: req.body.name,
    surname: req.body.surname,
    phone: req.body.phone,
    address: req.body.address,
    email: req.body.email,
    education: req.body.education,
    country: req.body.country,
    state: req.body.state,
      },
    }
  ).then((data) => {
    console.log(data);
 res.redirect("/dashboard");
  res.end();  });
 
};


exports.deleteDashboard = (req, res) => {
  Dashboard.updateOne({ _id: req.body.id }, { is_active: 0 }).then(
    (data) => {
      res.redirect("/dashboard");
    }
  );
};

exports.updateDashboard = (req, res) => {
        email= req.cookies.email

  console.log("req.body");

  Dashboard.updateMany(
    { email: req.body.req.cookies.email },
    {
      $set: {
         name: req.body.name,
    surname: req.body.surname,
    phone: req.body.phone,
    address: req.body.address,
    email: req.body.email,
    education: req.body.education,
    country: req.body.country,
    state: req.body.state,
      },
    }
  ).then((data) => {
    console.log(data);
    res.redirect("/qualification");
  });
  
  
};
