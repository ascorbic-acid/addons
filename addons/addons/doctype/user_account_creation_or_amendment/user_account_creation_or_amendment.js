// Copyright (c) 2017, Ebkar Technology & Management Solutions and contributors
// For license information, please see license.txt

frappe.ui.form.on('User Account Creation or Amendment', {
	refresh: function(frm) {

	},
	report_to: function(frm, cdt, cdn) {
		if(frm.doc.report_to) {
			frappe.call({
				method: 'addons.api.get_emp_info',
				args: {
					employee: frm.doc.report_to
				},
				callback: function(d) {
					frappe.model.set_value(cdt, cdn, "emp_name", d.message.employee_name, "Data")
				}
			});
		}
	}
});
