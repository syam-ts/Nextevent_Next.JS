import toast from "react-hot-toast";

export const successToastOrganizer = (text: string) => {
    return (
        toast(text, {
  style: {
    color: 'blue',
    border: '1px solid black',
  },
})
    )
 };
