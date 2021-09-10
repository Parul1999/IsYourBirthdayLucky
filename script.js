const date = document.querySelector("#date");
const number = document.querySelector("#number");
const output = document.querySelector("#output");
const outputBtn = document.querySelector("#outputBtn");

function findIsLucky()
{

   if(date.value && number.value)
   {
   let sum =0;
   for(var i=0;i<date.value.length;i++)
   {
      if(date.value[i] != '-')
      {   
        sum = sum + parseInt(date.value[i]);
      }
   }
   if(sum % number.value==0)
   {
    output.innerText ="Your Birthday is Lucky🎉"
   }
   else
   {
    output.innerText ="Not Lucky .Change your lucky number or Birthday !! 🙄"
   }
}
else
{
    output.innerText="All the details , Please !!"
}
}

function resetOutput()
{
    output.innerText=""
}
outputBtn.addEventListener('click',findIsLucky);

date.addEventListener('change',resetOutput);
number.addEventListener('change',resetOutput);