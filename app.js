new Vue({
	el: '#vue-app',
	data: {
		//  name: 'Jeewoo',
		//  job: 'Ninja',
		//  website: 'https://www.naver.com'
		age: 23,
		x: 0,
		y: 0
	},
	methods: {
		// greet: function(time) {
		// 	return 'Good ' + time + ' ' + this.name
		// }
		add: function (inc) {
			this.age += inc
		},
		sub: function (dec) {
			this.age -= dec
		},
		updateXY: function(event) {
			this.x = event.offsetX;
			this.y = event.offsetY;
		}
	}
})
