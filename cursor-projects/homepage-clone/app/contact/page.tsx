import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import Head from "next/head";

export default function Contact() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Contact Us - ShopMindAI</title>
        <meta name="description" content="Contact ShopMindAI for support or inquiries." />
      </Head>
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg rounded-lg my-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-[#3B82F6] dark:text-[#6d9eff]">
          Contact Us
        </h1>

        <section className="mb-8 text-center">
          <p className="text-lg leading-relaxed mb-4">
            We're here to help! Please choose from the options below or fill out the contact form.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="w-full md:w-1/3 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-[#3B82F6] dark:text-[#6d9eff]">Email Support</h2>
              <p className="mb-3">For general inquiries and support, email us at:</p>
              <a href="mailto:support@shopmindai.com" className="text-[#3B82F6] dark:text-[#6d9eff] hover:underline font-medium">support@shopmindai.com</a>
            </div>
            <div className="w-full md:w-1/3 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-[#3B82F6] dark:text-[#6d9eff]">Phone Support</h2>
              <p className="mb-3">Speak to our team during business hours:</p>
              <a href="tel:+18001234567" className="text-[#3B82F6] dark:text-[#6d9eff] hover:underline font-medium">+1 (800) 123-4567</a>
              <p className="text-sm text-gray-500 dark:text-gray-400">(Mon-Fri, 9 AM - 5 PM EST)</p>
            </div>
          </div>
        </section>

        <section className="mt-12 max-w-2xl mx-auto p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-center text-[#3B82F6] dark:text-[#6d9eff]">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#3B82F6] focus:border-[#3B82F6] dark:bg-gray-900 dark:text-gray-100 dark:focus:ring-[#6d9eff] dark:focus:border-[#6d9eff] sm:text-sm"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#3B82F6] focus:border-[#3B82F6] dark:bg-gray-900 dark:text-gray-100 dark:focus:ring-[#6d9eff] dark:focus:border-[#6d9eff] sm:text-sm"
                placeholder="your@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#3B82F6] focus:border-[#3B82F6] dark:bg-gray-900 dark:text-gray-100 dark:focus:ring-[#6d9eff] dark:focus:border-[#6d9eff] sm:text-sm"
                placeholder="Subject of your inquiry"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#3B82F6] focus:border-[#3B82F6] dark:bg-gray-900 dark:text-gray-100 dark:focus:ring-[#6d9eff] dark:focus:border-[#6d9eff] sm:text-sm"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#3B82F6] hover:bg-[#326ee6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B82F6] transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
} 