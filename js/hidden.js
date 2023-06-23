
async function count() {
    document.getElementById('counter').className ='counter-start';
    //console.log('Class tilføjet!')
    await new Promise(resolve => setTimeout(resolve, 30000));
    document.getElementById('counter').classList.remove('counter-start');
    //console.log('Class fjernet!')
}




const counters = document.querySelectorAll('.count');
const speed = 200;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(counter.getAttribute('data-target'));
    const count = parseInt(counter.innerText);
    const increment = Math.trunc(target / speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});