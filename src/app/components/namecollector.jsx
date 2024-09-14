import { Input } from "@/components/ui/input";
import Button from "../components/button";
import { useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";
export default function Namecollection({ address }) {
  const [inputVal, setInputVal] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);
    try {
      const response = await axios.post("/api/eligible", {
        name: inputVal,
        address,
      });

      console.log("Server response: ", response.status);
      setResult({
        msg: "You've submitted your entry successfully ✅",
        flag: true,
      });
    } catch (err) {
      console.error("Error saving eligible address:", err);
      setResult({
        msg: "Unsuccessful attempt ❌",
        flag: false,
      });
    } finally {
      setisLoading(false);
    }
  };
  return (
    <>
      <h1 className="text-xl font-bold text-white text-center mb-4">
        How would you like your name on the NFT?
      </h1>
      <div className="">
        <form
          onSubmit={handleSubmit}
          className=" flex flex-row items-center w-[650px]"
        >
          <Input
            id="name"
            type="text"
            value={inputVal}
            placeholder="Enter name"
            onChange={(e) => setInputVal(e.target.value)}
          />{" "}
          <Button name="Send" disabled={isLoading} />
        </form>
        <br />
        <br />
        <div className="flex flex-col items-center w-[650px]">
          {isLoading ? (
            <Loader2 className="h-8 w-8 animate-spin text-white" />
          ) : (
            result && (
              <p
                className={
                  result.flag
                    ? "text-green-600 text-center"
                    : "text-red-600 text-center"
                }
              >
                {result.msg}
              </p>
            )
          )}
        </div>
      </div>
    </>
  );
}
