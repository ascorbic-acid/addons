from frappe import _

def get_data():
	return [
		{
			"label": _("Sales Pipeline"),
			"icon": "fa fa-star",
			"items": [
				{
					"type": "doctype",
					"name": "Request of Customer Contact Access",
					"description": _("Request of Customer Contact Access."),
				},
			]
		},
	]
