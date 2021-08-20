console.log('farhan');

 const div1=document.getElementById('first');
 const div2=document.getElementById('second');
 const div3=document.getElementById('third');

 const img=document.getElementById('art');


 const desc=document.getElementById('desc');
 const price=document.getElementById('price');

 const shippingField=document.getElementById('shipping')
 const free=document.getElementById('free');
 const express=document.getElementById('express');
 const total=document.getElementById('total');

 //console.log(free,express);

 free.addEventListener('click',function(){
   // console.log('hello');
    shippingField.innerText='5';
    updateTotal();
 })
 express.addEventListener('click',function(){
   shippingField.innerText='30';
   updateTotal();
 })

 //update total

 function updateTotal(){
   // console.log(shippingField.innerText+price.innerText);
   const shippingCharge=Number(shippingField.innerText);
   const productPrice=Number(price.innerText);
   const grandTotal=shippingCharge+productPrice;
   total.innerText= grandTotal;
 }

 div1.addEventListener('click',function(){
     //console.log('first');
     img.src='images/1.jpg';
     desc.innerText= ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus. Voluptatibus minima aut non doloremque?';
     price.innerText='750';

     updateTotal();
 });
 div2.addEventListener('click',function(){
    img.src='images/2.jpg';
    desc.innerText= ' Second- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus. Voluptatibus minima aut non doloremque?';
    price.innerText='550';
    updateTotal();
 });
 div3.addEventListener('click',function(){
    img.src='images/3.jpg';
    desc.innerText= ' Third- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus. Voluptatibus minima aut non doloremque?';
    price.innerText='330';
    updateTotal();
 });