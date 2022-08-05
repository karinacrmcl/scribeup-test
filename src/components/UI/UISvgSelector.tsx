import React from "react";

type Props = {
  id: string;
};

export default function UISvgSelector({ id }: Props) {
  switch (id) {
    case "back-arrow":
      return (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_206_426)">
            <path
              d="M2.49799 7.78571C1.98944 7.38534 1.98944 6.61466 2.49799 6.21429L8.13141 1.77912C8.78739 1.26267 9.75 1.72995 9.75 2.56483L9.75 11.4352C9.75 12.2701 8.78739 12.7373 8.13141 12.2209L2.49799 7.78571Z"
              fill="#D9D9D9"
            />
          </g>
          <defs>
            <clipPath id="clip0_206_426">
              <rect
                width="14"
                height="14"
                fill="white"
                transform="translate(0 14) rotate(-90)"
              />
            </clipPath>
          </defs>
        </svg>
      );

    case "forward-arrow":
      return (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_206_426)">
            <path
              d="M11.502 6.21429C12.0106 6.61466 12.0106 7.38534 11.502 7.78571L5.86859 12.2209C5.21261 12.7373 4.25 12.2701 4.25 11.4352L4.25 2.56483C4.25 1.72995 5.21261 1.26267 5.86859 1.77912L11.502 6.21429Z"
              fill="#D9D9D9"
            />
          </g>
          <defs>
            <clipPath id="clip0_206_426">
              <rect
                width="14"
                height="14"
                fill="white"
                transform="translate(14) rotate(90)"
              />
            </clipPath>
          </defs>
        </svg>
      );

    case "prev-arrow":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.97318 13.5664C4.96453 12.7657 4.96453 11.2343 5.97318 10.4336L12.7565 5.0486C14.0672 4.00808 16 4.94151 16 6.61503L16 17.385C16 19.0585 14.0672 19.9919 12.7565 18.9514L5.97318 13.5664Z"
            fill="black"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      );

    case "next-arrow":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.0268 10.4336C19.0355 11.2343 19.0355 12.7657 18.0268 13.5664L11.2435 18.9514C9.93279 19.9919 8 19.0585 8 17.385L8 6.61503C8 4.94151 9.9328 4.00808 11.2435 5.04861L18.0268 10.4336Z"
            fill="black"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      );

    case "expand":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="#7D7B7B"
            d="M12,7a2,2,0,1,0-2-2A2,2,0,0,0,12,7Zm0,10a2,2,0,1,0,2,2A2,2,0,0,0,12,17Zm0-7a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"
          />
        </svg>
      );

    default:
      return null;
  }
}
