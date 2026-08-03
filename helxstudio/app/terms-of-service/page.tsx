import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Advancments/Navbar";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms of Service | Helx Studio",
  description:
    "Terms and Conditions for using Helx Studio's website and services, including project scope, payments, revisions, and intellectual property rights.",
  twitter: {
    card: "summary_large_image",
    title: "Helx Studio | Term of Service ",
    description:
      "Helx Studio designs and builds fast, high-converting websites for growing startups. From idea to launch — beautifully built, engineered to perform.",
    images: ["./og-image.png"],
    creator: "@hiteshxdev",
  },
};
const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col justify-between">
      <Navbar />

      <main className="w-full max-w-2xl mx-auto px-6 py-16 md:py-24 flex-1">
        {/* Header section */}
        <div className="text-center flex flex-col items-center gap-3 mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-base md:text-lg text-neutral-500 max-w-lg leading-relaxed">
            The terms and conditions for working with Helx Studio and using our
            website and services.
          </p>
          <div className="mt-2">
            <span className="inline-flex items-center rounded-full bg-neutral-50 px-3.5 py-1 text-xs font-medium text-neutral-500 border border-neutral-200/80">
              Last updated - May 25, 2026
            </span>
          </div>
        </div>

        {/* Content section */}
        <div className="space-y-6 text-neutral-600 leading-relaxed text-base font-normal">
          <p>
            These Terms of Service govern your use of helxstudio.in and any
            services provided by Helx Studio.
          </p>
          <p>
            By accessing the website, contacting us, or working with Helx
            Studio, you agree to these terms. We may update them from time to
            time and will revise the “Last updated” date when changes are made.
          </p>
          <p>
            Our Privacy Policy is part of these Terms and explains how we
            collect and handle your data.
          </p>

          {/* Section: Services */}
          <div className="pt-6">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight mb-4">
              Services
            </h2>
            <div className="space-y-4">
              <p>
                Studio provides design and development services, including
                website design, software build-up, product design, brand
                identity, and ai automation stuff.
              </p>
              <p>
                Project scope, pricing, timelines, and deliverables are agreed
                upon individually before work begins. Any requests outside the
                agreed scope may require additional time, fees, or a revised
                agreement.
              </p>
            </div>
          </div>

          {/* Section: Payments and Refunds */}
          <div className="pt-6">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight mb-4">
              Payments and Refunds
            </h2>
            <div className="space-y-4">
              <p>
                Payments are processed securely through trusted third-party
                providers.
              </p>
              <p>
                Project-based services typically require an upfront payment
                before work begins, with the remaining balance due according to
                the agreed payment schedule.
              </p>
              <p>
                Monthly design partnerships are billed in advance on a recurring
                basis and may be paused or cancelled in accordance with the
                agreed terms.
              </p>
              <p>
                Because our work consists of custom creative services and
                time-based engagements, payments are generally non-refundable
                once work has started.
              </p>
              <p>
                If you experience an issue with a project or service, please
                contact us and we'll work with you to reach a fair resolution.
              </p>
            </div>
          </div>

          {/* Section: Revisions */}
          <div className="pt-6">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight mb-4">
              Revisions
            </h2>
            <div className="space-y-4">
              <p>
                Project-based services include revisions as outlined in the
                individual project agreement.
              </p>
              <p>
                Revisions are intended to refine the agreed direction and do not
                include complete redesigns, new concepts, or significant changes
                in project scope after work has begun.
              </p>
              <p>
                For ongoing design partnerships, revisions are included as part
                of the active engagement.
              </p>
            </div>
          </div>

          {/* Section: Client Responsibilities */}
          <div className="pt-6">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight mb-4">
              Client Responsibilities
            </h2>
            <div className="space-y-4">
              <p>
                Clients are responsible for providing necessary content,
                feedback, assets, and approvals in a timely manner to avoid
                project delays.
              </p>
              <p>
                Helx Studio is not responsible for delays caused by missing
                content, delayed communication, or third-party platforms and
                services.
              </p>
            </div>
          </div>

          {/* Section: Intellectual Property */}
          <div className="pt-6">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight mb-4">
              Intellectual Property
            </h2>
            <div className="space-y-4">
              <p>
                Unless otherwise agreed in writing, ownership of final approved
                deliverables transfers to the client once the project has been
                completed and all outstanding payments have been received.
              </p>
              <p>
                Working files, concepts, drafts, design explorations, and other
                unused materials remain the property of Helx Studio unless
                explicitly included in the project agreement.
              </p>
              <p>
                Helx Studio reserves the right to showcase completed work in its
                portfolio, website, social media, and promotional materials
                unless otherwise agreed in writing.
              </p>
            </div>
          </div>

          {/* Section: Third-Party Services */}
          <div className="pt-6">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight mb-4">
              Third-Party Services
            </h2>
            <div className="space-y-4">
              <p>
                Projects may rely on third-party tools and platforms including,
                but not limited to, Code, Figma, Stripe, Contra, Slack,
                scheduling software, analytics services, domain registrars,
                hosting providers, and other software required to deliver our
                services.
              </p>
              <p>
                Studio is not responsible for outages, pricing changes, service
                limitations, or other issues caused by third-party providers.
              </p>
            </div>
          </div>

          {/* Section: Service Availability */}
          <div className="pt-6">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight mb-4">
              Service Availability
            </h2>
            <p>
              Services and website content are provided “as is” and “as
              available.” While we aim to provide reliable, high-quality work,
              we cannot guarantee uninterrupted website availability or
              compatibility with every third-party tool or platform.
            </p>
          </div>

          {/* Section: Limitation of Liability */}
          <div className="pt-6">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight mb-4">
              Limitation of Liability
            </h2>
            <div className="space-y-4">
              <p>
                To the fullest extent permitted by law, Studio will not be
                liable for any indirect, incidental, or consequential damages
                resulting from the use of our services or website.
              </p>
              <p>
                Our total liability for any claim related to a project or
                service will not exceed the total amount paid for the specific
                project.
              </p>
            </div>
          </div>

          {/* Section: Contact */}
          <div className="pt-6">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight mb-4">
              Contact
            </h2>
            <p className="mb-4">
              If you have questions about these Terms of Service, please
              contact:
            </p>
            <div className=" space-y-2">
              <p>
                Email:
                <a
                  href="mailto:helxstudio@gmail.com"
                  className="text-neutral-900 hover:underline underline-offset-4 font-medium"
                >
                  helxstudio@gmail.com
                </a>
              </p>
              <p>
                Website:
                <Link
                  href="https://helxstudio.in"
                  className="text-neutral-900 hover:underline underline-offset-4 font-medium"
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

export default TermsOfServicePage;
