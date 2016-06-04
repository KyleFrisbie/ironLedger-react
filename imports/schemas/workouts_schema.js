import WorkoutExerciseSchema from './workout_exercise_schema';

const WorkoutSchema = new SimpleSchema({
  author: {
    type: String,
    label: "Author"
  },
  publishDate: {
    type: Date,
    label: "Publish Date"
  },
  name: {
    type: String,
    max: 200
  },
  description: {
    type: String,
    label: "Workout Description"
  },
  exercises: {
    type: [WorkoutExerciseSchema],
    label: "Exercises",
    optional: true
  }
});

export default WorkoutSchema;