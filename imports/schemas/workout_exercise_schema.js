import ExerciseSchema from './exercises_schema';
import SetSchema from './exercises_schema';

const WorkoutExerciseSchema = new SimpleSchema({
  exercise: {
    type: ExerciseSchema,
    label: "Exercise"
  },
  sets: {
    type: [SetSchema],
    blackbox: true
  }
});

export default WorkoutExerciseSchema;