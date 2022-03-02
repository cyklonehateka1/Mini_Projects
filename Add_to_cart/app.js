const cart = document.querySelector('.cart');
const cartField = document.querySelector('.cart-field');
const add = document.getElementsByClassName('add');

for (let but of add) {
    but.onclick = e=> {
        let item = Number(cart.getAttribute('data-count') || 0);
        cart.setAttribute('data-count', item + 1);
        cart.classList.add('on');

        // image animated to cart
        let parent = e.target.parentNode.parentNode.parentNode;
        let image = parent.querySelector('img');
        let span = document.createElement('span');
        span.className = 'image-carior';
        parent.insertBefore(span, parent.lastElementChild);

        let s_image = image.cloneNode(false);
        span.appendChild(s_image);
        span.classList.add('active');
        setTimeout(() => {
            span.classList.remove('active')
            span.removeChild(s_image);
        }, 500)

        let clone = parent.cloneNode(true);
        clone.querySelector('.add').style.display = "none";
        clone.querySelector('.add').removeAttribute('class')
        cartField.appendChild(clone)

        if (clone) {
            cart.onclick = () => {
                cartField.classList.toggle('display');
            }
        }
    }
}
