const selectBtns = document.querySelectorAll(".select-btn"),
      items = document.querySelectorAll(".item");



selectBtns.forEach(selectBtn => {
    selectBtn.addEventListener("click", () => {
        selectBtn.classList.toggle("open");
    });
})

items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
    });
})