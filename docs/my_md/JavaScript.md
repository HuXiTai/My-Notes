## 推荐文档：

### [MDN](https://developer.mozilla.org/zh-CN/) 

### [Lodash](https://www.lodashjs.com/)

### [Momen](http://momentjs.cn/)
## 书写位置：
`<script></script>`标签里 

`xxx.js`文件里
## 函数：
内置函数：
```html
<div class="box"></div>
```
```js
var oBox = document.querySelector(".box");
var x = 123

alert("我是一段提示"); //浏览器弹出警示框
console.log("我是消息"); //浏览器控制台打印输出信息
console.dir(oBox); //查看对象的属性和方法
prompt("提示信息", "默认值"); //浏览器弹出输入框，用户可以输入
confirm("单击'确定'继续,单击'取消'停止"); //浏览器弹出确认框
document.write("我是消息"); //把内容作为网页的内容进行展示
isNaN(x); //判断x是否为非数字，返回值为true/false
```

转换函数：
```js
var a = 123;
var b = "123"
var c = "123.123"

a.toString(); //字符类型的转换，返回"123"
String(a); //字符类型的转换，返回"123"
parseInt(b) //数字类型的转换，返回123
parseFloat(a) //浮点类型的转换，返回123.123
Number(b) //强行转换成数字型
Boolean(b) //布尔类型的转换，返回tru
```
其他函数：
```js
throw new Error("形参实参个数不一致"); //主动报错函数；
```

声明：
```js
//方法一：
function 函数名(形参1, 形参2, 形参n) {
    /* 函数体 */
};
```
```js
//方法二：
var 函数名 = function (形参1, 形参2, 形参n) {
    /* 函数体 */
};
```
```js
//方法三：
var test = new Function('arg','console.log(arg+1)');
/* var fn = new Function("形参", "形参", "函数体"); */
```

调用：
```js
函数名(实参1, 实参2, 形参n);
```



## 属性：
"length"属性：
```js
var msg = "每天一碗芝麻糊";
msg.length; //返回字符串的长度，返回7
```

关键字:
```js
/* var */
var 变量名

/* typeof */
typeof 变量名; //获取变量数据类

/* instanceof */
变量名 instanceof 类型; //用来判断复杂数据类型

Object.prototype.toString.call(); //返回所有数据类

/* continue和break和return */
for (i = 0; i <= 3; i++) {
  continue; //跳出当前循环
  break; //跳出整个循环
  return 值; //返回一个值
}
```

对象：
- arguments：
```js
function func1(a, b, c) {
    console.log(arguments[0]); // 输出：1
    console.log(arguments[1]); // 输出：2
    console.log(arguments[2]); // 输出：3
}
```

- caller
```js
function callerDemo() {
  if (callerDemo.caller) {
    var a = callerDemo.caller.toString();
    /* 
      输出：
      function handleCaller() {
          callerDemo();
      }
    */
    console.log(a);
  } else {
    console.log("this is a top function");
  }
}
function handleCaller() {
  callerDemo();
}
var a = new handleCaller();
```
- callee
```js
//callee可以打印其本身
function calleeDemo() {
  console.log(arguments.callee);
}
//用于验证参数
function calleeLengthDemo(arg1, arg2) {
  if (arguments.length == arguments.callee.length) {
    console.log("验证形参和实参长度正确！");
    return;
  } else {
    console.log("实参长度：" + arguments.length);
    console.log("形参长度： " + arguments.callee.length);
  }
}
//递归计算
var sum = function (n) {
  if (n <= 0) return 1;
  else return n + arguments.callee(n - 1);
};
```

- window //顶级对象

变量：
- this //这个变量存储的是一个对象的地址

## 流程控制：
![img-023](/images/023.png)
顺序结构：
```JS
var a = 1;
a = 2;
console.log(a);
```
选择结构：
```JS
/* 
    情况一： 
    if (条件表达式) {
        代码块 
    } else {
        代码块
    }
*/

var a = 3
if(a === 3) {
    console.log("yes");
}else{
    console.log("no");
}

/* 输出：yes */
```

```JS
/* 
    情况二： 
    表达式1 ? 代码块1 : 代码块2;
*/

var a = 3
a === 3 ? console.log("yes") : console.log("no")

/* 输出：yes */
```

```JS
/* 
    情况三： 
    switch (表达式) {
      case val1:
        代码块1;
        break;
      case val2:
        代码块2;
        break;
      default:
        代码块3;
    }
*/

var a = 3
switch (a) {
    case 1:
        console.log("我是1")
        break;
    case 2:
        console.log("我是2")
        break;
    case 3:
        console.log("我是3")
        break;
}

/* 输出：我是3 */
```
循环结构：
```JS
/* 情况一 */
for (i = 0; i <= 3; i++) {
  /* 代码块 */
}

/* 情况二 */
var i = 1;
while (i <= 5) {
  i++;
}

/* 情况三 */
var i = 1;
do {
  i++;
} while (i < 5);
```

## 数据类型：
### 简单数据类型：
- 数字型 Number
::: details 点我查看效果
```js
var num1 = 21; //整数
var num2 = 21.3578 //小数
var num3 = 01; //八进制
var num4 = 0xA; //十六进制

//最大值和最小值
alert(Number.MAX_VALUE); //1.7976931348623157e+308
alert(Number.MIN_VALUE); //5e-324

//特殊值
alert(Infinity);  //Infinity
alert(-Infinity); //-Infinity
alert(NaN);       //NaN
```
:::

- 字符串型 String
::: details 点我查看代码
```js
var strMsg = '一碗芝麻糊'; //单引号双引号都可以

//字符串的拼接 + 只要有字符串和其他类型相拼接 最终的结果是字符串
console.log('沙漠' + '骆驼'); //字符串的 沙漠骆驼
```
::: 
- 布尔型 Boolean
::: details 点我查看代码
```js
var flag1 = true;  //flag 布尔型
var flag2 = false;  //flag 布尔型
console.log(flag + 1); //2
```
:::

- Undefined
::: details 点我查看代码
```js
var variable = undefined;
```
:::

- Null
::: details 点我查看代码
```js
var space = null;
```
:::

- Symbol
::: details 点我查看代码
```js
"use strict"
var sym1 = Symbol();
var sym2 = Symbol('foo');
var sym3 = Symbol('foo');
console.log(sym2 == sym3) // false
console.log(sym2 === sym3) // false

// Symbol中的description属性
console.log(sym1.description); // undefined
console.log(sym2.description); // foo

sym1.first = "first"; // Cannot create property 'first' on symbol 'Symbol()' [无法创建属性]
```
:::

- Bigint
::: details 点我查看代码
```js
console.log(9007199254740995n); //9007199254740995n
```
:::

### 复杂数据类型：
- Object:
::: details 点我查看代码
```js
var obj = { name: "芝麻糊" };
```
:::
- Function：
::: details 点我查看代码
```js
function fn() {}
```
:::
- Array：
::: details 点我查看代码
```js
var arr = [1, 2, 3, 4];
```
:::
- Math：
::: details 点我查看代码
```js
Math.ceil(5.4) // 6
```
:::
- Date：
::: details 点我查看代码
```js
var date = Date();
console.log(date); //Tue Sep 24 2019 11:40:21 GMT+0800 (中国标准时间)
```
:::
- RegExp：
::: details 点我查看代码
```js
var patt = /o/;
patt.test("Hello World!");//true
patt.test("Hi!");//false
```
:::

## 转义字符：
| 序列     |                                                                       代表字符                                                                       |
| -------- | :--------------------------------------------------------------------------------------------------------------------------------------------------: |
| `\0`     |                                                                  Null字符（\u0000）                                                                  |
| `\b`     |                                                                   退格符（\u0008）                                                                   |
| `\t`     |                                                                 水平制表符（\u0009）                                                                 |
| `\n`     |                                                                   换行符（\u000A）                                                                   |
| `\v`     |                                                                 垂直制表符（\u000B）                                                                 |
| `\f`     |                                                                   换页符（\u000C）                                                                   |
| `\r`     |                                                                   回车符（\u000D）                                                                   |
| `\"`     |                                                                   双引号（\u0022）                                                                   |
| `\'`     |                                                                撇号或单引号（\u0027）                                                                |
| `\\`     |                                                                   反斜杠（\u005C）                                                                   |
| `\xXX`   |                                                      由 2 位十六进制数值 XX 指定的 Latin-1 字符                                                      |
| `\uXXXX` |                                                     由 4 位十六进制数值 XXXX 指定的 Unicode 字符                                                     |
| `\XXX`   | 由 1~3 位八进制数值（000 到 377）指定的 Latin-1 字符，可表示 256个 字符。如 \251 表示版本符号。注意，ECMAScript 3.0 不支持，考虑到兼容性不建议使用。 |

## 运算符即优先级：
![img-003](/images/003.png)

## 栈和堆：
![img-004](/images/004.png)

![img-005](/images/005.png)
::: tip 提示
在Js里面数据都存在推内存里，分为栈结构和堆结构
:::


## 作用域：
- 全局作用域：用"var"和不用"var"申明的变量，关闭浏览器时释放
- 部作用域：在函数里用"var"申明的变量，函数执行完时释放
- Js中没有块级作用域（在ES6之前）

## 执行环境和执行环境栈：
### 执行环境：
   1. 全局环境（Global Context）
   2. 函数环境（Function Context）
   3. Eval函数环境（Eval Context）

### 执行环境栈：

![img-006](/images/006.png)
- 关于执行栈有5点需要记牢：
1. 单线程
1. 同步执行
1. 只能有1个全局环境
1. 任意多个函数环境
1. 每次调用函数就会新建一个环境，即使函数调用自身也是如此

## 函数传值：
基本数据类型：
::: details 点我查看代码
```js
{
  var a = 10;
  var b = 20;

  function add(a, b) {
    a = 40;
    return a + b;
  }
  
  console.log(add(a, b)); // 60
  console.log(a, b); // 10 20
}

/* --------------------------------------- */

{
  var a = 10;
  var b = 20;

  function add() {
    // 此时a是在修改全局变量的值
    a = 40;
    return a + b;
  }

  console.log(add()); //60
  console.log(a, b); //40 20
}

/* --------------------------------------- */

{
  var a = 10;
  var b = 20;

  function add() {
    var a = 40;
    return a + b;
  }

  console.log(add()); // 60
  console.log(a, b); //10 20
}
```
:::

复杂数据类型：
::: details 点我查看代码
```js
// 实参传递复杂数据类型给形参，传递的是地址。
{
  var arr = [1, 2, 3];
  function fn(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] += 2; //这种情况改变的是arr里元素的值，
    }
  }
  fn(arr);
  console.log(arr); //[3,4,5]
}

/* --------------------------------------- */

{
  var arr = [1, 2, 3];
  function fn(arr) {
    arr = [0, 0, 0];
  }
  fn(arr);
  console.log(arr); //[1,2,3],这种情况下arr是一个局
}

/* --------------------------------------- */

{
  var arr = [1, 2, 3];
  function fn() {
    arr = [0, 0, 0];
  }
  fn(arr);
  console.log(arr); //[0,0,0]
}

/* --------------------------------------- */

{
  var arr = [1, 2, 3];
  function fn() {
    var arr = [0, 0, 0];
  }
  fn(arr);
  console.log(arr); //[1,2,3]
}
```
:::

图解：

![img-008](/images/008.png)

![img-007](/images/007.png)

## 作用域链：

![img-009](/images/009.png)
::: details 点我查看题目
```js
/* 
  作用域链特点：
  逐级向上查找
  就近原则
*/
{
  /* 题1： */
  function f1() {
    var num = 123;
    console.log(num2); //22
    function f2() {
      var num2 = 222;
      console.log(num); //123
      console.log(num1); //111
    }
    f2();
  }
  var num = 456;
  var num1 = 111;
  var num2 = 22;
  f1();
}

/* --------------------------------------- */

{
  /* 题2： */
  var a = 1;

  function fn1() {
    var a = 2;
    var b = "22";

    function fn2() {
      var a = 3;

      function fn3() {
        var a = 4;
        console.log(a); //4
        console.log(b); //22
      }
      fn3();
    }
    fn2();
  }
  fn1();
}

/* --------------------------------------- */

{
  /* 面试题： */
  var num = 10;

  function fun() {
    var num = 20;
    fun2();
  }

  function fun2() {
    console.log(num); //10
  }

  fun();
}
```
:::


## 预解析：
"变量提升"或"函数提升"
代码执行分两步走：
1. 预解析(只对变量和函数处理，把带"var"的变量和函数的声明提前进行) 
2. 代码执行(一行一行地执行)
::: details 点我查看题目
```js
{
  // 题1
  function fn() {
    console.log(x); //10
  }
  function show(f) {
    var x = 20;
    f();
  }
  var x = 10;
  show(fn);
}

/* --------------------------------------- */

{
  // 题2
  function a() {}
  var a;
  // 只声明未赋值的变量和函数同名时，函数的优先级更高
  // 已赋值的变量，变量的优先级更高
  console.log(typeof a); //function
}

/* --------------------------------------- */

{
  // 题3:
  var b;
  // b是否是window对象的属性
  if (!(b in window)) {
    b = 1;
  }
  console.log(b); //undefined
}

/* --------------------------------------- */

{
  // 题4：
  function c(c) {
    console.log(c); //1
    var c = 3;
  }
  var c;
  c = 1;
  // c(2);//报错
}

/* --------------------------------------- */

{
  // 题4
  var fn;
  fn = function () {
    console.log(fn); //() {console.log(fn);}
  };
  fn();
  var obj;
  obj = {
    fn2: function () {
      console.log(fn2); //报错，局部作用域和全局作用域都没有fn2的变量
    },
  };
  obj.fn2();
}
```
:::

## 立即调用函数表达式IIFE：
- 定义时执行，且一次

格式：
1. `(function () {statements})();`
2. `(function () {statements}());`

作用：
1. 防止变量名污染
1. 可用于项目初始化
1. 隐藏内部代码

## 函数的回调：
![img-010](/images/010.png)

## 函数的递归：
::: details 点我查看题目
```js
{
  // 用循环去实现0-3的值的打印
  function f1() {
    for (var i = 0; i <= 3; i++) {
      console.log(i);
    }
  }
  f1();
}

{
  // 用递归实现
  function f2(num) {
    if (num > 3) {
      return;
    }
    console.log(num);
    num++;
    f2(num);
    console.log("第" + num + "次执行f2");
  }
  f2(0);
}
```
:::

## 面向对象：
### 概念：
1. 属性：事物的特征，在对象中用属性来表示（常用名词）
2. 方法：事物的行为，在对象中用方法来表示（常用动词）

### 创建对象的方式：
1. 字面量创建：
```js
var 对象名 = {
    属性名: 属性值,
    方法名: function() { 函数体 }
}

/* var obj = { name: "芝麻糊", eat: function () {} }; */
```
3. 内置构造函数创建:
```js
var 对象名 = new Object();

对象名.属性名 = 属性值;
对象名["属性名"] = 属性值;

对象名.方法名 = function(){ 函数体 };

/* 
var obj = new Object();
var tag = "name";
obj.name = "每天一碗";
obj[tag] = "芝麻糊";
obj.eat = function () {};
console.log(obj); //{name: '芝麻糊', eat: ƒ}
*/
```
4. 自定义构造函数创建：
```js
function 构造函数名(形参1,形参n) {
    this.属性名 = 属性值;
    this.方法名 = function() { 函数体 };
}
var 对象名 = new 构造函数名(实参1,实参n)

/* 
function Obj(name) {
  this.name = name;
  this.age = function () {};
}
var obj = new Obj("芝麻糊");
console.log(obj); //{name: '芝麻糊', age: ƒ}
*/
```

## 对象的增删改查：
### 查：
1. `对象.属性名;`
1. `对象.方法名;`
2. `对象["属性名"];`
```js
var obj = {
  name: "芝麻糊",
  age: 18,
  eat() {
    console.log("吃饭");
  },
};
var tag = "name"
console.log(obj.name); //芝麻糊
console.log(obj[tag]); //芝麻糊
console.log(obj.eat); /* eat() {console.log("吃饭");} */
```


### 增和改：
- 有则更改，无则增加

### 删：
1. `delete 对象.属性名;`
2. `delete 对象["属性名"];`
3. `delete 对象.方法名;`
```js
var obj = {
  name: "芝麻糊",
  age: 18,
  eat() {
    console.log("吃饭"
  },
};
var tag = "age";
delete obj.name;
delete obj[tag];
delete obj.eat;
console.log(obj); //{}
```

## 对象的遍历：
```js
/* 
  for(let key in 对象){} //key表示对象的属性名和方法名/索引
  for(let value of 非对象){} //value表示值
*/
var obj = {
  name: "芝麻糊",
  age: 18,
  eat() {
    console.log("吃饭");
  },
};
for (let key in obj) {
  console.log(key);
  /* 
    输出：
    name
    age
    eat
  */
}
```

## 构造函数：
和普通函数的区别：
1. 调用方式不同：构造函数一般有"new"
2. 返回值不同：构造函数返回的是实例对象或复杂数据对象，普通函数返回的是返回值
3. "this"不同：构造函数是实例对象，普通函数是"window"

::: details 点我查看代码
```js
// window是顶级对象，我们定义的变量和函数都是window对象的属性
var a = 1;
var b = "zs";

function cc() {
	console.log("---cc---");
}
console.log(window);
console.log(a); //window.a
console.log(b); //window.b
cc(); //window.cc()

console.log("------------------");

var _this;

function Car(brand, color, size, price) {
	this.brand = brand;
	this.color = color;
	this.size = size;
	this.price = price;
	_this = this;
	console.log("---Car---");
	return console.log;
	// return;
}

// 定义的函数既可以当构造函数使用，也可以当普通函数使用，区别就在于我们怎么调用它
// ===用于比较两个对象的时候，判断的是他们是否是同一个对象。

// 1、当构造函数使用,此时构造函数里的this指向的是我们创建的实例对象
var lsls = new Car("劳斯莱斯", "black", 6, 700);
console.log(lsls);
console.log(lsls.brand);
console.log(lsls === _this);

var bl = new Car("宾利", "black", 8, 230);
console.log(bl === _this); //true
console.log(bl === lsls); //false

/* 
	当把函数当构造函数使用时的return：
	1、函数没有return或者有return，return后面没有值时，返回的是构造函数创建的实例对象。
	2、函数有return，return后面是基本数据类型（包括null、undefined）时,返回的是构造函数创建的实例对象。
	3、函数有return，return后面是复杂数据类型（Array，Object）时,返回这个复杂数据对象。
*/


console.log("#############################");

// 2、当普通函数使用
// var car = Car("奔驰", "white", 2, 40);
// 有没有返回值取决于函数有没有return以及return后面有没有返回具体的值。
// console.log(car);// undefined
// 当把函数当成普通函数调用时，函数内的this指向的是window对象。
// console.log(_this);
// console.log(brand);//此时相当于在访问全局变量
// console.log(color);
```
:::

## this：
![img-011](/images/011.png)

::: details 点我查看题目
```js
/* 相关测试题 */

{
  /* 题1 */
  var a = 10;

  function foo() {
    console.log(this.a);
  }
  foo();
  /* 输出：10 */
}

{
  /* 题2 */

  ("use strict"); // 在严格模式下, 函数中指向window的this都为undefined
  var a = 10;

  function foo() {
    console.log("this1", this);
    console.log(window.a);
    console.log(this.a);
  }
  console.log(window.foo);
  console.log("this2", this);
  foo();
  /*
    输出：
    foo()
    this2 window
    this1 window
    10
    10
  */
}

{
  /* 题3 */

  /* let / const的全局变量不会添加为window的属性 */
  let a = 10;
  const b = 20;

  function foo() {
    console.log(this.a);
    console.log(this.b);
  }
  foo();
  console.log(window.a);
  /*
    输出：
    undefined
    undefined
    undefined
  */
}

{
  /* 题4 */

  var a = 1;

  function foo() {
    var a = 2;
    var inner = () => {
      console.log(a, this.a);
    };
    inner();
  }
  foo();
  /* 输出：2 1 */
}

{
  /* 题5 */

  function foo() {
    console.log(this.a);
  }
  var obj = {
    a: 1,
    foo,
  };
  var a = 2;
  obj.foo();
  /* 输出：1 */
}

{
  /* 题6 */

  function foo() {
    console.log(this.a);
  }
  var obj = {
    a: 1,
    foo,
  };
  var a = 2;
  var foo2 = obj.foo;
  var obj2 = {
    a: 3,
    foo2: obj.foo,
  };

  obj.foo();
  foo2();
  obj2.foo2();
  /*
    输出：
    1
    2
    3
  */
}

{
  /* 题7 */

  function foo() {
    console.log(this.a);
    return function () {
      console.log(this.a);
    };
  }
  var obj = {
    a: 1,
  };
  var a = 2;

  foo();
  foo.call(obj);
  foo().call(obj);
  /*
    输出：
    2
    1
    2
    1
  */
}

{
  /* 题8 */

  function foo() {
    console.log(this.a);
    return function () {
      console.log(this.a);
    };
  }
  var obj = {
    a: 1,
  };
  var a = 2;

  foo();
  foo.bind(obj);
  foo().bind(obj);
  /*
    输出：
    2
    2
  */
}

{
  /* 题9 */

  var obj = {
    name: "obj",
    foo1: () => {
      console.log(this.name);
    },
    foo2: function () {
      console.log(this.name);
      return () => {
        console.log(this.name);
      };
    },
  };
  var name = "window";
  obj.foo1();
  obj.foo2()();
  /* 
    输出：
    window
    obj
    obj
  /
}
```
:::

## new：
new一个对象做了4步：
   1. 堆内存里开辟空间
   2. this变量指向该内存
   3. 执行函数的代码
   4. 生成对象的实例并将空间的地址返回

::: details 点我查看手写new
```js
/* 
    1、创建一个新对象。
    2、让这个新的对象的原型指向该构造函数的原型对象。
    3、执行构造函数，并且将构造函数指向新的对象。
    4、拿到构造函数最后返回的结果，判断是否是对象或者函数，如果是的话，则直接返回。如果不是则返回新创建的对象。
*/
function createNew(con) {
  let result = Object.create(con.prototype)
  let args = [].slice.call(arguments, 1)
  let ret = con.apply(result, args) 
  return ((typeof ret === 'object' && ret !== null) || typeof ret === 'function') ? ret : result
}
function Person(name, age, score) {
  this.name = name
  this.age= age
  this.score = score
  return {name:this.name}
}

let rest = createNew(Person, 'dmc', 21, 100)
console.log(rest)
```
:::

## 原型对象：
显式原型对象：`prototype`

隐式原型对象：`__proto__`

原型链：
![img-012](/images/012.png)

::: details 点我查看代码
```js
function Star(name, age) {
  this.name = name;
  this.age = age;
  this.sing = function () {
    console.log(this.name + '会唱歌');
  }
}
 
// 每个对象从被创建开始就和 “另一个对象”上继承属性，“另一个对象”就是原型
// 由对象和原型组成的链就叫原型链
var ldh = new Star('刘德华', 3);
 
//每一个构造函数都有prototype属性，该属性指向一个对象
//实例化对象都会有一个属性__proto__，指向构造函数的原型对象prototype
console.log(Star.prototype);    //constructor: ƒ Star(name, age)
console.log(Star.prototype == ldh.__proto__);    //true
 
//Star的原型对象prototype的构造函数construor指向Star本身
console.log(Star.prototype.constructor == Star);   //true
 
//Star原型对象prototype.__proto__指向Object原型对象prototype
console.log(Star.prototype.__proto__ == Object.prototype);    //true
 
//Object原型对象prototype的构造函数construor指向Object构造函数
console.log(Object.prototype.constructor == Object);    //true
 
//Object原型对象prototype.__proto__指向空null
console.log(Object.prototype.__proto__);    //null
```
:::

## 改变函数内部this的指向：
```js
var o = {
    name:'andy'
}
function fn(a, b) {
    console.log(this);
    console.log(a + b);
}
```
1. call()
```js
fn.call(a, b, c); //Function原型对象上的一个方法
/* 
  功能：改变"fn"中的"this"指向。"nullish"为"window"，基本类型为包装对象，复杂类型为本身，并调用"fn"
  参数：a：参考的指向，"b、c、..."：调用"fn"时传递的实参
  返回值：调用"fn"时的返回值
*/
```
3. apply()
```js
fn.apply(a, [b, c]); //Function原型对象上的一个方法
/*
  功能：同"call"
  参数：a：参考的指向，第二个参数为数组，为其调用fn时传递的实参
  返回值：同"call"
*/
```
4. bind()
```js
fn.bind(a, b, c); //Function原型对象上的一个方法
/*
  功能：同"call"
  参数：a：参考的指向，"b、c、..."：调用"fn"时传递的实参，可传可不传
  返回值：为改变了"this"后的"fn"
*/
```

## 内置对象(JSON)：
- 轻量级的数据交换格式
```js
var data = {
  name: "芝麻糊",
  age: 18,
};

console.log(data.toString()); //[object Object]

console.log(JSON.stringify(data)); 
/* 
  输出：'{"name":"芝麻糊","age":18}'
  把"Object"或"Array"类型的数据转换成字符串
*/

var strData = JSON.stringify(data);
console.log(JSON.parse(strData)); 
/* 
  输出：{name: '芝麻糊', age: 18}
  把字JSON字符串转成"Object"或"Array"类型
*/
```
::: tip 提示
可以用来深拷贝但是值为非基本类型和非数组对象时不能使用
:::

## Math对象:
```js
var num = 3.14159;
var _num = -3.14159;

Math.PI; //圆周率，返回：3.141592653589793
Math.ceil(num); //向上取整，返回：4
Math.floor(num); //向下取整，返回：3
Math.trunc(num); //方法会将数字的小数部分去掉， 只保留整数部分，返回：3
Math.round(num); //四舍五入版 就近取整 注意 -3.5 结果是 -3，返回：3
Math.abs(_num); //绝对值，返回：3.14159
Math.max(num, _num); //求多个数中最大，返回：3.14159
Math.min(num, _num); //求多个数中最大最小值，返回：-3.14159
Math.random(); //获取范围在[0,1)内的随机值，返回：0.7008837314660161
Math.pow(num, _num); //幂运算，返回：0.02742584920973046
Math.sin(num); //正弦运算，返回：0.00000265358979335273
Math.sign(num); //判断一个数,正数(返回1)负数(返回-1) 0(返回0) NaN(返回NaN)，返回：1
Math.sqrt(num); //平方根，返回：1.7724531023414978
Math.cbrt(num); //立方根，返回：1.4645914751987923
Math.hypot(num); //求所有参数平方和的平方根(勾股定理)，返回：3.14159
```

## Date函数: 
- 实例化后才能使用
```js
var date = new Date();

date.getFullYear(); //年
date.getMonth() + 1; //月
date.getDate(); //日
date.getDay(); //星期
date.getHours(); //时
date.getMinutes(); //分
date.getSeconds(); //秒
date.getMilliseconds(); //毫秒

/* 1970年1月1日0点起到现在经过的毫秒数: */
date.getTime(); //1662518317897
date.valueOf(); //1662518317897
Date.now(); //1662518317897
+new Date(); //1662518317897

/* 本地格式化字符串: */
date.toLocaleTimeString()); //10:39:34
date.toLocaleDateString()); //2022/9/7
```

## 包装对象：
```js
new Number("100"); //Number {100}
new String(123); //String {'123'}
new Boolean(true); //Boolean {true}
```

## Number对象的静态方法:
```js
Number.parseInt("123"); //将字符串转换为对应的数值（和global的parseInt一致），返回：123
Number.isFinite(10 / 5); //用来检测传入的参数是否是一个有穷数，返回：true
Number.isNaN(NaN); //判断是否是NaN，返回：true
Number.isInteger(123); //判断是否是整数，返回：true

(3.14159).toFixed(2); //截取小数点后n位，返回：3.14
```

## Object对象的静态方法：
```js
var obj1 = { name: "芝麻糊" };
var obj2 = { age: "18" };

Object.assign(obj1, obj2);
/* 
  把后边所有对象拼接到obj1上
  返回：{name: '芝麻糊', age: '18'}
*/

Object.is(obj1, obj2);
/* 
  判断两个对象是否相等, 修复了NaN不等NaN的问题
  返回：false
*/

Object.freeze(obj1); //冻结原对象,返回原对象引用,对象变成了只读
obj1.name = "每天一碗";
console.log(obj1); //{name: '芝麻糊', age: '18'}

Object.seal(obj1); //封闭原对象,返回原对象引用,不能增删，但是能改查
delete obj1.name;
console.log(obj1); //{name: '芝麻糊', age: '18'}

Object.hasOwn(obj1, "name");
/* 
  只检测自有属性
  返回：true
*/

Object.entries(obj1)
```

## Objec对象原型对象上的方法：
```js
var obj = { name: "芝麻糊", age: 18 };

obj.hasOwnProperty("name"); //只检测自有属性，返回：true
Object.entries(obj); 
/* 
  分别用来获取键值对组成的迭代器对象
  返回：[['name', '芝麻糊'],['age', 18]] 
*/
Object.keys(obj); //所有的key组成的迭代器对象，返回：['name', 'age']
Object.values(obj); //所有的值组成的迭代器对象，返回：['芝麻糊', 18]
```

## 字符串对象：
`s.indexOf(s1, [index]);`
::: details 点我查看代码
```js
/* 
  功能：从前往后查找s1从index开始
  参数："s1":要查找的字符串，"index":从第几个开始查找
  返回值：返回对应的下标，没找到返回-1
*/

/* 示例 */
var str = "每天一碗芝麻糊";
console.log(str.indexOf("芝", 1)); //4
```
:::
`s.lastIndexOf(s1, [index]);`
::: details 点我查看代码
```js
/* 
  功能：从后往前查找s1从index开始
  参数："s1":要查找的字符串，"index":从第几个开始查找
  返回值：返回对应的下标，没找到返回-1
*/

/* 示例 */
var str = "每天一碗芝麻糊";
console.log(str.lastIndexOf("芝", 6)); //4
```
:::
`s.charAt(index);`
::: details 点我查看代码
```js
/* 
  功能：查找索引为idnex的元素
  参数："index":查找的下标
  返回值：查找到的字符串，没找到则返回""
*/

/* 示例 */
var str = "每天一碗芝麻糊";
console.log(str.charAt(2)); //一
```
:::
`s.charCodeAt(index);`
::: details 点我查看代码
```js
/* 
  功能：查找索引为idnex的元素返回值为ASCLL
  参数："index":查找的下标
  返回值：查找到对应字符串的ASCLL值
*/

/* 示例 */
var str = "每天一碗芝麻糊";
console.log(str.charCodeAt(2)); //19968
```
:::
`str[index];`
::: details 点我查看代码
```js
/* 
  功能：h5新增方法，等同于charAt(index)
  参数："index":查找的下标
  返回值：等同于charAt(index)
*/

/* 示例 */
var str = "每天一碗芝麻糊";
console.log(str[2]); //一
```
:::
`s.concat(s1, s2, sn);`
::: details 点我查看代码
```js
/*
  功能：拼接字符串
  参数：全部为需要拼接的字符串
  返回值：拼接后新的字符串
*/

/* 示例 */
var str = "每天一碗芝麻糊";
console.log(str.concat("阿巴", "阿巴")); //每天一碗芝麻糊阿巴阿巴
```
:::
`String.fromCharCode([code1, [coden]]);`
::: details 点我查看代码
```js
/*
  功能：ASCII码对应的字符组成的字符串
  参数：ASCII字符
  返回值：找到的字符串，没找到返回""
*/

/* 示例 */
console.log(String.fromCharCode(19968, 19969, 19970)); //一丁丂
```
:::
`s.trim();`
::: details 点我查看代码
```js
/*
  功能：去字符串的前后空格
  参数：无
  返回值：返回移除头尾空格的字符串
*/

/* 示例 */
var str = " 每天一碗芝麻糊 ";
console.log(str.trim()); //每天一碗芝麻糊
```
:::
`s.trimEnd();`
::: details 点我查看代码
```js
/*
  功能：去字符串的后空格
  参数：无
  返回值：返回移除尾空格的字符串
*/

/* 示例 */
var str = " 每天一碗芝麻糊 ";
console.log(str.trimEnd()); //"空格"每天一碗芝麻糊
```
:::
`s.trimStart();`
::: details 点我查看代码
```js
/*
  功能：去字符串的前空格
  参数：无
  返回值：返回移除首空格的字符串
*/

/* 示例 */
var str = " 每天一碗芝麻糊 ";
console.log(str.trimStart()); //每天一碗芝麻糊"空格"
```
:::
`s.endsWith(s1);`
::: details 点我查看代码
```js
/*
  功能：判断字符串末尾否包含某个字符
  参数：s1为需要判断的字符
  返回值：有则返回true，没有则返回false
*/

/* 示例 */
var str = "每天一碗芝麻糊";
console.log(str.endsWith("糊")); //true
```
:::
`s.startsWith(s1);`
::: details 点我查看代码
```js
/*
  功能：判断字符串开头否包含某个字符
  参数：s1为需要判断的字符
  返回值：有则返回true，没有则返回false
*/

/* 示例 */
var str = "每天一碗芝麻糊";
console.log(str.startsWith("每")); //true
```
:::
`s.padStart(ln, s1);`
::: details 点我查看代码
```js
/*
  功能：当字符串不够某个长度的时候，在前边补规定的字符
  参数：ln:判定的长度，s1:补规定的字符
  返回值：被补充后的字符串
*/

/* 示例 */
var str = "每天一碗芝麻糊";
console.log(str.padStart(10, "哈")); //哈哈哈每天一碗芝麻糊
```
:::
`s.padEnd(ln, s1);`
::: details 点我查看代码
```js
/*
  功能：当字符串不够某个长度的时候，在后边补规定的字符
  参数：ln:判定的长度，s1:补规定的字符
  返回值：被补充后的字符串
*/

/* 示例 */
var str = "每天一碗芝麻糊";
console.log(str.padEnd(10, "哈")); //每天一碗芝麻糊哈哈哈
```
:::
:small_blue_diamond:`s.replace(regexp||s1, s2);`
::: details 点我查看代码
```js
/*
  功能：找到regexp或s1替换成s2
  参数：regexp:正则表达式，s1:字符串，s2:字符串
  返回值：被补充后的字符串
*/

/* 示例 */
var str = "每天一碗芝麻糊";
console.log(str.replace("每", "今")); //今天一碗芝麻糊
console.log(str.replace(/^每/, "今")); //今天一碗芝麻糊
```
:::
`s.localeCompare(s1);`
::: details 点我查看代码
```js
/*
  功能：比大小
  参数：s1:用来比较的字符串
  返回值：实参大返回-1，实参小返回1，相同返回0
*/

/* 示例 */
console.log("a".localeCompare("b")); //-1
console.log("b".localeCompare("a")); //1
console.log("a".localeCompare("a")); //0
```
:::
:small_blue_diamond:`s.slice(start, [end]);`
::: details 点我查看代码
```js
/*
  功能：截取[start,end)
  参数：start:开始下标，end:结束下标
  返回值：截取后的字符串
*/

/* 示例 */
var str = "每天一碗芝麻糊";
console.log(str.slice(1, 3)); //天一
```
:::
:small_blue_diamond:`s.split(p, n);`
::: details 点我查看代码
```js
/*
  功能：以p为参照将其切割成n份
  参数：P:参照字符串,n:切割份数，切割所有份填-1
  返回值：切割后组成的数组
*/

/* 示例 */
var str = "abcabcabc";
console.log(str.split("b", 3)); //['a', 'ca', 'ca']
```
:::
`s.substr(start, [length]);`
::: details 点我查看代码
```js
/*
  功能：类似于slice，区别是不支持负数
  参数：start:从哪开始截取的下标(包含)，length:截取的长度
  返回值：截取后的字符串
*/

/* 示例 */
var str = "每天一碗芝麻糊";
console.log(str.substr(2, 3)); //一碗芝
```
:::
`s.toLowerCase();`
::: details 点我查看代码
```js
/*
  功能：将大写英文字符转换为小写
  参数：无
  返回值：小写字符串
*/

/* 示例 */
var str = "ABC";
console.log(str.toLowerCase()); //abc
```
:::
`s.toUpperCase();`
::: details 点我查看代码
```js
/*
  功能：将小写英文字符转换为大写
  参数：无
  返回值：大写字符串
*/

/* 示例 */
var str = "abc";
console.log(str.toUpperCase()); //ABC
```
:::
`s.valueOf();`
::: details 点我查看代码
```js
/*
  功能：返回原始值
  参数：无
  返回值：有PrimitiveValue就返回它的值；没有则返回对象本身
*/

/* 示例 */
var str = "每天一碗芝麻糊";
var obj = { name: "芝麻糊" };
console.log(str.valueOf()); //每天一碗芝麻糊
console.log(obj.valueOf()); //{name: '芝麻糊'}
```
:::
`n.toString(Base);`
::: details 点我查看代码
```js
/*
  功能：把n换为字符串，只能有效转换Number,Boolean类型
  参数：Base:进制数
  返回值：有PrimitiveValue就返回它的值；没有则返回对象本身
*/

/* 示例 */
var num = 123;
console.log(num.toString()); //"123"
```
:::

ES6中字符串的操作方法：

:small_blue_diamond:`s.includes(s1);`
::: details 点我查看代码
```js
/*
  功能：判断s中是否包含s1字符串
  参数：s:字符串,s1:字符串
  返回值：有则返回true，无则返回false
*/

/* 示例 */
var str = "每天一碗芝麻糊";
console.log(str.includes("一")); //true
```
:::
:small_blue_diamond:`s.endsWith(s1);`
::: details 点我查看代码
```js
/*
  功能：判断s中是否以s1结尾
  参数：s:字符串,s1:字符串
  返回值：是则返回true，不是则返回false
*/

/* 示例 */
var str = "每天一碗芝麻糊";
console.log(str.startsWith("糊")); //true
```
:::
`s.repeat(count);`
::: details 点我查看代码
```js
/*
  功能：将字符串s重复count次返回
  参数：s:字符串,count:重复次数
  返回值：重复count次后的字符串
*/

/* 示例 */
var str = "每天一碗芝麻糊";
console.log(str.repeat(3)); //每天一碗芝麻糊每天一碗芝麻糊每天一碗芝麻糊
```
:::

常见方法：

`s.match(regexp||str);`
::: details 点我查看代码
```js
/*
  功能：找到一个或多个与子串或正则表达式的匹配
  参数：正则表达式或字符串
  返回值：匹配到的信息组成的数组，没找到返回null
*/

/* 示例 */
var str = "每天一碗芝麻糊，每天一碗芝麻糊";
console.log(str.match("每")); //['每', index: 0, input: '每天一碗芝麻糊，每天一碗芝麻糊', groups: undefined]
```
:::
`s.search(regexp||str);`
::: details 点我查看代码
```js
/*
  功能：在字符串里查找正则或子串能匹配的第一个子串
  参数：正则表达式或字符串
  返回值：返回第一个匹配的下标，没找到返回-1
*/

/* 示例 */
var str = "每天一碗芝麻糊";
console.log(str.search("每")); //0
```
:::
`s.replace(regexp||substr,newStc);`
::: details 点我查看代码
```js
/*
  功能：替换一个或多个与子串或正则表达式匹配的子串
  参数：参数一：正则表达式或字符串，参数二：需要被替换的字符串
  返回值：替换后的字符串
*/

/* 示例 */
var str = "每天一碗芝麻糊";
console.log(str.replace("每", "今")); //今天一碗芝麻糊
```
:::


## 数组对象：
`Array.isArray(arr);`
::: details 点我查看代码
```js
/*
  功能：判断arr是否是一个数组
  参数：[1]为一个数组
  返回值：布尔值
*/

/* 示例 */
var arr = ["哈哈哈"];
console.log(Array.isArray(arr)); //true
```
:::
`Array.from(pArr);`
::: details 点我查看代码
```js
/*
  功能：将伪数组或可遍历对象转换为真数组
  参数：[1]伪数组
  返回值：将为数组转换后的真数组
*/

/* 示例 */
function fn() {
  console.log(arguments); //Arguments [callee: (...), Symbol(Symbol.iterator): ƒ]
  console.log(Array.from(arguments)); //[]
}

fn()
```
:::
`Array.of(v1, v2, v3);`
::: details 点我查看代码
```js
/*
  功能：将一系列值转为数组，解决了new Array()传一个数即长度的问题
  参数：[n]为需转成数组每项的数据
  返回值：一个转换后的伪数组
*/

/* 示例 */
console.log(Array.of("每天", "一碗", "芝麻糊")); //['每天', '一碗', '芝麻糊']
```
:::
`arr.includes(s1);`
::: details 点我查看代码
```js
/*
  功能：判断数组arr里是否包含s1，需匹配类型
  参数：[1]为一个数据
  返回值：布尔值
*/

/* 示例 */
var arr = ["每天", "一碗", "芝麻糊"];
console.log(arr.includes("每天")); //true
```
:::
`arr.at(index);`
::: details 点我查看代码
```js
/*
  功能：和arr[index]类似 但是可以倒着查找，最后一个为-1
  参数：[1]为一个数字或数字字符串
  返回值：返回对应下标的值，找不到时返回undefined
*/

/* 示例 */
var arr = ["每天", "一碗", "芝麻糊"];
console.log(arr.at(1)); //一碗
```
:::
:small_blue_diamond:`arr.push(s1, s2, sn);`
::: details 点我查看代码
```js
/*
  功能：和arr[index]类似 但是可以倒着查找，最后一个为-1
  参数：[1]为一个数字或数字字符串
  返回值：返回对应下标的值，找不到时返回undefined
*/

/* 示例 */
var arr = ["每天"];
console.log(arr.push("一碗", "芝麻糊")); //3
console.log(arr); //['每天', '一碗', '芝麻糊']
```
:::
:small_blue_diamond:`arr.unshift(s1, s2, sn);`
::: details 点我查看代码
```js
/*
  功能：改变原数组，在其前面依次添加其传递的参数(s1+s2+arr)
  参数：[n]为其添加的数据
  返回值：为数组长度
*/

/* 示例 */
var arr = ["每天"];
console.log(arr.unshift("一碗", "芝麻糊")); //3
console.log(arr); //['一碗', '芝麻糊', '每天']
```
:::
:small_blue_diamond:`arr.pop();`
::: details 点我查看代码
```js
/*
  功能：改变原数组，删除其最后的一个值
  参数：[0]无论有啥参数都是一个功能
  返回值：返回被删除的这个值
*/

/* 示例 */
var arr = ["每天", "一碗", "芝麻糊"];
console.log(arr.pop()); //芝麻糊
console.log(arr); //['每天', '一碗']
```
:::
:small_blue_diamond:`arr.shift();`
::: details 点我查看代码
```js
/*
  功能：改变原数组，删除其最前的一个值
  参数：[0]无论有啥参数都是一个功能
  返回值：返回被删除的这个值
*/

/* 示例 */
var arr = ["每天", "一碗", "芝麻糊"];
console.log(arr.shift()); //每天
console.log(arr); //['一碗', '芝麻糊']
```
:::
:small_blue_diamond:`arr.reverse();`
::: details 点我查看代码
```js
/*
  功能：改变原数组，对其进行翻转
  参数：[0]无论有啥参数都是一个功能
  返回值：返回原数组(被翻转)
*/

/* 示例 */
var arr = ["每天", "一碗", "芝麻糊"];
console.log(arr.reverse()); //['芝麻糊', '一碗', '每天']
```
:::
:small_blue_diamond:`arr.sort((a,b)=>{return a-b});`
::: details 点我查看代码
```js
/*
  功能：改变原数组，对其进行排序
  参数：[1]可以是一个回调，当排序数的位数大于两位时就只会对比其第一位，此时就可以传递一个回调，接收b：当前的值，a：下一个值，然后对其遍历，return a-b(升序)/b-a(降序)，当return为正数时保留b，相反保留a
  返回值：返回原数组(被排序)
*/

/* 示例 */
var arr = [2, 1, 4, 3, 5];
arr.sort((a, b) => {
  return a - b;
});
console.log(arr); //[1, 2, 3, 4, 5]
```
:::
`arr.indexOf(s1, [index]);`
::: details 点我查看代码
```js
/*
  功能：通过值或连同下标从前往后查找想要的值
  参数：[2]s1：寻找arr中是否有s1，index：从第几个开始查找，可负数
  返回值：返回其第一个找到值的下标，没找到返回-1
*/

/* 示例 */
var arr = ["每天", "一碗", "芝麻糊"];
console.log(arr.indexOf("一碗")); //1
```
:::
`arr.lastIndexOf(s1, [index]);`
::: details 点我查看代码
```js
/*
  功能：通过值或连同下标从后往前查找想要的值
  参数：同indexOf
  返回值：返回其从后往前第一个找到值的下标，没找到返回-1
*/

/* 示例 */
var arr = ["每天", "一碗", "芝麻糊"];
console.log(arr.indexOf("一碗")); //1
```
:::
:small_blue_diamond:`arr.join("-");`
::: details 点我查看代码
```js
/*
  功能：不变原数组，将数组转换成一个去掉"[ ]"的字符串
  参数：[1]为每个值中间的连接符，且会被toString以下，默认为逗号
  返回值：为一个被转换后的字符串
*/

/* 示例 */
var arr = ["每天", "一碗", "芝麻糊"];
console.log(arr.join("-")); //每天-一碗-芝麻糊
```
:::
:small_blue_diamond:`arr.concat([4,4,4],[5,5,5]);`
::: details 点我查看代码
```js
/*
  功能：不变原数组，将其参数合并到arr上
  参数：[n]为数据，每一个数据都会合并到arr上，数组是展开后合并
  返回值：为被合并后的数组
*/

/* 示例 */
var arr = ["每天", "一碗", "芝麻糊"];
console.log(arr.concat([4,4,4],[5,5,5])); //['每天', '一碗', '芝麻糊', 4, 4, 4, 5, 5, 5]
```
:::
:small_blue_diamond:`arr.slice(index,[index2]);`
::: details 点我查看代码
```js
/*
  功能：不变原数组，切片[index- index2)的值(包头不包尾)
  参数：[2]开始的下标和结束的下标
  返回值：为被切片的数组，下标不对应时返回空数组
*/

/* 示例 */
var arr = [1, 2, 3, 4, 5];
console.log(arr.slice(2, 4)); //[3, 4]
```
:::
:small_blue_diamond:`arr.splice(index, [num], [v1,v2 ...]);`
::: details 点我查看代码
```js
/*
  功能：
  1：改变原数组，从index删除num个值(含自己)，并添加v1,v2...
  2：可浅拷贝
  参数：[3]index：下标(不规范时删除所有)，num：个数，之后是添加的数据
  返回值：被删除的值组成的数组，下标不规范时返回全部
*/

/* 示例 */
var arr = [1, 1, 2, 2, 3, 3];
console.log(arr.splice(2, 2, "*")); //[2, 2]
console.log(arr); //[1, 1, '*', 3, 3]
```
:::
`arr.fill(str,[indexS], [indexE]);`
::: details 点我查看代码
```js
/*
  功能：改变原数组，将str填充到arr中, 从indexS开始indexE结束(包头不包尾)
  参数：[3]str：填充的数据，indexS：开始的下标，indexE：结束的下标
  返回值：原数组(填充后)
*/

/* 示例 */
var arr = [1, 1, 2, 2, 3, 3];
console.log(arr.fill("*", 1, 3)); //[1, '*', '*', 2, 3, 3]
console.log(arr); //[1, '*', '*', 2, 3, 3]
```
:::
`arr.flat(Infinity);`
::: details 点我查看代码
```js
/*
  功能：不变原数组，降维打击
  参数：[1]多少维度被打击，一般写一各Infinity
  返回值：被打击后的数组
*/

/* 示例 */
var arr = [1, [2, [3]]];
console.log(arr.flat(Infinity)); //[1, 2, 3]
```
:::
:small_blue_diamond:`arr.forEach((item, index, arr) => {});`
::: details 点我查看代码
```js
/*
  功能：对arr进行遍历
  参数：[1]一个回调函数，回调接收参数：item：arr每项，index：arr每项下标，arr：被遍历数组
  返回值：undefined
*/

/* 示例 */
var arr = [1, 2, 3, 4, 5];
arr.forEach((item, index, arr) => {
  console.log(item); //1 2 3 4 5
  console.log(index); //0 1 2 3 4
  console.log(arr); //[1, 2, 3, 4, 5]
});
```
:::
:small_blue_diamond:`arr.map((item, index, arr) => {return item * 2});`
::: details 点我查看代码
```js
/*
  功能：没变原数组，对数组的每一项进行操作，映射出一个新值
  参数：同forEach
  返回值：为对每一项操作后映射的新数组
*/

/* 示例 */
var arr = [1, 2, 3, 4, 5];
var _arr = arr.map((item, index, arr) => {
  return item;
});

console.log(_arr === arr); //false
```
:::
:small_blue_diamond:`arr.some((item, index, arr) => {return 判断});`
::: details 点我查看代码
```js
/*
  功能：遍历数组判断每一项，一真即真
  参数：同forEach
  返回值：布尔值，return后的判断只要为真就返回true，否则false
*/

/* 示例 */
var arr = [1, 2, 3, 4, 5];
var _arr = arr.some((item, index, arr) => {
  return item === 3;
});

console.log(_arr); //true
```
:::
:small_blue_diamond:`arr.every((item, index, arr) => {return 判断});`
::: details 点我查看代码
```js
/*
  功能：遍历数组判断每一项，一假即假
  参数：同forEach
  返回值：布尔值，return后的判断全部为真就返回true，否则false
*/

/* 示例 */
var arr = [1, 1, 1, 2, 1];
var _arr = arr.every((item, index, arr) => {
  return item !== 1;
});

console.log(_arr); //false
```
:::
:small_blue_diamond:`arr.filter((item, index, arr) => { return 判断 });`
::: details 点我查看代码
```js
/*
  功能：不变原数组，遍历数组对每项进行判断过滤，当return后为true则保留该项，否则删除
  参数：同forEach
  返回值：为所有符合条件被筛选出来的值组成的数组
*/

/* 示例 */
var arr = [1, 1, 1, 2, 1];
var _arr = arr.filter((item, index, arr) => {
  return item !== 1;
});

console.log(_arr); //[2]
```
:::
:small_blue_diamond:`arr.reduce((参数1,参数2,参数3,参数4) => { return 表达式 },参数p);`
::: details 点我查看代码
```js
/*
    功能：万物皆可reduce，一般常用于累计
    参数：
      参数1：上一次回调函数的返回值（第一次是初始值）prev
      参数2：本次的数组元素item
      参数3：本次数组元素的下标index
      参数4：原数组的引用
      参数p：累加的初始值（如果没有，默认是数组的第一个值）
    返回值：返回累加后的值（最后一次回调函数返回的值）
*/

/* 示例 */
var arr = [1, 1, 1, 2, 1];
var _arr = arr.reduce((A, B, C, D, E) => {
  console.log(A);
  console.log(B);
  console.log(C);
  console.log(D);
  console.log(E);
}, []);
```
:::

ES6的方法：

`arr.find((item, index, arr) => { return 判断 });`
::: details 点我查看代码
```js
/*
  功能：遍历数组根据判断对其值进行查找，找到第一个后停止
  参数：同forEach
  返回值：第一个满足条件的item项
*/

/* 示例 */
var arr = [1, 1, 1, 2, 1];
var _arr = arr.find((item, index) => {
  return item === 2;
}, []);

console.log(_arr); //2
```
:::
`arr.findIndex((item, index, arr) => { return 判断 });`
::: details 点我查看代码
```js
/*
  功能：同find
  参数：同forEach
  返回值：第一个满足条件的item的下标
*/

/* 示例 */
var arr = [1, 1, 1, 2, 1];
var _arr = arr.findIndex((item, index) => {
  return item === 2;
}, []);

console.log(_arr); //3
```
:::

## 正则表达式：
- 匹配字符串

创建方式：
```js
var rg = /123/;
```
```js
var regexp = new RegExp(/123/);
```

测试正则表达式:
```js
rg.test(str) //匹配成功返回true，不成功返回false
```
```js
rg.exec(str) //匹配成功结果以数组形式返回；匹配不成功返回null
```

正则表达式中的特殊字符:
| 符号    |                                       含义                                        |
| ------- | :-------------------------------------------------------------------------------: |
| `^`     |                          表示匹配行首的文本（以谁开始）                           |
| `$`     |                          表示匹配行尾的文本（以谁结束）                           |
| `[]`    |                      方括号中的字符只要匹配其中一个就可以了                       |
| `*`     |                                  重复0次或更多次                                  |
| `+`     |                                  重复1次或更多次                                  |
| `?`     |                                   重复0次或1次                                    |
| `{n}`   |                                      重复n次                                      |
| `{n,}`  |                                  重复n次或更多次                                  |
| `{n,m}` |                                    重复n到m次                                     |
| `\d`    |                       匹配0-9之间的任一数字，相当于`[0-9]`                        |
| `\D`    |                       匹配所有0-9以外的字符，相当于`[^0-9]`                       |
| `\w`    |                匹配任意的字母、数字和下划线，相当于`[A-Za-z0-9_]`                 |
| `\W`    |             除所有字母、数字、下划线以外的字符，相当于`[^A-ZA-Z0-9_]`             |
| `\s`    |          匹配空格（包括换行符、制表符、空格符等），相当于`[\t\r\n\v\f]`           |
| `\S`    |                      匹配非空格的字符，相当于`[^\t\r\n\v\f]`                      |
| `.`     | 匹配除`\n` `\r`以外的任意字符，如果需要只匹配"."，需要在正则里用转义字符`\.`替代  |
| `\|`    |                               满足两个条件其中一个                                |
| `()`    |                   表示优先级，还有分组功能，`对象.groups.属性`                    |
| `i`     |                             执行对大小写不敏感的匹配                              |
| `g`     |              执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）               |
| `m`     | 执行多行匹配，字符串中有`\n`，一般和`^`或`$`配合使用，多行匹配时还要加上`g`修饰符 |

## DOM：
获取元素：
```js
document.getElementById('id') //返回对象
document.getElementsByTagName('标签名') //返回伪数组
document.getElementsByClassName('类名') //返回伪数组
document.querySelector('选择器') //返回对象
document.querySelectorAll("选择器") //返回伪数组
document.body //获取body对象
document.documentElement //获取html对象
```

事件三要素：
1. 事件源
2. 事件类型
3. 事件处理函数

事件类型：
```js
document.onclick = function (e) {
  console.log(e); //事件对象
};

/* 
  document:事件源
  onclick:事件类型(点击事件)
  function(e){}:事件处理函数
*/
```

![img-013](/images/013.png)
`onmouseenter // 进入盒子的时候执行一次`

`onmouseleave // 离开盒子的时候执行一次`

设置元素内容：

`oBox.innerHTML`

`oBox.innerText`
::: details 点我查看题目
```js
const oBox = document.querySelector(".box");
document.onclick = function (e) {
  oBox.innerHTML = `<span>芝麻糊</span>`; //在box元素里面插入span元素
  oBox.innerText = "哈哈哈"; //在box元素里面插入文本
};
```
:::

设置元素属性：
`元素对象.属性名 = 值`
```js
const oBox = document.querySelector(".box");
oBox.name = "芝麻糊";
```

## 属性的增删改查：

### 查找属性：
- H4：

   1. `元素对象.属性名`
   ```html
   <div class="box" id="box"></div>
   <script>
     const oBox = document.querySelector(".box");
     console.dir(oBox.id); //box
   </script>
   ```
   
   2. `元素对象.getAttribute(属性名)`
   ```html
   <!-- 自定义属性只能通过该方法 -->
   <div class="box" id="box" huxitai="芝麻糊"></div>
   <script>
     const oBox = document.querySelector(".box");
     console.dir(oBox.huxitai); //undefined
     console.dir(oBox.getAttribute("huxitai")); //芝麻糊
   </script>
   ```

- H5：

   1. `元素对象.dataset.属性名` 
   
   2. `元素对象.getAttribute('data-属性名')`
   ```html
   <div class="box" id="box" data-user="johndoe">
     John Doe
   </div>
   <script>
     const oBox = document.querySelector(".box");
     console.dir(oBox.dataset); //{user: "johndoe"}，ie11+
     console.dir(oBox.getAttribute("data-user")); //johndoe
   </script>
   ```


### 增改属性：
   1. 元素对象.属性名 = 属性值
   ```js
   const oBox = document.querySelector(".box");
   oBox.id = "user";
   console.dir(oBox.id); //user
   ```
   2. 元素对象.setAttribute(属性名, 属性值) # 自定义属性只能通过该方法
   ```html
   <div class="box" id="box" data-user="johndoe">John Doe</div>
   <script>
     /* 自定义属性只能通过该方法 */
     const oBox = document.querySelector(".box");
     oBox.setAttribute("data-user", "huxitai");
     console.log(oBox.getAttribute("data-user")); //huxitai
   </script>
   ```
### 删除属性：
`元素对象.removeAttribute(属性名)`
```html
<div class="box" id="box" data-user="johndoe">John Doe</div>
<script>
  const oBox = document.querySelector(".box");
  oBox.removeAttribute("data-user");
  console.log(oBox.getAttribute("data-user")); //null
</script>
```
### 元素.classList
- DOMTokenList对象，记录着所有的class
```html
<div class="box box2 box3">John Doe</div>
<script>
  const oBox = document.querySelector(".box");
  console.log(oBox.classList); //['box', 'box2', 'box3', value: 'box box2 box3']
</script>
```
```js
oBox.classList.add("box4") //添加一个类名
```
```js
oBox.classList.remove("box4") //删除一个类名
```
```js
oBox.classList.contains("box4") //判断是否包含某个类型，返回布尔值
```
```js
//开关：如果当前拥有某个类型，则删除它，如果没有某个类名则添加
oBox.classList.toggle("box4") 
```
### 元素.dataset
- DOMStringMap对象，记录着所有属性，可以对自定义属性增删改查

### HTMLConllection 对象
- 是动态的，当伪数组发生变化的时候，集合的内容也会随之改变

### NodeList 对象
- 是静态的，无论将来获取的元素发生怎样的改变，都不会影响集合的内容

## 节点操作：
### 节点属性：
元素节点：
```
nodeType：1 nodeName:"DIV"  nodeValue:null
```

属性节点：
```
nodeType：2 nodeName:"id"  nodeValue:"d1"
```

文本节点：
```
nodeType：3 nodeName:"#text"  nodeValue:文本内容
```

注释节点：
```
nodeType：8 nodeName:"#comment"  nodeValue:注释内容
```
### 查找：
```js
const oBox = document.querySelector(".box");
oBox.parentNode //查找父节点
oBox.childNodes //返回所有子节点, NodeList对象
oBox.children //返回所有子元素节点，HTMLCollection对象
oBox.firstChild //返回第一个子节点
oBox.lastChild //返回最后一个子节点
oBox.firstElementChild //返回第一个元素子节点
oBox.lastElementChild //返回最后一个元素子节点

oBox.nextSibling //下一个兄弟节点
oBox.previousSibling //上一个兄弟节点
oBox.nextElementSibling  //下一个兄弟元素节点
oBox.previousElementSibling //上一个兄弟元素节点
```

### 增改：

`document.createElement("节点名")`

`父节点.appendChild(子节点)`

`父节点.insertBefore(要添加的节点，参照节点)`

`元素.cloneNode()`

`元素.cloneNode(true)`

::: details 点我查看代码
```html
<div class="box">
  <h1></h1>
  <h2></h2>
</div>
<script>
  var oBox = document.querySelector(".box");

  var oH2 = document.querySelector("h2");

  var oSpan = document.createElement("span"); //创建节点

  oBox.appendChild(oSpan); //添加节点，将节点添加到父节点下最后一个

  oBox.insertBefore(oSpan, oH2); //添加节点，将节点添加到参照节点前一个

  console.log(oBox.cloneNode()); //浅拷贝，返回复制的节点

  console.log(oBox.cloneNode(true)) //深拷贝，返回复制该节点以及下面所有节点
</script>
```
::: 

### 删除：
`父节点.removeChild(子节点)`
```html
<div class="box">
  <h1></h1>
  <h2></h2>
</div>
<script>
  var oBox = document.querySelector(".box");
  var oH2 = document.querySelector("h2");
  console.log(oBox.removeChild(oH2)); //h2元素
</script>
```


## 创建元素的三种方法：
   1. `document.write("<h1>芝麻糊</h1>")` # 这种方式创建会导致页面全部重绘，效率最低
   2. `元素.innerHTML = "<h1>芝麻糊</h1>"` # 会导致页面部分重绘，效率较高
   3. `document.body.appendChild(元素)` # 效率比innerHTML略低，但结构清晰

网页加载的几个步骤： 
1. Dom树，加载css文件，结合DOM树和CSSOM树形成Render Tree(渲染树)
2. 布局，就是把哪个盒子和标签该显示在哪个地方进行测量和计算。
3. 绘制，将布局好的盒子绘制到浏览器的页面上。

## 事件高级：
### 注册事件：

1. `元素.onclick = function(){}`
- 基本事件模型，唯一性

2. `元素.addEventListener("事件类型",function(){}, [options||useCapture])` 
- DOM事件模型，可多设，先注册先执行

>`options`:一个对象，它指定有关事件侦听器的特征
>
>>`capture: Boolean`
>>
>>`once: Boolean`
>>
>>`passive: Boolean`
>>
>>`signal: Boolean`
>
>`useCapture`:一个布尔值，指示此类型的事件是否会在被分派到DOM 树中它下面的任何事件listener 之前被分派到已注册对象

3. `元素.attachEvent("on+type", function(){})` 
- IE事件模型，可多设，先注册后执行

1. 网景事件模型：XXX

### 删除事件：

`node.onclick = null;` # 传统方法

`node.removeEventListener(事件类型, 事件处理函数);` #  删除IE9+事件监听

`node.detachEvent('on'+事件类型, 事件处理函数);` # 删除IE678事件监听

### DOM事件流：
1. [事件捕获](https://blog.csdn.net/bxz0729/article/details/110001687)
1. [事件冒泡](https://baike.baidu.com/item/%E4%BA%8B%E4%BB%B6%E5%86%92%E6%B3%A1/4211429?fr=aladdin)
1. [W3C事件流](https://www.likecs.com/show-306398395.html)

### 事件对象(event)：

`event` #  IE9+事件对象

`window.event` #  IE678事件对象

![img-014](/images/014.png)

`return false` # 传统方法和IE678，阻止默认行为

`type = "selectstart"` # 阻止用户选中文本

`type = "contextmenu"` #  禁用右键菜单

### 事件委托：
- 把本该给某个元素绑定的事件，利用事件冒泡，给它的父元素绑定

好处：
1. 减少元素绑定事件的次数，提高效率
2. 可以对未来增加的兄弟元素生效，不必单独为兄弟元素绑定事件

### 鼠标事件：
![img-015](/images/015.png)

`e.offsetX` # 鼠标相对于自身元素的水平距离（相对于自身元素的左上角）

`e.offsetY` # 鼠标相对于自身元素的垂直距离

### 拖拽效果：

`position` # 位置设置为：盒子起始位置+拖拽差

`transform` # 位置设置为：拖拽差

::: details 点我查看方法一
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style type="text/css">
			body {
				margin: 0;
			}

			#box {
				position: absolute;
				width: 100px;
				height: 100px;
				background-color: #FF0000;
			}
		</style>
	</head>
	<body>
		<div id="box">

		</div>

		<script type="text/javascript">
			var box = document.querySelector("#box");
			box.onmousedown = function(e) {
				// 按下的位置距盒子左上角的坐标
				// offsetX和offsetY有局限性
				// 1、当盒子里还有子盒子的时候，offsetX和offsetY是以子盒子作为参照
				// 2、不同的浏览器上offsetX代表的值不一样。chrome上指的是边框的内边，ie上是边框的外边。
				var deltaX = e.offsetX;
				var deltaY = e.offsetY;
				document.onmousemove = function(e) {
					// 拖动的点的坐标
					var moveX = e.pageX;
					var moveY = e.pageY;
					
					// 新的位置的盒子的left和top的值
					var left = moveX - deltaX;
					var top = moveY - deltaY;

					// 给盒子设置新位置的left和top
					box.style.left = left + "px";
					box.style.top = top + "px";
				}

				document.onmouseup = function(e) {
					document.onmousemove = document.onmouseup = null;
				}
			}
		</script>
	</body>
</html>
```
:::
::: details 点我查看方法二
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style type="text/css">
			body {
				margin: 0;
			}

			#box {
				position: absolute;
				width: 100px;
				height: 100px;
				background-color: #FF0000;
			}
		</style>
	</head>
	<body>
		<div id="box">

		</div>

		<script type="text/javascript">
			var box = document.querySelector("#box");
			box.onmousedown = function(e) {
				// 按下的位置距盒子左上角的坐标
				var pageX = e.pageX;
				var pageY = e.pageY;
				
				// 初始位置下盒子offsetLeft和offsetTop的值
				var box_left = box.offsetLeft;
				var box_top = box.offsetTop;
				// 鼠标按下的位置距离盒子左边框和上边框的距离
				var deltaX = pageX - box_left;
				var deltaY = pageY - box_top;
				document.onmousemove = function(e) {
					// 拖动的新的位置的坐标
					var moveX = e.pageX;
					var moveY = e.pageY;
					//新的位置下盒子左边和上边应该距离body左边框和上边框的距离 
					var left = moveX - deltaX;
					var top = moveY - deltaY;
					// 设置盒子新的位置 
					box.style.left = left + "px";
					box.style.top = top + "px";
				}

				document.onmouseup = function(e) {
					document.onmousemove = document.onmouseup = null;
				}
			}
		</script>
	</body>
</html>
```
:::
::: details 点我查看方法一
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style type="text/css">
			body {
				margin: 0;
			}

			#box {
				position: absolute;
				width: 100px;
				height: 100px;
				background-color: #FF0000;
			}
		</style>
	</head>
	<body>
		<div id="box">

		</div>

		<script type="text/javascript">
			var box = document.querySelector("#box");
			box.onmousedown = function(e) {
				// 按下的位置距盒子左上角的坐标
				var pageX = e.pageX;
				var pageY = e.pageY;
				// 盒子的初始位置
				var box_left = box.offsetLeft;
				var box_top = box.offsetTop;
				document.onmousemove = function(e) {
					// 鼠标移动到新的位置和初始位置的delta值
					var deltaX = e.pageX - pageX;
					var deltaY = e.pageY - pageY;
					
					// 根据上面的值设置的盒子新的位置
					var left = box_left + deltaX;
					var top = box_top + deltaY;
					// 给盒子设置left和top以改变它的位置
					box.style.left = left + "px";
					box.style.top = top + "px";
				}

				document.onmouseup = function(e) {
					document.onmousemove = document.onmouseup = null;
				}
			}
		</script>
	</body>
</html>
```
:::

### 键盘事件：

`keydown` # 键盘按下

`keyup` # 键盘抬起

`keypress` # 键盘按下（不识别功能键，比如shift、ctrl、Tab等）


## BOM：

### 窗口加载事件：
`window.onload = function(){};` # 第一种，加载全部

`document.addEventListener("DOMContentLoaded", function () {});` # 第二种，加载部分

### 窗口大小事件：
`window.onresize = function(){};` # 窗口滚动执行

`window.onscroll = function(){};` # 鼠标滚动事件

`window.open(url, 方式, 尺寸);` # 跳转到url网页，返回值是新的页面，无法>回退

`window.colce();` # 关掉某个页面


### location对象：

![img-016](/images/016.png)

### location对象的方法：

![img-017](/images/017.png)

### userAgent对象：
- 用户代理，向服务端表明客户端的身份信息

`navigator.userAgent` # 身份信息

`navigator.appName` # Netscape

`navigator.appVersion` # 身份信息


### history对象：
![img-018](/images/018.png)

### screen对象：

`screen.width` # 获得屏幕宽度

`screen.height` # 获得屏幕高度

## 定时器：
`setTimeout(回调函数, [间隔的毫秒数], [回调函数传参]);`
```js
/* 定时器，执行一次，返回值为1 */
var id = window.setTimeout((val) => {
  console.log(val); //芝麻糊
}, 1000, "芝麻糊");
```

`clearTimeout(id)`
```js
var id = window.setTimeout((val) => {
  window.clearTimeout(id)
}, 1000);
```

`setInterval(回调函数, [间隔的毫秒数], [回调函数传参]);`
```js
/* 定时器，一直执行，返回值为1 */
var id = window.setInterval((val) => {
  console.log(val); //芝麻糊
}, 1000, "芝麻糊");
```

`clearInterval(id)`
```js
var id = window.setInterval((val) => {
  window.clearInterval(id)
}, 1000);
```

## 同步异步：

![img-019](/images/019.png)

## 元素可视区 client 系列：
- 只读

`node.clientTop` # 上边框的宽度

`node.clientLeft` # 左边框的宽度

`node.clientWidth` # 内容区宽度+左右内边距

`node.clientHeight` # 内容区高度+上下内边距

## 元素偏移量offset系列：
- 只读

`node.offsetTop` # 盒子距离带有定位父元素的上边框的

`node.offsetLeft` # 盒子距离带有定位父元素的左边框

`node.offsetWidth` # 包括内容区/左右内边距、边框

`node.offsetHeight` # 包括内容区/上下内边距、边框

`offsetParent` # 返回带有定位的父元素，没有返回body


## 元素滚动scroll系列：

`scrollTop` # 返回被卷去的上侧距离，可读可写

`scrollLeft` # 返回被卷去的左侧距离，可读可写

`scrollWidth` # 返回自身实际宽度，不包含边框，可读

`scrollHeight` # 返回自身实际高度，不包含边框，可读

## 视口宽度：

`window.innerWidth`

`window.innerHeight`

`document.documentElement.clientWidth`

`document.documentElement.clientHeight`

## 滚动条：
公式：
1. `滑动块的高度 = 屏幕的高度 / 内容的高度 * 滑动槽的高度`
2. `内容的滚动距离 = 滚动条的滚动距离 / (滑动块的高度 / 滑动槽的高度)`

滚动事件：
1. `node.mousewheel` # 通过`e.wheelDelta`获得`↑120`/`↓-120`
2. `node.DOMMouseScroll` # 通过`e.detail`获得`↑-3`/`↓3`，只能通过`addEventListener`注册

::: details 点我查看自定义滚动条案例
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style type="text/css">
			body,
			html {
				margin: 0px;
				height: 100%;
				overflow: hidden;
			}

			.wrap {
				height: 100%;
				position: relative;
			}

			.scrollIn {
				height: 100%;
				width: 17px;
				right: 0px;
				position: absolute;
				background-color: #67CDCC;
			}

			.scrollBar {
				height: 100px;
				width: 15px;
				position: absolute;
				margin-left: 1px;
				background-color: red;
				left: 0px;
				top: 0px;
			}

			.content {
				width: calc(100%-17px);
				position: absolute;
				font-size: 50px;
			}
		</style>
	</head>
	<body>
		<div class="wrap">
			<div class="content"></div>
			<div class="scrollIn">
				<div class="scrollBar"></div>
			</div>
		</div>

		<script type="text/javascript">
			var scrollBar = document.querySelector(".scrollBar");
			var scrollIar = document.querySelector("scrollIn");
			var content = document.querySelector(".content");

			//实现滚动条的滑动
			scrollBar.onmousedown = function(e) {
				e = e || window.event;
				var deltaY = e.offsetY;
				document.onmousemove = function(e) {
					e = e || window.event;
					var move = e.pageY;
					var top = move - deltaY;
					var maxHeight = innerHeight - scrollBar.offsetHeight;
					top = top < 0 ? 0 : top > maxHeight ? maxHeight : top;
					scrollBar.style.top = top + "px";
					//滑动块的高度 / 滑动槽的高度 = 滚动条的滚动距离 / 内容的滚动距离
					var contentSlipDistance = top / (scrollBar.offsetHeight / window.innerHeight);
					content.style.top = -contentSlipDistance + "px"
					e.preventDefault();
				}
				document.onmouseup = function() {
					document.onmousemove = document.onmouseup = null;
				}
			}
			//给content添加内容
			var str = ""
			for (i = 1; i <= 200; i++) {
				str += i + "<br />";
			}
			content.innerHTML = str;
			//滑动块的高度 / 滑动槽的高度 = 屏幕的高度 / 内容的高度
			var pulleyHeight = parseInt(window.innerHeight / content.offsetHeight * window.innerHeight);
			scrollBar.style.height = pulleyHeight + "px";

			//添加滑轮事件
			function fn(e) {
				e = e || window.event;
				var delta;
				if (e.wheelDelta) {
					delta = e.wheelDelta > 0 ? -20 : 20;
				} else if (e.detail) {
					delta = e.detail > 0 ? 20 : -20;
				}
				delta = e.wheelDelta > 0 ? -20 : 20;
				var top1 = scrollBar.offsetTop + delta;
				var maxHeight = innerHeight - scrollBar.offsetHeight;
				top1 = top1 < 0 ? 0 : top1 > maxHeight ? maxHeight : top1;
				scrollBar.style.top = top1 + "px"
				var contentSlipDistance = top1 / (scrollBar.offsetHeight / window.innerHeight);
				content.style.top = -contentSlipDistance + "px"
			}


			document.addEventListener("mousewheel", fn);
			document.addEventListener("DOMMouseScroll", fn);
		</script>
	</body>
</html>
```
:::
## 兼容性：

`e = e || window.event;` # 点击事件兼容性

`box.setCapture && box.setCapture();` # 设置拖拽兼容性

## 闭包：
作用：可以扩大局部变量的作用范围，让外部变量访问或修改，还可以自定义模块

闭包产生的条件是：
   1. 函数嵌套
   2. 内部函数引用外部函数的局部变量
   3. 外部函数被调用，内部函数也要被调用或者引用

闭包的生命周期：
   1. 产生: 在嵌套内部函数定义完时就产生了(不是在调用)
   2. 死亡: 在嵌套的内部函数成为垃圾对象时 `f = null;`

缺点：
   1. 内存泄漏：内存无法释放
   2. 内存溢出：内存被撑满

## 终极原型链：

![img-020](/images/020.png)

## 模拟多线程(Worker)：
- 构造函数, 加载分线程执行的js文件this指向DedicatedWorkerGlobalScope对象

`Worker.prototype.onmessage` # 用于接收另一个线程的回调函数

`Worker.prototype.postMessage` # 向另一个线程发送消息

## 深浅拷贝：

**浅拷贝** # 对象不相等，值相等

**深拷贝** # 对象不相等，里面值的地址也不相等

## 公有、私有、静态、特权：

**公有属性和公有方法** # 设置给实例化对象的属性和方法

**私有属性和私有方法** # 声明在构造函数中的变量或函数

**静态属性和方法** # 构造函数的属性和方法

**特权方法** # 在构造函数里定义的方法

## 轮询机制：

浏览器先执行同步代码，在执行异步代码，在执行同步代码时，异步代码会被放到浏览器的管理模块进行管理。当异步代码需要执行时，会被回调函数放到任务队列里面排队执行，当同步代码执行完后，主线程会在任务队列中轮询，按顺序拿到回调函数执行

## 节流、防抖：
- 都是为了限制函数的执行频次，以优化函数触发频率过高导致的响应速度跟不上触发频率，出现延迟，假死或卡顿的现象

### 节流
- 当高频的触发某个事件时，保证在n秒内执行一次

::: details 点我查看代码
```js
//1:定义一个高频触发事件和事件处理函数
//2:封装一个节流函数throttle,传一个事件处理函数f和间隔时间delay
//3:写一个返回函数:
	//判断时间是否小于一秒,小于则return
	//大于的话改变this指向并调用
	//更改lastTime
document.addEventListener("click", throttle(fn, 1000));

function fn(e) {
	console.log(e.clientX, e.clientY);
}

function throttle(f, delay) {
	var lastTime = 0;

	function ff(e) {
		var time = Date.now();
		if (time - lastTime < delay) {
			return;
		}
		f.call(this, e);
		lastTime = time;
	}
	return ff;
}
```
:::

### 防抖
- 在高频的触发某个事件后，保证在n秒内执行最后一次

::: details 点我查看代码
```js
//1:定义一个高频触发事件和事件处理函数
//2:封装一个防抖函数debounce,传一个事件处理函数f和间隔时间delay
//3:写一个返回函数:先清除定时器,在设置定时器,改变this指向并调用函数
var ipt = document.querySelector("#ipt");
ipt.oninput = debounce(fn,500);
function fn(e){
	console.log("搜索:"+ipt.value);
}
function debounce(f,delay){
	var timer;
	return function ff(e){
		clearTimeout(timer);
		var _this = this;
		timer = setTimeout(function(){
			f.call(_this,e)
		},delay)
	}
}
```
:::
