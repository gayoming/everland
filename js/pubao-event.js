$(document).ready(function(){
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('menu-on');
        $('.tab-content').removeClass('current');

        $(this).addClass('menu-on');
        $("#"+tab_id).addClass('current');
    });

    var content = `GOOD BYE,\n\nPUBAO`;
    const text = document.querySelector('.text');

    let index = 0;

    function typing() {
        text.textContent += content[index++];
        if (index > content.length) {
            text.textContent = "";
            index = 0;
        };
    };
    var sss = setInterval(typing, 500);


    let num = 0;
    slider();
    setInterval(slider, 2000);

    function slider() {
        let imgList = document.querySelectorAll('.move');
        for (let i = 0; i < imgList.length; i++) {
            imgList[i].style.display = 'none';
        };
        num++;
        if (num > imgList.length) { num = 1 };
        imgList[num - 1].style.display = 'block';
    };
});

