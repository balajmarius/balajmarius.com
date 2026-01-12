// ABOUTME: Fetches workout data from the Hevy API.
// ABOUTME: API docs: https://api.hevyapp.com/docs/#/Workouts/get_v1_workouts

import { differenceInMinutes } from "date-fns";

import { HEVY_API_URL } from "@/utils/const";

type WorkoutsCountResponse = {
  workout_count: number;
};

type WorkoutSet = {
  reps: number;
  weight_kg: number;
};

type WorkoutExercise = {
  sets: WorkoutSet[];
};

type Workout = {
  created_at: string;
  start_time: string;
  end_time: string;
  exercises: WorkoutExercise[];
};

type WorkoutsResponse = {
  workouts: Workout[];
};

export const getWorkoutsCount = async () => {
  const response = await fetch(`${HEVY_API_URL}/workouts/count`, {
    headers: {
      "api-key": process.env.HEVY_API_KEY ?? "",
    },
  });

  console.log(process.env.HEVY_API_KEY);

  console.log(response);

  if (!response.ok) {
    throw new Error(`Hevy API error: ${response.status}`);
  }

  const data: WorkoutsCountResponse = await response.json();

  console.log(data);

  return data.workout_count;
};

const formatDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}:${mins.toString().padStart(2, "0")} hrs`;
};

export const getWorkout = async () => {
  const response = await fetch(`${HEVY_API_URL}/workouts?page=1&pageSize=1`, {
    headers: {
      "api-key": process.env.HEVY_API_KEY ?? "",
    },
  });

  if (!response.ok) {
    throw new Error(`Hevy API error: ${response.status}`);
  }

  const data: WorkoutsResponse = await response.json();
  const workout = data.workouts[0];

  const startTime = new Date(workout.start_time);
  const endTime = new Date(workout.end_time);
  const durationMinutes = differenceInMinutes(endTime, startTime);

  const volume = workout.exercises.reduce((total, exercise) => {
    return (
      total +
      exercise.sets.reduce((setTotal, set) => {
        return setTotal + set.reps * set.weight_kg;
      }, 0)
    );
  }, 0);

  return {
    time: formatDuration(durationMinutes),
    createdAt: workout.created_at,
    volume: Math.round(volume),
  };
};
