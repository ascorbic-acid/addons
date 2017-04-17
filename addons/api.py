import frappe

@frappe.whitelist()
def get_emp_info(employee):
    emp_info = frappe.get_doc("Employee", employee)

    return emp_info
@frappe.whitelist()
def get_proj_info(project):
    proj = frappe.get_doc("Project", project)

    return proj

@frappe.whitelist()
def get_supp_info(supplier):
    supp = frappe.get_doc('Supplier', supplier)

    return supp
@frappe.whitelist()
def get_cust_info(customer):
    cust = frappe.get_doc('Customer', customer)

    return cust