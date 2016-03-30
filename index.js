/*
	引数1,2の配列orオブジェクトの中身を見て全く同じかどうかをBooleanで返すぞ

	詳しく
		引数をチェックして配列かオブジェクトで振り分け
		どちらでもなければエラーを投げる

*/
function hasSameContents(arg1, arg2){
	if( isArray(arg1, arg2) ){
		return hasSameContents_Array(arg1, arg2);
	}else if( isObject(arg1, arg2) ){
		return hasSameContents_Object(arg1, arg2);
	}else{
		throw new TypeError('invalid argument');
	}
}


/*
	配列の場合
		まず長さが違えばfalse
		同じなら中身を一個ずつ比べて違いがあればfalse
		一周したらtrue
*/
function hasSameContents_Array(arr1, arr2){
	return arr1.length===arr2.length && arr1.every( (value,index) => value===arr2[index] );
}

/*
	オブジェクトの場合
		keyを配列化して長さ比較
			違えばfalse
		同じならkeyの中身を総当りチェック
*/
function hasSameContents_Object(obj1, obj2){
	const keyArr1 = Object.keys(obj1);
	const keyArr2 = Object.keys(obj2);
	return keyArr1.length===keyArr2.length && keyArr1.every( key => obj1[key]===obj2[key] );
}

/*
	引数が全て配列かどうかをBooleanで返す
*/
function isArray(...arr){
	return arr.every( (value)=>{
		return Array.isArray(value);
	});
}

/*
	引数が全てオブジェクトかどうか
		typeofと違ってnullは弾く
*/
function isObject(...objs){
	return objs.every( (o)=>{
		return o instanceof Object;
	});
}

export default hasSameContents;
