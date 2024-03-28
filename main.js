let Subtot = document.getElementById("Subtotal")
let Taxes = document.getElementById("Taxes")
let Total = document.getElementById("Total")
Total.innerHTML = Subtot.innerHTML+Taxes.innerHTML

function Moins(id){
  let i = id[(id.length)-1]
  let quantite = document.getElementById("valeur"+i);
  let price = document.getElementById("price"+i);
  let TOT = document.getElementById("TOT"+i);
  let PriceIn=price.innerHTML.slice(1,price.innerHTML.length)
  
       if (quantite.innerHTML>=1)
        {
        quantite.innerHTML -= 1;
        TOT.innerHTML=Number(PriceIn)* Number(quantite.innerHTML)
        Subtot.innerHTML=Number(Subtot.innerHTML)-Number(PriceIn)
        Total.innerHTML = Number(Subtot.innerHTML)+Number(Taxes.innerHTML)
        }
        
        
        
        

       
      }
    
function BtnPlus(id){
 let j = id[(id.length)-1]
 let quantite = document.getElementById("valeur"+j);
 let price = document.getElementById("price"+j);
 let TOT = document.getElementById("TOT"+j);
 let PriceIn=price.innerHTML.slice(1,price.innerHTML.length)
 quantite.innerHTML =Number(quantite.innerHTML) +1;
 TOT.innerHTML=Number(PriceIn)* Number(quantite.innerHTML)
 Subtot.innerHTML=Number(Subtot.innerHTML)+Number(TOT.innerHTML)
 Total.innerHTML = Number(Subtot.innerHTML)+Number(Taxes.innerHTML)
        
}
var nb=0
function ClickMe(id){
  let heart= document.getElementById(id)
  
  //console.log(heart.innerHTML)
  if (nb===0)
  {
    heart.setAttribute("class","red");
    nb=nb+1;
  }
  else if (nb===1)
    {
     heart.setAttribute("class","black");
     nb=0
    }
    console.log(nb)
}
