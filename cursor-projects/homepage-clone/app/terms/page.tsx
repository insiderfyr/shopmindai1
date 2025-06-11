import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import Head from "next/head";

export default function TermsOfService() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Terms of Service", href: "/terms" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Terms of Service - ShopMindAI</title>
        <meta name="description" content="ShopMindAI Terms of Service" />
      </Head>
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg rounded-lg my-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-[#3B82F6] dark:text-[#6d9eff]">
          Terms of Service
        </h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p className="mb-4 leading-relaxed">
            By accessing or using the ShopMindAI website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are
            protected by applicable copyright and trademark law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">2. Use License</h2>
          <p className="mb-4 leading-relaxed">
            Permission is granted to temporarily download one copy of the materials (information or software) on ShopMindAI's website for personal, non-commercial transitory viewing only.
            This is the grant of a license, not a transfer of title, and under this license, you may not:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4 leading-relaxed">
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>Attempt to decompile or reverse engineer any software contained on ShopMindAI's website;</li>
            <li>Remove any copyright or other proprietary notations from the materials; or</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>
          <p className="leading-relaxed">
            This license shall automatically terminate if you violate any of these restrictions and may be terminated by ShopMindAI at any time.
            Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">3. Disclaimer</h2>
          <p className="mb-4 leading-relaxed">
            The materials on ShopMindAI's website are provided on an 'as is' basis. ShopMindAI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation,
            implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <p className="leading-relaxed">
            Further, ShopMindAI does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Limitations</h2>
          <p className="mb-4 leading-relaxed">
            In no event shall ShopMindAI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ShopMindAI's website,
            even if ShopMindAI or a ShopMindAI authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages,
            these limitations may not apply to you.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
} 