var ajaxUtil ={
    getAjax : function(method,url,data,callBackOK,callBackFail,returnType){

        var req = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");

        if(method == "get" || method =="GET"){
            req.open(method,url+"?"+data,true);
            req.send(null);
        }else{
            req.open(method,url,true);
            req.send(data);
        }

        req.onreadystatechange = function(){
            if(req.readyState == 4 && req.status ==200){
                var reqText = "";
                if(returnType == "json"){
                    reqText = req.responseText;
                }else{
                    reqText = req.responseXML;
                }
                callBackOK(reqText);
            }

            if(req.readyState == 4 && (req.status ==404|| req.status==500)){
                callBackFail();
            }

        }
    }
}