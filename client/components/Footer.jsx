import React from 'react'

const Footer = () => {
    return (
        <footer className="text-center py-6 border-t border-neutral-900 text-sm text-neutral-600">
            &copy;{new Date().getFullYear()} Ishan Dwivedi. All Rights Reserved.
        </footer>
    );
}

export default Footer