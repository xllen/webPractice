var times = null; //声明定时器
var box = document.getElementById("box");
var screen = box.children[0];
var ul = screen.children[0];
var ol = screen.children[1];
var ulList = ul.children;
var arr = document.getElementById("arr");
var left = document.getElementById("left");
var right = document.getElementById("right");

//获取bannar宽度

var imgW = screen.offsetWidth;
var imgIndex = 0;
var seqare = 0;

//根据图片数量生成小圆点数量
console.log(ulList.length);
for(var i = 0;i < ulList.length; i++){
    //创建li
    var li = document.createElement("li");
    ol.appendChild(li);
    li.innerHTML = i+1;
}

//获取ol中的所有li

var olList = ol.children;
olList[0].className = "current";

//克隆第一张到最后
var firstImg = ulList[0].cloneNode(true);
console.log(firstImg);
ul.appendChild(firstImg);
for(var i = 0; i<olList.length;i++){
    olList[i].index = i;
    olList[i].onmouseover = function(){
        for(var j = 0; j < olList.length;j++){
            olList[j].className ="";
        }
        this.className = "current";
        var target = -this.index * imgW;
        animate(ul,target);
        seqare = this.index;
        imgIndex = this.index;
    }
}
//显示左右箭头
box.onmouseover = function () {
    arr.style.display = "block";
    clearInterval(times);
};
box.onmouseout = function () {
    arr.style.display = "none";
    times = setInterval(right.onclick,1000);
};
right.onclick = function(){
    if(imgIndex == ulList.length-1){
        ul.style.left = 0 +"px";
        imgIndex = 0;
    }
    imgIndex++;
    var target = -imgIndex*imgW;
    animate(ul,target);
    if(seqare < olList.length - 1){
        seqare++;
    }else{
        seqare = 0;
    }
    for(var i = 0; i < olList.length;i++){
        olList[i].className ="";
    }
    olList[seqare].className = "current";
};
times = setInterval(right.onclick,1000);
left.onclick = function(){
    if(imgIndex == 0){
        ul.style.left = -(ulList.length - 1) * imgW +"px";
        imgIndex = ulList.length - 1;
    }
    imgIndex--;
    var target = -imgIndex*imgW;
    animate(ul,target);
    if(seqare > 0){
        seqare--;
    }else{
        seqare =  olList.length - 1;
    }
    for(var i = 0; i < olList.length;i++){
        olList[i].className = "";
    }
    olList[seqare].className = "current";
};
//运动动画

function animate(obj,target){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var leader = obj.offsetLeft; //获取当前位置
        var step = 30;
        step = leader < target ? step : -step;
        if(Math.abs(leader-target) >= Math.abs(step)){
            leader = leader + step;
            obj.style.left = leader +"px";
        }else{
            obj.style.left = target + "px";
            clearInterval(obj.timer);
        }
    },15);
}