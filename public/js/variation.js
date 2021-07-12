$("#add_attribut_type").click(function() {
    var myArray = $("#array").val();
    var variations = JSON.parse(myArray);

    var type = $("#attribut_type").val();

    if(type) {
        var choiceAttributs = [];

        for(let i = 0; i < variations.length; i++) {
            if(type == variations[i].id_type){
                choiceAttributs.push(variations[i]);
            }
        }

        var typeId = choiceAttributs[0].id_type; 
        var typeTitre = choiceAttributs[0].titre_type; 

        var existingAttr = $("#"+typeTitre.toLowerCase()+"s");

        if(!existingAttr.length) {
            $("#attributs-block").append("<div class='form-group form-group--select'> <label>"+typeTitre+" (s) </label> <i onclick='this.parentElement.remove()' class='fa fa-trash' style='bottom: -45%;font-size: 18px;color: red;cursor: pointer;'></i> <div class='form-group__content'> <select class='ps-select js-multiple' name='"+typeTitre.toLowerCase()+"s[]' id='"+typeTitre.toLowerCase()+"s' multiple='multiple' required> </select> </div> </div>");
            
            $('.js-multiple').select2({
                placeholder: 'Cliquez pour selectionner'
            });

            for(let i = 0; i < choiceAttributs.length; i++) {
                $("#"+typeTitre.toLowerCase()+"s").append("<option value='"+choiceAttributs[i].id+"'>"+choiceAttributs[i].titre+"</option>");
            }
        } else {
            alert("Vous avez déjà ajouté cet attribut");
        }
    }
});


$("#product_type").change(function() {
    var productType = this.value;

    if(productType == "variable") {
        $("#simple-product").hide("slow");
        $("#variations-block").show("slow");
        $("#next-step").html("Ajouter les variations");
    } else {
        $("#attributs-block").children().remove();
        $("#variations-block").hide("slow");
        $("#simple-product").show("slow");
        $("#next-step").html("Publier");
    }
});





