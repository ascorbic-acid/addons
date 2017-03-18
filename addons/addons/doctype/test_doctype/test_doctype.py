# -*- coding: utf-8 -*-
# Copyright (c) 2015, Ebkar Technology & Management Solutions and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class testdoctype(Document):
	pass


@frappe.whitelist()
def get_data(params):

	dt = frappe.get_doc("Employee", params)
	return dt