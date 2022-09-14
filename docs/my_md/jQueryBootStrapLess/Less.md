[官方文档](https://less.bootcss.com/)
## 使用：

1. 基础用法：
```html
<style type="text/less"> .box{} </style>
```
```html
<link rel="stylesheet/less" type="text/css" href="styles.less" />
```

```html
<script src="https://cdn.jsdelivr.net/npm/less@4" ></script>
```

```vue
<style lang="less"> .box{} </style>
```


2. 全局less环境编译：
   1. 安装less命令
   ```sh
   $ npm install less -g
   ```
   2. 将 bootstrap.less 编译为 bootstrap.css
   ```sh
   $ lessc bootstrap.less bootstrap.css
   ```

3. vscode安装`Easy LESS`的插件
- 自动将`*.less`文件编译成`*.css`文件

## 注释：
`//`和`/* */`
```less
{
    div {} //标签选择器
    div {} /* 标签选择器 */
}
```
::: tip `/* */` 可以被编译到css中，浏览器也可以调试
:::

## 变量：
`@变量名: 变量值;`

::: warning 注意
"属性值"或"url地址"使用：`@变量名`

"属性名"或"选择器"使用：`@{变量名}`
:::


```less
@width: 10px;
@height: @width + 10px;

#header {
  width: @width;
  height: @height;
}
```
编译为：
```css
#header {
  width: 10px;
  height: 20px;
}
```
::: tip 延迟加载
等到当前区域执行完成才会加载变量
:::

## 嵌套：
```less
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
```
编译为：
```css
#header {
  color: black;
}
#header .navigation {
  font-size: 12px;
}
#header .logo {
  width: 300px;
}
```
::: tip `&`符号代表父级引用
:::

## 运算：
- less可以直接进行加减乘除，单位从左往右找

```less
// 所有操作数被转换成相同的单位
@conversion-1: 5cm + 10mm; // 结果是 6cm
@conversion-2: 2 - 3cm - 5mm; // 结果是 -1.5cm

// 转换是不可能的
@incompatible-units: 2 + 5px - 3cm; // 结果是 4px

// 变量示例
@base: 5%;
@filler: @base * 2; // 结果是 10%
@other: @base + @filler; // 结果是 15%

@base: 2cm * 3mm; // 结果是 6cm

// 颜色进行算术运算
@color: (#224488 / 2); // 结果是 #112244
background-color: #112244 + #111; // 结果是 #223355


// 色彩函数
@color: #222 / 2; // results in `#222 / 2`, not #111
background-color: (#FFFFFF / 16); //results is #101010

// calc() 特例
@var: 50vh/2;
width: calc(50% + (@var - 20px));  // 结果是 calc(50% + (25vh - 20px))
```

## 继承：
`&:extend(class)`

```less
.color {
  background-color: #159262;
}

.border_r {
  border-radius: 5px;
}

.textarea2:extend(.color, .border_r) {
  display: block;
}
```
编译为：
```css
.color,
.textarea2 {
  background-color: #159262;
}
.border_r,
.textarea2 {
  border-radius: 5px;
}
.textarea2 {
  display: block;
}
```

## 混合(Mixin)：
无参混合
```less
.center() {
    width: 20px;
    height: 20px;
    background-color: red;
}
```
有参混合
```less
.center(@w, @h, @c) {
  width: @w;
  height: @h;
  background-color: @c;
}

.outer {
  .center(100px, 100px, red);
}
```
参数默认值
```less
.center(@w: 100px, @h: 100px, @c: red) {
  width: @w;
  height: @h;
  background-color: @c;
}

.con {
  .center(@h: 200px);
}
```

也能用`@arguments`
```less
.border(@w: 1px, @t: solid, @c: #ccc) {
  // border: @w @t @c;
  border: @arguments
}

.footer {
  .border(2px, solid, yellow)
}
```

## 模式匹配：
`.mine(@_ || 标记1 || 标记2)`
```less
//当进行模式匹配的时候，参数是@_的混合  是必选的
.mine(@_) {
    width: 300px;
    height: 100px;
}

//允许根据参数的值来改变 mixin的行为
//这个参数不是用来向混合内部传递的  而是用来识别匹配的
.mine(color1) {
    background-color: red;
}

.mine(color2) {
    background-color: pink;
}

.box {
    //模式匹配到相应的混合
    //匹配的关系类似于 switch语句
    .mine(color2);
}
```
## 重载：
- 根据参数来判断使用那个class
```less
.mixin(@a, @b) {
    background-color: @a;
    width: 1000px;
}

.mixin(@a) {
    background-color: @a;
    width: 100px;
}

.box {
    border: 1px solid #000;
    height: 100px;
    .mixin(pink, yellow);
}
```


## 守卫：
`.类名(@变量名) when(@变量名判断) {...}`

```less
.mixin(@q) {
    //无守卫
    height: 100px;
}

//and是与
.mixin(@q) when(@q>10) and (@q<100) {
    background-color: red;
}

//,是或
.mixin(@q) when(@q<=10),
(@q>100) {
    background-color: black;
}

.box {
    border: 1px solid #000;
    .mixin(99);
}
```

## Less函数：
[Less函数手册](https://less.bootcss.com/functions/)

## 字符串的插值和转义：

插值：变量和字符串拼接：`@{变量名}字符串`

转义：用`"~"`进行转义：`~"15px"=15px`

```less
@baseUrl: "http://www.sesamepaste.com/image/";

@size: 30;

.box1 {
    //字符串插值：把变量和字符串进行拼接 请是使用字符串插值语法
    background: url("@{baseUrl}01.jpg") 0 0 no-repeat;

    //因为要拼接的原因，所以某些css的值可能是一个字符串，但是css不需要字符串，所以可以把字符串转义非字符串格式
    //使用~进行转义
    font-size:~"@{size}px";
}
```