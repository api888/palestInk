function watermark() {
    let allMark = document.getElementsByClassName("mark_div");
    if (allMark) {
        for (let i = allMark.length - 1; i >= 0; i--) {
            if (allMark[i] != null) {
                allMark[i].parentNode.removeChild(allMark[i]);
            }

        }
    }
    var maxWidth = document.body.clientWidth;
    var maxHeight = document.body.clientHeight;
    var intervalWidth = 150;    //间隔宽度
    var intervalheight = 120;   //间隔高度
    var rowNumber = maxWidth / intervalWidth;    //横向个数
    var coumnNumber = maxHeight / intervalheight;   //纵向个数

    //默认设置
    var defaultSettings = {
        watermark_color: '#aaa', //水印字体颜色
        watermark_alpha: 0.3, //水印透明度
        watermark_fontsize: '15px', //水印字体大小
        watermark_font: '微软雅黑', //水印字体
        watermark_width: 150, //水印宽度
        // watermark_height: 80, //水印长度
        watermark_angle: 15 //水印倾斜度数
    };

    var _temp = document.createDocumentFragment();
    for (var i = 0; i < rowNumber; i++) {
        for (var j = 0; j < coumnNumber; j++) {
            var x = intervalWidth * i + 20;
            var y = intervalheight * j + 30;
            var mark_div = document.createElement('div');
            mark_div.id = 'mark_div' + i + j;
            mark_div.className = 'mark_div';
            var span0 = document.createElement('div');
            span0.appendChild(document.createTextNode('api888 | hbb'));
            mark_div.appendChild(span0);
            //设置水印div倾斜显示
            mark_div.style.webkitTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mark_div.style.MozTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mark_div.style.msTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mark_div.style.OTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mark_div.style.transform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mark_div.style.visibility = "";
            mark_div.style.position = "fixed";
            mark_div.style.left = x + 'px';
            mark_div.style.top = y + 'px';
            mark_div.style.overflow = "hidden";
            mark_div.style.zIndex = "9999";
            mark_div.style.pointerEvents = 'none'; //pointer-events:none  让水印不阻止交互事件
            mark_div.style.opacity = defaultSettings.watermark_alpha;
            mark_div.style.fontSize = defaultSettings.watermark_fontsize;
            mark_div.style.fontFamily = defaultSettings.watermark_font;
            mark_div.style.color = defaultSettings.watermark_color;
            mark_div.style.textAlign = "center";
            mark_div.style.width = defaultSettings.watermark_width + 'px';
            mark_div.style.height = defaultSettings.watermark_height + 'px';
            mark_div.style.display = "block";

            _temp.appendChild(mark_div);
        }
    }
    document.body.appendChild(_temp);
}
const debounce = (fn, delay) => {
    let timer;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn();
        }, delay);
    }
};
const cancalDebounce = debounce(watermark, 500);

window.addEventListener('resize', cancalDebounce);
watermark();
