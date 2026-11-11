function show(id){
 document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function register(e){
 e.preventDefault();
 document.getElementById("regMsg").innerText="✅ Registration successful!";
 e.target.reset();
}

function donateFood(e){
 e.preventDefault();
 document.getElementById("donateMsg").innerText=
 "✅ Food donation added successfully!";
 e.target.reset();
}

function submitRequest(e){
 e.preventDefault();
 document.getElementById("reqMsg").innerText=
 "✅ Food request submitted successfully!";
 e.target.reset();
}

function contact(e){
 e.preventDefault();
 document.getElementById("contactMsg").innerText=
 "✅ Message sent successfully!";
 e.target.reset();
}

function requestFood(food){
 alert("Request submitted for: "+food);
}

function filterFood(){
 let value=document.getElementById("search").value.toLowerCase();
 document.querySelectorAll(".food").forEach(x=>{
   x.style.display=x.innerText.toLowerCase().includes(value)?"flex":"none";
 });
}