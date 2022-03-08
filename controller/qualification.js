const Qualification = require("../modals/qualification");
// const auth = require("../middleware/auth");

exports.getHome = (req, res) => {
  try{
  res.render("index", { title: "Express" });
  Qualification.find().then(async (data) => {
    await res.render("index", { title: "data" });
    res.end();
  });}
  catch(error){
    console.log(error)
  }
};

exports.getDashboard = (req, res) => {
  res.render("dashboard");
};

exports.showExperience = (req, res) => {
  res.render("experience");
};

exports.getSkills = (req, res) => {
  res.render("skills");
};

exports.getQualification = (req, res) => {
  Qualification.find().then((data) => {
    res.render("qualification", { data: data });
    res.end();
  });
};

exports.addQualification = async (req, res) => {
  const s = new Qualification({
    title: req.body.title,
    provider: req.body.provider,
    details: req.body.details,
  });
  await s.save(s);
  res.redirect("/qualification");
  res.end();
};

// https://www.quora.com/How-do-you-pass-a-form-parameter-when-using-JavaScript-to-submit-the-form
exports.deleteQualification = (req, res) => {
  Qualification.updateOne({ _id: req.body.id }, { is_active: 0 }).then(
    (data) => {
      res.redirect("/qualification");
    }
  );
};

exports.updateQualification = (req, res) => {
  console.log("req.body");

  Qualification.updateMany(
    { _id: req.body.id },
    {
      $set: {
        title: req.body.title,
        provider: req.body.provider,
        details: req.body.details,
      },
    }
  ).then((data) => {
    console.log(data);
    res.redirect("/qualification");
  });
  
};

exports.register= (req, res) => {
  console.log('ddddddddd')

  // try {
  //   // Get user input
  //   const { first_name, last_name, email, password } = req.body;

  //   // Validate user input
  //   if (!(email && password && first_name && last_name)) {
  //     res.status(400).send("All input is required");
  //   }

  //   // check if user already exist
  //   // Validate if user exist in our database
  //   const oldUser = await User.findOne({ email });

  //   if (oldUser) {
  //     return res.status(409).send("User Already Exist. Please Login");
  //   }

  //   //Encrypt user password
  //   encryptedPassword = await bcrypt.hash(password, 10);

  //   // Create user in our database
  //   const user = await User.create({
  //     first_name,
  //     last_name,
  //     email: email.toLowerCase(), // sanitize: convert email to lowercase
  //     password: encryptedPassword,
  //   });

  //   // Create token
  //   const token = jwt.sign(
  //     { user_id: user._id, email },
  //     process.env.TOKEN_KEY,
  //     {
  //       expiresIn: "2h",
  //     }
  //   );
  //   // save user token
  //   user.token = token;

  //   // return new user
  //   res.status(201).json(user);
  // } catch (err) {
  //   console.log(err);
  // }
}
