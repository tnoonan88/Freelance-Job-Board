const Employer = require('./Employer');
const Job = require('./Job');
const User = require('./User');

// Write associations
Job.belongsTo(Employer, {
    foreignKey: 'employer_email',
    onDelete: 'CASCADE'
});

Employer.hasMany(Job, {
    foreignKey: 'employer_email',
});


module.exports = { Employer, Job, User };