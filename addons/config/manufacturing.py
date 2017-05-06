from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Bill of Materials"),
			"items": [
				{
					"type": "doctype",
					"name": "Item Creation or Amendment",
					"description": _("Item Creation or Amendment"),
				
				},
				
			]
		}
	]
