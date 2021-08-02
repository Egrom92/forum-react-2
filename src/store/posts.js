import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [
        {
            id: 1,
            title: 'Post title number 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque minima, repudiandae sunt vel veritatis! Accusantium consequuntur, distinctio, dolores dolorum eaque fugit in labore magni maxime modi nam possimus praesentium quibusdam sit tempore vero voluptatum. Atque cumque distinctio eius optio sit veniam vitae? A adipisci cum deserunt, dolor ea eligendi eos esse ex excepturi harum in incidunt iure laudantium libero magni mollitia nemo nostrum officia provident quasi quibusdam quisquam sequi, tenetur unde voluptatum. Accusantium amet eos fuga ipsam iusto modi qui temporibus totam vero.',
        },
        {
            id: 2,
            title: 'Post title number 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque minima, repudiandae sunt vel veritatis! Accusantium consequuntur, distinctio, dolores dolorum eaque fugit in labore magni maxime modi nam possimus praesentium quibusdam sit tempore vero voluptatum. Atque cumque distinctio eius optio sit veniam vitae? A adipisci cum deserunt, dolor ea eligendi eos esse ex excepturi harum in incidunt iure laudantium libero magni mollitia nemo nostrum officia provident quasi quibusdam quisquam sequi, tenetur unde voluptatum. Accusantium amet eos fuga ipsam iusto modi qui temporibus totam vero.',
        }
    ]
};

export const postsSlice = createSlice({
    name: "posts",

    initialState,

    reducers: {
        add(state, action) {
            const {title, content} = action.payload
            const item = {
                id: 1 + Math.max(0, ...state.list.map((x) => x.id)),
                title,
                content
            };
            state.list.push(item);
        },


        remove(state, action) {
            state.list = state.list.filter((el) => el.id !== action.payload);
        },

    }
});

export const { add, remove } = postsSlice.actions;

export default postsSlice.reducer;
