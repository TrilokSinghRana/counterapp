const ans=document.querySelector('.ans')
const addition=document.querySelector('.add')
const sub=document.querySelector('.sub')
const reset=document.querySelector('.reset')
let counter=0;

ans.innerText=counter;
addition.addEventListener('click',()=>{
  counter++;
  ans.innerText=counter;
})
sub.addEventListener('click',()=>{
  counter--;
  ans.innerText=counter;
})
reset.addEventListener('click',()=>{
  ans.innerText=0;
  counter=0;
})
