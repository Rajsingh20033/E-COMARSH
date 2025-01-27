function emailsend() {

    Email.send({
        Host: "smtp.mailendo.com",
        Username: "rs9368424@gmail.com",
        Password: "hgjgjgjgk",
        To: 'rajsingh54472@gmal.com',
        From: "rs9368424@gmail.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}