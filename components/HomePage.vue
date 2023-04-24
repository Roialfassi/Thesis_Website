<template>
  <div class="HomePage container mt-3 mb-3"  dir = "rtl" align = "right">
    <div v-if="fileUploaded">
      <AnnotationsPage v-bind:json="json" v-bind:prolificSubmissionId="prolificSubmissionId"/>
    </div>
    <div v-else>
      <h1>כתיבת שאלות על פסקאות מוויקיפדיה</h1>
      <hr>
  <p>
  במשימה זו תקבלו פסקאות אקראיות שנלקחו מערכים בוויקיפדיה. לכל פסקה תתבקשו לנסח שני סוגים של שאלות הבנת הנקרא:
  <br>
  <li>
  5 שאלות שיש להן תשובה בפסקה.
אם אינכם מצליחים לנסח 5 שאלות, אפשר לנסח 4 שאלות, או 3 (מינימום), אבל השתדלו לנסח 5.
  </li>

  <li>2 שאלות <b>רלוונטיות</b> לפסקה, אך אין להן תשובה בפסקה (במקום לסמן תשובה נכונה יש לסמן מסיח שאינו התשובה הנכונה).<br>
     אם אינכם מצליחים לנסח 2 שאלות, נסחו לפחות שאלה אחת.
  </li>
  <br>
  את <b><u>השאלות</u></b> נסחו <b>במילים שלכם</b> ו<b>בשפה חופשית</b> ככל האפשר.
  <br>
  <b><u>התשובה</u></b> היא <b>מילה או מחרוזת מילים מתוך הפסקה</b>, ואותה תסמנו על גבי הפסקה באמצעות העכבר.
  <br>
  לכל שאלה בעלת מענה יש לסמן את התשובה הנכונה, אך <u><b>גם לכל שאלה חסרת מענה יש לסמן תשובה מוגדרת</b></u> - מעין מסיח שנראה כמו תשובה מתקבלת על הדעת, אך אינו תשובה נכונה.
  <br>
  משך המשימה הוא <b><u>שעה.</u></b>
  <br>
  <h5 align = "right">
  טרם תחילת המשימה יש לקרוא בקפידה את 
  <b><a href="https://drive.google.com/file/d/1iJQBbhOP0YhUi3G9JDf82Sy9bflaHDLd/view" target="_blank" v-on:click="guideClicked" v-on:auxclick="guideClicked"
   > ההנחיות</a></b>.
    </h5> 
    (מומלץ להשאיר את עמוד ההנחיות פתוח בחלון או בטאב נפרד בעת ביצוע המשימה.)
    <br>
    שימו לב! טווח התשובה שתסמנו צריך לעמוד בסטנדרטים מסוימים.
    <br>
     <b>מבלי לקרוא את ההנחיות לא ניתן לבצע את המשימה.</b> 
    <br>
     שאלות ותשובות שאינן עומדות בקריטריונים בסיסיים הן פסולות.
    <br>
  עבור כל פסקה הקדישו כ-9-10 דקות לנסח כ-7 שאלות (סה״כ: כ-42 שאלות לאורך המשימה).
      <!-- <json-viewer :value="jsonData" :expand-depth="10" copyable></json-viewer> -->
      <!-- <br>
      <div class="uploadBar" align = "left">
        <b-form-file
          v-model="file"
          :state="Boolean(file)"
          placeholder="Upload a JSON file here"
          accept=".json"
        ></b-form-file>
      </div>
      <br>
      <b-button :size="''" :variant="'primary'" v-on:click="readFileFromUpload()">Upload</b-button>
      <br><br> -->
      <!-- <h5>אם אין לכם קובץ להעלות בחרו באופציה הבאה:</h5> -->
      <br>
      <!-- <h5>הדביקו כאן את ה-Prolific ID שלכם:</h5><input v-model="prolificID" placeholder="Prolific ID"  align="left"/> -->
      <br>
      <p style="color:red;">{{ errors }}</p>
      <br>
      <b-button :size="''" :variant="'primary'" v-on:click="getRandomFile()">בואו נתחיל</b-button>
    </div>
  </div>
</template>

<script>
import AnnotationsPage from "./AnnotationsPage.vue";
import { dataService } from "../services/data";
import firebase from '../services/firebase'

export default {
  name: "HomePage",
  data: function() {
    return {
      jsonData: {
        data: [
          {
            title: "Question answering",
            paragraphs: [
              {
                context:
                  "Question answering (QA) is a computer science discipline within the fields of information retrieval and natural language processing (NLP), which is concerned with building systems that automatically answer questions posed by humans in a natural language.",
                qas: []
              },
              {
                context:
                  "A QA implementation, usually a computer program, may construct its answers by querying a structured database of knowledge or information, usually a knowledge base. More commonly, QA systems can pull answers from an unstructured collection of natural language documents.",
                qas: []
              }
            ]
          },
          {
            title: "Natural language processing",
            paragraphs: "[...]"
          }
        ]
      },
      fileUploaded: false,
      file: null,
      json: null,
      jsonID: null,
      errors: "",    
      prolificID: this.getParameterByName("PROLIFIC_PID"),
      studyID : this.getParameterByName("STUDY_ID"),
      guide:null,
      prolificSubmissionId:"",
      avoid:[]
    };
  },
    beforeMount(){
    firebase.firestore().collection("annotations").onSnapshot((querySnapshot) => {
      this.avoid = [];
      querySnapshot.forEach((doc) => {
        this.avoid.push(doc.data().filename.substring(15,21));
      });
    });

 },
 created() {
  const studies= {
    "62cac8bf5432ebac0556f401": "E1",
    "62d408dd0c9ddd91bf5bb4bf": "E2",
    "62d40a4269746da777bdedbd": "E3",
    "62d53f085f04f615266c77ef": "E4",
    "62d652cfff53a1f5175f7d8e": "E5",
    "62d65426f3aff661c600a774": "E6",
    "62d654bc1e0137cf4700a752": "E7",
    "62d655be3b859b88fb2b4d79": "E8",
    "62d65bf01271937134cdaed7": "E9",
    "62d66097a137bf1a9aa76a40": "E10",
    "62dd236ed680305cca5a7a1c": "E11",
    "62dd2439fa4d45fe74d88446": "E12",
    "62dd8c852ecac0e0a8a8f5ed": "E13",
    "62dd8cdda4935c549c0aeb9d": "E14",
    "62dd8d7ab01d2bcdf7048e27": "E15",
    "62dd8e32f52bb74c51e44c91": "E16",
    "62dd8eb08b1504c527de1059": "E17",
    "62dd8f39f79eabf6e687e7c6": "E18",
    "62e146486fe0a644002692bb": "E19",
    "62e14664352f0fb78133545f": "E20",
    "62e14789436059aa1d6b9668": "E21",
    "62e147fa8804c6d0f8aed924": "E22",
    "62e149bd5c4023ac6b63cd0e": "E23",
    "62e14a7298cc9e84d541a4be": "E24",
    "62e625666b0e91f336ebebbe": "E25",
    "62e633630a621fb772e975a1": "E26",
    "62e636d9b64049862eb7fe1d": "E27",
    "62e63af4aeb321ac34adeb08": "E28",
    "62e63c3362b7695ecbe49ee2": "E29",
    "62e63f949926858b0ac0ca41": "E30",
    "62e6430f35095e1e0efac910": "E31",
    "62e6441bd726ab4d25bbb152": "E32",
    "62e6476f42785a863d8eeed0": "E33",
    "62ebc1cd72cd2c56851fd10b": "E34",
    "62ebc2a3aec23c51897dbd0c": "E35",
    "62ebc463e3cf24dfbb4bf99c": "E36",
    "62ebc5992c5e6e40436c0b65": "E37",
    "62ed8acbde781ae8f5bf02a2": "E38",
    "62eed0396d65766d5900d58b": "E39",
    "62ef5dc72ec2bdeee749962d": "E40",
    "62ef63c54b79826c2adf1e5d": "E41",
    "62f0040408e2c65006daed41": "E42",
    "62f009e0c157f5aeaf237bbc": "E43",
    "62f366258681d6f61973350f": "E44",
    "62f36bb2f86f7c543e15cb81": "E45",
    "62f36df2ee1cc077cce7171e": "E46",
    "62f6a6f7cfa1f9c7726e3176": "E47",
    "62f6af061ddc0cb2d78a371c": "E48",
    "62f8edc0793c359cda6e311e": "E49",
    "62f8f26d524144715d176d87": "E50",
    "62f8f45f6b228e3ec7176d8f": "E51",
    "62f90964f58bfb4ffe23939f": "E52",
    "62f90fa5dfc623fe44e07824": "E53",
    "62fb44f252526d670e5db3c5": "E54",
    "62fb4b5194851836e55a7624": "E55",
    "62fb54a68fe3db388dccd9fd": "E56",
    "62fb58126306c5c2a0feb0cf": "E57",
    "62fb5dd94b1b732ecc1a2b42": "E58",
    "62fb611b2df23f6b462886f9": "E59",
    "62fb71f65b51387e161f2501": "E60",
    "62fb7decc3c90ecccc9a5f1e": "E61",
    "62fb7e9e614dc333a7e7ba85": "E62",
    "62fb97da2a6223f4015a1826": "E63",
    "62fb9c657e7ac22f0b6df69e": "E64",
    "62fd4a76e71deba5f3ac16f0": "E65",
    "62fe5d792f41dcc06d539905": "E66",
    "62fe600992231c1041307031": "E67",
    "62fe6a67925a49bda2a1d140": "E68",
    "62fe798c096f185099491095": "E69"
}
    const study = (this.studyID in studies)? studies[this.studyID] : "f";
    const studyDef = require(`../studies/${study}.json`);
    this.prolificSubmissionId= studyDef.prolificSubmissionId;
    // eslint-disable-next-line
    console.log(`Using study: ${study}, def:`, studyDef); 
    if (studyDef.type === "limits") {
      dataService.initializeByLimits(studyDef.min, studyDef.max);
    } else if (studyDef.type === "ids") {
      dataService.initializeByIds(studyDef.ids);
    } else {
      // eslint-disable-next-line
      console.warn(`Invalid study def type: "${studyDef.type}", using default limits`);
      dataService.initializeByLimits();
}
 
 },
  methods: {
    readFileFromUpload: function() {
      var reader = new FileReader();
      reader.onload = function(event) {
        this.json = JSON.parse(event.target.result);
        this.fileUploaded = true;
        
      }.bind(this);
      reader.readAsText(this.file);
    },
    guideClicked: function () {
      this.guide = "pass"
    },
    checkID: function(){
      // eslint-disable-next-line no-console
      // console.log(this)
      if(this.prolificID == ""){
        this.errors = "שדה חובה";
        return false;
      }
      else if(this.guide !== "pass" && this.prolificID !== "Roi"){
          this.errors = "חובה לקרוא את ההנחיות לפני שמתחילים";
        return false
      }
      else{
          this.errors = "";
          return true;
      }
    },
    getRandomFile: async function () {// When pressing the button!!!
      if (!this.checkID()) {
        return;
      }
      this.jsonID = dataService.getNextId();
      const paddedID = this.checkFile(dataService.pad(this.jsonID, 6));
      this.json = require(`../json_resources/heb_squad-v1.1_${paddedID}.json`);
      this.json.jsonID = this.jsonID;
      this.json.prolificID = this.prolificID;
      this.json.studyID = this.studyID;
      this.fileUploaded = true;
    },
    getParameterByName: function (name) {
      let queryDict = {};
      location.search.substr(1).split("&").forEach(function (item) {
        queryDict[item.split("=")[0]] = item.split("=")[1]
      });
      if (name in queryDict) {
        return queryDict[name];
      }
      return "";
    },
    state: function (jsonID) {
      var intID = parseInt(jsonID)
      return intID > 0 && intID < 1200;
    },
    checkFile: function (paddedID) {
      // eslint-disable-next-line no-console
      // console.log(paddedID)
      // eslint-disable-next-line no-console
      // console.log(this.avoid)
      let i = 0;
      if(this.avoid.includes(paddedID) && i<100)
      {
        paddedID =  dataService.pad(dataService.getNextId() , 6);
        i++;
        // eslint-disable-next-line no-console
        // console.log(this.avoid)
      }
      return paddedID
    }
    
  },
  components: {
    AnnotationsPage
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.uploadBar {
  max-width: 300px;
}
</style>
