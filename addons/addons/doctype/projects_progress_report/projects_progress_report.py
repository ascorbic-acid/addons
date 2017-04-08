# -*- coding: utf-8 -*-
# Copyright (c) 2015, Ebkar Technology & Management Solutions and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class ProjectsProgressReport(Document):
	pass


@frappe.whitelist()
def get_all_projects():

	projs_names = frappe.get_all('Project')
	projects = []

	for proj_name in projs_names:
		projects.append(frappe.get_doc('Project', proj_name['name']))
	
	return projects