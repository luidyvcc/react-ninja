'use strict'

import { UPDATE_ADDRESS } from "./actions"

export const updateAdress = (data) => ({
  type: UPDATE_ADDRESS,
  payload: data
})
