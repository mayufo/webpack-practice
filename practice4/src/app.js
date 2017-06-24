import Layer from './components/layer/layer';
import './css/common.css';


const App = () => {
    let dom = document.getElementById('app');
    let layer = new Layer();
    // console.log(layer);
    dom.innerHTML = layer.tpl({
        name: 'may',
        arr: ['apple', 'banana']
    });
};

new App();
