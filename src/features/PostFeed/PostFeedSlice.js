import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const loadPosts = createAsyncThunk("posts/loadPosts", async (subreddit) => {
  try {
    const url = `https://www.reddit.com/r/${subreddit}/hot.json`;
    const response = await fetch(url);

    if (response.ok) {
      const json = await response.json();
      return json.data.children;
    }
  } catch (error) {
    console.log(error);
  }
});

const loadSearchedPosts = createAsyncThunk(
  "posts/loadSearchedPosts",
  async (searchTerm) => {
    try {
      const baseUrl = "https://www.reddit.com/search";
      const url = `${baseUrl}?q=${encodeURIComponent(searchTerm)}`;

      const response = await fetch(url);

      if (response.ok) {
        const json = await response.json();
        return json.data.children;
      } 
    } catch (error) {
      console.log(error);
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    isLoading: false,
    hasFailed: false,
    searchLoading: false,
    searchHasFailed: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPosts.pending, (state) => {
        state.isLoading = true;
        state.hasFailed = false;
      })
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasFailed = false;
        state.data = action.payload;
      })
      .addCase(loadPosts.rejected, (state) => {
        state.hasFailed = true;
        state.isLoading = false;
        state.data = [];
      })
      .addCase(loadSearchedPosts.pending, (state) => {
        state.searchLoading = true;
        state.searchHasFailed = false;
      })
      .addCase(loadSearchedPosts.fulfilled, (state, action) => {
        state.searchLoading = false;
        state.searchHasFailed = false;
        state.data = action.payload;
      })
      .addCase(loadSearchedPosts.rejected, (state) => {
        state.searchHasFailed = true;
        state.searchLoading = false;
        state.data = [];
      });
  },
});

export const selectPosts = (state) => state.posts.data;
export const isLoading = (state) => state.posts.isLoading;

export { loadPosts, loadSearchedPosts };
export default postSlice.reducer;
