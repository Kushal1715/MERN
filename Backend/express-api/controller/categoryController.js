const Category = require('../models/categoryModel');


//to post category in database
exports.postCategory = async (req, res) => {
  let category = new Category({
    category_name: req.body.category_name,
  })
  //check if catagory name already exists in database
  Category.findOne({ category_name: category.category_name }).then(async data => {
    if (data === null) {
      //save data in database
      category = await category.save();
      if (!category) {
        return res.status(400).json({ error: 'something went wrong' })
      }
      res.send(category)
    } else {
      return res.status(400).json({
        error: 'category name must be unique'
      })
    }
  })
    .catch(err => {
      return res.status(400).json({ error: err })
    })
}

//to show all category list
exports.showCategoryList = async (req, res) => {
  const category = await Category.find()
  if (!category) {
    return res.status(400).json({ error: 'something went wrong' })
  }
  res.send(category)
}

// to show one category using its id
exports.categoryDetails = async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    return res.status(400).json({
      error: 'something went wrong'
    })
  }
  res.send(category);
}

// to update the category
exports.updateCategory = async (req, res) => {
  const category = await Category.findByIdAndUpdate(req.params.id, {
    category_name: req.body.category_name
  }, { new: true }) // to show updated values in result
  if (!category) {
    return res.status(400).json({
      error: 'something went wrong'
    })
  }
  res.send(category);
}

exports.deleteCategory = (req, res) => {
  Category.findByIdAndDelete(req.params.id).then(category => {
    if (!category) {
      return res.status(403).json({ error: 'category not found' })
    }
    else {
      return res.status(200).json({ msg: 'category deleted' })
    }
  })
    .catch(err => {
      return res.status(400).json({ error: err })
    })
}