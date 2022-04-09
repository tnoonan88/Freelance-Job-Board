const Employer = require('./Employer');
const Job = require('./Job');
const User = require('./User');

// Write associations
Job.belongsTo(Employer, {
    foreignKey: 'employer_id',
    onDelete: 'CASCADE'
});

Employer.hasMany(Job, {
    foreignKey: 'employer_id',
});


module.exports = { Employer, Job, User };