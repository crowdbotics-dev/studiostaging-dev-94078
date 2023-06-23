import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_studooo_list = createAsyncThunk(
  "studooos/api_v1_studooo_list",
  async payload => {
    const response = await apiService.api_v1_studooo_list(payload)
    return response.data
  }
)
export const api_v1_studooo_create = createAsyncThunk(
  "studooos/api_v1_studooo_create",
  async payload => {
    const response = await apiService.api_v1_studooo_create(payload)
    return response.data
  }
)
export const api_v1_studooo_retrieve = createAsyncThunk(
  "studooos/api_v1_studooo_retrieve",
  async payload => {
    const response = await apiService.api_v1_studooo_retrieve(payload)
    return response.data
  }
)
export const api_v1_studooo_update = createAsyncThunk(
  "studooos/api_v1_studooo_update",
  async payload => {
    const response = await apiService.api_v1_studooo_update(payload)
    return response.data
  }
)
export const api_v1_studooo_partial_update = createAsyncThunk(
  "studooos/api_v1_studooo_partial_update",
  async payload => {
    const response = await apiService.api_v1_studooo_partial_update(payload)
    return response.data
  }
)
export const api_v1_studooo_destroy = createAsyncThunk(
  "studooos/api_v1_studooo_destroy",
  async payload => {
    const response = await apiService.api_v1_studooo_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const studooosSlice = createSlice({
  name: "studooos",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_studooo_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_studooo_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_studooo_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_studooo_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_studooo_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_studooo_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_studooo_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_studooo_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_studooo_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_studooo_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_studooo_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_studooo_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_studooo_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_studooo_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_studooo_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_studooo_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_studooo_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_studooo_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_studooo_list,
  api_v1_studooo_create,
  api_v1_studooo_retrieve,
  api_v1_studooo_update,
  api_v1_studooo_partial_update,
  api_v1_studooo_destroy,
  slice: studooosSlice
}
