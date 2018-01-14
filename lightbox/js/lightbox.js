

    function lightBox(id) {
    var lightbox = $(id);
//查找下面的所有figure
    var figures = lightbox.find('figure');
//数组遍历添加索引
    figures.each((index, figure) => {
        $(figure).attr('index', index);
    });
//当前figure的index(焦点)
    var index;

    figures.click(function (ele) {
        lightbox.append("" +
            "<div class='tips'>" +
//把当前图片下面的src属性值放入imgBig的src
            "<img class='imgBig' src=" + $(this).find('img').attr('src') + " alt=''>" +
            "<img class='toPre' src='./img/toPre.png' alt=''>" +
            "<img class='toNext' src='./img/toNext.png' alt=''>" +
            "<img class='close' src='./img/close.png' alt=''>" +
            "<div>" +
            "</div>" +
            "</div>");
//获取当前点击的对象的索引，并赋值给焦点
        index = parseInt($(this).attr('index'));
    });

//删除蒙尘及图片
    lightbox.on("click", ".close", function () {
        $(".tips").remove();
    });

    //左箭头
    lightbox.on("click", ".toPre", function () {
        if (--index < 0) {
            index = figures.length - 1;
        }
//给imgBig的src属性设置为当前figure下的img的src属性
        lightbox.find(".imgBig").attr('src', $(figures[index]).find('img').attr("src"));
    });

    //右箭头
    lightbox.on("click", ".toNext", function () {
        if (++index > figures.length - 1) {
            index = 0;
        }
        lightbox.find(".imgBig").attr('src', $(figures[index]).find('img').attr("src"));
    });

    }







