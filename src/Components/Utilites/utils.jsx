import React, { useState, useEffect } from 'react';
export var delay = 200
export const PRIMARY_COLOR = 'rgb(0, 153, 255)';
export const FINAL_COLOR = 'rgb(0, 255, 102)';
export const POSITION_FINAL_COLOR = 'rgb(204, 0, 255)';
export const COMPARE_COLOR = 'rgb(0, 0, 255)';
export const SWAP_COLOR = 'rgb(255, 0, 0)';
export const MIN_COLOR = 'rgb(255, 102, 0)';


export function MakeDelay(milisec) {
	return new Promise(resolve => {
		setTimeout(resolve, milisec);
	})
}

export function randomNumberFrom(l, r) {
	return Math.floor(Math.random() * (l - r + 1) + r)
}

export function changeDelay(val) {
	delay = val;
}

export function Swap(a, b) {
	const temp = a.style.height;
	a.style.height = b.style.height;
	b.style.height = a = temp;
}

export function disableAllButtons(val) {
	document.getElementById('rangeSlider').disabled = val;
	var btns = document.querySelectorAll(".btn")
	for (var i = 0; i < btns.length; i++) {
		btns[i].disabled = val;
	}
}