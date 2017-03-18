// Copyright (c) 2016, Ebkar Technology & Management Solutions and contributors
// For license information, please see license.txt

$('body').ready(function(){
		setTimeout(doctype_ready, 200);
});

function doctype_ready(){
	$("#cu_input_rows_make").click(function(event) {
		var rows_num = $("#cu_input_rows").val();
		var row_btn = $(".btn.btn-xs.btn-default.grid-add-row");

		for(var i = 0;i < rows_num;i++) {
			row_btn[0].click();
			
		}
	});
}
frappe.ui.form.on('test doctype', {
	refresh: function(frm) {

	},
	buttona: function(frm) {
		let rowbtn = document.getElementsByClassName('grid-add-row');
		// if(rowbtn.length == 1) {
		// 		rowbtn[0].click();
		// 		rowbtn[0].click();
		// 		rowbtn[0].click();
		// 		rowbtn[0].click();
		// 		rowbtn[0].click();
		// 		rowbtn[0].click();
		// 		rowbtn[0].click();
		// }
		frappe.call({
			method: "addons.addons.doctype.test_doctype.test_doctype.get_data",
			args: {
				params: 'imad'
			},
			callback: function(res) {
				console.log(res.message);
			}
		})
	}

});