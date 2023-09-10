import { COMPARE_COLOR, delay, disableAllButtons, FINAL_COLOR, MakeDelay, POSITION_FINAL_COLOR, PRIMARY_COLOR, Swap, SWAP_COLOR, MIN_COLOR } from "../Utilities/utils";

var n;

async function merge(arr, s, mid, e) {
	let temp = [];
	let i = s;
	let j = mid + 1;
	let k = 0;

	while (i <= mid && j <= e) {
		arr[i].style.background = COMPARE_COLOR;
		arr[j].style.background = COMPARE_COLOR;
		await MakeDelay(delay);
		if (parseInt(arr[i].style.height) > parseInt(arr[j].style.height)) {
			arr[j].style.background = POSITION_FINAL_COLOR;
			temp[k++] = arr[j++].style.height;
		}
		else {
			arr[i].style.background = POSITION_FINAL_COLOR;
			temp[k++] = arr[i++].style.height;
		}
		await MakeDelay(delay);
	}

	while (i <= mid) {
		arr[i].style.background = COMPARE_COLOR;
		await MakeDelay(delay);
		arr[i].style.background = POSITION_FINAL_COLOR;
		await MakeDelay(delay);
		temp[k++] = arr[i++].style.height;
	}

	while (j <= e) {
		arr[j].style.background = COMPARE_COLOR;
		await MakeDelay(delay);
		arr[j].style.background = POSITION_FINAL_COLOR;
		await MakeDelay(delay);
		temp[k++] = arr[j++].style.height;
	}

	k = 0;
	for (i = s; i <= e; i++) {
		arr[i].style.background = MIN_COLOR;
		await MakeDelay(delay);
		arr[i].style.height = temp[k++];
	}

}

async function mergeSortHelper(arr, s, e) {
	if (s >= e) {
		return;
	}
	var mid = s + parseInt((e - s) / 2);
	await mergeSortHelper(arr, s, mid);
	await mergeSortHelper(arr, mid + 1, e);
	await merge(arr, s, mid, e);
	return;
}

export async function mergeSort() {
	disableAllButtons(true);
	document.getElementById("msort").classList.add('btndisabled');

	var arr = document.querySelectorAll('.element-bar');
	n = arr.length;
	await mergeSortHelper(arr, 0, n - 1);
	for (var i = 0; i < n; i++) {
		await MakeDelay(delay)
		arr[i].style.background = FINAL_COLOR;
	}
	document.getElementById("msort").className = 'btn';
	disableAllButtons(false);
}