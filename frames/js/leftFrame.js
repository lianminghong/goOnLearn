function btnFun(){
    var inputChoice = document.getElementById('choice');
    var alinks = document.getElementById('links');
    alinks.href = '#'+inputChoice.value;
    alinks.click();
}