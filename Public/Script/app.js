function check_name(name){
	if( name == "gabriel"){
		return "win !";
	}else if( name == "clement"){
		return "we find clement !";
	}else{
		var res = "truth !"+ name + "is different from gabriel and clement !";
		return res;
	}
}
$(document).ready(function(){


	alert(check_name("gabriel"));
	
	
		$("#useless").remove();


 
			 $("#jMenu").jMenu();
 
    $("#jMenu").jMenu({
      ulWidth : 'auto',
      effects : {
        effectSpeedOpen : 300,
        effectTypeClose : 'slide'
      },
      animatedText : false
    });
});




});