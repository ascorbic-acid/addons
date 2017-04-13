from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Projects"),
			"items": [
				{
					"type": "doctype",
					"name": "Project Change Request",
					"description": _("Project Change Request."),
				},
				{
					"type": "doctype",
					"name": "Project Charter",
					"description": _("Project Charter."),
				},
				{
					"type": "doctype",
					"name": "Lessons Learned",
					"description": _("Lessons Learned."),
				},
			],	
		},
		{
					
			"label": _("Reports"),
			"items": [
				{
					"type": "doctype",
					"name": "Projects Progress Report",
					"description": _("Projects Progress Report."),
				},
				{
					"type": "doctype",
					"name": "Project Daily Report",
					"description": _("Project Daily Report."),
				},
				{
					"type": "doctype",
					"name": "Project Performance Report",
					"description": _("Project Performance Report."),
				},

			],


		},

	]