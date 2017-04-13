from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Supplier"),
			"icon": "fa fa-star",
			"items": [
				{
					"type": "doctype",
					"name": "Request of Supplier Contact Access",
					"description": _("Request of Supplier Contact Access."),
				},
			],
			"label": _("Supplier Selection"),
			"icon": "fa fa-star",
			"items": [
				{
					"type": "doctype",
					"name": "Supplier Selection",
					"description": _("Supplier Selection."),
				},
			],
			"label": _("Supplier Evaluation"),
			"icon": "fa fa-star",
			"items": [
				{
					"type": "doctype",
					"name": "Supplier Evaluation",
					"description": _("Supplier Evaluation."),
				},
			]
		},
	]