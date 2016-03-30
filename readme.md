# has-same-contents
[honeo/has-same-contents](https://github.com/honeo/has-same-contents)  
[has-same-contents](https://www.npmjs.com/package/has-same-contents)

## なにこれ
配列やオブジェクトの中身が同じかチェックするやつ。

## 使い方
```sh
$ npm i -S has-same-contents
```
```js
import hasSameContents from 'has-same-contents';

// case 1
let arr1 = [1, 2, 3],
	arr2 = [1, 2, 3];
arr1===arr2; //false
hasSameContents(arr1, arr2); //true

// case 2
let obj1 = {key: 'value'},
	obj2 = {key: 'value'};
obj1===obj2; //false
hasSameContents(obj1, obj2); //true

// case 3
let arr3 = [[]],
	arr4 = [[]],
hasSameContents(arr3, arr4); //false
hasSameContents({arr: arr3}, {arr: arr3}); //true
```
