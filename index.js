$(document).ready(function () {
    $('#startForm').on("submit", function (e) {
        $('#inputBlock').fadeOut(150, function(){
            var div = $("<div class='success-message'><p>Done! Arnold will contact you shortly</p></div>").hide();
            $(this).replaceWith(div);
            $($('.success-message')[0]).fadeIn("slow");
        });
        return false;
    });

    $('#start').click(function () {
        $($('.error-message')[0]).hide();
        var number = $('#phone').val();

        if(number !== undefined && number != "" && number != " ") {

            if(isNaN(number) || number.match(/\d/g).length !== 10) {
                $($('.error-message')[0]).fadeIn(100);
                return;
            } else {
                $('#startForm').submit();

            }
        } else {
            $($('.error-message')[0]).fadeIn(100);
        }
    });
});
