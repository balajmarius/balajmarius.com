import axios from "axios";
import { differenceInMinutes, format } from "date-fns";

import {
  HEVY_API_URL,
  WORKOUTS_BOXING_EXERCISES,
  WORKOUTS_VOLUME,
} from "@/utils/const";

import { isNullOrUndefined, toKilograms, toMinutes } from "@/utils/helpers";

type HevyAPIWorkoutsCountResponse = {
  workout_count: number;
};

type HevyAPIWorkoutsResponse = {
  workouts: ReadonlyArray<{
    end_time: string;
    start_time: string;
    created_at: string;
    exercises: ReadonlyArray<{
      sets: ReadonlyArray<{
        reps?: number;
        weight_kg?: number;
      }>;
    }>;
  }>;
};

type HevyAPIWorkout = HevyAPIWorkoutsResponse["workouts"][number];
type HevyAPIExercise = HevyAPIWorkout["exercises"][number];
type HevyAPIExerciseSet = HevyAPIExercise["sets"][number];

export type Workout = {
  duration: string;
  createdAt: string;
  volume: string;
};

export type Workouts = {
  count: number;
  weights: Workout | null;
  boxing: Workout | null;
};

const instance = axios.create({
  baseURL: HEVY_API_URL,
  headers: {
    "api-key": process.env.HEVY_API_KEY,
  },
});

const calculateVolume = (sets: ReadonlyArray<HevyAPIExerciseSet>) => {
  return sets.reduce((total, set) => {
    if (isNullOrUndefined(set.weight_kg) || isNullOrUndefined(set.reps)) {
      return total;
    }
    return total + set.weight_kg * set.reps;
  }, WORKOUTS_VOLUME);
};

const getWorkout = (workout?: HevyAPIWorkout) => {
  if (isNullOrUndefined(workout)) {
    return null;
  }

  const sets = workout.exercises.flatMap((exercise) => exercise.sets);
  const createdAt = format(workout.created_at, "MMM d");
  const duration = differenceInMinutes(workout.end_time, workout.start_time);
  const volume = calculateVolume(sets);

  return {
    createdAt,
    duration: toMinutes(duration),
    volume: toKilograms(volume),
  };
};

export const getWorkouts = async () => {
  const [workoutsCountResponse, workoutsResponse] = await Promise.all([
    instance.get<HevyAPIWorkoutsCountResponse>("/workouts/count"),
    instance.get<HevyAPIWorkoutsResponse>("/workouts"),
  ]);

  const boxing = workoutsResponse.data.workouts.find(
    (workout) => workout.exercises.length === WORKOUTS_BOXING_EXERCISES
  );
  const weights = workoutsResponse.data.workouts.find(
    (workout) => workout.exercises.length > WORKOUTS_BOXING_EXERCISES
  );

  return {
    boxing: getWorkout(boxing),
    weights: getWorkout(weights),
    count: workoutsCountResponse.data.workout_count,
  };
};
