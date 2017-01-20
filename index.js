$(document).ready(function () {
    var number;

    $('#startForm').on("submit", function (e) {
        $('#inputBlock').fadeOut(150, function(){
            var div = $("<div class='success-message'><p>Done! Arnold will contact you shortly</p></div>").hide();
            $(this).replaceWith(div);
            $($('.success-message')[0]).fadeIn("slow");
        });
    });

    $('#start').click(function (e) {
        $($('.error-message')[0]).hide();
        number = $('#phone').val();

        if(number !== undefined && number != "" && number != " ") {
            if(isNaN(number)) {
                $($('.error-message')[0]).fadeIn(100);
                return;
            } else {
                $('#startForm').submit();
            }
        } else {
            $($('.error-message')[0]).fadeIn(100);
        }
    });

    $('#startForm').submit(function(e){
        e.preventDefault();
        $.ajax({
            // url: 'http://requestb.in/t29bn7t2',
            url: 'https://fitness.botscrew.com/add',
            data: {data: number},
            type: 'POST',
            crossDomain: true,
            dataType: 'jsonp'
            // success: function() { console.log("Success"); },
            // error: function() { console.log('Failed!'); }
        });
    });
});
