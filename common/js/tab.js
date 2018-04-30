/**
 * 为所有tab添加点击事件
 * @param {所有tab} tabs 
 * @param {要显示的所有界面} showList 
 */
function tabs(tabs, showList) {
    // 遍历所有tab
    tabs.forEach(myTab => {
        // 添加点击事件
        $('.' + myTab).on('click', function () {
            tab(tabs, myTab, showList);
        });
    });
}

/**
 * 处理数据使之变成class
 * @param {所有tab} tabList 
 * @param {当前tab} tab 
 * @param {要显示的所有界面} showList
 */
function tab(tabList, tab, showList) {
    // 当前tab的class
    var tabClass = '.' + tab;
    // 所有tab的class
    var tabListClass = tabList.map(myTab => {
        return '.' + myTab;
    });
    // 点击tab的class
    var tabListClick = tabList.map(myTab => {
        return myTab + '-click';
    })
    // 显示界面的class
    var showList = showList.map(show => {
        return '.' + show;
    })
    toggleClass(tabListClass, tabClass, showList, tabListClick)
}

/**
 * 控制tab的显示/隐藏
 * @param {所有tab的class} tabListClass 
 * @param {当前tab的class} tabClass 
 * @param {要显示的所有界面} showList 
 * @param {tab点击样式} tabListClick 
 */
function toggleClass(tabListClass, tabClass, showList, tabListClick) {
    tabListClass.forEach((tab, index) => {
        if (tab === tabClass) {
            $(tab).addClass(tabListClick[index]);
            $(showList[index]).show();
        } else {
            $(tab).removeClass(tabListClick[index]);
            $(showList[index]).hide();
        }
    });
}

/**
 * 渲染数据
 * @param {标题名称} titles 
 * @param {显示列表} showItems 
 */
function show(titles, showItems, id) {
    var keys = [];
    for (var k in titles) {
        keys.push(k);
    }
    keys.forEach(k => {
        $('.prop-list #'+ id +' .titles > .' + k).text(titles[k]);
    })
    showItems.forEach(showItem => {
        createItem(id);
        keys.forEach(k => {
            if (k === 'img') {
                showItem[k] = '<img src=' + showItem[k] + '>';
            }
            $('.prop-list #' + id + ' .prop-item > .' + k + ':last').html(showItem[k]);
        })
    })
}

/**
 * 生成HTML
 * @param {ul的id} id 
 */
function createItem(id) {
    var item = `
        <li class="prop-item">
            <span class="img">
                <img src="../images/backpack/12.gif">
            </span>
            <span class="name">神圣礼包</span>
            <span class="price">999</span>
            <span class="num">100</span>
        </li>
    `;
    $('#' + id).append(item);
}