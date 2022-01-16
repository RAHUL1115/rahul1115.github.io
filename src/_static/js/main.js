document.addEventListener('DOMContentLoaded',()=>{
  navFix()
});

function navFix(){
  let navheight = document.querySelector('#navbar').clientHeight
  document.querySelector('#header').style.height = navheight + "px";
}