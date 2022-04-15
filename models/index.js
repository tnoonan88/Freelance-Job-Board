const Employer = require('./Employer');
const Job = require('./Job');
const User = require('./User');

// Write associations
// Job.belongsTo(Employer, {
//     foreignKey: 'employer_email',
//     onDelete: 'CASCADE'
// });

Job.belongsTo(User, {
    foreignKey: 'employer_id',
    onDelete: 'CASCADE'
});

// Employer.hasMany(Job, {
//     foreignKey: 'employer_email',
// });

User.hasMany(Job, {
    foreignKey: 'employer_id',
});

module.exports = { Employer, Job, User };