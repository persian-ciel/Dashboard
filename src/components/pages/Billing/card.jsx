import React from "react";

function CardInfo() {
  return (
    <div class="card relative sm:w-[48.5%] w-full flex flex-col justify-end px-6 py-10 text-white rounded-3xl gap-8 bg-[url(/billing-background-card.webp)] bg-cover">
        <p class="text-2xl  font-bold">Vision UI</p>
      <p class="text-2xl  font-medium">7812   2139   0823   7916</p>
      <div class="flex justify-between gap-10">
        <div class="flex-1 flex flex-col justify-end">
          <p class="self-end text-sm">CVV2
</p>
          <p class="self-end font-bold">09X</p>
        </div>
        <div class="flex-1 flex flex-col justify-end">
          <p class="self-end text-sm">VALID THRU
</p>
          <p class="self-end font-bold">05/24</p>
        </div>
        <div class="self-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 58 36"
            height="36"
            width="58"
          >
            <circle
              fill-opacity="0.62"
              fill="#F9CCD1"
              r="18"
              cy="18"
              cx="18"
            ></circle>
            <circle
              fill="#424242"
              r="18"
              cy="18"
              cx="40"
              opacity="0.36"
            ></circle>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
