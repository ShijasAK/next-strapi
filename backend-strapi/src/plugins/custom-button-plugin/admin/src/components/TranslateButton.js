import React, { useState } from "react";
import { Button } from "@strapi/design-system/Button";
import {
  useCMEditViewDataManager,
  useNotification,
  LoadingIndicatorPage,
} from "@strapi/helper-plugin";
import axios from "axios";

const TranslateButton = ({ componentData, componentName }) => {
  const { onChange } = useCMEditViewDataManager();
  const toggleNotification = useNotification();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `/api/translate`,
        {
          component: componentName,
          fields: componentData,
        }
      );

      const translatedData = response.data.translatedText;

      // Update the component data with the translated text
      onChange({
        target: {
          name: componentName,
          value: translatedData,
        },
      });

      toggleNotification({
        type: "success",
        message: { id: "Successfully translated to Arabic" },
      });
    } catch (error) {
      console.error("Error translating data:", error);
      toggleNotification({
        type: "warning",
        message: { id: "Error translating data" },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <LoadingIndicatorPage />}
      <Button onClick={handleClick} disabled={loading} style={{ marginTop: "10px" }}>
        {loading ? "Translating..." : "Translate"}
      </Button>
    </>
  );
};

export default TranslateButton;
