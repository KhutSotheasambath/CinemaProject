import React from "react";
import { Link } from "react-router-dom";

function Privacy() {
  return (
    <div className="mt-[200px]">
      <div className="flex gap-3 m-4 font-medium">
        <Link to="/">
          <p className="text-white/50 text-xl">Home</p>
        </Link>
        <p>/</p>
        <p className="text-white text-xl">Privacy & Policy</p>
      </div>
      <div>
        <p className="text-4xl text-white font-bold m-4 mt-[50px]">
          Privacy & Policy{" "}
        </p>
      </div>
      <div className="m-4 mt-[50px] ">
        <p className="text-[16px] text-white font-medium">
          TVista Entertainment built the Legend Cinema app as a Free app. This
          SERVICE is provided by Vista Entertainment at no cost and is intended
          for use as is.
        </p>
      </div>
      <div className="m-4 flex flex-col gap-5">
        <p className="text-[16px] text-white font-medium">
          This page is used to inform visitors regarding our policies with the
          collection, use, and disclosure of Personal Information if anyone
          decided to use our Service.
        </p>
        <p className="text-[16px] text-white font-medium">
          The terms used in this Privacy Policy have the same meanings as in our
          Terms and Conditions, which is accessible at Legend Cinema unless
          otherwise defined in this Privacy Policy.
        </p>
        <p className="text-[16px] text-white font-bold">
          Information Collection and Use
        </p>
        <p className="text-[16px] text-white font-medium">
          For a better experience, while using our Service, we may require you
          to provide us with certain personally identifiable information. The
          information that we request will be retained by us and used as
          described in this privacy policy. The app does use third party
          services that may collect information used to identify you. Link to
          privacy policy of third party service providers used by the appp
          <Link to={"https://policies.google.com/privacy"}>
            <p>Google Play Services</p>
          </Link>
        </p>
        <p className="text-[16px] text-white font-bold">Log Data</p>
        <p className="text-[16px] text-white font-medium">
          We want to inform you that whenever you use our Service, in a case of
          an error in the app we collect data and information (through third
          party products) on your phone called Log Data. This Log Data may
          include information such as your device Internet Protocol (“IP”)
          address, device name, operating system version, the configuration of
          the app when utilizing our Service, the time and date of your use of
          the Service, and other statistics.
        </p>
        <p className="text-[16px] text-white font-bold">Cookies</p>
        <p className="text-[16px] text-white font-medium">
          Cookies are files with a small amount of data that are commonly used
          as anonymous unique identifiers. These are sent to your browser from
          the websites that you visit and are stored on your device's internal
          memory. This Service does not use these “cookies” explicitly. However,
          the app may use third party code and libraries that use “cookies” to
          collect information and improve their services. You have the option to
          either accept or refuse these cookies and know when a cookie is being
          sent to your device. If you choose to refuse our cookies, you may not
          be able to use some portions of this Service.
        </p>
        <p className="text-[16px] text-white font-bold">Service Providers</p>
        <p className="text-[16px] text-white font-medium">
          We may employ third-party companies and individuals due to the
          following reasons:
          <p>To facilitate our Service;</p>
          <p>To provide the Service on our behalf;</p>
          <p>To perform Service-related services; or</p>
          <p>To assist us in analyzing how our Service is used.</p>
          <p>
            We want to inform users of this Service that these third parties
            have access to your Personal Information. The reason is to perform
            the tasks
          </p>
          <p>
            assigned to them on our behalf. However, they are obligated not to
            disclose or use the information for any other purpose.
          </p>
        </p>
        <p className="text-[16px] text-white font-bold">Security</p>
        <p className="text-[16px] text-white font-medium">
          We value your trust in providing us your Personal Information, thus we
          are striving to use commercially acceptable means of protecting it.
          But remember that no method of transmission over the internet, or
          method of electronic storage is 100% secure and reliable, and we
          cannot guarantee its absolute security.
        </p>
        <p className="text-[16px] text-white font-bold">Links to Other Sites</p>
        <p className="text-[16px] text-white font-medium">
          This Service may contain links to other sites. If you click on a
          third-party link, you will be directed to that site. Note that these
          external sites are not operated by us. Therefore, we strongly advise
          you to review the Privacy Policy of these websites. We have no control
          over and assume no responsibility for the content, privacy policies,
          or practices of any third-party sites or services.
        </p>
        <p className="text-[16px] text-white font-bold">Children’s Privacy</p>
        <p className="text-[16px] text-white font-medium">
          These Services do not address anyone under the age of 13. We do not
          knowingly collect personally identifiable information from children
          under 13. In the case we discover that a child under 13 has provided
          us with personal information, we immediately delete this from our
          servers. If you are a parent or guardian and you are aware that your
          child has provided us with personal information, please contact us so
          that we will be able to do necessary actions.
        </p>
        <p className="text-[16px] text-white font-bold">
          Changes to This Privacy Policy
        </p>
        <p className="text-[16px] text-white font-medium">
          We may update our Privacy Policy from time to time. Thus, you are
          advised to review this page periodically for any changes. We will
          notify you of any changes by posting the new Privacy Policy on this
          page. These changes are effective immediately after they are posted on
          this page.
        </p>
        <p className="text-[16px] text-white font-bold">Contact Us</p>
        <p className="text-[16px] text-white font-medium">If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at info@legend.com.kh.</p>
      </div>
    </div>
  );
}

export default Privacy;
