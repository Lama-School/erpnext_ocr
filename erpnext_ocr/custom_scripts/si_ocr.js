   frappe.ui.form.on("Sales Invoice","ocr_receipt",function(frm){



                        frappe.call({
                            method: "erpnext_ocr.erpnext_ocr.xml_reader.read",
                            args: {
                                "ocr_receipt": cur_frm.doc.ocr_receipt
                            },
                            callback: function (r, rt) {

       var tree = new TreeView(r.message, 'tree');

                                tree.on('select', function (e) {
                                    console.log(e);
    console.log(JSON.stringify(e));
                                    // var copyTextarea = document.querySelector(e.target);
                                    // copyTextarea.select();

                                   var range = window.getSelection().getRangeAt(0);
        range.selectNode(e.target.srcElement);
        window.getSelection().addRange(range);
        document.execCommand("copy")

});


                            }
                        });




    });

    frappe.ui.form.on('Sales Invoice', {
        // validate:function (frm) {
        //
        // },

        refresh: function (frm) {




var tree = new TreeView([
    { name: 'Item 1', children: [] },
    { name: 'Item 2', expanded: true, children: [
            { name: 'Sub Item 1', children: [] },
            { name: 'Sub Item 2', children: [] }
        ]
    }
], 'tree');

        }

    });


