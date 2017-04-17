// Copyright (c) 2017, Ebkar Technology & Management Solutions and contributors
// For license information, please see license.txt

frappe.ui.form.on('Request of Supplier Contact Access', {
	refresh: function(frm) {

	},
	supplier_name: function(frm, cdt, cdn){
		if(frm.doc.supplier_name){
			frappe.call({
				method: "addons.api.get_supp_info",
				args: {
					supplier: frm.doc.supplier_name
				},
				callback: function(data){
					frappe.model.set_value(cdt, cdn, 'req_supplier_type', data.message.supplier_type, "Link");
				}
			});
		}
	}
});
