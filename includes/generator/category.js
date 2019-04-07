module.exports = function (hexo) {
  hexo.extend.generator.register('categories', function(locals){
    return {
      path: 'categories/',
      data: locals,
      layout: ['category']
    };
  });
};