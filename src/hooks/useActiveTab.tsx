import { useState } from "react";

export const useActiveTab = (firstTab: string) => {
  const [activeTab, setActiveTab] = useState<string>(firstTab);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return { activeTab, handleTabChange };
};
