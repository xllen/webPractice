//菜单栏
function fun(obj){
    var target = document.getElementById(obj);
    var list = document.getElementById("list");
    var mb = document.getElementById("mb");
    var ps = list.getElementsByTagName("p");
    var lis = mb.getElementsByTagName("li");
    for(var i = 0; i < ps.length;i++){
        ps[i].index = i;
        ps[i].onmouseover = function(){
            mb.style.display = "block";
            for(var j = 0; j<ps.length; j++){
                ps[j].className = "";
                lis[j].className = "";
            }
            ps[this.index].className="active";
            lis[this.index].className = "show"
        }
    }
    target.onmouseleave =function(){
        for(var j = 0; j<ps.length; j++){
            ps[j].className = "";
            lis[j].className = "";
        }
        mb.style.display = "none";
    }
}
fun("nav");