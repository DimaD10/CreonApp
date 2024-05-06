import { SocialIconProps } from "./social.config";

export const TelegramIcon = (
    { fill }: SocialIconProps
) => {
    return (
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle 
            cx="17" 
            cy="17" 
            r="16" 
            stroke="white" 
            strokeWidth="2" 
            fill={fill} 
            className="
                transition-all
                duration-200
            " 
        />
        <path
          d="M22.1396 10.9192L10.3269 15.9965C9.85152 16.2329 9.69074 16.7064 10.212 16.9634L13.2425 18.0368L20.5697 12.9895C20.9698 12.6726 21.3794 12.7571 21.027 13.1057L14.7338 19.4567L14.5361 22.1444C14.7192 22.5594 15.0545 22.5613 15.2683 22.3551L17.0094 20.5188L19.9913 23.0076C20.6839 23.4646 21.0608 23.1697 21.2098 22.3321L23.1656 12.0095C23.3687 10.9785 23.0224 10.5242 22.1396 10.9192Z"
          fill="white"
        />
      </svg>
    );
}
