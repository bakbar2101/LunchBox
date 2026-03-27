// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize current date
    const currentDateElement = document.getElementById('currentDate');
    if (currentDateElement) {
        const today = new Date();
        currentDateElement.textContent = today.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }

    // Date picker functionality
    const datePickerBtn = document.getElementById('datePickerBtn');
    const datePickerModal = document.getElementById('datePickerModal');
    const closeDatePicker = document.getElementById('closeDatePicker');
    const confirmDateBtn = document.getElementById('confirmDateBtn');
    const dateInput = document.getElementById('dateInput');

    if (datePickerBtn && datePickerModal) {
        datePickerBtn.addEventListener('click', function() {
            datePickerModal.classList.remove('hidden');
        });
    }

    if (closeDatePicker) {
        closeDatePicker.addEventListener('click', function() {
            datePickerModal.classList.add('hidden');
        });
    }

    if (confirmDateBtn && dateInput) {
        confirmDateBtn.addEventListener('click', function() {
            const selectedDate = new Date(dateInput.value);
            if (!isNaN(selectedDate.getTime())) {
                currentDateElement.textContent = selectedDate.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                });
            }
            datePickerModal.classList.add('hidden');
        });
    }

    // Form validation
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // Basic validation
            if (email && password) {
                // Simulate successful login
                window.location.href = 'dashboard.html';
            } else {
                alert('Please fill in all fields');
            }
        });
    }

    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('registerConfirmPassword').value;
            const userClass = document.getElementById('registerClass').value;
            
            // Validation
            if (!name || !email || !password || !confirmPassword || !userClass) {
                alert('Please fill in all fields');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            // Simulate successful registration
            alert('Registration successful!');
            window.location.href = 'index.html';
        });
    }
});