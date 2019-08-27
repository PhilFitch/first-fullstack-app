import Component from '../Component.js';
import PodItem from './PodItem.js';

class PodList extends Component {

    onRender(dom) {
        const pods = this.props.pods;

        pods.forEach(pod => {
            const props = { pod: pod };
            const podItem = new PodItem(props);
            const podItemDOM = podItem.renderDOM();
            dom.appendChild(podItemDOM);
        });
    }

    renderHTML() {
        return /*html*/`
            <ul class="pods"></ul>
        `;
    }
}

export default PodList;