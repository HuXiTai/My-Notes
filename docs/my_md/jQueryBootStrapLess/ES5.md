## 严格模式：
- 分为局部和全局，使用`'use strict'` 声明

特点：
1. 不能使用未初始化的变量
1. 禁止自定义的函数中的`this`指向`window`
1. 禁止删除变量和对象中不可删除的属性，显示报错
1. 禁止函数参数重名，对象属性重名

## 异常处理：
| 异常        | 含义           |
| ------------- |:-------------:|
|`Error` | 普通异常 。与`thorw`语句和`try/catch`语句一起使用，属性`name`可以读写异常类型，`message`属性可以读写详细的错误信息。 |
|`EvalError` | 不正确使用`eval()`方法时抛出 |
|`SyntaxError` | 出现语法错误时抛出 |
|`RangeError` | 数字超出合法范围之抛出 |
|`ReferenceError` | 读取不存在的变量时抛出 |
|`TypeError` | 值的类型发生错误的时候抛出 |
|`URIError` | URI编码和解码错误时抛出 |

## Object静态方法：

`Object.create();`
::: details 点我查看代码
```js
Object.create(proto, [propertiesObject]);
/* 
  功能：创建一个新对象，使用现有对象作为新创建对象的原型
  参数：
    proto：新创建对象指定的__proto__属性(另一个对象/Object.prototype/null)
    propertiesObject：
    {
      value: value, //当前属性的值
      writable: Boolean, //当前属性的值是否可以被修改
      enumerable: Boolean, //当前属性是否可以被枚举出来
      configurable: Boolean //当前属性/属性描述符是否可以被删除/修改
    }
  返回值：具有指定原型对象和属性的新对象
*/
```
实例：
```js
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"
```
:::
`Object.defineProperty();`
::: details 点我查看代码
```js
const obj = Object.defineProperty(obj, prop, descriptor)
/* 
  功能：直接在对象上定义新属性，或修改对象上现有的属性
  参数：
    obj：要在其上定义属性的对象
    prop：Symbol要定义或修改的属性的名称或名称
    descriptor：正在定义或修改的属性的描述符
  返回值：传递给函数的对象
*/
```
实例：
```js
const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42
```
:::

`Object.defineProperties();`
::: details 点我查看代码
```js
const obj = Object.defineProperties(obj, props)
/* 
  功能：直接在对象上定义新属性或修改现有属性
  参数：
    obj：在其上定义或修改属性的对象
    prop：属性及属性的描述（类似于create方法的第二个参数）
  返回值：传递给函数的对象
*/
```
实例：
```js
const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true
  },
  property2: {}
});

console.log(object1.property1);
// expected output: 42
```
:::

## 存取器：
- 让对象里的属性变得动态

使用`get name() {},`和`set name(val) {},`
```js
// 直接在对象中创建属性的 getter 和 setter，并进行测试
let obj = {
    num: 50,
    get percent() {
        return this.num + "%"
    },
    set percent(value) {
        console.log("调用了 setter", this.num)
        this.num = value
    }
}
console.log(obj)            // { num: 50, percent: [Getter/Setter] }
console.log(obj.percent)    // 50%

obj.percent = 60            // "调用了 setter", 50
console.log(obj)            // { num: 60, percent: [Getter/Setter] }
console.log(obj.percent)    // 60%
```

使用`Object.defineProperty(obj, prop, descriptor)`
```js
let obj = {
    num: 50
}
console.log(obj)    // { num: 50 }

Object.defineProperty(obj, 'percent', {
    configurable: true,
    enumerable: true,
    writable: true,
    // value: 40,
    get: function () {
        return this.num + "%"
    },
    set: function (value) {
        console.log('属性值更新：', value)
        this.num = value
    }
});
console.log(obj)    // { num: 50, percent: [Getter/Setter] }
obj.percent = 60    // 属性值更新： 60
console.log(obj)    // { num: 60, percent: [Getter/Setter] }
```

`class`中的存取器:
```js
class obj {
    constructor(number) {
        this.number = number
    }

    get percent() {
        return this.number + "%"
    }

    set percent(value) {
        console.log("值更新")
        this.number = value
    }
}
var object = new obj(10)

console.log(object)           // obj { number: 10 }
console.log(object.percent)   // 10%
object.number = 20            // 值更新
console.log(object.percent)   // 20%
```

## 变量声明方式：
### `var` 
>只支持函数作用域(狗都不用)

### `let` 
>脱离`window`，属于`script`
>
>支持块作用域,可以层层嵌套,也有作用域链
>
>在用一个作用域中不允许重复声明
>
>是有声明提升的，只不过存在暂时性死区（在这个变量被赋值之前不能被使用）
>
>`let`在`for`循环小括号中有一个隐藏的作用域，属于`for`循环代码块的父作用域
>
>块级作用域的出现， `IIFE`不再必要了


### `const` 
>用来声明常量，脱离`window`，属于`Script`
>
>不能被改变
>
>初始化的时候必须赋值
>
>有变量提升，存在暂时性死区，在声明前不可以使用
>
>块作用域
>
>不能重复声明
>
>如果声明对象只要对象地址不变，可以修改里面的值


###  `function`
>作用域不确定，官方明确规定可随意写，不同的浏览器得到不同的结果

###  `lable` 
>给for声明一个变量保存
>
>声明方法：`变量名:for(){}`
>
>使用方法：只供`break`和`continue`使用
>::: details 点我查看代码
>```js
>var n = 10;
>var m = 10;
>var num = 0;
>lable : for(var i=0;i<n;i++){
>    for(var j=0;j<m;j++){
>        if(i===5 && j===5){
>            console.log('OK!');
>            break lable;
>        }
>        num++;
>    }
>}
>console.log(num);
>// OK!
>// 55
>```
>:::

## 模板字符串：
\`内容\${表达式}`
```js
const str = "一碗";
const name = `每天${str}芝麻糊`;
console.log(name) //每天一碗芝麻糊
```

## 进制转换：
`num.toString(n)`
- 把十进制数`num`转为`n`进制
```js
const num = 90;
console.log(num.toString(16)); //5a
```
`parseInt(m, n)`
- 把n进制的m转为10进制 ,其中m一定是一个字符串的格式
```js
console.log(parseInt("5a", 16)); //90
```

## 三点运算符：
- 可展开数组和对象和字符串
```js
const obj = { name: "芝麻糊" };
const arr = ["芝", "麻", "糊"];
const str = "芝麻糊";
console.log({ ...obj } === obj); //false
console.log([...arr] === arr); //false
console.log([...str]); //['芝', '麻', '糊']
```

## rest参数：
- `...rest`
```js
function fn(...rest) {
  console.log(rest); //['芝', '麻', '糊']
}
fn("芝", "麻", "糊");
```
::: tip rest为真数组，不是伪数组
:::

## 箭头函数：
### 写法：
1. 基础写法：
```js
const fn = (a, b) => {};
```
2. 当参数只有一个时可省略()
```js
const fn = a => {};
```
3. 当函数体只有一条语句时可省略{}
```js
const fn = a => console.log(a);
```
4. 当函数体只有一条返回一句时可省略{}和return
```js
const fn = a => a;
```

### 特点：
1. 箭头声明的函数没有自己的`this`只能找父级的 
2. 箭头函数不适用于构造函数
3. 箭头函数也不适用于事件函数
4. 箭头函数没有`arguments` ,但是可以用`rest`参数
5. 箭头函数不能使用`yield`命令