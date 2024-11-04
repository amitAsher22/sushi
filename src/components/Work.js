import React from "react";
import "../style/SectionTreeStyle.css";
import img from "../images/local.png";
import img2 from "../images/contact.png";

function Work() {
  return (
    <div className="sectionTree">
      <div className="first">
        <div className="rightSection">
          <h1 className="titlescetionone">
            איך זה <span className="colorWord">עובד</span>?
          </h1>
          <p className="textInfoSectionone">
            בחרו את המנות והרולים שאתם רוצים הקיים בתפריט , שלחו לנו הודעה
            בוואטספ עם ההזמנה שלכם + שם של הלקוח. התשלום מתבצע במזומן לפני קבלת
            האוכל
          </p>
          <div className="textInfoSectionone">
            <span>1.</span>
            <span>בחרו את המנה שלכם!</span>
          </div>
          <div className="textInfoSectionone">
            <span>2.</span>
            <span>שלחו לנו הודעה בוואטספ</span>
          </div>
          <div className="textInfoSectionone">
            <span>3.</span>
            <span> בואו לקחת!</span>
          </div>
        </div>

        <div className="lefttSection">
          <img src={img} alt="dsda" />
        </div>
      </div>
      <div className="second">
        <div className="lefttSection">
          <img src={img2} alt="dsda" />
        </div>
        <div className="rightSection">
          <h1 className="titlescetionone">
            מאיפה לאסוף את <span className="colorWord">המשלוח</span> שלי?
          </h1>
          <p className="textInfoSectionone">המקום ברחוב בר אילן 2 בהרצליה</p>
          <div className="textInfoSectionone">
            <span>1.</span>
            <span>הגיעו (בשעות הפתוחות )</span>
          </div>
          <div className="textInfoSectionone">
            <span>2.</span>
            <span>שלחו לנו הודעה בוואטספ שאתם במקום</span>
          </div>
          <div className="textInfoSectionone">
            <span>3.</span>
            <span> קבלו את ההזמנה שלכם</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
