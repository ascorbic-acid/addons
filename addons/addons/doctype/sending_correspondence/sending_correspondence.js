// Copyright (c) 2017, Ebkar Technology & Management Solutions and contributors
// For license information, please see license.txt

frappe.ui.form.on('Sending Correspondence', {
	refresh: function(frm) {

	},
	delivered_by: function(frm, cdt, cdn){
		if(frm.doc.delivered_by) {
			frappe.call({
			method: 'addons.api.get_emp_info',
			args: {
				employee: frm.doc.delivered_by
			},callback: function(r) {
				frappe.model.set_value(cdt, cdn, "emp_name", r.message.employee_name, "Data")

			}
		}); //end of frappe.call
		}
	},
	before_submit: function(frm, cdt, cdn) {
		frm.toggle_reqd('date_of_sending_document_12', true);
		frm.toggle_reqd('acknowledgement_of_receipt', true);
		frm.toggle_reqd('soft_copy_of_document', true);
		frm.toggle_reqd('hard_copy_document_file', true);
	}
});
