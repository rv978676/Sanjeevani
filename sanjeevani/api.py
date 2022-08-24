import frappe

@frappe.whitelist()
def get_all_complains(complain_type):
    return frappe.get_all("Patient Complain",{'parent':complain_type,"parenttype":"Complain Type"},["complain","time","complian_type","gradation","duration"])
