document.addEventListener("visibilitychange", function(){
    if(document.visibilityState == "visible")
    {
        document.title = "Yogesh | Full Stack Web Developer";
        
    }
    else{
        document.title = "Comback to portfolio";
    }
})