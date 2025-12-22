class DataAnalyzer {
	constructor(data) {
		this.data = data;
	}

	getMaxValue() {
		return Math.max(...this.data);
	}

	isArray() {
		return Array.isArray(this.data);
	}
	
	sum() {
		return this.data.reduce((acc, num) => acc + num, 0);
	}

	parseAndAverage(stringArray) {
		const numbers = stringArray.map(str => parseFloat(str));
		const total = this.sum(numbers);
		return total / numbers.length;
	}
}


const analyzer = new DataAnalyzer([4, 7, 1, 9, 3]); // 10 
console.log(analyzer.getMaxValue()); 
console.log(analyzer.isArray()); 
console.log(analyzer.sum()); 
console.log(analyzer.parseAndAverage(['2.5', '3.5', '4.0'])); // 4.5