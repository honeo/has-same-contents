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

// hasSameContents()
testArr.forEach( (func, index)=>{
	if(func){
		console.log(`success: ${index}`);
	}else{
		throw new Error(`failed: ${index}`);
	}
});
