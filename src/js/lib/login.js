$(function() {
    $('#btn').on('click', function() {
        var pass = $.md5($('#userPassword').val());
        $.ajax({
            type: "POST",
            url: "../lib/login.php",
            data: {
                'userName': $('#userName').val(),
                'userPassword': pass,
            },
            success: function(response) {
                // eval(response);
                if (response == 1) {
                    alert('登陆成功');
                    location.href = '../html/index1.html'
                } else {
                    alert('用户名或密码不正确');
                    location.href = '../html/login.html';
                }
            }
        })
    })
})