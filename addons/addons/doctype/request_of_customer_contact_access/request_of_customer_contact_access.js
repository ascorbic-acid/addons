// Copyright (c) 2017, Ebkar Technology & Management Solutions and contributors
// For license information, please see license.txt

frappe.ui.form.on('Request of Customer Contact Access', {
	refresh: function(frm) {

	},
	req_customer_name: function(frm, cdt, cdn) {
		if(frm.doc.req_customer_name){
			frappe.call({
				method: "addons.api.get_cust_info",
				args: {
					customer: frm.doc.req_customer_name
				},
				callback: function(data){
					frappe.model.set_value(cdt, cdn, 'req_customer_type', data.message.customer_type, "Data");
					frappe.model.set_value(cdt, cdn, 'customer_group', data.message.customer_group, "Data");
					frappe.model.set_value(cdt, cdn, 'territory', data.message.territory, "Data");

				}
			});
		}
	}

});
