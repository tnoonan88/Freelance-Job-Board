const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Job extends Model {}

Job.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    employer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      },
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    skills: {
        type: DataTypes.STRING,
    },
    salary: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        // references: {
        //   model: 'employer',
        //   key: 'email'
        // },
        validate: {
          isEmail: true
        },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'job',
  }
);

module.exports = Job;
