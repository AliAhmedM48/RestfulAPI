const Story = require("../models/post.model");

let count = 10;
const createStories = async (req, res) => {
  try {
    const { title, body,category,coverfile,covertype } = req.body;

  
    
   const createstory= await Story.create({
      title,
      body,
      // createdBy:req.userOrAdmin._id,
      category,
      coverfile,
      covertype
    });
    res.json({ createstory,status: "success" });
  } catch (error) {
    console.log(error);
    next();
  }
};

const getStories = async (req, res) => {
  try {
    const findAll = await Story.find().limit(10);
    res.json({ findAll, message: "api is working!" });
  } catch (error) {
    console.log(error);
    next();
  }
};

const getStoryById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const findById = await Story.findById(id);
    res.json({ findById });
  } catch (error) {
    console.log(error);
    next();
  }
};
const updateStory = async (req, res, next) => {
  try {
    const id = req.params.id;
    // const checkid = await User.findById(id);
    // console.log(checkid);
    // if (!checkid) {
    //   res.json({
    //     statud: "fail",
    //   });
    // }
    const updated = await Story.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.send({ updated, message: "story Updated successfully!" });
  } catch (error) {
    next();
  }
};
const deleteStory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteUser = await Story.findByIdAndDelete(id);
    res.json({ deleteUser, message: "story Deleted successfully!" });
  } catch (error) {
    console.log(error);
    next();
  }
};

const filterByTitle = async (req, res, next) => {
  try {
    const title = req.params.title;
    console.log(title);
    //findone must have an object
    const findById = await Story.find({ title }).sort({ title: 1 });
    res.json({ findById });
  } catch (error) {
    console.log(error);
    next();
  }
};

const onpagination = async (req, res, next) => {
  try {
    const noOfStories = await Story.find().count();
    if (count > noOfStories) {
      count = 0;
    }
    const storeisPerPage = await Story.find().skip(count).limit(10);
    count = count + 10;
    console.log(storeisPerPage);
    res.json({ storeisPerPage, message: "api is working!" });
  } catch (error) {
    console.log(error);
    next();
  }
};

module.exports = {
  createStories,
  getStories,
  getStoryById,
  updateStory,
  deleteStory,
  filterByTitle,
  onpagination,
};
