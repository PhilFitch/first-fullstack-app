import Component from '../Component.js';
import Header from './Header.js';
import PodList from '../cart-pods/PodList.js';
import { getPods } from '../../services/cart-pods-api.js';

class PodListApp extends Component {

    onRender(dom) {
        const header = new Header({ title: 'List of Cart Pods' });
        dom.prepend(header.renderDOM());

        const list = new PodList({ pods: [] });
        const main = dom.querySelector('main');
        main.appendChild(list.renderDOM());

        getPods().then(pods => {
            list.update({ pods });
        });
    }

    renderHTML() {
        return /*html*/`
            <div>
                <main></main>
            </div>
        `;
    }
}

export default PodListApp;