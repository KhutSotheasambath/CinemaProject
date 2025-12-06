import React from "react";
import { Link } from "react-router-dom";

function Terms() {
  return (
    <div className="mt-[200px]">
      <div className="flex gap-3 m-4 font-medium">
        <Link to="/">
          <p className="text-white/50 text-xl">Home</p>
        </Link>
        <p>/</p>
        <p className="text-white text-xl">Terms & Conditions</p>
      </div>
      <div>
        <p className="text-4xl text-white font-bold m-4 mt-[50px]">Terms & Conditions</p>
      </div>
      <div className="m-4 mt-[50px]">
        <p className="text-[16px] text-white font-medium">
          Ticket Purchased Rule and Regulation
        </p>
      </div>
      <div className="m-4">
        <p className="text-[16px] text-white font-medium">
          1. Every movie tickets purchased via the Sale Channels are strictly
          non-refundable and are not available for exchange under whatever
          circumstances.
        </p>
        <p className="text-[16px] text-white font-medium">
          2. Purchased tickets are not exchangeable for tickets at a different
          price, for another movie, or for another screening or day.
        </p>
        <p className="text-[16px] text-white font-medium">
          3. Movie tickets purchased via the Sales Channels will be available
          for collection at the relevant cinema from the ticket counter or at
          our KIOSK machine (where available) by producing the booking
          numbers/reservation sent by email or as available under the purchased
          history feature in Legend Mobile application or any other means that
          shall be introduced by Legend Cinema from time to time.
        </p>
        <p className="text-[16px] text-white font-medium">
          4. In case of any malfunctions of the reservation or purchase form
          placed on the website or mobile application, please contact us
          immediately at the following e-mail address hotline@legend.com.kh or
          contact our hotline 081300400 at least 30 minutes before the movie
          start. We would also like to inform you that it is the basis and
          condition for an effective complaint about the impossibility or
          difficulties in purchasing tickets online.
        </p>
        <p className="text-[16px] text-white font-medium">
          5. If the User fails to purchase a ticket for the screening for which
          he or she has reserved a seat in the Legend Cinema within the time
          limit specified in clause 4 above, the reservation of such a seat
          cannot be guaranteed.
        </p>
        <p className="text-[16px] text-white font-medium">
          6. Movie tickets are made available subject to the classification of
          relevant film given by the Film Censorship Board of Cambodia. Legend
          Cinema has a legal obligation to refuse admission to a person, who in
          the opinion of its duty manager, is under the minimum age required for
          NC15 and R18 classified films (including children in arms). Proof of
          age may be required in certain instances
        </p>
        <p className="text-[16px] text-white font-medium mt-4">
          Legend Cinema reserved the rights to have term and condition changed.
          All rights reserved Legend Cinema Co, Ltd 2024.
        </p>
      </div>
    </div>
  );
}

export default Terms;
