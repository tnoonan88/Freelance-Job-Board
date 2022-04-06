const sequelize = require('../config/connection');
const User = require('../models/User');
const Employer = require('../models/Employer');
const Job = require('../models/Job')


const userData = require('./userData.json');
const jobData = require('./jobData.json');
const employerData = require('./employerData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const employers = await User.bulkCreate(employerData, {
    individualHooks: true,
    returning: true,
  });

  for (const jobs of jobData) {
    await Job.create({
      ...jobs,
      employer_id: employers[Math.floor(Math.random() * employers.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
