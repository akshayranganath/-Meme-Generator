var express = require('express')
const fetch = require('node-fetch')
var router = express.Router()


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'सुभाषितम्' })
})

router.get('/edit', function (req, res, next) {
  //res.end('Hello, World!');
  res.render('edit', { title: 'सुभाषितम्' })
})

router.get('/generative', function (req, res, next) {
  res.render('generative', { title: 'सुभाषितम्' })
})

router.get('/getImage', function(req, res, next){
  const keyword = req.query.keyword || 'sunrise'
  
  const url = `https://hi.final-tou.ch/_/generate/greeting?scene=12&superlative=${keyword}&artifacts=&batch_size=1&style=3d,%20octane%20render,%20depth%20of%20field,%20unreal%20engine%205,%20concept%20art%20of%20a%20(({})),%20vibrant%20colors,%20glow,%20trending%20on%20artstation,%20ultra%20high%20detail,%20ultra%20realistic,%20cinematic%20lighting,%20focused,%2012k`
  fetch(url)
  .then(resp => {
    if(!resp.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
      }
      return resp.json()
  })
  .then(data => {
    res.json(data)
  })
})
module.exports = router
