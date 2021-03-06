import Rx from "rx";
import fakeAjax from "../fakeAjax-rx";

export default function () {
	"use strict";

// **************************************
// The rx/observable no promise way
	let getFile = (file) => fakeAjax(file)

	this.start = (_output = [], input = ["file1","file2","file3"]) => {
		return Rx.Observable.create((observer) => {
			Rx.Observable
			.fromArray(input)
			.concatMap(file => getFile(file))
			.subscribe(
				(fileResult) => _output = [..._output,fileResult],
				(error) => {throw error;},
				() => {	_output = [..._output,"Complete!"];	observer.onNext(_output);}
			);
		});
	}
}
