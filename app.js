$(function() {
    const email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const handphone = /^\+?\d{6,15}$/;
    const post = /^\d{5}$/;
    const id = /^[A-Z]{3}\d{3}$/;
    const pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    $('input').each(function() {
        $(this).on('input', function() {
            const pElement = $(this).parent().siblings().filter('p');

            if ($(this).attr('id') == "email") {
                if (email.test($(this).val())) {
                    pElement.html('Emaiil Valid !!')
                    pElement.removeClass('text-indigo-300 text-rose-300')
                    pElement.addClass('text-green-500')
                } else {
                    pElement.html('Email Tidak Valid.')
                    pElement.removeClass('text-green-500')
                    pElement.addClass('text-red-500')
                }
            }
            if ($(this).attr('id') == "handphone") {
                if (handphone.test($(this).val())) {
                    pElement.html('No handphone Valid !!')
                    pElement.removeClass('text-indigo-300 text-rose-300')
                    pElement.addClass('text-green-500')
                } else {
                    pElement.html('No handphone Tidak Valid.')
                    pElement.removeClass('text-green-500')
                    pElement.addClass('text-red-500')
                }
            }
            if ($(this).attr('id') == "post") {
                if (post.test($(this).val())) {
                    pElement.html('post Valid !!')
                    pElement.removeClass('text-indigo-300 text-rose-300')
                    pElement.addClass('text-green-500')
                } else {
                    pElement.html('post Tidak Valid.')
                    pElement.removeClass('text-green-500')
                    pElement.addClass('text-red-500')
                }
            }
            if ($(this).attr('id') == "id") {
                if (id.test($(this).val())) {
                    pElement.html('id Valid !!')
                    pElement.removeClass('text-indigo-300 text-rose-300')
                    pElement.addClass('text-green-500')
                } else {
                    pElement.html('id Tidak Valid.')
                    pElement.removeClass('text-green-500')
                    pElement.addClass('text-red-500')
                }
            }
            if ($(this).attr('id') == "pass") {
                if (pass.test($(this).val())) {
                    pElement.html('pass Valid !!')
                    pElement.removeClass('text-indigo-300 text-rose-300')
                    pElement.addClass('text-green-500')
                } else {
                    pElement.html('pass Tidak Valid.')
                    pElement.removeClass('text-green-500')
                    pElement.addClass('text-red-500')
                }
            }
        })
    })
})