# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from . import __version__ as app_version

app_name = "addons"
app_title = "Addons"
app_publisher = "Ebkar Technology & Management Solutions"
app_description = "ERPNext addons app, extra doctypes and customizations"
app_icon = "octicon octicon-plus"
app_color = "blue"
app_email = "info@ebkar.ly"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/addons/css/addons.css"
# app_include_js = "/assets/addons/js/addons.js"

# include js, css files in header of web template
# web_include_css = "/assets/addons/css/addons.css"
# web_include_js = "/assets/addons/js/addons.js"

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "addons.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "addons.install.before_install"
# after_install = "addons.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "addons.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"addons.tasks.all"
# 	],
# 	"daily": [
# 		"addons.tasks.daily"
# 	],
# 	"hourly": [
# 		"addons.tasks.hourly"
# 	],
# 	"weekly": [
# 		"addons.tasks.weekly"
# 	]
# 	"monthly": [
# 		"addons.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "addons.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "addons.event.get_events"
# }

