function load(){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://arsnova.eu/api/statistics/", false);
	xhr.send();

	var json = JSON.parse(xhr.responseText);

	console.log(xhr.status);
	console.log(xhr.statusText);
	console.log(json);
	
	display(json);
}

function display(arr){
	//delete arr.answers;
	//delete arr.activeStudents;
	$(".current").remove();
	for(var key in arr) {
		//arr[key] -> Wert
		//key -> Name
		//var s = key + ": " + arr[key] + "<br>";
		
		
		
		console.log(key);
		console.log(typeof(key));
		var s = "<li class=\"current\" title=\""+key+"\"><span class=\"bar\" data-number=\""+arr[key]+"\"></span><span class=\"number\">"+arr[key]+"</span></li>";
		$(".title").append(s);
		
	}

	$('.chart').horizBarChart({
		selector: '.bar', speed: 0
	});
}

$(document).ready(function() {
    load();
	var interval = setInterval(function(){
		load();
	},30000)
});
