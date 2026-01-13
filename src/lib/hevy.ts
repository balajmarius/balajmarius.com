import axios from "axios";
import { format, differenceInMinutes } from "date-fns";

import {
  isNullOrUndefined,
  toMinutes,
  toKilograms,
} from "@/utils/helpers";

import {
  HEVY_API_URL,
  WORKOUTS_VOLUME,
  WORKOUTS_BOXING_EXERCISES,
} from "@/utils/const";

type ExerciseSet = {
  reps?: number;
  weight_kg?: number;
};

type Workout = {
  end_time: string;
  start_time: string;
  created_at: string;
  exercises: ReadonlyArray<{
    sets: ReadonlyArray<ExerciseSet>;
  }>;
};

type WorkoutsCountResponse = {
  workout_count: number;
};

type WorkoutsResponse = {
  workouts: ReadonlyArray<Workout>;
};

export type WorkoutDetails = {
  duration: string;
  createdAt: string;
  volume: string;
};

export type WorkoutsStats = {
  count: number;
  weights: WorkoutDetails | null;
  boxing: WorkoutDetails | null;
};

const instance = axios.create({
  baseURL: HEVY_API_URL,
  headers: {
    "api-key": process.env.HEVY_API_KEY,
  },
});

instance.interceptors.response.use((response) => response.data);

const calculateVolume = (sets: ReadonlyArray<ExerciseSet>) => {
  return sets.reduce((total, set) => {
    if (isNullOrUndefined(set.weight_kg) || isNullOrUndefined(set.reps)) {
      return total;
    }
    return total + set.weight_kg * set.reps;
  }, WORKOUTS_VOLUME);
};

const getWorkoutDetails = (workout?: Workout): WorkoutDetails | null => {
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

export const getWorkouts = async (): Promise<WorkoutsStats> => {
  const [workoutsCountResponse, workoutsResponse] = await Promise.all([
    instance.get<never, WorkoutsCountResponse>("/workouts/count"),
    instance.get<never, WorkoutsResponse>("/workouts"),
  ]);

  const boxing = workoutsResponse.workouts.find(
    (workout) => workout.exercises.length === WORKOUTS_BOXING_EXERCISES
  );
  const weights = workoutsResponse.workouts.find(
    (workout) => workout.exercises.length > WORKOUTS_BOXING_EXERCISES
  );

  return {
    boxing: getWorkoutDetails(boxing),
    weights: getWorkoutDetails(weights),
    count: workoutsCountResponse.workout_count,
  };
};
