import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        const title = this.props.title || 'Portland Cart Pods';

        return /*html*/`
            <header>
                <h1>${title}<h1>
                <nav>
                    <a href="./">Home</a>
                    <a href="./pod-list.html">Cart Pods</a>
                    <a href="./pod-form.html">Add a Pod</a>
                </nav>
            </header>
        `;
    }
}

export default Header;