import html from "../core.js";
import { connect } from "../store.js";

const connector = connect();

function App({ cars }){
    let test = html`
    <ul>
        ${cars.map(car => `<li>${car}</li> `)}
    </ul>

    <button onclick = "dispatch('add','Tesla')"> Add Car </button>
`
console.log({test})

    return test
}

export default connector(App)