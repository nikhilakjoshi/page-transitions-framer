import { MotionDiv } from "~/lib/framer";
import React from "react";

const Template: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-20"
    >
      {children}
    </MotionDiv>
  );
};

export default Template;
