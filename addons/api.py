import frappe

@frappe.whitelist()
def get_emp_info(employee):
    emp_info = frappe.get_doc("Employee", employee)

    return emp_info