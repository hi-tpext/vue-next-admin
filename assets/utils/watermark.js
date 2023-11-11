// 页面添加水印效果
var setWatermark = function (str) {
    var id = '1.23452384164.123412416';
    if (document.getElementById(id) !== null)
        document.body.removeChild(document.getElementById(id));
    var can = document.createElement('canvas');
    can.width = 200;
    can.height = 130;
    var cans = can.getContext('2d');
    cans.rotate((-20 * Math.PI) / 180);
    cans.font = '12px Vedana';
    cans.fillStyle = 'rgba(200, 200, 200, 0.30)';
    cans.textBaseline = 'middle';
    cans.fillText(str, can.width / 10, can.height / 2);
    var div = document.createElement('div');
    div.id = id;
    div.style.pointerEvents = 'none';
    div.style.top = '0px';
    div.style.left = '0px';
    div.style.position = 'fixed';
    div.style.zIndex = '10000000';
    div.style.width = "".concat(document.documentElement.clientWidth, "px");
    div.style.height = "".concat(document.documentElement.clientHeight, "px");
    div.style.background = "url(".concat(can.toDataURL('image/png'), ") left top repeat");
    document.body.appendChild(div);
    return id;
};
/**
 * 页面添加水印效果
 * @method set 设置水印
 * @method del 删除水印
 */
// 导出方法
window.watermark = {
    // 设置水印
    set: function (str) {
        var id = setWatermark(str);
        if (document.getElementById(id) === null)
            id = setWatermark(str);
    },
    // 删除水印
    del: function () {
        var id = '1.23452384164.123412416';
        if (document.getElementById(id) !== null)
            document.body.removeChild(document.getElementById(id));
    },
};
