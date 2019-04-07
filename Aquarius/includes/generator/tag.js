module.exports = function (hexo) {
  hexo.extend.generator.register('tags', function(locals){
    return {
      path: 'tags/',
      data: locals,
      layout: ['tag']
    };
  });
};