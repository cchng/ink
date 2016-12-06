function getResults(){

    if (CK7.checked && CK20.checked){
	var res = ["Urothelial tumors",
		   "Ovarian mucinous adenocarcinoma",
		   "Pancreatic adenocarcinoma",
		   "Cholangiocarcinoma",
		   "Stomach carcinoma"]
	
    } else if (CK7.checked && !CK20.checked){
	var res = ["Lung adenocarcinoma",
		   "Breast carcinoma",
		   "Thryoid carcinoma",
		   "Endometrial carcinoma",
		   "Cervical carcinoma",
		   "Salivary gland carcinoma",
		   "Cholangiocarcinoma",
		   "Pancreatic carcinoma",
		   "Stomach carcinoma",
		   "Esophageal carcinoma"]

    } else if (!CK7.checked && CK20.checked){
	var res = ["Colorectal carcinoma",
		   "Merkel cell carcinoma (dot-like pattern)"]


    } else {
	var res = ["Hepatocellular carcinoma",
		   "Renal cell carcinoma",
		   "Prostate carcinoma",
		   "Squamous cell and small cell lung carcinoma",
		   "Head and neck carcinoma"]


    }

    document.getElementById("result").innerHTML = res.join("<br/>");
}

function reset(){
    document.getElementById("result").innerHTML = "";

}
