const express = require('express');
const router = express.Router();
const { recipes } = require('../data/data.json');
// 6:19 for how pages should look when complete
/* GET home page.    3:20 */
router.get('/', function(req, res, next) {
  // 1. Pass all recipe data to 'index' template
  res.render('index', { recipes });
});

/* GET recipe page. 3:28 */
router.get('/recipes/:id', function(req, res, next) {
  const recipeId = req.params.id;  // Stores the value of an id route parameter; the id in the url path
  const recipe = recipes.find( ({ id }) => id === +recipeId ); // holds the recipe object to pass into the view
                  // finds the recipe object whose id value matches the id parameter
  
  if (recipe) {
    // 2. Pass the recipe data to the 'recipe' template
    res.render('recipe');
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
