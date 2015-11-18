
/*
learn from handsontable
*/

/*
  字符串第一个字符大写
*/
export function toUpperCaseFirst(string){
	return string[0].toUpperCase() +string.substr(1);
}

/*
	测试 prefix 是否匹配字符串
	ES6语法
	https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/export#.E6.B5.8F.E8.A7.88.E5.99.A8.E6.94.AF.E6.8C.81
*/
export function startsWith(string,needle){
	let result =true;

	rangeEach(needle.length - 1,(index) => {

			if(string.charAt(index) !== needle.charAt(index)){
				result =false;
				return false;
			}

	});

	return result;

}


export function endsWith(string,needle){
	let result =true;
	let needleLength = needle.length -1;
	let stringLength  = string.length -1;

	rangeEach(needleLength,(index) =>{
		let stringIndex = stringLength -index;
		let needleIndex= needleLength - index;

		if(string.charAt(stringIndex) !== needle.charAt(needleIndex)){
			result =false;

			return false;
		}
	});

	return result;
}

/*
比较 字符串 忽略大小写
@param 字符串
*/
export function equalsIngoreCase(...strings){
	let unique = [];
	let length = strings.length;

	while(length --){
		let string = stringify(strings[length]).toLowerCase();

		if(unique.indexOf(string) === -1){
			unique.push(string);
		}
	}

	return unique.length === 1;
}

/*
生成一个随机hex字符串,
*/
export function randomString(){
	function s4(){
		return Math.floor((1+Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}

	return s4() +s4() +s4() + s4();
}

export function isPercentValue (value) {
	
	return /^([0-9][0-9]?\%$)|(^100\%$)/.test(value);
}


