var InputData = require("../CostCenterDataController.js");

const newData = {
     costCenter: "CC6526",
     values: {
         InputDate: "2018-01-01",
         UnitsProduced: 2,
         Defects: 2,
         WorkerTotal: 2,
         SInc_Num: 2,
         QInc_Num: 2, 
         SInc_Reason: "Lorem ipsum",
         QInc_Reason: "Lorem ipsum",
         HighUtil: "Lorem ipsum",
         LoUtil: "Lorem ipsum",
         Overtime: 2,
         Downtime: 2,
     }
};

// InputData.addAddToCostCenter(newData);
// InputData.getAllFrom(newData.costCenter);
var cc6256data = InputData.getDataFrom("CC6526", "2018-01-01");
// console.log(cc6256data);