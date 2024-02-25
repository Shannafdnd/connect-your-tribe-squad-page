const textbox = document.querySelector(".text-box");

let current_card = null;

document.querySelectorAll(".person").forEach((li) => {
    li.addEventListener("mouseenter", () => {
        current_card?.setAttribute("hidden", "");

        const id = "card." + li.id.substring(7);
        document.getElementById(id).removeAttribute("hidden");
        textbox.setAttribute("hidden", "");
    })

    li.addEventListener("mouseleave", () => {
        const id = "card." + li.id.substring(7);
        if (current_card == null || current_card.id != id) {
            document.getElementById(id).setAttribute("hidden", "");
        }
        current_card?.removeAttribute("hidden");
    })

    li.addEventListener("click", () => {
        console.log(current_card, li)
        const id = "card." + li.id.substring(7);
        current_card = document.getElementById(id);
    })
})