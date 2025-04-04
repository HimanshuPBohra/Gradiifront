"use client";
import { apkURL, appName } from "@/utils/config";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiAward, FiClock, FiDatabase, FiLayers, FiPlus, FiZap } from "react-icons/fi";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, []);

  const faqs = [
    {
      question: "How does Gradii.ai grade assignments?",
      answer: "Our AI reads student work like a super-smart teacher, checking answers, writing quality, and creativity based on your rules."
    },
    {
      question: "Is the AI grading accurate?",
      answer: "Yes! It's trained on thousands of top-tier assignments and learns constantly to match human accuracy (but way faster)."
    },
    {
      question: "Can I adjust how the AI grades?",
      answer: "Absolutely! Customize rubrics to fit your style—add rules for grammar, critical thinking, or even teamwork."
    },
    {
      question: "How does personalized feedback help students?",
      answer: "Kids get clear tips (like \"Great intro! Add more examples next time\") to improve faster, without waiting for office hours."
    },
    {
      question: "Can I grade 50+ assignments at once?",
      answer: "Yep! Upload a whole class's work in one click. The AI sorts, grades, and sends feedback automatically."
    },
    {
      question: "Does Gradii.ai work with Google Classroom?",
      answer: "Yes! Sync grades and feedback directly to your LMS—no extra steps."
    },
    {
      question: "Is my students' data safe?",
      answer: "100%. We use bank-level encryption and never share data with third parties."
    },
    {
      question: "What subjects does Gradii.ai support?",
      answer: "Everything! Essays, math, coding, science labs, art portfolios—you name it."
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full flex justify-between items-center h-16 bg-white/90 backdrop-blur-sm text-black z-10 p-5 shadow-md"
        role="navigation"
      >
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img src="/logo.png" alt="logo" className="mr-2 h-8" />
          <h1 className="text-2xl font-semibold text-green-700">{appName}</h1>
        </motion.div>
        {isLoggedIn ? (
          <div className="md:block hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "/dashboard")}
              className="btn bg-green-500 text-white hover:bg-green-600 px-4 py-2 rounded-lg shadow-lg"
            >
              Go to Dashboard
            </motion.button>
          </div>
        ) : (
          <div className="md:flex hidden items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "/auth/login")}
              className="btn text-green-700 hover:text-green-900 font-medium"
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#22c55e" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "/auth/signup")}
              className="btn bg-green-500 text-white hover:bg-green-600 px-6 py-2 rounded-lg shadow-lg"
            >
              Start Free Trial
            </motion.button>
          </div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen pt-24 bg-gradient-to-br from-green-50 via-white to-green-50 px-4">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 relative"
          >
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-60 z-0"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-200 rounded-full blur-3xl opacity-60 z-0"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-8 relative z-10">
              Grade Faster, Smarter,
              <span className="text-green-600 block mt-2">and Fairer with AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 relative z-10">
              Say goodbye to manual grading. Get accurate, consistent results in seconds, with feedback students actually understand.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Link href="/auth/signup">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(34, 197, 94, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="btn bg-green-500 text-white hover:bg-green-600 px-8 py-4 rounded-xl text-lg font-semibold shadow-xl"
                >
                  Start Free Trial
                </motion.button>
              </Link>
              <Link href="#features">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn bg-white text-green-700 hover:bg-green-50 px-8 py-4 rounded-xl text-lg font-semibold border-2 border-green-200"
                >
                  See How It Works
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-green-500 mb-6 bg-green-50 w-14 h-14 rounded-xl flex items-center justify-center">
                <FiZap size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-green-800">AI that grades like a pro</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Advanced algorithms analyze essays, quizzes, and projects with 99% accuracy, eliminating human bias.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-green-500 mb-6 bg-green-50 w-14 h-14 rounded-xl flex items-center justify-center">
                <FiAward size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-green-800">Feedback that boosts growth</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Auto-generate tailored comments for each student—spot strengths and gaps instantly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-green-500 mb-6 bg-green-50 w-14 h-14 rounded-xl flex items-center justify-center">
                <FiLayers size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-green-800">Consistency you can trust</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Ensure every assignment is graded to the same high standard, no matter the class size.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl mb-24 group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src="/landing/landing_1.png"
              alt="Dashboard Preview"
              className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-end justify-center p-8">
              <Link href="/auth/signup">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(34, 197, 94, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="btn bg-green-500 text-white hover:bg-green-600 px-8 py-4 rounded-xl text-lg font-semibold shadow-xl backdrop-blur-sm"
                >
                  Get Started Now
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-green-50 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-green-800 mb-6">
              Unlock Student Potential with Data-Driven Teaching
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track progress, adapt strategies, and prove results—all in one dashboard.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-green-500 mb-4">
                <FiDatabase size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Deep performance analytics</h3>
              <p className="text-gray-600">
                Visualize trends with easy-to-read charts (think: weak topics, class averages, growth over time).
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-green-500 mb-4">
                <FiPlus size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customizable rubrics</h3>
              <p className="text-gray-600">
                Customize criteria for essays, STEM projects, or creative work—align with state or school standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-green-500 mb-4">
                <FiClock size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Time-saving automation</h3>
              <p className="text-gray-600">
                Grade entire classes in minutes, not days—perfect for finals or midterms.
              </p>
            </motion.div>
          </div>

          <div className="flex justify-center">
            <Link href="/auth/signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-green-500 text-white hover:bg-green-600 px-8 py-4 rounded-lg text-lg shadow-lg"
              >
                Get Grading Now
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Batch Processing Section */}
      <section className="flex flex-col items-center py-16 bg-white">
        <div className="flex flex-col md:flex-row w-full max-w-6xl px-4">
          <motion.div 
            className="w-full md:w-1/2 p-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
            <motion.button 
              className="btn bg-green-500 text-white hover:bg-green-600 px-6 py-3 rounded-lg mt-6 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Start Grading in Minutes
            </motion.button>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2 p-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="relative rounded-xl overflow-hidden shadow-2xl"
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <img 
                src="/landing/landing_2.png" 
                alt="Upload Interface" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Evaluation Section */}
      <section className="flex flex-col items-center py-16 bg-green-50">
        <div className="flex flex-col md:flex-row w-full max-w-6xl px-4">
          <motion.div 
            className="w-full md:w-1/2 p-4 order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="relative rounded-xl overflow-hidden shadow-2xl"
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <img 
                src="/landing/landing_3.png" 
                alt="Evaluation Interface" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2 p-4 order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-3xl font-semibold text-green-800">
              AI-Powered Evaluation: Consistent, Customizable, & Effortless
            </p>
            <p className="text-gray-600 mt-4">
              Maintain consistency across all assessments while focusing on what matters most - teaching and student development.
            </p>
            <p className="text-gray-600 mt-2">
              Custom Rubrics: Set your own grading rules for essays, short answers, and more with intuitive controls.
            </p>
            <p className="text-gray-600 mt-2">
              Transparent Process: See how AI works and maintain full control over the evaluation process.
            </p>
            <motion.button 
              className="btn bg-green-500 text-white hover:bg-green-600 px-6 py-3 rounded-lg mt-6 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Try Evaluation Free for 30 Days
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Review & Share Section */}
      <section className="flex flex-col items-center py-16 bg-white">
        <div className="flex flex-col md:flex-row w-full max-w-6xl px-4">
          <motion.div 
            className="w-full md:w-1/2 p-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-3xl font-semibold text-green-800">Review, Refine, and Share Feedback—All in One Place</p>
            <p className="text-gray-600 mt-4">
              Interactive Dashboards: See question breakdowns, class averages, student progress, and more with beautiful visualizations.
            </p>
            <p className="text-gray-600 mt-2">
              One-Click Exports: Download marksheets in CSV, PDF, or share via email, LMS, or other platforms with ease.
            </p>
            <p className="text-gray-600 mt-2">
              Private & Secure: Send feedback via email, LMS, or private links with end-to-end encryption.
            </p>
            <motion.button 
              className="btn bg-green-500 text-white hover:bg-green-600 px-6 py-3 rounded-lg mt-6 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Download a Sample Marksheet
            </motion.button>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2 p-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="relative rounded-xl overflow-hidden shadow-2xl"
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <img 
                src="/landing/landing_4.png" 
                alt="Review Interface" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="flex flex-col items-center py-24 bg-green-50 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-60"></div>
        
        <motion.p 
          className="text-4xl font-bold text-green-800 text-center mb-4 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Teachers Love {appName}
        </motion.p>
        
        <motion.p 
          className="text-xl text-gray-600 text-center max-w-2xl mb-16 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join thousands of educators who are transforming their grading process
        </motion.p>
      
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl px-4 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-[100px] group-hover:bg-green-100 transition-colors duration-300"></div>
            <div className="relative z-10">
              <p className="text-gray-600 italic text-lg leading-relaxed mb-8">
                "{appName} has transformed my grading process. The AI feedback is incredibly accurate and saves me hours each week!"
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mr-4 text-green-700 font-bold text-xl">
                  EC
                </div>
                <div>
                  <p className="text-green-700 font-semibold text-lg">Emily Carter</p>
                  <p className="text-gray-600">High School English Teacher</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-green-100 rounded-bl-full z-0"></div>
            <div className="relative z-10">
              <p className="text-gray-600 italic text-lg">
                "The AI-powered grading is accurate and saves me hours. My students appreciate the consistent feedback."
              </p>
              <div className="mt-6 flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-700 font-bold text-xl">SC</span>
                </div>
                <div>
                  <p className="text-green-700 font-semibold">Dr. Susan Chen</p>
                  <p className="text-gray-600">Department Head, CS</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-green-100 rounded-bl-full z-0"></div>
            <div className="relative z-10">
              <p className="text-gray-600 italic text-lg">
                "It's made grading so much easier and more efficient. The analytics help me identify areas where students need more support."
              </p>
              <div className="mt-6 flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-700 font-bold text-xl">MR</span>
                </div>
                <div>
                  <p className="text-green-700 font-semibold">Michael Roberts</p>
                  <p className="text-gray-600">Professor, Mathematics</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-center py-16 bg-green-500 text-white">
        <motion.p 
          className="text-3xl font-semibold text-center max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to Transform Your Assessment Process?
        </motion.p>
        <motion.p 
          className="text-xl mt-4 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join educators worldwide who save time and provide better feedback with {appName}.
        </motion.p>
        <motion.button 
          className="btn bg-white text-green-700 hover:bg-gray-100 px-8 py-4 rounded-lg mt-8 text-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (window.location.href = "/auth/signup")}
        >
          Start Your Free Trial
        </motion.button>
        
        <motion.div 
          className="flex items-center mt-8 space-x-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Cancel anytime</span>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-green-800 mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: activeFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: activeFaq === index ? "auto" : 0,
                    opacity: activeFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="p-6 pt-0 text-gray-600">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="logo" className="mr-2 h-8" />
              <h3 className="text-xl font-semibold">{appName}</h3>
            </div>
            <p className="text-green-200">
              Revolutionizing education assessment with AI-powered grading solutions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-green-200">
              <li>Features</li>
              <li>Pricing</li>
              <li>Use Cases</li>
              <li>Security</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-green-200">
              <li>About Us</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-green-200">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>GDPR</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-green-800 text-center text-green-200">
          <p>© {new Date().getFullYear()} {appName}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
