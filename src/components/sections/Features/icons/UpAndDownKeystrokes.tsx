import { FC } from "react";

export const UpAndDownKeystrokes: FC = () => {
  return (
    <svg
      className="mb-5 h-[4.5rem] w-[4.5rem] fill-current"
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M6.67969 24.5977H20.8945C23.3555 24.5977 24.5742 23.3789 24.5742 20.9648V6.65625C24.5742 4.24219 23.3555 3.02344 20.8945 3.02344H6.67969C4.23047 3.02344 3 4.23047 3 6.65625V20.9648C3 23.3906 4.23047 24.5977 6.67969 24.5977ZM6.70312 22.7109C5.53125 22.7109 4.88672 22.0898 4.88672 20.8711V6.75C4.88672 5.53125 5.53125 4.91016 6.70312 4.91016H20.8711C22.0312 4.91016 22.6875 5.53125 22.6875 6.75V20.8711C22.6875 22.0898 22.0312 22.7109 20.8711 22.7109H6.70312Z"></path>

      <path
        className={
          "transition-transform duration-300 group-hover:-translate-y-0.5"
        }
        d="M6.71484 11.2734L9.60938 8.32027C9.94922 7.98043 10.4414 8.0273 10.7227 8.32027L13.6055 11.2734C13.7344 11.4023 13.8398 11.625 13.8398 11.8125C13.8398 12.2578 13.5234 12.5742 13.0898 12.5742C12.8906 12.5742 12.7031 12.4921 12.5625 12.3515L11.3555 11.0859L10.8984 10.6054L10.9336 11.1679V18.7734C10.9336 19.1953 10.6055 19.5117 10.1602 19.5117C9.72656 19.5117 9.39844 19.1953 9.39844 18.7734V11.1797L9.42188 10.6054L8.97656 11.0859L7.76953 12.3398C7.62891 12.4804 7.44141 12.5742 7.24219 12.5742C6.80859 12.5742 6.48047 12.246 6.48047 11.8125C6.48047 11.6484 6.58594 11.4257 6.71484 11.2734Z"
      ></path>
      <path
        className={
          "transition-transform duration-300 group-hover:translate-y-0.5"
        }
        d="M20.8594 16.3477L17.9883 19.2891C17.6719 19.6172 17.1328 19.5703 16.8633 19.2891L13.9805 16.3477C13.8398 16.1836 13.7578 15.9727 13.7578 15.7969C13.7578 15.3516 14.0508 15.0469 14.4961 15.0469C14.707 15.0469 14.8828 15.1172 15.0352 15.2695L16.2422 16.5117L16.6875 17.0039L16.6641 16.4531V8.83594C16.6641 8.40234 16.9922 8.08594 17.4258 8.08594C17.8594 8.08594 18.1875 8.40234 18.1875 8.83594V16.4414L18.1641 16.9922L18.6094 16.5117L19.8164 15.2695C19.9453 15.1289 20.1445 15.0469 20.3555 15.0469C20.8008 15.0469 21.1055 15.3516 21.1055 15.7969C21.1055 15.9844 21 16.1953 20.8594 16.3477Z"
      ></path>
    </svg>
  );
};
