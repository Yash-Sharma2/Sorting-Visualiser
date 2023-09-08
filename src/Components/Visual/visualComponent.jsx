import React, { useState, useEffect } from 'react';
import { bubbleSort } from '../Algorithms/bubbleSort';
import { changeDelay, delay, PRIMARY_COLOR, randomNumberFrom } from '../Utilites/utils';
import './visualComponent.css'
import icon from '../Assets/github-icon.png'

function VisualComponent() {
    var [arr, setArr] = useState([]);
	var [arrSize, setArrSize] = useState(30);
	var [wid, setWid] = useState(33);
    var [delayinit, changeDelayinit] = useState(200);

    const changeDelayinitHelper = (val) => {
        changeDelay(505 - val);
        changeDelayinit(val);
    };

    function resetArr() {
		var arr = []
		for (var i = 0; i < arrSize; i++) {
			arr.push(randomNumberFrom(8, 650));
		}
		setArr(arr);
		var elem = document.querySelectorAll('.element-bar');
		for (i = 0; i < elem.length; i++) {
			elem[i].style.background = PRIMARY_COLOR
		}
	}


	useEffect(() => {
		resetArr();
	}, [])

    function setArrSizeHelper(val) {
		if (val > 100) {
			setWid(2)
		}
		else if (val > 80) {
			setWid(5);
		}
		else if (val > 70) {
			setWid(7);
		}
		else if (val > 60) {
			setWid(10);
		}
		else if (val > 50) {
			setWid(15);
		}
		else if (val > 40) {
			setWid(19);
		}
		else if (val > 30) {
			setWid(25);
		}
		else if (val > 20) {
			setWid(33);
		}
		else if (val > 10) {
			setWid(40);
		}
		else {
			setWid(60);
		}

		setArrSize(val);
		resetArr();
	}


	return (
		<div className=' h-[100vh] w-[100vw] flex'>
			<div className='sideNavbar'>
				<h3>Sorting Visualiser</h3>
				<label className='sliderLabel'>
					Array Size
					<br />
					<input id='rangeSlider' type='range' min='10' max='150' value={arrSize} onChange={(e) => setArrSizeHelper(e.target.value)} />
				</label>
				<br />
				<label className='sliderLabel'>
					Speed
					<br />
					<input type='range' min='100' max='500' value = {delayinit} onChange={(e) => { changeDelayinitHelper(e.target.value) }} />
				</label> 
				<br />
				<div><button className='btn' onClick={resetArr}>Generate array</button></div>
				<div><button className='btn' id='bsort' onClick={bubbleSort}>Bubble Sort</button></div>
				<div className='mx-auto'>
					<br />
					<a href="https://github.com/Yash-Sharma2" target='_blank' rel='noreferrer' >
						<img style={{ width: '90px' }} src={icon} alt='myGithub' />
					</a>
				</div>
			</div>

			<div className='array'>
            {arr.map((val, idx) => (
					<div
						className='element-bar'
						key={idx}
						style={{
							height: `${val}px`,
							width: `${wid}px`,
							backgroundColor: PRIMARY_COLOR,

							transition: `height ${delay}ms`
						}} >
					</div>
				))}
			</div>
		</div>
	)
};

export default VisualComponent;