import {Value} from "../index";

export class SomeClass {
	@Value() private aParam: string;
	@Value("config.var") private otherValue: string;

	constructor() {
		console.log("constructed");
	}

	public printValues() {
		console.log(this.aParam);
		console.log(this.otherValue);
	}
}

const testClass = new SomeClass();
// JSON.stringify(testClass);
testClass.printValues();
