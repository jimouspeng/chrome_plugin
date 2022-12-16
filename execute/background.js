console.log('哈哈哈');

const drinkTimeMap = {
    10: false,
    11: false,
    12: false,
    14: false,
    15: false,
    16: false,
    17: false,
};

function getGlobalTime() {
    return new Date().getHours();
}

// 后台监听事件消息
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    switch (message.type) {
        // 检测是否是扩展开启状态
        case 'drinkdrinkdrink':
            handleDrink(sendResponse);

            break;
        case 'drinkEnd':
            handleDrinkEnd(sendResponse);
    }
});

function handleDrink(callback) {
    console.log(drinkTimeMap, 'hahahahahah');
    const curTime = getGlobalTime();
    let showTips = !drinkTimeMap[curTime];
    callback({ name: 'muyuan', showTips });
}

function handleDrinkEnd(callback) {
    const curTime = getGlobalTime();
    drinkTimeMap[curTime] = true;
    callback({ name: 'muyuan', showTips: false });
}

function setStorage() {
    chrome.storage.local.set('drinkMap', drinkTimeMap);
}

function getStorage() {
    chrome.storage.local.get('drinkMap');
}
