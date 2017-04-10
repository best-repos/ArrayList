class ArrayList{
	/**
	 * 构造函数,允许传入一个数组
	 * @param  {[type]} array [description]
	 * @return {[type]}       [description]
	 */
	constructor(array = []){
		this.arr = array;
	}
	/**
	 * 添加多个元素
	 */
	add(...items){
		items.forEach(e => this.arr.push(e));
	}
	/**
	 * 遍历集合
	 */
	forEach(callback){
		this.arr.forEach(e => callback(e));
	}
	/**
	 * 移除所有元素
	 * @return {[type]} [description]
	 */
	clear(){
		this.arr.length = 0;
	}
	/**
	 * 深克隆一个集合
	 */
	clone(){
		let temp = new ArrayList();
		this.arr.forEach(e => temp.add(e));
		return temp;
	}
	/**
	 * 检查集合中是否包含指定元素
	 */
	contains(item){
		for(let i of this.arr){
			if(i === item) return true;
		}
		return false;
	}
	/**
	 * 获取指定位置上的元素
	 */
	get(index){
		return this.arr[index];
	}
	/**
	 * 返回此列表中首次出现的指定元素的索引，或如果此列表不包含元素，则返回 -1
	 */
	indexOf(item){
		for(let i=0,len=this.arr.length;i<len;i++){
			if(this.arr[i] === item) return i;
		}
		return -1;
	}
	/**
	 * 判断集合是否为空
	 */
	isEmpty(){
		return this.arr.length == 0;
	}
	/**
	 * 移除此列表中指定位置上的元素
	 */
	remove(item){
		for(let i=0,len=this.arr.length;i<len;i++){
			if(item === this.arr[i]){
				this.arr.splice(i,1);
				return;
			}
		}
	}
	/**
	 * 用指定的元素替代此列表中指定位置上的元素
	 */
	set(index,item){
		if(index > this.arr.length) return;
		this.arr[index] = item;
	}
	/**
	 * 获取元素中第一个元素
	 */
	first(){
		return this.arr[0];
	}
	/**
	 * 获取元素中最后一个元素
	 */
	last(){
		return this.arr[this.arr.length - 1];
	}
	/**
	 * 删除多个元素
	 */
	removeAll(...items){
		let __this = this;
		items.forEach(e => {
			__this.remove(e);
		});
	}
	/**
	 * 获取元素个数
	 */
	 size(){
		return this.arr.length;
	 }
	
}
module.exports = ArrayList;