export const  UPDATED_SMURFS = 'UPDATED_SMURFS'

export function updatedSmurfs(newSmurf) {
    return {
      type: UPDATED_SMURFS,
      payload: newSmurf
    }
  } 