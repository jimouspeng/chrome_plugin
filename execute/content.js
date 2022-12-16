console.log('哈哈哈');

chrome.runtime.sendMessage({ type: 'drinkdrinkdrink' }, (response) => {
    if (response && response.hasOwnProperty('runtime')) {
        if (response.runtime) {
            console.log('send message success!', response.name);
            response.showTips && window.alert('记得喝水哦');
        }
    }
});

sendMsg('drinkdrinkdrink', callBack);

function sendMsg(type, callback) {
    chrome.runtime.sendMessage({ type }, (response) => {
        callback(response);
    });
}

function callBack(response) {
    console.log(response, '99999999999999');
    response.showTips && window.alert('记得喝水哦');
}

function drinkToast() {
    window.alert('记得喝水哦');
    drinkEnd();
}

function drinkEnd() {
    sendMsg('drinkEnd');
}
