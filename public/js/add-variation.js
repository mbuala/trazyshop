let variationsId = [];

$("#add_variation").click(function() {

    var myArray = $("#array").val();
    var attributs = JSON.parse(myArray);

    var types = [
        {id : 1, titre: "couleur"}, 
        {id : 2, titre: "stockage"},
        {id : 3, titre: "taille"},
        {id : 4, titre: "poids"},
        {id : 5, titre: "mètre"},
        {id : 6, titre: "litre"}
    ]; 

    attrs = [];

    for(let i = 0; i < types.length; i++) {
        var existingAttr = $("#"+types[i].titre);

        if(existingAttr.length) {
            var attr = existingAttr.val();
            if(attr) {
                attrs.push(attr);
            }
        }
    }

    var attrs_id = [];
    var attrs_titre = [];
    console.log(attrs.length);

    if(attrs.length > 0) {
        for(let i = 0; i < attrs.length; i++) {
            attributs.forEach(elt => {
                if(elt.id == parseInt(attrs[i])) {
                    attrs_id.push(parseInt(elt.id));
                    attrs_titre.push(elt.titre);
                    console.log(parseInt(elt.id)+" -> "+elt.titre);
                }
            });
        }
        var newAttr = $("#variation"+attrs_id.join(""));

        if(!newAttr.length) {
            $("#variations-block").prepend("<figure class='ps-block--form-box' id='variation"+attrs_id.join("")+"'> <figcaption>Attributs : <span class='badge badge-dark' style='font-weight: normal;'>"+ attrs_titre.join(" - ") +"</span> <i onclick='this.parentElement.parentElement.remove()' class='fa fa-trash' style='font-size: 18px;color: red;cursor: pointer; float: right'></i> </figcaption> <div class='ps-block__content'> <div class='row' style='padding: 10px'> <div class='form-group col-md-6 col-6'> <label>Prix Régulier<sup>*</sup> </label> <input class='form-control' name='variation"+attrs_id.join("")+"Prix' type='text' placeholder='Prix (FCFA)' required/> </div> <div class='form-group col-md-6 col-6'> <label>Prix Promo </label> <input class='form-control' name='variation"+attrs_id.join("")+"PrixPromo' type='text' placeholder='Prix (FCFA)' /> </div> <div class='container'> <div class='row'> <div class='col-md-4 col-6 imgUp'> <div class='imagePreview'></div> <label class='btn btn-primary' style='cursor: pointer; background-color: #cd4040; font-size: 12px; padding: 5px 10px!important; border-color: #cd4040;'> Ajouter<input type='file' class='uploadFile img' name='variation"+attrs_id.join('')+"Image' style='width: 0px;height: 0px;overflow: hidden;' required> </label> </div> <div class='col-md-4 col-6 imgUp'> <div class='imagePreview'></div> <label class='btn btn-primary' style='cursor: pointer; background-color: #cd4040; font-size: 12px; padding: 5px 10px!important; border-color: #cd4040;'> Ajouter<input type='file' class='uploadFile img' name='variation"+attrs_id.join('')+"Image1' style='width: 0px;height: 0px;overflow: hidden;'> </label> </div> <div class='col-md-4 col-6 imgUp'> <div class='imagePreview'></div> <label class='btn btn-primary' style='cursor: pointer; background-color: #cd4040; font-size: 12px; padding: 5px 10px!important; border-color: #cd4040;'> Ajouter<input type='file' class='uploadFile img' name='variation"+attrs_id.join('')+"Image3' style='width: 0px;height: 0px;overflow: hidden;'> </label> </div> </div> </div> </div> </div> <input type='hidden' name='variation"+attrs_id.join("")+"Attributs' value='"+attrs_id.join(",")+"'></figure>");
            variationsId.push(attrs_id.join(""));
            $("#variations").val(variationsId);
        } else {
            alert("Cette variation existe déjà");
        }

    } else {
        alert("Veuillez choisir un attribut");
    }


});


$(".imgAdd").click(function(){
$(this).closest(".row").find('.imgAdd').before('<div class="col-sm-2 imgUp"><div class="imagePreview"></div><label class="btn btn-primary">Upload<input type="file" class="uploadFile img" value="Upload Photo" style="width:0px;height:0px;overflow:hidden;"></label><i class="fa fa-times del"></i></div>');
});
$(document).on("click", "i.del" , function() {
    $(this).parent().remove();
});
$(function() {
    $(document).on("change",".uploadFile", function()
    {
            var uploadFile = $(this);
        var files = !!this.files ? this.files : [];
        if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

        if (/^image/.test( files[0].type)){ // only image file
            var reader = new FileReader(); // instance of the FileReader
            reader.readAsDataURL(files[0]); // read the local file

            reader.onloadend = function(){ // set image data as background of div
                //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url("+this.result+")");
            }
        }
    
    });
});
