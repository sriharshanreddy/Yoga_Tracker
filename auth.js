document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register-form");
    const loginForm = document.getElementById("login-form");

    // REGISTER FUNCTIONALITY
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirm-password").value;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            const user = {
                name: name,
                email: email,
                password: password
            };

            // Save user data to localStorage
            localStorage.setItem("user", JSON.stringify(user));

            alert("Registration successful! You can now log in.");
            window.location.href = "login.html";
        });
    }

    // LOGIN FUNCTIONALITY
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;

            const storedUser = JSON.parse(localStorage.getItem("user"));

            if (!storedUser) {
                alert("No account found. Please register first.");
                window.location.href = "register.html";
                return;
            }

            if (storedUser.email === email && storedUser.password === password) {
                alert("Login successful!");
                // Redirect to your dashboard or home page
                window.location.href = "dashboard.html"; // Change this if needed
            } else {
                alert("Invalid email or password.");
            }
        });
    }

    // FORGOT PASSWORD FUNCTIONALITY
const resetForm = document.getElementById("reset-form");

if (resetForm) {
    resetForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const newPassword = document.getElementById("new-password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (newPassword !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        let storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser || storedUser.email !== email) {
            alert("Email not found. Please register first.");
            return;
        }

        storedUser.password = newPassword;
        localStorage.setItem("user", JSON.stringify(storedUser));

        alert("Password updated successfully! Please login.");
        window.location.href = "login.html";
    });
}

});

document.addEventListener("DOMContentLoaded", () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const welcomeMsg = document.getElementById("welcome-msg");

    if (userData && userData.name && welcomeMsg) {
        welcomeMsg.textContent = `Welcome, ${userData.name}`;
    }
});

