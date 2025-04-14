import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the types of the API response if needed (optional placeholder)
type EmptyApiEndpoints = Record<string, never>;

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BASE_URL_DEV,
  }),
  endpoints: (builder) => ({} as EmptyApiEndpoints), // Type assertion for empty endpoints
  tagTypes: [
    "allGetFriendRequest",
    "posts",
    "AllRecentMembers",
    "myServices",
    "getServiceById",
    "allOrders",
    "AllOrdersByMember",
    "reviewByUserAndService",
    "MyOrders",
    "MySuccessStory",
    "allTickets",
  ] as const, // Optional: make tagTypes a readonly tuple
});

export default apiSlice;
