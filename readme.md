# has-same-contents
[honeo/has-same-contents](https://github.com/honeo/has-same-contents)  
[has-same-contents](https://www.npmjs.com/package/has-same-contents)

## なにこれ
配列やオブジェクトの中身が同じかチェックするやつ。

## 使い方
```bash
$ npm i -S has-same-contents
```
```js
import hasSameContents from 'has-same-contents';
```
```js
// case 1
let arr1 = [1, 2, 3],
	arr2 = [1, 2, 3];
arr1===arr2;
> false

hasSameContents(arr1, arr2);
> true
```
```js
// case 2
let obj1 = {key: 'value'},
	obj2 = {key: 'value'};
obj1===obj2;
> false

hasSameContents(obj1, obj2);
> true
```
```js
// case 3
let arr3 = [[]],
	arr4 = [[]];
hasSameContents(arr3, arr4);
> false

hasSameContents({arr: arr3}, {arr: arr3});
> true
```
```js
// case 4
let arr5 = [1, 2, 3],
	arr6 = [1, 2, 3],
	arr7 = [1, 2, 3];
hasSameContents(arr5, arr6, arr7);
> true

arr5.push(4);
hasSameContents(arr5, arr6, arr7);
> false
```
```js
// case 5
let obj3 = {key: 'value', foo: 'bar'},
	obj4 = {key: 'value', foo: 'bar'},
	obj5 = {key: 'value', foo: 'bar'};
hasSameContents(obj3, obj4, obj5);
> true

delete obj3.foo;
hasSameContents(obj3, obj4, obj5);
> false
```
