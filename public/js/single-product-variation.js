var attributs = [];

function changeVariation(me, annonce_id) {
    $(".item-image").addClass("lazyloader");
    var id = $(me).data("attrid");
    var type_id = $(me).data("type");

    $(".attribut"+type_id).data("select", false);
    
    $(me).data("select", true);
    
    $(".attribut"+type_id).removeClass("attribut-active");
    $("#"+id).addClass("attribut-active");

    var attr_id = $(me).data("id");

    if(this.attributs.length == 0) {
        this.attributs.push({id : attr_id, type : type_id});
    } else {
        var verify = false;
                
        for(let i = 0; i < this.attributs.length; i++){
            console.log(this.attributs[i].id);
            if(this.attributs[i].type == type_id) {
                verify = true;
            }
        }
        
        this.attributs.forEach(function(e) {
            if(e.type == type_id) {
                e.id = attr_id;
            } else {
                if(!verify) {
                    this.attributs.push({id : attr_id, type : type_id});
                }
            }
        });
    }

    var attrs = [];

    this.attributs.forEach(function(element) { attrs.push(element.id) });

    getVariation(attrs, annonce_id);

} 

function getVariation(sendAttributs, annonce_id) {
    sendAttributs = JSON.stringify(sendAttributs);
    sendAttributs = sendAttributs.replace("[", "");
    sendAttributs = sendAttributs.replace("]", "");

    console.log(sendAttributs);
    
    $.ajax({
        method: "POST",
        url: "/getvariation",
        data: {data: sendAttributs, annonce : annonce_id},
        success: function(variation) {
            console.log(variation);

            if(variation.isExist == true) {

                var currentVariation = variation.variation;

                var prix = currentVariation.prix;
                var prixPromo = currentVariation.prixPromo;

                if(prixPromo) {
                    $('#variation-price').html(prixPromo+" FCFA <del style='font-size: 16px;color: #666;'>"+prix+" FCFA</del>");
                } else {
                    $('#variation-price').html(prix+" FCFA");
                }

                if(currentVariation.image) {
                    $('#product-principal-image').attr("src","/img/annonce/"+currentVariation.image+"");
                    $('#product-principal-image').data("zoom-image","/img/annonce/"+currentVariation.image+"");
                    //$('#product-principal-image-link').attr("href","/img/annonce/"+currentVariation.image+"");
                    $('#product-principal-image-thumb').attr("src","/img/annonce/"+currentVariation.image+"");
                }

                $("#cart-add").removeAttr("disabled");
                $("#cart-add").attr("onclick", "cart()");
                $("#cart-add").children().remove();

                /*
                $("#cart-add").attr("onclick", "cart()");
                $("#cart-add").attr("data-toggle", "modal");
                $("#cart-add").attr("data-target", "#modalCart");

                $("#sell").removeAttr("data-toggle");
                $("#sell").removeAttr("data-target");
                $("#sell").attr("onclick", "commander()");

                $("#cart-add-phone").removeAttr("data-toggle");
                $("#cart-add-phone").removeAttr("data-target");

                $("#cart-add-phone").attr("onclick", "cart()");
                $("#cart-add-phone").attr("data-toggle", "modal");
                $("#cart-add-phone").attr("data-target", "#modalCart");

                $("#sell-phone").removeAttr("data-toggle");
                $("#sell-phone").removeAttr("data-target");
                $("#sell-phone").attr("onclick", "commander()");
                */

                $("#variation-id").val(currentVariation.id);
                $("#sell-variation").val(currentVariation.id);

            } else {
                
                $("#cart-add").removeAttr("onclick");
                $("#cart-add").attr("disabled", "disabled");
                $("#cart-add").append("<span>Sélectionnez les attributs (couleur, taille...) avant de commander</span>");
                /*
                $("#cart-add").attr("data-toggle", "modal");
                $("#cart-add").attr("data-target", "#modalAttribut");
 
                $("#sell").attr("data-toggle", "modal");
                $("#sell").attr("data-target", "#modalAttribut");
                
                $("#sell-phone").removeAttr("onclick");
                $("#cart-add-phone").removeAttr("onclick");
                
                $("#cart-add-phone").attr("data-toggle", "modal");
                $("#cart-add-phone").attr("data-target", "#modalAttribut");
               
                $("#sell-phone").attr("data-toggle", "modal");
                $("#sell-phone").attr("data-target", "#modalAttribut");
                */

                $("#variation-id").val(0);
                $("#sell-variation").val(0);
                
            }

            $(".item-image").removeClass("lazyloader");
        },
        error: function() {
            /*$('#chargement').remove();*/
            console.log("error");
            $(".item-image").removeClass("lazyloader");
        }
    });
}