// Copyright (c) 2017, Ebkar Technology & Management Solutions and contributors
// For license information, please see license.txt

frappe.ui.form.on('Corrective Action Report', {
	refresh: function(frm) {

	},
	issued_by: function(frm, cdt, cdn) {
		if(frm.doc.issued_by){
			fcall(frm.doc.issued_by, 'name_p1', cdt, cdn)
		}
	},
	investigated_by: function(frm, cdt, cdn) {
		if(frm.doc.investigated_by){
			fcall(frm.doc.investigated_by, 'name_p2', cdt, cdn)
		}
	},
	action_taken_by: function(frm, cdt, cdn){
		if(frm.doc.action_taken_by){
			fcall(frm.doc.action_taken_by, 'name_p3', cdt, cdn);
		}
	},
	action_by_p4: function(frm, cdt, cdn){
		if(frm.doc.action_by_p4){
			fcall(frm.doc.action_by_p4, 'name_p4', cdt, cdn);
		}
	},
	verified_by: function(frm, cdt, cdn){
		if(frm.doc.verified_by){
			fcall(frm.doc.verified_by, 'name_p5', cdt, cdn);
		}
	},
	before_submit: function(frm, cdt, cdn) {
		frm.toggle_reqd('result_p5', true);
		frm.toggle_reqd('verification', true);
	}
});
function fcall (queryField, targetField, cdt, cdn){
	frappe.call({
		method: 'addons.api.get_emp_info',
		args: {
			employee: queryField
		},callback: function(d){
			frappe.model.set_value(cdt, cdn, targetField, d.message.employee_name);
		}
	});
}