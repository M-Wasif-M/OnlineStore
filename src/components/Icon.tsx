import type { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  name:
    | "bag"
    | "search"
    | "arrow"
    | "close"
    | "plus"
    | "minus"
    | "heart";
}

export default function Icon({ name, ...props }: IconProps) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true
  };

  if (name === "bag") {
    return (
      <svg {...common} {...props}>
        <path d="M6 8h12l1 13H5L6 8Z" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      </svg>
    );
  }

  if (name === "search") {
    return (
      <svg {...common} {...props}>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
    );
  }

  if (name === "arrow") {
    return (
      <svg {...common} {...props}>
        <path d="M5 12h14" />
        <path d="m14 7 5 5-5 5" />
      </svg>
    );
  }

  if (name === "close") {
    return (
      <svg {...common} {...props}>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </svg>
    );
  }

  if (name === "plus") {
    return (
      <svg {...common} {...props}>
        <path d="M12 5v14M5 12h14" />
      </svg>
    );
  }

  if (name === "minus") {
    return (
      <svg {...common} {...props}>
        <path d="M5 12h14" />
      </svg>
    );
  }

  return (
    <svg {...common} {...props}>
      <path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z" />
    </svg>
  );
}
