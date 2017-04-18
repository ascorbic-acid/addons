// Copyright (c) 2017, Ebkar Technology & Management Solutions and contributors
// For license information, please see license.txt

frappe.ui.form.on('Lessons Learned', {
	refresh: function(frm) {

	},
	project_manager: function(frm, cdt, cdn) {
		if(frm.doc.project_manager){
			frappe.call({
				method: 'addons.api.get_emp_info',
				args: {
					employee: frm.doc.project_manager
				},
				callback: function(data) {
					frappe.model.set_value(cdt, cdn, 'project_manager_name', data.message.employee_name, 'Data');
				}
			});
		}
	},
	project_type: function(frm, cdt, cdn) {
		switch(frm.doc.project_type){
			case 'Internal':
				frm.toggle_display('customer', false);
				frm.toggle_reqd('customer', false);
				break;
			case 'External':
				frm.toggle_display('customer', true);
				frm.toggle_reqd('customer', true);
				break
		}
	},
	onload: function(frm){
		frm.toggle_display('customer', false);
	}
});
