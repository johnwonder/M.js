
/*

检测 值是否是数字

*/

export function isNumeric(n){
	var t = typeof n;

	return t == 'number' ? !isNaN(n) && isFinite(n):
	  t == 'string' ? !n.length ? false :

	  n.length == 1 ? /\d/.test(n) :
	   //小数  e  十六进制
	  /^\s*[+-]?\s*(?:(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?)|(?:0x[a-f\d]+))\s*$/i.test(n) :
	 t == 'object' ? !!n && typeof n.valueof() == 'number' && !(n instanceof Date) : false;

}

export function rangeEach(rangeFrom,rangeTo,iteratee,onlyForward){
	let index = -1;
	let _rangeTo = rangeTo;
	let _rangeFrom = 0;

	if(typeof rangeTo === 'function'){
		iteratee = rangeTo;
		_rangeTo = rangeFrom;
	}else{
		index = rangeFrom -1;
	}
	//两个参数时就走这段
	if(onlyForward || rangeFrom <= _rangeTo){
		while(++index <= _rangeTo){
			if(iteratee(index) === false){
				break;
			}
		}
	}else {
		index = rangeFrom +1;

		//

		while(--index >= rangeTo){
			if(iteratee(index) === false){
				break;
			}
		}
	}
}

/*

根据 百分比计算值
*/

export function valueAccordingPercent(value,percent){
	percent = parseInt(percent.toString().replace('%',''),10);

	percent = parseInt(value * percent /100);
	return percent;
}