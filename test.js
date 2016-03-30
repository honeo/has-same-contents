console.log('has-same-contents: test');
import hasSameContents from './';

// 空の配列
const case0 = [[], [], true];

// 配列で同じ中身
const case1 = [[1,2,3], [1,2,3], true];

// 配列で違う中身
const case2 = [[1,2,3],	[4,5,6], false];

// 長さの違う配列
const case3 = [[1], [2,3], false];

// オブジェクトで同じ中身
const case4 = [{key:"value"}, {key:"value"}, true];

// オブジェクトで違う中身
const case5 = [{a:1}, {a:2}, false];

// オブジェクトで違うProp数
const case6 = [{a:1}, {a:1, b:2}, false];

// 配列で違う配列を参照
const case7 = [[[]], [[]], false];

// オブジェクトが同じ配列を参照
const case8 = do{
	const arr = [];
	[{arr}, {arr}, true];
}

// hasSameContents()
const caseArr = [
	case0,
	case1,
	case2,
	case3,
	case4,
	case5,
	case6,
	case7,
	case8
];
caseArr.forEach( ([arg1, arg2, result], index)=>{
	if(hasSameContents(arg1, arg2)!==result){
		throw new Error(`failed: ${index}`);
	};
});
