## 外层包裹：

```js
$(function () {});
```

## 对象转换：

js对象转jq对象：直接在外层添加一个`$()`  

jq对象转js对象：中括号操作符给"下标"或"get"方法
   
```js
$(function () {
  //jQuery对象永远是一个伪数组对象(里边包含的是js对象)
  console.log($(".con li"));
  console.log($(".con li")[0]);
  console.log($(".con li").get(0));
  init;
  //js对象对比
  var oCon = document.querySelector(".con");
  console.log(oCon);
});
```

## 获取节点：
```js
var oBox = $("选择器");

oBox.children()
oBox.parent()
oBox.siblings()
oBox.prev()
oBox.next()
oBox.prevAll()
oBox.nextAll()
oBox.find()
oBox.end()
```

## 动画：
```js
var oBox = $("选择器").animate({ key: value }, 1000);

oBox.show()
oBox.hide()
oBox.fadeIn()
oBox.fadeOut()
```

## 样式：
```js
$("选择器").css({ key: value });
```

## 节点操作：

- 添加：
```js
$("<li>li-1</li>").appendTo($("选择器"));
```

- 删除：
```js
$("选择器").remove();
```

## 事件委托：
```js
$("父节点").on("click", "子节点", function () {
  $(this).css("background", "red");
});
```

## 方法扩展：
- 可以手动添加静态/共有方法：
```js
$.方法名 = function () {};
$.fn.方法名 = function () {};
```

## `$` 使用权：
```js
var new$ = jQuery.noConflict();
```