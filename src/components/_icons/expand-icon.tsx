interface IconProps {
    fill?: string | undefined
}

export default function ExpandIcon(
    {fill}: IconProps
) {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M2 11L8 5L14 11" stroke={fill ? fill : "white"} strokeWidth="1.5" />
      </svg>
    );
}
