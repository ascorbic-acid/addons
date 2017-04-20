// Copyright (c) 2017, Ebkar Technology & Management Solutions and contributors
// For license information, please see license.txt

frappe.ui.form.on('Supplier Evaluation', {
	refresh: function(frm) {

	},
	before_submit: function(frm, cdt, cdn) {
		frm.toggle_reqd('select_11', true);
	},
	supplier_name: function(frm, cdt, cdn) {
		if(frm.doc.supplier_name) {
			frappe.call({
				method: 'addons.api.get_supp_info',
				args: {
					supplier: frm.doc.supplier_name
				},
				callback: function(d) {
					frappe.model.set_value(cdt, cdn, 'supplier_type', d.message.supplier_type, "Link");
				}
			});
		}
	}
});
