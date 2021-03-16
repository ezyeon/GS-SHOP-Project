// main page IR

// IR Record(회사실적) Mouse over Event <-resize event 추가 필요
if (matchMedia("screen and (min-width: 768px)").matches) {
   function scaleExpansion() {
      document.getElementsByClassName('ir_record_img')[0].style = "transform: scale(1.2); transition: all 0.5s;"
   }

   function downScale() {
      document.getElementsByClassName('ir_record_img')[0].style = "transform: scale(1); transition: all 0.5s;"
   }
}

// IR Report(IR 보고서) Mouse over Event <-resize event 추가 필요
if (matchMedia("screen and (min-width: 1220px)").matches) {
   function reportHover() {
      document.getElementsByClassName('ir_report_img')[0].style = "bottom: -3px; transition: all 0.5s;";
      document.getElementsByClassName('ir_report')[0].style = "background-color: rgb(180, 212, 27); border: 2px solid rgb(180, 212, 27);";
   }
   
   function reportOut() {
      document.getElementsByClassName('ir_report_img')[0].style = "bottom: -160px; transition: all 0.5s;";
      document.getElementsByClassName('ir_report')[0].style = "background-color: none; border: 2px solid rgb(255, 255, 255);";
   }
}



