'use client';

import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import React from 'react';
import { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { db } from '../firebase';

const inquiryTypes = [
    'Investment',
    'Customer Service',
    'Partner with Us',
    'Media Inquiry',
    'Other'
] as const;

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        inquiryType: '',
        read : false
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await addDoc(collection(db, 'contacts'), {
                ...formData,
                timestamp: serverTimestamp()
            });
            setFormData({ name: '', email: '', message: '', inquiryType: '', read: false });
            setIsSuccess(true);
            setTimeout(() => setIsSuccess(false), 3000); // Reset after 3s
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl pb-8 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                Want to Know more?
            </h1>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column - Contact Form */}
                    <div className="relative bg-gradient-to-b from-zinc-950/90 to-black p-8 rounded-xl backdrop-blur-sm
                        before:absolute before:inset-0 before:rounded-xl before:p-[1px]
                        before:bg-gradient-to-b before:from-zinc-700/30 before:to-zinc-900/30 before:-z-10
                        after:absolute after:inset-0 after:rounded-xl after:p-[1px]
                        after:bg-gradient-to-t after:from-zinc-700/10 after:to-zinc-900/10 after:-z-10
                        shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                        <h2 className="text-2xl font-bold text-white/90 mb-6">Get in Touch</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="inquiryType" className="block text-sm font-medium text-white/70 mb-2">
                                    Nature of Inquiry
                                </label>
                                <select
                                    id="inquiryType"
                                    name="inquiryType"
                                    value={formData.inquiryType}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-700/50 
                                    text-white/90 focus:outline-none focus:ring-2 focus:ring-zinc-600 
                                    focus:border-transparent transition-colors"
                                >
                                    <option value="" disabled>Select your inquiry type</option>
                                    {inquiryTypes.map((type) => (
                                        <option key={type} value={type} className="bg-zinc-900">
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-white/70">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-lg bg-black/30 border border-zinc-800 text-white/90 px-3 py-2 focus:ring-1 focus:ring-white/30 focus:border-transparent transition-all"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-white/70">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-lg bg-black/30 border border-zinc-800 text-white/90 px-3 py-2 focus:ring-1 focus:ring-white/30 focus:border-transparent transition-all"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-white/70">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="mt-1 block w-full rounded-lg bg-black/30 border border-zinc-800 text-white/90 px-3 py-2 focus:ring-1 focus:ring-white/30 focus:border-transparent transition-all"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-gradient-to-r from-zinc-800 to-zinc-900 text-white/90 py-2 px-4 rounded-lg hover:from-zinc-700 hover:to-zinc-800 transition-all duration-300 flex items-center justify-center"
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : isSuccess ? (
                                    <>
                                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Sent!
                                    </>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Right Column - Contact Info */}
                    <div className="relative bg-gradient-to-b from-zinc-950/90 to-black p-8 rounded-xl backdrop-blur-sm
                        before:absolute before:inset-0 before:rounded-xl before:p-[1px]
                        before:bg-gradient-to-b before:from-zinc-700/30 before:to-zinc-900/30 before:-z-10
                        after:absolute after:inset-0 after:rounded-xl after:p-[1px]
                        after:bg-gradient-to-t after:from-zinc-700/10 after:to-zinc-900/10 after:-z-10
                        shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                        <h2 className="text-2xl font-bold text-white/90 mb-6">Contact Information</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-white/80">Email</h3>
                                <a href="mailto:contact@quadropic.com" className="text-white/60 hover:text-white/80 transition-colors">contact@quadropic.com</a>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white/80">Investment</h3>
                                <a href="mailto:invest@quadropic.com" className="text-white/60 hover:text-white/80 transition-colors">invest@quadropic.com</a>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white/80">Talk to us</h3>
                                <a href="talktous.quadropic.com" className="text-white/60 hover:text-white/80 transition-colors">talktous.quadropic.com</a>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white/80">Connect With Us</h3>
                                <div className="flex space-x-4 mt-3">
                                    <SocialIcon 
                                        url="https://youtube.com/@QuadropicHQ"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ height: 35, width: 35 }}
                                        bgColor="transparent"
                                        fgColor="rgba(255,255,255,0.6)"
                                        className="hover:-translate-y-1 hover:opacity-80 transition-all"
                                    />
                                    <SocialIcon 
                                        url="https://linkedin.com/company/quadropic"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ height: 35, width: 35 }}
                                        bgColor="transparent"
                                        fgColor="rgba(255,255,255,0.6)"
                                        className="hover:-translate-y-1 hover:opacity-80 transition-all"
                                    />
                                    <SocialIcon 
                                        url="https://x.com/quadropic"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ height: 35, width: 35 }}
                                        bgColor="transparent"
                                        fgColor="rgba(255,255,255,0.6)"
                                        className="hover:-translate-y-1 hover:opacity-80 transition-all"
                                    />
                                    <SocialIcon 
                                        url="https://quadropic.medium.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ height: 35, width: 35 }}
                                        bgColor="transparent"
                                        fgColor="rgba(255,255,255,0.6)"
                                        className="hover:-translate-y-1 hover:opacity-80 transition-all"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}