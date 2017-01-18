$(document).ready(function () {
    $('#start').click(function () {
        $($('.error-message')[0]).hide();
        var number = $('#phone').val();

        if(number !== undefined && number != "" && number != " ") {
            console.log("2. ", number);

            if(isNaN(number) || number.match(/\d/g).length !== 10) {
                $($('.error-message')[0]).fadeIn(100);
                return;
            } else {
                $('#inputBlock').fadeOut(150, function(){
                    var div = $("<div class='success-message'><p>Done! Arnold will contact you shortly</p></div>").hide();
                    $(this).replaceWith(div);
                    $($('.success-message')[0]).fadeIn("slow");
                });
            }
        } else {
            $($('.error-message')[0]).fadeIn(100);
        }

    });
});
