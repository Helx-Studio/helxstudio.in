import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Advancments/Navbar";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy | Helx Studio",
  description:
    "How we protect your privacy, what data we collect, and your rights over your information.",
  twitter: {
    card: "summary_large_image",
    title: "Helx Studio | Privacy Policy",
    description:
      "Helx Studio designs and builds fast, high-converting websites for growing startups. From idea to launch — beautifully built, engineered to perform.",
    images: ["./og-image.png"],
    creator: "@hiteshxdev",
  },
  alternates: {
    canonical: "https://helxstudio.in/privacy-policy",
  },
};
const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col justify-between">
      <Navbar />

      <main className="w-full max-w-2xl tracking-tight mx-auto px-6 py-16 md:py-24 flex-1">
        {/* Header section */}
        <div className="text-center flex flex-col items-center gap-3 mb-12">
          <h1 className="text-3xl t md:text-4xl font-bold text-neutral-900 tracking-tighter">
            Privacy Policy
          </h1>
          <p className="text-base md:text-lg text-neutral-500 max-w-lg leading-relaxed">
            How we protect your privacy, what data we collect, and your rights
            over your information.
          </p>
        </div>

        {/* Content section */}
        <div className="space-y-6 text-neutral-600 leading-relaxed text-base font-normal">
          <p>
            This Privacy Policy explains how Default Studio collects, uses, and
            protects information when you visit default-studio.com or contact us
            about our services.
          </p>

          <p>
            We believe privacy should be simple: we only collect the information
            necessary to operate the website, communicate with clients, and
            deliver our services. We never sell your data and never share it
            with advertisers.
          </p>

          <p>
            By using our website, you agree to the practices described in this
            policy.
          </p>

          {/* Section: Information We Collect */}
          <div className="pt-6">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight mb-4">
              Information We Collect
            </h2>
            <div className="space-y-4">
              <p>
                When you contact us, book a call, submit an inquiry, or
                subscribe to updates, we may collect basic information such as
                your name, email address, company name, and project details.
              </p>
              <p>
                Payments are processed securely through trusted third-party
                providers, and we do not store credit card details.
              </p>
              <p>
                Like most websites, we also collect limited technical
                information automatically, such as IP address, browser type,
                device information, pages visited, and referral sources. This
                helps us understand how visitors use the website and improve the
                overall experience.
              </p>
            </div>
          </div>

          {/* Section: How We Use Your Information */}
          <div className="pt-6">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight mb-4">
              How We Use Your Information
            </h2>
            <p className="mb-3">We use collected information to:</p>
            <ul className="space-y-2.5 list-none pl-1">
              <li className="flex items-start gap-2.5">
                <span className="text-neutral-400 select-none mt-0.5">•</span>
                <span>Respond to inquiries and project requests</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-neutral-400 select-none mt-0.5">•</span>
                <span>Communicate about ongoing projects or services</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-neutral-400 select-none mt-0.5">•</span>
                <span>Process invoices and payments</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-neutral-400 select-none mt-0.5">•</span>
                <span>
                  Improve our website, services, and client experience
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-neutral-400 select-none mt-0.5">•</span>
                <span>
                  Send occasional updates or important information related to
                  Default Studio
                </span>
              </li>
            </ul>
          </div>

          {/* Section: Contact */}
          <div className="pt-6">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight mb-4">
              Contact
            </h2>
            <p className="mb-4">
              If you have questions about this Privacy Policy or how your data
              is handled, please contact:
            </p>
            <div className="space-y-2">
              <p>
                Email:
                <a
                  href="mailto:helxstudio@gmail.com"
                  className=" underline underline-offset-2 hover:underline-none text-blue-600 font-medium"
                >
                  helxstudio@gmail.com
                </a>
              </p>
              <p>
                Website:
                <Link
                  href="https://helxstudio.in"
                  className=" underline underline-offset-2 hover:underline-none text-blue-600 font-medium"
                >
                  helxstudio.in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
