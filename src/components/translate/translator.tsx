import React, { useState } from "react";
import axios from "axios";

const TranslateButton = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslate = async () => {
    try {
      const response = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {
          q: text,
          target: "en",
          format: "text",
          key: "YOUR_API_KEY", // Thay thế bằng khóa API của bạn
        }
      );
      setTranslatedText(response.data.data.translations[0].translatedText);
    } catch (error) {
      console.error("Error translating text:", error);
    }
  };

  return (
    <div className="p-4">
      <textarea
        className="w-full p-2 border border-gray-300 rounded mb-2"
        placeholder="Nhập văn bản tiếng Việt"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleTranslate}
      >
        Dịch
      </button>
      {translatedText && (
        <div className="mt-4 p-2 border border-gray-300 rounded">
          <strong>Dịch sang tiếng Anh:</strong>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default TranslateButton;
