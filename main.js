document.getElementById('generate-btn').addEventListener('click', generatePassword);

function generatePassword() {
    const length = parseInt(document.getElementById('password-length').value);
    const includeSymbols = document.getElementById('include-symbols').checked;
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    let characters = charset;

    if (includeSymbols) {
        characters += symbols;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById('password').value = password;
}