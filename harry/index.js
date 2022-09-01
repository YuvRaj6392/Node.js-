db.items.insertMany([{name:"yuvraj",age:23},{name:"ishu raj",age:43},{name:"yodav",age:54}]);

db.items.find({age:{$gt:50}});
db.

db.Employees.insertMany([{name:"yuvraj",age:"23",phone:"787349783",salary:15000},{name:"owais",age:"22",phone:"745349783",salary:100000},{name:"karan",age:"24",phone:"787549783",salary:1500000},{name:"Sandeep",age:"26",phone:"787349453",salary:38749837}]);

db.Employees.findMany({age:{$gt:23}});

db.Employees.delete({name:"karan"});