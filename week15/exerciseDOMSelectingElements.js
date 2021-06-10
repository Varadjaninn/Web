function getSecondUl() {
    var secondUl = document.getElementById('second');
    return secondUl.className = 'red_backround'
};
getSecondUl();


function allLi() {
    var allLi = document.querySelectorAll('ul li');
    
    allLi.forEach(function(element) {
         element.className = 'yellow_backround';
    });
    
    return allLi;
};
allLi();


function thirdList() {
    var thirdList = document.getElementById('third');
    var thirdListChildren = thirdList.childNodes;

    thirdListChildren.forEach(function(element) {
        element.className = 'blue_backround';
        element.textContent = element.textContent.toUpperCase();
    });

    return thirdList;
}
thirdList();