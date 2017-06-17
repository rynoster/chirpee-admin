/**
 * GET /
 */
exports.home = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

exports.index = function(req, res) {
  res.redirect('/login');
};