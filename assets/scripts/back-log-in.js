logIn = async () => {

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    if (email == "" || password == "")
        alert("Complete the empty fields!")

    else {

        let response = await fetch("/back-log-in", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(
                {
                    user: {
                        email: email,
                        password: password
                    }
                }
            )
        })

        if (response.status == 200)
            window.location.href = "http://localhost:3000/back-intro.html"
        else
            alert("Wrong email or password.")
    }
}