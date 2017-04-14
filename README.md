ArrayList API:

下载<br>
	npm install arraylists

>引用包
```javascript
	let ArrayList = require("arraylists");
```

>创建一个ArrayList对象
```javascript
	let list = new ArrayList();
	// 允许在创建对象时传入数组进构造函数，此操作会将数组中的所有元素直接在ArrayList对象初始化时添加进集合
	let list = new ArrayList([1,2,3]); // 栗子
```

>设置泛型,可设置类型为string,number,boolean和function数据类型。设置泛型后如添加非泛型定义的类型进集合则抛出异常.如不设置泛型,则集合中元素可添加任意类型.
```javascript
	list.setType(type);
	// 举个栗子
	// 设置集合中元素只允许添加数字
	list.setType("number");
	// 设置集合中元素只允许添加字符串
	list.setType("string");
	// 设置集合中元素只允许添加布尔值
	list.setType("boolean");
	// 设置集合中元素只允许添加函数类型
	list.setType("function");
	...
```

>添加一个元素
```javascript
	list.add(item);
```

>添加多个元素
```javascript
	list.add(item1,item2,item3...);
```

>添加一个数组进集合
```javascript
	list.addAll(array);
```

>删除指定元素
```javascript
	list.remove(item);
```

>删除多个元素
```javascript
	list.removeAll(item1,item2,item3...);
```

>清空集合元素
```javascript
	list.clear();
```

>深克隆一个集合
```javascript
	let list2 = list.clone();
```

>检查集合中是否包含指定元素
```javascript
	let bool = list.contains(item);
```

>获取指定位置上的元素
```javascript
	let temp = list.get(index);
```

>返回此列表中首次出现的指定元素的索引，或如果此列表不包含元素，则返回 -1
```javascript
	let index = list.indexOf(item);
```

>判断集合是否为空
```javascript
	let bool = list.isEmpty();
```

>用指定的元素替代此列表中指定位置上的元素
```javascript
	list.set(index,item);
```

>遍历集合
```javascript
	list.forEach(e => {
		console.log(e);
	});
```

>获取元素中第一个元素
```javascript
	list.first();
```

>获取元素中最后一个元素
```javascript
	list.last();
```

>返回元素个数
```javascript
	list.size();
```

>去除重复元素
```javascript
	list.unique();
```

>将集合转换为数组,返回一个数组,但不改变原集合
```javascript
	list.toArray();
```

>判断两个集合中元素否相等
```javascript
	list.equals(list2);
```

>返回在此 ArrayList 的元素上进行迭代的迭代器。
```javascript
	list.iterator();
```

[点此查看iterator迭代器使用文档](https://www.npmjs.com/package/listiterator)

https://www.npmjs.com/package/listiterator

>关于作者:<br>
	email:admin@w3c.top

>更新日志:<br>

>V2.0.9更新:<br>
>>新增equals比较函数
>
>>新增unique函数去除集合中重复元素
>
>>新增toArray函数将集合转换为数组
>
>>新增addAll函数可直接添加一个数组进集合

>V2.1.0更新:<br>
>>新增泛型定义
