import {create} from "zustand";
import axios from "axios";

export const useColorApi = create((set) => ({
    colorData: null,
    schemeData: null,

    getColor: async (hex) => {
        try {
            const url = `https://www.thecolorapi.com/id?hex=${hex.replace('#', '')}&format=json`;
            const response = await axios.get(url);
            console.log("url: ", url);
            // Save to Zustand state
            set({ colorData: response.data });
            console.log(response);
        } catch (error) {
            console.error("Error fetching color:", error);
            set({ colorData: null });
        }
    },

    getScheme: async (hex) => {
        try {
            const url = `https://www.thecolorapi.com/scheme?hex=${hex}&format=json&mode=analogic&count=6`;
            const response = await axios.get(url);

            set({schemeData:response.data});
        } catch (error) {
            console.error("Error getting Scheme: ", error);
            set({schemeData:null});
        }
    }
}))