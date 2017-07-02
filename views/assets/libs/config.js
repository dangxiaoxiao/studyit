/*
* @Author: 申沙沙
* @Date:   2017-06-29 16:05:19
* @Last Modified by:   申沙沙
* @Last Modified time: 2017-07-02 10:13:50
*/

	require.config({
		baseUrl:"/views",
		paths:{
			"jquery": "assets/jquery/jquery.min",
			"form": "assets/jquery-form/jquery.form",
			"cookie": "assets/jquery-cookie/jquery.cookie",
			"template": "assets/artTemplate/template",
			"bootstrap": "assets/bootstrap/js/bootstrap.min",
			"util": 'assets/libs/util',
			"datepicker": "assets/bootstrap-datepicker/js/bootstrap-datepicker.main"
		},
		// shim: {
  //    	"bootstrap": {
  //    		deps: ["jquery"]
  //    	}
  //  	}
  shim:{
  	"bootstrap": {
  		deps: ["jquery"]
  	}
  }
	})
