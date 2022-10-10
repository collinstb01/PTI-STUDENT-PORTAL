import axios from "axios";

const API = axios.create({
  baseURL: "https://nos-api.onyint.com/api",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user")).data.token
    }`;
  }
  return req;
});

export const getIP = () => API.get("/admin/get-ip");
export const login = ({ email, password, IP }) =>
  API.post(
    `/admin/login?email=${email}.com&password=${password}`,
    { email, password },
    {
      headers: {
        "Device-Id": `${IP.ip_address}`,
        "Device-Name": `Mac Book`,
      },
    }
  );
export const changedevice = ({ email, code, IP }) =>
  API.post(
    `/admin/confirm-device?email=${email}&code=${code}`,
    { email, code },
    {
      headers: {
        "Device-Id": `${IP.ip_address}`,
        "Device-Name": `Mac Book`,
      },
    }
  );

export const resendcode = (email) =>
  API.post(`/admin/resend-code?email=${email}`, email);

///// Staff Api Routes

export const createstaff = ({
  first_name,
  last_name,
  email,
  phone_number,
  next_of_kin_name,
  next_of_kin_relationship,
  next_of_kin_phone,
  password,
  department,
  unit,
  designation,
  IP,
  address,
}) =>
  API.post(
    `/admin/add-admin?first_name=${first_name}&last_name=${last_name}
&email=${email}&phone_number=${phone_number}&address=${address}
&password=${password}&next_of_kin_name=${next_of_kin_name}
&next_of_kin_phone=${next_of_kin_phone}
&next_of_kin_relationship=${next_of_kin_relationship}
&department=${department}&unit=${unit}&designation=${designation}`,
    {
      first_name,
      last_name,
      email,
      phone_number,
      next_of_kin_name,
      next_of_kin_relationship,
      next_of_kin_phone,
      password,
      department,
      unit,
      designation,
      address,
    },
    {
      headers: {
        "Device-Id": `${IP}`,
        "Device-Name": "Macbook",
      },
    }
  );
// //// users endpoint

export const getuserbysearch = ({ status, start, end, term, field }) =>
  API.get(
    `admin/get-users?status=${status}&start=${start}&end=${end}&term=${field}&field=${term}`,
    { status, start, end, term, field }
  );

export const getUserBypagination = ({
  page,
  status,
  start,
  end,
  term,
  field,
}) =>
  API.get(
    `admin/get-users?page=${page}&status=${status}&start=${start}&end=${end}&term=${field}&field=${term}`,
    { page, status, start, end, term, field }
  );

export const getuserdetails = (id) =>
  API.get(`/admin/get-user?user_id=${id}'`, id, {});

// dashboard routes

export const getdasdata = ({ start, end }) =>
  API.get(`admin/dashboard?start=${start}&end=${end}`, { start, end }, {});

// orders routes

export const getorders = ({ start, end, field, page, pageSize }) =>
  API.get(
    `/admin/orders/all?start=${start}&end=${end}&search_term=${field}&page=${page}&page_size=${pageSize}`,
    { start, end },
    {}
  );

export const getordersdetails = (id) =>
  API.get(`/admin/get-order?order_id=${id}`, id, {});

/// store

export const getstore = ({ start, end, field, page, pageSize }) =>
  API.get(
    `admin/get-stores?start=${start}&end=${end}&page_size=${pageSize}&page=${page}&search_term=${field}`,
    { start, end, field, page, pageSize }
  );

export const getstoredetails = (id) =>
  API.get(`admin/get-store?store_id=${id}`, {});

// change order status

export const change_order_status = ({ id, status }) =>
  API.post(
    `/admin/order/change-status?order_id=${id}&status=${{ id, status }}`,
    {
      status,
      id,
    }
  );
