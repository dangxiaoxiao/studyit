/*
* @Author: 申沙沙
* @Date:   2017-07-01 10:36:03
* @Last Modified by:   申沙沙
* @Last Modified time: 2017-07-01 21:26:33
*/

'use strict';
define(["jquery","template","bootstrap"],function($,template){
	// 讲师列表
	$.ajax({
		url:"/api/teacher",
		type:"get",
		success:function(data){
			// console.log(data);
			if(data.code == 200){
				var html = template("teacherList-tpl",data);
				$("#teacher-list").html(html)
			}
		}
	});
// ------------------------查看讲师---------------------------------
	$("#teacher-list").on("click",".look",function(){
		var tc_id = $(this).parent().data("id");
		$.ajax({
			url:"/api/teacher/view",
			type: "get",
			data: {
				tc_id: tc_id
			},
			success:function(data){
				// console.log(data);
				if(data.code == 200){
					var html = template("teacher-modal-tpl",data.result);
					$("#message").html(html);
				}
			}
		})
	});
	// -----------------启用和注销讲师------------------------
	$("#teacher-list").on("click",".onoff",function(){
		var tc_id = $(this).parent().data("id");
		var tc_status = $(this).data("status");
		var $that = $(this);
		$.ajax({
			url:"/api/teacher/handle",
			type:"post",
			data:{
				tc_id:tc_id,
				tc_status:tc_status
			},
			success:function(data){
				// console.log(data);
				if(data.code == 200){
					$that.data("status",data.result.tc_status);  
					if(data.result.tc_status == 1){
						$that.removeClass('btn-warning');
						$that.addClass('btn-success');
						$that.text("启 用");
					}else{
						$that.removeClass("btn-success");
						$that.addClass("btn-warning");
						$that.text("注 销");
					}
				}
			}
		})
	});
})