'use client'

import { useState, useEffect } from 'react'
import { Plus, Timer, Target, TrendingUp, Calendar, Trash2, Edit2, Save, X } from 'lucide-react'

interface Exercise {
  id: string
  name: string
  sets: number
  reps: number
  weight: number
  restTime: number
  completed: boolean
}

interface Workout {
  id: string
  name: string
  date: string
  exercises: Exercise[]
  duration: number
  notes: string
  completed: boolean
}

export default function WorkoutTracker() {
  const [workouts, setWorkouts] = useState<Workout[]>([])
  const [activeWorkout, setActiveWorkout] = useState<Workout | null>(null)
  const [isCreating, setIsCreating] = useState(false)
  const [editingExercise, setEditingExercise] = useState<string | null>(null)
  const [workoutTimer, setWorkoutTimer] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(false)

  // Load workouts from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('workouts')
    if (saved) {
      setWorkouts(JSON.parse(saved))
    }
  }, [])

  // Save workouts to localStorage
  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(workouts))
  }, [workouts])

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isTimerRunning) {
      interval = setInterval(() => {
        setWorkoutTimer(prev => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isTimerRunning])

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return hrs > 0 
      ? `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
      : `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const createNewWorkout = () => {
    const newWorkout: Workout = {
      id: Date.now().toString(),
      name: `Workout ${workouts.length + 1}`,
      date: new Date().toISOString().split('T')[0],
      exercises: [],
      duration: 0,
      notes: '',
      completed: false
    }
    setActiveWorkout(newWorkout)
    setIsCreating(true)
    setWorkoutTimer(0)
  }

  const addExercise = () => {
    if (!activeWorkout) return

    const newExercise: Exercise = {
      id: Date.now().toString(),
      name: 'New Exercise',
      sets: 3,
      reps: 10,
      weight: 0,
      restTime: 60,
      completed: false
    }

    setActiveWorkout({
      ...activeWorkout,
      exercises: [...activeWorkout.exercises, newExercise]
    })
    setEditingExercise(newExercise.id)
  }

  const updateExercise = (exerciseId: string, updates: Partial<Exercise>) => {
    if (!activeWorkout) return

    setActiveWorkout({
      ...activeWorkout,
      exercises: activeWorkout.exercises.map(ex => 
        ex.id === exerciseId ? { ...ex, ...updates } : ex
      )
    })
  }

  const deleteExercise = (exerciseId: string) => {
    if (!activeWorkout) return

    setActiveWorkout({
      ...activeWorkout,
      exercises: activeWorkout.exercises.filter(ex => ex.id !== exerciseId)
    })
  }

  const toggleExerciseComplete = (exerciseId: string) => {
    if (!activeWorkout) return

    updateExercise(exerciseId, { 
      completed: !activeWorkout.exercises.find(ex => ex.id === exerciseId)?.completed 
    })
  }

  const saveWorkout = () => {
    if (!activeWorkout) return

    const completedWorkout = {
      ...activeWorkout,
      duration: workoutTimer,
      completed: true
    }

    const existingIndex = workouts.findIndex(w => w.id === activeWorkout.id)
    if (existingIndex !== -1) {
      setWorkouts(workouts.map(w => w.id === activeWorkout.id ? completedWorkout : w))
    } else {
      setWorkouts([...workouts, completedWorkout])
    }

    setActiveWorkout(null)
    setIsCreating(false)
    setIsTimerRunning(false)
    setWorkoutTimer(0)
  }

  const cancelWorkout = () => {
    setActiveWorkout(null)
    setIsCreating(false)
    setIsTimerRunning(false)
    setWorkoutTimer(0)
  }

  const startWorkout = (workout: Workout) => {
    setActiveWorkout(workout)
    setWorkoutTimer(0)
    setIsTimerRunning(true)
  }

  if (activeWorkout) {
    return (
      <section className="section-padding bg-gradient-to-b from-neutral-950 to-neutral-900 min-h-screen">
        <div className="container-custom">
          {/* Workout Header */}
          <div className="luxury-card p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <div>
                <input
                  type="text"
                  value={activeWorkout.name}
                  onChange={(e) => setActiveWorkout({ ...activeWorkout, name: e.target.value })}
                  className="text-3xl font-bold bg-transparent text-primary-400 border-none outline-none muscle-text"
                />
                <p className="text-neutral-400">{activeWorkout.date}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Timer className="w-5 h-5 text-accent-400" />
                  <span className="text-2xl font-bold text-accent-400">
                    {formatTime(workoutTimer)}
                  </span>
                </div>
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className={`px-4 py-2 rounded-lg font-bold ${
                    isTimerRunning 
                      ? 'bg-red-600 hover:bg-red-700 text-white' 
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  {isTimerRunning ? 'Pause' : 'Start'}
                </button>
              </div>
            </div>
          </div>

          {/* Exercises */}
          <div className="space-y-4 mb-8">
            {activeWorkout.exercises.map((exercise, index) => (
              <div key={exercise.id} className="luxury-card p-6">
                {editingExercise === exercise.id ? (
                  <div className="space-y-4">
                    <input
                      type="text"
                      value={exercise.name}
                      onChange={(e) => updateExercise(exercise.id, { name: e.target.value })}
                      className="w-full text-xl font-bold bg-neutral-800/50 border border-neutral-600 rounded-lg px-4 py-2 text-white"
                      placeholder="Exercise name"
                    />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <label className="block text-sm text-neutral-400 mb-1">Sets</label>
                        <input
                          type="number"
                          value={exercise.sets}
                          onChange={(e) => updateExercise(exercise.id, { sets: parseInt(e.target.value) })}
                          className="w-full bg-neutral-800/50 border border-neutral-600 rounded px-3 py-2 text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-neutral-400 mb-1">Reps</label>
                        <input
                          type="number"
                          value={exercise.reps}
                          onChange={(e) => updateExercise(exercise.id, { reps: parseInt(e.target.value) })}
                          className="w-full bg-neutral-800/50 border border-neutral-600 rounded px-3 py-2 text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-neutral-400 mb-1">Weight (kg)</label>
                        <input
                          type="number"
                          value={exercise.weight}
                          onChange={(e) => updateExercise(exercise.id, { weight: parseFloat(e.target.value) })}
                          className="w-full bg-neutral-800/50 border border-neutral-600 rounded px-3 py-2 text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-neutral-400 mb-1">Rest (sec)</label>
                        <input
                          type="number"
                          value={exercise.restTime}
                          onChange={(e) => updateExercise(exercise.id, { restTime: parseInt(e.target.value) })}
                          className="w-full bg-neutral-800/50 border border-neutral-600 rounded px-3 py-2 text-white"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setEditingExercise(null)}
                        className="btn-primary px-4 py-2 text-sm flex items-center gap-2"
                      >
                        <Save className="w-4 h-4" />
                        Save
                      </button>
                      <button
                        onClick={() => deleteExercise(exercise.id)}
                        className="btn-secondary px-4 py-2 text-sm flex items-center gap-2"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => toggleExerciseComplete(exercise.id)}
                        className={`w-6 h-6 rounded-full border-2 ${
                          exercise.completed 
                            ? 'bg-green-500 border-green-500' 
                            : 'border-neutral-600'
                        }`}
                      >
                        {exercise.completed && (
                          <svg className="w-4 h-4 text-white mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                      <div>
                        <h4 className={`text-xl font-bold ${exercise.completed ? 'text-green-400 line-through' : 'text-primary-400'}`}>
                          {exercise.name}
                        </h4>
                        <p className="text-neutral-400">
                          {exercise.sets} sets × {exercise.reps} reps
                          {exercise.weight > 0 && ` @ ${exercise.weight}kg`}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setEditingExercise(exercise.id)}
                      className="text-neutral-400 hover:text-primary-400"
                    >
                      <Edit2 className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            ))}

            <button
              onClick={addExercise}
              className="w-full luxury-card p-6 flex items-center justify-center gap-3 text-neutral-400 hover:text-primary-400 transition-colors border-2 border-dashed border-neutral-600 hover:border-primary-500"
            >
              <Plus className="w-6 h-6" />
              Add Exercise
            </button>
          </div>

          {/* Notes */}
          <div className="luxury-card p-6 mb-8">
            <h3 className="text-xl font-bold text-primary-400 mb-4 muscle-text">Workout Notes</h3>
            <textarea
              value={activeWorkout.notes}
              onChange={(e) => setActiveWorkout({ ...activeWorkout, notes: e.target.value })}
              className="w-full bg-neutral-800/50 border border-neutral-600 rounded-lg px-4 py-3 text-white placeholder-neutral-400 resize-none h-24"
              placeholder="How did the workout feel? Any observations or achievements..."
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={saveWorkout}
              className="btn-primary px-8 py-3 text-lg muscle-text flex items-center gap-3"
            >
              <Save className="w-5 h-5" />
              Complete Workout
            </button>
            <button
              onClick={cancelWorkout}
              className="btn-secondary px-8 py-3 text-lg muscle-text flex items-center gap-3"
            >
              <X className="w-5 h-5" />
              Cancel
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-gradient-to-b from-neutral-950 to-neutral-900 min-h-screen">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold font-heading premium-text mb-4 muscle-text">
            WORKOUT TRACKER
          </h1>
          <p className="text-xl text-neutral-300">
            Track your progress, log your workouts, and achieve your goals
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="luxury-card p-6 text-center">
            <div className="text-3xl font-bold text-primary-400 mb-2">
              {workouts.filter(w => w.completed).length}
            </div>
            <div className="text-neutral-400 text-sm">Completed Workouts</div>
          </div>
          <div className="luxury-card p-6 text-center">
            <div className="text-3xl font-bold text-accent-400 mb-2">
              {workouts.reduce((total, w) => total + w.exercises.length, 0)}
            </div>
            <div className="text-neutral-400 text-sm">Total Exercises</div>
          </div>
          <div className="luxury-card p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {Math.round(workouts.reduce((total, w) => total + w.duration, 0) / 60)}
            </div>
            <div className="text-neutral-400 text-sm">Minutes Trained</div>
          </div>
          <div className="luxury-card p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {workouts.length > 0 ? Math.round(workouts.reduce((total, w) => total + w.duration, 0) / workouts.length / 60) : 0}
            </div>
            <div className="text-neutral-400 text-sm">Avg Duration</div>
          </div>
        </div>

        {/* Create New Workout */}
        <div className="text-center mb-12">
          <button
            onClick={createNewWorkout}
            className="btn-primary text-xl px-12 py-4 muscle-text flex items-center gap-3 mx-auto"
          >
            <Plus className="w-6 h-6" />
            Start New Workout
          </button>
        </div>

        {/* Recent Workouts */}
        <div>
          <h2 className="text-3xl font-bold text-primary-400 mb-8 muscle-text">Recent Workouts</h2>
          {workouts.length === 0 ? (
            <div className="luxury-card p-12 text-center">
              <Target className="w-16 h-16 text-neutral-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-neutral-400 mb-2">No workouts yet</h3>
              <p className="text-neutral-500">Start your first workout to begin tracking your progress!</p>
            </div>
          ) : (
            <div className="grid gap-6">
              {workouts.slice(-5).reverse().map((workout) => (
                <div key={workout.id} className="luxury-card p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary-400 muscle-text">{workout.name}</h3>
                      <p className="text-neutral-400">{new Date(workout.date).toLocaleDateString()}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-accent-400 font-bold">{formatTime(workout.duration)}</div>
                      <div className="text-neutral-400 text-sm">{workout.exercises.length} exercises</div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    {workout.exercises.slice(0, 3).map((exercise) => (
                      <div key={exercise.id} className="bg-neutral-800/50 rounded-lg p-3">
                        <div className="font-medium text-neutral-200">{exercise.name}</div>
                        <div className="text-neutral-400 text-sm">
                          {exercise.sets}×{exercise.reps} @ {exercise.weight}kg
                        </div>
                      </div>
                    ))}
                    {workout.exercises.length > 3 && (
                      <div className="bg-neutral-800/50 rounded-lg p-3 flex items-center justify-center">
                        <span className="text-neutral-400">+{workout.exercises.length - 3} more</span>
                      </div>
                    )}
                  </div>

                  {workout.notes && (
                    <div className="bg-neutral-800/50 rounded-lg p-3 mb-4">
                      <p className="text-neutral-300 text-sm italic">"{workout.notes}"</p>
                    </div>
                  )}

                  <button
                    onClick={() => startWorkout(workout)}
                    className="btn-secondary px-6 py-2 text-sm muscle-text"
                  >
                    Repeat Workout
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
