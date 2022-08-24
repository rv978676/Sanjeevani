

cur_frm.fields_dict.patient_complains.grid.get_field("complain").get_query = function(doc,cdt,cdn) {
	let d = locals[cdt][cdn];
	console.log(d)
	return {
		filters: {
			'complaint_type': ['=', d.complian_type]
		}
	}
};


frappe.ui.form.on('Patient Encounter', {
	complain_type:function(frm){
        frm.doc.patient_complains=[]
        cur_frm.refresh()
        if (frm.doc.complain_type){

            if (frm.doc.patient_complains.length > 0 ){
                frappe.throw("Please clear Patient Complain table to Fetch Details")
            }

            frappe.call({
                method: "sanjeevani.api.get_all_complains",
                args: {"complain_type":frm.doc.complain_type},
                callback: function(r){
                    if (r.message){
                        
                        r.message.forEach(function(item){
                            if(item){
                                var newrow = frappe.model.add_child( cur_frm.doc,"Patient Encounter","patient_complains");
                                // newrow.update(item)
                                for(var key in item) {
                                    newrow[key] = item[key];
                                }
                                newrow['complain_type']=frm.doc.complain_type
                                cur_frm.refresh()
                            }
                        });
                }
            }})
            
        }
	}
})