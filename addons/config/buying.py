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
			]
		},
		{
			"label": _("Analytics"),
			"icon": "fa fa-table",
			"items": [
				
			]
		},
		{
			"label": _("Other Reports"),
			"icon": "fa fa-list",
			"items": [
				
			]
		},
		{
			"label": _("Help"),
			"items": [
			]
		},
	]