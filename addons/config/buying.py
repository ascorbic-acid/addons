from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Purchasing"),
			"icon": "fa fa-star",
			"items": [

			]
		},
		{
			"label": _("Supplier"),
			"items": [
				{
					"type": "doctype",
					"name": "Request of Supplier Contact Access",
					"description": _("Request of Supplier Contact Access."),
				},
				{
					"type": "doctype",
					"name": "Supplier Selection",
					"description": _("Supplier Selection."),
				},
				{
					"type": "doctype",
					"name": "Supplier Evaluation",
					"description": _("Supplier Evaluation."),
				},
				{
					"type": "doctype",
					"name": "Criteria of Supplier Evaluation",
					"description": _("Criteria of Supplier Evaluation."),
				},
			]
		},
		{
			"label": _("Setup"),
			"icon": "fa fa-cog",
			"items": [
				
			]
		},
		{
			"label": _("Items and Pricing"),
			"items": [
				{
					"type": "doctype",
					"name": "Item Creation or Amendment",
					"description": _("Item Creation or Amendment."),
				},
			]
		},
	]