# Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
# License: GNU General Public License v3. See license.txt
from __future__ import unicode_literals

def get_notification_config():
		return {
			"for_doctype": {
			"Overtime Application": {"docstatus":"0"},
			"Custody Issuance": {"docstatus":"0"},
			"Custody Returning": {"docstatus":"0"},
			"Project Change Request": {"docstatus":"0"},
			"Project Charter": {"docstatus":"0"},
			"Project Daily Report": {"docstatus":"0"},
			"Project Performance Report": {"docstatus":"0"},
			"Lessons Learned": {"docstatus": "0"},
			"Corrective Action Report": {"docstatus":"0"},
			"Request of Supplier Contact Access": {"docstatus":"0"},
			"Supplier Evaluation": {"docstatus":"0"},
			"Supplier Selection": {"docstatus":"0"},
			"Request of Customer Contact Access": {"docstatus": "0"},
			"Receiving Correspondence": {"docstatus": "0"},
			"Sending Correspondence": {"docstatus": "0"},
			"Interview Evaluation": {"docstatus": "0"},
			"Travel Justification": {"docstatus": "0"},
			"Disciplinary Actions": {"docstatus": "0"},
			},
	}