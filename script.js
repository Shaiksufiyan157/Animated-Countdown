const nums=document.querySelectorAll('.nums span')
const counter=document.querySelector('.counter')
const finalMessage=document.querySelector('.end')
const replay=document.querySelector('#replay')


function resetDOM(){
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')
    nums.forEach((num)=>{
        num.classList.value='';
    })
    nums[0].classList.add('in')
}

runAnimation()
function runAnimation(){
    nums.forEach((num,idx)=>{
        const nextToLast=nums.length-1
        num.addEventListener('animationend',(e)=>{
            if(e.animationName==='goin' && idx!=nextToLast){
                num.classList.remove('in')
                num.classList.add('out')
            }
            else  if(e.animationName==='goout' && num.nextElementSibling){
                num.nextElementSibling.classList.add('in')
            }
            else{
                counter.classList.add('hide')
                finalMessage.classList.add('show')
            }
        })
    })
}
replay.addEventListener('click',()=>{
    resetDOM()
    runAnimation()
})
