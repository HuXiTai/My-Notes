## 推荐文档：
- [MDN](https://developer.mozilla.org/zh-CN/)
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

const strData = JSON.stringify(data);
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
const date = new Date();

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
const obj1 = { name: "芝麻糊" };
const obj2 = { age: "18" };

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

## 正则表达式： 

## DOM：

## 属性的增删改查：

## 节点操作：

## 创建元素的三种方法：

## 事件高级：

## BOM：

## 定时器：

## 同步异步：

## 元素可视区 client 系列：

## 元素偏移量offset系列：

## 元素滚动scroll系列：

## 视口宽度：

## 滚动条：

## 兼容性：

## 闭包：

## 终极原型链：

## 模拟多线程：

## 深浅拷贝：

## 公有、私有、静态、特权：

## 轮询机制：

## 节流、防抖：
