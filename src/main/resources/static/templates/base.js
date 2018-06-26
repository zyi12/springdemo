var formList = {};
var dateFormat = "YYYY-MM-DD";
var mytz = "Asia/Manila"

function myMoment(date){
	if(date){
		return moment(date).tz(mytz);
	}else{
		return moment().tz(mytz);
	}
}

function GET(url, callback){
	return ajax("GET", url, null, callback)
}
function DELETE(url, data, callback){
	return ajax("DELETE", url, data, callback)
}
function POST(url, data, callback){
	return ajax("POST", url, data, callback)
}
function PUT(url, data, callback){
	return ajax("PUT", url, data, callback)
}
function ajax(type, url, data, callback){
	var strReturn;
	if(typeof callback == 'function'){
		$.ajax({
			type: type,
		    url: CONTEXT+url,
		    contentType : "application/json",
			data: (data != undefined) ? JSON.stringify(data) : data,
			success: function(data, status, xhr) {
				if(typeof callback == 'function'){
					callback(data)
				}
		    },
		    error: errorHandler
		});
	}else if(callback == true){
		$.ajax({
			type: type,
			url: CONTEXT+url,
		    contentType : "application/json",
		    data: (data != undefined) ? JSON.stringify(data) : data,
			async:false,
			success : function(data) {
				strReturn = data;
			},
			error: errorHandler
		});
	}

	return strReturn;
}

function errorHandler(data){
	if(data.status==500){
		return {
			status : "error",
			message:"Internal server error has occured, all transactions has been rollback. If problem still persist pleae contact your IT admin."
		}
	}else if(data.status==401){
		location.href = JSON.parse(data.responseText).url;
	}else if(data.status==403){
		closeAllConfirmModal();
		toastMessage({
			status : "error",
			message : "Access Denied. You don't access this action!"
		})
	}
}

function toastMessage(data){
	if(data.status == 'success'){
		$.toaster({ priority : "success", title : "Success", message : data.message });
	}else{
		$.toaster({ priority : "danger", title : "Error", message : data.message });
	}

}

function objectifyForm(formArray) {
	var returnArray = {};
  	for (var i = 0; i < formArray.length; i++){
	  returnArray[formArray[i]['name']] = formArray[i]['value'];
  	}
  	return returnArray;
}

const monthNames = [
	"January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December"
];

function getDay(number){
	var day;
	switch (number) {
	case 0:
		day = "SUNDAY";
		break;
	case 1:
		day = "MONDAY";
		break;
	case 2:
		day = "TUESDAY";
		break;
	case 3:
		day = "WEDNESDAY";
		break;
	case 4:
		day = "THURSDAY";
		break;
	case 5:
		day = "FRIDAY";
		break;
	case 6:
		day = "SATURDAY";
		break;
	default:
		day = "INVALID";
		break;
	}
	return day;
}

function getMyForm(form){
	var myForm;
	if(formList[form] != undefined){
		myForm = formList[form];
	}else{
		myForm = GET("/Form/"+form, true);
		formList[form] = myForm
	}
	return myForm;
}

$(document).on("submit", "form", function(e){
	e.preventDefault();
})

function getFormToObject($form){
    var unindexed_array = $("#"+$form).serializeArray();
    var indexed_array = {};
    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });
    return indexed_array;
}