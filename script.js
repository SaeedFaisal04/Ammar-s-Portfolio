document.querySelector('a[href="#home"]').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
document.querySelector('a[href="#Home"]').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


//for about section

document.querySelector('a[href="#about"]').addEventListener("click", function(e) {
    e.preventDefault();
    const aboutSection = document.querySelector("#about");
    aboutSection.scrollIntoView({
        behavior: "smooth"
    });
})

//for services section

document.querySelector('a[href="#Services"]').addEventListener("click" , function(e){
     e.preventDefault();
     const service_section= document.querySelector("#service");
     service_section.scrollIntoView({
         behavior: 'smooth'
     })
})
document.querySelector('a[href="#Work"]').addEventListener("click" , function(e){
     e.preventDefault();
     const service_section= document.querySelector("#work");
     service_section.scrollIntoView({
         behavior: 'smooth'
     })
})
document.querySelector('a[href="#Contact"]').addEventListener("click" , function(e){
     e.preventDefault();
     const service_section= document.querySelector("#contact");
     service_section.scrollIntoView({
         behavior: 'smooth'
     })
})
