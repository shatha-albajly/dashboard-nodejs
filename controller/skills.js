const Skills = require("../modals/skills");



exports.getSkills = (req, res) => {
  Skills.find().then((data) => {
    res.render("skills", { data: data });
    res.end();
  });
};

exports.addSkills = async (req, res) => {
  console.log(req.body)
  const s = new Skills({
    skills: req.body.skills
    
  });
  await s.save(s);
  res.redirect("/skills");
  res.end();
};

exports.deleteSkills = (req, res) => {
  Skills.updateOne({ _id: req.body.id }, { is_active: 0 }).then(
    (data) => {
      res.redirect("/skills");
    }
  );
};

exports.updateSkills = (req, res) => {
  console.log("req.body");

  Skills.updateMany(
    { _id: req.body.id },
    {
      $set: {
        skills: req.body.skills,
      },
    }
  ).then((data) => {
    console.log(data);
    res.redirect("/skills");
  });
  
};
