// Copyright (c) 2017, Ebkar Technology & Management Solutions and contributors
// For license information, please see license.txt

frappe.ui.form.on('Custody Returning', {
	refresh: function(frm) {
		setTimeout(function() {
		var rows_count = 3;
		var target_row = $('button.grid-add-row');
		
		for(var i = 0; i <= rows_count;i++){
			target_row.click();
			console.log(i)
		}
		}, 200);
	},
	employee: function(frm, cdt, cdn) {
		frappe.call({
			method: 'addons.api.get_emp_info',
			args: {
				employee: frm.doc.employee
			},callback: function(r) {
				frappe.model.set_value(cdt, cdn, "designation", r.message.designation, "Link")
				frappe.model.set_value(cdt, cdn, "department", r.message.department, "Link")
				frappe.model.set_value(cdt, cdn, "branch", r.message.branch, "Link")

			}
		}); //end of frappe.call
	}
});
