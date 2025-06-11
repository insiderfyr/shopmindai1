import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import Head from "next/head";

export default function AccessibilityStatement() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Accessibility Statement", href: "/accessibility" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Accessibility Statement - ShopMindAI</title>
        <meta name="description" content="ShopMindAI Accessibility Statement" />
      </Head>
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg rounded-lg my-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-[#3B82F6] dark:text-[#6d9eff]">
          Accessibility Statement
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Our Commitment to Accessibility</h2>
          <p className="mb-4 leading-relaxed">
            ShopMindAI is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Accessibility Standards</h2>
          <p className="mb-4 leading-relaxed">
            We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible for people with a wide array of disabilities.
            Conformance with these guidelines will help make the web more user-friendly for everyone.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Feedback</h2>
          <p className="mb-4 leading-relaxed">
            We welcome your feedback on the accessibility of ShopMindAI. If you encounter accessibility barriers on ShopMindAI, please do not hesitate to contact us:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4 leading-relaxed">
            <li>E-mail: <a href="mailto:accessibility@shopmindai.com" className="text-[#3B82F6] dark:text-[#6d9eff] hover:underline">accessibility@shopmindai.com</a></li>
            <li>Phone: +1-800-123-4567</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Date</h2>
          <p className="leading-relaxed">
            This statement was created on 2024-05-23.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
} 