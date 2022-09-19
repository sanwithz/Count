const counters = document.querySelectorAll('.counter');

function show(){
counters.forEach(counter =>{
    counter.innerText = '0'
    const updateCounter = ()=>{
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText;
        const increment = target / 200;
        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`;
            // updateCounter();
            setTimeout(updateCounter, 1);
        }else{
            counter.innerText = target
        }
    };
updateCounter()
})

}
show()

counters.forEach(counter =>{
    console.log(counter.id)
    counter.addEventListener('mouseover',()=>{
    show()
})

})
