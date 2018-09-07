function confirmSubmission() {
    var txt;
    if (confirm("** PLEASE VERIFY THE AMOUNT IS CORRECT **")) {
        //alert("file did not open");
        file = fopen("UnitInputData.csv", 3);
        alert("ALERT");
        if (file != -1){
            fwrite(file, "312423");
            file.close;
            alert("File opened!");
        }
    } else {
        txt = "Canceled";
    }
}