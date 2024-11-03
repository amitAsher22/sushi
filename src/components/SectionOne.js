import React from "react";
import "../style/SectionOneStyle.css";
import ImgSushi from "../images/sushi.png";

function SectionOne() {
  return (
    <div className="mainSectionOne">
      <div className="sectiononeLeft">
        <h1 className="titlescetionone">
          תאכל <span className="colorWord">סושי</span> בדרך הנכונה
        </h1>
        <p className="textInfoSectionone">
          מקורו כאמצעי לשימור דגים על ידי תסיסתו באורז. אנשים
          <span className="colorWord"> סושי </span> רבים מאמינים שזה יפני עם זאת
          , זה נראה לראשונה בסין במאה השנייה לספירה. רק במאה ה-8 לספירה הוא הגיע
          ליפן. במקור האורז המותסס הזה נזרק והדג נצרך, זה הפך למקור נהדר לחלבון
          והדג היה מלא בשמני אומגה 3.
        </p>
        <button className="btnResrvation">לחץ להזמנה חדשה</button>
      </div>
      <div className="sectiononeRight">
        <img src={ImgSushi} alt="sctionsushi" className="Sectionone" />
      </div>
    </div>
  );
}

export default SectionOne;
