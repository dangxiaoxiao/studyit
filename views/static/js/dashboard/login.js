/*
* @Author: 申沙沙
* @Date:   2017-06-29 15:59:33
* @Last Modified by:   申沙沙
* @Last Modified time: 2017-06-30 12:55:07
*/

'use strict';
	define(["jquery","form","cookie"],function($){
		$("#form").submit(function() {
    $(this).ajaxSubmit({
        url:"/api/login",
        type:"post",
        success:function(data){
            if(data.code == 200){
                $.cookie("userinfo", JSON.stringify(data.result),{path:"/"});
                location.href = "/";
            }
            console.dir(data);
        }
    	})
    	return false;
		});
	})
 