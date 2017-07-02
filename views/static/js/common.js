define(["jquery", "template", "cookie"], function($, template){
	$(function(){
		//判断当前页是不是在登录页面，如果是就不做如下的操作
			if("/dashboard/login" != location.pathname){
				if(!$.cookie("PHPSESSID")){
					// 没登陆时跳转到登陆页让用户登录；
					location.href = "/dashboard/login";
				}else{
					//从cookie中获取登录成功后存储的用户信息
					var userInfo = JSON.parse($.cookie("userinfo"))
	      	var html = template("profile-tpl", userInfo);
		        //将模板渲染到页面中刚才挖坑的地方
	      	$("#userinfo").html(html);
				}    
			} 
 // ------------------退出功能-----------------------------
			$("#logout").click(function(){
				$.ajax({
					url: "/api/logout",
					type: "post",
					success:function(data){
						if(data.code == 200){
							location.href = "/dashboard/login"
						}
					}
				})
			})
//-------------侧边栏li注册点击事件，让被点击的li颜色变暗----------
		//给导航栏所有的li加上点击事件，在点击的时候，让当前背景色变暗
		//点击没有跳转的a的li标签时加上active，让其背景色变暗
			$(".navs>ul>li").click(function(){
				$(this).children("a").addClass('active');
				$(this).siblings('li').children("a").removeClass('active');
			})
			// 给 用a标签的href属性 跳转页面的 li标签 里面的a标签加上active属性 让其所在的li标签的背景色变暗
   		$(".navs a").each(function(i,v){
   			if($(v).attr("href") == location.pathname){
   				$(v).addClass('active');
   				$(v).parent().parent().slideDown();
   			}
   		})
   		// 二级菜单li标签设置
   		$(".navs>ul>li>ul").parent("li").click(function(){
   			// 点击li标签(里面有ul的li标签)，让ul slideToggle;
   			var $ul = $(this).children("ul");
   			$ul.slideToggle();
   			//如果二级菜单里面的a标签有active属性，就把这个一级li标签里面的a标签的active类去掉 
   			if($ul.find("a.active").length > 0){
   				$ul.removeClass('active')
   			}
   		})
   		
  })
})