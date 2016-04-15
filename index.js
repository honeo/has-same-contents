/*
	引数の配列orオブジェクトの中身を見て全く同じかどうかをBooleanで返すぞ

	詳しく
		引数をチェックして配列かオブジェクトで振り分け
		どちらでもなければエラーを投げる

*/
function hasSameContents(...args){
	if( isArray(...args) ){
		return hasSameContents_Array(...args);
	}else if( isObject(...args) ){
		return hasSameContents_Object(...args);
	}else{
		throw new TypeError('invalid argument');
	}
}


/*
	配列の場合
	引数1の配列を基準に2以降に以下を繰り返す
		まず長さが違えばfalse
		同じなら中身を一個ずつ比べて違いがあればfalse
		一周したらtrue
*/
function hasSameContents_Array(baseArr, ...arrs){
	return arrs.every( (arr)=>{
		return baseArr.length===arr.length && baseArr.every( (value, index)=>{
			return value===arr[index];
		});
	});
}

/*
	オブジェクトの場合
	引数1のオブジェクトを基準に2以降に以下を繰り返す
		keyを配列化して長さ比較
			違えばfalse
		同じならkeyの中身を総当りチェック
*/
function hasSameContents_Object(baseObj, ...objs){
	const baseKeyArr = Object.keys(baseObj);
	return objs.every( (obj)=>{
		const keyArr = Object.keys(obj);
		return baseKeyArr.length===keyArr.length && baseKeyArr.every( (key)=>{
			return baseObj[key]===obj[key];
		});
	});
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
