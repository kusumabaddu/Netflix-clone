document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion-toggle");

    accordions.forEach(button => {
        button.addEventListener("click", () => {
            const listItem = button.parentElement;
            const icon = button.querySelector("i");
            
            // Toggle the current item's active state
            const isActive = listItem.classList.contains("accordion-item-active");
            
            // Close all open panels first for a clean behavior
            document.querySelectorAll(".accordion li").forEach(item => {
                item.classList.remove("accordion-item-active");
                const itemIcon = item.querySelector(".accordion-toggle i");
                if (itemIcon) {
                    itemIcon.classList.replace("fa-xmark", "fa-plus");
                }
            });

            // If it wasn't active, open it
            if (!isActive) {
                listItem.classList.add("accordion-item-active");
                icon.classList.replace("fa-plus", "fa-xmark");
            }
        });
    });
});
