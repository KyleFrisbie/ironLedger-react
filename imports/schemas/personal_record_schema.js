const PersonalRecordSchema = new SimpleSchema({
  date: {
    type: Date
  },
  qualifier: {
    type: String,
    allowedValues: ['estimated', 'actual']
  },
  stress: {
    type: Number
  },
  stressUnit: {
    type: String,
    allowedValues: ['lbs', 'kg', 'm', 'ft']
  },
  strain: {
    type: Number
  },
  strainUnit: {
    type: String,
    allowedValues: ['reps', 'sec', 'min', 'kcal']
  }
});

export default PersonalRecordSchema;