function fun(obj){
    var target = document.getElementById(obj);
    var list = document.getElementById("list");
    var mb = document.getElementById("mb");
    var ps = list.getElementsByTagName("p");
    var lis = mb.getElementsByTagName("li");
    var spans = mb.getElementsByTagName("span");
    var list3 = document.getElementById("list3");
    var liss = list3.getElementsByTagName("li");
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
    for(var x = 0;x < spans.length;x++){
        spans[x].index = x;
        spans[x].onclick = function(){
            list3.style.display = "block";
            for(var y = 0; y<spans.length; y++){
                spans[y].className = "";
                liss[y].className = "";
            }
            liss[this.index].className ="show";
        }
    }
    mb.onmouseleave =function(){
        list3.style.display = "none";
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