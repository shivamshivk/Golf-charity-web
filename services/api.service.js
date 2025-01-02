import { apiUrl } from '../environment/env';


// Function to add contact us message
export const addContactUs = async (sName, sEmail, sDescription) => {
    try {
        const response = await fetch(`https://origin-staging.mi-recall.com/organiser-api/api/v1/stroke_club/add-contact-us`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ sName, sEmail, sDescription })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error adding contact us message:", error);
    }
};
