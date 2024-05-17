import React from "react";

const Navigationabar = () => {
  return (
    <div>
      {" "}
      <div >
        <aside style = {{display:"flex" , flexDirection: "column" , fontSize:"0.8rem"}} className="freeTrial--banner discount__banner--global flex items-center justify-center p-4 bg-header text-white">
          <span className="hidden sm:block mr-2">
            Save 50% for 12 months - limited time offer.{" "}
          </span>
          <span className="mr-2">
            Try Mailchimp and save 50% for 12 months.{" "}
          </span>
          <a style = {{textDecoration:"none", color:"white"}}
            href=""
            className="text-blue-500 hover:underline"
          >
            Get started today
          </a>
        </aside>
      </div>
      <div></div>
    </div>
  );
};

export default Navigationabar;
