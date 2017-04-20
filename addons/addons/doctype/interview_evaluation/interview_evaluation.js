// Copyright (c) 2017, Ebkar Technology & Management Solutions and contributors
// For license information, please see license.txt

frappe.ui.form.on('Interview Evaluation', {
	refresh: function(frm) {

	},
	interviewer__1: function(frm, cdt, cdn) {
		if(frm.doc.interviewer__1){
			frappe.call({
				method: 'addons.api.get_emp_info',
				args: { 
					employee: frm.doc.interviewer__1
				},
				callback: function(d) {
					frappe.model.set_value(cdt, cdn, "int_name1", d.message.employee_name, "Data");
				}
			})
		}
	},
	interviewer__2: function(frm, cdt, cdn) {
		if(frm.doc.interviewer__2){
			frappe.call({
				method: 'addons.api.get_emp_info',
				args: { 
					employee: frm.doc.interviewer__2
				},
				callback: function(d) {
					frappe.model.set_value(cdt, cdn, "int_name2", d.message.employee_name, "Data");
				}
			})
		}
	},
	interviewer__3: function(frm, cdt, cdn) {
		if(frm.doc.interviewer__3){
			frappe.call({
				method: 'addons.api.get_emp_info',
				args: { 
					employee: frm.doc.interviewer__3
				},
				callback: function(d) {
					frappe.model.set_value(cdt, cdn, "int_name3", d.message.employee_name, "Data");
				}
			})
		}
	},
	before_submit: function(frm){
		frm.toggle_reqd('is_recommended_applicant', true);
	}
});
