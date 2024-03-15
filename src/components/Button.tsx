// // Button.tsx
// import React from 'react';

// interface ButtonProps {
//   onClick?: () => void;
//   label: string;
//   type?: 'button' | 'submit' | 'reset';
//   disabled?: boolean;
// }

// const Button: React.FC<ButtonProps> = ({ onClick, label, type = 'button', disabled = false}) => {
//   return (
//     <button type={type} onClick={onClick} disabled={disabled}>
//       {label} 
//     </button>
//   );
// };

// export default Button;