import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import Head from "next/head";

export default function CookiePolicy() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Cookie Policy", href: "/cookies" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Cookie Policy - ShopMindAI</title>
        <meta name="description" content="ShopMindAI Cookie Policy" />
      </Head>
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg rounded-lg my-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-[#3B82F6] dark:text-[#6d9eff]">
          Cookie Policy
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">1. What are Cookies?</h2>
          <p className="mb-4 leading-relaxed">
            Cookies are small pieces of data stored on your device (computer or mobile device) when you visit a website. They are widely used to make websites work more efficiently and to provide reporting information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">2. How We Use Cookies</h2>
          <p className="mb-4 leading-relaxed">
            We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. Specifically, our cookies are used for:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4 leading-relaxed">
            <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
            <li><strong>Performance Cookies:</strong> Collect information about how you use our website, like which pages you visited.</li>
            <li><strong>Functionality Cookies:</strong> Remember your preferences and choices (e.g., language or region).</li>
            <li><strong>Advertising Cookies:</strong> Deliver relevant advertisements to you based on your interests.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">3. Your Cookie Choices</h2>
          <p className="mb-4 leading-relaxed">
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided below, or by modifying your browser settings.
          </p>
          <div className="mt-6 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700">
            <h3 className="text-xl font-medium mb-3">Manage Your Cookie Preferences</h3>
            <div className="flex items-center justify-between mb-3">
              <span className="text-lg">Essential Cookies</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" checked disabled />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#3B82F6]"></div>
              </label>
            </div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-lg">Performance Cookies</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#3B82F6]"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg">Advertising Cookies</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#3B82F6]"></div>
              </label>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              Note: Essential cookies cannot be disabled as they are critical for the website's basic functionality.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 