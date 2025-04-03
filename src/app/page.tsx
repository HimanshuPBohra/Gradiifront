"use client";
import { apkURL, appName } from "@/utils/config";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsAndroid } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 w-full flex justify-between items-center h-16 bg-white text-black z-10 p-5 shadow-md"
        role="navigation"
      >
        <div className="flex items-center">
          <img src="/logo.png" alt="logo" className="mr-2 h-8" />
          <h1 className="text-2xl font-semibold text-green-700">{appName}</h1>
        </div>
        {isLoggedIn ? (
          <div className="md:block hidden">
            <button
              onClick={() => (window.location.href = "/dashboard")}
              className="btn bg-green-500 text-white hover:bg-green-600 px-4 py-2 rounded-lg"
            >
              Go to Dashboard
            </button>
          </div>
        ) : (
          <div className="md:block hidden">
            <button
              onClick={() => (window.location.href = "/auth/login")}
              className="btn text-green-700 mr-2 hover:text-green-900"
            >
              Login
            </button>
            <button
              onClick={() => (window.location.href = "/auth/signup")}
              className="btn bg-green-500 text-white hover:bg-green-600 px-4 py-2 rounded-lg"
            >
              Start Free Trial
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row h-screen pt-16 bg-gradient-to-b from-green-50 to-white">
        <div className="flex justify-center items-center flex-col w-full md:w-1/2 text-center md:text-left px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-800">
              Grade Smarter, Teach Better
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-green-600 mt-2">
              The AI-Powered platform that helps educators evaluate student work with precision and provides meaningful feedback
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <Link href="/auth/signup">
              <button className="btn bg-green-500 text-white hover:bg-green-600 px-6 py-3 rounded-lg mt-8">
                Get Started Free
              </button>
            </Link>
          </motion.div>
        </div>
        <div className="flex flex-col w-full md:w-1/2 items-center justify-center p-8">
          <img
            src="/dashboard-preview.png"
            alt="Dashboard Preview"
            className="object-contain w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="flex flex-col items-center py-16 bg-green-50">
        <p className="text-3xl font-semibold text-green-800">Your AI-Driven HRMS Partner in Active HR Processes</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mt-10 px-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-xl font-semibold text-green-700">AI-Powered Evaluation</p>
            <p className="text-gray-600 mt-2">
              Automate answer sheet grading with AI for fast, accurate, and objective assessments.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-xl font-semibold text-green-700">Detailed Analytics</p>
            <p className="text-gray-600 mt-2">
              Gain valuable insights into student performance with comprehensive analytics.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-xl font-semibold text-green-700">Customizable Rubrics</p>
            <p className="text-gray-600 mt-2">
              Create and tailor evaluation criteria to match your teaching standards.
            </p>
          </div>
        </div>
      </section>

      {/* Batch Processing Section */}
      <section className="flex flex-col items-center py-16 bg-white">
        <div className="flex flex-col md:flex-row w-full max-w-6xl px-4">
          <div className="w-full md:w-1/2 p-4">
            <p className="text-3xl font-semibold text-green-800">Upload</p>
            <p className="text-2xl font-semibold text-green-600">Seamlessly Upload Assignments—No More Paper Piles!</p>
            <p className="text-gray-600 mt-4">
              Effortlessly Add: Students, classes, subjects, and answer sheets in a few clicks with tech like OCR, Google Classroom integration, and other platforms.
            </p>
            <p className="text-gray-600 mt-2">
              Bulk Upload: Save hours with drag-and-drop for multiple answer sheets, PDFs, or images.
            </p>
            <p className="text-gray-600 mt-2">
              Flexible Formats: Supports PDFs, scans, sheets, Word, docs, images—no formatting hassles.
            </p>
            <button className="btn bg-green-500 text-white hover:bg-green-600 px-6 py-3 rounded-lg mt-6">
              Start Grading in Minutes
            </button>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Placeholder for Upload Interface</p>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Section */}
      <section className="flex flex-col items-center py-16 bg-green-50">
        <div className="flex flex-col md:flex-row w-full max-w-6xl px-4">
          <div className="w-full md:w-1/2 p-4 order-2 md:order-1">
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Placeholder for Evaluation Interface</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4 order-1 md:order-2">
            <p className="text-3xl font-semibold text-green-800">
              AI-Powered Evaluation: Consistent, Customizable, & Effortless
            </p>
            <p className="text-gray-600 mt-4">
              Consistency While grading on focus on teaching.
            </p>
            <p className="text-gray-600 mt-2">
              Custom Rubrics: Set your own grading rules for essays, short answers, and more.
            </p>
            <p className="text-gray-600 mt-2">
              Transparent Process: See how AI works—non-box edit scores.
            </p>
            <button className="btn bg-green-500 text-white hover:bg-green-600 px-6 py-3 rounded-lg mt-6">
              Try Evaluation Free for 30 Days
            </button>
          </div>
        </div>
      </section>

      {/* Review & Share Section */}
      <section className="flex flex-col items-center py-16 bg-white">
        <div className="flex flex-col md:flex-row w-full max-w-6xl px-4">
          <div className="w-full md:w-1/2 p-4">
            <p className="text-3xl font-semibold text-green-800">Review, Refine, and Share Feedback—All in One Place</p>
            <p className="text-gray-600 mt-4">
              Interactive Dashboards: See question breakdowns, class averages, student progress, and more.
            </p>
            <p className="text-gray-600 mt-2">
              One-Click Exports: Download marksheets in CSV, PDF, or share via email, LMS, or other platforms.
            </p>
            <p className="text-gray-600 mt-2">
              Private & Secure: Send feedback via email, LMS, or private links—no manual entry.
            </p>
            <button className="btn bg-green-500 text-white hover:bg-green-600 px-6 py-3 rounded-lg mt-6">
              Download a Sample Marksheet
            </button>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Placeholder for Review Interface</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="flex flex-col items-center py-16 bg-green-50">
        <p className="text-3xl font-semibold text-green-800">Simple, Transparent Pricing</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mt-10 px-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-xl font-semibold text-green-700">Starter</p>
            <p className="text-gray-600 mt-2">Perfect for individual teachers</p>
            <ul className="text-gray-600 mt-4 space-y-2">
              <li>Features List</li>
              <li>Unlimited assignments</li>
              <li>Basic analytics</li>
              <li>Email support</li>
            </ul>
            <button className="btn bg-green-500 text-white hover:bg-green-600 px-6 py-3 rounded-lg mt-6 w-full">
              Get Started
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-green-500">
            <p className="text-xl font-semibold text-green-700">School Popular</p>
            <p className="text-gray-600 mt-2">Best for schools</p>
            <ul className="text-gray-600 mt-4 space-y-2">
              <li>Features List</li>
              <li>Unlimited assignments</li>
              <li>Advanced analytics</li>
              <li>Priority support</li>
              <li>Custom rubrics</li>
            </ul>
            <button className="btn bg-green-500 text-white hover:bg-green-600 px-6 py-3 rounded-lg mt-6 w-full">
              Get Started
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-xl font-semibold text-green-700">University</p>
            <p className="text-gray-600 mt-2">Tailored for universities</p>
            <ul className="text-gray-600 mt-4 space-y-2">
              <li>Features List</li>
              <li>Custom integrations</li>
              <li>Dedicated support</li>
              <li>SLA guarantees</li>
              <li>Training sessions</li>
              <li>Custom features</li>
            </ul>
            <button className="btn bg-green-500 text-white hover:bg-green-600 px-6 py-3 rounded-lg mt-6 w-full">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="flex flex-col items-center py-16 bg-white">
        <p className="text-3xl font-semibold text-green-800">Frequently Asked Questions</p>
        <div className="max-w-4xl mt-10 px-4">
          <details className="bg-green-50 p-4 rounded-lg mb-4">
            <summary className="text-lg font-semibold text-green-700">How accurate is the AI grading?</summary>
            <p className="text-gray-600 mt-2">
              Our AI is designed to be highly accurate, leveraging advanced machine learning algorithms. It’s trained on diverse datasets and continuously improves with user feedback.
            </p>
          </details>
          <details className="bg-green-50 p-4 rounded-lg mb-4">
            <summary className="text-lg font-semibold text-green-700">Can I customize the grading rubric?</summary>
            <p className="text-gray-600 mt-2">
              Yes, you can fully customize the grading rubrics to align with your specific evaluation criteria.
            </p>
          </details>
          <details className="bg-green-50 p-4 rounded-lg mb-4">
            <summary className="text-lg font-semibold text-green-700">How secure is my student data?</summary>
            <p className="text-gray-600 mt-2">
              We prioritize security with end-to-end encryption and compliance with global data protection standards.
            </p>
          </details>
        </div>
      </section>

      {/* Testimonials Section (Corrected) */}
      <section className="flex flex-col items-center py-16 bg-green-50">
        <p className="text-3xl font-semibold text-green-800">Teachers Love {appName}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mt-10 px-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 italic">
              &quot;{appName} has been a game-changer for grading and providing feedback.&quot;
            </p>
            <p className="text-green-700 font-semibold mt-4">Emily Carter</p>
            <p className="text-gray-600">High School English Teacher</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 italic">
              &quot;The AI-powered grading is accurate and saves me hours.&quot;
            </p>
            <p className="text-green-700 font-semibold mt-4">Dr. Susan Chen</p>
            <p className="text-gray-600">Department Head, CS</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 italic">
              &quot;It’s made grading so much easier and more efficient.&quot;
            </p>
            <p className="text-green-700 font-semibold mt-4">Michael Roberts</p>
            <p className="text-gray-600">Professor, Mathematics</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-center py-16 bg-green-500 text-white">
        <p className="text-3xl font-semibold">Ready to Transform Your Assessment Process?</p>
        <p className="text-xl mt-4 max-w-2xl text-center">
          Join educators worldwide who save time and provide better feedback with {appName}.
        </p>
        <button className="btn bg-white text-green-700 hover:bg-gray-100 px-6 py-3 rounded-lg mt-6">
          Start Your Free Trial
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-green-50 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <img src="/logo.png" alt="logo" className="h-8 mb-2" />
            <p className="text-gray-600">© 2025 {appName}. All rights reserved.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-green-700 font-semibold">Product</p>
              <ul className="text-gray-600 mt-2 space-y-1">
                <li>Features</li>
                <li>Pricing</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <p className="text-green-700 font-semibold">Benefits & Solutions</p>
              <ul className="text-gray-600 mt-2 space-y-1">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <p className="text-green-700 font-semibold">Resources</p>
              <ul className="text-gray-600 mt-2 space-y-1">
                <li>Documentation</li>
                <li>Guides</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <p className="text-green-700 font-semibold">Legal</p>
              <ul className="text-gray-600 mt-2 space-y-1">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>GDPR</li>
              </ul>
            </div>
          </div>
          <div className="flex space-x-4 mt-6 md:mt-0">
            <FaFacebookF className="text-green-700 hover:text-green-900" />
            <FaTwitter className="text-green-700 hover:text-green-900" />
            <FaInstagram className="text-green-700 hover:text-green-900" />
          </div>
        </div>
      </footer>
    </div>
  );
}
