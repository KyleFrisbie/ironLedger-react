const SetSchema = new SimpleSchema({
  setNumber: {
    type: Number
  },
  restTime: {
    type: Number
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

export default SetSchema;