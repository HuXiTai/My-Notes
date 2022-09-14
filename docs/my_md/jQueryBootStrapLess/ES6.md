## ES6提供的数据结构：
### `Set`
>
>它类似于数组去重
>
>`Set`本身就是一个构造函数，所以用`new Set(arr)`声明实例化对象
>
>`Set`可以接受具有`iterable`接口的其他数据结构作为参数

基本使用：
```js
const arr = [1, 1, 2, 2, 3, 3];
const set = new Set(arr);
console.log(set); //{1, 2, 3}
```

常用的方法和属性：

`set.size`
```js
/* 返回Set的长度 */
console.log(set.size); //3
```
`set.add(val)`
```js
console.log(set.add(4)); //{1, 2, 3, 4}
/* 
  功能：在原数组的后面添加一个元素
  参数：val:需要添加的值
  返回值：添加值后的"set"
*/
```
`set.delete(val)`
```js
console.log(set.delete(4)); //{1, 2, 3}
/* 
  功能：原数组上删除某一个值
  参数：val:需要删除的值
  返回值：布尔值
*/
```
`set.has(val)`
```js
console.log(set.has(4)); //false
/* 
  功能：查看是否有该成员
  参数：val:需要查找的值
  返回值：布尔值
*/
```
`set.forEach((item, index) => {});`
```js
set.forEach((item, index) => {});
/* 
  功能：遍历
  参数：回调
  返回值：undefined
*/
```
`set.clear()`
```js
console.log(set.clear()); //undefined
console.log(set); //Set(0) {size: 0}
/* 
  功能：清除该结构里的内容
  参数：无
  返回值：undefined
*/
```