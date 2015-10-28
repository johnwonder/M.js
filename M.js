(function(window,undefined){

	"use strict";

	var toString = Object.prototype.toString,
		has = Object.prototype.hasOwnProperty,
		slice = Array.prototype.slice;//slice() 方法可从已有的数组中返回选定的元素

	function def(value,defValue){
		return value !== undefined ? value :defValue;
	}

	function isFunc(fn){
		//ie11 兼容模式 存在bug,调用次数过多时可能返回不正确的结果
		//return typeof fn === "function";

		return toString.call(fn) === "[object Function]";
	}

	//检测是否是正整数
	function isUInt(n){
		return typeof n == "number" && n > 0 && n === Math.floor(n);
	}

	//触发指定函数，如果函数不存在，则不触发
	function fire(fn,bind){
		if(isFunc(fn)) return fn.apply(bind,slice.call(arguments,2));
	}

	//扩展对象
	//forced : 是否强制扩展
	function extend(destination,source,forced){
		for(var key in source){
			if(key == undefined || !has.call(source,key)) continue;

			if(forced || destination[key] === undefined) destination[key] == source[key];
		}
		return destination;

	}


	function M(){

	}

	//模仿jQuery 
	M.fn = M.prototype ={

		//返回长度
		size:function(){
			return this.length;
		}

	};

	//模仿jQuery1.0
	M.extend = function(obj,prop){
		if(!prop) { prop = obj ; obj =this;}
		for(var i in prop) obj[i] = prop[i];
		return obj;
	}

	M.extend({

		init:function(){



		},

		each:function(obj,fn,args){

		},


	});


	window.M = M;
})(window)