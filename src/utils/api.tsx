import axios, { AxiosResponse } from "axios";

const token = localStorage.getItem("token");

const params = {
  headers: {
    'Authorization': `Bearer ${token}`, // Include your API key in the Authorization header
    'Content-Type': 'application/json', // Adjust the content type as needed
  },
};

// Define a type for API responses
interface ApiResponse<T = any> {
  data: T;
}

export const fetchDataFromApi = async (url: string): Promise<ApiResponse | undefined> => {
  try {
    const { data }: AxiosResponse = await axios.get(`${process.env.REACT_APP_BASE_URL}${url}`, params);
    return data;
  } catch (error) {
    console.error("Error in fetchDataFromApi:", error);
    return undefined;
  }
};

export const uploadImage = async (url: string, formData: FormData): Promise<AxiosResponse | undefined> => {
  try {
    const response: AxiosResponse = await axios.post(`${process.env.REACT_APP_BASE_URL}${url}`, formData, params);
    return response;
  } catch (error) {
    console.error("Error in uploadImage:", error);
    return undefined;
  }
};

export const postData = async (url: string, formData: Record<string, any>): Promise<ApiResponse | undefined> => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`, // Include your API key in the Authorization header
        'Content-Type': 'application/json', // Adjust the content type as needed
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errorData = await response.json();
      return errorData;
    }
  } catch (error) {
    console.error("Error in postData:", error);
    return undefined;
  }
};

export const editData = async (url: string, updatedData: Record<string, any>): Promise<AxiosResponse | undefined> => {
  try {
    const response: AxiosResponse = await axios.put(`${process.env.REACT_APP_BASE_URL}${url}`, updatedData, params);
    return response;
  } catch (error) {
    console.error("Error in editData:", error);
    return undefined;
  }
};

export const deleteData = async (url: string): Promise<AxiosResponse | undefined> => {
  try {
    const response: AxiosResponse = await axios.delete(`${process.env.REACT_APP_BASE_URL}${url}`, params);
    return response;
  } catch (error) {
    console.error("Error in deleteData:", error);
    return undefined;
  }
};

export const deleteImages = async (url: string, image: any): Promise<AxiosResponse | undefined> => {
  try {
    const response: AxiosResponse = await axios.delete(`${process.env.REACT_APP_BASE_URL}${url}`, {
      ...params,
      data: image, // If you need to send image data in delete request
    });
    return response;
  } catch (error) {
    console.error("Error in deleteImages:", error);
    return undefined;
  }
};

// Resend OTP
export const resendOtp = async (url: string): Promise<ApiResponse | undefined> => {
  try {
    const token = localStorage.getItem("token");

    const { data }: AxiosResponse = await axios.post(`${process.env.REACT_APP_BASE_URL}${url}`, {}, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    return data;
  } catch (error) {
    // console.error("Error in resendOtp:", error.response?.data || error.message);
    throw error;
  }
};
