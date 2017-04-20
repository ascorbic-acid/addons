// Copyright (c) 2017, Ebkar Technology & Management Solutions and contributors
// For license information, please see license.txt

frappe.ui.form.on('Travel Justification', {
	refresh: function(frm) {

	},
		employee: function(frm, cdt, cdn) {
		if(frm.doc.employee) {
			frappe.call({
			method: 'addons.api.get_emp_info',
			args: {
				employee: frm.doc.employee
			},callback: function(r) {
				frappe.model.set_value(cdt, cdn, "emp_name", r.message.employee_name, "Link")
				frappe.model.set_value(cdt, cdn, "designation", r.message.designation, "Link")
				frappe.model.set_value(cdt, cdn, "department", r.message.department, "Link")
				frappe.model.set_value(cdt, cdn, "branch", r.message.branch, "Link")

			}
		}); //end of frappe.call
		}
	},
	before_submit: function(frm) {
		frm.toggle_reqd('total_cost_of_travel', true);
		frm.toggle_reqd('travel_costs', true);
	}
});
