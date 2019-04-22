
document.addEventListener("click", function(event){
   const id = (<HTMLElement>event.target!).id;
   function setSpb(){
      sessionStorage.setItem("spbRef", JSON.stringify(true));
      sessionStorage.setItem("moscowRef", JSON.stringify(false));
   }
   function setMoscow(){
      sessionStorage.setItem("moscowRef", JSON.stringify(true));
      sessionStorage.setItem("spbRef", JSON.stringify(false));
   }
   if(id === "spbRef" || id === "spbRef1"){
      setSpb();
   } 
   if (id === "spbRef1") {
      event.preventDefault();
      initMap();
   }
   if(id ===  "moscowRef" || id ===  "moscowRef1"){
      setMoscow();
   }
   if(id ===  "moscowRef1"){
      event.preventDefault();
      initMap();
    }
})
