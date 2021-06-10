function getActiveLi() {
   var activeLi = document.querySelector('.active');
   activeLi.classList.remove('active')
};
getActiveLi();


function firstChildFirstLi() {
    var firstUl = document.querySelector('div ul');
    var firstElfirstCh = firstUl.firstElementChild;

    firstElfirstCh.classList.add('active')
}
firstChildFirstLi();