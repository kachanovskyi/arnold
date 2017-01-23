$(document).ready(function () {
    $('<iframe name="mock_frame" style="display: none; visibility: hidden;"></iframe>').appendTo('body');

    $('#startForm').on("submit", function (e) {
        $('#inputBlock').fadeOut(150, function(){
            var div = $("<div class='success-message'><p>Done! Arnold will contact you shortly</p></div>").hide();
            $(this).replaceWith(div);
            $($('.success-message')[0]).fadeIn("slow");
        });
    });

    $('#start').click(function (e) {
        var errorMessage = $($('.error-message')[0]);

        errorMessage.hide();
        number = $('#phone').val();

        if(number !== undefined && number != "" && number != " ") {
            if(isNaN(number)) {
                errorMessage.fadeIn(100);
                return;
            } else {
                $('#startForm').submit();
            }
        } else {
            errorMessage.fadeIn(100);
        }
    });
});
