import Component from '../Component.js';
import Header from './Header.js';

class PodFormApp extends Component {
    onRender(dom) {
        const header = new Header({ title: 'Add a Pod' });
        dom.prepend(header.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <div>
                <main>
                    <p>Pod Form Page</p>
                </main>
            </div>
        `;
    }
}

export default PodFormApp;