# hexo-tag-bili
在Hexo博客文章或者单页面中加入样式优美bilibili外链播放器

## 语法:
{% bili video_id %} or {% bili video_id page %}

## 使用方式

在Hexo博客目录使用npm安装插件
```cmd
npm i hexo-tag-bili --save
```
在Hexo博客的文章或者单页面中使用以下标签语法插入视频
```markdown
{% bili video_id %} or {% bili video_id page %}
```
## 例子: 
如果视频网址如：https://www.bilibili.com/video/av24897960

在文章中插入的标签语法为：{% bili 24897960 %}

------------

如果视频网址如（第二页）：https://www.bilibili.com/video/av24897960/?p=2

在文章中插入的标签语法为：{% bili 24897960 2 %}

