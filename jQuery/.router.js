function setRouter(app){ 
 var router = app; 

app.get('/loadMore', function (req, res) {
  var cur = req.query.curIdx;
  var len = req.query.len;
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr.push('内容' + (parseInt(cur) + i));
  }
  res.send(arr);

})
}
 module.exports.setRouter = setRouter