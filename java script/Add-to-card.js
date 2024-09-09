const inputs = document.querySelectorAll("input[name='pics']");

let productView = document.getElementById('image');


inputs.forEach(input => {
    input.addEventListener('change', () => {
        productView.innerHTML = `<img src="images/${input.id}-view.png" alt="front view" class="h-[350px]">`
    })
});