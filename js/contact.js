import { addContactUs } from './service/api.service.js';

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission
        console.log('Form submitted');
        // Get form values
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Combine first and last name
        const sName = `${firstName} ${lastName}`;

        // Call the API
        // try {
        //     const response = await addContactUs(sName, email, message);
        //     if (response) {
        //         alert('Your message has been sent successfully!');
        //         contactForm.reset();  
        //     } else {
        //         alert('Failed to send the message. Please try again.');
        //     }
        // } catch (error) {
        //     console.error('Error while submitting the form:', error);
        //     alert('An error occurred. Please try again later.');
        // }
    });
});
