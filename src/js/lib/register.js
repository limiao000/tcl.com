window.onload = function() {
    var userName = document.querySelector('#userName'); //用户名
    var result1 = document.querySelector('#result-1');
    var userPassword = document.querySelector('#userPassword'); //密码
    var result2 = document.querySelector('#result-2');
    var userTel = document.querySelector('#userTel'); //电话号码
    var result3 = document.querySelector('#result-3');
    var btn = document.querySelector('#btn');
    var form = document.querySelector('#form');
    // 用户名
    var name = /^\w{6,}$/;
    userName.onkeyup = function() {
            if (name.test(this.value)) {
                userName.setAttribute('class', 'classname');
                result1.innerHTML = '用户名可用';
                result1.style.color = 'green';

            } else {
                result1.innerHTML = '用户名格式错误';
                result1.style.color = 'red';

            }
        }
        // 密码
    var password = /^.{6,}$/;
    userPassword.onkeyup = function() {
            if (password.test(this.value)) {
                userPassword.setAttribute('class', 'classname');
                result2.innerHTML = '通过验证';
                result2.style.color = 'green';

            } else {
                result2.innerHTML = '密码格式错误';
                result2.style.color = 'red';

            }
        }
        // 电话号码
    var tel = /^1[356789]\d{9}$/;
    userTel.onkeyup = function() {
        if (tel.test(this.value)) {
            userTel.setAttribute('class', 'classname');
            result3.innerHTML = '验证通过';
            result3.style.color = 'green';

        } else {
            result3.innerHTML = '手机号码格式错误';
            result3.style.color = 'red';

        }
    }
    form.onkeyup = function() {
        var can = document.querySelectorAll('.classname');
        // console.log(can);
        if (can.length == 3) {
            btn.removeAttribute('disabled');
        }

    }


    $('#btn').on('click', function() {
        var pass = $.md5($('#userPassword').val());
        console.log(pass);
        $.ajax({
            type: "POST",
            url: "../lib/register.php",
            data: {
                'userName': $('#userName').val(),
                'userPassword': pass,
                'userTel': $('#userTel').val()
            },
            dataType: "json",
            success: function(response) {
                // eval(response);
                console.log(response)
                if (response == 1) {
                    alert("用户名已存在");
                    location.reload()
                } else {
                    alert("注册成功");
                    location.href = "../html/login.html";
                }
            }
        });
    })


}