const modalTriggerButtons = document.querySelectorAll("[data-modal-target]");
const modals = document.querySelectorAll(".model");
const modalCloseButtons = document.querySelectorAll(".model__close");

modalTriggerButtons.forEach(elem => {
    elem.addEventListener("click", event => toggleModal(event.currentTarget.getAttribute("data-modal-target")));
});

modalCloseButtons.forEach(elem => {
    elem.addEventListener("click", event => toggleModal(event.currentTarget.closest(".modal").id));
});

modals.forEach( elem => {
    elem.addEventListener("click", event => {
        if(event.currentTarget===event.target) toggleModal(event.currentTarget.id);
    });
});

function toggleModal(modalId) {
    const modal = document.getElementById(modalId);

    if(getComputedStyle (modal) .display==="flex"){
        modal.classList.add("modal-hide");
        setTimeout(() => {
            modal.style.display = "none";
            modal.classList.remove("modal-show","modal-hide");
            document.body.style.overflow = "initial";
        }, 200);
    }
    else { 
        modal.style.display = "flex"; 
        modal.classList.add("modal-show");
        document.body.style.overflow = "hidden;"
    }
}


