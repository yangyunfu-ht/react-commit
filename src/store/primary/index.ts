import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/store'

interface ColorPrimary {
  value: string
}

const initialState: ColorPrimary = {
  value: '#1890ff'
}

const colorPrimary = createSlice({
  name: 'primaryer',
  initialState,
  reducers: {
    setColorPrimary: (state, action) => {
      state.value = action.payload
    },

    resetColorPrimary: (state) => {
      state.value = '#1890ff'
    }
  }
})

export const { setColorPrimary, resetColorPrimary } = colorPrimary.actions

export const AppColorPrimary = (state: RootState) => state.primaryer.value

export default colorPrimary.reducer