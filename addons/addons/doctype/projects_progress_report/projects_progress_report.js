// Copyright (c) 2016, Ebkar Technology & Management Solutions and contributors
// For license information, please see license.txt
// frappe.require("/assets/addons/js/Chart.js");
frappe.require(["/assets/addons/js/jquery.dynatable.js", "/assets/addons/js/Chart.js"], function(){
	
});

var gProgressChart;
var gProgressTable;

frappe.ui.form.on('Projects Progress Report', {
	refresh: function(frm) {
		setTimeout(function() {chart_render();}, 300);
		setTimeout(function() {query_projects()}, 500);
	}
});
function query_projects() {
	// get all projects from server
			frappe.call({
			method: 'addons.addons.doctype.projects_progress_report.projects_progress_report.get_all_projects',
			callback: function(data) {
				console.log(data);
				var records = [];
				for(var obj in data.message) {
					
					if(data.message[obj].status != 'Open') {continue;}
					// projects visual chart build.
					gProgressChart.data.datasets.push(build_chart_dataset(data.message[obj].name,
					 [data.message[obj].percent_complete]));
					 // projects table build.
					 records.push({
						Project: data.message[obj].name,
						Progress: data.message[obj].percent_complete + '%',
						Tasks: data.message[obj].tasks.length,
						Priority: data.message[obj].priority,
						Project_Type: data.message[obj].project_type
					 });
				}
				gProgressChart.update();
				console.log(records);
				build_table(records);
			}
		});
}
function build_table(records){
	gProgressTable = $('#projInfo').dynatable({
  		table: {
    		defaultColumnIdStyle: 'trimDash'
  		},
  		dataset: {
    		records: records
  },
    features: {
    paginate: true,
    search: true,
    recordCount: true,
    perPageSelect: true
  }
});
}
function build_chart_dataset(setLabel, data) {
	var colors = ["rgba(10, 252, 50, 1)", "rgba(66, 229, 202, 1)",
				  "rgba(11, 35, 68, 1)", "rgba(175, 139, 19, 1)", "rgba(0, 0, 0, 1)"]
	var sets = {
		type: 'bar',
			label: setLabel,
			data: data,
				boxWidth: 12,
				backgroundColor: colors[Math.floor(Math.random() * colors.length)],
				borderColor: ['rgba(44,99,132,1)'],
				borderWidth: 1
	}
	return sets;
}
function chart_render(data){
			gProgressChart = new Chart("myChart", {
				type: 'bar',
				data: {
				labels: ['Projects Progress Report'],
				datasets: []
				},
				options: {
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero:true,
								min: 0,
								max: 100,
								stepSize: 5,
							}
						}],
						xAxes: [{barPercentage: 0.2}]
					}
				}
		});
}



















// function chart_render(data){
// 			gProgressChart = new Chart("myChart", {
// 				type: 'bar',
// 				data: {
// 					labels: ["Work PRogress"],
// 					datasets: [{
// 						type: 'bar',
// 						label: 'Work PRogress.',
// 						data: [data],
// 						boxWidth: 12,
// 						backgroundColor: [
// 							'rgba(255, 99, 132, 0.2)'
// 						],
// 						borderColor: [
// 							'rgba(44,99,132,1)'
// 						],
// 						borderWidth: 6
// 					},{
// 						type: 'bar',
// 						label: 'Collapse',
// 						data: [0],
// 						boxWidth: 10
//             },]
// 				},
// 				options: {
// 				    title: {
//             			display: true,
//             			text: 'Ebkar Technology, Work progress Chart'
//         			},
// 					scales: {
// 						yAxes: [{
// 							ticks: {
// 								beginAtZero:true,
// 								min: 0,
// 								max: 100,
// 								stepSize: 5,

// 							}
// 						}],
// 						xAxes: [{
// 							barPercentage: 0.2
// 						}]
// 					}
// 				}
// 		});
// }