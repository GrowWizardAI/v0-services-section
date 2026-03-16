import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy — GrowWizardAI",
  description: "GrowWizardAI cookie policy and tracking technology disclosures.",
}

function CookieTable({
  cookies,
}: {
  cookies: {
    name: string
    purpose?: string
    provider: string
    service: string
    type: string
    expires: string
  }[]
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border/30 mt-3 mb-6">
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-border/30 bg-muted/20">
            <th className="px-3 py-2 text-left font-semibold text-foreground/70">Name</th>
            <th className="px-3 py-2 text-left font-semibold text-foreground/70">Purpose</th>
            <th className="px-3 py-2 text-left font-semibold text-foreground/70">Provider</th>
            <th className="px-3 py-2 text-left font-semibold text-foreground/70">Service</th>
            <th className="px-3 py-2 text-left font-semibold text-foreground/70">Type</th>
            <th className="px-3 py-2 text-left font-semibold text-foreground/70">Expires</th>
          </tr>
        </thead>
        <tbody>
          {cookies.map((c) => (
            <tr key={c.name} className="border-b border-border/20 last:border-0">
              <td className="px-3 py-2 font-mono text-foreground/80">{c.name}</td>
              <td className="px-3 py-2 text-muted-foreground">{c.purpose ?? "—"}</td>
              <td className="px-3 py-2 text-muted-foreground">{c.provider}</td>
              <td className="px-3 py-2 text-muted-foreground">{c.service}</td>
              <td className="px-3 py-2 text-muted-foreground">{c.type}</td>
              <td className="px-3 py-2 text-muted-foreground whitespace-nowrap">{c.expires}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function CookiesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
      <div className="mb-10">
        <a
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to GrowWizardAI
        </a>
      </div>

      <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground mb-1">Cookie Policy</h1>
          <p className="text-xs text-muted-foreground/60">Last updated March 16, 2026</p>
        </div>

        <p>
          This Cookie Policy explains how GrowWizardAI ("Company," "we," "us," and "our") uses
          cookies and similar technologies to recognize you when you visit our website at{" "}
          <a href="https://growwizardai.com" className="text-primary hover:underline">
            https://growwizardai.com
          </a>{" "}
          ("Website"). It explains what these technologies are and why we use them, as well as your
          rights to control our use of them.
        </p>

        <p>
          In some cases we may use cookies to collect personal information, or that becomes personal
          information if we combine it with other information.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-8">What are cookies?</h2>
        <p>
          Cookies are small data files that are placed on your computer or mobile device when you
          visit a website. Cookies are widely used by website owners in order to make their websites
          work, or to work more efficiently, as well as to provide reporting information.
        </p>
        <p>
          Cookies set by the website owner (in this case, GrowWizardAI) are called "first-party
          cookies." Cookies set by parties other than the website owner are called "third-party
          cookies." Third-party cookies enable third-party features or functionality to be provided
          on or through the website (e.g., advertising, interactive content, and analytics). The
          parties that set these third-party cookies can recognize your computer both when it visits
          the website in question and also when it visits certain other websites.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-8">Why do we use cookies?</h2>
        <p>
          We use first- and third-party cookies for several reasons. Some cookies are required for
          technical reasons in order for our Website to operate, and we refer to these as "essential"
          or "strictly necessary" cookies. Other cookies also enable us to track and target the
          interests of our users to enhance the experience on our Online Properties. Third parties
          serve cookies through our Website for advertising, analytics, and other purposes. This is
          described in more detail below.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-8">How can I control cookies?</h2>
        <p>
          You have the right to decide whether to accept or reject cookies. You can exercise your
          cookie rights by setting your preferences in the Cookie Preference Center. The Cookie
          Preference Center allows you to select which categories of cookies you accept or reject.
          Essential cookies cannot be rejected as they are strictly necessary to provide you with
          services.
        </p>
        <p>
          The Cookie Preference Center can be found in the notification banner and on our Website.
          If you choose to reject cookies, you may still use our Website though your access to some
          functionality and areas of our Website may be restricted. You may also set or amend your
          web browser controls to accept or refuse cookies.
        </p>
        <p>
          The specific types of first- and third-party cookies served through our Website and the
          purposes they perform are described in the table below (please note that the specific
          cookies served may vary depending on the specific Online Properties you visit):
        </p>

        {/* Essential */}
        <h3 className="text-base font-semibold text-foreground mt-6">Essential website cookies</h3>
        <p>
          These cookies are strictly necessary to provide you with services available through our
          Website and to use some of its features, such as access to secure areas.
        </p>
        <CookieTable
          cookies={[
            {
              name: "m",
              purpose: "Tracks the user's session for Stripe",
              provider: "m.stripe.com",
              service: "Stripe",
              type: "server_cookie",
              expires: "63072000 s",
            },
            {
              name: "rc::a",
              purpose:
                "Used to track and analyze user behavior to distinguish humans from bots or automated software.",
              provider: "www.recaptcha.net",
              service: "reCAPTCHA",
              type: "html_local_storage",
              expires: "Persistent",
            },
            {
              name: "__cf_bm",
              purpose:
                "Cloudflare places the cookie on end-user devices that access customer sites protected by Bot Management or Bot Fight Mode.",
              provider: ".calendly.com",
              service: "CloudFlare",
              type: "http_cookie",
              expires: "1797 s",
            },
            {
              name: "GCLB",
              purpose:
                "A session cookie that allows load balancing across the hosting group's servers.",
              provider: "featureassets.org",
              service: "Google Cloud",
              type: "server_cookie",
              expires: "1 s",
            },
          ]}
        />

        {/* Performance */}
        <h3 className="text-base font-semibold text-foreground mt-6">
          Performance and functionality cookies
        </h3>
        <p>
          These cookies are used to enhance the performance and functionality of our Website but are
          non-essential to their use. However, without these cookies, certain functionality (like
          videos) may become unavailable.
        </p>
        <CookieTable
          cookies={[
            {
              name: "_cfuvid",
              purpose:
                "Set by Cloudflare to enhance security and performance. Helps identify trusted web traffic and ensures a secure browsing experience.",
              provider: ".calendly.com",
              service: "Cloudflare",
              type: "server_cookie",
              expires: "Session",
            },
            {
              name: "OptanonConsent",
              purpose: "Stores cookie consent preferences.",
              provider: ".calendly.com",
              service: "OneTrust",
              type: "http_cookie",
              expires: "31536005 s",
            },
          ]}
        />

        {/* Analytics */}
        <h3 className="text-base font-semibold text-foreground mt-6">
          Analytics and customization cookies
        </h3>
        <p>
          These cookies collect information that is used either in aggregate form to help us
          understand how our Website is being used or how effective our marketing campaigns are, or
          to help us customize our Website for you.
        </p>
        <CookieTable
          cookies={[
            {
              name: "ajs_anonymous_id",
              purpose:
                "Helps count how many people visit a certain site by tracking if you have visited before.",
              provider: "calendly.com",
              service: "Segment",
              type: "html_local_storage",
              expires: "Persistent",
            },
            {
              name: "s7",
              purpose: "Gathers data regarding site usage and user behavior.",
              provider: "calendly.com",
              service: "Adobe Analytics",
              type: "server_cookie",
              expires: "31536000 s",
            },
            {
              name: "ajs_user_id",
              purpose:
                "Helps track visitor usage, events, and target marketing; also measures application performance and stability.",
              provider: "calendly.com",
              service: "Segment",
              type: "html_local_storage",
              expires: "Persistent",
            },
          ]}
        />

        {/* Unclassified */}
        <h3 className="text-base font-semibold text-foreground mt-6">Unclassified cookies</h3>
        <p>
          These are cookies that have not yet been categorized. We are in the process of classifying
          these cookies with the help of their providers.
        </p>
        <CookieTable
          cookies={[
            {
              name: "_cache",
              purpose: undefined,
              provider: "calendly.com",
              service: "—",
              type: "html_local_storage",
              expires: "Persistent",
            },
          ]}
        />

        <h2 className="text-lg font-semibold text-foreground mt-8">
          How can I control cookies on my browser?
        </h2>
        <p>
          As the means by which you can refuse cookies through your web browser controls vary from
          browser to browser, you should visit your browser&apos;s help menu for more information.
          The following is information about how to manage cookies on the most popular browsers:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          {["Chrome", "Internet Explorer", "Firefox", "Safari", "Edge", "Opera"].map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <p>
          In addition, most advertising networks offer you a way to opt out of targeted advertising.
          If you would like to find out more information, please visit:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Digital Advertising Alliance</li>
          <li>Digital Advertising Alliance of Canada</li>
          <li>European Interactive Digital Advertising Alliance</li>
        </ul>

        <h2 className="text-lg font-semibold text-foreground mt-8">
          What about other tracking technologies, like web beacons?
        </h2>
        <p>
          Cookies are not the only way to recognize or track visitors to a website. We may use
          other, similar technologies from time to time, like web beacons (sometimes called
          "tracking pixels" or "clear gifs"). These are tiny graphics files that contain a unique
          identifier that enables us to recognize when someone has visited our Website or opened an
          email including them. This allows us, for example, to monitor the traffic patterns of
          users from one page within a website to another, to deliver or communicate with cookies,
          to understand whether you have come to the website from an online advertisement displayed
          on a third-party website, to improve site performance, and to measure the success of email
          marketing campaigns. In many instances, these technologies are reliant on cookies to
          function properly, and so declining cookies will impair their functioning.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-8">
          Do you use Flash cookies or Local Shared Objects?
        </h2>
        <p>
          Websites may also use so-called "Flash Cookies" (also known as Local Shared Objects or
          "LSOs") to, among other things, collect and store information about your use of our
          services, fraud prevention, and for other site operations.
        </p>
        <p>
          If you do not want Flash Cookies stored on your computer, you can adjust the settings of
          your Flash player to block Flash Cookies storage using the tools contained in the Website
          Storage Settings Panel. You can also control Flash Cookies by going to the Global Storage
          Settings Panel and following the instructions (which may include instructions that
          explain, for example, how to delete existing Flash Cookies, how to prevent Flash LSOs from
          being placed on your computer without your being asked, and (for Flash Player 8 and later)
          how to block Flash Cookies that are not being delivered by the operator of the page you
          are on at the time).
        </p>
        <p>
          Please note that setting the Flash Player to restrict or limit acceptance of Flash Cookies
          may reduce or impede the functionality of some Flash applications, including, potentially,
          Flash applications used in connection with our services or online content.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-8">
          Do you serve targeted advertising?
        </h2>
        <p>
          Third parties may serve cookies on your computer or mobile device to serve advertising
          through our Website. These companies may use information about your visits to this and
          other websites in order to provide relevant advertisements about goods and services that
          you may be interested in. They may also employ technology that is used to measure the
          effectiveness of advertisements. They can accomplish this by using cookies or web beacons
          to collect information about your visits to this and other sites in order to provide
          relevant advertisements about goods and services of potential interest to you. The
          information collected through this process does not enable us or them to identify your
          name, contact details, or other details that directly identify you unless you choose to
          provide these.
        </p>

        <h2 className="text-lg font-semibold text-foreground mt-8">
          How often will you update this Cookie Policy?
        </h2>
        <p>
          We may update this Cookie Policy from time to time in order to reflect, for example,
          changes to the cookies we use or for other operational, legal, or regulatory reasons.
          Please therefore revisit this Cookie Policy regularly to stay informed about our use of
          cookies and related technologies.
        </p>
        <p>The date at the top of this Cookie Policy indicates when it was last updated.</p>

        <h2 className="text-lg font-semibold text-foreground mt-8">
          Where can I get further information?
        </h2>
        <p>
          If you have any questions about our use of cookies or other technologies, please contact
          us at:
        </p>
        <address className="not-italic space-y-0.5 text-sm">
          <p className="font-medium text-foreground">GrowWizardAI LLC</p>
          <p>502 W 7th St Ste 100</p>
          <p>Erie, PA 16502</p>
          <p>United States</p>
          <p>
            Phone:{" "}
            <a href="tel:7172750202" className="text-primary hover:underline">
              717-275-0202
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:privacy@growwizardai.com" className="text-primary hover:underline">
              privacy@growwizardai.com
            </a>
          </p>
        </address>
      </div>
    </main>
  )
}
