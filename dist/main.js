(()=>{"use strict";const e=(...e)=>e.every((e=>"number"==typeof e&&!isNaN(e)));var t,r;t=new class{constructor(){this.errorBox=document.getElementById("error")}handleAdditionError=(t,r)=>{const s=t.reduce(((t,s,n)=>e(r[n])?t+"":t+`${s} is not a number`),"Please enter two valid numbers!");this.errorBox.classList.remove("invisible"),this.errorBox.innerText=s};hideErrors=()=>{this.errorBox.classList.add("invisible")}},r=new class{constructor(){this.numberOneInput=document.getElementById("numberOne"),this.numberTwoInput=document.getElementById("numberTwo"),this.addValuesButton=document.getElementById("addValues"),this.resultsDiv=document.getElementById("result")}getInputs(){return[this.numberTwoInput.value,this.numberOneInput.value]}setResult(e){this.resultsDiv.innerText=e}onClick(e){this.addValuesButton.addEventListener("click",e)}},t.hideErrors(),r.onClick((()=>{t.hideErrors();const s=r.getInputs(),n=((...e)=>e.map((e=>parseInt(e))))(...s);e(...n)?r.setResult(n.reduce(((e,t)=>e+t))):(r.setResult(""),t.handleAdditionError(s,n))}))})();