const express = require('express');
const router = express.Router();

//Index Page
router.get('/', (req, res) => {
    res.render('index.html', { title: 'FM' });
});
//Blog Page
router.get('/blog', (req, res) => {
    res.render('blog.html', { title: 'FM' });
});
//Contact Page
router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'FM' });
});


module.exports = router;