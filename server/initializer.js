'use strict';
import browserMock from 'mithril/test-utils/browserMock';
import xhr         from 'w3c-xmlhttprequest';

const init = () => {
    browserMock(global);
    global.window.XMLHttpRequest = xhr;   
}

export {
    init
}