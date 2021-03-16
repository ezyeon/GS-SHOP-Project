// Header JAVA Script
    // Header Mouseover
    function gnbSubMenuOpen() {
        document.getElementsByClassName('wrap')[0].style = 
        "height: 360px; transition: all 0.5s";
    }
    function gnbSubMenuClose() {
        document.getElementsByClassName('wrap')[0].style = 
        "height: 0px;  transition: all 0.5s";
    }
    // nav에 mouse over했을 때 border-bottom 생성
    function borderBottom(target) {
        document.getElementsByClassName('greenbottom')[target].style = "border-bottom: 3px solid rgb(191, 215, 21);";
    }
    function borderBottomNone(target) {
        document.getElementsByClassName('greenbottom')[target].style = "border-bottom: 3px solid rgb(255, 255, 255);";
    }
        
    // 페이지 영문으로 바꿀때 click event
    var openState = false;
    function languageChange() {

        if (openState) {
            document.getElementsByClassName('language')[0].style = "height: 36px; border-radius: 32px;";
            document.getElementsByClassName('lang_img')[0].style = "transform:rotate(0deg);";
            openState = false;
        }
        else {
            document.getElementsByClassName('language')[0].style = "height: 60px; border-radius: 17px;";
            document.getElementsByClassName('lang_img')[0].style = "transform:rotate(180deg);";
            openState = true;
        }
    }


// Main JAVA Script
    // subpage menu click event
    var openSubMenu = false;
    function csrOpen() {
        if (openSubMenu) {
            document.getElementsByClassName('subpg_menu')[0].style = "height: 16px; overflow: hidden; transition: all 0.5s;";
            document.getElementsByClassName('subpg_csr_img')[0].style = "transform:rotate(0deg);";
            openSubMenu = false;
        }
        else {
            document.getElementsByClassName('subpg_menu')[0].style = "height: 300px; overflow:none; transition: all 0.5s;";
            document.getElementsByClassName('subpg_csr_img')[0].style = "transform:rotate(180deg);";
            openSubMenu = true;
        }
    }

    // SNS link click event
    var openSnsLink = false;
    function snsOpen() {
        if (openSnsLink) {
            document.getElementsByClassName('subpg_shr')[0].style = "height: 22px; overflow: hidden; transition: height 0.5s;";
            openSnsLink = false;
        }
        else {
            document.getElementsByClassName('subpg_shr')[0].style = "height: 350px; overflow: visible; transition: height 0.5s;";
            openSnsLink = true;
        }
    }

 
// Footer JAVA Script
    // Familysite POP UP event












