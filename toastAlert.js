const buttonTag = document.querySelector('.btn');
const parentTag = document.querySelector(".parent");


const openToastAlert = () =>{
    parentTag.innerHTML = "";
    const toastAlert = document.createElement("div");
    toastAlert.classList.add("toastAlert");
    toastAlert.append("Your file was successfully uploaded.");
    parentTag.append(toastAlert);
    toastAlert.style.bottom = `-${toastAlert.offsetHeight}px`;

    setTimeout(()=>{
        toastAlert.style.bottom = `0px`;
    },100);
    setTimeout(()=>{
        toastAlert.style.bottom = `-${toastAlert.offsetHeight}px`;
    },2000);
    

}
buttonTag.addEventListener("click",()=>{
    openToastAlert();
})