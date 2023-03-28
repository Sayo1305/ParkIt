import React from "react";
import BG1 from '../images/parking_prob1.jpg';
import BG2 from '../images/parking_prob2.jpg';
import BG3 from '../images/parking_prob3.jpg';
const Section3 = () => {
  return (
    <div className="w-full p-5  text-center items-center flex flex-col ">
      <div className="text-center w-full font-bold text-4xl">
        Problem we solve
      </div>
      <div className="w-1/2 h-[1px] my-2 bg-slate-300 text-center "></div>
      <div className="w-5/6 bg-gradient-to-br from-slate-100 to-slate-500 shadow-md mx-auto my-0 flex flex-col border-2 border-black justify-center items-center gap-4 p-2 rounded-lg">
      <div className="w-5/6 mx-auto my-0 text-justify text-xl">
        These days, parking spaces are really hard to come by. You might find
        yourself having to park your car after leaving the house but being
        unable to locate a convenient location close by. Even if you do, the
        fees are frequently unclear, and the times are not ideal. Additionally,
        there are worries about the safety of our car.
      </div>
      <div className="w-3/4 p-3 flex justify-between text-black items-center border-2 border-black bg-yellow-200 rounded-md ">
        <div className="w-[250px] h-[250px] object-cover flex flex-col justify-center"><img className="w-full h-full object-cover"  src={BG1} alt="image2" /> <div className="font-semibold text-xl">parking problem</div></div>
        <div className="w-[250px] h-[250px] object-cover flex flex-col justify-center"><img className="w-full h-full object-cover"  src={BG2} alt="image2" /> <div className="font-semibold text-xl">High fine</div></div>
        <div className="w-[250px] h-[250px] object-cover flex flex-col justify-center"><img className="w-full h-full object-cover"  src={BG3} alt="image2" /> <div className="font-semibold text-xl">Chances of Damage</div></div>
      </div>
      <div className="w-5/6 mx-auto my-0 text-justify text-xl">
        The ParkIt Website has a user-friendly design and enables us to book
        parking spots online without any hassle. We can select from various
        service providers and also the duration for which the spot is required.
        This is the first website that allows users to book parking spaces via
        web3 transactions, eliminating the need for cash or credit or debit
        cards. Since it is a blockchain-based website and is decentralized, it
        allows us to make payments securely and provides transparency. Also,
        since the data of the user is stored on the blockchain, it aids in
        investigation in case of any mishappening.
      </div>
      </div>
      
    </div>
  );
};

export default Section3;
