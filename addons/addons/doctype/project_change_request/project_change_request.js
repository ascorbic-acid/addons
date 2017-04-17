// Copyright (c) 2017, Ebkar Technology & Management Solutions and contributors
// For license information, please see license.txt

frappe.ui.form.on('Project Change Request', {
	refresh: function(frm) {
		
	},
	project: function(frm, cdt, cdn) {
		// if(frm.doc.project){
		// 	frappe.call({
		// 		method: 'addons.api.get_proj_info',
		// 		args: {
		// 			project: frm.doc.project
		// 		},
		// 		callback: function(data){
		// 			frappe.model.set_value(cdt, cdn, "project_name", data.message.project_name, "Link");
		// 		}
		// 	});
		// }
	},
	before_submit: function(frm, cdt, cdn) {
		if(frm.doc.select_8 == 'Awaiting approval'){
			frappe.msgprint('You cannot submit if the "Change Control Board Decision" is (Awaiting approval).', 'Warning');
			validated = false;
		}
	}
});
