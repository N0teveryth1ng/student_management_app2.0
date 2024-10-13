

document.getElementById('manage_student_form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    
    fetch('/manage_student', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            // Save the success message to sessionStorage
            sessionStorage.setItem('toastMessage', data.message);
            sessionStorage.setItem('toastType', 'success');
            
            console.log('Success message saved in sessionStorage');
            
            // Redirect to the admin dashboard
            window.location.href = "/admin_dashboard";
        } else {
            // Save the error message to sessionStorage
            sessionStorage.setItem('toastMessage', data.message);
            sessionStorage.setItem('toastType', 'error');
            
            console.log('Error message saved in sessionStorage');
            
            // Redirect to the admin dashboard or display error
            window.location.href = "/admin_dashboard";
        }
    })
    .catch(error => {
        console.log('Error:', error);
    });
});
