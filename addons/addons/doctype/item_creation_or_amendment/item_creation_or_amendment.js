// Copyright (c) 2017, Ebkar Technology & Management Solutions and contributors
// For license information, please see license.txt

frappe.ui.form.on('Item Creation or Amendment', {
	refresh: function(frm) {
frm.toggle_display('section_break_7', false);
			frm.toggle_display('section_break_9', false);
			frm.toggle_display('section_break_11', false);
	},
	requested_by: function (frm, cdt, cdn){
		if(frm.doc.requested_by){
			frappe.call({
				method: 'addons.api.get_emp_info',
				args: {
					employee: frm.doc.requested_by
				},callback: function(data) {
					frappe.model.set_value(cdt, cdn, "name1", data.message.employee_name, 'Data');
					frappe.model.set_value(cdt, cdn, "department", data.message.department, 'Data');
					frappe.model.set_value(cdt, cdn, "designation", data.message.designation, 'Data');
				}
			})	
		}
	},
	
	request_type: function(frm, cdt, cdn) {
		if(frm.doc.request_type === ''){
			frm.toggle_display('section_break_7', false);
			frm.toggle_display('section_break_9', false);
			frm.toggle_display('section_break_11', false);
			
		}
		else if (frm.doc.request_type === 'Create new item'){
			frm.toggle_display('section_break_7', true);
			frm.toggle_display('section_break_9', false);
			frm.toggle_display('section_break_11', false);
		}
		else if(frm.doc.request_type ==="Change existing item"){
			frm.toggle_display('section_break_9', true);
			frm.toggle_display('section_break_7', false);
			frm.toggle_display('section_break_11', false);
		}
		else if (frm.doc.request_type ==="Disable item"){
			frm.toggle_display('section_break_11', true);
			frm.toggle_display('section_break_7', false);
			frm.toggle_display('section_break_9', false);
		}
	}
});
