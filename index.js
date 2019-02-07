
/**
* hexo-tag-bili
* https://github.com/honjun/hexo-tag-bili.git
* 
* Syntax:
* {% bili video_id %}
* 
* Example: 
*   https://www.bilibili.com/video/av24897960
*   {% bili 24897960 %}
* 
*   
*/
hexo.extend.tag.register('bili', function(args){
  var id = args[0];
  var page = args[1] || '';
  return `<div style="position: relative; width: 100%; height: 0; padding-bottom: 75%;"><iframe src="//player.bilibili.com/player.html?aid=${id}&page=${page}" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;"></iframe></div>`;
});
