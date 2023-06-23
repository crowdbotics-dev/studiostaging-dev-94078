import axios from "axios"
const studiostagingdevAPI = axios.create({
  baseURL: "https://studiostaging-dev-94078.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return studiostagingdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return studiostagingdevAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return studiostagingdevAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_studooo_list(payload) {
  return studiostagingdevAPI.get(`/api/v1/studooo/`)
}
function api_v1_studooo_create(payload) {
  return studiostagingdevAPI.post(`/api/v1/studooo/`, payload.data)
}
function api_v1_studooo_retrieve(payload) {
  return studiostagingdevAPI.get(`/api/v1/studooo/${payload.id}/`)
}
function api_v1_studooo_update(payload) {
  return studiostagingdevAPI.put(`/api/v1/studooo/${payload.id}/`, payload.data)
}
function api_v1_studooo_partial_update(payload) {
  return studiostagingdevAPI.patch(
    `/api/v1/studooo/${payload.id}/`,
    payload.data
  )
}
function api_v1_studooo_destroy(payload) {
  return studiostagingdevAPI.delete(`/api/v1/studooo/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return studiostagingdevAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return studiostagingdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return studiostagingdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return studiostagingdevAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return studiostagingdevAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return studiostagingdevAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function rest_auth_registration_create(payload) {
  return studiostagingdevAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return studiostagingdevAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
function rest_auth_user_retrieve(payload) {
  return studiostagingdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return studiostagingdevAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return studiostagingdevAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_studooo_list,
  api_v1_studooo_create,
  api_v1_studooo_retrieve,
  api_v1_studooo_update,
  api_v1_studooo_partial_update,
  api_v1_studooo_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
