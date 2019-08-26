import Component from '../Component.js';

class PodItem extends Component {
    renderHTML() {
        const pod = this.props.pod;
        console.log(pod);
        return /*html*/`
            <li class="pod-item">
                <div class="info-container">
                    <h2>${pod.name}</h2>
                    <p class="noOfCarts">no. of carts: ${pod.no_of_carts}</p>
                    <p class="seating">seating: ${pod.seating}</p>
                    <p class="location">${pod.location}</p>
                </div>
            </li>
        `;
    }
}

export default PodItem;