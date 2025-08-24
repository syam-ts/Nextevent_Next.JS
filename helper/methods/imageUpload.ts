import axios from "axios";
import { getConfig } from "../../utils/config";

const { cloudinay_url } = getConfig();

const cloudinaryInstance = axios.create({
    baseURL: `${cloudinay_url}`,
    headers: {
        "Content-Type": "multipart/form-data",
    },
});

export const ImageUpload = async (file: any): Promise<string> => {
    if (!file) throw new Error("no file found");
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "next-event"),
        data.append("cloud_name", "dusbc29s2");

    // console.log("file", [...data.entries()]);
    const response = await cloudinaryInstance.post("", data);
    console.log("uploaded image: ", response.data.secure_url);

    return response.data.secure_url;
};
