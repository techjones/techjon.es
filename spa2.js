function mybtn(){
      
      document.getElementById("rightbox").innerHTML='<iframe width="99%" name="iss" id="iss" height="250" src="http://www.ustream.tv/embed/9408562?html5ui" scrolling="no" allowfullscreen webkitallowfullscreen frameborder="0" style="border: 0 none transparent;"></iframe>';
      
      
     

}


var e=document.getElementById("mycanny");
var ctx = e.getContext("2d");

bar0=localStorage.blakCount;
bar1=localStorage.redCount;
bar2=localStorage.orangeCount;
bar3=localStorage.grayCount;
bar4=localStorage.greenCount;
bar5=localStorage.yellowCount;
bar6=localStorage.blueCount;
bar7=localStorage.whiteCount;


ctx.moveTo(0,80);
ctx.lineTo(200,80);
ctx.lineWidth=1;
ctx.strokeStyle = '#808080';
ctx.stroke();

ctx.moveTo(0,60);
ctx.lineTo(200,60);
ctx.lineWidth=1;
ctx.strokeStyle = '#808080';
ctx.stroke();

ctx.moveTo(0,40);
ctx.lineTo(200,40);
ctx.lineWidth=1;
ctx.strokeStyle = '#808080';
ctx.stroke();

ctx.moveTo(0,20);
ctx.lineTo(200,20);
ctx.lineWidth=1;
ctx.strokeStyle = '#808080';
ctx.stroke();


ctx.fillStyle = "black";
ctx.fillRect(4,100,19,-bar0);

ctx.fillStyle = "red";
ctx.fillRect(27,100,20,-bar1);

ctx.fillStyle = "orange";
ctx.fillRect(50,100,20,-bar2);

ctx.fillStyle = "gray";
ctx.fillRect(75,100,20,-bar3);

ctx.fillStyle = "green";
ctx.fillRect(100,100,20,-bar4);

ctx.fillStyle = "yellow";
ctx.fillRect(125,100,20,-bar5);

ctx.fillStyle = "blue";
ctx.fillRect(150,100,20,-bar6);

ctx.fillStyle = "white";
ctx.fillRect(175,100,20,-bar7);

function mybtn2(){

document.getElementById("rightbox").innerHTML='<iframe width="99%" height="250" src="https://www.youtube.com/embed/hX3j0sQ7ot8?rel=0" frameborder="0" allowfullscreen></iframe>';
}

function mybtn3(){

document.getElementById("rightbox").innerHTML='<iframe width="99%" height="250" src="https://www.youtube.com/embed/7Ng_KTv9yiM" frameborder="0" allowfullscreen></iframe>';
}

function canv(){var d = document.getElementById("feels");
if(!localStorage.blakCount){localStorage.blakCount=1;}else{localStorage.blakCount=Number(localStorage.blakCount)+1};d.innerHTML=localStorage.blakCount;
var c=document.getElementById("mycanny");
var ctx = c.getContext("2d");
ctx.fillStyle = "black";bar0=localStorage.blakCount;
ctx.fillRect(4,100,19,-bar0);}

function canv1(){var d = document.getElementById("feels");
if(!localStorage.redCount){localStorage.redCount=1;}else{localStorage.redCount=Number(localStorage.redCount)+1};d.innerHTML=localStorage.redCount;
var c=document.getElementById("mycanny");
var ctx = c.getContext("2d");
ctx.fillStyle = "red";bar1=localStorage.redCount;
ctx.fillRect(27,100,20,-bar1);}

function canv2(){var d = document.getElementById("feels");
if(!localStorage.orangeCount){localStorage.orangeCount=1;}else{localStorage.orangeCount=Number(localStorage.orangeCount)+1};d.innerHTML=localStorage.orangeCount;
var c=document.getElementById("mycanny");
var ctx = c.getContext("2d");
ctx.fillStyle = "orange";bar2=localStorage.orangeCount;
ctx.fillRect(50,100,20,-bar2);}

function canv3(){var d = document.getElementById("feels");
if(!localStorage.grayCount){localStorage.grayCount=1;}
else{localStorage.grayCount=Number(localStorage.grayCount)+1};
d.innerHTML=localStorage.grayCount;
var c=document.getElementById("mycanny");
var ctx = c.getContext("2d");
ctx.fillStyle = "gray";bar3=localStorage.grayCount;
ctx.fillRect(75,100,20,-bar3);}

function canv4(){var d = document.getElementById("feels");
if(!localStorage.greenCount){localStorage.greenCount=1;}
else{localStorage.greenCount=Number(localStorage.greenCount)+1};
d.innerHTML=localStorage.greenCount;
var c=document.getElementById("mycanny");
var ctx = c.getContext("2d");
ctx.fillStyle = "green";bar4=localStorage.greenCount;
ctx.fillRect(100,100,20,-bar4);}

function canv5(){var d = document.getElementById("feels");
if(!localStorage.yellowCount){localStorage.yellowCount=1;}
else{localStorage.yellowCount=Number(localStorage.yellowCount)+1};
d.innerHTML=localStorage.yellowCount;
var c=document.getElementById("mycanny");
var ctx = c.getContext("2d");
ctx.fillStyle = "yellow";bar5=localStorage.yellowCount;
ctx.fillRect(125,100,20,-bar5);}

function canv6(){var d = document.getElementById("feels");
if(!localStorage.blueCount){localStorage.blueCount=1;}
else{localStorage.blueCount=Number(localStorage.blueCount)+1};
d.innerHTML=localStorage.blueCount;
var c=document.getElementById("mycanny");
var ctx = c.getContext("2d");
ctx.fillStyle = "blue";bar6=localStorage.blueCount;
ctx.fillRect(150,100,20,-bar6);}

function canv7(){var d = document.getElementById("feels");
if(!localStorage.whiteCount){localStorage.whiteCount=1;}
else{localStorage.whiteCount=Number(localStorage.whiteCount)+1};
d.innerHTML=localStorage.whiteCount;
var c=document.getElementById("mycanny");
var ctx = c.getContext("2d");
ctx.fillStyle = "white";bar7=localStorage.whiteCount;
ctx.fillRect(175,100,20,-bar7);}


function newz4() {
  getRequest(
      'newzviewz.php', // URL 
       drawOutput,  // handle successful request
       drawError    // handle error
  );
  return false;
}  
// handles drawing an error message
function drawError() {
    var container = document.getElementById('top1');
    container.innerHTML = 'Bummer: there was an error!';
}
// handles the response, adds the html
function drawOutput(responseText) {
    var container = document.getElementById('top1');
    container.innerHTML = responseText;
}
// helper function for cross-browser request object
function getRequest(url, success, error) {
    var req = false;
    try{
        // most browsers
        req = new XMLHttpRequest();
    } catch (e){
        // IE
        try{
            req = new ActiveXObject("Msxml2.XMLHTTP");
        } catch(e) {
            // try an older version
            try{
                req = new ActiveXObject("Microsoft.XMLHTTP");
            } catch(e) {
                return false;
            }
        }
    }
    if (!req) return false;
    if (typeof success != 'function') success = function () {};
    if (typeof error!= 'function') error = function () {};
    req.onreadystatechange = function(){
        if(req.readyState == 4) {
            return req.status === 200 ? 
                success(req.responseText) : error(req.status);
        }
    }
    req.open("GET", url, true);
    req.send(null);
    return req;
}
function newz5(){getRequest(
      'seannviewz.php', // URL 
       drawOutput,  // handle successful request
       drawError    // handle error
  );
  return false;
}  
// handles drawing an error message
function drawError() {
    var container = document.getElementById('top1');
    container.innerHTML = 'u broke it!';
}
// handles the response, adds the html
function drawOutput(responseText) {
    var container = document.getElementById('top1');
    container.innerHTML = responseText;
}
// helper function for cross-browser request object
function getRequest(url, success, error) {
    var req = false;
    try{
        // most browsers
        req = new XMLHttpRequest();
    } catch (e){
        // IE
        try{
            req = new ActiveXObject("Msxml2.XMLHTTP");
        } catch(e) {
            // try an older version
            try{
                req = new ActiveXObject("Microsoft.XMLHTTP");
            } catch(e) {
                return false;
            }
        }
    }
    if (!req) return false;
    if (typeof success != 'function') success = function () {};
    if (typeof error!= 'function') error = function () {};
    req.onreadystatechange = function(){
        if(req.readyState == 4) {
            return req.status === 200 ? 
                success(req.responseText) : error(req.status);
        }
    }
    req.open("GET", url, true);
    req.send(null);
    return req;}
 
function newz6(){getRequest(
      'curltest.php', // URL 
       drawOutput,  // handle successful request
       drawError    // handle error
  );
  return false;
}  
// handles drawing an error message
function drawError() {
    var container = document.getElementById('top1');
    container.innerHTML = 'u broke it!';
}
// handles the response, adds the html
function drawOutput(responseText) {
    var container = document.getElementById('top1');
    container.innerHTML = responseText;
}
// helper function for cross-browser request object
function getRequest(url, success, error) {
    var req = false;
    try{
        // most browsers
        req = new XMLHttpRequest();
    } catch (e){
        // IE
        try{
            req = new ActiveXObject("Msxml2.XMLHTTP");
        } catch(e) {
            // try an older version
            try{
                req = new ActiveXObject("Microsoft.XMLHTTP");
            } catch(e) {
                return false;
            }
        }
    }
    if (!req) return false;
    if (typeof success != 'function') success = function () {};
    if (typeof error!= 'function') error = function () {};
    req.onreadystatechange = function(){
        if(req.readyState == 4) {
            return req.status === 200 ? 
                success(req.responseText) : error(req.status);
        }
    }
    req.open("GET", url, true);
    req.send(null);
    return req;}

    

