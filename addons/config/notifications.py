# Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
# License: GNU General Public License v3. See license.txt
from __future__ import unicode_literals

def get_notification_config():
		return {
			"for_doctype": {
			"Overtime Application": {"docstatus":"0"},
			"Project Change Request": {"docstatus":"0"},
			"Project Charter": {"docstatus":"0"},
			"Project Daily Report": {"docstatus":"0"},
			"Project Performance Report": {"docstatus":"0"},
			},
	}