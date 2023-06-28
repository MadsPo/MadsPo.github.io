
async function count() {
    document.getElementById('counter').className ='counter-start';
    //console.log('Class tilføjet!')
    await new Promise(resolve => setTimeout(resolve, 30000));
    document.getElementById('counter').classList.remove('counter-start');
    document.getElementById('counter').className ='hide';
    //console.log('Class fjernet!')
}




const counters = document.querySelectorAll('.count');
const speed = 5000;

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		const inc = target / speed;

		  //console.log(inc);
		  //console.log(count);


		if (count < target) {
			counter.innerText = count + inc;
			setTimeout(updateCount, 5);
		} else {
			counter.innerText = target;
		}
	};
  updateCount();
});
