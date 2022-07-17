const vaccineDB = [
    {
        name: "shingles",
        above_age: 50,
        dose_interval_months: 6
    },
    {
        name: "pneumonia",
        above_age: 65,
        dose_interval_months: 0

    },
    {
        name: "tetanus",
        above_age: "any",
        dose_interval_months: 120
    },
    {
        name: "pertussis",
        above_age: 18,
        dose_interval_months: 0
    }
];


module.exports = vaccineDB;