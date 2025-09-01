import { useState } from "react";

export const useButtonChevron = () => {
  const [buttonChevron, setButtonChevron] = useState(false);
  return [buttonChevron, setButtonChevron] as const;
};
