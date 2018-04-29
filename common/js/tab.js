function tabs(tabs, showList) {
    tabs.forEach(myTab => {
        $('.' + myTab).on('click', function () {
            tab(tabs, myTab, showList);
        });
    });
}

function tab(tabList, tab, showList) {
    var tabClass = '.' + tab;
    var tabListClass = tabList.map(myTab => {
        return '.' + myTab;
    });
    var tabListClick = tabList.map(myTab => {
        return myTab + '-click';
    })
    var showList = showList.map(show => {
        return '.' +show;
    })
    toggleClass(tabListClass, tabClass, showList, tabListClick)
}

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