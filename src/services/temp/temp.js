var InputData = require("../input-data.js");

const newData = {
     costCenter: "CC6526",
     values: {
         Date: "2018-01-01",
         UnitsProduced: 2,
         Defects: 2,
         WorkerTotal: 2,
         Overtime: 2,
         Downtime: 2,
         SafetyInc: 2,
         QualityInc: 2, 
         HighUtil: "Lorem ipsum",
         LoUtil: "Lorem ipsum"
     }
};

// InputData.addAddToCostCenter(newData);
InputData.getAllFrom(newData.costCenter);