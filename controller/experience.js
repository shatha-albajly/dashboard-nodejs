const experience = require("../modals/experience");
// const auth = require("../middleware/auth");


exports.showExperience = (req, res) => {
  res.render("experience");
};

exports.getSkills = (req, res) => {
  res.render("skills");
};

exports.getexperience = (req, res) => {
  experience.find().then((data) => {
    res.render("experience", { data: data });
    res.end();
  });
};

exports.addexperience = async (req, res) => {
  const s = new experience({
    title: req.body.title,
    provider: req.body.provider,
    details: req.body.details,
  });
  await s.save(s);
  res.redirect("/experience");
  res.end();
};

// https://www.quora.com/How-do-you-pass-a-form-parameter-when-using-JavaScript-to-submit-the-form
exports.deleteexperience = (req, res) => {
  experience.updateOne({ _id: req.body.id }, { is_active: 0 }).then(
    (data) => {
      res.redirect("/experience");
    }
  );
};

exports.updateexperience = (req, res) => {
  console.log("req.body");

  experience.updateMany(
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
    res.redirect("/experience");
  });
  
};
