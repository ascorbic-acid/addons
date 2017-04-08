from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Reports"),
			"items": [
				{
					"type": "doctype",
					"name": "Projects Progress Report",
					"description": _("Projects Progress Report."),
				},
			]
		},
	]
