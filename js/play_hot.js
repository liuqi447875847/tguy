$('.nav').find('a').on('click',function(){
  $('.nav').find('a').removeClass('light')
  $(this).addClass('light')
})
if(window.XMLHttpRequest){
  var ajax_ = new XMLHttpRequest();
}
else{
  var ajax_ = new ActiveXObject('Microsoft.XMLHTTP');
}
ajax_.open('get', 'http://192.168.1.64:3000/play/hot', true);
ajax_.send();
ajax_.onreadystatechange = function () {
    if (ajax_.readyState == 4 && ajax_.status == 200){
        var data = ajax_.responseText;
        /* 4.数据 */
        data = JSON.parse(data);
        console.log(data);

        var dot_tem = doT.template(document.getElementById('list_template').innerText);
        list.innerHTML = dot_tem(data[0]);
    }
}