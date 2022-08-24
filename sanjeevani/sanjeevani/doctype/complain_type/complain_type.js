// Copyright (c) 2022, Arkay ERP and contributors
// For license information, please see license.txt

frappe.ui.form.on('Complain Type', {
	// refresh: function(frm) {

	// }
	default_patient_complain_add:function(frm,cdt,cdn){
		var d=locals[cdt][cdn]
		d.complian_type=frm.doc.complaint_type
		// cur_frm.refresh()
		frappe.msgprint("added")

	}
});

frappe.ui.form.on('Default Patient Complain', {
	form_render:function(frm,cdt,cdn){
		var d=locals[cdt][cdn]
		d.complian_type=frm.doc.complaint_type
		cur_frm.refresh()

	}
	// refresh: function(frm) {

	// }
});
