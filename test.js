console.log('has-same-contents: test');
import hasSameContents from './';

const testArr = [];

// 空の配列
testArr.push( ()=>{
	return hasSameContents([], []);
});

// 配列で同じ中身
testArr.push( ()=>{
	return hasSameContents([1,2,3], [1,2,3]);
});

// 配列で違う中身
testArr.push( ()=>{
	return !hasSameContents([1,2,3], [4,5,6]);
});

// 長さの違う配列
testArr.push( ()=>{
	return !hasSameContents([1], [2,3]);
});

// オブジェクトで同じ中身
testArr.push( ()=>{
	return hasSameContents({key:"value"}, {key:"value"});
});

// オブジェクトで違う中身
testArr.push( ()=>{
	return !hasSameContents({a:1}, {a:2});
});

// オブジェクトで違うProp数
testArr.push( ()=>{
	return !hasSameContents({a:1}, {a:1, b:2});
});

// 配列で違う配列を参照
testArr.push( ()=>{
	return !hasSameContents([[]], [[]]);
});

// オブジェクトが同じ配列を参照
testArr.push( ()=>{
	const arr = [];
	return hasSameContents({arr}, {arr}, true);
});

// 配列みっつ比較
testArr.push( ()=>{
	let arr5 = [1, 2, 3],
		arr6 = [1, 2, 3],
		arr7 = [1, 2, 3];
	const result =  hasSameContents(arr5, arr6, arr7);

	arr5.push(4);
	return result && !hasSameContents(arr5, arr6, arr7);
});

// オブジェクトみっつ比較
testArr.push( ()=>{
	let obj3 = {key: 'value', foo: 'bar'},
		obj4 = {key: 'value', foo: 'bar'},
		obj5 = {key: 'value', foo: 'bar'};
	const result = 	hasSameContents(obj3, obj4, obj5);

	delete obj3.foo;
	return result && !hasSameContents(obj3, obj4, obj5);
});

// まとめ
testArr.forEach( (func, index)=>{
	if(func){
		console.log(`success: ${index}`);
	}else{
		throw new Error(`failed: ${index}`);
	}
});
