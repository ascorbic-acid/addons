// Copyright (c) 2017, Ebkar Technology & Management Solutions and contributors
// For license information, please see license.txt

frappe.ui.form.on('Project Charter', {
		before_submit: function(frm, cdt, cdn){
		
		if(frm.doc.assigned_project_manager){
			frappe.call({
				method: 'addons.api.get_emp_info',
				args: {
					employee: frm.doc.assigned_project_manager
				},callback: function(data) {
					frappe.model.set_value(cdt, cdn, "apm_name", data.message.employee_name);
				}
			});
		}
	},
	refresh: function(frm) {

	},
	mem1: function(frm, cdt, cdn) {
		if(frm.doc.mem1){
			frappe.call({
				method: 'addons.api.get_emp_info',
				args: {
					employee: frm.doc.mem1
				},
				callback: function(data) {
					frappe.model.set_value(cdt, cdn, 'mem_n1', data.message.employee_name);
				}
			});
		}
	},
	mem2: function(frm, cdt, cdn) {
		if(frm.doc.mem2){
			frappe.call({
				method: 'addons.api.get_emp_info',
				args: {
					employee: frm.doc.mem2
				},
				callback: function(data) {
					frappe.model.set_value(cdt, cdn, 'mem_n2', data.message.employee_name);
				}
			});
		}
	},
	mem3: function(frm, cdt, cdn) {
		if(frm.doc.mem3){
			frappe.call({
				method: 'addons.api.get_emp_info',
				args: {
					employee: frm.doc.mem3
				},
				callback: function(data) {
					frappe.model.set_value(cdt, cdn, 'mem_n3', data.message.employee_name);
				}
			});
		}
	}

});