from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Recruitment"),
			"items": [
				{
					"type": "doctype",
					"name": "Custody Issuance Form",
					"description": _("Custody Issuance Form for you."),
				},
			]
		},
		{
			"label": _("Recruitment"),
			"items": [
				{
					"type": "doctype",
					"name": "User Account Creation or Amendment",
					"description": _("User Account Creation or Amendment."),
				},
				{
					"type": "doctype",
					"name": "Interview Evaluation",
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
			"label": _("Requisitions and Reports"),
			"items": [
				{
					"type": "doctype",
					"name": "Requisition of Materials or Services",
					"description": _("Requisition of Materials or Services."),
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
			"label": _("Payroll"),
			"items": [
				{
					"type": "doctype",
					"name": "Overtime Application",
					"description": _("Custody Returning."),
				},
			]
		},
	]
