import getData from "./getData"
import renderGoods from "./renderGoods"
import { priceFilter } from './filters'

const filter = () => {
    const minInput = document.getElementById('min')
    const maxInput = document.getElementById('max')
    const checkboxInput = document.getElementById('discount-checkbox')
    const checkboxSpan = document.querySelector('.filter-check_checkmark')

    minInput.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(priceFilter(data, minInput.value, maxInput.value));
        })
    })

    maxInput.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(priceFilter(data, minInput.value, maxInput.value));
        })
    })

    checkboxInput.addEventListener('change', () => {
        console.log('Change!');
        console.log(checkboxInput.checked);
        if (checkboxInput.checked) {

        } else {

        }
    })
}

export default filter
