# 图片放大镜组件

## 组件说明

`imgMagnifier`,一款基于jQuery扩展封装的图片放大镜组件。
[效果展示](http://www.zjresume.com/project/imgMagnifier/demo.html)

## 浏览器支持

* 支持IE6+、Firefox、Opera 、Safari 、Chrome浏览器。

## 使用方法

### 使用步骤

1.引入`jquery.js`、`imgMagnifier.js`和`imgMagnifier.css`文件。   

2.在html文件中所需的位置插入以下代码段。
* 两个img标签中的src属性值需要用户设置，其值相同，即为同一张图片。
* 为保证展示效果，建议图片尺寸在600px*400px以上。
```html
  <div id='magnifierWrap'>
      <div class="MG-smallImgWrap">
          <img class="MG-smallImg" src="img/demo.jpg">
          <div class ="magnifier"></div>
      </div>
      <div class ="MG-bigImgWrap">
          <img class="MG-bigImg" src="img/demo.jpg">
      </div>
  </div>
```
3.在javascript文件中插入以下代码。
```javascript
  $(document).ready(function(){
      $('#magnifierWrap').imgMagnifier({  
          smallBoxWidth:233,
          smallBoxHeight:295,
          showBoxSize:300,
          scaleRatio:3
      });
  })
```
4.Finished。

5.相关参数说明。
  ```javascript
  //用户在调用elevatorNav()方法时可传入以下参数
   $('#elevatorNav').imgMagnifier({
        smallBoxWidth:233, //左侧小图容器的宽度，单位px，默认0px
        smallBoxHeight:295, //左侧小图容器的高度，单位px，默认0px
        showBoxSize:300, //右侧展示放大部分的正方形容器尺寸，单位px，默认300px
        scaleRatio:3 //图片在右侧展示盒子中显示放大的倍数，默认3
   }); 
  ```

### 案例代码

```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>imgMagnifierDemo</title>
      <link rel="stylesheet" href="imgMagnifier.css">
      <script type="text/javascript" src="http://libs.baidu.com/jquery/1.9.1/jquery.min.js"></script>
  </head>
  <body>
      <div id='magnifierWrap'>
        <div class="MG-smallImgWrap">
          <img class="MG-smallImg" src="img/demo.jpg">
          <div class ="magnifier"></div>
        </div>
        <div class ="MG-bigImgWrap">
            <img class="MG-bigImg" src="img/demo.jpg">
        </div>
      </div>
  <script src="imgMagnifier.js"></script>
  <script>
      $(document).ready(function(){
        $('#magnifierWrap').imgMagnifier({  
          smallBoxWidth:233,
          smallBoxHeight:295,
          showBoxSize:300,
          scaleRatio:3
        });
      })
  </script>
  </body>
  </html>
```
