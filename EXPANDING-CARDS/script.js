
panels.forEach((panel)=>{
    panel.addEventListener("click",()=>{
        removeActiveClasses();
        panel.classlist.add("active");
    });
});

const removeActiveClasses=()=>{
    panels.forEach((panel)=>{
        panel.classlist.remove("active");
    });
};