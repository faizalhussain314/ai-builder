import React, { useState, useEffect } from 'react';
import GrapeJSWrapper from './GrapeJSWrapper';

const Editor = () => {
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        // Fetch HTML content from backend
        fetch('http://localhost:8080/template1.html')
            .then(response => response.text())
            .then(data => setHtmlContent(data))
            .catch(error => console.error('Error fetching HTML content:', error));
        console.log(htmlContent)
    }, []);

    const handleSave = (editedContent) => {
        // Send edited HTML content to backend
        fetch('backend-url', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/html', // Set appropriate content type
            },
            body: editedContent,
        })
            .then(response => {
                if (response.ok) {
                    console.log('Content saved successfully');
                    // Handle success, e.g., show a success message
                } else {
                    console.error('Failed to save content');
                    // Handle failure, e.g., show an error message
                }
            })
            .catch(error => console.error('Error saving content:', error));
    };

    return (
        <div>
            <h1>GrapeJS Editor</h1>
            <GrapeJSWrapper initialContent={htmlContent} onSave={handleSave} />
        </div>
    );
};

export default Editor;
