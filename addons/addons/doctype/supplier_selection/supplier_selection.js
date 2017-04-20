// Copyright (c) 2017, Ebkar Technology & Management Solutions and contributors
// For license information, please see license.txt

frappe.ui.form.on('Supplier Selection', {
	refresh: function(frm) {

	},
	before_submit: function(frm, cdt, cdn) {
		frm.toggle_reqd('final_result_123', true);
	}
});
