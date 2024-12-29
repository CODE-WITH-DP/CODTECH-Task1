const router = require('express').Router();
const {Intro, About, Project, Contact, Experience} = require('../models/portfolioModel');


// get all portfolio data
router.get('/get-portfolio-data', async(req, res)=>{
  try{
      const intros = await Intro.find();
      const abouts = await About.find();
      const experiences = await Experience.find();
      const projects = await Project.find();
      const contacts = await Contact.find();

      res.status(200).send({
        intro : intros[0],
        about : abouts[0],
        experiences : experiences,
        projects : projects,
        contact : contacts[0],
      });
  } catch(err){
    res.status(500).send(err);
  }
});

// update intro

router.post('/update-intro', async(req, res)=>{
  try {
    const intro = await Intro.findOneAndUpdate(
    {_id:req.body._id},
    req.body,
    {new:true}
    );
    res.status(200).send({
      data: intro,
      success: true,
      message: "Intro updated successfully"
    });
  } catch(err){
  res.status(500).send(err);
  }
});

module.exports = router;

// update about

router.post('/update-about', async(req, res)=>{
  try {
    const about = await About.findOneAndUpdate(
    {_id:req.body._id},
    req.body,
    {new:true}
    );
    res.status(200).json({
      data: about,
      success: true,
      message: "About updated successfully"
    });
  } catch(err){
  res.status(500).send(err);
  }
});

module.exports = router;