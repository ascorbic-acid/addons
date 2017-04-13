from frappe import _

def get_data():
	return {
		'fieldname': 'naming_series',
		'non_standard_fieldnames': {
			'Purchase Invoice': 'purchase_receipt',
			'Landed Cost Voucher': 'receipt_document'
		},
		'internal_links': {
			'Project': [
                    'items', 'project'
                    ],
		},
		'transactions': [
			{
				'label': _('Documents'),
				'items': ['Overtime Application', 'Travel Justification']
			},
            			{
				'label': _('Others'),
				'items': ['Disciplinary Actions', 'Requisition of Materials or Services']
			},
		]
	}