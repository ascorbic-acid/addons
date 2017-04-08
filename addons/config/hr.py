from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Recruitment"),
			"items": [
				{
					"type": "doctype",
					"name": "Interview Evaluation",
					"description": _("User Account Creation or Amendment."),
				},
				{
					"type": "doctype",
					"name": "Interview Evaluation Criteria",
					"description": _("Interview Evaluation Criteria."),
				},
			]
		},
		{
			"label": _("User Account Creation or Amendment"),
			"items": [
				{
					"type": "doctype",
					"name": "User Account Creation or Amendment",
					"description": _("User Account Creation or Amendment."),
				},
			]
		},
		{
			"label": _("Correspondence"),
			"items": [
				{
					"type": "doctype",
					"name": "Receiving Correspondence",
					"description": _("Receiving Correspondence."),
				},
				{
					"type": "doctype",
					"name": "Sending Correspondence",
					"description": _("Sending Correspondence."),
				},
			]
		},
		{
			"label": _("Requisitions (Uses for employees' needs only)"),
			"items": [
				{
					"type": "doctype",
					"name": "Requisition of Materials or Services",
					"description": _("Requisition of Materials or Services."),
				},
			]
		},
		{
			"label": _("Disciplinary Actions"),
			"items": [
				{
					"type": "doctype",
					"name": "Disciplinary Actions",
					"description": _("Disciplinary Actions."),
				},
			]
		},
		{
			"label": _("Custodies"),
			"items": [
				{
					"type": "doctype",
					"name": "Custody Returning",
					"description": _("Custody Returning."),
				},
				{
					"type": "doctype",
					"name": "Custody Issuance",
					"description": _("Custody Issuance."),
				},
			]
		},
		{
			"label": _("Overtime"),
			"items": [
				{
					"type": "doctype",
					"name": "Overtime Application",
					"description": _("Custody Returning."),
				},
			]
		},
		{
			"label": _("Travel"),
			"items": [
				{
					"type": "doctype",
					"name": "Travel Justification",
					"description": _("Travel Justification."),
				},
			]
		},
		{
			"label": _("Corrective Action Report"),
			"items": [
				{
					"type": "doctype",
					"name": "Corrective Action Report",
					"description": _("Corrective Action Report.")
				}
			]
		}

	]
