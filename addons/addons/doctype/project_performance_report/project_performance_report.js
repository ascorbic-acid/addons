// Copyright (c) 2017, Ebkar Technology & Management Solutions and contributors
// For license information, please see license.txt

frappe.ui.form.on('Project Performance Report', {
	validate: function(frm, cdt, cdn){
		
		if(frm.doc.ahead_of_schedule == 1 && frm.doc.behind_schedule){
			frappe.msgprint('please choose only one status');
			validated = false;
		}
		if(frm.doc.under_budget == 1 && frm.doc.over_budget){
			frappe.msgprint('please choose only one status');
			validated = false;
		}
	},
	refresh: function(frm) {

	},

});
