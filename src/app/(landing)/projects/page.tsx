"use client";

import { useActiveTab } from "@/hooks/useActiveTab";
import {TabTemplate, SectionTemplate} from "@/components/templates";
import { ButtonTab } from "@/components/ui";

const ProjectsPage = () => {
  const { activeTab, handleTabChange } = useActiveTab("carloka");

  return (
    <>
      <TabTemplate
        buttonTabs={[
          <ButtonTab
            key="carloka"
            onClick={() => handleTabChange("carloka")}
            className={`${
              activeTab === "carloka" &&
              "shadow-none translate-x-1 translate-y-1"
            }`}
          >
            CarLoka
          </ButtonTab>,
          <ButtonTab
            key="atria"
            onClick={() => handleTabChange("atria")}
            className={`${
              activeTab === "atria" &&
              "shadow-none translate-x-1 translate-y-1"
            }`}
          >
            Atria
          </ButtonTab>,
        ]}
      >
        <SectionTemplate>
          {activeTab === "carloka" && (
            <div>
              <h1>CarLoka</h1>
            </div>
          )}

          {activeTab === "atria" && (
            <div>
              <h1>Atria</h1>
            </div>
          )}
        </SectionTemplate>
      </TabTemplate>
    </>
  );
};

export default ProjectsPage;
