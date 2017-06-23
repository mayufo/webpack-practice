// let tpl = require('./layer.ejs');
import tpl from './layer.ejs';
import './layer.less';
import './modal.less';
import './tooltip.scss';

function layer() {
    return {
        name: 'layer',
        tpl: tpl
    };
}

export default layer;