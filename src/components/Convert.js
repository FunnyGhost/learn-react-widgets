import axios from "axios";
import React, { useEffect, useState } from "react";

const Convert = ({ language, text }) => {
  const [translatedText, setTranslatedText] = useState("");
  const [debouncedText, setDebouncedText] = useState(translatedText);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  useEffect(() => {
    const url = "https://translation.googleapis.com/language/translate/v2";
    const apiKEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

    const doTranslation = async () => {
      const { data } = await axios.post(
        url,
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: apiKEY,
          },
        }
      );

      setTranslatedText(data.data.translations[0].translatedText);
    };

    doTranslation();
  }, [debouncedText, language]);

  return (
    <div>
      <h1 className="ui header">{translatedText}</h1>
    </div>
  );
};

export default Convert;
