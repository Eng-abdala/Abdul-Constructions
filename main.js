// Responsive menu
const menu = document.querySelector("#menu")
const ul = document.querySelector("#ul")
const header = document.querySelector("#header")
const head = document.querySelector("#head")
const close = document.querySelector("#close")

close.style.display="none"

menu.addEventListener("click",()=>{
    menu.style.display="none"
    head.style.display="none"
    header.style.height="800px"
    ul.style.display="inline"
    ul.style.lineHeight="70px"
    ul.style.margin="auto"
    close.style.display="flex"


})
close.addEventListener("click",()=>{
  ul.style.display="none"
  close.style.display="none"
  menu.style.display="inline"
  head.style.display="flex"
  header.style.height="100px"
})


// Map
const map = L.map('map').setView([2.0472, 45.3352], 13); // Set initial location and zoom level

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© openStreatMap contributors'
}).addTo(map);

L.marker([2.0472, 45.3352]).addTo(map)
  .bindPopup('Yaaqshiid, Mogadish0, Somalia.')
  .openPopup();



  // contact
  const fName=document.querySelector("#fName")
  const lName=document.querySelector("#lName")
  const email=document.querySelector("#email")
  const subject=document.querySelector("#subject")

  const p1=document.querySelector("#p1")
  const p2=document.querySelector("#p2")
  const p3=document.querySelector("#p3")
  const p4=document.querySelector("#p4")

const submit = document.querySelector("#submit")
submit.addEventListener("click",(event)=>{
  event.preventDefault()
  p1.innerHTML=""
  p2.innerHTML=""
  p3.innerHTML=""
  p4.innerHTML=""
  if (fName.value==="") {
  p1.innerHTML="Please Enter Your First Name:"
    
  }
  else if (lName.value==="") {
  p2.innerHTML="Please Enter Your Last Name:"
    
  }
  else if (email.value==="") {
  p3.innerHTML="Please Enter Your Email:"
    
  }
  else if (subject.value==="") {
  p4.innerHTML="Please Enter a subject:"
    
  }
  
})
