'use strict'
function loadAjaxContent(_u, _id){
    $.ajax({
        url: _u,
        method: 'GET',
        success: function(res){
            $(_id).html(res);
        }
    })
}

function ajaxContent(val) {
    if($(val) != null) {
        loadAjaxContent($(val).attr('data-url'), val)
    }
}

$(document).ready(function(){
    loadAjaxContent("http://127.0.0.1:5500/my-website/imcmjha.github.io/Assets/snippets/aside-navigation.html", "#asideNavigation");
});