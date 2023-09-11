import React from 'react';
import dynamic from "next/dynamic";
const Footer = () => {
    return (
        <div>
           <h2>All right going to reserve 2011</h2>
        </div>
    );
};

export default dynamic (() => Promise.resolve(Footer), {ssr: false});